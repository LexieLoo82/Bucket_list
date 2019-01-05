const PubSub = require('../helpers/pub_sub.js');


const ActivityView = function(container){
  this.container = container;
};

ActivityView.prototype.render = function (activity) {
  const activityContainer = document.createElement('div');
  activityContainer.id = 'activity-view';

  const activityx = this.createHeading(activity.activity);
  activityContainer.appendChild(activityx);

  const location = this.createDetail('Location', activity.location);
  activityContainer.appendChild(location);

  const deleteButton = this.createDeleteButton(activity._id);
  activityContainer.appendChild(deleteButton);

  this.container.appendChild(activityContainer);
};

ActivityView.prototype.createHeading = function (textContent) {
  const heading = document.createElement('h3');
  heading.textContent = textContent;
  return heading;
};

ActivityView.prototype.createDetail = function (label, text) {
  const detail = document.createElement('p');
  detail.textContent = `${label}: ${text}`;
  return detail;
};

ActivityView.prototype.createDeleteButton = function (activityId) {
  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.value = activityId;
  button.textContent = 'Remove'

  button.addEventListener('click', (event) => {
    PubSub.publish('activityView:activity-delete-clicked', event.target.value);
    console.log(event.target.value);
  });

  return button;
};

// ActivityView.prototype.createCompleteButton = function (activityId) {
//   const button = document.createElement('button');
//   button.classList.add('complete-btn');
//   button.value = activityId;
//   button.textContent = 'Complete'
//
//   button.addEventListener('click', (event) => {
//     PubSub.publish('activityView:activity-completed-clicked', event.target.value);
//     console.log(event.target.value);
//   });
//
//   return button;
// };

module.exports = ActivityView;
