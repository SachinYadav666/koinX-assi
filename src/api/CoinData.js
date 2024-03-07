
export const fetchCoinDetail = async (coin) => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  };

  export const fetchTrendindcoins=async()=>{
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/search/trending`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      const trendingCoins = jsonData.coins || [];
      return trendingCoins.slice(0, 3);
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  }