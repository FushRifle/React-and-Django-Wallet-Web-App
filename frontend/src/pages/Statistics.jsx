import React from "react";
import "../css/stats.css";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { name: "Jan", expense: 400, income: 800 },
  { name: "Feb", expense: 500, income: 700 },
  { name: "Mar", expense: 600, income: 1200 },
];

const Statistics = () => {
  
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/statistics/")
      .then((res) => res.json())
      .then((data) => setStatistics(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Transaction History</h2>
      <LineChart width={1200} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#ccc" />
        <Tooltip />
        <Line type="monotone" dataKey="expense" stroke="red" />
        <Line type="monotone" dataKey="income" stroke="green" />
      </LineChart>

      <div className="d-flex justify-content-between mt-4">
      <Card className="p-3 text-center" style={{ width: "45%" }}>
          <Card.Body>
            <Card.Title>Total Balance</Card.Title>
            <Card.Text>${statistics.total_balance}</Card.Text>
          </Card.Body>
      </Card>
      <Card className="p-3 text-center bg-danger text-white" style={{ width: "45%" }}>
          <Card.Body>
            <Card.Title>Transactions Today:</Card.Title>
            <Card.Text>{statistics.transactions_today}</Card.Text>
          </Card.Body>
      </Card>
      </div>

      <div className="d-flex justify-content-between mt-4">
        <Card className="p-3 text-center" style={{ width: "45%"}}>
          <Card.Body>
            <Card.Title>Income</Card.Title>
            <Card.Text>$5,000</Card.Text>
          </Card.Body>
        </Card>

        <Card className="p-3 text-center bg-danger text-white" style={{ width: "45%"}}>
          <Card.Body>
            <Card.Title>Expenses</Card.Title>
            <Card.Text>$2,500</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Statistics;
