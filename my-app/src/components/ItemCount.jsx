import '../styles/ItemsConteiner.css';


const Counter = ({onDis,initial,onAdd}) => {
    return (
        <>
        <div className="conteinerButton">
        <button className="botones" onClick={onAdd}>+</button>
        <p className="parr1">{initial}</p>
        <button className="botones" onClick={onDis}>-</button>
        <button className="botones">Agregar al carrito</button>
        </div>
        </>
    )
}

export default Counter 