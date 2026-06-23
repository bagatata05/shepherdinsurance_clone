"use client";

import React, { useState, useRef, useEffect } from "react";

const targetAppetitePrimary = [
  "Solar",
  "Onshore Wind",
  "Biomass",
  "Microgrids",
  "Natural Gas Power Plants",
  "Fuel Cells",
  "Energy Storage Systems",
  "Hydroelectricty",
  "Steam Electric Power Plants",
  "Cogeneration Power Plants",
];

const restrictedPrimary = [
  "Traditional Oil & Gas risks",
  "Coal Fired Power Plants",
  "Residential Solar",
  "Solutions or Development companies without ownership",
  "Manufacturers of renewal components",
];

const partnershipsPrimary = [
  "Procore",
  "Autodesk",
  "Raken",
  "OpenSpace",
  "DroneDeploy",
  "RaptorMaps",
];

const targetAppetiteExcess = [
  "Solar",
  "Onshore Wind",
  "Biomass",
  "Microgrids",
  "Natural Gas Power Plants",
  "Fuel Cells",
  "Energy Storage Systems",
  "Hydroelectricty",
  "Steam Electric Power Plants",
  "Cogeneration Power Plants",
];

const restrictedExcess = [
  "Traditional Oil & Gas risks",
  "Coal Fired Power Plants",
  "Residential Solar",
  "Solutions or Development companies without ownership",
  "Manufacturers of renewal components",
];

const partnershipsExcess = [
  "Procore",
  "Autodesk",
  "Raken",
  "OpenSpace",
  "DroneDeploy",
  "RaptorMaps",
];

const accordionLabels = [
  "Target Appetite",
  "Restricted or Ineligible",
  "Shepherd Savings Eligible Partnerships",
] as const;

