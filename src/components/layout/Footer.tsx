
import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const { isDark } = useTypedSelector(state => state.theme);

  return (
    <footer className={`border-t ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              BlogApp
            </h3>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Nền tảng blog hiện đại với nhiều tính năng hấp dẫn
            </p>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Liên kết
            </h4>
            <ul className="space-y-2">
              <li><a href="/" className={`text-sm hover:text-blue-600 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Trang chủ</a></li>
              <li><a href="/categories" className={`text-sm hover:text-blue-600 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Danh mục</a></li>
              <li><a href="/about" className={`text-sm hover:text-blue-600 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Giới thiệu</a></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Hỗ trợ
            </h4>
            <ul className="space-y-2">
              <li><a href="/contact" className={`text-sm hover:text-blue-600 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Liên hệ</a></li>
              <li><a href="/privacy" className={`text-sm hover:text-blue-600 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Chính sách</a></li>
              <li><a href="/terms" className={`text-sm hover:text-blue-600 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Điều khoản</a></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Mạng xã hội
            </h4>
            <div className="flex space-x-4">
              <Facebook className={`h-5 w-5 cursor-pointer hover:text-blue-600 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
              <Twitter className={`h-5 w-5 cursor-pointer hover:text-blue-600 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
              <Instagram className={`h-5 w-5 cursor-pointer hover:text-blue-600 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
              <Mail className={`h-5 w-5 cursor-pointer hover:text-blue-600 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
            </div>
          </div>
        </div>

        <div className={`border-t mt-8 pt-4 text-center ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2024 BlogApp. Tất cả các quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
