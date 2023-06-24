

function Donation(){
    return(
 
        <body>
            <header>
            <nav class="navbar navbar-expand-lg fixed-top">
                <div class="container">
                <a class="navbar-brand" href="/">
                    <img src="images/ability_wokshop_logo.png" alt="Logo" width="120" height="50"/>
                </a>
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Request Assistance</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="projects.html">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="volunteer.html">Volunteer</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="donation.html">Donate</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About Us</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
            </header>

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