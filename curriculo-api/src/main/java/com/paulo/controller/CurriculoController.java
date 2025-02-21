package com.paulo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paulo.model.Curriculo;
import com.paulo.model.Endereco;
import com.paulo.model.Experiencia;
import com.paulo.model.Formacao;
import com.paulo.model.InformacaoAdicional;
import com.paulo.repository.CurriculoRepository;
import com.paulo.repository.EnderecoRepository;
import com.paulo.repository.ExperienciaRepository;
import com.paulo.repository.FormacaoRepository;
import com.paulo.repository.InformacaoAdicionalRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/curriculos")
public class CurriculoController {

    private final CurriculoRepository curriculoRepository;
    private final FormacaoRepository formacaoRepository;
    private final EnderecoRepository enderecoRepository;
    private final ExperienciaRepository experienciaRepository;
    private final InformacaoAdicionalRepository informacaoAdicionalRepository;

    @Autowired
    public CurriculoController(CurriculoRepository curriculoRepository, FormacaoRepository formacaoRepository,
                               EnderecoRepository enderecoRepository, ExperienciaRepository experienciaRepository,
                               InformacaoAdicionalRepository informacaoAdicionalRepository) {
        this.curriculoRepository = curriculoRepository;
        this.formacaoRepository = formacaoRepository;
        this.enderecoRepository = enderecoRepository;
        this.experienciaRepository = experienciaRepository;
        this.informacaoAdicionalRepository = informacaoAdicionalRepository;
    }

    @GetMapping("/buscarCurriculo")
    public List<Curriculo> buscarCurriculo() {
        return curriculoRepository.findAll();
    }

    @PostMapping("/cadastrarCurriculo")
    public Curriculo cadastrarCurriculo(@RequestBody Curriculo curriculo) {
        List<InformacaoAdicional> informacoesAdicionais = curriculo.getInformacoesAdicionais();
        if (informacoesAdicionais != null) {
            for (InformacaoAdicional info : informacoesAdicionais) {
                info.setCurriculo(curriculo);
                informacaoAdicionalRepository.save(info);
            }
        }

        Curriculo resposta = curriculoRepository.save(curriculo);

        List<Formacao> formacoes = curriculo.getFormacoes();
        if (formacoes != null) {
            for (Formacao formacao : formacoes) {
                formacao.setCurriculo(curriculo);
                formacaoRepository.save(formacao);
            }
        }

        List<Experiencia> experiencias = curriculo.getExperiencias();
        if (experiencias != null) {
            for (Experiencia experiencia : experiencias) {
                experiencia.setCurriculo(curriculo);
                experienciaRepository.save(experiencia);
            }
        }

        return resposta;
    }

    @PutMapping("/atualizarCurriculo/{id}")
    public Curriculo atualizarCurriculo(@PathVariable Long id, @RequestBody Curriculo curriculoNovo) {
        Curriculo curriculo = curriculoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Currículo não encontrado"));

        Endereco enderecoNovo = curriculoNovo.getEndereco();
        if (enderecoNovo != null) {
            Endereco endereco = curriculo.getEndereco();
            if (endereco == null) {
                endereco = new Endereco();
                curriculo.setEndereco(endereco);
            }
            endereco.setRua(enderecoNovo.getRua());
            endereco.setNum(enderecoNovo.getNum());
            endereco.setCep(enderecoNovo.getCep());
            endereco.setCidade(enderecoNovo.getCidade());
            endereco.setUf(enderecoNovo.getUf());
            enderecoRepository.save(endereco);
        }

        List<InformacaoAdicional> infoNovas = curriculoNovo.getInformacoesAdicionais();
        if (infoNovas != null) {
            informacaoAdicionalRepository.deleteAll(curriculo.getInformacoesAdicionais());
            for (InformacaoAdicional infoNova : infoNovas) {
                infoNova.setCurriculo(curriculo);
                informacaoAdicionalRepository.save(infoNova);
            }
            curriculo.setInformacoesAdicionais(infoNovas);
        }

        if (curriculoNovo.getExperiencias() != null) {
            experienciaRepository.deleteAll(curriculo.getExperiencias());
            List<Experiencia> novasExperiencias = curriculoNovo.getExperiencias();
            for (Experiencia novaExperiencia : novasExperiencias) {
                novaExperiencia.setCurriculo(curriculo);
                experienciaRepository.save(novaExperiencia);
            }
            curriculo.setExperiencias(novasExperiencias);
        }

        if (curriculoNovo.getFormacoes() != null) {
            formacaoRepository.deleteAll(curriculo.getFormacoes());
            List<Formacao> novasFormacoes = curriculoNovo.getFormacoes();
            for (Formacao novaFormacao : novasFormacoes) {
                novaFormacao.setCurriculo(curriculo);
                formacaoRepository.save(novaFormacao);
            }
            curriculo.setFormacoes(novasFormacoes);
        }

        curriculoRepository.save(curriculo);
        return curriculo;
    }
}