import './ItemProduct.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemProduct = ({name, price, thumbnail}) => {

    const onAdd = (qty) => {
        alert(`Agregaste ${qty} productos`);
    };
   
    return(
        <div className="item-product">
            <img src={`/assets/${thumbnail}`} alt="Imagen producto" />
            <p>{name}</p>
            <span>${price}</span>
            <ItemCount onAdd={onAdd} initial={1} stock={7} />
        </div>
    )
}

export default ItemProduct