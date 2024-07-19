/*eslint-disable no-undef*/

import { useMemo } from 'react';
import { FerramentasDaListagem } from '../../shared/components';
import { LayoutBase } from '../../shared/layouts';
import { useSearchParams } from 'react-router-dom';

export const ListagemDeCidade: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);
  
  return (
    <LayoutBase
      titulo="Listagem de cidades"
      barraDeFerramentas={
        <FerramentasDaListagem
          textoBotaoNovo='Nova'
          textoDaBusca={busca}
          mostrarInputBusca
          aoMudarTextoDaBusca={texto => setSearchParams({busca: texto}, {replace: true})}
        />
      }
    >

    </LayoutBase>
  );
};