import React from "react";
import './Home.css';
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-page">
        <h1 className="welcome-message">Welcome to React</h1>
        <p className="lorem-ipsum">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repudiandae provident corporis ut perferendis consequatur cumque consequuntur minima facere vitae, alias qui distinctio fuga nam. Nihil, eius quisquam. Alias blanditiis eos tempore id explicabo excepturi beatae obcaecati quam consequuntur adipisci, dolores reprehenderit doloremque non deleniti autem aspernatur commodi quasi ex facilis? Commodi dolor sapiente temporibus tempore ipsa, magni quod dolore expedita fugit praesentium illum magnam perferendis. Suscipit nisi iure, cumque quae alias, aspernatur, molestias repellendus saepe similique beatae enim tempore unde possimus officia doloremque esse quia! Qui nostrum beatae distinctio? Harum tempora aliquid nulla natus obcaecati labore cupiditate molestias iusto.
        </p>
        <button className="explore-button">Explore More!!!</button>
      </div>
    </div>
  );
};

export default Home;