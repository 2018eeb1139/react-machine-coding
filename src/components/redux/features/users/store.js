// store.js
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/users/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

// Provider store
// main.jsx
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

<Provider store={store}>
  <App />
</Provider>;
