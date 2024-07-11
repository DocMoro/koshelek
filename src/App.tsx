import './App.css'

import { FormOfCurrencies } from './components/FormOfCurrencies'
import { selectorCurrencies, selectorValueEur, selectorValueUsd, useCurrenciesStore } from './store/currencies'

function App() {
  const currencies = useCurrenciesStore(selectorCurrencies)
  const setValueUsd = useCurrenciesStore(selectorValueUsd)
  const setValueEur = useCurrenciesStore(selectorValueEur)

  return (
    <>
      <FormOfCurrencies currencies={currencies} setValueUsd={setValueUsd} setValueEur={setValueEur} />
    </>
  )
}

export default App
