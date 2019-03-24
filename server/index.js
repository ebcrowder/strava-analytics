const Koa = require('koa');
const app = new Koa();
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const url = 'https://www.strava.com/api/v3/athlete/activities';

class DataCache {
  constructor(fetchFunction, minutesToLive = 10) {
    this.millisecondsToLive = minutesToLive * 60 * 1000;
    this.fetchFunction = fetchFunction;
    this.cache = null;
    this.getData = this.getData.bind(this);
    this.resetCache = this.resetCache.bind(this);
    this.isCacheExpired = this.isCacheExpired.bind(this);
    this.fetchDate = new Date(0);
  }
  isCacheExpired() {
    return (
      this.fetchDate.getTime() + this.millisecondsToLive < new Date().getTime()
    );
  }
  getData(url) {
    if (!this.cache || this.isCacheExpired()) {
      console.log('cache expired - fetching new data');
      return this.fetchFunction(url).then(data => {
        this.cache = data;
        this.fetchDate = new Date();
        return data;
      });
    } else {
      console.log('cache hit');
      return Promise.resolve(this.cache);
    }
  }
  resetCache() {
    this.fetchDate = new Date(0);
  }
}

const getStravaData = async url => {
  try {
    const response = await axios.get(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.AUTH_TOKEN}`
      }
    });
    const data = response.data;
  } catch (error) {
    console.log(error);
  }
};

const stravaDataCache = new DataCache(getStravaData, 0.5);

stravaDataCache.getData(url).then(response => {
  return response;
});

// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);
