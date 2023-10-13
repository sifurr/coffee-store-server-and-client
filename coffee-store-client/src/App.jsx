
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {

  const coffeeList = useLoaderData();

  return (
    <>      
      <h1 className='text-5xl text-purple-600 font-bold text-center my-10'>Cold Coffee</h1>
      <div className='grid md:grid-cols-2 gap-4 mx-16'>
      {
        coffeeList.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
      }
      </div>
      
    </>
  )
}

export default App

