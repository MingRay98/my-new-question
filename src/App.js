import {injectGlobal} from 'emotion'

injectGlobal`
  * {
    font-family: 微軟正黑體;
  }
`
export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    margin: 'auto',
    width: '70vw',
    maxWidth: '700px',
    '@media (max-width: 700px)': {
      width: '95vw'
    }
  }
}