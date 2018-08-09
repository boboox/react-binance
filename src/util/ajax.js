import axios from 'axios'
import CryptoJS from 'crypto-js'

const successHandler = res => {
  res = res.response || res;
  // 统一处理httpstatus 200
  // 结果异常的逻辑
  // 例如:
  // {
  //   "code": -1121,
  //   "msg": "Invalid symbol."
  // }
  return res.data
}

const errorHandler = err => {
  if (!err.response) {
    if (err.message === 'Network Error') {}
    if (err.code === 'ECONNABORTED' || err.message.indexOf('timeout') >= 0) {}
    throw err
  }
  const data = err.response.data
  throw data
}

const headers = (params) => {
  const APIKEY = 'this is my apikey'
  return Promise.resolve({
    'X-MBX-APIKEY': APIKEY
  })
}

const signature = (params) => {
  const totalParams = JSON.stringify(params) || '';
  const secretKey = 'this is my secretKey';
  const signature = CryptoJS.HmacSHA256(totalParams, secretKey);
  params['signature'] = signature;
}

export default {
  get(url, params) {
    return axios.get(`${url}`, {
        timeout: 10000,
        params
      })
      .then(successHandler)
      .catch(errorHandler)
  },
  getJSONP(url, params) {
    return fetchJsonp(url, params)
  },
  post(url, params, options) {
    return headers(params).then(headers => {
      if (!options || !options.noLoading) {
        Loading.show()
      }
      signature(params);
      return axios.post(`${url}`, params, {
          headers,
          timeout: 30000
        })
        .then(successHandler)
        .catch(errorHandler)
    })
  },
  put(url, params) {
    return axios.put(`${url}`, params)
      .then(successHandler)
      .catch(errorHandler)
  }
}
