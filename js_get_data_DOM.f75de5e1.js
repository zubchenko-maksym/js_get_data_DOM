'use strict';
const population = document.querySelectorAll('.population');
const populationArray = [];
for (const el of population)populationArray.push(el.textContent.split(',').join(''));
const totalPopulationEl = document.querySelector('.total-population');
const averagePopulationEl = document.querySelector('.average-population');
const total = populationArray.reduce((acc, sum)=>{
    const num = Number(sum);
    if (isNaN(num)) return acc;
    return acc + num;
}, 0);
const average = Math.floor(total / populationArray.length);
totalPopulationEl.textContent = total.toLocaleString('en-US');
averagePopulationEl.textContent = average.toLocaleString('en-US');

//# sourceMappingURL=js_get_data_DOM.f75de5e1.js.map
