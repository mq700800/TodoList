import React, { useState } from 'react';
import useCustomHook from '../hooks/UseCustomHook';

function EditUser() {
  const {setIsEdit , updateEmployee , data , setData, setUpdateEmployee} = useCustomHook();
  
  const exists = {
    id:updateEmployee.id,
    firstname: updateEmployee.firstname,
    lastname:updateEmployee.lastname,
    email:updateEmployee.email,
    salary:updateEmployee.salary,
    date:updateEmployee.date,
  }

  console.log(updateEmployee);
  
  const [inputField , setinputField] = useState(exists);

  const handleChange = (e)=>
  { 
    const {name , value} = e.target;
    setinputField({...inputField , [name]:value})
    console.log(inputField);
  }

  const handleSubmit = (e)=>
  { 
    e.preventDefault();
    setUpdateEmployee(inputField);
    const employeeIndex = data.findIndex((employee) => employee.id === updateEmployee.id);
    const updatedData = [...data];
    updatedData[employeeIndex] = inputField;
    setData(updatedData);
    localStorage.setItem('employee', JSON.stringify(updatedData));
    setIsEdit(false);
  }

  
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-2'></div>
            <div className='col-8'>
                <h4 className='display-5 mt-4 mb-4'>Edit Employee</h4>
                <form className='form-group' >
                    <label>First Name</label>
                    <input className='form-control' name='firstname' value={inputField.firstname} type='text' onChange={handleChange} />
                    <label>Last Name</label>
                    <input className='form-control' name='lastname' value={inputField.lastname} type='text' onChange={handleChange}/>
                    <label>Eamil</label>
                    <input className='form-control' name='email' type='email' value={inputField.email} onChange={handleChange}/>
                    <label>Salary</label>
                    <input className='form-control' name='salary' type='number' value={inputField.salary} onChange={handleChange}/>
                    <label>Date</label>
                    <input className='form-control' name='date' type='date' value={inputField.date} onChange={handleChange}/>
                    <button className='btn btn-primary mt-3'onClick={handleSubmit}>Update</button>
                    <button className='btn btn-outline-dark ml-2 mt-3' onClick={()=>setIsEdit(false)}>Cancel</button>
                </form>
            </div>

        </div>
    </div>
  )


}


export default EditUser

