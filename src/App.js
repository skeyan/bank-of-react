import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from "axios";

import Navbar from './components/Navbar';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: 'my_username',
        memberSince: '01/22/1999',
      },
      debits: [],
      credits: []
    }
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  async componentDidMount() {
    let debits = await axios.get("https://moj-api.herokuapp.com/debits");
    let credits = await axios.get("https://moj-api.herokuapp.com/credits");

    debits = debits.data
    credits = credits.data

    let debitSum = 0, creditSum = 0;
    debits.forEach((debit) => {
      debitSum += debit.amount;
    })
    credits.forEach((credit) => {
      creditSum += credit.amount;
    })

    let accountBalance = (creditSum - debitSum).toFixed(2);
    this.setState({
      debits, credits, accountBalance
    });
  }

  render() {

    // Anonymous function for components with props
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)

    return (
        <Router>
          {/* Static Navbar */}
          <Navbar />

          {/* Routing */}
            <Switch>
              <Route exact path="/" render={HomeComponent}/>
              <Route exact path="/userProfile" render={UserProfileComponent}/>
              <Route exact path="/login" render={LogInComponent}/>
            </Switch>
        </Router>
    );
  }
}

export default App;