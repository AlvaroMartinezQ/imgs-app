import NASA_apod from '../client.api'

export default {
  get (url, conf={}) {
    return NASA_apod.get(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error))
  }
}
