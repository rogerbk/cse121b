/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = 'Roger Nunez Montero';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/roger.jpg';


/* Step 3 - Element Variables */


const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementById('profileImage');


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */

let favoriteFoods = ['Pizza', 'Sushi', 'Pasta', 'Tacos', 'Ice Cream'];

foodElement.innerHTML = favoriteFoods.join(', ');

let anotherFavoriteFood = 'Chocolate';

favoriteFoods.push(anotherFavoriteFood);

foodElement.innerHTML = favoriteFoods.join(', ');

foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;

favoriteFoods.shift();

foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;

favoriteFoods.pop();

foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;








