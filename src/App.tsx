import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { SettingsProvider } from './contexts/SettingsContext';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Reports from './pages/Reports';
import Orders from './pages/Orders';
import Inventory from './pages/Inventory';
import Authors from './pages/Authors';
import Publishers from './pages/Publishers';
import AddInventoryItem from './pages/AddInventoryItem';
import Customers from './pages/Customers';
import Users from './pages/Users';
import Categories from './pages/Categories';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Payments from './pages/Payments';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <SettingsProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/inventory/authors" element={<Authors />} />
              <Route path="/inventory/publishers" element={<Publishers />} />
              <Route path="/inventory/add" element={<AddInventoryItem />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/users" element={<Users />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/payments" element={<Payments />} />
            </Routes>
          </Layout>
        </Router>
      </SettingsProvider>
    </ThemeProvider>
  );
};

export default App;