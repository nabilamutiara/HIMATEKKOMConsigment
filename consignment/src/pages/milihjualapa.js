import "./milihjualapa.css"
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
const Notfound = () => {
    const navigate = useNavigate()
    return (
        <>
        <div className="pagenotfound">
            <div className="tulisankliksalahsatu">
                Click One Of These
            </div>
            <div className="duapilihan">
                <div className="pilihansellaproduct">
                    <Link to="/product">Sell A Product</Link>
                </div>
                <div className="pilihansellaservice">
                    <Link to="/product">Sell A Service
                    (App, Website, IoT)
                    </Link>
                    
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Notfound