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

export type AssignGameContractAddr = {
    $$type: 'AssignGameContractAddr';
    gameContractAddr: Address;
}

export function storeAssignGameContractAddr(src: AssignGameContractAddr) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(195823741, 32);
        b_0.storeAddress(src.gameContractAddr);
    };
}

export function loadAssignGameContractAddr(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 195823741) { throw Error('Invalid prefix'); }
    let _gameContractAddr = sc_0.loadAddress();
    return { $$type: 'AssignGameContractAddr' as const, gameContractAddr: _gameContractAddr };
}

function loadTupleAssignGameContractAddr(source: TupleReader) {
    let _gameContractAddr = source.readAddress();
    return { $$type: 'AssignGameContractAddr' as const, gameContractAddr: _gameContractAddr };
}

function loadGetterTupleAssignGameContractAddr(source: TupleReader) {
    let _gameContractAddr = source.readAddress();
    return { $$type: 'AssignGameContractAddr' as const, gameContractAddr: _gameContractAddr };
}

function storeTupleAssignGameContractAddr(source: AssignGameContractAddr) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.gameContractAddr);
    return builder.build();
}

function dictValueParserAssignGameContractAddr(): DictionaryValue<AssignGameContractAddr> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeAssignGameContractAddr(src)).endCell());
        },
        parse: (src) => {
            return loadAssignGameContractAddr(src.loadRef().beginParse());
        }
    }
}

export type QueuePlayer = {
    $$type: 'QueuePlayer';
    playerAddr: Address;
}

export function storeQueuePlayer(src: QueuePlayer) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1859969918, 32);
        b_0.storeAddress(src.playerAddr);
    };
}

export function loadQueuePlayer(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1859969918) { throw Error('Invalid prefix'); }
    let _playerAddr = sc_0.loadAddress();
    return { $$type: 'QueuePlayer' as const, playerAddr: _playerAddr };
}

function loadTupleQueuePlayer(source: TupleReader) {
    let _playerAddr = source.readAddress();
    return { $$type: 'QueuePlayer' as const, playerAddr: _playerAddr };
}

function loadGetterTupleQueuePlayer(source: TupleReader) {
    let _playerAddr = source.readAddress();
    return { $$type: 'QueuePlayer' as const, playerAddr: _playerAddr };
}

function storeTupleQueuePlayer(source: QueuePlayer) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.playerAddr);
    return builder.build();
}

function dictValueParserQueuePlayer(): DictionaryValue<QueuePlayer> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeQueuePlayer(src)).endCell());
        },
        parse: (src) => {
            return loadQueuePlayer(src.loadRef().beginParse());
        }
    }
}

export type NewGame = {
    $$type: 'NewGame';
    p1Addr: Address | null;
    p2Addr: Address | null;
}

export function storeNewGame(src: NewGame) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(141938340, 32);
        b_0.storeAddress(src.p1Addr);
        b_0.storeAddress(src.p2Addr);
    };
}

export function loadNewGame(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 141938340) { throw Error('Invalid prefix'); }
    let _p1Addr = sc_0.loadMaybeAddress();
    let _p2Addr = sc_0.loadMaybeAddress();
    return { $$type: 'NewGame' as const, p1Addr: _p1Addr, p2Addr: _p2Addr };
}

function loadTupleNewGame(source: TupleReader) {
    let _p1Addr = source.readAddressOpt();
    let _p2Addr = source.readAddressOpt();
    return { $$type: 'NewGame' as const, p1Addr: _p1Addr, p2Addr: _p2Addr };
}

function loadGetterTupleNewGame(source: TupleReader) {
    let _p1Addr = source.readAddressOpt();
    let _p2Addr = source.readAddressOpt();
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

 type Queue_init_args = {
    $$type: 'Queue_init_args';
}

function initQueue_init_args(src: Queue_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
    };
}

