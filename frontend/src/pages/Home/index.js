import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
    return(
        <div className="text-center container">
            <br/><br/><br/>
            <br/><br/><br/>
            <h1>Produtos</h1>
            <br/>
            <Link to="/cadastrarproduto">
                <button className="btn btn-primary">Cadastrar</button>{' '}
            </Link>
            <Link to="/listarprodutos">
                <button className="btn btn-primary">Listar todos</button>{' '}
            </Link>
            <br/><br/><br/>
            <br/><br/><br/>
            <h1>Compras</h1>
            <br/>
            <Link to="/cadastrarcompra">
                <button className="btn btn-primary">Comprar</button>{' '}
            </Link>
            <Link to="/listarcompras">
                <button className="btn btn-primary">Listar todas</button>{' '}
            </Link>
        </div>
    );
}