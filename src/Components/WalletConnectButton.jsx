import React from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider, WalletDisconnectButton,
    WalletMultiButton } from "@solana/wallet-adapter-react-ui"; 
import { PhantomWalletAdapter, SolflareWalletAdapter } from "@solana/wallet-adapter-wallets"; 


export default function SolanaProvider({ children }) {
    return (  
        <ConnectionProvider endpoint="https://api.devnet.solana.com">
            <WalletProvider wallets={[]} autoConnect={false}>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}
