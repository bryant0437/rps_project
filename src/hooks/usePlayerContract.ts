import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonClient } from "./useTonClient";
import { Player, RegPlayer } from "../wrappers/player";
import { Address, OpenedContract, address, toNano } from "@ton/core";
import { useTonConnect } from "./useTonConnect";
import { Queue, QueuePlayer } from "../wrappers/queue";
import { Game, SelectMove } from "../wrappers/game";
import { useEffect, useState } from "react";
import { useTonAddress } from "@tonconnect/ui-react";

const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time))

export async function usePlayerContract() {
    const {client} = useTonClient()
    const {wallet, sender} = useTonConnect()
    const [wins, setWins] = useState(0n)
    const [losses, setLosses] = useState(0n)
    // const connected_Address = useTonAddress();
    const connected_Address = "0QB7HI9BNnsCG0_xxIyq0eRlgyH7PHa8ACzUAT620WjeK9Rp";

    const gameContract = useAsyncInitialize(async()=>{
        if(!client) return;
        const gcontract = Game.fromAddress(Address.parse("EQDk0RMTbY9EAFITEJ62dmhpHHITrDYZHJmkVtKxX4BvWRv4"))
        return client.open(gcontract) as OpenedContract<Game>
    }, [client])

    const playerContract = useAsyncInitialize(async()=>{
        if(!client) return;
        const pcontract = Player.fromAddress(Address.parse("EQBTeVb456Ue_32uEwEcDUH75E1XcDPnzDm-8yRqR_vsJ3G9"))
        return client.open(pcontract) as OpenedContract<Player>  
    }, [client])

    const queueContract = useAsyncInitialize(async()=>{
        if(!client) return;
        const qcontract = Queue.fromAddress(Address.parse("EQDFxLbKwYpxMoRjtATG4xeVz66nQVApghliS0FyWRNS4aQ7"))
        return client.open(qcontract) as OpenedContract<Queue>
    }, [client])

    useEffect(()=>{
        async function getplayerwins() {
            if(!playerContract) return
            // setWins(0n);
            console.log("address ", connected_Address);
            const wins = await playerContract.getGetWins(address(connected_Address));
            console.log("wins ", wins);
            setWins(wins);
            const losses = await playerContract.getGetLosses(address(connected_Address));
            console.log("losses ", losses);
            setLosses(losses);

            await sleep(20000);
            getplayerwins();
        }

        getplayerwins();
    }, [playerContract])

    return {

        p_id : playerContract?.getId.toString(),
        p_wins : wins,
        p_losses : losses,
        reg_player : () => {
            const message: RegPlayer = {
                $$type: "RegPlayer",
                playerAddr: address("0QDD0RLHXiswFaxkSfbpUhyjs81TOszINK9W_LUhG6DE2yRj")
            }

            playerContract?.send(sender, {
                value: toNano("0.01")
            }, message)
        },
        
        q_queue : () => {
            const message: QueuePlayer = {
                $$type: "QueuePlayer",
                playerAddr: address("")
            }
            queueContract?.send(sender, {
                value: toNano("0.01")
            }, message)
        },

        g_move : () => {
            const message: SelectMove = {
                $$type: "SelectMove",
                gameId: BigInt(0),
                playerNo: BigInt(1),
                move: BigInt(1),
            }
            gameContract?.send(sender, {
                value: toNano("0.01")
            }, message)
        }
    }

}