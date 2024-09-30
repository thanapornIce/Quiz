import React from 'react';
import TransactionChart from '../components/TransactionChart';

const HomePage = ({ transactions }) => {
  return (
    <div>
      <h1>Income Expense Tracker</h1>
      <TransactionChart transactions={transactions} />
      {/* องค์ประกอบอื่น ๆ ของหน้า */}
    </div>
  );
};

export default HomePage;

export async function getServerSideProps() {
  // เรียก API และรับข้อมูล
  const res = await fetch('http://localhost:3000/api/transactions');

  // ตรวจสอบสถานะการตอบกลับ
  if (!res.ok) {
    console.error('Failed to fetch transactions:', res.statusText);
    return { props: { transactions: [] } }; 
  }

  const transactions = await res.json();
  return { props: { transactions: transactions.data } };
}
