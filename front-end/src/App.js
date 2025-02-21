import React, { useState, useEffect } from 'react';
import { getCurriculoById, updateCurriculo } from './services/CurriculoService';
import Identificacao from './components/Identificacao';
import Formacao from './components/Formacao';
import Experiencia from './components/Experiencia';
import InformacoesAdicionais from './components/InformacoesAdicionais';

function App() {
    const [curriculo, setCurriculo] = useState(null);

    useEffect(() => {
        const fetchCurriculo = async () => {
            try {
                const data = await getCurriculoById(1); 
                setCurriculo(data);
            } catch (error) {
                console.error("Erro ao carregar currículo: ", error);
            }
        };

        fetchCurriculo();
    }, []);

    const handleInputChange = (e, field) => {
        setCurriculo({
            ...curriculo,
            [field]: e.target.value
        });
    };

    const handleFormacaoChange = (e, index, field) => {
        const updatedFormacoes = curriculo.formacoes.map((formacao, i) => 
            i === index ? { ...formacao, [field]: e.target.value } : formacao
        );
        setCurriculo({ ...curriculo, formacoes: updatedFormacoes });
    };

    const handleExperienciaChange = (e, index, field) => {
        const updatedExperiencias = curriculo.experiencias.map((experiencia, i) => 
            i === index ? { ...experiencia, [field]: e.target.value } : experiencia
        );
        setCurriculo({ ...curriculo, experiencias: updatedExperiencias });
    };

    const handleUpdateCurriculo = async () => {
        try {
            await updateCurriculo(curriculo.id, curriculo);
            alert("Currículo atualizado com sucesso!");
        } catch (error) {
            console.error("Erro ao atualizar currículo: ", error);
            alert("Erro ao atualizar currículo.");
        }
    };

    return (
        <div>
            <h1>Currículo</h1>
            {curriculo && (
                <div>
                    <Identificacao curriculo={curriculo} handleInputChange={handleInputChange} />
                    <Formacao formacoes={curriculo.formacoes} handleFormacaoChange={handleFormacaoChange} />
                    <Experiencia experiencias={curriculo.experiencias} handleExperienciaChange={handleExperienciaChange} />
                    <InformacoesAdicionais informacoes={curriculo.informacoesAdicionais} />
                    <button onClick={handleUpdateCurriculo}>Salvar</button>
                    <footer>
                        <div>&copy; 2025 - Paulo Bezerra | Todos os direitos reservados</div>
                    </footer>
                </div>
            )}
        </div>
    );
}

export default App;