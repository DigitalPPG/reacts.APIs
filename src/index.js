import React from "react";
import ReactDOM from "react-dom/client";
import { Post } from "./components/Post";
import { Get } from "./components/Get";
import  "./css/index.css";
import { TestAuth } from "./components/TestAuth";


ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
        <Get></Get>
        // <TestAuth></TestAuth>
    // </React.StrictMode>
);