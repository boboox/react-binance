import axios from 'axios'
import qs from 'query-string'

const successHandler = res => {
  if (res.data) {
    const response = {
      response: res
    }
    throw response
  } else {
    return res.data
  }
}

const errorHandler = err => {
  if (!err.response) {
    if (err.message === 'Network Error') {}
    if (err.code === 'ECONNABORTED' || err.message.indexOf('timeout') >= 0) {}
    throw err
  }
  throw data
}

export default {
  get(url, params) {
    return axios.get(`${url}`, {
        timeout: 30000
      })
      .then(successHandler)
      .catch(errorHandler)
  },
  post(url, params, options) {
    return axios.post(`${url}`, params, {
        headers,
        timeout: 30000
      })
      .then(successHandler)
      .catch(errorHandler)
  },
  put(url, params) {
    return axios.put(`${url}`, params)
      .then(successHandler)
      .catch(errorHandler)
  }
}
