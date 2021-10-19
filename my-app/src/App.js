import Banner from "./components/Banner.js";
import Explanation from "./components/Explanation.js";
import  Layout from "./components/Layout.js";


function App() {
  return (
    <>
  <Banner/>
   <Explanation/>
   </>
  );
}

export default App;

const Counter = () => {
  const [count, setCount] = useState(0);
  const [LastClickDate, setLastClickDate] = useState(new Date());
}
const onClick = () => {
  setCount(count + 1);
  setLastClickDate(new Date());
};

return (
  <>
  <h1>Cantidad de productos: {count} </h1>
  <button onClick={onClick}> + </button>
  <button onClick={ () => setCount(count - 1)}> - </button>
  </>
)

export default function App () {
  return(
    <>
    <Counter/>
    </>
  );
}
