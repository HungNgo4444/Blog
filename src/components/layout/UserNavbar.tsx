
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { toggleTheme } from '../../store/slices/themeSlice';
import { logout } from '../../store/slices/authSlice';
import { Sun, Moon, User, LogOut, PenTool } from 'lucide-react';

const UserNavbar: React.FC = () => {
  const dispatch = useDispatch();
  const { isDark } = useTypedSelector(state => state.theme);
  const { user, isAuthenticated } = useTypedSelector(state => state.auth);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className={`sticky top-0 z-50 border-b ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            BlogApp
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`hover:text-blue-600 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Trang chủ
            </Link>
            <Link to="/categories" className={`hover:text-blue-600 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Danh mục
            </Link>
            <Link to="/about" className={`hover:text-blue-600 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Giới thiệu
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleThemeToggle}
              className={isDark ? 'text-yellow-400 hover:text-yellow-300' : 'text-gray-600 hover:text-gray-800'}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Xin chào, {user?.name}
                </span>
                <Link to="/profile">
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
                {user?.role === 'admin' && (
                  <Link to="/admin">
                    <Button variant="ghost" size="icon">
                      <PenTool className="h-5 w-5" />
                    </Button>
                  </Link>
                )}
                <Button variant="ghost" size="icon" onClick={handleLogout}>
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="ghost">Đăng nhập</Button>
                </Link>
                <Link to="/register">
                  <Button>Đăng ký</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
