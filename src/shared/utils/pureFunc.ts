import { regexValidCurrensi } from '../constants/vars'

export const checkValidCurrensi = (numStr: string) => regexValidCurrensi.test(numStr)
