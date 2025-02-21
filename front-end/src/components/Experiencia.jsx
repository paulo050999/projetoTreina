import React from 'react';

function Experiencia({ experiencias, handleExperienciaChange }) {
    return (
        <div>
            <h2>Experiência</h2>
            {experiencias.map((experiencia, index) => (
                <div key={index}>
                    <input 
                        type="text" 
                        value={experiencia.empresa} 
                        onChange={e => handleExperienciaChange(e, index, 'empresa')} 
                        placeholder="Empresa" 
                    />
                    <input 
                        type="text" 
                        value={experiencia.dataInicio} 
                        onChange={e => handleExperienciaChange(e, index, 'dataInicio')} 
                        placeholder="Data de Início" 
                    />
                    <input 
                        type="text" 
                        value={experiencia.dataFim} 
                        onChange={e => handleExperienciaChange(e, index, 'dataFim')} 
                        placeholder="Data de Fim" 
                    />
                    <input 
                        type="text" 
                        value={experiencia.cargo} 
                        onChange={e => handleExperienciaChange(e, index, 'cargo')} 
                        placeholder="Cargo" 
                    />
                </div>
            ))}
        </div>
    );
}

export default Experiencia;