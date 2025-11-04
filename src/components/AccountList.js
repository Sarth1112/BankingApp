import React, { useState, useEffect } from 'react';
import AccountService from '../services/AccountService';
import './AccountList.css';

const AccountList = () => {
    const [accounts, setAccounts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchAccounts();
    }, []);

    const fetchAccounts = async () => {
        try {
            const response = await AccountService.getAllAccounts();
            setAccounts(response.data);
            setLoading(false);
        } catch (err) {
            setError('Error fetching accounts');
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this account?')) {
            try {
                await AccountService.deleteAccount(id);
                fetchAccounts();
            } catch (err) {
                alert('Error deleting account');
            }
        }
    };

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error-message">{error}</div>;

    return (
        <div className="account-list-container">
            <h2>All Accounts</h2>
            {accounts.length === 0 ? (
                <p>No accounts found. Create one to get started!</p>
            ) : (
                <table className="account-table">
                    <thead>
                        <tr>
                            <th>Account Number</th>
                            <th>Account Holder</th>
                            <th>Balance</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accounts.map((account) => (
                            <tr key={account.id}>
                                <td>{account.accountNumber}</td>
                                <td>{account.accountHolderName}</td>
                                <td>${account.balance.toFixed(2)}</td>
                                <td>
                                    <button 
                                        onClick={() => handleDelete(account.id)}
                                        className="btn-delete"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AccountList;