import "./styles.css";
import { Button } from "antd";
import BankDashboard from "./components/BankDashboard";

export default function App() {
  return (
    <div className="App">
      <h1>Gatsby Bank</h1>
      <BankDashboard />
    </div>
  );
}
