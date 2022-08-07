
const Filter = ({setFilter}) => {
    return (
        <div>
            Find countries: <input onChange={(event) => setFilter(event.target.value)} />
        </div>
    )
}

export default Filter