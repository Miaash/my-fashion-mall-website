import classes from "./Item.module.css";
import { FaShoppingCart } from 'react-icons/fa';

const Item = (props) => {
    return (
        <div className={classes.item}>
            <img src="img/린넨 미디 원피스.png" alt="원피스사진"/>
            <span className={classes.icon}><FaShoppingCart className={classes.cartIcon}/></span>
            <span className={classes.title}>{props.title}</span>
            <span className={classes.price}>
                {props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
        </div>
    )
}

export default Item;