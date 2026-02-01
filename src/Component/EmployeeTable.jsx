import './table.css'


export default function EmployeeTable({ employees, handleEdit, handleDelete }) {
  return (
<table className="employee-table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Age</th>
      <th>DOB</th>
      <th>Actions</th>
    </tr>
  </thead>

  <tbody>
    {employees.map((emp) => (
      <tr key={emp.id}>
        <td>{emp.id}</td>
        <td>{emp.username}</td>
        <td>{emp.age}</td>
        <td>{emp.dob}</td>
        <td className="action-cell">
          <button className="btn edit-btn" onClick={() => handleEdit(emp)}>
            Edit
          </button>
          <button className="btn delete-btn" onClick={() => handleDelete(emp.id)}>
            Delete
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

  );
}
