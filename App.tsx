import { useState, useEffect } from 'react';
import { LandingPage } from './components/landing-page.tsx';
import { AuthScreen } from './components/auth-screen.tsx';
import { TouristDashboard } from './components/tourist-dashboard.tsx';
import { AdminDashboard } from './components/admin-dashboard.tsx';
import { Toaster } from './components/ui/sonner';

export type UserType = 'tourist' | 'admin' | 'police';

export interface User {
  id: string;
  name: string;
  email: string;
  type: UserType;
  digitalId?: string;
  safetyScore?: number;
  location?: {
    lat: number;
    lng: number;
    address: string;
  };
  emergencyContacts?: Array<{
    name: string;
    phone: string;
    relation: string;
  }>;
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [showAuth, setShowAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('tourhelp_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem('tourhelp_user', JSON.stringify(userData));
    setShowAuth(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('tourhelp_user');
    setShowAuth(false);
  };

  const handleShowAuth = () => {
    setShowAuth(true);
  };

  const handleBackToLanding = () => {
    setShowAuth(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (user) {
    if (user.type === 'admin' || user.type === 'police') {
      return (
        <>
          <AdminDashboard user={user} onLogout={handleLogout} />
          <Toaster />
        </>
      );
    }

    return (
      <>
        <TouristDashboard user={user} onLogout={handleLogout} />
        <Toaster />
      </>
    );
  }

  if (showAuth) {
    return (
      <>
        <AuthScreen onLogin={handleLogin} onBack={handleBackToLanding} />
        <Toaster />
      </>
    );
  }

  return (
    <>
      <LandingPage onShowAuth={handleShowAuth} />
      <Toaster />
    </>
  );
}