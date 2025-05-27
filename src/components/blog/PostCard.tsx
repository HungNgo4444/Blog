
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { toggleLike, incrementShares } from '../../store/slices/postsSlice';
import { Post } from '../../store/slices/postsSlice';
import { Heart, Share2, Eye, Clock } from 'lucide-react';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const dispatch = useDispatch();
  const { isDark } = useTypedSelector(state => state.theme);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(toggleLike(post.id));
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(incrementShares(post.id));
    navigator.share?.({
      title: post.title,
      text: post.excerpt,
      url: `/posts/${post.slug}`,
    });
  };

  return (
    <Card className={`overflow-hidden hover:shadow-lg transition-shadow ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
      <Link to={`/posts/${post.slug}`}>
        {post.featuredImage && (
          <div className="aspect-video overflow-hidden">
            <img 
              src={post.featuredImage} 
              alt={post.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary" className="text-xs">
              {post.tags[0]}
            </Badge>
            <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {new Date(post.publishedAt).toLocaleDateString('vi-VN')}
            </span>
          </div>
          
          <h3 className={`text-lg font-semibold line-clamp-2 hover:text-blue-600 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {post.title}
          </h3>
        </CardHeader>

        <CardContent>
          <p className={`text-sm line-clamp-3 mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-xs">
              <div className={`flex items-center space-x-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                <Eye className="h-3 w-3" />
                <span>{post.views.toLocaleString()}</span>
              </div>
              
              <div className={`flex items-center space-x-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                <Clock className="h-3 w-3" />
                <span>{post.readingTime} phút đọc</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLike}
                className="p-1 h-auto"
              >
                <Heart className="h-4 w-4 mr-1" />
                <span className="text-xs">{post.likes}</span>
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="p-1 h-auto"
              >
                <Share2 className="h-4 w-4 mr-1" />
                <span className="text-xs">{post.shares}</span>
              </Button>
            </div>
          </div>

          <div className={`mt-3 pt-3 border-t flex items-center ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Bởi <span className="font-medium">{post.authorName}</span>
            </span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default PostCard;
