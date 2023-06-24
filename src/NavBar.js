function NavBar() {
    return (
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
    );
}

export default NavBar;