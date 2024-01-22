import Axios from 'axios'

const instance = Axios.create({
  baseURL: 'https://app-luxshop-back-50254efbf73f.herokuapp.com/'
})

export default instance
