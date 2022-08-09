import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';

import { UserContext } from '../contexts/UserContext';

import Input from '../components/Forms/Input';
import InputPassword from '../components/Forms/InputPassword';
import ButtonForm from '../components/Forms/Button';
import Alert from '../components/Feedbacks/Alert';

import requestUserApi from '../services/api/users';

function SignIn(){
  const [ signIn, setSignIn ] = useState({email:'', password:''});
  const [ alert, setAlert ] = useState({message:'', isOpen:false, kind:'', update: 0});
  const [ loading, setLoading ] = useState(false);

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  function handleSignIn(e){
    e.preventDefault();
    
    setLoading(true);

    const promise = requestUserApi.signIn(signIn);
    promise.then((response) => {
      const { data } = response;
      setAlert({message: 'Login efetuado!', isOpen:true, kind:'success', update: alert.update + 1});
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
      setTimeout(() => navigate('/home'), 1000);
    });
    promise.catch((e) => {
      setAlert({message: e.response.data, isOpen:true, kind:'error', update: alert.update + 1});
      setLoading(false);
    });
  }

  return(
    <Container>
      <div className='image-div'>
        <div className='box'>
          <h1>Animation</h1>
          <p>O seu site de animes</p>
          <p>preferido!</p>
        </div>
      </div>
      <div className='form-div'>
        <h1>Animation</h1>
        <h2>Assista agora!</h2>
        <form onSubmit={handleSignIn}>
          <Input 
            label={'E-mail'} 
            state={signIn} 
            setState={setSignIn} 
            type={'email'} 
            icon={<EmailIcon color='primary'/>}
            />
          <InputPassword 
            label={'Password'} 
            state={signIn} 
            setState={setSignIn} 
            type={'password'}
            icon={<PasswordIcon color='primary'/>}
            />
          <ButtonForm text={'Entrar'} loading={loading}/>
        </form>
        <Link to='/signup'>
          <p>Não possui uma conta? Clique aqui</p>
        </Link>
      </div>
      <Alert alert={alert}/>
    </Container>
  );
}

export default SignIn;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  .form-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 35vw;
    height: 100vh;
    h1 {
      color: white;
      font-size: 50px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    h2 {
      color: white;
      font-size: 30px;
    }
    form {
      padding: 30px 50px;
    }
    p {
      color: white;
    }
  }
  .image-div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75vw;
    height: 100vh;
    background: radial-gradient(circle, rgba(88,69,154,1) 0%, rgba(0,17,37,1) 100%);
    background-image: url('https://images4.alphacoders.com/987/987919.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 300px;
      height: 200px;
      opacity: 85%;
      border-radius: 10px;
      h1{
        color: white;
        font-size: 50px;
        font-weight: 700;
        padding: 10px;
      }
      p{
        color: white;
        font-size: 20px;
      }
    }
  }

  @media (max-width: 1100px){
    flex-direction: column;
    .form-div{
      width: 100vw;
      background-image: url('https://images4.alphacoders.com/987/987919.jpg');
      background-repeat: no-repeat;
      background-size: contain;
    }
    .image-div{
      display: none;
    }
  }
`