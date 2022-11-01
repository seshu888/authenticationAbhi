
import { useRef,useContext} from 'react';
import classes from './AuthForm.module.css';
import AuthContext from '../../store/auth-context';
import { useNavigate } from 'react-router-dom';
const AuthForm = () => {
  const authCtx=useContext(AuthContext)
  const navigate = useNavigate()
  const emailInputRef=useRef()
  const passwordInputRef=useRef()
  const rememberInputRef=useRef()
  const submitHandler=(e)=>{
    e.preventDefault();
    const enteredEmail=emailInputRef.current.value;
    const enteredPassword=passwordInputRef.current.value;
    const enteredRemember=rememberInputRef.current.checked;
    fetch
      ("https://reqres.in/api/login", {
        method:"POST",
        body:JSON.stringify({email:enteredEmail,password:enteredPassword,remember:enteredRemember}),
        headers:{
          'Content-Type':'application/json'
        },
      })
      .then(resp=>{
        if(resp.ok){
          console.log("sucess")

          return resp.json()

        }else{
          return resp.json().then((data)=>{
            let errorMessage="Authentication failed";
            alert(errorMessage)
            throw new Error(errorMessage)
          })
            
        }
      })
      .then((data)=>{
        authCtx.login(data.token)
        navigate('/')
      
      })
      .catch((err)=>{
        alert(err.message)
      })
      console.log("seshu")

      
    }
  return (
    <section className={classes.auth}>
      <h1>Login </h1>
      <form>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef}/>
        </div>
        <div className={classes.control1}>
        <input type='checkbox' id='Rem' required ref={rememberInputRef}/>
          <label htmlFor='Rem'>Remember me</label>
         
        </div>
        <div className={classes.actions}>
          <button type="submit" onClick={submitHandler}>Login </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm
