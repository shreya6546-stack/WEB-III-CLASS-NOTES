db.Students.insertOne(
    {
        _id: 1,
        name: "ankit",
        age: 23
    }
)

db.Students.find()

db.Faculty.find()

db.students.insertOne(
    {
        name: "payal",
        age: 20,
        gender: "female",
        cgpa: 7.9
    }
)

db.students.insertMany([
    {
        name:"shivam",
        age: 23,
        gender: "male",
        cgpa: 8.5,
        course: "BTech"
    },
    {
        name:"rahul",
        age: 20,
        gender: "male",
        cgpa: 7.5,
        course: "BCA"
    },
    {
        name:"priya",
        age: 28,
        gender: "female",
        cgpa: 9.0,
        course: "BTech"
    },
    {
        name:"erina",
        age: 19,
        gender: "female",
        cgpa: 8.7,
        course: "BCA"
    },
    {
        name:"raj",
        age: 27,
        gender: "male",
        cgpa: 7.0,
        course: "BTech"
    },
    {
        name:"shivanya",
        age: 23,
        gender: "female",
        cgpa: 9.5,
        course: "BTech"
    },
    {
        name:"aman",
        age: 29,
        gender: "male",
        cgpa: 8.9,
        course: "BCA"
    }

])

db.Students.find({
    name:"rahul"
})

db.Students.find({
     _id: ObjectId('6ac76bc0abfc413318bedec7')
})

db.Students.find(

    {course: "BCA"}
    
)

db.Students.findOne(
    {course: "BTech"}
    
)

db.Students.deleteOne({
    name: "raj"
})

db.Students.deleteMany({
    gender: "female"
})

db.Students.updateOne(
    { _id: ObjectId('6ac76bc0abfc413318bedecc') },
    { $set: { age: 25 } }
)

db.Students.updateMany(
    {gender: "male"},
    {$set: {course: 'MCA'}}
)



db.students.find({
    age:{$gt:20}
})


db.students.find({
    gender:{$eq:'female'}
})


db.students.find({
    $and:[{age:{$gt:26}}, {gender:{$eq:'female'}}]                
})


db.students.find(
    {},
    {name:1, age:1}                            //gives name, age, id
)


db.students.find(
    {},
    {name:1, age:1, _id:0}                      //gives only name and age abd no id
)


db.students.find({
    age:{$lt:30}
}).sort({age:1})                                 //sort in ascending order according to age


db.students.find({
    age:{$lt:30}
}).sort({age:-1})                                // sort in descending order according to age


db.students.find().skip(3)                       // skip first 3 records


db.students.find().limit(3)                      //gives only first 3 records


