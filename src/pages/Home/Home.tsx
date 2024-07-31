import React from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleExploreMenu = () => {
    navigate("/catalog");
  };
  return (
    <div className="home">
      <header className="hero">
        <h1>¡Bienvenido a Delicias Gourmet!</h1>
        <p>
          Descubre una variedad de platos deliciosos y recetas exclusivas que
          harán que tu experiencia culinaria sea inolvidable.
        </p>
        <button className="cta-button" onClick={handleExploreMenu}>
          Explora el Menú
        </button>
      </header>
      <section className="about-us">
        <h2>¿Quiénes Somos?</h2>
        <p>
          En Delicias Gourmet, nos apasiona la comida de calidad. Somos un
          equipo de chefs y expertos en gastronomía que trabajan incansablemente
          para traerte los mejores platos y recetas exclusivas. Nuestro objetivo
          es ofrecerte una experiencia culinaria única, con ingredientes frescos
          y recetas innovadoras.
        </p>
        <p>
          Desde nuestros inicios, hemos creído en la importancia de la calidad y
          el sabor en cada plato que servimos. Cada receta está diseñada con
          atención al detalle para que disfrutes de una experiencia gastronómica
          excepcional.
        </p>
      </section>
      <section className="our-mission">
        <h2>Nuestra Misión</h2>
        <p>
          Nuestra misión es ser el destino preferido para los amantes de la
          buena comida. Creemos en la conexión entre la comida y las personas, y
          nos esforzamos por ofrecerte platos que no solo satisfagan tu hambre,
          sino que también deleiten tus sentidos.
        </p>
      </section>
    </div>
  );
};

export default Home;
