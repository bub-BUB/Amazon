function Loginpops(){
    return(
        <div className="sb">
            <div className="log">SignIn</div>
            <div className="mail">
                <p className="user">Username</p>
                <input className="inp"></input>
            </div>
            <div className="pass">
                <p className="user">Password</p>
                <input className="inp"></input>
                <p className="fp">forgot password?</p>
            </div>
            <div className="butt"></div>
            <div className="orr">
                <p className="or"> or sign in using </p>
                <div className="gft"></div>
                <p className="fp">not a existing user?</p>
            </div>
        </div>
    )
}

export default Loginpops