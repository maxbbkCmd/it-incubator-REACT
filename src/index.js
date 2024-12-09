import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addPost } from './components/Redux/state';
import state from './components/Redux/state';
import { subscribe } from './components/Redux/state';


const rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} />
    </React.StrictMode>
  );
  
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree);