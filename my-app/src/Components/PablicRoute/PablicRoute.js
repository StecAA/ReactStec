import { Navigate, Outlet } from "react-router-dom"

export const PablicRoute =({ authed }) => {
return !authed ? <Outlet /> : <Navigate to="/profile" replace />


};