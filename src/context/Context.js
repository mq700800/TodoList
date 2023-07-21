import { createContext, useState } from "react";
import Swal from 'sweetalert2';


const TodoContext = createContext();

function TodoProvider ({children})
{
       // for App.js Component

    const [islogin , setIsLogin] = useState(false);


    // for DashBoard Component

    
  const [isEdit , setIsEdit] = useState(false);
  const [isAdd , setIsAdd] = useState(false);
  //hook to hold all the data 
  const [data , setData] = useState([]);
  // hook for the edit employee/user
  const [updateEmployee , setUpdateEmployee] = useState([]);

  //function to edit Employee / Data 
const handleEdit = (id) =>
{
const employeeToUpdate = data.find((user)=>user.id === id);
setUpdateEmployee(employeeToUpdate);
setIsEdit(true);
}
// function to add Employee / User Data
const handleAdd = (inputData) =>
{
  console.log(inputData)
  const newUserID = {id:Date.now()}
  const newUser = [...data, {...inputData , ...newUserID}];
  setData(newUser);
  localStorage.setItem('employee', JSON.stringify(newUser));
  setIsAdd(false);
}
 
//function to delete employee/User data
 const handleDelete = (UserID) =>
 {
  const newData = data.filter((user) => user.id !== UserID);
  setData(newData);
  localStorage.setItem('employee', JSON.stringify(newData));
 }

    //for User Login Component
    
    
  // AuthenticatedUsers who can have access to the web app
  const AuthenticatedUsers= [
    {email:'mq700800@gmail.com', password:'123',},
    {email:'mq768003@gmail.com', password:'123',},
    {email:'ham1122@gmail.com', password:'123',},
  ]
  const empty = {
    email:'',
    password:'',
  }
  const [login , setLogin] = useState(empty);
  const [errorMessage, setErrorMessage] = useState('');
  const handleChange = (e)=>
  { 
    const {name , value} = e.target;
    setLogin({...login , [name]:value})
    console.log(login);
  }

  // function to check whether the user coming to our web app is AuthenticatedUsers or not 
  const handleLoginClick = (event) => {
    event.preventDefault();

    const user = AuthenticatedUsers.find(
      (user) => user.email === login.email && user.password === login.password
    );

    if (user) {
      setIsLogin(true);
      setErrorMessage('');
    } else {
      setIsLogin(false);
      setErrorMessage('Wrong email or password. Please try again.');
      Swal.fire(
        'Invalid?',
        'The password or email is invalid.',
      )
    }
  };


    const Properties = {
        islogin,

        //for Dashboard 

        setIsLogin,
        isEdit,
        setIsEdit,
        isAdd,
        setIsAdd,
        data,
        setData,
        updateEmployee,
        setUpdateEmployee,
        handleEdit,
        handleAdd,
        handleDelete,

        //for User Login
        login,
        handleLoginClick,
        handleChange,
        errorMessage,
    }
    return(
    <TodoContext.Provider value={Properties}>
        {children}
    </TodoContext.Provider>
    )
}

export {TodoProvider};
export default TodoContext;