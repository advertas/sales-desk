import React from 'react'
import { Link } from 'gatsby'

class ChooseDB extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: true,
      currentDB: 'advertas'
    };
  }


  handleDBChange = (userChoice) => {
    if(this.state.currentDB != userChoice){
      this.props.db = userChoice;
      this.setState({ currentDB: userChoice });

      console.log(userChoice);
    }
  }

  dispenseDBOptions = () => {


    return <ul><li className='button' onClick={() => this.props.handleDBchange('advertas')}>Advertas</li>
              <li className='button' onClick={() => this.props.handleDBchange('geoinsights')}>GeoInsights</li></ul>
  }

  openDropdown = (e) => {
    if(this.state.showDropdown === false){
      this.setState({ showDropdown: true });
    }else{
      this.setState({ showDropdown: false });
    }

  }

render (){
  const dropdownClass = this.state.showDropdown ? "dropdown is-active" : "dropdown";

  return <div className={dropdownClass} style={{"display":"block"}}>
    <div className="dropdown-trigger" onClick={() => this.openDropdown() } style={{"text-align":"center"}}>
    <hr/>
      <button className="button" astyle={{"border-radius":"0", 'box-shadow': 'none'}}ria-haspopup="true" aria-controls="dropdown-menu3" >
        <span>Choose a Database</span>
      </button>
    <hr/>
    </div>
    <div className="dropdown-menu" id="dropdown-menu3" role="menu" >
      <div className="dropdown-content" style={{"border-radius":"0", 'box-shadow': 'none'}}>
        <div className="dropdown-item">
          {this.dispenseDBOptions()}
          <p>You can insert <strong>any type of content</strong> within the drmenu.</p>
        </div>
      </div>
    </div>
  </div>
}
}

export default ChooseDB
