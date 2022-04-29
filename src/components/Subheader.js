function Subheader(prop) {
    console.log(prop.con2)
    return (
        <div className="sub">
            <p className="tags"> Welcome </p> 
            <p className= "tag"> {prop.con2} </p>
            <p className="tags">  </p> 
            <p className="tags"> Best Sellers </p> 
            <p className="tags"> Mobiles </p> 
            <p className="tags"> Customer Service </p> 
            <p className="tags"> Today's Deals </p> 
            <p className="tags"> Fashion </p> 
        </div>
    )
}

export default Subheader