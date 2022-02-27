import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import expenseService from "./expenseService";

const initialState = {
  expenses: [],
  expense: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create a new expense
export const createExpense = createAsyncThunk(
  "expense/create",
  async (expenseData, thunkAPI) => {
    console.log(expenseData);
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await expenseService.createExpense(expenseData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// Get user all expenses data
export const getExpenses = createAsyncThunk(
  "expense/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await expenseService.getExpenses(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Review single expense item
export const getExpenseSingle = createAsyncThunk(
  "expenses/get",
  async (expenseId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await expenseService.getExpenseSingle(expenseId, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// delete single expense item
export const deleteExpense= createAsyncThunk(
  "expenses/delete",
  async (expenseId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await expenseService.deleteExpense(expenseId, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },

  extraReducers: (builder) => {
    builder
    .addCase(createExpense.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(createExpense.fulfilled, (state) => {
      state.isLoading = false;
      state.isSuccess = true;
    })
    .addCase(createExpense.rejected, (state, action) => {
      state.isLoading = false;
      state.isError= true;
      state.message = action.payload;
    })
    .addCase(getExpenses.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getExpenses.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.expenses = action.payload;
    })
    .addCase(getExpenses.rejected, (state, action) => {
      state.isLoading = false;
      state.isError= true;
      state.message = action.payload;
    })
    .addCase(getExpenseSingle.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getExpenseSingle.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.expense = action.payload;
    })
    .addCase(getExpenseSingle.rejected, (state, action) => {
      state.isLoading = false;
      state.isError= true;
      state.message = action.payload;
    })
  },
});

export const { reset } = expenseSlice.actions;
export default expenseSlice.reducer;
