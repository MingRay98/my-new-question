export const styles = {
  container: {
    display: 'flex',
    position: 'fixed',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '1.5rem',
    top: 'calc( 5% + 2rem )',
    width: '70vw',
    maxWidth: '700px',
    height: '90%',
    overflowY: 'auto',
    color: 'white',
    borderRadius: '25px',
    backgroundColor: 'rgba(0,0,0,0.8)',
    '@media (max-Width: 700px)': {
      width: '95vw',
      top: 'calc( 5% + 1.3rem - 1px )',
      fontSize: '1.2rem',
    }
  }
}