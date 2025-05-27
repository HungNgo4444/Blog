
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  postCount: number;
}

interface CategoriesState {
  categories: Category[];
  loading: boolean;
}

const initialState: CategoriesState = {
  categories: [
    { id: '1', name: 'Technology', slug: 'technology', description: 'Latest tech trends', postCount: 15 },
    { id: '2', name: 'Programming', slug: 'programming', description: 'Programming tutorials', postCount: 23 },
    { id: '3', name: 'Web Development', slug: 'web-development', description: 'Web dev guides', postCount: 18 },
  ],
  loading: false,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    addCategory: (state, action: PayloadAction<Category>) => {
      state.categories.push(action.payload);
    },
    updateCategory: (state, action: PayloadAction<Category>) => {
      const index = state.categories.findIndex(cat => cat.id === action.payload.id);
      if (index !== -1) {
        state.categories[index] = action.payload;
      }
    },
    deleteCategory: (state, action: PayloadAction<string>) => {
      state.categories = state.categories.filter(cat => cat.id !== action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setCategories, addCategory, updateCategory, deleteCategory, setLoading } = categoriesSlice.actions;
export default categoriesSlice.reducer;
