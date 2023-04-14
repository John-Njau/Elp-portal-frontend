import { useState, Fragment } from "react";
import {Outlet, Link, useNavigate} from 'react-router-dom'

import Button from "./buttonComponent";
import FormInput from "./formInput";

import {ReactComponent as Illustration} from '../../assets/signup-illustrator.svg';
import {ReactComponent as Illustration1} from '../../assets/reset.svg';

import './auth.scss';
import { createUserService } from "../../services/authServices";


const defaultFormFields = {
    username: '',
    first_name: '',
    last_name: '',
    PF: '',
    scholar_code: '',
    email: '',
    gender: '',
    phone_number: '',
    scholar_type: '',
    groups: [
        1
    ],
    password: '',
    confirm_password: '',

}



const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {username, email, first_name, last_name, groups, PF, phone_number, scholar_code, password, confirm_password, scholar_type, gender} = formFields;
    

    const navigate = useNavigate();
    
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        
        //authentication from backend
        if(password !== confirm_password){
            alert("Passwords Don't Match!");
            return;
        }
        const data = {
            "username": username,
            "email": email,
            "first_name": first_name,
            "last_name": last_name,
            "groups":groups,
            "gender": gender,
            "WTF,ELP or Both": scholar_type,
            "PF": PF,
            "phone_number": phone_number,
            "scholar_code": scholar_code,
            "password": password,
            
          }
          
        try {
            const {status, statusText} = await createUserService(data);
            if(status === 201 && statusText==="Created"){
                alert("Account Created Successfully, redirecting to SignIn...");
                
                //console.log("signInResponse",signInResponse)
                resetFormFields();
                navigate("/signin")
            }
            
            
        } catch (error) {
            if (error.response?.status === 500){
                //warning notification
                console.log("signInResponse error 500")

            }else if (error.response?.status=== 400){
                //error notification
                const  errors = error.response.data;
                if(errors?.username){
                    
                    let iterator = errors.username.values()
                    for(let message of iterator){
                        alert(message);
                    }   }
                else if(errors?.email){
                    
                    let iterator = errors.email.values()
                    for(let message of iterator){
                        alert(message);
                    }          }
                else if(errors?.phone_number){
                    
                    let iterator = errors.phone_number.values()
                    for(let message of iterator){
                        alert(message);
                    }
                }
                else if(errors?.PF){
                    
                    let iterator = errors.PF.values()
                    for(let message of iterator){
                        alert(message);
                    }               }
                else if(errors?.scholar_code){
                    alert("User with this scholar code exists")
                    let iterator = errors.scholar_code.values()
                    for(let message of iterator){
                        alert(message);
                    }
                }
                else if(errors?.password){
                    
                    let iterator = errors.password.values()
                    for(let message of iterator){
                        alert(message);
                    }
                }
                else{
                    alert('Unexpected error occured')
                }
                
                
                

            }
            // console.log({error})
            // //error notification
        }
        
        
          
    }
    

    const handleChange = async(event) => {
        const {name, value} = event.target;
        await setFormFields({...formFields, [name]: value})
        
        //console.log(formFields);

    }

    return(
        <Fragment>
            
            <section className="auth-page">
                <div className="container" >
                    <div className="split">
                        <div className="illustration"><Illustration className="svg" /><Illustration1 className="svg1" /></div>
                        
                        <div className='sign-up-container' >
                        <h2>Welcome Leader</h2>
                        <span>Sign up with email</span>
                        <form onSubmit={handleSubmit} className = "signup-form">
                            <div className="form-split" >
                                    <div className="split-1">
                                            <FormInput label= "User Name" type='text' required name="username" value={username} onChange={handleChange}/>
                                            <FormInput label= "First Name" type='text' required name="first_name" value={first_name} onChange={handleChange}/>
                                            <FormInput label= "Last Name" type='text' required name="last_name" value={last_name} onChange={handleChange}/>
                                            <FormInput label= "Email" type='email' required name="email" value = {email} onChange={handleChange}/>
                                            {/* fix phone no validation */}
                                            <FormInput label= "Phone Number" type='number' required name="phone_number" value={phone_number} onChange={handleChange}/>
                                            <FormInput label= "Password" type='password' required name="password" value={password} onChange={handleChange}/>
                                            <FormInput label= "Confirm Password" type='password' required name="confirm_password" value={confirm_password} onChange={handleChange}/>

                                            <div className="radio-group">
                                                <div className="radio-input">
                                                    <span >Gender</span>
                                                    <span className="radio">
                                                        <span>
                                                            <input  type="radio" id="male" name="gender" required value="0" onChange={handleChange}/>
                                                            <label className="form-input-label" htmlFor="male">Male</label>
                                                        </span>
                                                        <span>
                                                            <input type="radio" required id="female" name="gender" value="1" onChange={handleChange}/>
                                                            <label className=".form-input-label" htmlFor="female">Female</label>
                                                        </span>
                                                        <span>
                                                            <input type="radio" required id="other" name="gender" value="2" onChange={handleChange}/>
                                                            <label className=".form-input-label" htmlFor="other">Other</label><br></br>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <br></br>
                                                                                       
                                           
                                    {/* </div>
                                    <div className="split-2">
                                            
                                    */}
                                            <div className="radio-group">
                                                <div className="radio-input">
                                                    <span>Scholar Type</span>
                                                    <span className = "radio">
                                                        <span>
                                                            <input  type="radio" id="elp" name="scholar_type" required value="ELP" onChange={handleChange}/>
                                                            <label className="form-input-label" htmlFor="elp">ELP</label>
                                                        </span>
                                                        <span>
                                                            <input type="radio" required id="wtf" name="scholar_type" value="WTF" onChange={handleChange}/>
                                                            <label className=".form-input-label" htmlFor="wtf">WTF</label><br></br>
                                                        </span>
                                                        <span>
                                                            <input type="radio" required id="both" name="scholar_type" value="BOTH" onChange={handleChange}/>
                                                            <label className=".form-input-label" htmlFor="both">BOTH</label><br></br>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <>
                                            {(() => {
                                                if(scholar_type === 'ELP'){
                                                    
                                                   return <FormInput label= "PF Number" type = "text" required name="PF" value={PF} onChange={handleChange}/>
                                                }
                                                else if (scholar_type === 'WTF'){
                                                   return <FormInput label= "Scholar Code" type = "text" required name="scholar_code" value={scholar_code} onChange={handleChange}/>
                                                }
                                                else if( scholar_type === 'BOTH'){
                                                   return <>
                                                    <FormInput label= "PF Number" type = "text" required name="PF" value={PF} onChange={handleChange}/>
                                                    <FormInput label= "Scholar Code" type = "text" required name="scholar_code" value={scholar_code} onChange={handleChange}/>
                                                    </>
                                                }
                                                return <></>
                                            })()}</>
                                           
                                            
                                            
                                    </div>
                            </div>
                                <div className="centered" >
                                        <Button type="submit">Sign Up</Button>
                                        <span>Already have an account? <Link to="/signin" style={{color: '#880000', fontWeight: 'bold'}}>Sign in</Link></span>
                                </div>
                            <Outlet></Outlet>
                        </form>
                    </div>
                        
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default SignUpForm;