import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTopics = createAsyncThunk(
  'topics/fetchTopics',
  async () => {
    const response = await fetch('http://localhost:3000/topics');
    const data = await response.json();
    return data; 
  }
);

interface TopicState {
  topics: Topic[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

interface Topic {
  id: number;
  user_id: number,
  name: string;
  description: string;
  cards: []
}

const initialState: TopicState = {
  topics: [],
  status: 'idle',
  error: null,
};

const topicSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add case reducers for the fetchTopics thunk
    builder.addCase(fetchTopics.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchTopics.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.topics = action.payload;
    });
    builder.addCase(fetchTopics.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message || 'Failed to fetch topics';
    });
  },
});

export default topicSlice.reducer;
