import React, { useState, useEffect } from 'react';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { STRAVA_TOKEN } = publicRuntimeConfig;

const Graph = () => {
  const [data, setData] = useState([]);

  const fetchStravaData = async () => {
    const res = await fetch(
      'https://www.strava.com/api/v3/athlete/activities',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${STRAVA_TOKEN}`
        }
      }
    );
    const json = await res.json();

    const formattedStravaData = json.map(activity => {
      return {
        name: activity.name,
        elevationGain: activity.total_elevation_gain,
        type: activity.type,
        name: activity.name,
        startDate: activity.start_date_local,
        distance: activity.distance,
        elapsedTime: activity.elapsed_time
      };
    });
    setData(formattedStravaData);
  };

  useEffect(() => {
    fetchStravaData();
  }, []);

  console.log(data);
  return <div>hi</div>;
};

export default Graph;
