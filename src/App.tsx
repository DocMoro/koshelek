import './App.css'

import { FormOfCurrencies } from './components/FormOfCurrencies'
import {
  selectorCurrencies,
  selectorTextErr,
  selectorValueEur,
  selectorValueUsd,
  useCurrenciesStore
} from './store/currencies'

function App() {
  const currencies = useCurrenciesStore(selectorCurrencies)
  const setValueUsd = useCurrenciesStore(selectorValueUsd)
  const setValueEur = useCurrenciesStore(selectorValueEur)
  const textErr = useCurrenciesStore(selectorTextErr)

  return (
    <>
      <FormOfCurrencies currencies={currencies} setValueUsd={setValueUsd} setValueEur={setValueEur} textErr={textErr} />
    </>
  )
}

export default App
