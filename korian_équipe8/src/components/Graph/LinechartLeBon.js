import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
  {
    name: '2014',
    entrées: 7,
    chutes: 62,
  },
  {
    name: '2015',
    entrées: 18,
    chutes:117,
  },
  {
    name: '2016',
    entrées: 24,
    chutes:162,
  },
  {
    name: '2017',
    entrées: 38,
    chutes:182,
  },
  {
    name: '2018',
    entrées: 51,
    chutes:196,
  },
  {
    name: '2019',
    entrées: 47,
    chutes: 434,
  },
];




function Essentiels() {
  return (
    <div className='Essentiels'>
     <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="entrées" stroke="#173D59" activeDot={{ r: 8 }} />
          <Line yAxisId="left" type="monotone" dataKey="chutes" stroke="#E08330" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Essentiels;
