import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Input from '../components/Forms/Input';
import InputPassword from '../components/Forms/InputPassword';
import ButtonForm from '../components/Forms/Button';
import Alert from '../components/Feedbacks/Alert';

import requestUserApi from '../services/api/users';

function SignUp(){
  const [ signUp, setSignUp ] = useState({name:'', email:'', imageUrl:'', password:'', confirmPassword:''});
  const [ alert, setAlert ] = useState({message:'', isOpen:false, kind:'', update: 0});
  const [ loading, setLoading ] = useState(false);

  const navigate = useNavigate();

  function handleSignUp(e){
    e.preventDefault();
    setLoading(true);
    const promise = requestUserApi.signUp(signUp);
    promise.then((response) => {
      setAlert({message: response.data, isOpen:true, kind:'success', update: alert.update + 1});
      setTimeout(() => navigate('/'), 1000);
    });
    promise.catch((e) => {
      setAlert({message: e.response.data, isOpen:true, kind:'error', update: alert.update + 1});
      setLoading(false);
    });
  }

  return(
    <Container>
      <div className='form-div'>
        <h1>Animation</h1>
        <h2>Cadastre-se!</h2>
        <form onSubmit={handleSignUp}>
          <Input label={'Name'} signUp={signUp} setSignUp={setSignUp} type={'name'}/>
          <Input label={'E-mail'} signUp={signUp} setSignUp={setSignUp} type={'email'}/>
          <Input label={'Image URL'} signUp={signUp} setSignUp={setSignUp} type={'imageUrl'}/>
          <InputPassword label={'Password'} signUp={signUp} setSignUp={setSignUp} type={'password'}/>
          <InputPassword label={'Confirm Password'} signUp={signUp} setSignUp={setSignUp} type={'confirmPassword'}/>
          <ButtonForm text={'Cadastrar'} loading={loading}/>
        </form>
        <Link to='/'>
          <p>Já é cadastrado? Clique aqui</p>
        </Link>
      </div>
      <div className='image-div'>
        <div className='box'>
          <h1>Animation</h1>
          <p>O seu site de animes</p>
          <p>preferido!</p>
        </div>
      </div>
      <Alert alert={alert}/>
    </Container>
  );
}

export default SignUp;

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
    padding: 50px 0px;
    h1 {
      color: white;
      font-size: 50px;
      margin-bottom: 20px;
    }
    h2 {
      color: white;
      font-size: 30px;
    }
    form {
      padding: 50px;
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
    background-color: green;
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
      background-size: cover;
    }
    .image-div{
      display: none;
    }
  }
`