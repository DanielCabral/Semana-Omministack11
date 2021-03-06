import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';


import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident(){
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente</p>
                    <Link className='back-link' to='/profile'>
                        <FiArrowLeft size={16} color='#E02041'/>
                        Voltar para home
                    </Link>
                </section>
                    <form>
                        <input placeholder='Titulo do caso'/>
                        <textarea placeholder='Descricao'/>
                        <input placeholder='Valor em R$'/>
                        <button className='button' type='button'>Cancelar</button>
                        <button className='button' type='submit'>Cadastrar</button>
                    </form>
            </div>
        </div>
    );
}