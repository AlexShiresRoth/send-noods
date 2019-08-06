import React from 'react';
import RamenList from './RamenList';
import ResultsNav from './ResultsNav';

import '../css/main.css';

class SideBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			favorites: this.favorites,
		};
		this.addFavorite = this.addFavorite.bind(this);
		this.removeFavorite = this.removeFavorite.bind(this);
	}

	favorites = JSON.parse(localStorage.getItem('favorites')) || [];

	componentDidUpdate(prevProps, prevState) {
		//console.log(this.state.favorited);
		if (this.favorites !== prevState.favorites) {
			this.setState({ favorites: this.favorites });
		}
	}

	addFavorite = (e, data) => {
		//need to check array if name already exists
		if (!this.favorites.includes(data) && this.favorites.length <= 20) {
			this.favorites.push(data);
			localStorage.setItem('favorites', JSON.stringify(this.favorites));
		}
	};
	removeFavorite = (e, data) => {
		if (this.favorites.includes(data)) {
			this.favorites.splice(this.favorites.indexOf(data), 1);
			this.setState({ favorites: this.favorites });
			localStorage.setItem('favorites', JSON.stringify(this.favorites));
		}
	};

	render() {
		return (
			<div className="side-bar-left">
				<ResultsNav
					input={this.props.input}
					loading={this.props.loading}
					restaurants={this.props.ramenSpots}
					filter={this.props.filter}
					sortResults={this.props.sortResults}
					setValue={this.props.onChange}
					favorited={this.state.favorites}
					removeFavorite={this.removeFavorite}
				/>
				<RamenList
					restaurants={this.props.ramenSpots}
					loading={this.props.loading}
					input={this.props.input}
					addFavorite={this.addFavorite}
					favorites={this.favorites}
				/>
			</div>
		);
	}
}
export default SideBar;
