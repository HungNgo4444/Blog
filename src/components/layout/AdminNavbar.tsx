
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { toggleTheme } from '../../store/slices/themeSlice';
import { logout } from '../../store/slices/authSlice';
import { Sun, Moon, User, LogOut, Home } from 'lucide-react';

const AdminNavbar: React.FC = () => {
  const dispatch = useDispatch();
  const { isDark } = useTypedSelector(state => state.theme);
  const { user } = useTypedSelector(state => state.auth);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className={`sticky top-0 z-50 border-b ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      <div className="px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link to="/admin" className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Admin Panel
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <Home className="h-5 w-5" />
              </Button>
            </Link>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={handleThemeToggle}
              className={isDark ? 'text-yellow-400 hover:text-yellow-300' : 'text-gray-600 hover:text-gray-800'}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <div className="flex items-center space-x-2">
              <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {user?.name}
              </span>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleLogout}>
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
