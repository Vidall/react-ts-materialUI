import { Navigate, Route, Routes } from "react-router"


export const AppRoute = () => {
    return (
        <Routes>
            <Route path="/inicio" element={<p>Ola mundo</p>}/>

            <Route path="*" element={<Navigate to='/inicio'/>}/>
        </Routes>
    )
}