import UserLogin from "./components/UserLogin";
import Dashboard from "./components/DashBoard";
import useCustomHook from "./hooks/UseCustomHook";



function App() {
    const {islogin} = useCustomHook();
  return (
    <div>
      {!islogin?<UserLogin /> : <Dashboard />}
    </div>
  )
}

export default App;

