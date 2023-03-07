import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from './button.styles';

export const button_type_class = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButton = (buttonType = button_type_class.base) =>
({
  [button_type_class.base]: BaseButton,
  [button_type_class.google]: GoogleSignInButton,
  [button_type_class.inverted]: InvertedButton,
}[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
