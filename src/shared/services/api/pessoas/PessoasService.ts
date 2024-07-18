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
    const urlRelativa = `${Environment.URL_BASE}/cidades?page=${page}&limit=${limit}&filter=${filter}`;
    
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

const getById = async ():Promise<any> => {};

const create = async ():Promise<any> => {};

const deleteById = async ():Promise<any> => {};

const updateById = async ():Promise<any> => {};

export const PessoasService = {
  getAll,
  getById,
  create,
  deleteById,
  updateById
};