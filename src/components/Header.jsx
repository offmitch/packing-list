import {Link} from "react-router-dom"

function Header(){

    return (
        <header>
            <h1>Packing List</h1>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/New">New List</Link></li>
                    <li><Link to="/Inventory">Inventory</Link></li>
                </ul>
            </nav>
            
        </header>
    );
}

export default Header;