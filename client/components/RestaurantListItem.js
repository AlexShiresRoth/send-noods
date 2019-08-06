import React from 'react';

import '../css/main.css';

const RestaurantListItem = props => {
	//render star rating
	const getRating = rating => {
		let newArr = [];

		for (let i = 0; i < rating; i++) {
			newArr.push(<i className="fas fa-star" />);
		}

		return newArr;
	};

	//render price symbol
	const getPrice = price => {
		let newArr = [];

		if (price) {
			if (price >= 0) {
				newArr.push(<i className="fas fa-dollar-sign" />);
			}
		} else if (!price) {
			let jsxItem = <p style={{ color: '#000' }}>n/a</p>;
			newArr.push(jsxItem);
		}

		return newArr;
	};

	// determine if restaurant is open or not
	const getOpenTime = open => {
		if (open) {
			return <p style={{ color: 'green' }}>Open</p>;
		} else {
			return <p style={{ color: 'red' }}>Closed</p>;
		}
	};

	const getPhotos = () => {
		let photoArr = props.photos;
		let length = props.photos.length;
		let random = Math.floor(Math.random() * length);
		return (
			<figure className="image__item">
				<img src={require(`../images/${photoArr[random]}`)} alt="Ramen" />
			</figure>
		);
	};

	const getdata = () => {
		return props.spot.name;
	};

	const styles = {
		background: '#ff4500',
		borderRadius: '50%',
		boxShadow: '0 10px 10px #eee',
		color: '#fff',
		padding: '0.5rem',
	};

	const addStyle = event => {
		event.target.style.background = '#ff4500';
		event.target.style.borderRadius = '50%';
		event.target.style.boxShadow = ' 0 10px 10px #eee';
		event.target.style.color = '#fff';
		event.target.style.padding = '0.5rem';
	};

	return (
		<div className="list--item">
			<div className="img-container">{getPhotos()}</div>
			<div className="ramen__title">{props.spot.name}</div>
			<div className="rating__container">
				<div className="rating__container--stars">User Rating:{getRating(props.rating)}</div>
				<div className="rating__container--total">({props.ratingTotal})</div>
			</div>
			<hr />
			<div className="price__container">
				Price:<span>{getPrice(props.price)}</span>
			</div>
			<hr />
			<div className="hours__container">{getOpenTime(props.open)}</div>
			<div className="address__container">
				<p>Address: {props.spot.formatted_address}</p>
				<div className="address__container--favorite">
					<i
						class="far fa-heart"
						onClick={e => {
							props.addFavorite(e, getdata());
							addStyle(e);
						}}
						style={props.isFavorited.includes(props.spot.name) ? styles : null}
					/>
					<p>Add to favorites</p>
				</div>
			</div>
		</div>
	);
};

export default RestaurantListItem;
