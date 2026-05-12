import "./assets/tailwind.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AuthLayout from "./layout/AuthLayout";
const Dashboard = React.lazy(() => import("./pages/Dashboard"))
import { Route, Routes } from "react-router-dom";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Loading from "./components/Loading";
import React from "react";
import { Suspense } from "react";
const Guest = React.lazy(() => import("./pages/Guest"));
import GuestLayout from "./layout/GuestLayout";
function App() {
  return (
    <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="customers" element={<Customers />} />
          </Route>
          <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
        </Route>
        <Route element={<GuestLayout />}>
          <Route path="/guest" element={<Guest />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        </Routes>
    </Suspense>
  )
}
export default App;
