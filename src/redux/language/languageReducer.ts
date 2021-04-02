import i18n from 'i18next'
import { CHANGE_LANGUAGE, ADD_LANGUAGE, LanguageActionTypes } from './languageActions'


/**
 * 定义状态数据类型
 */
export interface LanguageState {
  language: 'en' | 'zh'
  languageList: {
    name: string;
    code: string
  }[]
}
/**
 * 定义默认数据
 */
const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: "English", code: 'en' }
  ]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState,action:LanguageActionTypes) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      i18n.changeLanguage(action.payload)
      return {...state,language:action.payload}
   case ADD_LANGUAGE:
      return {...state,languageList:[...state.languageList,action.payload]}
    default:
      return state
  }
}