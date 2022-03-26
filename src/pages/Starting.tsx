import styled from 'styled-components';
import Input from 'components/Input';
import Button from 'components/Button';

const StyledStarting = styled.div``;

const LoginModal = styled.div`
  grid-column: 2;
  border: 1px solid rgba(150, 150, 150, 0.5);
  border-radius: 40px;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  font-size: 2rem;
  position: relative;
  overflow: hidden;
  margin: 30%;
  height: 400px;

  &:before {
    content: '';
    position: absolute;
    top: -100px;
    left: -100px;
    bottom: -100px;
    right: -100px;
    background: url('https://www.pixel4k.com/wp-content/uploads/2018/11/night-city-city-lights-overview-aerial-view-4k_1541972402.jpg')
      no-repeat fixed;
    background-size: cover;
    backdrop-filter: blur(42px);
    filter: blur(10px);
    z-index: -1;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 30px;
  z-index: 2;
`;

const UsernameInput = styled(Input)`
  //
`;

const LoginButton = styled(Button)``;

const StartingProps = () => (
  <StyledStarting>
    <LoginModal>
      <LoginForm>
        <UsernameInput value="SpyceVT" />
        <LoginButton>Login</LoginButton>
      </LoginForm>
    </LoginModal>
  </StyledStarting>
);

export default StartingProps;
