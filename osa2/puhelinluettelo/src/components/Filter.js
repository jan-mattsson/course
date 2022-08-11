const Filter = ({setFilter}) => {

    return(
        <div className="form">
            <div className='label'>filter:</div>
            <div className='input'> <input onChange={ event => setFilter(event.target.value)} /></div>
        </div>
    )

}


export default Filter