
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage?: string;
  status: 'draft' | 'published';
  categoryId: string;
  tags: string[];
  authorId: string;
  authorName: string;
  publishedAt: string;
  views: number;
  likes: number;
  shares: number;
  readingTime: number;
  seoTitle?: string;
  seoDescription?: string;
}

interface PostsState {
  posts: Post[];
  currentPost: Post | null;
  loading: boolean;
  categories: Array<{ id: string; name: string; }>;
}

const initialState: PostsState = {
  posts: [
    {
      id: '1',
      title: 'Khám phá React và TypeScript',
      slug: 'kham-pha-react-typescript',
      content: `# Khám phá React và TypeScript

React và TypeScript là một combo tuyệt vời cho việc phát triển ứng dụng web hiện đại. 

## Lợi ích của TypeScript

- **Type Safety**: Giúp phát hiện lỗi sớm
- **IntelliSense**: Hỗ trợ code completion tốt hơn
- **Refactoring**: Dễ dàng refactor code

## Cài đặt

\`\`\`bash
npx create-react-app my-app --template typescript
\`\`\`

Đây là một bài viết mẫu để demo hệ thống blog.`,
      excerpt: 'React và TypeScript là một combo tuyệt vời cho việc phát triển ứng dụng web hiện đại.',
      featuredImage: '/placeholder.svg',
      status: 'published',
      categoryId: '1',
      tags: ['React', 'TypeScript', 'Web Development'],
      authorId: '1',
      authorName: 'Admin User',
      publishedAt: '2024-01-15',
      views: 1250,
      likes: 45,
      shares: 12,
      readingTime: 5,
      seoTitle: 'Khám phá React và TypeScript - Hướng dẫn chi tiết',
      seoDescription: 'Tìm hiểu cách sử dụng React với TypeScript để xây dựng ứng dụng web hiện đại và an toàn.'
    }
  ],
  currentPost: null,
  loading: false,
  categories: [
    { id: '1', name: 'Technology' },
    { id: '2', name: 'Programming' },
    { id: '3', name: 'Web Development' }
  ],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    setCurrentPost: (state, action: PayloadAction<Post | null>) => {
      state.currentPost = action.payload;
    },
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.unshift(action.payload);
    },
    updatePost: (state, action: PayloadAction<Post>) => {
      const index = state.posts.findIndex(post => post.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
    deletePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
    incrementViews: (state, action: PayloadAction<string>) => {
      const post = state.posts.find(p => p.id === action.payload);
      if (post) post.views += 1;
      if (state.currentPost?.id === action.payload) {
        state.currentPost.views += 1;
      }
    },
    toggleLike: (state, action: PayloadAction<string>) => {
      const post = state.posts.find(p => p.id === action.payload);
      if (post) post.likes += 1;
      if (state.currentPost?.id === action.payload) {
        state.currentPost.likes += 1;
      }
    },
    incrementShares: (state, action: PayloadAction<string>) => {
      const post = state.posts.find(p => p.id === action.payload);
      if (post) post.shares += 1;
      if (state.currentPost?.id === action.payload) {
        state.currentPost.shares += 1;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { 
  setPosts, 
  setCurrentPost, 
  addPost, 
  updatePost, 
  deletePost, 
  incrementViews, 
  toggleLike, 
  incrementShares, 
  setLoading 
} = postsSlice.actions;
export default postsSlice.reducer;
