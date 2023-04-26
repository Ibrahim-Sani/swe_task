import React from 'react'
import cardStyles from '../styles/navbar.module.css'
import {ImSearch} from 'react-icons/im'
import {FiMenu} from 'react-icons/Fi'

function NavBar() {
    return (
        
        <div>
            {/* Main block starts here */}
            <main className={cardStyles.main}>
            <div className={cardStyles.navbar}>
            <div>
            <FiMenu className={cardStyles.menu}/>
            </div>
            <div>
            <h1 className={cardStyles.header}>torre<span className={cardStyles.other}>.co</span></h1>
            </div>
            <div>
            <input type="text" name="search" id={cardStyles.input}title="input your search" />
            <ImSearch className={cardStyles.imSearch} />
            </div>
            <div>
            <h2 id={cardStyles.info}>
            SIGN IN
            </h2>
            
            
            </div>
            </div>
        
            </main>
            {/* Main block ends here */}
        </div>
    )   
    }

export default NavBar