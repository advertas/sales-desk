import React from "react";
import ChooseDB from './ChooseDB'
import FindDuplicateLeads from './FindDuplicateLeads'
import FetchLeads from './FetchLeads'


export default class FetchData extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      person: null,
      currentDB: 'advertas'
    };
  }

  // async componentDidMount() {
  //   const url = "https://api.randomuser.me/";
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   this.setState({ person: data.results[0], loading: false });
  // }


  handleDBchange = (userChoice) => {

    if(this.state.db != userChoice){
      this.setState({ currentDB: userChoice });

      console.log(userChoice);
    }
  }



  render() {
    console.log('store', this.state.currentDB)
    // if (this.state.loading) {
    //   return <div>loading...</div>;
    // }
    //
    // if (!this.state.person) {
    //   return <div>didn't get a person</div>;
    // }
    return (
      <div>
      <ChooseDB handleDBchange={this.handleDBchange}/>
      <FindDuplicateLeads db={this.state.currentDB} />
      </div>
    );
  }
}
