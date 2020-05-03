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

/*
1-Write a function called tallEnoughToRide  that takes an array of people objects, 
and returns a an array of names of people who are greater than or equal to 48 inches in height.
You can assume an input which looks like this:*/
var groupA = [{
        name: "Mia",
        age: 10,
        heightInInches: 52
    },
    {
        name: "Jaya",
        age: 9,
        heightInInches: 45
    },
    {
        name: "Kiana",
        age: 10,
        heightInInches: 55
    },
    {
        name: "Alex",
        age: 11,
        heightInInches: 48
    }

]


/* Calling your
 function should result in:
 tallEnoughToRide(groupA); //["Mia", "Kiana", "Alex"];
 Remember: your
 function should work off of the data it receives,
 not a global variable or only the specific example above.
 I.e.If someone called your
 function with 10 objects(with all safely have the same properties), it should work just as well.*/


function tallEnoughToRide(arrayOfObjects) {
    return filter(arrayOfObjects, function(person) {
        return (person.heightInInches >= 48)
    })
}

function tallestPerson(arrayOfObjects) {
    return reduce(arrayOfObjects, function(max, person) {
        if (max < person.heightInInches) {
            max = person.heightInInches
        }
        return max
    })
}
/*
2-Working off of the same data structure as tallEnoughToRide, 
write a function called tallestPerson that takes  an array of people objects as well, 
and returns the name of the person with the greatest height, 
along with how tall they are (see sample input below).
Calling your function should result in:
tallestPerson(groupA); //"Kiana at 55 inches"
*/