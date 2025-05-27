
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UserLayout from '../components/layout/UserLayout';
import PostCard from '../components/blog/PostCard';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, TrendingUp } from 'lucide-react';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const { posts } = useTypedSelector(state => state.posts);
  const { categories } = useTypedSelector(state => state.categories);
  const { isDark } = useTypedSelector(state => state.theme);

  // Get featured posts (published posts)
  const featuredPosts = posts.filter(post => post.status === 'published').slice(0, 6);
  const trendingPosts = [...posts]
    .filter(post => post.status === 'published')
    .sort((a, b) => b.views - a.views)
    .slice(0, 3);

  return (
    <UserLayout>
      {/* Hero Section */}
      <section className="text-center py-12 mb-12">
        <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Chào mừng đến với BlogApp
        </h1>
        <p className={`text-xl mb-8 max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Khám phá những bài viết chất lượng về công nghệ, lập trình và phát triển web
        </p>
        
        <div className="max-w-md mx-auto flex gap-2">
          <Input 
            placeholder="Tìm kiếm bài viết..." 
            className="flex-1"
          />
          <Button>
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Categories */}
      <section className="mb-12">
        <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Danh mục phổ biến
        </h2>
        <div className="flex flex-wrap gap-3">
          {categories.map(category => (
            <Badge 
              key={category.id} 
              variant="outline" 
              className="text-sm py-2 px-4 cursor-pointer hover:bg-blue-50 hover:border-blue-200"
            >
              {category.name} ({category.postCount})
            </Badge>
          ))}
        </div>
      </section>

      {/* Trending Posts */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <TrendingUp className={`h-5 w-5 mr-2 ${isDark ? 'text-white' : 'text-gray-900'}`} />
          <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Bài viết xu hướng
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendingPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Latest Posts */}
      <section>
        <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Bài viết mới nhất
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Xem thêm bài viết
          </Button>
        </div>
      </section>
    </UserLayout>
  );
};

export default HomePage;
