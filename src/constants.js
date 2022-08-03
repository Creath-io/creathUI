const CONTRACT_ADDRESS = "0xF7c2a89071187ccE6ac1fdAAF995bbE3563062Ea"
const USDT = "0x77906846600910Ef08704e2Bf98467a46CA69FD2"
const PROVIDER = "https://quiet-twilight-smoke.rinkeby.discover.quiknode.pro/d8f3f4148d07a0f521ec4db39fe487a4ea784fad"

const transformData = (data) => {
    return {
        id: data.tokenId,
        seller: data.seller,
        owner: data.owner,
        price: data.price,
        sold: data.sold,
    };
};

export {CONTRACT_ADDRESS,USDT, PROVIDER, transformData};