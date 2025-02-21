import React from 'react';

function Identificacao({ curriculo, handleInputChange }) {
    return (
        <div>
            <h2>Identificação</h2>
            <input 
                type="text" 
                value={curriculo.nome} 
                onChange={e => handleInputChange(e, 'nome')} 
                placeholder="Nome" 
            />
            <input 
                type="text" 
                value={curriculo.telefone} 
                onChange={e => handleInputChange(e, 'telefone')} 
                placeholder="Telefone" 
            />
            <input 
                type="text" 
                value={curriculo.endereco} 
                onChange={e => handleInputChange(e, 'endereco')} 
                placeholder="Endereço" 
            />
        </div>
    );
}

export default Identificacao;