import logo from './assets/imaegs/logo.svg';
import "./assets/ui-theme/custom/page-view.scss";


function Nav () {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id='navBar'>
            <a className="navbar-brand mr-0 mr-md-2" href=""><img src={logo} alt="My logo" /></a>
            <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="d-none d-md-block">
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
            </div>
        </nav>

    );
}

export default Nav;