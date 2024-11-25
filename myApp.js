require('dotenv').config();
let mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect(process.env.MONGO_URI);

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
	janeFonda.save( (err, data) => {
		if (err) return console.error(err);
		done(null, data);
	})
};

// (4) Create many People with `Model.create()`
var arrayOfPeople = [
	{name: "Frankie", age: 74, favoriteFoods: ["Del Taco"]},
	{name: "Sol", age: 76, favoriteFoods: ["roast chicken"]},
	{name: "Robert", age: 78, favoriteFoods: ["wine"]}
];

// const createManyPeople = (arrayOfPeople, done) => {
// 	Person.create(arrayOfPeople, (err, people) => {
// 		if (err) {
// 			return done(err);
// 		}
// 		return done(null, people);
// 	});
// };

var createManyPeople = function(arrayOfPeople, done) {
	Person.create(arrayOfPeople, function (err, people) {
		if (err) return console.log(err);
		done(null, people);
	});
};

const findPeopleByName = (personName, done) => {
	Person.find({name: personName}, function (err, people) {
		if (err) return console.log(err)
		done(null, people);
	})
};

const findOneByFood = (food, done) => {
	Person.findOne({favoriteFoods: food}, function (err, findFood) {
		if (err) return console.log(err)
		done(null, findFood);
	})
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

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
