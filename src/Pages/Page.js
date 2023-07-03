import { NavBar, Footer } from '../GlobalComponents'
import { Outlet } from 'react-router-dom';

function Page() {
    return (
        <div className="App">
            <NavBar />

            <Outlet />

            <Footer />
        </div>
    );
}

export default Page;