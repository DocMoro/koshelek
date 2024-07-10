import { create } from 'zustand'

import { TCurrencies } from '../shared/constants/type'
import { exchangeRate, startCurrenciesValue } from '../shared/constants/vars'
import { checkValidCurrensi, numberFixed } from '../shared/utils/pureFunc'

type State = {
  currencies: TCurrencies
}

type Action = {
  setValueUsd: (newValue: string) => void
  setValueEur: (newValue: string) => void
}

const useCurrenciesStore = create<State & Action>(set => ({
  currencies: startCurrenciesValue,
  setValueUsd: (newValue: string) =>
    set(state => {
      if (newValue === '') {
        return {
          currencies: {
            ...state.currencies,
            valueUsd: '',
            valueEur: ''
          }
        }
      }
      if (!checkValidCurrensi(newValue)) {
        return {
          currencies: {
            ...state.currencies
          }
        }
      }
      const newValueEur = numberFixed(+newValue * exchangeRate, 2).toString()
      return {
        currencies: {
          ...state.currencies,
          valueUsd: newValue,
          valueEur: newValueEur
        }
      }
    }),
  setValueEur: (newValue: string) =>
    set(state => {
      if (newValue === '') {
        return {
          currencies: {
            ...state.currencies,
            valueUsd: '',
            valueEur: ''
          }
        }
      }
      if (!checkValidCurrensi(newValue)) {
        return {
          currencies: {
            ...state.currencies
          }
        }
      }
      const newValueUsd = numberFixed(+newValue / exchangeRate, 2).toString()
      return {
        currencies: {
          ...state.currencies,
          valueUsd: newValueUsd,
          valueEur: newValue
        }
      }
    })
}))

export { useCurrenciesStore }
