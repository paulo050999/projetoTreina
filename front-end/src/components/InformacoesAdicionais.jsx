import React from 'react';

function InformacoesAdicionais({ informacoes, handleInformacoesAdicionaisChange }) {
    return (
        <div>
            <h2>Informações Adicionais</h2>
            {informacoes.map((info, index) => (
                <div key={index}>
                    <input 
                        type="text" 
                        value={info.tipo} 
                        onChange={e => handleInformacoesAdicionaisChange(e, index, 'tipo')} 
                        placeholder="Tipo" 
                    />
                    <input 
                        type="text" 
                        value={info.url} 
                        onChange={e => handleInformacoesAdicionaisChange(e, index, 'url')} 
                        placeholder="URL" 
                    />
                </div>
            ))}
        </div>
    );
}

export default InformacoesAdicionais;