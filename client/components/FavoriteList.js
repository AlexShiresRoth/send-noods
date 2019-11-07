import React from 'react';

import '../css/main.css';

export const FavoriteList = props => {
	const Favorites = props.favorites.map(favorite => {
		const getData = () => {
			return favorite;
		};
		return (
			<li className="favorite__list--item">
				<i class="far fa-times-circle" onClick={e => props.removeFavorite(e, getData())} />
				<p>{favorite}</p>
			</li>
		);
	});

	return (
		<div>
			<ul className="favorite__list">{Favorites}</ul>
		</div>
	);
};
