import Header from './components/Header';
import Results from './components/Results';

import { useState } from 'react';
import UserInput from './components/UserInput';

const initialData = {
  initialInvestment: 10000,
  annualInvestment: 500,
  expectedReturn: 100,
  duration: 5
}

function App() {
  const [ data, setData ] = useState(initialData);

  function onDataChange(event) {
    setData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value } 
    })
  }

  return (
      <>
        <Header title={"Investment Calculator"} />
        <UserInput data={data} onDataChange={onDataChange} />
        <Results data={data} />
      </>
    )
}

export default App