interface AccordionSectionProps {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  items: string[];
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
  label,
  isOpen,
  onToggle,
  items,
}) => {
  return (
    <div
      className="accordion_item"
      role="listitem"
      style={{
        "--_state---false": isOpen ? 0 : 1,
        "--_state---true": isOpen ? 1 : 0,
      } as any}
    >
      <div className="accordion_component">
        <h3 className="accordion_toggle_heading">
          <button
            onClick={onToggle}
            aria-expanded={isOpen ? "true" : "false"}
            className="accordion_toggle_button"
            type="button"
          >
            <span className="accordion_toggle_text u-text-style-h4">
              {label}
            </span>
            <span className="accordion_toggle_icon">
              <svg
                viewBox="0 0 66 70"
                fill="none"
                width="100%"
                height="100%"
                aria-hidden="true"
                className="u-svg"
              >
                <path d="M17 2L50 34.9999L17 68" className="u-path"></path>
              </svg>
            </span>
          </button>
        </h3>
        <div
          className="accordion_content_wrap"
          style={{ display: isOpen ? "block" : "none" }}
        >
          <div className="accordion_content_padding">
            <div className="appetite-details-flex">
              {items.map((item, idx) => (
                <div key={idx} className="div-block-20">
                  <div className="products-flex">
                    <div className="checkmark">
                      <div className="solution-check"></div>
                    </div>
                    <div className="check-txt u-text-style-large">{item}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ProductPanelProps {
  title: string;
  activeAccordion: number | null;
  onToggleAccordion: (idx: number) => void;
  targetItems: string[];
  restrictedItems: string[];
  partnershipItems: string[];
}

const ProductPanel: React.FC<ProductPanelProps> = ({
  title,
  activeAccordion,
  onToggleAccordion,
  targetItems,
  restrictedItems,
  partnershipItems,
}) => {
  const sections = [targetItems, restrictedItems, partnershipItems];

  return (
    <div className="appetite-details" style={{ display: "flex" }}>
      <div className="appetite-details-title">{title}</div>
      <div className="accordion_wrap">
        <div className="accordion_list" role="list">
          {sections.map((items, idx) => (
            <AccordionSection
              key={idx}
              label={accordionLabels[idx]}
              isOpen={activeAccordion === idx}
              onToggle={() => onToggleAccordion(idx)}
              items={items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const AppetiteSection: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState<"primary" | "excess">(
    "primary",
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (product: "primary" | "excess") => {
    setActiveProduct(product);
    setIsDropdownOpen(false);
    setActiveAccordion(0);
  };

  const handleToggleAccordion = (idx: number) => {
    setActiveAccordion(activeAccordion === idx ? null : idx);
  };

  const productLabel =
    activeProduct === "primary" ? "Primary Casualty" : "Excess Casualty";

  return (
    <section className="u-section u-theme-beige">
      <div className="section_spacer">
        <div className="u-container">
          <div className="u-content v-flex-8">
            <div className="content-flex v-flex-8">
              <div className="products-overview-grid u-grid-custom">
                <div className="solution-right-flex">
                  <div data-max="ch16" className="u-text-style-h3">
                    Select product to view appetite details
                  </div>
                  <div
                    className={`dropdown-wrap is-appetite w-dropdown ${isDropdownOpen ? "w--open" : ""}`}
                    ref={dropdownRef}
                    style={{ position: "relative" }}
                  >
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`dropdown-btn is-top w-dropdown-toggle ${isDropdownOpen ? "w--open" : ""}`}
                      type="button"
                      aria-haspopup="listbox"
                      aria-expanded={isDropdownOpen}
                    >
                      <div
                        className={`div-block-14 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M20.031 9.53104L12.531 17.031C12.4614 17.1008 12.3787 17.1561 12.2876 17.1938C12.1966 17.2316 12.099 17.251 12.0004 17.251C11.9019 17.251 11.8043 17.2316 11.7132 17.1938C11.6222 17.1561 11.5394 17.1008 11.4698 17.031L3.96979 9.53104C3.82906 9.39031 3.75 9.19944 3.75 9.00042C3.75 8.80139 3.82906 8.61052 3.96979 8.46979C4.11052 8.32906 4.30139 8.25 4.50042 8.25C4.69944 8.25 4.89031 8.32906 5.03104 8.46979L12.0004 15.4401L18.9698 8.46979C19.0395 8.40011 19.1222 8.34483 19.2132 8.30712C19.3043 8.26941 19.4019 8.25 19.5004 8.25C19.599 8.25 19.6965 8.26941 19.7876 8.30712C19.8786 8.34483 19.9614 8.40011 20.031 8.46979C20.1007 8.53947 20.156 8.6222 20.1937 8.71324C20.2314 8.80429 20.2508 8.90187 20.2508 9.00042C20.2508 9.09896 20.2314 9.19654 20.1937 9.28759C20.156 9.37863 20.1007 9.46136 20.031 9.53104Z"
                            fill="black"
                          ></path>
                        </svg>
                      </div>
                      <div className="u-text-style-small uppercase">
                        {productLabel}
                      </div>
                    </button>
                    <div
                      className={`dropdown-bottom w-dropdown-list ${isDropdownOpen ? "w--open" : ""}`}
                      style={{
                        height: isDropdownOpen ? "auto" : "0px",
                        overflow: isDropdownOpen ? "visible" : "hidden",
                        position: "absolute",
                        width: "100%",
                        zIndex: 10,
                        transition: "height 0.2s ease, opacity 0.2s ease",
                      }}
                    >
                      <div
                        data-lenis-prevent=""
                        className="dropdown-btn is-bottom"
                      >
                        <div className="state-dropdown-list">
                          <div
                            onClick={() => handleSelect("primary")}
                            className="state-dropdown-item cursor-pointer"
                          >
                            <div className="products-flex">
                              <div className="checkmark">
                                <div
                                  className={`solution-check is-dropdown ${activeProduct === "primary" ? "is-active" : "w-condition-invisible"}`}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    className="check-svg"
                                  >
                                    <path
                                      d="M3.5 10L7 13.3094L14.5 4"
                                      stroke="white"
                                      strokeWidth="2"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="check-txt u-text-style-large">
                                primary Casualty
                              </div>
                            </div>
                          </div>
                          <div
                            onClick={() => handleSelect("excess")}
                            className="state-dropdown-item cursor-pointer"
                          >
                            <div className="products-flex">
                              <div className="checkmark">
                                <div
                                  className={`solution-check is-dropdown ${activeProduct === "excess" ? "is-active" : "w-condition-invisible"}`}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    className="check-svg"
                                  >
                                    <path
                                      d="M3.5 10L7 13.3094L14.5 4"
                                      stroke="white"
                                      strokeWidth="2"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="check-txt u-text-style-large">
                                Excess Casualty
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="appetite-right">
                  <div className="appetite-details-wrap-flex">
                    {activeProduct === "primary" && (
                      <ProductPanel
                        title="Primary Casualty"
                        activeAccordion={activeAccordion}
                        onToggleAccordion={handleToggleAccordion}
                        targetItems={targetAppetitePrimary}
                        restrictedItems={restrictedPrimary}
                        partnershipItems={partnershipsPrimary}
                      />
                    )}
                    {activeProduct === "excess" && (
                      <ProductPanel
                        title="Excess Casualty"
                        activeAccordion={activeAccordion}
                        onToggleAccordion={handleToggleAccordion}
                        targetItems={targetAppetiteExcess}
                        restrictedItems={restrictedExcess}
                        partnershipItems={partnershipsExcess}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
