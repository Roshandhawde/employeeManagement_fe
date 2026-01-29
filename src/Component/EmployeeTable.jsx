export default function EmployeeTable({ employees }) {
  return (
    <table border="1" cellPadding="10" cellSpacing="0" style={{width:'90%'}}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
            <td>{emp.age}</td>
            <td>{emp.dob}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
