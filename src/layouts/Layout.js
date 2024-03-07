import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'







const Layout = ({ children }) => {

  return (

    <div>
      {/* Navbar */}
      <NavBar />

      <main>
        {children}
      </main>




 
       <footer>
       <Footer/>
      </footer>  
    </div>
  );
};




export default Layout
