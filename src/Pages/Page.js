import { NavBar, Footer } from '../GlobalComponents'

function Page({children}) {
    return (
        <div className="App">
            <NavBar />

            <main>
                {children}
            </main>

            <Footer />
        </div>
    );
}

export default Page;