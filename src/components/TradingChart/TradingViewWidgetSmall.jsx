import React, { useEffect, useRef } from "react";

const TradingViewWidgetSmall = ({
  symbol,
  dateRange = "12M",
  colorTheme = "light",
  isTransparent = true,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.async = true;

    const widgetConfig = {
      symbol, 
      width: "100%",
      height: "100%",
      locale: "en",
      dateRange,
      colorTheme,
      isTransparent,
      autosize: true,
      largeChartUrl: "",
    };

    script.addEventListener("load", () => {
      if (window.TradingView) {
        new window.TradingView.MiniSymbolOverviewWidget(widgetConfig);
      }
    });

    const container = containerRef.current;

    container.appendChild(script);

    return () => {};
  }, [symbol, dateRange, colorTheme, isTransparent]);

  return <div ref={containerRef} id="tradingview-widget-container" />;
};

export default TradingViewWidgetSmall;
