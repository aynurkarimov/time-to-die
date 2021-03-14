// General
const age = document.querySelector('#data__age-inp');
const maxAge = document.querySelector('#data__age-inp');
const sex = document.querySelector('#data__select-sex');
const countires = document.querySelector('#list-countries');
// Outs
let lifeOut = document.querySelector('.life-out');
let leftOut = document.querySelector('.left-out');
let daysOut = document.querySelector('.days-out');
let barOut = document.querySelector('.life__bar-green');


// https://en.wikipedia.org/wiki/List_of_countries_by_life_expectancy
const lifespan = [
    { country: 'russia', male: 68.2, female: 78.4 },
    { country: 'belarus', male: 69.7, female: 79.6 },
    { country: 'ukraine', male: 67.1, female: 76.8 },
    { country: 'turkey', male: 72.7, female: 77.5 },
    { country: 'uk', male: 79.8, female: 83 },
    { country: 'usa', male: 77, female: 82.2 }
]

// Events for all actions
sex.oninput = count;
age.oninput = count;
countires.oninput = count;

// Calculate
function count() {
    for (let item of lifespan) {
        if (item.country == countires.value) {
            // Max age 
            maxAge.setAttribute('max', item[sex.value]);
            // Main function
            let thecountryAge = item[sex.value];
            let thepersonAge = +age.value;

            let passedPercentage = thepersonAge / thecountryAge * 100;
            let leftPercentage = 100 - passedPercentage;
            let exactDays = (thecountryAge * 365) - thepersonAge * 365;

            lifeOut.textContent = parseFloat(passedPercentage).toFixed(2) + ' ' + '%';
            leftOut.textContent = parseFloat(leftPercentage).toFixed(2) + ' ' + '%';
            daysOut.textContent = parseInt(exactDays) + ' ' + 'days';
            barOut.style.width = parseInt(passedPercentage) + '%';
        }
    }
}
