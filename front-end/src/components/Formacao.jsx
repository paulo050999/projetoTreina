import React from 'react';

function Formacao({ formacoes, handleFormacaoChange }) {
    return (
        <div>
            <h2>Formação</h2>
            {formacoes.map((formacao, index) => (
                <div key={index}>
                    <input 
                        type="text" 
                        value={formacao.tipo} 
                        onChange={e => handleFormacaoChange(e, index, 'tipo')} 
                        placeholder="Tipo" 
                    />
                    <input 
                        type="text" 
                        value={formacao.curso} 
                        onChange={e => handleFormacaoChange(e, index, 'curso')} 
                        placeholder="Curso" 
                    />
                    <input 
                        type="text" 
                        value={formacao.ano} 
                        onChange={e => handleFormacaoChange(e, index, 'ano')} 
                        placeholder="Ano" 
                    />
                </div>
            ))}
        </div>
    );
}

export default Formacao;