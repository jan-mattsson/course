const Filter = ({setFilter}) => {

    return(
        <div>
            filter: <input onChange={ event => setFilter(event.target.value)} />
        </div>
    )

}


export default Filter