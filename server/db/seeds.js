use buckets;
db.dropDatabase();

db.activities.insertMany([
  {
    activity: "bungy jumping",
    location: "Sutherland",
  },
  {
    activity: "shark diving",
    location: "Sutherland",
  },
  {
    activity: "ballooning",
    location: "Sutherland",
  }
]);
