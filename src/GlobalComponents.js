function NavBar() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg sticky-top navbar-dark">
                <div class="container">
                    <a class="navbar-brand" href="/">
                        <img src="/images/ability_wokshop_logo.png" alt="Logo" width="120" height="50" alt="Ability Workshop Logo" />
                    </a>
                
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                
                    <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="navbar-nav ml-auto">
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
                        <ul class="nav navbar-nav">
                            <li class="nav-item dropdown">
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="/request-assistance.html">Request Assistance</a></li>
                                    <li><a class="dropdown-item" href="/projects.html">Projects</a></li>
                                    <li><a class="dropdown-item" href="/volunteer.html">Volunteer</a></li>
                                    <li><a class="dropdown-item" href="/donation.html">Donate</a></li>
                                    <li><a class="dropdown-item" href="#">About Us</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

function Footer() {
    return (
        <footer class="container mt-4">
          <p>&copy; 2023 Ability Workshop Society. All rights reserved.</p>
        </footer>
    );
}

export { NavBar, Footer };