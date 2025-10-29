import { Link } from "react-router-dom";
import Wrapper from "../../layouts/Wrapper";

const Error = () => {
    return (
    <Wrapper>
        <div className="error-page">
            <section className="error-section text-center">
                <div className="container">
                    <div className="error-content">
                        <h1>404</h1>
                        <h2>Oups ! Cette page est introuvable.</h2>
                        <Link
                            to="/home-4"
                            className="primary-btn one gradient-bg white-color border-btn"
                        >
                            <span>Retour à l'accueil</span>
                            <i className="icon-1 gradient-color"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>    
    </Wrapper>
    );
};

export default Error;