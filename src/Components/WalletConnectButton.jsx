import React from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"; 
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets"; 


export default function SolanaProvider({ children }) {
    return (  
        <ConnectionProvider endpoint="https://api.devnet.solana.com">
            <WalletProvider wallets={[new PhantomWalletAdapter()]} autoConnect>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}
