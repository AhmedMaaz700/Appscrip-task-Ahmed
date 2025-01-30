"use client";

import React, { useState } from "react";
import { Check, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Filter from "./Filter";
import ProductGrid from "./ProductGrid";

export default function ProductLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [selectedOption, setSelectedOption] = useState("RECOMMENDED");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  
  const toggleFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "#c2c4c7",
          marginBlock: "1rem",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "1rem", alignItems: "center", }}>
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>3425 ITEMS</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "5px",
              cursor: "pointer",
              color: '#c2c4c7',
              textTransform: "uppercase",
            }}
            onClick={toggleFilter}
          >
            {isOpenFilter && (<span><ChevronLeft /></span>)}
            <span style={{ fontSize: "14px", textDecoration: 'underline' }}>{!isOpenFilter ? 'SHOW' : 'HIDE'} FILTER</span>
            {!isOpenFilter && (<span><ChevronRight /></span>)}
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <button
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              textTransform: "uppercase",
              border: 0,
              backgroundColor: '#fff'
            }}
            onClick={toggleDropdown}
          >
            <span style={{ fontSize: "14px" }}>{selectedOption}</span>
            <span><ChevronDown /></span>
          </button>

          {isOpen && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                right: 0,
                width: "100%",
                backgroundColor: "#fff",
                zIndex: 10,
                width: '200px'
              }}
            >
              {[
                "RECOMMENDED",
                "NEWEST FIRST",
                "POPULAR",
                "PRICE: HIGH TO LOW",
                "PRICE: LOW TO HIGH",
              ].map((option) => (
                <div
                  key={option}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    padding: "10px",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    fontWeight: selectedOption === option ? "bold" : "normal",
                  }}
                  onClick={() => selectOption(option)}
                >
                  {selectedOption === option && (
                    <>
                      <Check style={{ marginRight: "8px" }} />
                    </>
                  )}
                  <span>{option}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "#c2c4c7",
          marginBlock: "1rem",
        }}
      />
      <div style={{ display: "flex" }}>
        {isOpenFilter && <div style={{ width: "25%" }}><Filter /></div>}
        <ProductGrid isOpenFilter={isOpenFilter} />
      </div>
    </>
  );
}
