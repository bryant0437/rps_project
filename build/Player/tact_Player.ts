import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadGetterTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Slice;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw.asCell());
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadGetterTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw.asCell());
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadGetterTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadGetterTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadGetterTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadGetterTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type Info = {
    $$type: 'Info';
    wins: bigint;
    losses: bigint;
}

export function storeInfo(src: Info) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(src.wins, 256);
        b_0.storeUint(src.losses, 256);
    };
}

export function loadInfo(slice: Slice) {
    let sc_0 = slice;
    let _wins = sc_0.loadUintBig(256);
    let _losses = sc_0.loadUintBig(256);
    return { $$type: 'Info' as const, wins: _wins, losses: _losses };
}

function loadTupleInfo(source: TupleReader) {
    let _wins = source.readBigNumber();
    let _losses = source.readBigNumber();
    return { $$type: 'Info' as const, wins: _wins, losses: _losses };
}

function loadGetterTupleInfo(source: TupleReader) {
    let _wins = source.readBigNumber();
    let _losses = source.readBigNumber();
    return { $$type: 'Info' as const, wins: _wins, losses: _losses };
}

function storeTupleInfo(source: Info) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.wins);
    builder.writeNumber(source.losses);
    return builder.build();
}

function dictValueParserInfo(): DictionaryValue<Info> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeInfo(src)).endCell());
        },
        parse: (src) => {
            return loadInfo(src.loadRef().beginParse());
        }
    }
}

export type RegPlayer = {
    $$type: 'RegPlayer';
    playerAddr: Address;
}

export function storeRegPlayer(src: RegPlayer) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1864455249, 32);
        b_0.storeAddress(src.playerAddr);
    };
}

export function loadRegPlayer(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1864455249) { throw Error('Invalid prefix'); }
    let _playerAddr = sc_0.loadAddress();
    return { $$type: 'RegPlayer' as const, playerAddr: _playerAddr };
}

function loadTupleRegPlayer(source: TupleReader) {
    let _playerAddr = source.readAddress();
    return { $$type: 'RegPlayer' as const, playerAddr: _playerAddr };
}

function loadGetterTupleRegPlayer(source: TupleReader) {
    let _playerAddr = source.readAddress();
    return { $$type: 'RegPlayer' as const, playerAddr: _playerAddr };
}

function storeTupleRegPlayer(source: RegPlayer) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.playerAddr);
    return builder.build();
}

function dictValueParserRegPlayer(): DictionaryValue<RegPlayer> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeRegPlayer(src)).endCell());
        },
        parse: (src) => {
            return loadRegPlayer(src.loadRef().beginParse());
        }
    }
}

export type AddWinLoss = {
    $$type: 'AddWinLoss';
    p1Addr: Address;
    p2Addr: Address;
    winnerAddr: Address;
}

export function storeAddWinLoss(src: AddWinLoss) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1752007114, 32);
        b_0.storeAddress(src.p1Addr);
        b_0.storeAddress(src.p2Addr);
        b_0.storeAddress(src.winnerAddr);
    };
}

export function loadAddWinLoss(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1752007114) { throw Error('Invalid prefix'); }
    let _p1Addr = sc_0.loadAddress();
    let _p2Addr = sc_0.loadAddress();
    let _winnerAddr = sc_0.loadAddress();
    return { $$type: 'AddWinLoss' as const, p1Addr: _p1Addr, p2Addr: _p2Addr, winnerAddr: _winnerAddr };
}

function loadTupleAddWinLoss(source: TupleReader) {
    let _p1Addr = source.readAddress();
    let _p2Addr = source.readAddress();
    let _winnerAddr = source.readAddress();
    return { $$type: 'AddWinLoss' as const, p1Addr: _p1Addr, p2Addr: _p2Addr, winnerAddr: _winnerAddr };
}

