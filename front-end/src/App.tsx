import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import TaskList from "./components/TaskList";

function App() {
	const router = createBrowserRouter([
		{
			element: (
				<>
					<Navbar />
                    <Outlet/>
				</>
			),
            children: [
                {
                    path: "/",
                    element: <TaskList/>
                },
                {
                    path: "/login",
                    element: <Login/>
                },
                {
                    path: "/Register",
                    element: <Register/>
                },
            ]
		},
	]);
	return (
		<RouterProvider router={router} />
	);
}

export default App;
