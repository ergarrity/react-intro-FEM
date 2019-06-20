import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
	return React.createElement('div', {}, [
		React.createElement('h1', {}, 'Adopt Me!'),
		React.createElement(Pet, {
			name: 'Callie',
			animal: 'Dog',
			breed: 'Walldog'
		}),
		React.createElement(Pet, {
			name: 'Mona',
			animal: 'Dog',
			breed: 'Princess'
		}),
		React.createElement(Pet, {
			name: 'Gus',
			animal: 'Dog',
			breed: 'Pitbull'
		})
	]);
};

render(React.createElement(App), document.getElementById('root'));
