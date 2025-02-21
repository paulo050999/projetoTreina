import React, { useState, useEffect } from 'react';
import Identificacao from './Identificacao';
import Formacao from './Formacao';
import Experiencia from './Experiencia';
import InformacoesAdicionais from './InformacoesAdicionais';
import { getCurriculoById, updateCurriculo } from '../services/CurriculoService';

const Curriculo = () => {
    const [curriculo, setCurriculo] = useState({
        nome: '',
        telefone: '',
        endereco: '',
        formacoes: [],
        experiencias: [],
        informacoesAdicionais: []
    });
    const [modoEdicao, setModoEdicao] = useState(false);

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

    const handleInformacoesAdicionaisChange = (e, index, field) => {
        const updatedInformacoesAdicionais = curriculo.informacoesAdicionais.map((info, i) => 
            i === index ? { ...info, [field]: e.target.value } : info
        );
        setCurriculo({ ...curriculo, informacoesAdicionais: updatedInformacoesAdicionais });
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
        <div className="container">
            <div className="header">
                <button onClick={() => setModoEdicao(!modoEdicao)}>
                    {modoEdicao ? "Exibir" : "Editar"}
                </button>
            </div>

            {modoEdicao ? (
                <div>
                    <Identificacao curriculo={curriculo} handleInputChange={handleInputChange} />
                    <Formacao formacoes={curriculo.formacoes} handleFormacaoChange={handleFormacaoChange} />
                    <Experiencia experiencias={curriculo.experiencias} handleExperienciaChange={handleExperienciaChange} />
                    <InformacoesAdicionais informacoes={curriculo.informacoesAdicionais} handleInformacoesAdicionaisChange={handleInformacoesAdicionaisChange} />
                    <button onClick={handleUpdateCurriculo}>Salvar</button>
                </div>
            ) : (
                <div>
                    <Secao titulo="Identificação">
                        <p>Nome: {curriculo.nome}</p>
                        <p>Telefone: {curriculo.telefone}</p>
                        <p>Endereço: {curriculo.endereco}</p>
                    </Secao>
                    <Secao titulo="Formação">
                        {curriculo.formacoes.map((formacao, index) => (
                            <p key={index}>{formacao.tipo} - {formacao.curso} ({formacao.ano})</p>
                        ))}
                    </Secao>
                    <Secao titulo="Experiência">
                        {curriculo.experiencias.map((experiencia, index) => (
                            <p key={index}>{experiencia.empresa} ({experiencia.dataInicio} - {experiencia.dataFim})</p>
                        ))}
                    </Secao>
                    <Secao titulo="Informações Adicionais">
                        {curriculo.informacoesAdicionais.map((info, index) => (
                            <p key={index}><a href={info.url}>{info.tipo}</a></p>
                        ))}
                    </Secao>
                </div>
            )}
        </div>
    );
};

export default Curriculo;