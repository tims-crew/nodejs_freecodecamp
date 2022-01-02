const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const personSchema = new Schema({
    name: {type: String, required: true},
    age:  Number,
    favoriteFoods: [String]
});

const Person = mongoose.model('Person', personSchema);
console.log(Person);

mongoose.connect("mongodb+srv://user0:qwerty123@cluster0.khnxo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });