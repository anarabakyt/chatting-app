import {BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard } from "../Pages/Dashboard"
import Login from "../Pages/Login"


export const AppRouter=()=>{

    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='/signin' element={<Login/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}