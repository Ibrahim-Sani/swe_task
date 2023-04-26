import React from 'react'
import cardStyles from '../styles/navbar.module.css'
import {ImSearch} from 'react-icons/im'
import {SlMenu} from 'react-icons/sl'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

type nav = {
    name: string,
    onSearch: any
}

const  NavBar: React.FC<nav> =({name, onSearch}) => {
    const[inputField, inputFieldHandler] = useState('')
    const router = useRouter()
    const searchHandler = (e: any) => {
        inputFieldHandler(e.target.value)   
    }
    const buttonHandler = (e: any) => {
        e.preventDefault()
        router.push(`/?input=${encodeURIComponent(inputField)}`)
        onSearch(inputField)
        inputFieldHandler
    }
    return (

        
        
        <div>
            {/* Main block starts here */}
            <main className={cardStyles.main}>
            <div className={cardStyles.navbar}>
            <div>
            <SlMenu className={cardStyles.menu}/>
            </div>
            <div>
            <h1 className={cardStyles.header}>torre<span className={cardStyles.other}>.co</span></h1>
            </div>
            <div>
            <input type="text" name="search" value={inputField} onChange ={ searchHandler} id={cardStyles.input} title="input your search" />
             <button onClick={buttonHandler} className={cardStyles.btn}><ImSearch className={cardStyles.imSearch} /></button>
             
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