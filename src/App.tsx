import { useState } from 'react'
import './App.css'
import './index.css'
import { TonConnectButton } from '@tonconnect/ui-react';
import { useTonConnect } from './hooks/useTonConnect';
import { CHAIN } from "@tonconnect/protocol";
import { Address } from '@ton/core';
import { usePlayerContract } from './hooks/usePlayerContract';

// shadcn/ui
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card';

function App() {
  // gameState
  // 0 = free
  // 1 = finding opponent
  // 2 = in game
  const [gameState, setGameState] = useState(0);
  // page
  // 0 = pvp
  // 1 = leaderboard
  // 2 = dashboard
  // 3 = test function page
  const [page, setPage] = useState(0);
  // const client = new TonClient({endpoint: 'https://testnet.toncenter.com/api/v2/jsonRPC'});
  // const player_contract_address = 'EQClp65y-fEpisgRisPdWM_dK9vGgblgHlpzcX5OUkP1-KJV135041n';
  // const player_contract = client.getContractState(player_contract_address)

  const { network, wallet } = useTonConnect();

  return (
    <>
      {/* pvp page */}
      <div>
        {/* top */}
        <Card>
          <CardHeader>
            <CardTitle>shadcn/ui</CardTitle>
            <CardDescription>shadcn/ui is dope!</CardDescription>
          </CardHeader>
          <CardContent>
          <div>
            <Button>shadcn/ui button</Button>
          </div>
          </CardContent>
          <CardFooter>
            <p>a normal footer here.</p>
          </CardFooter>
        </Card>
        <div className='top'>RPS</div>

        {/* main screen */}
        {page == 0 && gameState == 0 && (
          <div>
            <div className='pvp_address'>
              <TonConnectButton />
            </div>
            {/* <div className='pvp_address'>{wallet}</div> */}
            <div className='pvp_team'>selected team</div>
            <div>gameState 0</div>
            <button onClick={() => setGameState(1)}>set state to 1</button>
            <button onClick={() => setGameState(2)}>set state to 2</button>
          </div>
        )}
        {page == 0 && gameState == 1 && (
          <div>
            <div className='pvp_address'>
              <TonConnectButton />
            </div>
            <div className='pvp_team'>selected team</div>
            <div>gameState 1</div>
            <button onClick={() => setGameState(0)}>set state to 0</button>
            <button onClick={() => setGameState(2)}>set state to 2</button>
          </div>
        )}
        {page == 0 && gameState == 2 && (
          <div>
            <div className='pvp_address'>
              <TonConnectButton />
            </div>
            <div className='pvp_team'>selected team</div>
            <div>gameState 2</div>
            <button onClick={() => setGameState(0)}>set state to 0</button>
            <button onClick={() => setGameState(1)}>set state to 1</button>
          </div>
        )}
        {page == 1 && (
          <div>
            <div className='leaderboard'>leaderboard</div>
            <table>
              <tr className='p1'>
                <td>1</td>
                <td>address</td>
                <td>selected team</td>
                <td>win rate</td>
              </tr>
              <tr className='p2'>
                <td>2</td>
                <td>address</td>
                <td>selected team</td>
                <td>win rate</td>
              </tr>
              <tr className='p3'>
                <td>3</td>
                <td>address</td>
                <td>selected team</td>
                <td>win rate</td>
              </tr>
              <tr className='p4'>
                <td>4</td>
                <td>address</td>
                <td>selected team</td>
                <td>win rate</td>
              </tr>
              <tr className='p5'>
                <td>5</td>
                <td>address</td>
                <td>selected team</td>
                <td>win rate</td>
              </tr>
              <tr className='p6'>
                <td>6</td>
                <td>address</td>
                <td>selected team</td>
                <td>win rate</td>
              </tr>
              <tr className='p7'>
                <td>7</td>
                <td>address</td>
                <td>selected team</td>
                <td>win rate</td>
              </tr>
              <tr className='p8'>
                <td>8</td>
                <td>address</td>
                <td>selected team</td>
                <td>win rate</td>
              </tr>
            </table>
          </div>
        )}
        {page == 2 && (
          <div>
            {/* <div>dashboard</div> */}
            <table>
              <tr className='dashboard_address'>
                <td width="70%">Address</td>
                <td>No. of Games</td>
              </tr>
              <tr className='dashboard_team'>
                <td width="78%">Selected Team</td>
                <td>Win Rate</td>
              </tr>
            </table>
            <div className='dashboard_history'>History</div>
            <table>
              <tr className='h1'>
                <td>Date</td>
                <td>Opponent Address</td>
                <td>My Selection</td>
                <td>Opponent Selection</td>
                <td>Win/Lose</td>
              </tr>
              <tr className='h2'>
                <td>Date</td>
                <td>Opponent Address</td>
                <td>My Selection</td>
                <td>Opponent Selection</td>
                <td>Win/Lose</td>
              </tr>
              <tr className='h3'>
                <td>Date</td>
                <td>Opponent Address</td>
                <td>My Selection</td>
                <td>Opponent Selection</td>
                <td>Win/Lose</td>
              </tr>
              <tr className='h4'>
                <td>Date</td>
                <td>Opponent Address</td>
                <td>My Selection</td>
                <td>Opponent Selection</td>
                <td>Win/Lose</td>
              </tr>
            </table>
          </div>
        )}
        {page == 3 && (
          <div>
            <TonConnectButton />
            <button>abc</button>
            <button>
              {network
                ? network === CHAIN.MAINNET
                  ? "mainnet"
                  : "testnet"
                : "N/A"}
            </button>
            <div></div>
            <button>
              {wallet}
              {/* {wallet ? Address.parse(wallet as string).toString() :  "Loading"} */}
              {/* {Address.parse(wallet as string).toString()} */}
            </button>
            <div></div>
            <button>
              {/* {id ? id : "Loading..."} */}
            </button>

          </div>
        )}

        {/* bottom */}
        <div className='bottom'>
          <button onClick={() => setPage(1)}>leaderboard</button>
          <button onClick={() => setPage(0)}>pvp</button>
          <button onClick={() => setPage(2)}>dashboard</button>
          <button onClick={() => setPage(3)}>test</button>
        </div>
      </div>
    </>
  )
}

export default App
