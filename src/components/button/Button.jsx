import { BaseButton, GoogleSignInButton, InvertedButton } from './button.styles';

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
    default: 'default'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
    return {
        [BUTTON_TYPE_CLASSES.default]: BaseButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    }[buttonType]
}

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return (
        <BaseButton {...otherProps} >{children}</BaseButton>
    )
}

export default Button;