import axios from 'axios'

export const Api = axios.create({
  baseURL: process.env.VUE_APP_API_ENDPOINT || 'http://localhost:3000/allStaff'
})

export const allStaff = axios.create({
  baseURL: process.env.VUE_APP_API_ENDPOINT || 'http://localhost:3000/api'
})

export const schedule = axios.create({
  baseURL: process.env.VUE_APP_API_ENDPOINT || 'http://localhost:3000/schedule'
})
