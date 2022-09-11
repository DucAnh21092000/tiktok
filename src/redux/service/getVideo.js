import axios from "axios"
axios.defaults.baseURL = 'https://ducanh-store.herokuapp.com/api'
const getAllVideo = async () => {
    return await axios.get('/videos')
        .then(rs => rs.data)
}

export const getVideoById = async (id) => {
    return await axios.get('/videos/' + id)
        .then(rs => rs.data)
}
export default getAllVideo