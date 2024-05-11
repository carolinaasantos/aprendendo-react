import Button from "../components/Button";
import Input from "../components/Input";
import gato from '../assets/gato3.png';

function Register() {
    return (
        <div className="Pagina">
            <header className="Pagina-header">
                <h1 className="Titulo">Tela de cadastro</h1>
            </header>
            <div className="Login">
                <div className="conteudo-left">
                    <h3 className="Campos">Crie um nome de usuário</h3>
                    <Input className="Input" />
                    <h3 className="Campos">Insira o seu e-mail</h3>
                    <Input className="Input" tipo="email"/>
                </div>
                <div className="conteudo-right">
                    <h3 className="Campos">Digite sua senha</h3>
                    <Input className="Input" tipo="password" />
                    <h3 className="Campos">Digite sua senha novamente</h3>
                    <Input className="Input" tipo="password" />
                </div>
                <Button className="Button" valor="Cadastrar" rota="/registered-home"/>
                <Button className="Button" valor="Ir para tela de login" rota="/login"/>
            </div>
            <img src={gato} className="Gato" alt="Gato" />
            <p>
                Desafio de códigos - Semana 1.
            </p>
        </div>
    );
}

export default Register;