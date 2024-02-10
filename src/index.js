import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DashboardComponent from "./modules/dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<div className="flex w-full h-full">
		<DashboardComponent />
	</div>
);
