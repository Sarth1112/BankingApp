import React, { useState } from 'react';
import CreateAccount from './components/CreateAccount';
import AccountList from './components/AccountList';
import Transaction from './components/Transaction';
import './App.css';

function App() {
    const [activeTab, setActiveTab] = useState('create');

    return (
        <div className="App">
            <header className="app-header">
                <h1>🏦 Banking Application</h1>
            </header>
            
            <nav className="nav-tabs">
                <button 
                    className={activeTab === 'create' ? 'active' : ''}
                    onClick={() => setActiveTab('create')}
                >
                    Create Account
                </button>
                <button 
                    className={activeTab === 'list' ? 'active' : ''}
                    onClick={() => setActiveTab('list')}
                >
                    View Accounts
                </button>
                <button 
                    className={activeTab === 'transaction' ? 'active' : ''}
                    onClick={() => setActiveTab('transaction')}
                >
                    Transactions
                </button>
            </nav>

            <main className="main-content">
                {activeTab === 'create' && <CreateAccount />}
                {activeTab === 'list' && <AccountList />}
                {activeTab === 'transaction' && <Transaction />}
            </main>

            <footer className="app-footer">
                <p>© 2025 Banking App. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;