import '../styles/globals.css'
import { useState, useEffect } from 'react'
import Layout from '../components/layout'
import Login from './login'
import Register from './register'
import Logout from './logout'
import Sidebar from '../components/sidebar'
import styles from '../styles/Home.module.css'

function GetProps() {
  const [userActive, setUserActive] = useState(false);
  const [categoryTitle, setCategoryTitle] = useState("");
  const [currentCategory, setCurrentCategory] = useState(0);
  useEffect(() => {
    if(sessionStorage.getItem("userid")) {
      setUserActive(true);
    }
  }, [])

  return {userActive: userActive, setUserActive: setUserActive, categoryTitle: categoryTitle, setCategoryTitle: setCategoryTitle, currentCategory: currentCategory, setCurrentCategory: setCurrentCategory}
}

function MyApp({ Component, pageProps }) {
  /* If the login page, register page, or logout page is displayed, I don't want to use the normal layout. 
  So that's where this conditional comes in handy. */
  const propData = GetProps();
  if(Component == Login || Component == Register || Component == Logout) { 
    return (
      <Component {...propData} />
    )
  }
  else {
    return (
      <Layout>
        <Sidebar {...propData} />
        <div className={styles.mainContainer}>
          <Component {...propData} />
        </div>
      </Layout>
      )
  }
}

export default MyApp
