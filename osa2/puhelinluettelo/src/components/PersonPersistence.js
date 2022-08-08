import axios from 'axios'

const PERSONS_COLLECTION_URI = "http://localhost:3001/persons"

const GetAllPersons = () => {
    return axios
    .get(PERSONS_COLLECTION_URI)
}

const AddNewPerson = ({name, key, number}) => {
    return axios
    .post(PERSONS_COLLECTION_URI, {name:name, key:key, number:number})
}

const DeletePerson =  (id) => {
    console.log('DELETE', `${PERSONS_COLLECTION_URI}/${id}`)
    return axios
      .delete(`${PERSONS_COLLECTION_URI}/${id}`)
}

const UpdatePerson = ({name, key, number, id}) => {
  console.log('UPDATE', id)
  return axios
    .put(`${PERSONS_COLLECTION_URI}/${id}`, {name:name, key:key, number:number, id:id})
}

export default {AddNewPerson, GetAllPersons, DeletePerson, UpdatePerson }