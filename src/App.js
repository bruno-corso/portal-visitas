import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './Componentes/Menu';
import Cabecalho from './Componentes/Cabecalho';
import ConsultarHistorico from './Paginas/ConsultarHistorico';
import historico_dados from './historico_visitas.json'
import Agendamento from './Paginas/Agendamento';
import { useState } from 'react';
import AgendaFutura from './Paginas/AgendaFutura';

function App() {

  const [VisitasFuturas, SetVisitasFuturas] = useState([])

  function adicionarVisitas(visita) {
    SetVisitasFuturas([...VisitasFuturas, visita]);
    console.log(VisitasFuturas)
  }

  return (
    //Criando estrutura de mapeamento de renderização dos componentes
    <BrowserRouter>
    <Menu/>
      <Routes>
        {/* O caminho inicial base é '/' */}
        <Route path='/' element={<Cabecalho/>} >
          {/* <Route index element={'Bem vindo'}/> */}
          <Route path='consulta-historico' element={<ConsultarHistorico dados_visitas={historico_dados}/>}/>
          <Route path='visitacao-hoje' element={'quem está na empresa hoje'}/>
          <Route path='agendamento' element={<Agendamento incluirVisita={visita => adicionarVisitas(visita)} />}/>
          <Route path='agenda' element={<AgendaFutura arrayVisitas={VisitasFuturas} />}/>
          <Route path='visitante' element={'aqui consulta um visitante em específico'}/>
        </Route>
        <Route path='*' element={'ERROR - PÁGINA NÃO ENCONTRADA'}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
