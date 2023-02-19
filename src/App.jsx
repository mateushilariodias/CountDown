import './App.css'
import Title from '../components/Title'
import Counter from '../components/Counter'
import PaisagemCaminhada from './images/PaisagemCaminhada.jpg'
import useCountdown from './hooks/useCountdown'

function App() {

  const [day, hour, minute, second] = useCountdown("Set 15, 2023 17:40:00");
  
  return (
    <div className="App" style={{ backgroundImage:`url(${PaisagemCaminhada})`}}>
      <div className='container'>
        <Title title={"Contagem regressiva para o aniversário do Mateus"} />
        <div className='countdown-container'>
            <Counter title="Dias" number={day}/>
            <Counter title="Horas" number={hour}/>
            <Counter title="Minutos" number={minute}/>
            <Counter title="Segundos" number={second}/>
        </div>
      </div>
    </div>
  )
}

export default App