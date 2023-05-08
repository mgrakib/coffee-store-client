
import { createBrowserRouter } from "react-router-dom";
import Home from '../components/Home/Home';
import Main from '../Layout/Main/Main';
import AddNewCoffee from '../components/AddNewCoffee/AddNewCoffee';
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";
import CoffeeDetails from "../components/CoffeeDetails/CoffeeDetails";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "add-new-coffee",
				element: <AddNewCoffee />,
			},
			{
				path: "update-coffee/:id",
				element: <UpdateCoffee />,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/coffee/${params.id}`),
			},
			{
				path: "coffee-details/:id",
				element: <CoffeeDetails />,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/coffee/${params.id}`),
			},
		],
	},
]);

export default router;