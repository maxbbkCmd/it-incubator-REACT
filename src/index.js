import React from "react";
import ReactDOM from "react-dom/client";
import store from './components/Redux/redux-store';
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />
    </React.StrictMode>
  );
   
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree);