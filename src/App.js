import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './Componentes/Menu';
import Cabecalho from './Componentes/Cabecalho';

function App() {
  return (
    //Criando estrutura de mapeamento de renderização dos componentes
    <BrowserRouter>
    <Menu/>
      <Routes>
        {/* O caminho inicial base é '/' */}
        <Route path='/' element={<Cabecalho/>} >
          <Route index element={'Bem vindo'}/>
          <Route path='consulta-historico' element={'aqui será consultado o histórico das visitas'}/>
          <Route path='visitacao-hoje' element={'quem está na empresa hoje'}/>
          <Route path='agendamento' element={'aqui vai fazer o agendamento de visitas futuras'}/>
          <Route path='agenda' element={'aqui vai vizualizar visitas futuras'}/>
          <Route path='visitante' element={'aqui consulta um visitante em específico'}/>
        </Route>
        <Route path='*' element={'ERROR - PÁGINA NÃO ENCONTRADA'}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
