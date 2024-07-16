// src/routes/index.ts
import { Router } from 'express';
import { getAlertasRoubo, getAlertaRouboById, createAlertaRoubo, updateAlertaRoubo, deleteAlertaRoubo } from '../controllers/AlertarouboController';
import { getAutomobilistas, getAutomobilistaById, createAutomobilista, updateAutomobilista, deleteAutomobilista } from '../controllers/AutomobilistaController';
import { getBis, getBiById, createBi, updateBi, deleteBi } from '../controllers/BiController';
import { getCartasConducao, getCartaConducaoById, createCartaConducao, updateCartaConducao, deleteCartaConducao } from '../controllers/CartaconducaoController';
import { getCategoriasCarta, getCategoriaCartaById, createCategoriaCarta, updateCategoriaCarta, deleteCategoriaCarta } from '../controllers/CategoriacartaController';
import { getContactos, getContactoById, createContacto, updateContacto, deleteContacto } from '../controllers/ContactoController';
import { getEnderecos, getEnderecoById, createEndereco, updateEndereco, deleteEndereco } from '../controllers/EnderecoController';
import { getFicheiros, getFicheiroById, createFicheiro, updateFicheiro, deleteFicheiro } from '../controllers/FicheiroController';
import { getFuncionarios, getFuncionarioById, createFuncionario, updateFuncionario, deleteFuncionario } from '../controllers/FuncionarioController';
import { getInfracoes, getInfracaoById, createInfracao, updateInfracao, deleteInfracao } from '../controllers/InfracaoController';
import { getLivretes, getLivreteById, createLivrete, updateLivrete, deleteLivrete } from '../controllers/LivreteController';
import { getMarcas, getMarcaById, createMarca, updateMarca, deleteMarca } from '../controllers/MarcaController';
import { getMultas, getMultaById, createMulta, updateMulta, deleteMulta } from '../controllers/MultaController';
import { getMunicipios, getMunicipioById, createMunicipio, updateMunicipio, deleteMunicipio } from '../controllers/MunicipioController';
import { getPagamentosMulta, getPagamentoMultaById, createPagamentoMulta, updatePagamentoMulta, deletePagamentoMulta } from '../controllers/PagamentoMultaController';
import { getPaises, getPaisById, createPais, updatePais, deletePais } from '../controllers/PaisController';
import { getPessoas, getPessoaById, createPessoa, updatePessoa, deletePessoa } from '../controllers/PessoaController';
import { getProvincias, getProvinciaById, createProvincia, updateProvincia, deleteProvincia } from '../controllers/ProvinciaController';
import { getServicosViatura, getServicoViaturaById, createServicoViatura, updateServicoViatura, deleteServicoViatura } from '../controllers/SerivicoviaturaController';
import { getTiposInfracao, getTipoInfracaoById, createTipoInfracao, updateTipoInfracao, deleteTipoInfracao } from '../controllers/TipoinfracaoController';
import { getTiposRoubo, getTipoRouboById, createTipoRoubo, updateTipoRoubo, deleteTipoRoubo } from '../controllers/TiporouboController';
import { getTitulosPropriedade, getTituloPropriedadeById, createTituloPropriedade, updateTituloPropriedade, deleteTituloPropriedade } from '../controllers/TitulopropriedadeController';
import { getViaturas, getViaturaById, createViatura, updateViatura, deleteViatura } from '../controllers/ViaturaController';

const router = Router();

// Rotas para Alertaroubo
router.get('/alertaroubos', getAlertasRoubo);
router.get('/alertaroubo/:id', getAlertaRouboById);
router.post('/alertaroubo', createAlertaRoubo);
router.put('/alertaroubo/:id', updateAlertaRoubo);
router.delete('/alertaroubo/:id', deleteAlertaRoubo);

// Rotas para Automobilista
router.get('/automobilistas', getAutomobilistas);
router.get('/automobilista/:id', getAutomobilistaById);
router.post('/automobilista', createAutomobilista);
router.put('/automobilista/:id', updateAutomobilista);
router.delete('/automobilista/:id', deleteAutomobilista);

// Rotas para Bi
router.get('/bis', getBis);
router.get('/bi/:id', getBiById);
router.post('/bi', createBi);
router.put('/bi/:id', updateBi);
router.delete('/bi/:id', deleteBi);

// Rotas para Carta de Conducao
router.get('/cartasconducao', getCartasConducao);
router.get('/cartaconducao/:id', getCartaConducaoById);
router.post('/cartaconducao', createCartaConducao);
router.put('/cartaconducao/:id', updateCartaConducao);
router.delete('/cartaconducao/:id', deleteCartaConducao);

// Rotas para Categoria de Carta
router.get('/categoriascarta', getCategoriasCarta);
router.get('/categoriacarta/:id', getCategoriaCartaById);
router.post('/categoriacarta', createCategoriaCarta);
router.put('/categoriacarta/:id', updateCategoriaCarta);
router.delete('/categoriacarta/:id', deleteCategoriaCarta);

// Rotas para Contacto
router.get('/contactos', getContactos);
router.get('/contacto/:id', getContactoById);
router.post('/contacto', createContacto);
router.put('/contacto/:id', updateContacto);
router.delete('/contacto/:id', deleteContacto);

