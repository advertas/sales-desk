import React from 'react'
import { Link } from 'gatsby'
import { fetchLeads }  from './FetchLeads'

class FindDuplicateLeads extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: true,
      currentDB: 'advertas'
    };
  }


  handleDBChange = (userChoice) => {
    if(this.state.currentDB != userChoice){
      this.setState({ currentDB: userChoice });

      console.log(userChoice);
    }
  }

  startChain = () => {

    //fetch all leads

    // const leads = FetchLeads.getLeads();
    const leads = fetchLeads();

    console.log(leads)

  }

  openDropdown = (e) => {
    if(this.state.showDropdown === false){
      this.setState({ showDropdown: true });
    }else{
      this.setState({ showDropdown: false });
    }

  }

  async componentDidMount() {
    // const url = "https://dry-sierra-51475.herokuapp.com/api"
    const url = "http://localhost:3000/api/leads"

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    // const url = "https://geophysicalinsights.freshsales.io/api/lookup?q=test17@testmail.com&f=email&entities=contact";
    // const response = await fetch(url, {
    //   credentials: 'include',
    //   headers: {
    //     Accept: '*/*',
    //     Host: 'geophysicalinsights.freshsales.io',
    //     'accept-encoding': 'gzip, deflate, br',
    //     Authorization: 'Token token=ruf8KPf1yojVDU8wBczyzg',
    //     'Content-Type': 'text/plain'
    //   },
    // });
    // const data = await response.json();
    // console.log('async data', data)
  }

render (){
  const dropdownClass = this.state.showDropdown ? "dropdown is-active" : "dropdown";

  return <div className={dropdownClass} style={{"display":"block"}}>
    <div className="dropdown-trigger" onClick={() => this.openDropdown() } style={{"text-align":"center"}}>
    <hr/>
      <button className="button" astyle={{"border-radius":"0", 'box-shadow': 'none'}}ria-haspopup="true" aria-controls="dropdown-menu3" >
        <span>FindDuplicatesLeads</span>
      </button>
    <hr/>
    </div>
    <div className="dropdown-menu" id="dropdown-menu3" role="menu" >
      <div className="dropdown-content" style={{"border-radius":"0", 'box-shadow': 'none'}}>
        <div className="dropdown-item">
          {this.startChain()}
          <p>You can insert <strong>any type of content</strong> within the drmenu.</p>
        </div>
      </div>
    </div>
  </div>
}
}

export default FindDuplicateLeads
