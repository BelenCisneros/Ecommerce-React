import './ItemProduct.css'
const ItemProduct = ({title, children}) => {
    return(
        <div className="modal-custom">
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default ItemProduct