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

export type GameInfo = {
    $$type: 'GameInfo';
    p1Addr: Address;
    p2Addr: Address;
    p1Move: bigint;
    p2Move: bigint;
    winnerAddr: Address | null;
    status: bigint;
}

export function storeGameInfo(src: GameInfo) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.p1Addr);
        b_0.storeAddress(src.p2Addr);
        b_0.storeUint(src.p1Move, 256);
        let b_1 = new Builder();
        b_1.storeUint(src.p2Move, 256);
        b_1.storeAddress(src.winnerAddr);
        b_1.storeUint(src.status, 256);
        b_0.storeRef(b_1.endCell());
    };
}

export function loadGameInfo(slice: Slice) {
    let sc_0 = slice;
    let _p1Addr = sc_0.loadAddress();
    let _p2Addr = sc_0.loadAddress();
    let _p1Move = sc_0.loadUintBig(256);
    let sc_1 = sc_0.loadRef().beginParse();
    let _p2Move = sc_1.loadUintBig(256);
    let _winnerAddr = sc_1.loadMaybeAddress();
    let _status = sc_1.loadUintBig(256);
    return { $$type: 'GameInfo' as const, p1Addr: _p1Addr, p2Addr: _p2Addr, p1Move: _p1Move, p2Move: _p2Move, winnerAddr: _winnerAddr, status: _status };
}

function loadTupleGameInfo(source: TupleReader) {
    let _p1Addr = source.readAddress();
    let _p2Addr = source.readAddress();
    let _p1Move = source.readBigNumber();
    let _p2Move = source.readBigNumber();
    let _winnerAddr = source.readAddressOpt();
    let _status = source.readBigNumber();
    return { $$type: 'GameInfo' as const, p1Addr: _p1Addr, p2Addr: _p2Addr, p1Move: _p1Move, p2Move: _p2Move, winnerAddr: _winnerAddr, status: _status };
}

function loadGetterTupleGameInfo(source: TupleReader) {
    let _p1Addr = source.readAddress();
    let _p2Addr = source.readAddress();
    let _p1Move = source.readBigNumber();
    let _p2Move = source.readBigNumber();
    let _winnerAddr = source.readAddressOpt();
    let _status = source.readBigNumber();
    return { $$type: 'GameInfo' as const, p1Addr: _p1Addr, p2Addr: _p2Addr, p1Move: _p1Move, p2Move: _p2Move, winnerAddr: _winnerAddr, status: _status };
}

function storeTupleGameInfo(source: GameInfo) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.p1Addr);
    builder.writeAddress(source.p2Addr);
    builder.writeNumber(source.p1Move);
    builder.writeNumber(source.p2Move);
    builder.writeAddress(source.winnerAddr);
    builder.writeNumber(source.status);
    return builder.build();
}

function dictValueParserGameInfo(): DictionaryValue<GameInfo> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeGameInfo(src)).endCell());
        },
        parse: (src) => {
            return loadGameInfo(src.loadRef().beginParse());
        }
    }
}

export type AssignPlayerContractAddr = {
    $$type: 'AssignPlayerContractAddr';
    playerContractAddr: Address;
}

export function storeAssignPlayerContractAddr(src: AssignPlayerContractAddr) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2136434721, 32);
        b_0.storeAddress(src.playerContractAddr);
    };
}

export function loadAssignPlayerContractAddr(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2136434721) { throw Error('Invalid prefix'); }
    let _playerContractAddr = sc_0.loadAddress();
    return { $$type: 'AssignPlayerContractAddr' as const, playerContractAddr: _playerContractAddr };
}

function loadTupleAssignPlayerContractAddr(source: TupleReader) {
    let _playerContractAddr = source.readAddress();
    return { $$type: 'AssignPlayerContractAddr' as const, playerContractAddr: _playerContractAddr };
}

function loadGetterTupleAssignPlayerContractAddr(source: TupleReader) {
    let _playerContractAddr = source.readAddress();
    return { $$type: 'AssignPlayerContractAddr' as const, playerContractAddr: _playerContractAddr };
}

function storeTupleAssignPlayerContractAddr(source: AssignPlayerContractAddr) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.playerContractAddr);
    return builder.build();
}

function dictValueParserAssignPlayerContractAddr(): DictionaryValue<AssignPlayerContractAddr> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeAssignPlayerContractAddr(src)).endCell());
        },
        parse: (src) => {
            return loadAssignPlayerContractAddr(src.loadRef().beginParse());
        }
    }
}

export type NewGame = {
    $$type: 'NewGame';
    p1Addr: Address;
    p2Addr: Address;
}

export function storeNewGame(src: NewGame) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3765058171, 32);
        b_0.storeAddress(src.p1Addr);
        b_0.storeAddress(src.p2Addr);
    };
}

