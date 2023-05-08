import  { createContext, useEffect, useState } from 'react';


export const AuthContextAPI = createContext({});

const AuthProvider = ({ children }) => {
	// load coffee data 
	const [coffees, setCoffees] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/coffees`)
			.then(res => res.json())
			.then(data => setCoffees(data))
	},[])

	
	const authInfo = { coffees, setCoffees };
	return (
		<AuthContextAPI.Provider value={authInfo}>
			{children}
		</AuthContextAPI.Provider>
	);
};

export default AuthProvider;