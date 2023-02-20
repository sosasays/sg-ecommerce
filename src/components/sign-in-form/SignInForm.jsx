import { useState } from 'react';
import { 
    signInWithGooglePopup, 
    signInAuthUserWithEmailAndPassword 
} from '../../utils/firebase/firebase.utils';

import './signInForm.styles.scss';

import Button from '../button/Button';
import FormInput from '../form-input/FormInput';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { email, password } = formFields;

    const signInWithGoogle = async () => await signInWithGooglePopup();

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch(err) {
            switch(err.code) {
                case 'auth/user-not-found':
                    alert('Cannot sign in, no account found');
                    break;
                case 'auth/wrong-password':
                    alert('Cannot sign in, incorrect password for email');
                    break;
                default:
                    console.log('User authentication encountered an error', err);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }
    
    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
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
                <div className="buttons-container">
                    <Button type='submit' buttonType='default'>
                        Sign In
                    </Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>
                        Google Sign In
                    </Button>
                </div>
            </form>
        </div>
    )   
}

export default SignInForm;