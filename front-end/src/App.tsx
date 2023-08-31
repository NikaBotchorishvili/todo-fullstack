import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./views/Navbar";
import Login from "./views/Login";
import Register from "./views/Register";
import TaskList from "./views/TaskList";

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
