/*Arquivo de definição (apenas com código de definição de tipos)*/
import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' { //pra adicionar typagem (se eu n importasse o styled-components, ele ia criar do 0 a definição de tipos da biblioteca)
    export interface DefaultTheme extends ThemeType {}
}