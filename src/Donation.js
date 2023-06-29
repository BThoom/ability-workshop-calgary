import { NavBar, Footer } from './GlobalComponents'

function Donation() {
    return (
        <div className="App">
            <NavBar />

            <main>
                <section class="container mt-4">
                    <h1>Donation</h1>
                </section>

                <section class="container mt-4">
                    <div id="donationContainer" style={{width: "100%", height: "1150px", overflow: "hidden"}}>
                    <iframe id="donationIframe" style={{width: "100%", height: "100000px", top: "-1200px", position: "relative", border: "none"}}
                        src="https://shawcharityclassic.com/charity/participating-charities/ability-workshop-society/" title="Shaw Charity Classic Donation Page"></iframe>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Donation;