import React, { useState, useEffect } from 'react';
import { ResponsiveStream } from '@nivo/stream';
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
      if (activity.type === 'Run') {
        return { Run: Math.round(activity.distance * 0.000621371) };
      } else {
        return { Ride: Math.round(activity.distance * 0.000621371) };
      }
    });
    console.log(json);
    setData(formattedStravaData);
  };

  useEffect(() => {
    fetchStravaData();
  }, []);

  return (
    <div style={{ height: 1000, width: 1000 }}>
      <ResponsiveStream
        data={data}
        keys={['Run', 'Ride']}
        curve="catmullRom"
        margin={{
          top: 50,
          right: 110,
          bottom: 50,
          left: 60
        }}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Days',
          legendOffset: 36
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Activity',
          legendOffset: -40
        }}
        offsetType="none"
        fillOpacity={0.85}
        borderColor="#000"
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#2c998f',
            size: 4,
            padding: 2,
            stagger: true
          },
          {
            id: 'squares',
            type: 'patternSquares',
            background: 'inherit',
            color: '#e4c912',
            size: 6,
            padding: 2,
            stagger: true
          }
        ]}
        fill={[
          {
            match: {
              id: 'Run'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'Ride'
            },
            id: 'squares'
          }
        ]}
        dotSize={8}
        dotBorderWidth={2}
        dotBorderColor="inherit:brighter(0.7)"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            translateX: 100,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: '#999',
            symbolSize: 12,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000'
                }
              }
            ]
          }
        ]}
      />
    </div>
  );
};

export default Graph;
