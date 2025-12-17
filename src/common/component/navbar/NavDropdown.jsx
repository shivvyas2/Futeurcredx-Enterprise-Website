"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

export default function NavDropdown({ title, items, pathname, showCategories = true }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(items[0]?.category || null);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSubItem, setHoveredSubItem] = useState(null);

  // If only one category or showCategories is false, show items directly
  const hasMultipleCategories = items.length > 1 && showCategories;
  const displayCategory = hoveredCategory || activeCategory;
  const displayItems = hasMultipleCategories
    ? items.filter((item) => item.category === displayCategory)
    : items;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className={clsx(
        "text-[#696969] font-medium transition-colors duration-300",
        isOpen ? "text-[#494949]" : "hover:text-[#494949]"
      )}>
        {title}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className={clsx(
              "absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-neutral-200 p-6 z-50",
              hasMultipleCategories ? "w-[900px]" : "w-[700px]"
            )}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className={clsx("flex", hasMultipleCategories ? "gap-8" : "")}>
              {/* Left Column - Categories (only if multiple categories) */}
              {hasMultipleCategories && (
                <div className="w-48 flex flex-col gap-1">
                  {items.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveCategory(item.category)}
                      onMouseEnter={() => setHoveredCategory(item.category)}
                      onMouseLeave={() => setHoveredCategory(null)}
                      className={clsx(
                        "text-left px-4 py-2.5 rounded-md text-sm font-medium transition-colors",
                        displayCategory === item.category
                          ? "bg-blue-50 text-blue-600"
                          : "text-neutral-700 hover:bg-neutral-50"
                      )}
                    >
                      {item.category}
                    </button>
                  ))}
                </div>
              )}

              {/* Right Column - Sub-items with nested items in same container */}
              <div className={clsx(hasMultipleCategories ? "flex-1" : "w-full", "flex gap-0")}>
                {displayItems.map((item, index) => {
                  // Find which sub-item is hovered
                  const hoveredItem = item.subItems.find((_, idx) => hoveredSubItem === idx);
                  
                  return (
                    <div key={index} className="flex w-full">
                      {/* Main Items - Stacked vertically */}
                      <div className="flex-1 space-y-3">
                        {item.subItems.map((subItem, subIndex) => {
                          const isHovered = hoveredSubItem === subIndex;
                          const hasNested = subItem.nestedItems && subItem.nestedItems.length > 0;
                          
                          return (
                            <div
                              key={subIndex}
                              onMouseEnter={() => hasNested ? setHoveredSubItem(subIndex) : null}
                              onMouseLeave={() => {
                                if (!hasNested) {
                                  setHoveredSubItem(null);
                                }
                              }}
                            >
                              {hasNested ? (
                                <div className={clsx(
                                  "flex items-start gap-3 p-4 rounded-lg transition-colors cursor-pointer",
                                  isHovered ? "bg-blue-50" : "hover:bg-neutral-50"
                                )}>
                                  <div className="w-10 h-10 flex items-center justify-center bg-white rounded flex-shrink-0">
                                    {subItem.icon ? (
                                      <img
                                        src={subItem.icon}
                                        alt={subItem.title}
                                        className="w-6 h-6 object-contain"
                                      />
                                    ) : (
                                      <div className="w-6 h-6 border-2 border-teal-500 rounded"></div>
                                    )}
                                  </div>
                                  <div className="flex-1">
                                    <div className="font-semibold text-neutral-900 text-sm flex items-center gap-1">
                                      {subItem.title}
                                      <span className="text-neutral-400">›</span>
                                    </div>
                                    {subItem.description && (
                                      <div className="text-xs text-neutral-600 mt-1 leading-relaxed">
                                        {subItem.description}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ) : (
                                (() => {
                                  const isExternal = subItem.href?.startsWith('http://') || subItem.href?.startsWith('https://');
                                  const linkContent = (
                                    <>
                                      <div className="w-10 h-10 flex items-center justify-center bg-white rounded flex-shrink-0">
                                        {subItem.icon ? (
                                          <img
                                            src={subItem.icon}
                                            alt={subItem.title}
                                            className="w-6 h-6 object-contain"
                                          />
                                        ) : (
                                          <div className="w-6 h-6 border-2 border-teal-500 rounded"></div>
                                        )}
                                      </div>
                                      <div className="flex-1">
                                        <div className="font-semibold text-neutral-900 group-hover:text-teal-600 transition-colors text-sm">
                                          {subItem.title}
                                        </div>
                                        {subItem.description && (
                                          <div className="text-xs text-neutral-600 mt-1 leading-relaxed">
                                            {subItem.description}
                                          </div>
                                        )}
                                      </div>
                                    </>
                                  );

                                  if (isExternal) {
                                    return (
                                      <a
                                        href={subItem.href || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start gap-3 p-4 rounded-lg hover:bg-neutral-50 transition-colors group"
                                      >
                                        {linkContent}
                                      </a>
                                    );
                                  }

                                  return (
                                    <Link
                                      href={subItem.href || "#"}
                                      className="flex items-start gap-3 p-4 rounded-lg hover:bg-neutral-50 transition-colors group"
                                    >
                                      {linkContent}
                                    </Link>
                                  );
                                })()
                              )}
                            </div>
                          );
                        })}
                      </div>
                      
                      {/* Nested Items - Appear in same container with separator line */}
                      {hoveredItem && hoveredItem.nestedItems && hoveredItem.nestedItems.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          onMouseEnter={() => setHoveredSubItem(item.subItems.findIndex(si => si === hoveredItem))}
                          onMouseLeave={() => setHoveredSubItem(null)}
                          className="w-64 border-l border-neutral-200 pl-6 ml-6"
                        >
                          <div className="space-y-2 pt-1">
                            {hoveredItem.nestedItems.map((nestedItem, nestedIndex) => {
                              const isExternal = nestedItem.href?.startsWith('http://') || nestedItem.href?.startsWith('https://');
                              
                              if (isExternal) {
                                return (
                                  <a
                                    key={nestedIndex}
                                    href={nestedItem.href || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block py-2 px-3 rounded-md hover:bg-neutral-50 transition-colors"
                                  >
                                    <div className="font-medium text-neutral-900 text-sm">
                                      {nestedItem.title}
                                    </div>
                                    {nestedItem.description && (
                                      <div className="text-xs text-neutral-600 mt-0.5">
                                        {nestedItem.description}
                                      </div>
                                    )}
                                  </a>
                                );
                              }
                              
                              return (
                                <Link
                                  key={nestedIndex}
                                  href={nestedItem.href || "#"}
                                  className="block py-2 px-3 rounded-md hover:bg-neutral-50 transition-colors"
                                >
                                  <div className="font-medium text-neutral-900 text-sm">
                                    {nestedItem.title}
                                  </div>
                                  {nestedItem.description && (
                                    <div className="text-xs text-neutral-600 mt-0.5">
                                      {nestedItem.description}
                                    </div>
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

