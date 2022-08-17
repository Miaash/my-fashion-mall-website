import classes from "./Header.module.css";
import { FaBars, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
    return(
        <nav>
            <ul className={classes.icons}>
                <li><FaBars className={classes.menubarIcon}/></li>
                <li><img src="img/mainlogo.png" className={classes.mainlogo}/></li>
                <li><FaShoppingCart className={classes.cartIcon}/></li>
                <li><FaUser className={classes.userIcon}/></li>
            </ul>
        </nav>
    )
}


export default Header;