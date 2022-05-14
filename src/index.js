import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { HashRouter } from "react-router-dom";

import { theme } from "@src/store/styled/theme/theme";
import { store } from "./store/redux/index.js";

import App from "./App.jsx";

ReactDOM.render(
  <HashRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </HashRouter>,
  document.getElementById("root")
);
