import React from 'react';
import RamenList from './RamenList';

import '../css/main.css';

class SideBar extends React.Component {
 

  render() {
      return(
          <div className="side-bar-left">
            <RamenList
              restaurants={this.props.ramenSpots}
              loading={this.props.loading}
            />
          </div>
      )
    }
}
export default SideBar;
