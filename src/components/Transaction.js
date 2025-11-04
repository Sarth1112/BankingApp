import React, { useState } from 'react';
import AccountService from '../services/AccountService';
import './Transaction.css';

const Transaction = () => {
    const [accountNumber, setAccountNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [transactionType, setTransactionType] = useState('deposit');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            const transaction = {
                accountNumber: String(accountNumber),
                amount: parseFloat(amount)
            };

            let response;
            if (transactionType === 'deposit') {
                response = await AccountService.deposit(transaction);
                setMessage(`Deposit successful! New balance: $${response.data.balance.toFixed(2)}`);
            } else {
                response = await AccountService.withdraw(transaction);
                setMessage(`Withdrawal successful! New balance: $${response.data.balance.toFixed(2)}`);
            }

            setAccountNumber('');
            setAmount('');
        } catch (err) {
            setError(err.response?.data || 'Transaction failed');
        }
    };

    return (
        <div className="transaction-container">
            <h2>Make a Transaction</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Account Number:</label>
                    <input
                        type="string"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        required
                        placeholder="Enter account Number"
                    />
                </div>
                <div className="form-group">
                    <label>Amount:</label>
                    <input
                        type="number"
                        step="0.01"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                        placeholder="Enter amount"
                    />
                </div>
                <div className="form-group">
                    <label>Transaction Type:</label>
                    <select 
                        value={transactionType}
                        onChange={(e) => setTransactionType(e.target.value)}
                    >
                        <option value="deposit">Deposit</option>
                        <option value="withdraw">Withdraw</option>
                    </select>
                </div>
                <button type="submit" className="btn-submit">
                    {transactionType === 'deposit' ? 'Deposit' : 'Withdraw'}
                </button>
            </form>
            {message && <div className="success-message">{message}</div>}
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default Transaction;