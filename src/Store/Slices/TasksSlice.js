import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";

// 🔹 Async thunk para crear una tarea
export const createTask = createAsyncThunk(
  "tasks/createTask",
  async (taskData, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/tasks", taskData);
      return data; // la tarea creada
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "Error desconocido" });
    }
  }
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    loading: false,
    error: null,
  },
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks=[action.payload, ...state.tasks];
      })
      .addCase(createTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message || "Error al crear tarea";
      });
  },
});

export const { setTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
