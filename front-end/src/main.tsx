import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./views/Navbar";
import Login from "./views/Login";
import Register from "./views/Register";
import TaskList from "./views/TaskList";
import { Provider } from "react-redux";
import { store } from "./app/store";
import RequireAuth from "./components/RequireAuth";
import Profile from "./views/Profile";

const router = createBrowserRouter([
	{
		element: (
			<>
				<Navbar />
				<Outlet />
			</>
		),
		children: [
			{
				path: "/",
				element: (
					<RequireAuth>
						<TaskList />
					</RequireAuth>
				),
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/Register",
				element: <Register />,
			},
			{
				path: "/profile",
				element: (
					<RequireAuth>
						<Profile />
					</RequireAuth>
				),
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router}></RouterProvider>
		</Provider>
	</React.StrictMode>
);
