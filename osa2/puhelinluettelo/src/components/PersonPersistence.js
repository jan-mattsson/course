import axios from 'axios'

const GetAllPersons = () => {
    return axios
    .get("http://localhost:3001/persons")
}

const AddNewPerson = ({name, key, number }) => {
    return axios
    .post('http://localhost:3001/persons', {name:name, key:key, number:number})
    .then(response => console.log('Add new person', response.data))
}

export default {AddNewPerson, GetAllPersons }