import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import './signUpForm.styles.scss';

import Button from '../button/Button';
import FormInput from '../form-input/FormInput';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Your passwords do not match.');
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch(err) {
            if (err.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            }
            console.log('User creation encountered an error', err);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }
    
    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label='Display Name'
                    required 
                    type='text' 
                    onChange={handleChange} 
                    name='displayName'
                    value={displayName}
                />

                <FormInput 
                    label='Email'
                    required 
                    type='email' 
                    onChange={handleChange} 
                    name='email'
                    value={email}
                />

                <FormInput 
                    label='Password'
                    required 
                    type='password' 
                    onChange={handleChange} 
                    name='password'
                    value={password}
                />

                <FormInput 
                    label='Confirm Password'
                    required 
                    type='password' 
                    onChange={handleChange} 
                    name='confirmPassword'
                    value={confirmPassword}
                />
                
                <Button type='submit' buttonType='default'>
                    Sign Up 
                </Button>
            </form>
        </div>
    )   
}

export default SignUpForm;