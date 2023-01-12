import { Route, Routes } from 'react-router-dom';
import { Cleanup } from '../../partials/pages/cleanup/cleanup';
import { Co2 } from '../../partials/pages/co2/co2';
import { Home } from '../../partials/pages/home/home';
import { Tilmeld } from '../../partials/pages/tilmeld/tilmeld';

const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />} /> 
            <Route path="/co2" element={<Co2 />} />
            <Route path="/cleanup" element={<Cleanup />} />  
            <Route path="/tilmeld" element={<Tilmeld />} />  
        </Routes>
    )
}

export default AppRouter;