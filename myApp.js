require('dotenv').config();
let mongoose = require('mongoose');

// useNewUrlParser and useUnifiedTopology are deprecated with at least version 8.8.4
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(process.env.MONGO_URI);

const Schema = mongoose.Schema;

const personSchema = new Schema({
	name: { type: String, required: true },
	age: Number,
	favoriteFoods: [String]
});

// (2) Create a Model
let Person = mongoose.model("Person", personSchema);

// (3) Create and save a record of a model
const createAndSavePerson = (done) => {
	let janeFonda = new Person({name: "Jane Fonda", age: 84, favoriteFoods: ["eggs", "fish", "fresh fruit"]});
	
	// Apparently versions of mongoose past 5.11 no longer accept callback functions for Model.prototype.save

	// janeFonda.save( (err, data) => {
	// 	if (err) return done(err);
	// 	done(null, data);
	// 	console.log(data + ' - is the data print');
	// })
	janeFonda.save();
	// console.log('test my console log'); note this does print to the terminal when I npm run start and pass the challenge on FCC.
};

// (4) Create many People with `Model.create()`
var arrayOfPeople = [
	{name: "Frankie", age: 74, favoriteFoods: ["Del Taco"]},
	{name: "Sol", age: 76, favoriteFoods: ["roast chicken"]},
	{name: "Robert", age: 78, favoriteFoods: ["wine"]}
];

var createManyPeople = function(arrayOfPeople, done) {
	Person.create(arrayOfPeople, function (err, people) {
		if (err) return console.log(err);
		done(null, people);
	});
};

// (5) use model.find() to Search Your Database
const findPeopleByName = (personName, done) => {
	Person.find({name: personName}, function (err, people) {
		if (err) return console.log(err)
		done(null, people);
	})
};

// (6) use model.findOne() to return a single matching document from your database
const findOneByFood = (food, done) => {
	Person.findOne({favoriteFoods: food}, function (err, findFood) {
		if (err) return console.log(err)
		done(null, findFood);
	})
};

// (7) use model.findById() to search your Database By_id
const findPersonById = (personId, done) => {
	Person.findById(personId, function(err, findId) {
		if (err) return console.log(err)
		done(null, findId);
	})
};

// (8) Perform classic updates by running find, edit, then save
const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
