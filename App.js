import './App.css';
import { FiLogIn } from 'react-icons/fi'
import Form from './components/Form';
import LogoInt from './components/imagens/logo_int.png'

function App() {
  return (
    <div className="container">
      <img src={LogoInt} className="logo-int"/>
      <div className="box-form">
        <h1>Login</h1>
        <Form/>
        <a href="#"><p><FiLogIn size="16" className="cadastro_icon"/>Não possui uma conta?<br/>Cadastre-se aqui</p></a>
      </div>
    </div>
  );
}

export default App;
