import reactDom from "react-dom";
import React from "react";
import App from "./App";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import "modern-normalize/modern-normalize.css";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

reactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
