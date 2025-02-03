```javascript
// Corrected aggregation pipeline
db.users.aggregate([
  { $match: { age: { $gt: 25 } } },
  { $group: { _id: "$city", averageAge: { $avg: "$age" } } },
  { $sort: { averageAge: -1 } }
]);
```