import NavBar from './NavBar'

function Donation(){
    return(
 
        <body>
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

            <footer class="container mt-4">
            <p>&copy; 2023 Ability Workshop Society. All rights reserved.</p>
            </footer>
        
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </body>
        
    );
}

export default Donation;