import Cart from '../components/Cart'
import Objects from '../components/Objects'
import Loginpops from '../components/Loginpop'
function Login(pops){
    let cards = Objects.map((ele) => {
        console.log(ele)
        return (
            <>
                <Cart info={ele} />
            </>
        )
    })
    return(
        <div className="Login">
            {/* <Loginpops/> */}
            <div className="Content">
                <div className="empty"></div>
                {cards}
            </div>
        </div>
    )
}
export default Login;