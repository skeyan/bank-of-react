import React, {Component} from 'react';
import AccountBalance from './AccountBalance';

import '../App.css';

class Debits extends Component {
  render() {
    let debitsList = () => {
        return this.props.debits.map((debit) => {
            let date = debit.date.slice(0,10);
            return <li className="list-group-item" key={debit.id}>${debit.amount} | {debit.description} | {date}</li>
        })
    }

    return (
        <div>
            <h3>Debits</h3>
            <ul class="list-group list-group-flush transaction-lists">
                {debitsList()}
            </ul>

            <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}

export default Debits;