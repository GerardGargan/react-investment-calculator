import Header from './components/Header';

import useState from 'react';

const initialData = {
  initialInvestment: 10000,
  annualInvestment: 500,
  expectedReturn: 100,
  duration: 5
}

function App() {
  const [ data, setData ] = useState(initialData);
  
  return (
      <Header title={"Investment Calculator"} />

    )
}

export default App
