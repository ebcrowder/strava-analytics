const { RESTDataSource } = require('apollo-datasource-rest');

const dotenv = require('dotenv');

dotenv.config();

class MoviesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.strava.com/api/v3/athlete/activities';
  }

  async getStravaData() {
    return this.get('', {
      headers: {
        Authorization: `Bearer ${process.env.AUTH_TOKEN}`
      }
    });
  }
}
