import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg sticky-top navbar-dark">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">
                    <img src="images/ability_wokshop_logo.png" width="120" height="50" alt="Ability Workshop Logo" />
                </Link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse flex-row-reverse" id="myNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/request-assistance">Request Assistance</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/projects">Projects</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/volunteer">Volunteer</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/donate">Donate</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/about">About Us</NavLink>
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
          <p class="p-0">&copy; 2023 Ability Workshop Society. All rights reserved.</p>
        </footer>
    );
}

export { NavBar, Footer };