export const styles = {
  container: {
    color: 'white',
    fontSize: '1.5rem',
    width: '100%',
    '@media (max-width: 700px)': {
      fontSize: '1rem',
    },
  },
  submitBtn: {
    display: 'flex',
    margin: 'auto',
  },
  title: {
    textShadow: '2px 2px rgb(20,20,20)',
    fontSize: '2rem',
    '@media (max-width: 700px)': {
      fontSize: '1.5rem',
    }
  },
  radioButton: {
    marginLeft: '2.5%',
    transform: 'scale(3)',
    '@media (max-width: 700px)': {
      transform: 'scale(2)'
    }
  },
  inputLabel: {
    marginLeft: '5%',
  }
}