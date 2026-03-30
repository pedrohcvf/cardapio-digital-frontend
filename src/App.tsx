import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card'
import { useFoodData } from './hooks/useFoodData'
import { CreateModel } from './components/create-model/create-model'

function App() {
  const {data} = useFoodData();
  const [isModelOpen, setIsModelOpen] = useState(false);
  const handleOpenModel = () => {
    setIsModelOpen(prev => !prev)
  }

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map(foodData => 
        <Card 
        price={foodData.price} 
        title={foodData.title} 
        image={foodData.image}
        />
      )}
      </div>
      {isModelOpen && <CreateModel/>}
      <button onClick={handleOpenModel}>Criar</button>
    </div>
  )
}

export default App
