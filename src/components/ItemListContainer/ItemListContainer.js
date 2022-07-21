import ItemProduct from "../ItemProduct/ItemProduct"
import './ItemListContainer.css'

const ItemListContainer = ({section}) => {

    return(
        <div className='list-products'>
            <h2>{section}</h2>
            <ItemProduct title="CumpleFeliz" price={9000} image={'img1.webp'}/>
            <ItemProduct title="ComboArte" price={8400} image={'img2.webp'}/>
        </div>
    )
}
export default ItemListContainer