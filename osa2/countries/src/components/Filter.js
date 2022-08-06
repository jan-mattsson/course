
const Filter = ({setFilter}) => {
    return (
        <div>
            Filter: <input onChange={(event) => setFilter(event.target.value)} />
        </div>
    )
}

export default Filter