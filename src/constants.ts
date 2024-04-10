import { GambaStandardTokens, TokenMeta } from 'gamba-react-ui-v2'
import { PublicKey } from '@solana/web3.js'
// Can be configured in .env
export const RPC_ENDPOINT = import.meta.env.VITE_RPC_ENDPOINT ?? "https://api.mainnet-beta.solana.com"

// Change this value to your Solana address
export const PLATFORM_CREATOR_ADDRESS = '399KgE5gpzFvBB8arZLxA2bes3n4FY7rTMmzifHohPzx'

// Appears in ShareModal
export const PLATFORM_SHARABLE_URL = 'v2-play.gamba.so'

// List of tokens supported by this platform
export const TOKENS: TokenMeta[] = [
  GambaStandardTokens.sol,
  GambaStandardTokens.usdc,
  {
    mint: new PublicKey("JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN"),
    symbol: 'JUP',
    name: 'Jupiter',
    image: "https://assets.coingecko.com/coins/images/34188/standard/jup.png?1704266489",
    decimals: 6,
    baseWager: 1 * 1e6,
  },
  {
      mint: new PublicKey("DFrJxDoLMYt6bNYeNe8Wrjzj2UPUSLZLEMMYBLuTKcTk"),
      symbol: 'NINJA',
      name: 'NINJA TURTLES',
      image: "https://cdn.discordapp.com/attachments/1075400421964787763/1205590184696217640/icon-512.png?ex=65d8ec5a&is=65c6775a&hm=4054b8ca5e137dae4694711c0fac8bdd0293dfaef0178b461633e2665c279c04&",
      decimals: 8,
      baseWager: 1414704 * 1e8,
    },
{
      mint: new PublicKey("vSYAPufpX2a4HpnkXguuoTznA5r2yZan8yP2RGnkvKm"),
      symbol: 'PNDC',
      name: 'POND COIN SOLANA',
      image: "https://media.discordapp.net/attachments/1127551018297741432/1207996226738589766/20240216_102515.jpg?ex=65e1ad27&is=65cf3827&hm=60f3ca8584451f262394ae06ba1ebde496ddec3d5ec94c8752d779050a19f3db&",
      decimals: 5,
      baseWager: 100000000 * 1e5,
    },
  
{
    mint: new PublicKey("85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ"),
    symbol: 'W',
    name: 'Wormhole',
    image: "https://img.fotofolio.xyz/?url=https%3A%2F%2Fwormhole.com%2Ftoken.png&width=200",
    decimals: 6,
    baseWager: 1 * 1e6,
      },
