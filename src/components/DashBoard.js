import React, {useEffect} from 'react'
import AddUser from './AddUser';
import EditUser from './EditUser';
import useCustomHook from '../hooks/UseCustomHook';
// import Swal from 'sweetalert2';

function Dashboard() {
  const {
    setIsLogin,
    isEdit,
    isAdd,
    setIsAdd,
    data,
    setData,
    handleEdit,
    handleDelete,
    handleLogout,
  } = useCustomHook();
  
 // to get data from local storage when the dashboard page first render
    useEffect(()=>
  {
    const items = JSON.parse(localStorage.getItem('employee'));
    if(items)
    {
      setData(items);
    }
  } ,[setData]);
  
  //map function to display employees/Users data on table
  let no = 0;
  const renderedUsersData =
   data.map((user)=>
   {    
       return (
               <>
               <tr key={user.id}>
               <td>{no=no+1}</td>
               <td>{user.firstname}</td>
               <td>{user.lastname}</td>
               <td>{user.email}</td>
               <td>{user.salary}</td>
               <td>{user.date}</td>
               <td><button className='btn btn-outline-dark' onClick={()=>handleEdit(user.id)}>Edit</button></td>
               <td><button className='btn btn-outline-dark' onClick={()=>{handleDelete(user.id)}}>Delete</button></td>
               </tr>
               </>
       )
   }
   )
  if(isAdd)
  { 
    return <AddUser />
  }
  if(isEdit)
  {
    return <EditUser />

  }
  if(!isAdd || !isEdit)
  {
  return (
            <div className='container'>
                <div className='row'>
                <div className='col-1'></div>
                <div className='col-10'>
              <h4 className='display-5 mt-4 mb-3'>Employee Management System</h4>
              <button className='btn btn-primary mb-3 mt-1' onClick={()=>setIsAdd(true)}>Add Employee</button>
              <button className='btn btn-outline-dark ml-3 mb-3 mt-1' onClick={handleLogout} >Logout</button>
              <table className='table table-striped'>
                <thead>
                    <tr>
                    <th>No</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Salary</th>
                    <th>Date</th>
                    <th colSpan={2} className='text-center'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {renderedUsersData}
                </tbody>
              </table>
              </div>
                </div>
        
            </div>
          )
  }
}

export default Dashboard



