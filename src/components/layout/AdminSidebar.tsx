
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { 
  LayoutDashboard, 
  FileText, 
  Tag, 
  Tags, 
  User, 
  BarChart, 
  Settings 
} from 'lucide-react';

const AdminSidebar: React.FC = () => {
  const { isDark } = useTypedSelector(state => state.theme);
  const location = useLocation();

  const menuItems = [
    {
      name: 'Dashboard',
      path: '/admin',
      icon: LayoutDashboard,
    },
    {
      name: 'Quản lý bài viết',
      path: '/admin/posts',
      icon: FileText,
    },
    {
      name: 'Quản lý category',
      path: '/admin/categories',
      icon: Tag,
    },
    {
      name: 'Quản lý tags',
      path: '/admin/tags',
      icon: Tags,
    },
    {
      name: 'Quản lý tác giả',
      path: '/admin/authors',
      icon: User,
    },
    {
      name: 'Analytics',
      path: '/admin/analytics',
      icon: BarChart,
    },
    {
      name: 'Cấu hình',
      path: '/admin/settings',
      icon: Settings,
    },
  ];

  return (
    <aside className={`w-64 min-h-screen border-r ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-500 text-white'
                      : isDark
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
