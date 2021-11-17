import Axios from 'axios'

const instance = Axios.create({
  baseURL: 'https://app-luxshop-back.herokuapp.com/'
})

export default instance
