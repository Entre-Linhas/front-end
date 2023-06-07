import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/signin" Component={SignIn} />
                <Route path="/signup" Component={SignUp} />
            </Routes>
        </BrowserRouter>
    )
}