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

type Store = State & Action

const useCurrenciesStore = create<Store>(set => ({
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

const selectorCurrencies = (state: Store) => state.currencies
const selectorValueEur = (state: Store) => state.setValueEur
const selectorValueUsd = (state: Store) => state.setValueUsd

export { selectorCurrencies, selectorValueEur, selectorValueUsd, useCurrenciesStore }
