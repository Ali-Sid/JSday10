// Exercises: Level 1

// 1. Create an empty set

const emptySet = new Set()

console.log(emptySet) // Set(0) {}

// 2. Create a set containing 0 to 10 using loop

const setOfNum = new Set()

for(let i=0; i<=10; i++){
    setOfNum.add(i)
}

console.log(setOfNum) // Set(11) { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }

// 3. Remove an element from a set

setOfNum.delete(0)
console.log(setOfNum) // Set(10) { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }

// 4. Clear a set

setOfNum.clear()

console.log(setOfNum) // Set(0) {}

// 5. Create a set of 5 string elements from array

const elem = ['Apple', 'Mango', 'Banana', 'Grapes', 'Orange']
const setOfElem = new Set()

for(let e of elem){
    setOfElem.add(e)
}
console.log(setOfElem) // Set(5) { 'Apple', 'Mango', 'Banana', 'Grapes', 'Orange' }

// 6. Create a map of countries and number of characters of a country

const countries = ['Finland', 'Sweden', 'Norway']

const mapOfCountries = new Map()

for(const country of countries){
    mapOfCountries.set(country, country.length)
}

console.log(mapOfCountries) // Map(3) { 'Finland' => 7, 'Sweden' => 6, 'Norway' => 6 }

// Exercises: Level 2

// 1. Find a union b

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const c = [...a, ...b]

let d = new Set(c)

console.log(d) // Set(6) { 4, 5, 8, 9, 3, 7 }

// 2. Find a intersection b

const A = new Set(a)
const B = new Set(b)
const e = a.filter((num) => B.has(num))
const E = new Set(e)

console.log(E) // Set(2) { 4, 5 }

// 3. Find a with b (a/b)

const f = a.filter(num => !B.has(num))
const F = new Set(f)

console.log(F) // Set(2) { 8, 9 }

// Exercises: Level 3

// 1. How many languages are there in the countries object file.

import {objectOfCountries} from './countriesObj.js'

const languages = new Set()

for(const country of Object.values(objectOfCountries)) {
    for(const language of country.language){
        languages.add(country.language)
    }
}

console.log(languages)
/*
Set(7) {
  'Hindi',
  'English',
  'Chinese',
  'Russian',
  'Finnish',
  'Arabic',
  'Portuguese'
}
*/

// 2. Use the countries data to find the 10 most spoken languages:

/*
import {mostSpokenLanguages} from './language.js'

const countries1 = ["Germany", "USA", "China", "France", "India", "Japan", "Mexico", "UK", "Brazil", "Indonesia"]

const topTenLang = []

countries1.forEach(country => {
    languages.forEach(language => {
        if(language.countries1.includes(country)){
            let index = topTenLang.findIndex(el => el.name === language.name)
            if(index < 0){
                topTenLang.push(language)
            }
        }
    })
})

topTenLang = topTenLang.sort((a,b) => b.countries1.length - a.countries1.length).slice(0, 10).map(lang => lang.name)

console.log(topTenLang)*/

import { mostSpokenLanguages } from './language.js';

const countries1 = ["Germany", "USA", "China", "France", "India", "Japan", "Mexico", "UK", "Brazil", "Indonesia"];

let topTenLang = [];

mostSpokenLanguages.forEach(language => {
  countries1.forEach(country => {
    if (language.countries.includes(country)) {
      let index = topTenLang.findIndex(el => el.name === language.name);
      if (index < 0) {
        topTenLang.push(language);
      }
    }
  });
});

topTenLang = topTenLang.sort((a,b) => b.countries1.length - a.countries1.length).slice(0, Math.min(topTenLang.length, 10)).map(lang => lang.name);

console.log(topTenLang);

// this problem will be updated later

