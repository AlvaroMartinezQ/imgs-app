import CLIENT_APOD from './client.apod'

export function getImageOfTheDay () {
  return CLIENT_APOD.get(`?api_key=DEMO_KEY`)
}
