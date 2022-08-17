import classes from './ItemsList.module.css';
import Item from './Item';



const ItemsList = ({getItems}) => {
    return(
        <div className={classes.itemList}>
            {/* && 사용해서 조건이 참이면 바로 뒤의 요소가 출력 */}
            {getItems && getItems.map(getItem => (
                <Item  key={getItem.id} title={getItem.title} price={getItem.price}/>
            ))}
        </div>
    )
}

export default ItemsList;
