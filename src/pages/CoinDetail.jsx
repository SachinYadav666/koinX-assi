import React, { useEffect, useState } from "react";
import styles from "./Pages.module.css";
import { useParams } from "react-router";
import BreadCrums from "../components/BreadCrums/BreadCrums";
import Cards from "../components/Cards/Cards";
import style from "./CoinDetail.module.css";
import Anime from "../../src/assets/animated.png";
import { fetchCoinDetail, fetchTrendindcoins } from "../api/CoinData";
import Filter from "../components/Filter/Filter";
import { Button } from "@mui/material";
import FooterCrousal from '../components/FooterCrousal/FooterCrousal'


const CoinDetail = () => {
  const { coin } = useParams();
  const lowercaseCoin = coin.toLowerCase();
  const [coinData, setCoinData] = useState(null);
  const [trendingData, setTreandingData] = useState(null);
  const [error, setError] = useState(null);
  const [isDataFetched, setIsDataFetched] = useState(false); 

  const fetchData = async () => {
    try {
      const data = await fetchCoinDetail(lowercaseCoin);
      setCoinData(data);
    } catch (error) {
      console.error("Error fetching coin data:",error);
      setError(error);
    }
  };

  const fetchTrends = async () => {
    try {
      const data = await fetchTrendindcoins();
      setTreandingData(data);
    } catch (error) {
      console.error("Error fetching coin data:", error);
      setError(error);
    }
  };

  useEffect(() => {
    if (!isDataFetched) { 
      fetchData();
      fetchTrends();
      setIsDataFetched(true); 
    }
  }, [lowercaseCoin, fetchData, isDataFetched]); 
  useEffect(() => {
    document.title = `lowercaseCoin Detail - ${lowercaseCoin}`;
  });

  return (
    <div className={styles.pageContainer}>
      <BreadCrums coin={lowercaseCoin} />

      {coinData && <section className={style.cardTitleChartedMobile}>
        <img src={coinData.image.large} alt={coinData.symbol} className={style.coinImg} />
        <h2>{coinData.name}</h2>
        <p>{coinData && coinData.symbol && coinData.symbol.toUpperCase()}</p>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#768396",
            borderRadius: "7px",
            height: "43px",
            fontSize: "18px",
            textTransform: "none",
          }}
        >
         Rank  #{
          coinData.market_cap_rank}
        </Button>
      </section>}

      <div className={style.cardSection}>
        <div className={style.primaryCardsSection}>
          <Cards charted={true} coindata={coinData} />
          <Filter coindata={coinData}/>

          <div className={style.containerFooterMobile}>
      <h1 className={style.firstHeading}>You May Also Like!</h1>
      <FooterCrousal/>
      <h1 className={style.secondHeading}>Trending Coins </h1>
      <FooterCrousal/>
    </div>
         
        </div>
        <div className={style.secondaryCardSection}>
          <div className={style.cardOne}>
            <h2>Get Started With KoinX for Free</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              cupiditate sit amet repellat deleniti voluptas, consequatur
              recusandae soluta cumque quo, asperiores eius, unde iusto dolore.
            </p>
            <img src={Anime} alt="" />
            <p className={style.joinfree}>
              Get Started for Free
              <span class="material-symbols-outlined">trending_flat</span>
            </p>
          </div>

          <div className={style.cardTwo}>
            <h2>Trending Coins (24H)</h2>
            <section className={style.trendingCoins}>
              {trendingData &&
                trendingData.map((item, idx) => (
                  <div className={style.trendingCoin} key={idx}>
                    <div className={style.namedetail}>
                      <img src={item.item.small} alt="" />
                      <h3>{item.item.name}</h3>
                    </div>
                    <p className={style.positiveGrowth}>
                      <div className={style.positiveGrowthIndicator}>
                        <span className="material-symbols-outlined">arrow_drop_up</span>
                      </div>
                      {parseFloat(item.item.data.price_change_percentage_24h.usd).toFixed(1)}%
                    </p>
                  </div>
                ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetail;
