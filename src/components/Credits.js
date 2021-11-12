import React, {Component} from "react";
import AccountBalance from "./AccountBalance";

import '../App.css';

class Credits extends Component {
    render() {
        /* Display all credits */
        let creditsList = () => {
            return this.props.credits.map((credit) => {
                let date = credit.date.slice(0,10);
                return <li className="list-group-item" key={credit.id}>${credit.amount} | {credit.description} | {date}</li>
            })
        }
        return (
            <div>
                <h3>Credits</h3>
                <ul className="list-group list-group-flush transaction-lists">
                    {creditsList()}
                </ul>
                <h2>Add Credit</h2>
                <form className="form-inline login-form" onSubmit={this.props.addCredit}>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" name="description"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="amount" className="form-label">Amount</label>
                        <input type="number" step="any" className="form-control" name="amount" />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Credit</button>
                </form>

                <AccountBalance accountBalance={this.props.accountBalance} />
            </div>
        );
    }
}

export default Credits;