import React from 'react';
import '../css/main.css';

const Form = props => {
	const restaurantQuery = event => {
		props.formDefault(event);
	};

	const getInput = event => {
		props.formChange(event);
	};
	return (
		<div className="form__container">
			<div className="logo__container">
				<h1>Send N</h1>
				<img src="../images/ramen.png" alt="Ramen Bowl Logo" />
				<img src="../images/ramen.png" alt="Ramen Bowl Logo" />
				<h1>ds</h1>
			</div>
			<div className="form__container--search">
				<button className="clear__btn" onClick={props.onClick}>
					<i class="fas fa-window-close" />
				</button>
				<form onSubmit={restaurantQuery}>
					<div className="input__row">
						<input
							className="input__row--input"
							type="text"
							value={props.formValue}
							onChange={getInput}
							placeholder="Enter a City, Town or State"
						/>
						<button className="search__btn" onSubmit={restaurantQuery}>
							<i className="fas fa-search" />
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Form;
