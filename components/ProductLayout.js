"use client";

import React, { useState, useEffect } from "react";
import { Check, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Filter from "./Filter";
import ProductGrid from "./ProductGrid";
import styles from "./ProductLayout.module.css";

export default function ProductLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [selectedOption, setSelectedOption] = useState("RECOMMENDED");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  const toggleFilter = () => setIsOpenFilter(!isOpenFilter);

  return (
    <>
      <div className={styles.divider}></div>
      <div className={styles.topSection}>
        {isMobile ? (
          <div className={styles.mobileTopSection}>
            <p className={styles.filter} onClick={toggleFilter}>FILTER</p>
            <div className={styles.verticalDivider}></div>
          </div>
        ) : (
          <div className={styles.itemsInfo}>
            <p className={styles.itemsCount}>3425 ITEMS</p>
            <div className={styles.filterToggle} onClick={toggleFilter}>
              {isOpenFilter && <ChevronLeft />}
              <span>{!isOpenFilter ? "SHOW " : "HIDE "}FILTER</span>
              {!isOpenFilter && <ChevronRight />}
            </div>
          </div>
        )}

        { (
          <div className={styles.dropdownWrapper}>
            <button className={styles.dropdownButton} onClick={toggleDropdown}>
              <span>{selectedOption}</span>
              <ChevronDown size={16}/>
            </button>

            {isOpen && (
              <div className={styles.dropdownMenu}>
                {["RECOMMENDED", "NEWEST FIRST", "POPULAR", "PRICE: HIGH TO LOW", "PRICE: LOW TO HIGH"].map((option) => (
                  <div key={option} className={`${styles.dropdownItem} ${selectedOption === option ? styles.selected : ""}`} onClick={() => selectOption(option)}>
                    {selectedOption === option && <Check className={styles.checkIcon} />}
                    <span>{option}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
   
      <div className={styles.divider}></div>

      <div className={isMobile && isOpenFilter ? styles.columnLayout : styles.rowLayout}>
        {isOpenFilter && <div className={styles.filterWrapper}><Filter /></div>}
        <ProductGrid isOpenFilter={isOpenFilter} />
      </div>
    </>
  );
}
