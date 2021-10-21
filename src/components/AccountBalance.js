import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
        <div>
            <h4>Account Balance</h4>
            ${this.props.accountBalance}
        </div>
    );
  }
}

export default AccountBalance;