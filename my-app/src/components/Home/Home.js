import img from '../Home/home.jpeg';
import acuarela from '../Home/acuarela.gif';
import '../Home/home.css';

export const Home = () =>
    <div>
       <h1>Tu regalo ideal lo encontras aca!</h1>;
       <img className='img' src={acuarela}></img>
       <img  className='img' src={img}></img>
       <img className='img' src={acuarela}></img>
     </div>
export default Home;