const CONTRACT_ADDRESS = "0xF7c2a89071187ccE6ac1fdAAF995bbE3563062Ea"
const USDT = "0x77906846600910Ef08704e2Bf98467a46CA69FD2"
const PROVIDER = "https://rinkeby.infura.io/v3/5bb80a78a3b74311859498fa0472f24f"

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