import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import "./pages/shimdongseup/Login/Login.scss";
import "./pages/shimdongseup/Main/Main.scss";
import "./styles/reset.scss";
import "./styles/common.scss";
import GlobalStyle from "./styles/GlobalStyle";
import ThemeProvider from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />);
