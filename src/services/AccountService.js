import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api/accounts';
class AccountService {
    
    createAccount(account) {
        return axios.post(API_BASE_URL, account);
    }
    
    getAccountById(id) {
        return axios.get(`${API_BASE_URL}/${id}`);
    }
    
    getAllAccounts() {
        return axios.get(API_BASE_URL);
    }
    
    deposit(transaction) {
        return axios.put(`${API_BASE_URL}/deposit`, transaction);
    }
    
    withdraw(transaction) {
        return axios.put(`${API_BASE_URL}/withdraw`, transaction);
    }
    
    deleteAccount(id) {
        return axios.delete(`${API_BASE_URL}/${id}`);
    }
}

const accountService = new AccountService();
export default accountService;