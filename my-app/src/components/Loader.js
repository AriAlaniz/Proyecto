//import "./Loader.css";
import loaderImg from "../imag/logo.png";

const Loader = () => {
    return (
        <>
            <div>
                <img src={loaderImg} className="loaderImg" alt="Loading.."></img>
            </div>
        </>
    )
}

export default Loader;