
import DaiIcon from '../assets/image/pools/dai.png';

export const chainId = 42;

export const rpcUrl = {
  42: "https://kovan.infura.io/v3/2377373e9cc84228a6cea33645b511ea",
  1: "https://mainnet.infura.io/v3/2377373e9cc84228a6cea33645b511ea"
}

export const pools = {
  'dai': {
    id: 'dai',
    name: 'Dai Stable Coin',
    symbol: 'DAI',
    decimal: 18,
    cgId: 'dai',
    fee: 0.8,
    icon: DaiIcon,
    token: {
      42: '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa',
      1: ''
    },
    factory: {
      42: '0xe60E99738b5ac71466e86Ba4F0b9055B0D9e6661',
      1: ''
    },
  }
}

export const addresses = {
  payrtoken: {
    42: '0x34489bB2767198C4aBc11283D2F896Da6416c702',
    1: '0xC93d74B2CBCCD0995b8214b38E15fCb4bf842220',
  },
  escrow: {
    42: '0x47eAAA9a2ED04818EC5defA3da1A525a0A8749b8'
  },
  weth: {
    42: '0xa050886815cfc52a24b9c4ad044ca199990b6690',
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  }
}