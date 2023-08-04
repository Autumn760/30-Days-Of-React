//Declare empty array
let array = []
console.log(array)

//Array more than 5 elements, length
let numbers = [1,3,5,7,9,11]
console.log(numbers.length)

//Get first, middle, last item in array
console.log(numbers[0])
console.log(numbers[2])
let lastIndex = numbers.length - 1
console.log(numbers[lastIndex])

//Array called mixedDataTypes & Length
let mixedDataTypes = ["cat", "dog", 3, 4, "brown", 7]
console.log(mixedDataTypes.length)

//array companies
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0])
console.log(itCompanies[lastIndex])-1
console.log(itCompanies[3])

console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase()); 

//How do I add the word 'and' between Oracle & Amazon?
console.log(`${itCompanies} are big IT companies.` )

let index = itCompanies.indexOf('Apple')
if (itCompanies != -1) {
    console.log("This company does exist in the array")
} else {
    console.log("This company does not exist in the array")
}
itCompanies.forEach(function(companies) {
    console.log(companies);
   }); 

let moreThanLetterO = itCompanies.indexOf('o')
if (moreThanLetterO >= -1){
    console.log("There are more than one letter o.")
} else {
    console.log('There are no words with more than o.')
}

itCompanies.sort()
console.log(itCompanies)
itCompanies.reverse()
console.log(itCompanies)

console.log(itCompanies.slice(0,3))
console.log(itCompanies.slice(4,7))