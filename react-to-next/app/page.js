import { useState } from 'react';

function Header({ title }) {
	const headerContent = title ? title : 'Develop. Preview. Ship.';
	return <h1>{headerContent}</h1>;
}

export default function HomePage() {
	const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

	const [likes, setLikes] = useState(0);

	function handleClick() {
		setLikes(likes + 1);
		console.log('increment like count');
	}

	return (
		<div>
			{/* Nesting the Header component */}
			<Header />
			<Header title="React" />
			<ul>
				{names.map((name, index) => {
					return <li key={index}>{name}</li>;
				})}
			</ul>
			<button onClick={handleClick}>Like ({likes})</button>
		</div>
	);
}
