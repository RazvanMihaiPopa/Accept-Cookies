import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import Title from './Title';

// Generate Data
const data = [
  { name: 'Bonds', value: 40 },
  { name: 'Stocks', value: 30 },
  { name: 'Commodities', value: 15 },
  { name: 'Real Estate', value: 10 },
  { name: 'Cash', value: 5 },
];

// Define colors for each category
const COLORS = ['#c7784c', '#518e90', '#ddb79b', '#9bbeaa', '#d6c7a5'];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Budget Allocation</Title>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label={(entry) => `${entry.name}: ${entry.value}%`}
          >
            {
              data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))
            }
          </Pie>

        </PieChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
