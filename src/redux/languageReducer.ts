export interface LanguageState {
	language: 'zh' | 'en';
	languageList: { name: string; code: string }[];
}
const defaultLanguage: LanguageState = {
	language: 'zh',
	languageList: [
		{
			name: 'Englist',
			code: 'en'
		},
		{
			name: '中文',
			code: 'zh'
		}
	]
};
const languageReducer = (state = defaultLanguage, action) => {
	return state;
};

export default languageReducer;
