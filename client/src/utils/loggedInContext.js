import React from "react";

const LoggedInContext = React.createContext({
    id: 0,
    username: "",
    firstName: "",
    lastName: "",
    isTrainer: true,
    isLoggedIn: false,
    handleChange: () => undefined
});

export default LoggedInContext;
