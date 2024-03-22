import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [employees, setEmployees] = useState([]);
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/employees');
      console.log('Data:', response.data);
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Employee List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.empID}>
              <td>{employee.empID}</td>
              <td>{employee.empName}</td>
              <td>{employee.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;