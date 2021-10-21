import React, {Component} from 'react';
import AccountBalance from './AccountBalance';

class Home extends Component {
  render() {
    return (
        <div>
          <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}

export default Home;