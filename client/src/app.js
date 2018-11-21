const Activity = require('./models/activity.js');
const FormView = require('./views/form_view.js');
const ListView = require('./views/list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log("Hello");
  const bucketListForm = document.querySelector('form#activity-form');
  const activityFormView = new FormView(bucketListForm);
  activityFormView.bindEvents();

  const activitiesContainer = document.querySelector('div#activities');
  const activitiesListView = new ListView(activitiesContainer);
  activitiesListView.bindEvents();

  const url = 'http://localhost:3000/api/activities';
  const activities = new Activity(url);
  activities.bindEvents();
  activities.getData();
});
