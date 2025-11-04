import React, { useState } from 'react';
import AccountService from '../services/AccountService';
import './CreateAccount.css';

const CreateAccount = () => {
    const [accountHolderName, setAccountHolderName] = useState('');
    const [initialBalance, setInitialBalance] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            const account = {
                accountHolderName,
                balance: parseFloat(initialBalance) || 0
            };

            const response = await AccountService.createAccount(account);
            setMessage(`Account created successfully! Account Number: ${response.data.accountNumber}`);
            setAccountHolderName('');
            setInitialBalance('');
        } catch (err) {
            setError(err.response?.data?.message || 'Error creating account');
        }
    };

    return (
        <div className="create-account-container">
            <h2>Create New Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Account Holder Name:</label>
                    <input
                        type="text"
                        value={accountHolderName}
                        onChange={(e) => setAccountHolderName(e.target.value)}
                        required
                        placeholder="Enter account holder name"
                    />
                </div>
                <div className="form-group">
                    <label>Initial Balance:</label>
                    <input
                        type="number"
                        step="0.01"
                        value={initialBalance}
                        onChange={(e) => setInitialBalance(e.target.value)}
                        placeholder="Enter initial balance (optional)"
                    />
                </div>
                <button type="submit" className="btn-submit">Create Account</button>
            </form>
            {message && <div className="success-message">{message}</div>}
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default CreateAccount;