import { Button } from "@mui/material"
import { Navigate, Route, Routes } from "react-router"


export const AppRoute = () => {
    return (
        <Routes>
            <Route path="/inicio" element={<Button variant="contained" color="primary">Enviar</Button>}/>

            <Route path="*" element={<Navigate to='/inicio'/>}/>
        </Routes>
    )
}