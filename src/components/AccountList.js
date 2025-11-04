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
                <p className="no-accounts-message">No accounts found. Create one to get started!</p>
            ) : (
                <>
                    {/* Desktop Table View */}
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

                    {/* Mobile Card View */}
                    <div className="account-cards">
                        {accounts.map((account) => (
                            <div key={account.id} className="account-card">
                                <div className="account-card-header">
                                    <span className="account-number">{account.accountNumber}</span>
                                </div>
                                <div className="account-card-body">
                                    <div className="account-info-row">
                                        <span className="info-label">Account Holder:</span>
                                        <span className="info-value">{account.accountHolderName}</span>
                                    </div>
                                    <div className="account-info-row">
                                        <span className="info-label">Balance:</span>
                                        <span className="balance-value">${account.balance.toFixed(2)}</span>
                                    </div>
                                </div>
                                <div className="account-card-footer">
                                    <button 
                                        onClick={() => handleDelete(account.id)}
                                        className="btn-delete"
                                    >
                                        Delete Account
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default AccountList;