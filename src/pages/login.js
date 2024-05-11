import Button from "../components/Button";
import Input from "../components/Input";
import gato from '../assets/gato2.png';

function Login() {
    return (
        <div className="Pagina">
            <header className="Pagina-header">
                <h1 className="Titulo">Tela de login</h1>
            </header>
            <div className="Login">
                <h3 className="Campos">Usuário</h3>
                <Input className="Input" />
                <h3 className="Campos">Senha</h3>
                <Input className="Input" tipo="password" /><br></br>
                <Button className="Button" valor="Logar" rota="/logged-home"/>
                <Button className="Button" valor="Cadastrar" rota="/register"/>
            </div>
            <img src={gato} className="Gato" alt="Gato" />
            <p>
                Desafio de códigos - Semana 1.
            </p>
        </div>
    );
}

export default Login;