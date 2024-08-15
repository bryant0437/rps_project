import { useState } from 'react'
import './App.css'
import './index.css'

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
  const [page,setPage] = useState(0);

  return (
    <>
      {/* pvp page */}
      <div>
        {/* top */}
        <div className='top'>this is game name</div>
        
        {/* main screen */}
        {page==0 && gameState==0 && (
          <div>
            <div className='pvp_address'>address</div>
            <div className='pvp_team'>selected team</div>
            <div>gameState 0</div>
            <button onClick={() => setGameState(1)}>set state to 1</button>
            <button onClick={() => setGameState(2)}>set state to 2</button>
          </div>
        )}
        {page==0 && gameState==1 && (
          <div>
            <div className='pvp_address'>address</div>
            <div className='pvp_team'>selected team</div>
            <div>gameState 1</div>
            <button onClick={() => setGameState(0)}>set state to 0</button>
            <button onClick={() => setGameState(2)}>set state to 2</button>
        </div>
        )}
        {page==0 && gameState==2 && (
          <div>
            <div className='pvp_address'>address</div>
            <div className='pvp_team'>selected team</div>
            <div>gameState 2</div>
            <button onClick={() => setGameState(0)}>set state to 0</button>
            <button onClick={() => setGameState(1)}>set state to 1</button>
        </div>
        )}
        {page==1 && (
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
        {page==2 && (
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
        
        {/* bottom */}
        <div className='bottom'>
          <button onClick={() => setPage(1)}>leaderboard</button>
          <button onClick={() => setPage(0)}>pvp</button>
          <button onClick={() => setPage(2)}>dashboard</button>
        </div>
      </div>
    </>
  )
}

export default App
