import axios from "axios";
import { useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";


export default function GenerateButton({word, onGenerate}){
   
    const {publicKey, signMessage} = useWallet();
    const makeapost=async()=>{

    if (!word) {
      alert("Please enter a word!");
      return;
    }
    
   let sign;
   let message;
    try{
    message=new TextEncoder().encode(`Generate address with the word: ${word}`);
    sign = await signMessage(message);

console.log(`the type is ${(typeof message)}`)}
    catch(error){

         
            if (error.name === 'WalletSignMessageError') {
                alert("Signing rejected by user—try again or check your wallet.");
            }
            else if (error.name === 'WalletSignTransactionError'){
                // This is less likely to happen with signMessage
                alert('Transaction rejected by user.');
            }
           
            else{
                return;
            }

    }
         let  lenofword= word.length;
        try{

            const response=await axios.post(" http://localhost:3000/frontdata",
                {word, publickey:publicKey.toBase58(), sign:Array.from(sign), message:Array.from(message)});
                console.log("the wor and data is",word,publicKey,sign);
                console.log("response is:", response.data.data);
                onGenerate(response.data.data)
        }
        catch(error){
             
           console.log(error)
        }

    }

return(
    <button onClick={makeapost}>Generate address</button>
);

}