import gato from '../assets/gato.png'
import Button from '../components/Button';

function Home() {
    return (
        <div className="Pagina">
            <header className="Pagina-header">
                <h1 className="Titulo">Meu site by Carol</h1>
            </header>
            <div>
                <p>Esse site está sendo desenvolvido em React com o objetivo de melhorar as minhas habilidades com esta linguagem.</p>
            </div>
            <img src={gato} className="Gato" alt="Gato" /><br></br>
            <Button className="Button" valor="Realizar login" rota="/login"/>
            <Button className="Button" valor="Realizar cadastro" rota="/register"/>
            <p>
                Desafio de códigos - Semana 1.
            </p>
        </div>
    );
}

export default Home;