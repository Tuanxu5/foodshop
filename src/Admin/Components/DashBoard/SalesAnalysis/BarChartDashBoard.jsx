import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
 
const data = [
  {
    "name": "Page A",
    "uv": 2400
  },
  {
    "name": "Page B",
    "uv": 2210
  },
  {
    "name": "Page C",
    "uv": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
  },
  {
    "name": "Page E",
    "uv": 1890,
    "doanh so" : "12312312"
  },
]
 
export default function BarChartDashBoard() {
  return (
    <AreaChart width={480} height={280} data={data}
      margin={{ top: 10, right: 30, left: -20, bottom: 0 }}
    fontSize="11" stroke="red">
    <defs>
      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#EC7905" stopOpacity={0.5}/>
        <stop offset="95%" stopColor="#EC7905" stopOpacity={0}/>
      </linearGradient>
    </defs>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Area type="monotone" dataKey="uv" stroke="#EC7905" fillOpacity={1} fill="url(#colorUv)" />
  </AreaChart>
  );
}