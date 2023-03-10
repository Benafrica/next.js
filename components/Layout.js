import styles from '../styles/layout.module.css'
import Nav from './Nav'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <>
    <Nav/>
    <div className={styles.container}>
      <main className= {styles.main}>
          <h1>Hi There !</h1>
          <Header/>
          {children}

      </main>
     
    </div> 
   
    </>
  )
 
}


export default Layout
