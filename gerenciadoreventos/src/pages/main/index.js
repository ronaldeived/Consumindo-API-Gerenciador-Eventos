import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";

export default class Main extends Component{
    state = {
        casas: [],
    }


componentDidMount(){
    this.loadProducts();
}

    loadProducts = async () => {
        const response = await api.get(`/casas`);
        this.setState({ casas : response.data });
    };

    render(){
        const { casas } = this.state;


        return (
            <div className="casas-list">
                {casas.map(casa => (
                     <article key={casa.id}>
                        <strong>{casa.nome}</strong>
                        <p>{casa.endereco}</p>

                        <a href="#">Acessar</a>
                    </article>
                ))}
                <div className="actions">
                    <button onClick={this.prevPage}>Anterior</button>
                    <button onClick={this.nextPage}>Proximo</button>
                </div>
            </div>
        )
    }
}