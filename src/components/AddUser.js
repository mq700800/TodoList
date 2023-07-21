import React, {useState} from 'react';
import useCustomHook from '../hooks/UseCustomHook';

function AddUser() {
  const {setIsAdd ,handleAdd} = useCustomHook();

  const empty = {
    firstname: '',
    lastname:'',
    email:'',
    salary:'',
    date:'',
  }  

  const [inputField , setinputField] = useState(empty);

  const handleChange = (e)=>
  { 
    const {name , value} = e.target;
    setinputField({...inputField , [name]:value})
  }
  
const handleClickData = (event) =>
{
 event.preventDefault();
 handleAdd(inputField);
 setinputField(empty);
}


  return (
    <div className='container'>
        <div className='row'>
            <div className='col-2'></div>
            <div className='col-8'>
                <h4 className='display-5 mt-4 mb-4'>Add Employee</h4>
                <form className='form-group'onSubmit={()=>setIsAdd(false)} >
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
                    <button className='btn btn-primary mt-3' onClick={handleClickData}>Add</button>
                    <button className='btn btn-outline-dark ml-2 mt-3' onClick={()=>setIsAdd(false)}>Cancel</button>
                </form>
            </div>

        </div>
    </div>
  )
}


export default AddUser