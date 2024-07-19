import { Environment } from '../../../environment';
import { Api } from '../axios-config';

interface IListaPessoa {
  id: number,
  email: string,
  cidadeId: number,
  nomeCompleto: string
}

interface IDetalhePessoa {
  id: number,
  email: string,
  cidadeId: number,
  nomeCompleto: string
}

type IPessoasComTotalCount = {
  data: IListaPessoa[],
  totalCount: number
}

const getAll = async (page = 1, limit = Environment.LIMITE_DE_LINHAS, filter = ''):Promise<IPessoasComTotalCount | Error> => {
  try {
    const urlRelativa = `${Environment.CAMINHO_ALUNOS}?_page=${page}&_limit=${limit}&nomeCompleto_like=${filter}`;
    
    const { data, headers } = await Api.get(urlRelativa);

    if (data) {
      return {
        data,
        totalCount: Number(headers['x-total-count'] || Environment.LIMITE_DE_LINHAS)
      };
    }

    return new Error('Erro ao listar os registros');

  } catch (error) {
    console.error(error);

    return new Error((error as {message: string}).message || 'Erro ao listar os registros');
  }
};

const getById = async (id: number):Promise<IDetalhePessoa | Error> => {
  try {
    const urlRelativa = `${Environment.CAMINHO_ALUNOS}/${id}`;
    const { data } = await Api.get(urlRelativa);

    if ( data ) {
      return data;
    }

    return new Error('Erro ao consultar o registro');
  } catch (error) {
    console.log(error);

    return new Error((error as {message: string}).message || 'Erro ao consultar o registro');
  }
};

const create = async (pessoa: Omit<IDetalhePessoa, 'id'>):Promise<number | Error> => {

  try {
    const urlRelativa = `${Environment.CAMINHO_ALUNOS}`;

    const { data } = await Api.post<IDetalhePessoa>(urlRelativa, pessoa);

    if (data) {
      return data.id;
    }
    
    return new Error('Erro ao criar o registro');
  } catch (error) {
    console.error(error);

    return new Error((error as {message: string}).message || 'Erro ao criar o registro');
  }

};

const deleteById = async (id: number):Promise<void | Error> => {

  try {
    const urlRelativa = `${Environment.CAMINHO_ALUNOS}/${id}`;

    const { data } = await Api.delete(urlRelativa);

    if (data) return;

    return new Error('Erro ao deletar registro');
  } catch (error) {
    console.error(error);

    return new Error((error as {message: string}).message || 'Erro ao deletar registro');
  }
};

const updateById = async (id: number, pessoa: IDetalhePessoa):Promise<void | Error> => {
  try {
    const urlRelativa = `${Environment.CAMINHO_ALUNOS}/${id}`;
    const { data } = await Api.put(urlRelativa, pessoa);

    if (data) return;

    return new Error('Erro ao atualizar o registro');
  } catch (error) {
    console.error(error);

    return new Error((error as {message: string}).message || 'Erro ao atualizar o registro');
  }
};

export const PessoasService = {
  getAll,
  getById,
  create,
  deleteById,
  updateById
};