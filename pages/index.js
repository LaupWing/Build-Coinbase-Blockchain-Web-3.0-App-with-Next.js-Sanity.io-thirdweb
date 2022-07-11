import Head from 'next/head'
import {useWeb3} from '@3rdweb/hooks'

export default function Home() {
   const {address, connectWallet} = useWeb3()

   return (
      <div className='grid h-screen w-screen text-white bg-slate-900'>
         <button onClick={()=>connectWallet('injected')}>Connect Wallet</button>
      </div>
   )
}
