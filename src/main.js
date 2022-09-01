/* eslint-disable no-undef */
import { filterGender, filterSport, filterTeam, orderName, averageData } from './data.js';
import data from './data/athletes/athletes.js';
import generadorHTML from './generadorHTML.js'

// Variables
const selectGender = document.querySelector('#gender')
const selectSport = document.querySelector('#sport')
const selectTeam = document.querySelector('#team')
const element = document.querySelector('#container')
const order = document.querySelector('#order')
const calculation = document.querySelector('#average')

// Renderizar Data 
// Eliminar duplicados
const information = data.athletes.map(athlete => [athlete.name, athlete]);
const athletesNoDuplicates = new Map(information);
const athletesNew = [...athletesNoDuplicates.values()];

// HTML
let html = ''

athletesNew.forEach(athletes => html += generadorHTML(athletes));

container.insertAdjacentHTML('afterbegin', html);

//Filtrado Genero con evento
selectGender.addEventListener('change', (e) => {
    element.innerHTML = ''
    html = ''

    let typeGender = filterGender(e.target.value, athletesNew)
    if (e.target.value === 'F') {
        typeGender.forEach(athletes => html += generadorHTML(athletes));
        calculation.innerHTML = `<h2>Female Athletes</h2><h3>Statistics.</h3><p class="stats">The average age of female athletes is: ${averageData(typeGender).toFixed(0)} years.</p>`

    }

    if (e.target.value === 'M') {
        typeGender.forEach(athletes => html += generadorHTML(athletes));
        calculation.innerHTML = `<h2>Male Athletes</h2><h3>Statistics.</h3><p class="stats">The average age of male athletes is: ${averageData(typeGender).toFixed(0)} years.</p>`
    }

    if (e.target.value === 'all') {
        athletesNew.forEach(athletes => html += generadorHTML(athletes));
        calculation.innerHTML = `<h2>All Athletes</h2><h3>Statistics.</h3><p class="stats">The average age of all athletes is: ${averageData(athletesNew).toFixed(0)} years.</p>`
    }
    container.insertAdjacentHTML('afterbegin', html);

});

//Filtrado de Deporte con Evento
selectSport.addEventListener('change', (e) => {
    element.innerHTML = ''
    html = ''

    let typeSport = filterSport(e.target.value, athletesNew)

    if (e.target.value === 'Rowing') {
        typeSport.forEach(athletes => html += generadorHTML(athletes));
        calculation.innerHTML = `<h2>Rowing</h2><h3>Statistics.</h2><p class="stats">Number of athletes competing in Rowing: ${typeSport.length}</p>`
    }

    if (e.target.value === 'Gymnastics') {
        typeSport.forEach(athletes => html += generadorHTML(athletes));
        calculation.innerHTML = `<h2>Gymnastics</h2><h3>Statistics.</h3><p class="stats">Number of athletes competing in Gymnastics: ${typeSport.length}</p>`
    }

    if (e.target.value === 'Taekwondo') {
        typeSport.forEach(athletes => html += generadorHTML(athletes));
        calculation.innerHTML = `<h2>Taekwondo</h2><h3>Statistics.</h3><p class="stats">Number of athletes competing in Taekwondo: ${typeSport.length}</p>`
    }
    if (e.target.value === 'all') {
        athletesNew.forEach(athletes => html += generadorHTML(athletes));
        calculation.innerHTML = `<h2>All Athletes</h2><h3>Statistics.</h3><p class="stats">Number of athletes competing in the Rio 2016 Olympics: ${athletesNew.length}</p>`
    }
    container.insertAdjacentHTML('afterbegin', html);

});

//Filtrado de Equipo por Evento
selectTeam.addEventListener('change', (e) => {
    element.innerHTML = ''
    html = ''

    let typeTeam = filterTeam(e.target.value, athletesNew);

    if (e.target.value === 'Italy') {
        typeTeam.forEach(athletes => html += generadorHTML(athletes));
        calculation.innerHTML = `<h2>Italian Team</h2><h3>Statistics.</h3><p class="stats">Number of athletes competing on the Italy team: ${typeTeam.length}</p>`
    }

    if (e.target.value === 'Iran') {
        typeTeam.forEach(athletes => html += generadorHTML(athletes));
        calculation.innerHTML = `<h2>Iran Team</h2><h3>Statistics.</h3><p class="stats">Number of athletes competing on the Iran team: ${typeTeam.length}</p>`
    }

    if (e.target.value === 'Russia') {
        typeTeam.forEach(athletes => html += generadorHTML(athletes));
        calculation.innerHTML = `<h2>Russia Team</h2><h3>Statistics.</h3><p class="stats">Number of athletes competing on the Russia team: ${typeTeam.length}</p>`
    }

    if (e.target.value === 'Australia') {
        typeTeam.forEach(athletes => html += generadorHTML(athletes));
        calculation.innerHTML = `<h2>Australia Team</h2><h3>Statistics.</h3><p class="stats">Number of athletes competing on the Australia team: ${typeTeam.length}</p>`
    }

    if (e.target.value === 'all') {
        athletesNew.forEach(athletes => html += generadorHTML(athletes));
        calculation.innerHTML = `<h2>All Athletes</h2><h3>Statistics.</h3>Number of athletes competing in the Rio 2016 Olympics: ${athletesNew.length}</p>`
    }

    container.insertAdjacentHTML('afterbegin', html);
});

order.addEventListener('change', (e) => {
    element.innerHTML = ''
    html = ''
    calculation.innerHTML = ''

    let orderAthletes = orderName(e.target.value, athletesNew);
    if (e.target.value === 'AZ') {
        orderAthletes.forEach(athletes => html += generadorHTML(athletes));
    }

    if (e.target.value === 'ZA') {
        orderAthletes.forEach(athletes => html += generadorHTML(athletes));
    }

    if (e.target.value === 'order') {
        athletesNew.forEach(athletes => html += generadorHTML(athletes));

    }
    container.insertAdjacentHTML('afterbegin', html);


}); 
