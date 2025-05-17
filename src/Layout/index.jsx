import { Outlet } from 'react-router-dom';
import Header from '../home/Header';
import Footer from '../home/Footer';

const Layout = () => {
    return (


        <div className="App">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;

