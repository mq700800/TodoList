import { useContext } from 'react';
import TodoContext from '../context/Context';


function useCustomHook() {

  return useContext(TodoContext);
}

export default useCustomHook
