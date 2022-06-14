import axios from 'axios';
import React , {FormEvent, useState}from 'react'
import { AppContext } from '../context/AppContext';

const Login = () => {
  const [error, setError] = useState<boolean>(false);
  const [username, setUsername] = useState('');
  const [user, setUser] = useState<any>({})
  const [password, setPassword] = useState('');
  const {login} = AppContext()
  const handleClick = async (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
     const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/1")
     setUser(data);
    } catch (error) {
      setError(true);
      console.error(error);
    }

  }
  return (
    <div>
      <span data-testid="nameU" >{user.name}</span>
      <span data-testid="nameJ">{login}</span>
        <form  onSubmit={handleClick}>
            <input type="text"  placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" placeholder='password' value={password}  onChange={(e) => setPassword(e.target.value)} />
            <button data-testid="loginbtn" >Login</button>
        
            <span data-testid="error" style={{visibility : error ? "visible" : "hidden"}}>Something went wrong</span>  
        </form> 
    </div>
  )
}

export default Login