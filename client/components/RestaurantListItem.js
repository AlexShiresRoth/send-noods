import React from 'react';

import '../css/main.css';

export default class RestaurantListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isMobile: false,
			showMore: false,
		};
	}
	//change to mobile view depending on screen width
	handleScreenSize = () => {
		this.setState({ isMobile: window.innerWidth < 600 });
	};
	componentDidMount() {
		this.handleScreenSize();
		window.addEventListener('resize', this.handleScreenSize);
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.handleScreenSize);
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.state.isMobile !== prevState.isMobile) {
			window.addEventListener('resize', this.handleScreenSize);
		}
	}
	toggleCardDetails() {
		if (!this.state.showMore) {
			this.setState({ showMore: true });
		} else {
			this.setState({ showMore: false });
		}
	}

	render() {
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
			let photoArr = this.props.photos;
			let length = this.props.photos.length;
			let random = Math.floor(Math.random() * length);
			return (
				<figure className="image__item">
					<img src={require(`../images/${photoArr[random]}`)} alt="Ramen" />
				</figure>
			);
		};

		const getdata = () => {
			return this.props.spot.name;
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
			event.target.style.boxShadow = '0 10px 10px #eee';
			event.target.style.color = '#fff';
			event.target.style.padding = '0.5rem';
		};

		if (!this.state.isMobile) {
			return (
				<div className="list--item">
					<div className="img-container">{getPhotos()}</div>
					<div className="ramen__title">{this.props.spot.name}</div>
					<div className="rating__container">
						<div className="rating__container--stars">User Rating:{getRating(this.props.rating)}</div>
						<div className="rating__container--total">({this.props.ratingTotal})</div>
					</div>
					<hr />
					<div className="price__container">
						Price:<span>{getPrice(this.props.price)}</span>
					</div>
					<hr />
					<div className="hours__container">{getOpenTime(this.props.open)}</div>
					<div className="address__container">
						<p>Address: {this.props.spot.formatted_address}</p>
						<div className="address__container--favorite">
							<i
								class="far fa-heart"
								onClick={e => {
									this.props.addFavorite(e, getdata());
									addStyle(e);
								}}
								style={this.props.isFavorited.includes(this.props.spot.name) ? styles : null}
							/>
							<p>Add to favorites</p>
						</div>
					</div>
				</div>
			);
		}

		//return mobile view
		else {
			return (
				<div className="list--item">
					<div className="list--item--top">
						<div className="img-container">{getPhotos()}</div>
						<div className="ramen__title">
							{this.props.spot.name}
							<div className="ramen__title--toggle">
								<p>{this.state.showMore ? 'Hide Details' : 'Show Details'}</p>
								<i
									class={`${
										this.state.showMore
											? 'fas fa-chevron-up animate-box-shadow'
											: 'fas fa-chevron-down '
									}`}
									onClick={() => this.toggleCardDetails()}
								/>
							</div>
						</div>
					</div>
					<div className={`list--item--middle ${this.state.showMore ? ' ' : 'hidden'}`}>
						<div className={`rating__container ${this.state.showMore ? ' ' : 'hidden'}`}>
							<div className="rating__container--stars">User Rating:{getRating(this.props.rating)}</div>
							<div className="rating__container--total">({this.props.ratingTotal})</div>
						</div>
						<div className={`address__container ${this.state.showMore ? ' ' : 'hidden'}`}>
							<p>Address: {this.props.spot.formatted_address}</p>
						</div>
					</div>
					<div className={`list--item--bottom ${this.state.showMore ? ' ' : 'hidden'}`}>
						<div className={`price__container ${this.state.showMore ? ' ' : 'hidden'}`}>
							Price:<span>{getPrice(this.props.price)}</span>
						</div>
						<div className={`hours__container ${this.state.showMore ? ' ' : 'hidden'}`}>
							{getOpenTime(this.props.open)}
						</div>
						<div className="favorite">
							<i
								class="far fa-heart"
								onClick={e => {
									this.props.addFavorite(e, getdata());
									addStyle(e);
								}}
								style={this.props.isFavorited.includes(this.props.spot.name) ? styles : null}
							/>
						</div>
					</div>
				</div>
			);
		}
	}
}
