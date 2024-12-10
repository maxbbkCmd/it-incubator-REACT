import React from "react";
import ReactDOM from "react-dom/client";
import store from './components/Redux/state';
import "./index.css";
import App from "./App";


const rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>
  );
   
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree);