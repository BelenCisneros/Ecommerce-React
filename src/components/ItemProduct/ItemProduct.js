import './ItemProduct.css'
import ItemCount from '../ItemCount/ItemCount'
const ItemProduct = ({title, price, image}) => {

    const onAdd = (qty) => {
        alert(`Agregaste ${qty} productos`);
    };
   
    return(
        <div className="item-product">
            <img src={`/assets/${image}`} alt="Imagen producto" />
            <p>{title}</p>
            <span>${price}</span>
            <ItemCount onAdd={onAdd} initial={1} stock={7} />
        </div>
    )
}

export default ItemProduct