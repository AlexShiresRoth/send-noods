import React from 'react';
import '../dist/css/main.css';

export default class Form extends React.Component {
    constructor(props){
        super(props);

        this.state = {location: '' }
    }

    restaurantQuery = (event) => {
        console.log('prev def')
        this.props.formDefault(event);
    }

    getInput = (event) => {
        this.props.formChange(event);
    }

render(){
    return(
        <div className="form__container">
            <div className="logo__container">
                <img src="../imgs/ramen.png" alt="Ramen Bowl Logo"/>
                Send Noods
            </div>
            <form onSubmit={this.restaurantQuery}>
                <div className="input__row">
                    <input 
                        className="input__row--input"
                        type="text"
                        value={this.props.formValue}
                        onChange={this.getInput} 
                        placeholder="Enter a City, Town or State"
                        >
                        </input>
                        <button
                            className="search__btn" 
                        >
                        <i className="fas fa-search"></i>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
