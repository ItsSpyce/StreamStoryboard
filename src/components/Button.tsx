import styled from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'link';

export type ButtonProps = {
  variant?: ButtonVariant;
};

const Button = styled.button<ButtonProps>`
  padding: 12px 24px;
  background-color: transparent;
  border: 1px solid white;
  outline: none;
  color: white;
`;

export default Button;
