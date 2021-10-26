const Counter = ({onDis,initial,onAdd}) => {
    return (
        <>
        <button className="botones" onClick={onAdd}>+</button>
        <p className="parr1">{initial}</p>
        <button className="botones" onClick={onDis}>-</button>
        </>
    )
}

export default Counter 