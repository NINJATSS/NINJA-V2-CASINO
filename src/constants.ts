import { PublicKey } from "@solana/web3.js";
import {
  PoolToken,
  TokenMeta,
  makeHeliusTokenFetcher,
} from "gamba-react-ui-v2";

// Get RPC from the .env file or default to the public RPC.
export const RPC_ENDPOINT =
  import.meta.env.VITE_RPC_ENDPOINT ?? "https://api.mainnet-beta.solana.com";

// Solana address that will receive fees when somebody plays on this platform
export const PLATFORM_CREATOR_ADDRESS = new PublicKey(
  "399KgE5gpzFvBB8arZLxA2bes3n4FY7rTMmzifHohPzx"
);

// Gamba explorer URL - Appears in RecentPlays
export const EXPLORER_URL = "https://explorer.gamba.so";

// Platform URL - Appears in ShareModal
export const PLATFORM_SHARABLE_URL = "play.gamba.so";

// Creator fee (in %)
export const PLATFORM_CREATOR_FEE = 0.04; // 1% (1/100 = 0.01)  !!max 5%!!

// Jackpot fee (in %)
export const PLATFORM_JACKPOT_FEE = 0.001; // 0.1% (0.1/100 = 0.001)

// Just a helper function
const lp = (
  tokenMint: PublicKey | string,
  poolAuthority?: PublicKey | string
): PoolToken => ({
  token: new PublicKey(tokenMint),
  authority:
    poolAuthority !== undefined ? new PublicKey(poolAuthority) : undefined,
});

/**
 * List of pools supported by this platform
 * Make sure the token you want to list has a corresponding pool on https://explorer.gamba.so/pools
 * For private pools, add the creator of the Liquidity Pool as a second argument
 */
export const POOLS = [
  // SOL:
  lp("So11111111111111111111111111111111111111112"),
  // USDC:
  lp("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
  // Wormhole:
  lp("85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ"),
  // JUP:
  lp("JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN"),
  // NINJA:
  lp("DFrJxDoLMYt6bNYeNe8Wrjzj2UPUSLZLEMMYBLuTKcTk"),
  // PNDC:
  lp("vSYAPufpX2a4HpnkXguuoTznA5r2yZan8yP2RGnkvKm"),
];

// The default token to be selected
export const DEFAULT_POOL = POOLS[0]; // set number to which pool you want to be default 0 = 1st pool 1 = 2nd pool etc

/**
 * List of token metadata for the supported tokens
 * Alternatively, we can provide a fetcher method to automatically fetch metdata. See TOKEN_METADATA_FETCHER below.
 */
export const TOKEN_METADATA: (Partial<TokenMeta> & { mint: PublicKey })[] = [
  {
    mint: new PublicKey("JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN"),
    symbol: "JUP",
    name: "Jupiter",
    image:
      "https://assets.coingecko.com/coins/images/34188/standard/jup.png?1704266489",
    decimals: 6,
    baseWager: 1 * 1e6,
  },
  {
    mint: new PublicKey("DFrJxDoLMYt6bNYeNe8Wrjzj2UPUSLZLEMMYBLuTKcTk"),
    symbol: "NINJA",
    name: "NINJA TURTLES",
    image:
      "https://media.discordapp.net/attachments/1075400421964787763/1260874372697292843/icon-512-1.png?ex=6690e844&is=668f96c4&hm=3573e5c57955a9bceb4298d16cfc3078c4f49e608f4c41d9338e2c4e367f7aaf&",
    decimals: 8,
    baseWager: 7000000 * 1e8,
  },
  {
    mint: new PublicKey("vSYAPufpX2a4HpnkXguuoTznA5r2yZan8yP2RGnkvKm"),
    symbol: "PNDC",
    name: "POND COIN SOLANA",
    image:
      "https://media.discordapp.net/attachments/1127551018297741432/1207996226738589766/20240216_102515.jpg?ex=65e1ad27&is=65cf3827&hm=60f3ca8584451f262394ae06ba1ebde496ddec3d5ec94c8752d779050a19f3db&",
    decimals: 5,
    baseWager: 100000000 * 1e5,
  },

  {
    mint: new PublicKey("85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ"),
    symbol: "W",
    name: "Wormhole",
    image:
      "https://img.fotofolio.xyz/?url=https%3A%2F%2Fwormhole.com%2Ftoken.png&width=200",
    decimals: 6,
    baseWager: 1 * 1e6,
  },
];

/**
 * A method for automatically fetching Token Metadata.
 * Here we create a fetcher that uses Helius metadata API, if an API key exists as an environment variable.
 */
export const TOKEN_METADATA_FETCHER = (() => {
  if (import.meta.env.VITE_HELIUS_API_KEY) {
    return makeHeliusTokenFetcher(import.meta.env.VITE_HELIUS_API_KEY, {
      dollarBaseWager: 1,
    });
  }
})();
