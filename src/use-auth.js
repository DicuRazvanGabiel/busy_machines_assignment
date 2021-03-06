import React, { useContext, createContext, useState } from "react";

const authContext = createContext();

export function ProvideAuth({ children }) {
	const auth = useProvideAuth();
	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function useAuth() {
	return useContext(authContext);
}

function useProvideAuth() {
	const [user, setUser] = useState(null);

	const signin = (token, cb) => {
		setUser(token);
		cb();
	};

	const signout = (cb) => {
		setUser(null);
		cb();
	};

	return {
		user,
		signin,
		signout,
	};
}
