import classes from "./Item.module.css";

const Item = (props) => {
    return (
        <div className={classes.item}>
            <img src="img/린넨 미디 원피스.png" alt="원피스사진"/>
            <p className={classes.title}>{props.title}</p>
            <p className={classes.price}>
                {props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </p>
        </div>
    )
}

export default Item;