/*You were put in charge of ordering
for tonight 's company get-together, 
and you were given a data set with people 's meal preferences and dietary restrictions. 
Write a

function called orderAVegetarianDish that takes an array of empoloyee objects,
and returns true
if at least 1 person is listed "vegetarian"
on their "mealPreferences".
Otherwise, your
function should
return false.*/

function each(coll, f) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            f(coll[i], i);
        }
    } else {
        for (var key in coll) {
            f(coll[key], key);
        }
    }
}

function filter(array, predicate) {
    var acc = [];
    each(array, function(element, i) {
        if (predicate(element, i)) {
            acc.push(element);
        }
    });
    return acc;
}

function reduce(array, f, acc) {
    if (acc === undefined) {
        acc = array[0];
        array = array.slice(1);
    }
    each(array, function(element, i) {
        acc = f(acc, element, i);
    });
    return acc;
}

var staffA = [{
        name: "Lia",
        department: "Human Resources",
        dietaryRestrictions: [],
        mealPreferences: "no preferences"
    },
    {
        name: "Sebastian",
        department: "Engineering",
        dietaryRestrictions: ["dairy free", "gluten free"],
        mealPreferences: "vegetarian"
    },
    {
        name: "Ari",
        department: "Executive",
        dietaryRestrictions: ["dairy free"],
        mealPreferences: "vegetarian"
    },
    {
        name: "Martha",
        department: "Legal",
        dietaryRestrictions: ["nut allergies"],
        mealPreferences: "non-vegetarian"
    }
];
/*Calling your

function should result in:
    orderAVegetarianDish(staffA); //true
*/


function orderAVegetarianDish(people) {
    return reduce(people, function(isV, person) {
        if (person.mealPreferences === "non-vegetarian")
            return false
    })
    return true
}