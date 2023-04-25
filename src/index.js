import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import MovieContext from "./Store/MovieContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<MovieContext>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</MovieContext>
);
