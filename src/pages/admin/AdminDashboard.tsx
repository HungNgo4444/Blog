
import React from 'react';
import AdminLayout from '../../components/layout/AdminLayout';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, User, Tag, BarChart } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const { isDark } = useTypedSelector(state => state.theme);
  const { posts } = useTypedSelector(state => state.posts);
  const { categories } = useTypedSelector(state => state.categories);

  const stats = [
    {
      title: 'Tổng bài viết',
      value: posts.length,
      icon: FileText,
      color: 'bg-blue-500',
    },
    {
      title: 'Bài viết published',
      value: posts.filter(post => post.status === 'published').length,
      icon: FileText,
      color: 'bg-green-500',
    },
    {
      title: 'Categories',
      value: categories.length,
      icon: Tag,
      color: 'bg-purple-500',
    },
    {
      title: 'Tổng lượt xem',
      value: posts.reduce((total, post) => total + post.views, 0),
      icon: BarChart,
      color: 'bg-orange-500',
    },
  ];

  const recentPosts = posts.slice(0, 5);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Dashboard
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className={isDark ? 'bg-gray-800 border-gray-700' : 'bg-white'}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {stat.title}
                      </p>
                      <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {stat.value}
                      </p>
                    </div>
                    <div className={`p-3 rounded-full ${stat.color}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Posts */}
        <Card className={isDark ? 'bg-gray-800 border-gray-700' : 'bg-white'}>
          <CardHeader>
            <CardTitle className={isDark ? 'text-white' : 'text-gray-900'}>
              Bài viết gần đây
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPosts.map(post => (
                <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {post.title}
                    </h3>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {post.readTime} phút đọc • {post.views} lượt xem
                    </p>
                  </div>
                  <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                    {post.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
