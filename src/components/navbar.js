// create a modern navbar with Home, Friends, and Messages links

const navbar = document.createElement('nav');
navbar.classList.add('navbar');

const home = document.createElement('a');
home.classList.add('navbar-item');
home.textContent = 'Home';
home.href = '/';

const friends = document.createElement('a');
friends.classList.add('navbar-item');
friends.textContent = 'Friends';
friends.href = '/friends';

const messages = document.createElement('a');
messages.classList.add('navbar-item');
messages.textContent = 'Messages';
messages.href = '/messages';

navbar.appendChild(home);
navbar.appendChild(friends);
navbar.appendChild(messages);


