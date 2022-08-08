import axios from 'axios'

const PERSONS_COLLECTION_URI = "http://localhost:3001/persons"

const GetAllPersons = () => {
    return axios
    .get(PERSONS_COLLECTION_URI)
}

const AddNewPerson = ({name, key, number }) => {
    return axios
    .post(PERSONS_COLLECTION_URI, {name:name, key:key, number:number})
}

const DeletePerson =  (id) => {
    console.log('DELETE', `${PERSONS_COLLECTION_URI}/${id}`)
    return axios
      .delete(`${PERSONS_COLLECTION_URI}/${id}`)
}

export default {AddNewPerson, GetAllPersons, DeletePerson }