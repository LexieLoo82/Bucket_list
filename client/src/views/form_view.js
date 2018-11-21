const PubSub = require('../helpers/pub_sub.js');

const FormView = function(form){
  this.form = form;
};


FormView.prototype.bindEvents = function () {
  this.form.addEventListener("submit", (event) => {
    console.log('formview event', event);
    this.handleSubmit(event);
  });
};


FormView.prototype.handleSubmit = function (event) {
  event.preventDefault();
  console.log('handlesubmit event', event);
  const newActivity = this.createActivity(event.target);
  PubSub.publish('ActivityView:ActivitySubmitted', newActivity);
  // event.target.reset();
};


FormView.prototype.createActivity = function (form) {
  console.log('create activity event', form);
  const newActivity = {
    activity: form.activity.value,
    location: form.location.value,
  };

  return newActivity;
};


module.exports = FormView;
