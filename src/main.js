/* eslint-disable no-undef */
import {filterGender, filterSport, filterTeam, orderName, averageData} from './data.js';
//import athletes from './data/athletes/athletes.js';
import data from './data/athletes/athletes.js';
import generadorHTML from './generadorHTML.js'


// Variables
const selectGender = document.querySelector('#gender')
const selectSport = document.querySelector('#sport')
const selectTeam = document.querySelector('#team')
const element = document.querySelector('#container')
const order = document.querySelector('#order')
const calcular = document.querySelector('#average')

// Renderizar Data 
// Eliminar duplicados
const information = data.athletes.map(athlete => [athlete.name, athlete]);
const athletesNoDuplicates = new Map(information);
const athletesNew = [...athletesNoDuplicates.values()];

// HTML
let html =''

athletesNew.forEach(athletes =>html+=generadorHTML(athletes));

container.insertAdjacentHTML('afterbegin', html);

//Filtrado Genero con evento
selectGender.addEventListener('change', (e) => {
    element.innerHTML =''
    html =''

    let typeGender = filterGender(e.target.value, athletesNew)
if (e.target.value === "F") {
    typeGender.forEach(athletes =>html+=generadorHTML(athletes));

    calcular.innerHTML = 'The average age of female athletes is: ' + averageData(typeGender).toFixed(0) + ' years.'
    }

if (e.target.value === "M") { 
    
    typeGender.forEach(athletes =>html+=generadorHTML(athletes));

    calcular.innerHTML = 'The average age of male athletes is: ' + averageData(typeGender).toFixed(0) + ' years.'
    }

 if (e.target.value === "all")  {
    athletesNew.forEach(athletes =>html+=generadorHTML(athletes));

    calcular.innerHTML = 'The average age of all athletes is: ' + averageData(athletesNew).toFixed(0) + ' years.'
 }
container.insertAdjacentHTML('afterbegin', html);

});
console.log(averageData(athletesNew).toFixed(0))
//Filtrado de Deporte con Evento
selectSport.addEventListener('change', (e) => {
    element.innerHTML =''
    html =''

    let typeSport = filterSport(e.target.value, athletesNew)
if (e.target.value === "Rowing"){
    typeSport.forEach(athletes =>html+=generadorHTML(athletes));
    }

 if (e.target.value === "Gymnastics"){
        typeSport.forEach(athletes =>html+=generadorHTML(athletes));
        }

if (e.target.value === "Taekwondo"){
            typeSport.forEach(athletes =>html+=generadorHTML(athletes));
            }
if (e.target.value === "all")            
    athletesNew.forEach(athletes =>html+=generadorHTML(athletes));

container.insertAdjacentHTML('afterbegin', html);
});

//Filtrado de Equipo por Evento
selectTeam.addEventListener('change', (e) => {
    element.innerHTML =''
    html =''

    let typeTeam = filterTeam(e.target.value, athletesNew);

    //console.log(filterTeam(e.target.value, athletesNew));
if (e.target.value === "Italy") {
    typeTeam.forEach(athletes =>html+=generadorHTML(athletes));
    }

if (e.target.value === "Iran") {
        typeTeam.forEach(athletes =>html+=generadorHTML(athletes));
        }

if (e.target.value === "Russia") {
    typeTeam.forEach(athletes =>html+=generadorHTML(athletes));
            }

if (e.target.value === "Australia") {
    typeTeam.forEach(athletes =>html+=generadorHTML(athletes));
     }

if (e.target.value === "all") {
    athletesNew.forEach(athletes =>html+=generadorHTML(athletes));
    }

    //console.log(typeTeam)
container.insertAdjacentHTML('afterbegin', html);
});

order.addEventListener('change', (e) => {
    element.innerHTML = ''
    html = ''

    let orderAthletes = orderName(e.target.value, athletesNew);
if (e.target.value === "AZ") {
    orderAthletes.forEach(athletes =>html+=generadorHTML(athletes));
    }

if (e.target.value === "ZA") {
    orderAthletes.forEach(athletes =>html+=generadorHTML(athletes));
        }

if (e.target.value === "order")
    athletesNew.forEach(athletes =>html+=generadorHTML(athletes));

    container.insertAdjacentHTML('afterbegin', html);
    }); 


