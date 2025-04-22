import {Tasks} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getAllTasks} from '../GetTask';

interface initialStateProps {
  tasks: {id: string; title: string; status: string}[];
}

const initialState: initialStateProps = {
  tasks: [],
};

export const createTask = createAsyncThunk(
  'Tasks/createTask',
  async (data: any, thunkAPI) => {
    const task = JSON.stringify(data.tasks);
    AsyncStorage.setItem(Tasks, task).then(() => {
      thunkAPI.dispatch(getAllTasks());
    });
    return data.product;
  },
);

const TasksSlice = createSlice({
  name: 'Tasks',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(createTask.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
  },
});
export default TasksSlice.reducer;
