use buckets;
db.dropDatabase();

db.activities.insertMany([
  {
    activity: "bungy jumping",
    location: "New Zealand",
  },
  {
    activity: "shark diving",
    location: "Sutherland",
  },
  {
    activity: "ballooning",
    location: "Nevada",
  }
]);
