import React from "react";
// import { Route, Redirect } from "react-router-dom";

function Unauthorized() {
    return (
        <>
            <h1>Error 403</h1>
            <h2>You are not authorized to view this page</h2>
        </>
    )
}

export { Unauthorized }