export function loadNewGame(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3765058171) { throw Error('Invalid prefix'); }
    let _p1Addr = sc_0.loadAddress();
    let _p2Addr = sc_0.loadAddress();
    return { $$type: 'NewGame' as const, p1Addr: _p1Addr, p2Addr: _p2Addr };
}

function loadTupleNewGame(source: TupleReader) {
    let _p1Addr = source.readAddress();
    let _p2Addr = source.readAddress();
    return { $$type: 'NewGame' as const, p1Addr: _p1Addr, p2Addr: _p2Addr };
}

function loadGetterTupleNewGame(source: TupleReader) {
    let _p1Addr = source.readAddress();
    let _p2Addr = source.readAddress();
    return { $$type: 'NewGame' as const, p1Addr: _p1Addr, p2Addr: _p2Addr };
}

function storeTupleNewGame(source: NewGame) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.p1Addr);
    builder.writeAddress(source.p2Addr);
    return builder.build();
}

function dictValueParserNewGame(): DictionaryValue<NewGame> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeNewGame(src)).endCell());
        },
        parse: (src) => {
            return loadNewGame(src.loadRef().beginParse());
        }
    }
}

export type SelectMove = {
    $$type: 'SelectMove';
    gameId: bigint;
    playerNo: bigint;
    move: bigint;
}

export function storeSelectMove(src: SelectMove) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3393909054, 32);
        b_0.storeUint(src.gameId, 256);
        b_0.storeUint(src.playerNo, 256);
        b_0.storeUint(src.move, 256);
    };
}

export function loadSelectMove(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3393909054) { throw Error('Invalid prefix'); }
    let _gameId = sc_0.loadUintBig(256);
    let _playerNo = sc_0.loadUintBig(256);
    let _move = sc_0.loadUintBig(256);
    return { $$type: 'SelectMove' as const, gameId: _gameId, playerNo: _playerNo, move: _move };
}

function loadTupleSelectMove(source: TupleReader) {
    let _gameId = source.readBigNumber();
    let _playerNo = source.readBigNumber();
    let _move = source.readBigNumber();
    return { $$type: 'SelectMove' as const, gameId: _gameId, playerNo: _playerNo, move: _move };
}

function loadGetterTupleSelectMove(source: TupleReader) {
    let _gameId = source.readBigNumber();
    let _playerNo = source.readBigNumber();
    let _move = source.readBigNumber();
    return { $$type: 'SelectMove' as const, gameId: _gameId, playerNo: _playerNo, move: _move };
}

function storeTupleSelectMove(source: SelectMove) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.gameId);
    builder.writeNumber(source.playerNo);
    builder.writeNumber(source.move);
    return builder.build();
}

function dictValueParserSelectMove(): DictionaryValue<SelectMove> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSelectMove(src)).endCell());
        },
        parse: (src) => {
            return loadSelectMove(src.loadRef().beginParse());
        }
    }
}

export type UpdatePlayerInfo = {
    $$type: 'UpdatePlayerInfo';
    p1Addr: Address;
    p2Addr: Address;
    winnerAddr: Address;
}

export function storeUpdatePlayerInfo(src: UpdatePlayerInfo) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2758291972, 32);
        b_0.storeAddress(src.p1Addr);
        b_0.storeAddress(src.p2Addr);
        b_0.storeAddress(src.winnerAddr);
    };
}

export function loadUpdatePlayerInfo(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2758291972) { throw Error('Invalid prefix'); }
    let _p1Addr = sc_0.loadAddress();
    let _p2Addr = sc_0.loadAddress();
    let _winnerAddr = sc_0.loadAddress();
    return { $$type: 'UpdatePlayerInfo' as const, p1Addr: _p1Addr, p2Addr: _p2Addr, winnerAddr: _winnerAddr };
}

function loadTupleUpdatePlayerInfo(source: TupleReader) {
    let _p1Addr = source.readAddress();
    let _p2Addr = source.readAddress();
    let _winnerAddr = source.readAddress();
    return { $$type: 'UpdatePlayerInfo' as const, p1Addr: _p1Addr, p2Addr: _p2Addr, winnerAddr: _winnerAddr };
}

function loadGetterTupleUpdatePlayerInfo(source: TupleReader) {
    let _p1Addr = source.readAddress();
    let _p2Addr = source.readAddress();
    let _winnerAddr = source.readAddress();
    return { $$type: 'UpdatePlayerInfo' as const, p1Addr: _p1Addr, p2Addr: _p2Addr, winnerAddr: _winnerAddr };
}

function storeTupleUpdatePlayerInfo(source: UpdatePlayerInfo) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.p1Addr);
    builder.writeAddress(source.p2Addr);
    builder.writeAddress(source.winnerAddr);
    return builder.build();
}

function dictValueParserUpdatePlayerInfo(): DictionaryValue<UpdatePlayerInfo> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeUpdatePlayerInfo(src)).endCell());
        },
        parse: (src) => {
            return loadUpdatePlayerInfo(src.loadRef().beginParse());
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

 type Game_init_args = {
    $$type: 'Game_init_args';
    id: bigint;
}

function initGame_init_args(src: Game_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.id, 257);
    };
}

