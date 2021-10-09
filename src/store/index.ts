import { configureStore } from '@reduxjs/toolkit';
import libraryInfo from './librarySlice';

export default configureStore({
  reducer: {
    libraryInfo,
  },
});
