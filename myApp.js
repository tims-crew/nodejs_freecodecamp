const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const personSchema = new Schema({
    name: {type: String, required: true},
    age:  Number,
    favoriteFoods: [String]
});

const Person = mongoose.model('Person', personSchema);
const tom = new  Person("Thomphson", 14, ["burgers", "pizza"]);
