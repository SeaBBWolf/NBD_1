printjson(db.people.updateMany({"first_name":"Antonio"}, {$set: {"hobby":"table tennis"}}))