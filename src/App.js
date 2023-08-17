import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    //Criando estrutura de mapeamento de renderização dos componentes
    <BrowserRouter>
      <Routes>
        {/* O caminho inicial base é '/' */}
        <Route path='/' >
          <Route index element={'inicio'}/>
          <Route path='consulta-historico' element={'aqui será consultado o histórico das visitas'}/>
          <Route path='visitacao-hoje' element={'quem está na empresa hoje'}/>
          <Route path='agendamento' element={'aqui vai fazer o agendamento de visitas futuras'}/>
          <Route path='agenda' element={'aqui vai vizualizar visitas futuras'}/>
          <Route path='visitante' element={'aqui consulta um visitante em específico'}/>
        </Route>
        <Route path='*' element={'bug'}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
