function Cart({info}) {
    return (
        <div className="wheel">
            <div className = "cart">
            <div className="cards">
            <p className="headd">{info.namee}</p>
            <p className="price">{info.price}</p>
            <p className="rest"> {info.details}</p>
                </div>
            </div>
        </div>
    )
}

export default Cart