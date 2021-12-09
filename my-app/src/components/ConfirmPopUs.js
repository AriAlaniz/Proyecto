
function ConfirmPopUp({Children, actionBtn, box}) {
    const actinoHandler = (e) => {
        e.stopPropagation ()
        e.preventDefault ()
        actionBtn ()
    }

    const returnHandler = (e) => {
        e.stopPropagation ()
        e.preventDefault ()
        box.setRemoveBox(false)
    }


    return (
        <div className={`ConfirmPopUp ${box.removeBox ? 'show' : 'noShow'}`} onClick={() => box.setRemoveBox(false)}>
            <div className='confirmMsg' onClick={(e) =>e.stopPropagation()}>
                {Children}
                <button className='deleteBtn' onClick={(e) => actinoHandler(e) }>Continuar</button>
                <button className='returnBtn' onClick={(e) => returnHandler(e) }>Regresar</button>
            </div>
        </div>
    )
}
 export default ConfirmPopUp
