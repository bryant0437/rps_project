import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonClient } from "./useTonClient";
import { Player } from "../wrappers/player";
import { Address, OpenedContract } from "@ton/core";
import { useTonConnect } from "./useTonConnect";


export function usePlayerContract() {
    const {client} = useTonClient()
    const {wallet} = useTonConnect()

    const playerContract = useAsyncInitialize(async()=>{
        if(!client) return;

        const contract = Player.fromAddress(Address.parse("EQBTeVb456Ue_32uEwEcDUH75E1XcDPnzDm-8yRqR_vsJ3G9"))
        
        return client.open(contract) as OpenedContract<Player>  
    }, [client])

    return {
        playerInfo : playerContract?.getGetPlayerInfo(Address.parse(wallet as string))
    }

}