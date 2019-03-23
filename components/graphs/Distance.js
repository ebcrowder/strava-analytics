import { ResponsiveStream } from '@nivo/stream';

const Distance = props => {
  return (
    <ResponsiveStream
      data={props.data}
      keys={['distance']}
      colors="category10"
      curve="linear"
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
        legend: 'Distance',
        legendOffset: -40
      }}
      offsetType="none"
      fillOpacity={0.85}
      borderColor="#000"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  );
};

export default Distance;
