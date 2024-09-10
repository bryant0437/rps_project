import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonClient } from "./useTonClient";
import { Player } from "../wrappers/player";
import { Address, OpenedContract, address } from "@ton/core";
import { useTonConnect } from "./useTonConnect";
import { Queue } from "build/Queue/tact_Queue";
import { Game } from "build/Game/tact_Game";


export function usePlayerContract() {
    const {client} = useTonClient()
    const {wallet} = useTonConnect()

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

    return {
        g_id : gameContract?.getId(),
        g_counter : gameContract?.getCounter(),

        p_id : playerContract?.getId.toString(),
        p_Info : playerContract?.getGetPlayerInfo(address("0QB7HI9BNnsCG0_xxIyq0eRlgyH7PHa8ACzUAT620WjeK9Rp")),
        p_wins : playerContract?.getGetWins(address("0QB7HI9BNnsCG0_xxIyq0eRlgyH7PHa8ACzUAT620WjeK9Rp")),
        p_losses : playerContract?.getGetLosses(address("0QB7HI9BNnsCG0_xxIyq0eRlgyH7PHa8ACzUAT620WjeK9Rp")),
        
        q_getGame : queueContract?.getGetGameContractAddr(),
        q_queue : queueContract?.getQueue(),
    }

}