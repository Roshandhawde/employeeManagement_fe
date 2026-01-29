import { useEffect, useState } from "react";
import api from "../Api/axios";
import EmployeeTable from "../Component/EmployeeTable";

export default function Home() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    api.get("/employees")
      .then((res) => setEmployees(res.data))
      .catch(() => alert("Failed to load employees"));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee List</h2>
      <EmployeeTable employees={employees} />
    </div>
  );
}
