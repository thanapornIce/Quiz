import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Make sure to include this to automatically register the chart components

export default function TransactionChart({ transactions }) {
  const incomeData = transactions
    .filter(t => t.type === 'income')
    .map(t => ({ x: new Date(t.date), y: t.amount }));

  const expenseData = transactions
    .filter(t => t.type === 'expense')
    .map(t => ({ x: new Date(t.date), y: t.amount }));

  const data = {
    datasets: [
      {
        label: 'Income',
        data: incomeData,
        borderColor: 'green',
        fill: false,
      },
      {
        label: 'Expense',
        data: expenseData,
        borderColor: 'red',
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'time', // Define x-axis as time-based for proper date handling
        time: {
          unit: 'month', // You can change this to 'day', 'week', etc. depending on your needs
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
}
