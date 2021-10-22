import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import axios from "axios";

import Navbar from './components/Navbar';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Debits from './components/Debits';

import './App.css';

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
      credits: [],
      uniqueID: 0
    }
  }

  /* Update debits value */
  addDebit = (e) => {
    e.preventDefault();

    const now = new Date();
    const newDebit = {
      id: this.state.uniqueID,
      amount: parseFloat(e.target.amount.value),
      description: e.target.description.value,
      date: String(now.getFullYear()) + "-" + String(now.getMonth()) + "-" + String(now.getDay())
    }
    this.setState(prevState => ({
      debits: [...prevState.debits, newDebit],
      uniqueID: this.state.uniqueID + 1,
      accountBalance: (this.state.accountBalance - newDebit.amount).toFixed(2)
    }))
  }

  /* Update credits value */


  /* Fakes log in functionality to update user profile */
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser};
    newUser.userName = logInInfo.userName;
    this.setState({currentUser: newUser});
  }

  /* Makes the initial API calls */
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

    /* Anonymous functions for components with props */
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)

    /* New components */
    const { debits } = this.state;
    const DebitsComponent = () => (<Debits addDebit={this.addDebit} debits={debits} accountBalance={this.state.accountBalance}/>);

    return (
        <Router>
          {/* Static Navbar */}
          <Navbar />

          {/* Routing */}
          <div className="page-content">
            <Switch>
              <Route exact path="/" render={HomeComponent}/>
              <Route exact path="/userProfile" render={UserProfileComponent}/>
              <Route exact path="/login" render={LogInComponent}/>
              <Route exact path="/debits" render={DebitsComponent}/>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;