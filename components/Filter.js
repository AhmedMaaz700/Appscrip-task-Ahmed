import React, { useState } from "react";
import styles from "./Filter.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Filter() {
  const [isOpen, setIsOpen] = useState({
    category: false,
    brand: false,
    price: false,
  });

  const [selectedOptions, setSelectedOptions] = useState({
    "Ideal for": [],
    occasion: [],
    work: [],
    fabric: [],
    segment: [],
    "suitable for": [],
    "raw material": [],
    pattern: [],
  });

  const toggleDropdown = (key) => {
    setIsOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCheckboxChange = (key, option) => {
    setSelectedOptions((prev) => {
      const newSelected = prev[key].includes(option)
        ? prev[key].filter((item) => item !== option)
        : [...prev[key], option];
      return { ...prev, [key]: newSelected };
    });
  };

  const handleUnselectAll = (key) => {
    setSelectedOptions((prev) => ({ ...prev, [key]: [] }));
  };

  const categoryArray = [
    "Ideal for",
    "occasion",
    "work",
    "fabric",
    "segment",
    "suitable for",
    "raw material",
    "pattern",
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.filterSection}>
        <input type="checkbox" id="filterCheckbox" className={styles.checkbox} />
        <label htmlFor="filterCheckbox">Customizable</label>
      </div>

      {categoryArray.map((key) => (
        <div key={key} className={styles.dropdown}>
          <div className={styles.dropdownHeader} onClick={() => toggleDropdown(key)}>
          <div className={styles.dropdownGroup}>
            <span className={styles.dropdownTitle}>{key.toUpperCase()}</span>
            <span className={styles.dropdownSubTitle}>ALL</span>
          </div>
            <span className={styles.arrow}>{isOpen[key] ? <ChevronUp /> : <ChevronDown />}</span>
          </div>

          {isOpen[key] && (
            <div className={styles.dropdownContent}>
              <button className={styles.unselectAll} onClick={() => handleUnselectAll(key)}>
                Unselect All
              </button>
              {["Man", "Woman", "Baby&Kids"].map((option) => (
                <label key={option} className={styles.option}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={selectedOptions[key].includes(option)}
                    onChange={() => handleCheckboxChange(key, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
