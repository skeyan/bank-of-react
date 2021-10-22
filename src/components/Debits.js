import React, {Component} from 'react';
import AccountBalance from './AccountBalance';

import '../App.css';

class Debits extends Component {
  render() {
    /* Display all debits */
    let debitsList = () => {
        return this.props.debits.map((debit) => {
            let date = debit.date.slice(0,10);
            return <li className="list-group-item" key={debit.id}>${debit.amount} | {debit.description} | {date}</li>
        })
    }

    return (
        <div>
            <h3>Debits</h3>
            <ul className="list-group list-group-flush transaction-lists">
                {debitsList()}
            </ul>

            <h2>Add Debit</h2>
            <form className="form-inline login-form" onSubmit={this.props.addDebit}>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" name="description"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input type="number" step="any" className="form-control" name="amount"/>
                </div>
                <button type="submit" className="btn btn-primary">Add Debit</button>
            </form>

            <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}

export default Debits;