function loadGetterTupleAddWinLoss(source: TupleReader) {
    let _p1Addr = source.readAddress();
    let _p2Addr = source.readAddress();
    let _winnerAddr = source.readAddress();
    return { $$type: 'AddWinLoss' as const, p1Addr: _p1Addr, p2Addr: _p2Addr, winnerAddr: _winnerAddr };
}

function storeTupleAddWinLoss(source: AddWinLoss) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.p1Addr);
    builder.writeAddress(source.p2Addr);
    builder.writeAddress(source.winnerAddr);
    return builder.build();
}

function dictValueParserAddWinLoss(): DictionaryValue<AddWinLoss> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeAddWinLoss(src)).endCell());
        },
        parse: (src) => {
            return loadAddWinLoss(src.loadRef().beginParse());
        }
    }
}

 type Player_init_args = {
    $$type: 'Player_init_args';
    id: bigint;
}

function initPlayer_init_args(src: Player_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.id, 257);
    };
}

async function Player_init(id: bigint) {
    const __code = Cell.fromBase64('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');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initPlayer_init_args({ $$type: 'Player_init_args', id })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const Player_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack underflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    8754: { message: `Error - player does not existed.` },
    25518: { message: `Error - player has already existed.` },
}

const Player_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"Info","header":null,"fields":[{"name":"wins","type":{"kind":"simple","type":"uint","optional":false,"format":256}},{"name":"losses","type":{"kind":"simple","type":"uint","optional":false,"format":256}}]},
    {"name":"RegPlayer","header":1864455249,"fields":[{"name":"playerAddr","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"AddWinLoss","header":1752007114,"fields":[{"name":"p1Addr","type":{"kind":"simple","type":"address","optional":false}},{"name":"p2Addr","type":{"kind":"simple","type":"address","optional":false}},{"name":"winnerAddr","type":{"kind":"simple","type":"address","optional":false}}]},
]

const Player_getters: ABIGetter[] = [
    {"name":"id","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"getPlayerInfo","arguments":[{"name":"playerAddr","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"simple","type":"Info","optional":true}},
    {"name":"getWins","arguments":[{"name":"playerAddr","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"getLosses","arguments":[{"name":"playerAddr","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
]

export const Player_getterMapping: { [key: string]: string } = {
    'id': 'getId',
    'getPlayerInfo': 'getGetPlayerInfo',
    'getWins': 'getGetWins',
    'getLosses': 'getGetLosses',
}

const Player_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"RegPlayer"}},
    {"receiver":"internal","message":{"kind":"typed","type":"AddWinLoss"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class Player implements Contract {
    
    static async init(id: bigint) {
        return await Player_init(id);
    }
    
    static async fromInit(id: bigint) {
        const init = await Player_init(id);
        const address = contractAddress(0, init);
        return new Player(address, init);
    }
    
    static fromAddress(address: Address) {
        return new Player(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  Player_types,
        getters: Player_getters,
        receivers: Player_receivers,
        errors: Player_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: RegPlayer | AddWinLoss | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'RegPlayer') {
            body = beginCell().store(storeRegPlayer(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'AddWinLoss') {
            body = beginCell().store(storeAddWinLoss(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getId(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('id', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getGetPlayerInfo(provider: ContractProvider, playerAddr: Address) {
        let builder = new TupleBuilder();
        builder.writeAddress(playerAddr);
        let source = (await provider.get('getPlayerInfo', builder.build())).stack;
        const result_p = source.readTupleOpt();
        const result = result_p ? loadTupleInfo(result_p) : null;
        return result;
    }
    
    async getGetWins(provider: ContractProvider, playerAddr: Address) {
        let builder = new TupleBuilder();
        builder.writeAddress(playerAddr);
        let source = (await provider.get('getWins', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getGetLosses(provider: ContractProvider, playerAddr: Address) {
        let builder = new TupleBuilder();
        builder.writeAddress(playerAddr);
        let source = (await provider.get('getLosses', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
}