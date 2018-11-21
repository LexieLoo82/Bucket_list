const PubSub = require('../helpers/pub_sub.js');
const ActivityView = require('./activity_view.js');


const ListView = function(container) {
  this.container = container;
};


ListView.prototype.bindEvents = function () {
  PubSub.subscribe('Activities:data-loaded', (event) => {
    this.render(event.detail);
  })
};


ListView.prototype.render = function (activities) {
  this.container.innerHTML = '';
  const activityView = new ActivityView(this.container);
  activities.forEach((activity) => activityView.render(activity));
};


module.exports = ListView;
