import { NavLink } from 'react-router-dom'

const MainHeader = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName="active-page" to="/welcome">Welcome</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active-page" to="/products">Products</NavLink>
                    </li>
                    {/* <li>
                        <NavLink activeClassName="active-page" to="/">Home</NavLink>
                    </li> */}
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader