import reactDom from "react-dom";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "modern-normalize/modern-normalize.css";
import { BrowserRouter } from "react-router-dom";
// import { PersistGate } from 'redux-persist/integration/react'

reactDom.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>

    {/* </PersistGate> */}
  </Provider>,
  document.getElementById("root")
);
