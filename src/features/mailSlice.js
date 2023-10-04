import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counter/counterAPI';

const initialState = {
  // value: 0,
  sendMessageIsOpen: false,
  selectedMail: null,
};

export const mailSlice = createSlice({
  name: 'mail',
  initialState,

  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(incrementAsync.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action) => {
  //       state.status = 'idle';
  //       state.value += action.payload;
  //     });
  // },
});

export const { selectMail, openSendMessage, closeSendMessage } =
  mailSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectOpenMail = (state) => state.mail.selectedMail;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
//export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectMail(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default mailSlice.reducer;
