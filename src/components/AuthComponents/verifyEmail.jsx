import { useState} from "react";
import FormInput from "./formInput";
import Button from "./buttonComponent";
import './auth.scss';
import {Link, Outlet} from 'react-router-dom';
import {ReactComponent as Illustration} from '../../assets/reset.svg';
const defaultFormFields = {
    
    code: '',
    
   
}

const VerifyEmail = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {code} = formFields;

    

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
                
                
                
                <div className="illustration"><Illustration className="svg" /></div>
                <div className='reset-container'>
                    <h2>Verify Account</h2>
                    <span>We sent a verification code to your email</span>
                    <form onSubmit={handleSubmit} className="reset-form">
                        <FormInput label= "Enter Verification Code" type='text' required name="code" value = {code}  onChange={handleChange}/>
                        <div className="buttons-container">
                        <Button type="submit">Verify</Button>
                        </div>
                        <br></br>
                       
                        <span>Already have an account? <Link to="/signin" style={{color: '#880000', fontWeight: 'bold'}}>Sign In</Link></span>
                        <Outlet></Outlet>
                    </form>
                
                </div>
                
            </div></div></div>
        
    )

}

export default VerifyEmail;