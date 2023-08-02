import axios from "axios";
import { useState, useEffect } from "react";
import Coin from "./Coin";
import Loading from "./Loading.jsx";
import "./App.css";
import Header from "./Header";

function App() {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  //https://rest.coinapi.io/v1/exchangerate/${asset}/USD?apikey=YOUR_API_KEY
  // https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en
  useEffect(() => {
    const coinData = async () => {
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=true&locale=en"
      );
      console.log(data);
      setCoin(data);
      setLoading(false);
    };

    coinData();
  }, []);

  return (
    <>
      <Header />
      <div className="App">
        {loading ? (
          <Loading />
        ) : (
          <div className="coins">
            {coin.map((coin) => (
              <Coin coin={coin} key={coin.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
