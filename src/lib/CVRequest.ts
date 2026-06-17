import {TOKEN_NAME} from '@/config/constant'
import axios from 'axios'
import Cookies from 'js-cookie'
const CVRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

// Attach token to every request
CVRequest.interceptors.request.use((config) => {
  const token = Cookies.get(TOKEN_NAME)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Handle response
CVRequest.interceptors.response.use(
  (response) => {
    const {success} = response.data

    // If the response format is successful but success is false
    if (success === false) {
      return Promise.reject(response.data)
    }

    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default CVRequest
