import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
 
const data = [
  {
    name: "Jan",
    "Doanh Thu": 4000
  },
  {
    name: "Feb",
    "Doanh Thu": 3000
  },
  {
    name: "Mar",
    "Doanh Thu": 2000
  },
  {
    name: "Apr",
    "Doanh Thu": 2780
  },
  {
    name: "May",
    "Doanh Thu": 1890
  },
  {
    name: "Jun",
    "Doanh Thu": 2390,
  },
  {
    name: "Jul",
    "Doanh Thu": 3490
  },
  {
    name: "Au",
    "Doanh Thu": 3490
  },
  {
    name: "Sep",
    "Doanh Thu": 3490
  },
  {
    name: "Oct",
    "Doanh Thu": 3490
  },
  {
    name: "Nov",
    "Doanh Thu": 3490
  },
  {
    name: "Dec",
    "Doanh Thu": 3490
  }
];
 
export default function App() {
  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Doanh Thu"
        stroke="#EC7905"
        activeDot={{ r: 8 }}
      />
      {/* <Line
        type="monotone" 
        dataKey="buy" 
        stroke="#82ca9d"
        className="text-[red]" /> */}
    </LineChart>
  );
}