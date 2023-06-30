function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg sticky-top navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src="/images/ability_wokshop_logo.png" alt="Logo" width="120" height="50" alt="Ability Workshop Logo" />
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse flex-row-reverse" id="myNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/request-assistance.html">Request Assistance</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/projects.html">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/volunteer.html">Volunteer</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/donation.html">Donate</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

function Footer() {
    return (
        <footer class="text-center bg-light text-muted p-4">
          <p>&copy; 2023 Ability Workshop Society. All rights reserved.</p>
        </footer>
    );
}

export { NavBar, Footer };