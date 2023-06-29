import { NavBar, Footer } from './GlobalComponents'

function Donation(){
    return(
        <div className="App">
            <NavBar />

            <main>
            <section class="container mt-4">
                <h1>Donation</h1>
            </section>

            <section class="container mt-4">
                <div id="donationContainer" >
                <iframe id="donationIframe" 
                    src="https://shawcharityclassic.com/charity/participating-charities/ability-workshop-society/"></iframe>
                </div>
            </section>
            </main>

            <Footer />
        </div>
    );
}

export default Donation;