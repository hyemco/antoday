import React from "react";
import styles from "./StockSearchPage.module.css";
import StockSearchBar from "../components/StockInfo/atoms/StockSearchBar";

const StockSearchPage = () => {
  return (
    <div className={styles.mainContainer}>
      <StockSearchBar />
    </div>
  );
};

export default StockSearchPage;
