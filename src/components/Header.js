import Subheader from '../components/Subheader'


function Header(pops) {
    return (
        <div className="head">
            <div className="rel">
                <div className="amazon"></div>
                <div className="del"></div>
                <input className="search"></input>
            </div>
            <div className="tent">
                <Subheader con2={pops.con.cont2} />
            </div>
        </div>
    )
}

export default Header