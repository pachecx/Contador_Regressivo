import './App.scss';
import newYear from './assets/newyear.jpg';
import { Title } from './components/Title';
import { Counter } from './components/Couter';

import { useCountdown } from './hooks/useConuntdown';

function App() {
  const x = useCountdown("jan 1, 2023 00:00:00");
  
  return (
    <div className="App" style={{ backgroundImage: `url(${newYear})`}}>
      <div className="container">
        <Title title="Contagem regressiva para 2025"/>
        <div className="countdow-container">
        <Counter title="Dias" number={2}/>
        <Counter title="Horas" number={2}/>
        <Counter title="Minutos" number={2}/>
        <Counter title="Segundos" number={2}/>
        </div>
      </div>
    </div>
  )
}

export default App