async function Game_init(id: bigint) {
    const __code = Cell.fromBase64('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');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initGame_init_args({ $$type: 'Game_init_args', id })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const Game_errors: { [key: number]: { message: string } } = {
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
    7608: { message: `Error - game info null.` },
    13863: { message: `Error - game not exist.` },
    18791: { message: `Error - null game info.` },
    27208: { message: `Error - game has already ended.` },
    27305: { message: `Error - already selected a move.` },
    49762: { message: `Error - game if not exist.` },
    59842: { message: `Error - move number outbound.` },
}

const Game_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"GameInfo","header":null,"fields":[{"name":"p1Addr","type":{"kind":"simple","type":"address","optional":false}},{"name":"p2Addr","type":{"kind":"simple","type":"address","optional":false}},{"name":"p1Move","type":{"kind":"simple","type":"uint","optional":false,"format":256}},{"name":"p2Move","type":{"kind":"simple","type":"uint","optional":false,"format":256}},{"name":"winnerAddr","type":{"kind":"simple","type":"address","optional":true}},{"name":"status","type":{"kind":"simple","type":"uint","optional":false,"format":256}}]},
    {"name":"AssignPlayerContractAddr","header":2136434721,"fields":[{"name":"playerContractAddr","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"NewGame","header":3765058171,"fields":[{"name":"p1Addr","type":{"kind":"simple","type":"address","optional":false}},{"name":"p2Addr","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"SelectMove","header":3393909054,"fields":[{"name":"gameId","type":{"kind":"simple","type":"uint","optional":false,"format":256}},{"name":"playerNo","type":{"kind":"simple","type":"uint","optional":false,"format":256}},{"name":"move","type":{"kind":"simple","type":"uint","optional":false,"format":256}}]},
    {"name":"UpdatePlayerInfo","header":2758291972,"fields":[{"name":"p1Addr","type":{"kind":"simple","type":"address","optional":false}},{"name":"p2Addr","type":{"kind":"simple","type":"address","optional":false}},{"name":"winnerAddr","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"AddWinLoss","header":1752007114,"fields":[{"name":"p1Addr","type":{"kind":"simple","type":"address","optional":false}},{"name":"p2Addr","type":{"kind":"simple","type":"address","optional":false}},{"name":"winnerAddr","type":{"kind":"simple","type":"address","optional":false}}]},
]

const Game_getters: ABIGetter[] = [
    {"name":"id","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"counter","arguments":[],"returnType":{"kind":"simple","type":"int","optional":false,"format":257}},
    {"name":"getplayerContractAddr","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
    {"name":"getGameInfo","arguments":[{"name":"gameId","type":{"kind":"simple","type":"int","optional":false,"format":257}}],"returnType":{"kind":"simple","type":"GameInfo","optional":true}},
]

export const Game_getterMapping: { [key: string]: string } = {
    'id': 'getId',
    'counter': 'getCounter',
    'getplayerContractAddr': 'getGetplayerContractAddr',
    'getGameInfo': 'getGetGameInfo',
}

const Game_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"AssignPlayerContractAddr"}},
    {"receiver":"internal","message":{"kind":"typed","type":"NewGame"}},
    {"receiver":"internal","message":{"kind":"typed","type":"SelectMove"}},
    {"receiver":"internal","message":{"kind":"typed","type":"UpdatePlayerInfo"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class Game implements Contract {
    
    static async init(id: bigint) {
        return await Game_init(id);
    }
    
    static async fromInit(id: bigint) {
        const init = await Game_init(id);
        const address = contractAddress(0, init);
        return new Game(address, init);
    }
    
    static fromAddress(address: Address) {
        return new Game(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  Game_types,
        getters: Game_getters,
        receivers: Game_receivers,
        errors: Game_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: AssignPlayerContractAddr | NewGame | SelectMove | UpdatePlayerInfo | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'AssignPlayerContractAddr') {
            body = beginCell().store(storeAssignPlayerContractAddr(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'NewGame') {
            body = beginCell().store(storeNewGame(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'SelectMove') {
            body = beginCell().store(storeSelectMove(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'UpdatePlayerInfo') {
            body = beginCell().store(storeUpdatePlayerInfo(message)).endCell();
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
    
    async getCounter(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('counter', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getGetplayerContractAddr(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('getplayerContractAddr', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
    async getGetGameInfo(provider: ContractProvider, gameId: bigint) {
        let builder = new TupleBuilder();
        builder.writeNumber(gameId);
        let source = (await provider.get('getGameInfo', builder.build())).stack;
        const result_p = source.readTupleOpt();
        const result = result_p ? loadTupleGameInfo(result_p) : null;
        return result;
    }
    
}