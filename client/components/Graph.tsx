import React, { useState, useEffect } from 'react';
import getConfig from 'next/config';

import Distance from './graphs/Distance';
import ElevationGain from './graphs/ElevationGain';

const { publicRuntimeConfig } = getConfig();
const { STRAVA_TOKEN } = publicRuntimeConfig;

const Graph = () => {
  const [distanceData, setDistanceData] = useState([]);
  const [elevationGainData, setElevationGainData] = useState([]);

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

    const distanceData = json.map(activity => {
      if (activity.type === 'Run') {
        return {
          type: 'Run',
          distance: Math.round(activity.distance * 0.000621371)
        };
      } else {
        return {
          type: 'Ride',
          distance: Math.round(activity.distance * 0.000621371)
        };
      }
    });

    setDistanceData(distanceData);

    const elevationGainData = json.map(activity => {
      if (activity.type === 'Run') {
        return {
          type: 'Run',
          elevationGain: activity.total_elevation_gain
        };
      } else {
        return {
          type: 'Ride',
          elevationGain: activity.total_elevation_gain
        };
      }
    });

    setElevationGainData(elevationGainData);
  };

  useEffect(() => {
    fetchStravaData();
  }, []);

  return (
    <>
      <div
        style={{
          height: 500,
          width: 1000,
          boxShadow: '10px 10px 8px 10px #BDBDBD'
        }}
      >
        <Distance data={distanceData} />
      </div>
      <div
        style={{
          height: 500,
          width: 1000,
          boxShadow: '10px 10px 8px 10px #BDBDBD'
        }}
      >
        <ElevationGain data={elevationGainData} />
      </div>
    </>
  );
};

export default Graph;