// Rotas para Endereco
router.get('/enderecos', getEnderecos);
router.get('/endereco/:id', getEnderecoById);
router.post('/endereco', createEndereco);
router.put('/endereco/:id', updateEndereco);
router.delete('/endereco/:id', deleteEndereco);

// Rotas para Ficheiro
router.get('/ficheiros', getFicheiros);
router.get('/ficheiro/:id', getFicheiroById);
router.post('/ficheiro', createFicheiro);
router.put('/ficheiro/:id', updateFicheiro);
router.delete('/ficheiro/:id', deleteFicheiro);

// Rotas para Funcionario
router.get('/funcionarios', getFuncionarios);
router.get('/funcionario/:id', getFuncionarioById);
router.post('/funcionario', createFuncionario);
router.put('/funcionario/:id', updateFuncionario);
router.delete('/funcionario/:id', deleteFuncionario);

// Rotas para Infracao
router.get('/infracoes', getInfracoes);
router.get('/infracao/:id', getInfracaoById);
router.post('/infracao', createInfracao);
router.put('/infracao/:id', updateInfracao);
router.delete('/infracao/:id', deleteInfracao);

// Rotas para Livrete
router.get('/livretes', getLivretes);
router.get('/livrete/:id', getLivreteById);
router.post('/livrete', createLivrete);
router.put('/livrete/:id', updateLivrete);
router.delete('/livrete/:id', deleteLivrete);

// Rotas para Marca
router.get('/marcas', getMarcas);
router.get('/marca/:id', getMarcaById);
router.post('/marca', createMarca);
router.put('/marca/:id', updateMarca);
router.delete('/marca/:id', deleteMarca);

// Rotas para Multa
router.get('/multas', getMultas);
router.get('/multa/:id', getMultaById);
router.post('/multa', createMulta);
router.put('/multa/:id', updateMulta);
router.delete('/multa/:id', deleteMulta);

// Rotas para Municipio
router.get('/municipios', getMunicipios);
router.get('/municipio/:id', getMunicipioById);
router.post('/municipio', createMunicipio);
router.put('/municipio/:id', updateMunicipio);
router.delete('/municipio/:id', deleteMunicipio);

// Rotas para Pagamento de Multa
router.get('/pagamentosmulta', getPagamentosMulta);
router.get('/pagamentomulta/:id', getPagamentoMultaById);
router.post('/pagamentomulta', createPagamentoMulta);
router.put('/pagamentomulta/:id', updatePagamentoMulta);
router.delete('/pagamentomulta/:id', deletePagamentoMulta);

// Rotas para Pais
router.get('/paises', getPaises);
router.get('/pais/:id', getPaisById);
router.post('/pais', createPais);
router.put('/pais/:id', updatePais);
router.delete('/pais/:id', deletePais);

// Rotas para Pessoa
router.get('/pessoas', getPessoas);
router.get('/pessoa/:id', getPessoaById);
router.post('/pessoa', createPessoa);
router.put('/pessoa/:id', updatePessoa);
router.delete('/pessoa/:id', deletePessoa);

// Rotas para Provincia
router.get('/provincias', getProvincias);
router.get('/provincia/:id', getProvinciaById);
router.post('/provincia', createProvincia);
router.put('/provincia/:id', updateProvincia);
router.delete('/provincia/:id', deleteProvincia);

// Rotas para Servico de Viatura
router.get('/servicosviatura', getServicosViatura);
router.get('/servicoviatura/:id', getServicoViaturaById);
router.post('/servicoviatura', createServicoViatura);
router.put('/servicoviatura/:id', updateServicoViatura);
router.delete('/servicoviatura/:id', deleteServicoViatura);

// Rotas para Tipo de Infracao
router.get('/tiposinfracao', getTiposInfracao);
router.get('/tipoinfracao/:id', getTipoInfracaoById);
router.post('/tipoinfracao', createTipoInfracao);
router.put('/tipoinfracao/:id', updateTipoInfracao);
router.delete('/tipoinfracao/:id', deleteTipoInfracao);

// Rotas para Tipo de Roubo
router.get('/tiposroubo', getTiposRoubo);
router.get('/tiporoubo/:id', getTipoRouboById);
router.post('/tiporoubo', createTipoRoubo);
router.put('/tiporoubo/:id', updateTipoRoubo);
router.delete('/tiporoubo/:id', deleteTipoRoubo);

// Rotas para Titulo de Propriedade
router.get('/titulospropriedade', getTitulosPropriedade);
router.get('/titulopropriedade/:id', getTituloPropriedadeById);
router.post('/titulopropriedade', createTituloPropriedade);
router.put('/titulopropriedade/:id', updateTituloPropriedade);
router.delete('/titulopropriedade/:id', deleteTituloPropriedade);

// Rotas para Viatura
router.get('/viaturas', getViaturas);
router.get('/viatura/:id', getViaturaById);
router.post('/viatura', createViatura);
router.put('/viatura/:id', updateViatura);
router.delete('/viatura/:id', deleteViatura);

export default router;
