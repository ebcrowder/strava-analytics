const { RESTDataSource } = require('apollo-datasource-rest');
const dotenv = require('dotenv');

dotenv.config();

class StravaAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.strava.com/api/v3/athlete/activities';
  }

  async getStravaData() {
    try {
      const data = await this.get('', null, {
        headers: {
          Authorization: `Bearer ${process.env.AUTH_TOKEN}`
        }
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = StravaAPI;
