import { useNavigate } from 'react-router-dom';

function Button({className, valor, rota}) {
    const navigate = useNavigate();
      
    return (
        <button className={className} onClick={() => navigate(rota)}>{valor}</button>
    );
}

export default Button;