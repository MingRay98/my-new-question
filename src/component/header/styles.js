export const stlyes = {
  container: {
    fontSize: '2rem',
    boxShadow: "0 0 1rem 0.5rem rgba(0, 0, 0, 0.5)",
    display: 'flex',
    width: '100%',
    margin: '2.5% 0 0',
    justifyContent: 'space-between',
    background: 'linear-gradient(47deg,#22c1c3,#fdbb2d)',
    borderRadius: '50px',

    icon: {
      cursor: 'pointer',
      margin: '0 2.5% 0',
      '@media (max-width: 700px)': {
        fontSize: '1.3rem',
      },
    },
  }
}