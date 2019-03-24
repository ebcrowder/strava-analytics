const Koa = require('koa');
const Router = require('koa-router');
const router = new Router();
const app = new Koa();
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const url = 'https://www.strava.com/api/v3/athlete/activities';

const getStravaData = async url => {
  try {
    const response = await axios.get(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.AUTH_TOKEN}`
      }
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

router.get('/', async (ctx, next) => {
  const stravaData = await getStravaData(url).then(response => response.data);

  ctx.body = stravaData;
});

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000);
