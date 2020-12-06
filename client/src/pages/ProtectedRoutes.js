// import React from "react";
// import { Route, Redirect } from "react-router-dom";

// function TrainerProtectedRoutes({ isLoggedIn, isTrainer, component: Component, errorComponent: ErrorComponent, ...rest }) {
//     return (
//         <Route
//             {...rest}
//             render={(props) => {

//                 if (!isLoggedIn) {
//                     return (
//                         <Redirect to={
//                             {
//                                 pathname: "/login",
//                                 state: { from: props.location }
//                             }
//                         } />
//                     )
//                 } else if (!isTrainer) {
//                     return <ErrorComponent />
//                 } else {
//                     return <Component />;
//                 }

//             }}
//         />
//     )
// }

// function ClientProtectedRoutes({ isLoggedIn, isTrainer, component: Component, errorComponent: ErrorComponent, ...rest }) {
//     return (
//         <Route
//             {...rest}
//             render={(props) => {

//                 if (!isLoggedIn) {
//                     return (
//                         <Redirect to={
//                             {
//                                 pathname: "/login",
//                                 state: { from: props.location }
//                             }
//                         } />
//                     )
//                 } else if (isTrainer) {
//                     return <ErrorComponent />
//                 } else {
//                     return <Component />;
//                 }
//             }}
//         />
//     )
// }

// export { ClientProtectedRoutes, TrainerProtectedRoutes };

// // if (isLoggedIn) {
// //     return <Component />;
// // } else {
// //     return (
// //         <Redirect to={
// //             {
// //                 pathname: "/login",
// //                 state: { from: props.location }
// //             }
// //         } />
// //     )
// // }