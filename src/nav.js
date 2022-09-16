import logo from './assets/imaegs/logo.svg';


function Navbar () {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand mr-0 mr-md-2" href="#"><img src={logo} alt="My logo" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
                aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                </ul>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" disabled />
                    <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

    );
}

export default Navbar;