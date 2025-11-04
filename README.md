# 🏦 Banking Application - Frontend

A modern, responsive web application for banking operations built with React, featuring an intuitive interface for account management and financial transactions.

## 🌟 Live Demo

**Live Application:** [https://banking-sarthkg-1122.netlify.app](https://banking-sarthkg-1122.netlify.app)

**Backend API:** [https://bankingapp-backend-bankingspringsql.up.railway.app](https://bankingapp-backend-bankingspringsql.up.railway.app/api/accounts)

## 📋 Overview

This is the frontend interface for a comprehensive banking application that provides users with a seamless experience for managing their bank accounts. The application offers a clean, modern UI with full mobile responsiveness, allowing users to create accounts, view balances, and perform transactions from any device.

## ✨ Features

- 🏦 **Account Management**
  - Create new bank accounts with initial balance
  - View all accounts in a responsive layout
  - Delete accounts with confirmation
  - Auto-generated unique account numbers
  
- 💸 **Transaction Operations**
  - Deposit money into accounts
  - Withdraw money with balance validation
  - Real-time balance updates
  - Transaction validation and error handling
  
- 📱 **Responsive Design**
  - Mobile-first approach
  - Adaptive layouts for phone, tablet, and desktop
  - Card-based view on mobile devices
  - Table view on larger screens
  
- 🎨 **Modern UI/UX**
  - Clean and intuitive interface
  - Smooth animations and transitions
  - Tab-based navigation
  - Success and error notifications
  - Loading states

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 18** - UI library
- **React Hooks** - State management (useState, useEffect)
- **JavaScript (ES6+)** - Programming language

### **HTTP Client**
- **Axios** - Promise-based HTTP requests

### **Styling**
- **CSS3** - Custom styling
- **Responsive Design** - Media queries for all screen sizes
- **Flexbox & Grid** - Modern layout techniques

### **Build Tools**
- **Create React App** - Project setup and build configuration
- **npm** - Package management

### **Deployment**
- **Netlify** - Hosting and CI/CD


## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm
- Git

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/banking-frontend.git
cd banking-frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file in the root directory:
```env
REACT_APP_API_URL=http://localhost:8080/api/accounts
```

4. **Start the development server**
```bash
npm start
```

The application will open at `http://localhost:3000`

## 🎯 Features Walkthrough

### 1. Create Account
- Navigate to "Create Account" tab
- Enter account holder name
- Optionally set initial balance
- Click "Create Account"
- Receive auto-generated account number

### 2. View Accounts
- Navigate to "View Accounts" tab
- See all accounts in responsive layout
- **Desktop:** Table view with sortable columns
- **Mobile:** Card-based view for easy scrolling
- Delete accounts with confirmation dialog

### 3. Make Transactions
- Navigate to "Transactions" tab
- Enter account ID
- Enter transaction amount
- Select Deposit or Withdraw
- Submit transaction
- View updated balance



## 🎨 UI Components

### 1. CreateAccount Component
- Form with input validation
- Success/error messaging
- Auto-clear form on success

### 2. AccountList Component
- Responsive table/card layout
- Delete confirmation
- Empty state handling
- Loading state

### 3. Transaction Component
- Dropdown for transaction type
- Real-time balance display
- Input validation
- Error handling

## 🌐 API Integration

### AccountService
```javascript
const API_BASE_URL = process.env.REACT_APP_API_URL;

// Service methods
- createAccount(account)
- getAccountById(id)
- getAllAccounts()
- deposit(transaction)
- withdraw(transaction)
- deleteAccount(id)
```

## 🔧 Configuration

### Environment Variables

**Development (.env):**
```env
REACT_APP_API_URL=http://localhost:8080/api/accounts
```

**Production (Netlify):**
```env
REACT_APP_API_URL=https://bankingapp-backend-bankingspringsql.up.railway.app/api/accounts
```

## 📦 Build and Deployment

### Build for Production
```bash
npm run build
```

Creates optimized production build in `build/` folder.

### Deploy to Netlify

1. **Automatic Deployment (Recommended)**
   - Push code to GitHub
   - Connect repository to Netlify
   - Configure environment variables
   - Auto-deploy on every push

2. **Manual Deployment**
   - Build the project: `npm run build`
   - Drag and drop `build` folder to Netlify

### Netlify Configuration
- **Build Command:** `npm run build`
- **Publish Directory:** `build`
- **Environment Variable:** `REACT_APP_API_URL`

## 🎭 Demo Credentials

For testing purposes, you can:
- Create any account (no authentication required)
- Use any account ID for transactions
- Delete any account


## 🧪 Testing

### Manual Testing Checklist
- [ ] Create account with valid data
- [ ] Create account with empty fields (validation)
- [ ] View all accounts
- [ ] Deposit positive amount
- [ ] Withdraw within balance
- [ ] Withdraw more than balance (error handling)
- [ ] Delete account
- [ ] Test on mobile device
- [ ] Test on tablet
- [ ] Test on desktop

### Browser Compatibility
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance Optimization

- Code splitting with React.lazy (future enhancement)
- Optimized image assets
- Minified production build
- CDN delivery via Netlify
- Gzip compression enabled

## 🔐 Security Considerations

- Environment variables for API URLs
- Input sanitization
- CORS-enabled API communication
- No sensitive data stored in frontend
- HTTPS encryption (Netlify)


## 📝 Future Enhancements

- [ ] User authentication (login/register)
- [ ] Transaction history view
- [ ] Account statements download (PDF)
- [ ] Transfer between accounts
- [ ] Search and filter accounts
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Progressive Web App (PWA) capabilities
- [ ] Email notifications
- [ ] Account analytics dashboard
- [ ] Export data to CSV/Excel

## 🙏 Acknowledgments

- React Documentation
- Netlify Platform
- Create React App team
- Open source community

## 📞 Support

For support, email your.email@example.com or open an issue in the repository.

## 🔗 Related Projects

- [Banking Backend](https://github.com/Sarth1112/BankingApp-Backend) - Spring Boot REST API

