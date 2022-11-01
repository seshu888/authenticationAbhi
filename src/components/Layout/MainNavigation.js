import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context'
const MainNavigation = () => {
 const authCtx = useContext(AuthContext)

 const handleLogout=()=>{
  console.log("Seshu")
  authCtx.logout()

 }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
        
        {!authCtx.token && 
          <li>
          <Link to='/auth'>Login</Link>
      </li>}  
        
    
        {authCtx.token && 
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
        }
        
         {authCtx.token && 
            <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        }
          
      
          
          
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
