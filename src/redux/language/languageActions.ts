
export const CHANGE_LANGUAGE = 'change_language';

export const ADD_LANGUAGE = 'add_language';

/**
 * 触发更改语言接口定义
 */
interface ChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE;
  payload: 'zh' | 'en'
}

/**
 * 添加语言接口定义
 */
interface AddLanguageAction {
  type: typeof ADD_LANGUAGE;
  payload: { name: string; code: string };
}

/**
 * 定义语言更改类型
 */
export type LanguageActionTypes = ChangeLanguageAction | AddLanguageAction

/**
 * 
 * @param languageCode 语言字符
 * @returns {ChangeLanguageAction}
 */
export const changeLanguageActionCreator = (languageCode:'zh' | 'en'):ChangeLanguageAction => {
  return {
    type: CHANGE_LANGUAGE,
    payload:languageCode
  }
}

export const addLanguageActionCreator = (name: string, code: string): AddLanguageAction => {
  return {
    type: ADD_LANGUAGE,
    payload: { name, code },
  }
}