// src/services/CurriculoService.js
import axios from 'axios';

const apiUrl = 'http://localhost:8080/curriculos';

export const getCurriculoById = async (id) => {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
};

export const updateCurriculo = async (id, curriculo) => {
    const response = await axios.put(`${apiUrl}/atualizarCurriculo/${id}`, curriculo);
    return response.data;
};