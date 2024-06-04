// Uygulamanın tüm durumunu tutan merkezi depodur

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/counterSlice';
import userReducer from '../redux/userSlice';

export const store = configureStore({
  // reducer: Store'daki durumu değiştiren saf fonksiyonlardır. Action'ı ve mevcut durumu alır, yeni durumu döner.
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});
