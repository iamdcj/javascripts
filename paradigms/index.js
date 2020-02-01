// Functional vs. OOP Snippets

// Declarative
const DNames = ['David', 'Stephanie']

const checkForElement = (arr, val) => arr.includes(val);

const containsDavid = checkForElement(names, 'David');

console.log(containsDavid)

// Imperative
const Inames = ['David', 'Stephanie']

const checkForElement - function(arr, val) {
    for(i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return true
        } else {
            return false;
        }
    }

}

const containsNole = checkForElement(names, 'Nole');

console.log(containsNole)
