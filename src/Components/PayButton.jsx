import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Connection, Transaction, PublicKey, SystemProgram } from "@solana/web3.js";

const connection = new Connection("https://api.devnet.solana.com");

export default function PayButton() {
  const { publicKey, sendTransaction } = useWallet();

  const handlePayment = async () => {
    if (!publicKey) {
      alert('Please connect your wallet to make payment');
      return;
    }
    try {
      const lamports = 0.1 * 1e9; // 1 SOL in lamports
      const receiver = new PublicKey("5Ha1JwmeaAVanityb99cNUesY3wk84CY6MKV5Qu7eXFG");
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: receiver,
          lamports,
        })
      );

      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, "finalized");
      
      
      alert(`Payment successful! Signature: ${signature}`);
     try {
        const body1 = JSON.stringify({
          publicKey: publicKey.toBase58(),
          signature: signature,
          amount: lamports,
        });

        const response = await fetch("http://localhost:6570/get_pay", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: body1,
        });

        if (!response.ok) {
          throw new Error("Server returned error status");
        }

        // const data = await response.json();
        // console.log("Backend response:", data);
      } catch (fetchErr) {
        console.error("Fetch to backend failed:", fetchErr);
        alert("Transaction succeeded, but backend call failed.");
      }

    }  catch (err) {
      console.error("Payment failed:", err);
      alert("Payment failed. Check console for details.");
    }
  };

  return (
    <button onClick={handlePayment} className="paybutton">
      Make Payment
    </button>
  );
}