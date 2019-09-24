import React from 'react';
import '../css/main.css';

export default class Marker extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			hovered: false,
		};
	}

	imgStyles = {
		height: '1.5rem',
		width: '1.5rem',
	};

	setHoverStateEnter = () => {
		this.setState({ hovered: true });
	};
	setHoverStateLeave = () => {
		this.setState({ hovered: false });
	};

	showInfo = () => {
		if (this.state.hovered) {
			const lat = this.props.locationInfo.geometry.lat;
			const lng = this.props.locationInfo.geometry.lng;
			return (
				<div className="ramen-popup" style={{ position: 'absolute' }}>
					<p>{this.props.locationInfo.name}</p>
					<a href={`https://maps.google.com/?ll=${lat},${lng}`}>
						{this.props.locationInfo.formatted_address.substring(30)}...
					</a>
				</div>
			);
		}
	};

	render() {
		return (
			<div
				style={{ position: 'relative' }}
				onMouseEnter={this.setHoverStateEnter}
				onMouseLeave={this.setHoverStateLeave}
				onClick={this.setHoverStateEnter}
			>
				<figure>
					<img src={require(`../images/ramen.png`)} alt={this.props.text} style={this.imgStyles} />
				</figure>
				{this.showInfo()}
			</div>
		);
	}
}
