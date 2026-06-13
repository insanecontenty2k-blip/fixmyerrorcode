"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { SearchIndexEntry } from "@/lib/types";

interface SearchBarProps {
  placeholder?: string;
  autoFocus?: boolean;
  variant?: "default" | "hero";
}

function filterResults(data: SearchIndexEntry[], query: string): SearchIndexEntry[] {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const terms = trimmed.toLowerCase().split(/\s+/).filter(Boolean);

  return data
    .filter((item) => {
      const haystack = [
        item.error_code,
        item.brand,
        item.brandName,
        item.appliance,
        item.applianceName,
        item.summary,
        item.meaning,
      ]
        .join(" ")
        .toLowerCase();

      return terms.every((term) => haystack.includes(term));
    })
    .filter(
      (item, index, arr) => arr.findIndex((x) => x.href === item.href) === index
    )
    .slice(0, 12);
}

export function SearchBar({
  placeholder = "Search by brand, appliance, code, or symptom…",
  autoFocus = false,
  variant = "default",
}: SearchBarProps) {
  const [index, setIndex] = useState<SearchIndexEntry[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("/search-index.json")
      .then((res) => res.json())
      .then((data: SearchIndexEntry[]) => {
        setIndex(data);
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, []);

  const results = useMemo(
    () => filterResults(index, query),
    [index, query]
  );

  const trimmedQuery = query.trim();
  const showDropdown = open && trimmedQuery.length > 0;

  useEffect(() => {
    setActiveIndex(results.length > 0 ? 0 : -1);
  }, [results]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const goTo = useCallback((href: string) => {
    setOpen(false);
    setQuery("");
    window.location.href = href;
  }, []);

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
      return;
    }

    if (!showDropdown) return;

    if (event.key === "ArrowDown" && results.length > 0) {
      event.preventDefault();
      setActiveIndex((i) => (i + 1) % results.length);
    } else if (event.key === "ArrowUp" && results.length > 0) {
      event.preventDefault();
      setActiveIndex((i) => (i <= 0 ? results.length - 1 : i - 1));
    } else if (event.key === "Enter" && activeIndex >= 0 && results[activeIndex]) {
      event.preventDefault();
      goTo(results[activeIndex].href);
    }
  }

  const inputClass =
    variant === "hero"
      ? "w-full rounded-lg border-0 bg-transparent px-4 py-3.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
      : "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 shadow-card placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

  return (
    <div ref={containerRef} className="relative z-50">
      <label htmlFor="code-search" className="sr-only">
        Search error codes
      </label>
      <div
        className={
          variant === "hero"
            ? "rounded-lg bg-white shadow-card ring-1 ring-black/5 focus-within:ring-2 focus-within:ring-accent/30"
            : undefined
        }
      >
        <input
          ref={inputRef}
          id="code-search"
          type="search"
          role="combobox"
          aria-expanded={showDropdown}
          aria-controls="code-search-results"
          aria-autocomplete="list"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={loaded ? placeholder : "Loading search index…"}
          autoFocus={autoFocus}
          autoComplete="off"
          className={inputClass}
        />
      </div>

      {showDropdown && (
        <div
          id="code-search-results"
          role="listbox"
          className="absolute left-0 right-0 top-[calc(100%+6px)] z-[100] max-h-96 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-xl"
        >
          {!loaded ? (
            <p className="px-4 py-4 text-sm text-gray-500">Loading…</p>
          ) : results.length === 0 ? (
            <p className="px-4 py-4 text-sm text-gray-500">
              No error codes found for{" "}
              <span className="font-medium text-gray-700">{trimmedQuery}</span>
            </p>
          ) : (
            <ul>
              {results.map((item, index) => (
                <li
                  key={item.href}
                  role="option"
                  aria-selected={index === activeIndex}
                >
                  <button
                    type="button"
                    className={`block w-full px-4 py-3 text-left transition-colors ${
                      index === activeIndex ? "bg-blue-50" : "hover:bg-gray-50"
                    }`}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => goTo(item.href)}
                  >
                    <span className="font-medium text-gray-900">
                      {item.brandName} {item.error_code.toUpperCase()} —{" "}
                      {item.summary}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
