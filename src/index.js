import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

export const userData = [
  { id: 1, name: "Max" },
  { id: 2, name: "Sveta" },
  { id: 3, name: "Arina" },
  { id: 4, name: "Raf" },
  { id: 5, name: "Cheri" },
  { id: 6, name: "Papa" },
  { id: 7, name: "Mama" },
];

export const messageData = [
  { id: 1, message: "qqq" },
  { id: 2, message: "aaa" },
  { id: 3, message: "ssss" },
  { id: 4, message: "dddd" },
];

export const posts = [
  { id: 1, message: 'Say Hello!!!', likesCount: 42 },
  { id: 2, message: 'Say Hello!!!!!!!!!!!!!!', likesCount: 23 },
  { id: 3, message: 'Say Hello!!!!!!!!!!!!!!!!!', likesCount: 11 },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App userData={userData} messageData={messageData} posts={posts} />
  </React.StrictMode>
);

