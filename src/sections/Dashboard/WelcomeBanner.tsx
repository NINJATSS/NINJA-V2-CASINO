import React from 'react'
import styled from 'styled-components'

const Buttons = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (min-width: 800px) {
    height: 100%;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-top: 0!important;
  }

  & > button {
    border: none;
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    background: #ffffffdf;
    transition: background .2s ease;
    &:hover {
      background: white;
    }
    color: black;
    cursor: pointer;
  }
`

const Welcome = styled.div`
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  background-image: url('banner.png'); 
  background-size: cover;
  background-position: center; 

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 0;
    & > div {
      padding: 40px;
    }
  }
`

export function WelcomeBanner() {
  return (
    <Welcome>
      <div>
        <h1>NINJA TURTLES CASINO 🥷🐢 </h1>
        <p>
          An on-chain, provably-fair casino 🎰. So come play, have some fun & if you hold 4+ NINJA NFTs there's the added bonus of revenue rewards. So don't delay, come & play, it's the Ninja way 🥷🐢
        </p>
      </div>
      <Buttons>
        <button onClick={() => window.open('https://birdeye.so/token/DFrJxDoLMYt6bNYeNe8Wrjzj2UPUSLZLEMMYBLuTKcTk?chain=solana', '_blank')}>
          🚀 BUY $NINJA 
        </button>
        <button onClick={() => window.open('https://twitter.com/NINJA_TSS', '_blank')}>
          👨‍💻 TWITTER
        </button>
        <button onClick={() => window.open('https://discord.gg/HSTtFFwR', '_blank')}>
          💬 DISCORD
        </button>
      </Buttons>
    </Welcome>
  )
}
