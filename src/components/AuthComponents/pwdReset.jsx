import { useState} from "react";
import FormInput from "./formInput";
import Button from "./buttonComponent";
import './auth.scss';
import {Link, Outlet} from 'react-router-dom';
import {ReactComponent as Illustration1} from '../../assets/reset.svg';
import {ReactComponent as Illustration} from '../../assets/login-illustrator.svg';
const defaultFormFields = {
    
    email: '',
   
}

const PwdReset = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email} = formFields;

    

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }    

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }
    const handleSubmit = async (event) => {
    event.preventDefault();
    //authentication from backend
    resetFormFields();

    
}
    

    return(
        <div className="auth-page">
            <div className="container">
                <div className="split">
                
                
                
                <div className="illustration"><Illustration1 className="svg1" /><Illustration className="svg" /></div>
                <div className='reset-container'>
                    <h2>Password Reset</h2>
                    <span>Enter Your Email Address</span>
                    <form onSubmit={handleSubmit} className="reset-form">
                        <FormInput label= "Email" type='email' required name="email" value = {email}  onChange={handleChange}/>
                        <div className="buttons-container">
                        <Button type="submit">Reset</Button>
                        </div>
                        <br></br>
                        <Link to="/signin" style={{color: '#880000'}}>Back to <span style={{fontWeight: 'bold'}}>Sign In</span></Link>
                        <br></br>
                        <span>Don't have an account? <Link to="/signup" style={{color: '#880000', fontWeight: 'bold'}}>Sign Up</Link></span>
                        <Outlet></Outlet>
                    </form>
                
                </div>
                
            </div></div></div>
        
    )

}

export default PwdReset;