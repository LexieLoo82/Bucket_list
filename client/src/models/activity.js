const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Activity = function(url){
  this.url = url;
  this.request = new RequestHelper(this.url);
}


Activity.prototype.bindEvents = function () {
  PubSub.subscribe('activityView:activity-delete-clicked', (event) =>{
    this.deleteActivity(event.detail);
  })
  PubSub.subscribe('ActivityView:ActivitySubmitted', (event) => {
    this.postActivity(event.detail);
  });
};

Activity.prototype.getData = function () {
  this.request.get()
  .then((activities) =>{
    PubSub.publish('Activities:data-loaded', activities);
  })
  .catch(console.error);
};

Activity.prototype.postActivity = function (activity) {
  this.request.post(activity)
  .then((activities) => {
PubSub.publish('Activities:data-loaded', activities);
  })
  .catch(console.error);
};

Activity.prototype.deleteActivity = function (activityId) {
this.request.delete(activityId)
.then((activities) =>{
  PubSub.publish('Activities:data-loaded', activities);
})
.catch(console.error);
};


module.exports = Activity;
