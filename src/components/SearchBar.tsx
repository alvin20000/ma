import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';

interface SearchResult {
  type: string;
  title: string;
  description: string;
  link: string;
}

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  const mockSearch = (query: string): SearchResult[] => {
    if (!query) return [];
    
    // Mock search results from different sections
    return [
      {
        type: 'Service',
        title: 'Wedding Planning',
        description: 'Luxury wedding planning services',
        link: '#services'
      },
      {
        type: 'Gallery',
        title: 'Wedding Decoration',
        description: 'Elegant wedding venue decoration',
        link: '#gallery'
      },
      {
        type: 'Team',
        title: 'Sarah Johnson',
        description: 'Event Director',
        link: '#team'
      }
    ].filter(result => 
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.description.toLowerCase().includes(query.toLowerCase())
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearching(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setSearchResults(mockSearch(query));
  };

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="search-input pr-10"
          value={searchQuery}
          onChange={handleSearch}
          onFocus={() => setIsSearching(true)}
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>

      {isSearching && searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((result, index) => (
            <a
              key={index}
              href={result.link}
              className="search-result-item block"
              onClick={() => setIsSearching(false)}
            >
              <div className="font-medium text-[#4A90E2]">{result.title}</div>
              <div className="text-sm text-gray-600">{result.description}</div>
              <div className="text-xs text-gray-400">{result.type}</div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}