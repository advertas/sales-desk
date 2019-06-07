import React from 'react'
import { Link } from 'gatsby'

const hellos = ['Hola', 'Salut', 'Hallo', 'Ciao', 'Ahoj', 'Annyeong-haseyo', 'Aloha', 'Howdy', 'Ni Hao', 'Konnichiwa'];

const fetchLeads = async () => {

  // const url = "https://geophysicalinsights.freshsales.io/api/lookup?q=test17@testmail.com&f=email&entities=contact";
  // const response = await fetch(url);
  // const data = await response.json();
  // console.log('data?', data)
  // this.setState({ person: data.results[0], loading: false });

  // const response = await fetch(`https://geophysicalinsights.freshsales.io/api/lookup?q=test17@testmail.com&f=email&entities=contact`, {
  //   credentials: 'include',
  //   headers: {
  //    'Content-Type': 'application/x-www-form-urlencoded',
  //    'Authorization': 'Token token=ruf8KPf1yojVDU8wBczyzg',
  //    'cache-control': 'no-cache',
  //    'accept-encoding': 'gzip, deflate',
  //    'Accept': '*/*',
  //    'Access-Control-Allow-Origin': '*'
  //   },
  //   method: 'GET',
  //   // mode: 'cors',
  // })
  //   .then(res => res.json())
  //   .then(json => {
  //     if (json.data) {
  //       // Reload page to move to onboarding flow
  //       console.log('we have data')
  //       alert("hii")
  //       // window.location.reload(true);
  //     } else if (json.errors) {
  //       const errors = json.errors.map(error => error.message);
  //       console.log(errors)
  //     }
  //   })
  //   .catch(errors => {
  //     // Unknown error
  //     // this.errors = ['Something went wrong.'];
  //     console.log('Something went wrong.')
  //   });
};

export { fetchLeads };
