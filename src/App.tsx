import './App.css'

import { FormOfCurrencies } from './components/FormOfCurrencies'
import { useCurrenciesStore } from './store/currencies'

function App() {
  const currencies = useCurrenciesStore(state => state.currencies)
  const setValueUsd = useCurrenciesStore(state => state.setValueUsd)
  const setValueEur = useCurrenciesStore(state => state.setValueEur)

  return (
    <>
      <FormOfCurrencies currencies={currencies} setValueUsd={setValueUsd} setValueEur={setValueEur} />
    </>
  )
}

export default App
