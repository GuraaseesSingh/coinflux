export type Coin = { id:string; name:string; symbol:string; price:number; change:number; marketCap:number; volume:number; supply:string; color:string; letter:string; spark:number[] }
export const coins: Coin[] = [
{id:'bitcoin',name:'Bitcoin',symbol:'BTC',price:67432.18,change:2.84,marketCap:1328400000000,volume:28450000000,supply:'19.72M BTC',color:'#f7931a',letter:'₿',spark:[20,24,22,30,27,38,35,46,42,55,50,64]},
{id:'ethereum',name:'Ethereum',symbol:'ETH',price:3521.74,change:1.62,marketCap:422180000000,volume:12400000000,supply:'120.15M ETH',color:'#8b9af9',letter:'◆',spark:[32,28,38,34,45,39,52,48,58,53,68,65]},
{id:'tether',name:'Tether',symbol:'USDT',price:1.00,change:0.03,marketCap:111420000000,volume:43200000000,supply:'111.39B USDT',color:'#26a17b',letter:'₮',spark:[42,40,43,41,44,42,43,41,45,43,44,42]},
{id:'bnb',name:'BNB',symbol:'BNB',price:598.42,change:-0.74,marketCap:88400000000,volume:1280000000,supply:'147.58M BNB',color:'#f3ba2f',letter:'◆',spark:[61,56,60,48,54,42,48,39,45,34,39,32]},
{id:'solana',name:'Solana',symbol:'SOL',price:178.36,change:5.27,marketCap:79850000000,volume:3210000000,supply:'447.78M SOL',color:'#9945ff',letter:'S',spark:[18,25,22,36,31,44,40,57,51,69,63,82]},
{id:'usd-coin',name:'USD Coin',symbol:'USDC',price:1.00,change:-0.01,marketCap:32810000000,volume:5480000000,supply:'32.79B USDC',color:'#2775ca',letter:'＄',spark:[43,41,42,44,40,42,41,43,42,44,41,42]},
{id:'xrp',name:'XRP',symbol:'XRP',price:0.6248,change:3.19,marketCap:34200000000,volume:1120000000,supply:'54.73B XRP',color:'#23292f',letter:'X',spark:[26,30,24,38,35,49,45,55,51,64,61,76]},
{id:'dogecoin',name:'Dogecoin',symbol:'DOGE',price:0.1634,change:-2.13,marketCap:23500000000,volume:865000000,supply:'144.12B DOGE',color:'#c2a633',letter:'Ð',spark:[72,65,69,57,60,50,56,42,46,36,40,31]},
{id:'toncoin',name:'Toncoin',symbol:'TON',price:7.42,change:4.06,marketCap:25700000000,volume:342000000,supply:'3.47B TON',color:'#0098ea',letter:'₮',spark:[20,23,30,27,38,35,43,40,54,49,63,71]},
{id:'avalanche',name:'Avalanche',symbol:'AVAX',price:36.81,change:0.91,marketCap:14500000000,volume:298000000,supply:'393.56M AVAX',color:'#e84142',letter:'▲',spark:[36,32,38,34,43,40,47,44,50,47,55,57]},
{id:'chainlink',name:'Chainlink',symbol:'LINK',price:17.26,change:2.34,marketCap:10100000000,volume:318000000,supply:'587.1M LINK',color:'#2a5ada',letter:'⬡',spark:[25,22,30,27,38,33,43,40,49,45,57,62]},
{id:'polkadot',name:'Polkadot',symbol:'DOT',price:7.18,change:-1.25,marketCap:9800000000,volume:172000000,supply:'1.37B DOT',color:'#e6007a',letter:'●',spark:[60,55,61,49,54,46,50,40,43,35,39,33]},
]
export const formatMoney=(n:number,currency:'USD'|'INR'='USD')=>currency==='INR'?`₹${(n*83.4).toLocaleString('en-IN',{maximumFractionDigits:2})}`:`$${n.toLocaleString('en-US',{minimumFractionDigits:n<1?4:2,maximumFractionDigits:n<1?4:2})}`
export const formatCap=(n:number)=>'$'+(n/1e9).toFixed(2)+'B'
export const chartData=Array.from({length:48},(_,i)=>({time:i,price:65000+Math.sin(i*.42)*1600+i*82+Math.cos(i*.19)*900}))
