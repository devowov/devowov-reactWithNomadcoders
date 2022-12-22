import { useEffect, useState } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [usd, setUsd] = useState(0);
  const [bitCoin, setBitcoin] = useState(0);
  
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response)=> response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false)
    });
  }, [])

  const onChange = (event) => setUsd(event.target.value)
  const selChange = (event) => setBitcoin(event.target.value)

  return (
    <div>
      <h1>The Conis! ({coins.length})</h1>
      <select onChange={selChange}>
        <option value={0}>Select Coin</option>
      {coins.map((coin, idx) => (
          <option key={idx} value={coin.quotes.USD.price}> {coin.name} </option>
        ))}
      </select><br/>
      <strong>USD -> COIN</strong> <input onChange={onChange} value={usd} type="number"/> -> 
      <span style={{backgroundColor: "#e7e7e7", color: "black"}}> coin [{(usd / bitCoin).toFixed(4)}] </span>
      {loading ? <strong>Loading...</strong> : null}
      <hr/>
      <ul>
        {coins.map((coin, idx) => (
          <li key={idx}>
            {coin.name} ({coin.symbol}) : ${(coin.quotes.USD.price).toFixed(2)} USD
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CoinTracker; 
