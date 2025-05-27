
import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import UserNavbar from './UserNavbar';
import Footer from './Footer';

interface UserLayoutProps {
  children: React.ReactNode;
}

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  const { isDark } = useTypedSelector(state => state.theme);

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <UserNavbar />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default UserLayout;
