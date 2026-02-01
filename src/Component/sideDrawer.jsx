export default SIdeDrawer=()=>{
   return isDrawerOpen && (
  <>
    <div className="drawer-overlay" onClick={closeDrawer}></div>

    <div className="drawer">
      <div className="drawer-header">
        <h3>Edit Employee</h3>
        <button className="close-btn" onClick={closeDrawer}>✕</button>
      </div>

      <form className="drawer-form">
        <label>Name</label>
        <input
          type="text"
          value={selectedEmployee.username}
          onChange={(e) =>
            setSelectedEmployee({
              ...selectedEmployee,
              username: e.target.value,
            })
          }
        />

        <label>Age</label>
        <input
          type="number"
          value={selectedEmployee.age}
          onChange={(e) =>
            setSelectedEmployee({
              ...selectedEmployee,
              age: e.target.value,
            })
          }
        />

        <label>DOB</label>
        <input
          type="date"
          value={selectedEmployee.dob}
          onChange={(e) =>
            setSelectedEmployee({
              ...selectedEmployee,
              dob: e.target.value,
            })
          }
        />

        <button type="submit" className="save-btn">
          Save Changes
        </button>
      </form>
    </div>
  </>
)}

