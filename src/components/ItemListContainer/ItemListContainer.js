import ItemProduct from "../ItemProduct/ItemProduct"
import './ItemListContainer.css'

const ItemListContainer = ({section}) => {

    return(
        <div className='list-products'>
            <h2>{section}</h2>
            <ItemProduct title="Campera Invierno" price= {1500} image={'juego3.jpg'}/>
        </div>
    )
}

export default ItemListContainer