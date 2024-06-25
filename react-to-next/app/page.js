import LikeButton from './like-button';

function Header({ title }) {
	const headerContent = title ? title : 'Develop. Preview. Ship.';
	return <h1>{headerContent}</h1>;
}

export default function HomePage() {
	const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

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
      <LikeButton />
		</div>
	);
}