async function Queue_init() {
    const __code = Cell.fromBase64('te6ccgECFwEABA8AART/APSkE/S88sgLAQIBYgIDAvDQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVE9s88uCCyPhDAcx/AcoAVTBQNIEBAc8A9ACBAQHPAAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbJ7VQUBAIBWA8QAsQBkjB/4HAh10nCH5UwINcLH94gghALrAh9uo4wMNMfAYIQC6wIfbry4IH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIMTF/4CCCEG7c43664wKCEJRqmLa64wIwcAUGA6ow0x8BghBu3ON+uvLggfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgxE4EBAVJSIG6VMFn0WjCUQTP0FOIDpEMT2zzjANs8lmwibXBBM95/BwgJAU7THwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J+EIBcG3bPH8MABZwJKk4AMAAkjB/3gL8i4TWF0Y2hlZC6I0EGR1bXAoIk1hdGNoZWQuIimCNCFGaWxlIGNvbnRyYWN0cy9xdWV1ZS50YWN0OjEwOToxMzqD+FDD+FDD+FDCBAQEkpv4kWVn0DG+hkjBt34EBASWlJVlZ9AxvoZIwbd/bPIEBASSm/kBE9FowgQEBJKVZCgsAEHBTQr6SMH/eAeBwAoBBAshZghAIdc6kUAPLHwEgbpUwcAHLAY4eINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8W4gEgbpUwcAHLAY4eINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8W4skjVSB/VTBtbds8DQAI9FowAgE6bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwNAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AA4AmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwCEbkvLbPNs8bEGBQRAgEgEhMAAiAAEbRX3aiaGkAAMAIRt0z7Z5tnjYgwFBUBlu1E0NQB+GPSAAGOMIEBAdcA9ASBAQHXAPpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgUQzBsFOAw+CjXCwqDCbry4InbPBYAAiIAVHBtjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgQPnAQ==');
    const __system = Cell.fromBase64('te6cckECGQEABBkAAQHAAQEFofTPAgEU/wD0pBP0vPLICwMCAWIEEALw0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRPbPPLggsj4QwHMfwHKAFUwUDSBAQHPAPQAgQEBzwABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8Wye1UFgUCxAGSMH/gcCHXScIflTAg1wsf3iCCEAusCH26jjAw0x8BghALrAh9uvLggfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgxMX/gIIIQbtzjfrrjAoIQlGqYtrrjAjBwBgwDqjDTHwGCEG7c43668uCB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiDETgQEBUlIgbpUwWfRaMJRBM/QU4gOkQxPbPOMA2zyWbCJtcEEz3n8HCAsAFnAkqTgAwACSMH/eAvyLhNYXRjaGVkLojQQZHVtcCgiTWF0Y2hlZC4iKYI0IUZpbGUgY29udHJhY3RzL3F1ZXVlLnRhY3Q6MTA5OjEzOoP4UMP4UMP4UMIEBASSm/iRZWfQMb6GSMG3fgQEBJaUlWVn0DG+hkjBt39s8gQEBJKb+QET0WjCBAQEkpVkJCgHgcAKAQQLIWYIQCHXOpFADyx8BIG6VMHABywGOHiDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFuIBIG6VMHABywGOHiDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFuLJI1Ugf1UwbW3bPA4ACPRaMAIAEHBTQr6SMH/eAU7THwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/J+EIBcG3bPH8NATptbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPA4ByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsADwCYfwHKAMhwAcoAcAHKACRus51/AcoABCBu8tCAUATMljQDcAHKAOIkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDicAHKAAJ/AcoAAslYzAIBWBETAhG5Ly2zzbPGxBgWEgACIAIBIBQVABG0V92omhpAADACEbdM+2ebZ42IMBYYAZbtRNDUAfhj0gABjjCBAQHXAPQEgQEB1wD6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIFEMwbBTgMPgo1wsKgwm68uCJ2zwXAFRwbY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIED5wEAAiLcW2+4');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initQueue_init_args({ $$type: 'Queue_init_args' })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const Queue_errors: { [key: number]: { message: string } } = {
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
}

const Queue_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"AssignGameContractAddr","header":195823741,"fields":[{"name":"gameContractAddr","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"QueuePlayer","header":1859969918,"fields":[{"name":"playerAddr","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"NewGame","header":141938340,"fields":[{"name":"p1Addr","type":{"kind":"simple","type":"address","optional":true}},{"name":"p2Addr","type":{"kind":"simple","type":"address","optional":true}}]},
]

const Queue_getters: ABIGetter[] = [
    {"name":"getGameContractAddr","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
    {"name":"Queue","arguments":[],"returnType":{"kind":"dict","key":"int","value":"address"}},
]

export const Queue_getterMapping: { [key: string]: string } = {
    'getGameContractAddr': 'getGetGameContractAddr',
    'Queue': 'getQueue',
}

const Queue_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"AssignGameContractAddr"}},
    {"receiver":"internal","message":{"kind":"typed","type":"QueuePlayer"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class Queue implements Contract {
    
    static async init() {
        return await Queue_init();
    }
    
    static async fromInit() {
        const init = await Queue_init();
        const address = contractAddress(0, init);
        return new Queue(address, init);
    }
    
    static fromAddress(address: Address) {
        return new Queue(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  Queue_types,
        getters: Queue_getters,
        receivers: Queue_receivers,
        errors: Queue_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: AssignGameContractAddr | QueuePlayer | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'AssignGameContractAddr') {
            body = beginCell().store(storeAssignGameContractAddr(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'QueuePlayer') {
            body = beginCell().store(storeQueuePlayer(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getGetGameContractAddr(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('getGameContractAddr', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
    async getQueue(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('Queue', builder.build())).stack;
        let result = Dictionary.loadDirect(Dictionary.Keys.BigInt(257), Dictionary.Values.Address(), source.readCellOpt());
        return result;
    }
    
}