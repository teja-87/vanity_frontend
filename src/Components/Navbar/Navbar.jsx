import React from 'react'
import './Navbar.css'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import "@solana/wallet-adapter-react-ui/styles.css"


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navleft'>
            <img ></img>
            <h1>VanityGen</h1>
        </div>
        <div className='navright'>
             
            <WalletMultiButton>connect wallet</WalletMultiButton>
                    
        </div>
     

    </div>
  )
}

export default Navbar