import { Route, Routes } from 'react-router-dom';
import { Main } from '../../partials/main/main'

const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Main />} /> 
        </Routes>
    )
}

export default AppRouter;