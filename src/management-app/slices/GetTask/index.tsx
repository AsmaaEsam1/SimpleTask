import {Tasks} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

interface initialStateProps {
  tasks: {id: string; title: string; status: string}[];
}

const initialState: initialStateProps = {
  tasks: [],
};

export const getAllTasks = createAsyncThunk('Tasks/getTasks', async () => {
  const value = await AsyncStorage.getItem(Tasks);
  if (value != null) {
    return JSON.parse(value);
  } else {
    return [];
  }
});
const TasksSlice = createSlice({
  name: 'Tasks',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
  },
});
export default TasksSlice.reducer;
