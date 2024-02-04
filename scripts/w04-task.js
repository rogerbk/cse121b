/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {};

myProfile.name = "Roger Nunez";

myProfile.photo = "w02-task/images/roger.jpg"; 

myProfile.favoriteFoods = ['Rice', 'Olla de Carne', 'Fish', 'Shrimp', 'Apple Pie'];

myProfile.hobbies = ['Gardening', 'Coding and Programming', 'Photography', 'Cooking'];  

myProfile.placesLived = [];

myProfile.placesLived.push({ place: 'Guatemala', length: '2 years' });
myProfile.placesLived.push({ place: 'Mexico', length: '1 year' });

document.querySelector('#name').textContent = myProfile.name;

let photoElement = document.querySelector('#photo');
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

  
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});


myProfile.placesLived.forEach(placeLived => {
    let dt = document.createElement('dt');
    dt.textContent = placeLived.place;
    let dd = document.createElement('dd');
    dd.textContent = placeLived.length;
    let dl = document.querySelector('#places-lived');
    dl.appendChild(dt);
    dl.appendChild(dd);
});

