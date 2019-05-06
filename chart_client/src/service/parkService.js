
import axios from 'axios'

export default {
    getAll() {
        return axios.get('/api/parks/').then( response => {
            return response.data 
        })
    },

    addPark(park) {
        return axios.post('/api/park/', park).then(response => {
            return response.data 
        })
    }

}