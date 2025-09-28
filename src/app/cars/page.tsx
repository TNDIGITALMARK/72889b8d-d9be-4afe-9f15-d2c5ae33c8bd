'use client'

import { useState, useMemo } from 'react'
import { Search, Filter, Grid, List } from 'lucide-react'
import { allCars, RaceCar } from '@/data/cars'
import { RaceCarCard } from '@/components/RaceCarCard'
import { FilterPanel } from '@/components/FilterPanel'

type ViewMode = 'grid' | 'list'
type SortOption = 'name' | 'year' | 'power' | 'topSpeed'

export default function HallOfFame() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<RaceCar['category'] | 'All'>('All')
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>('All')
  const [sortBy, setSortBy] = useState<SortOption>('name')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [showFilters, setShowFilters] = useState(false)

  // Get unique manufacturers
  const manufacturers = useMemo(() => {
    const unique = [...new Set(allCars.map(car => car.manufacturer))]
    return ['All', ...unique.sort()]
  }, [])

  // Filter and sort cars
  const filteredAndSortedCars = useMemo(() => {
    let filtered = allCars.filter(car => {
      const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          car.manufacturer.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || car.category === selectedCategory
      const matchesManufacturer = selectedManufacturer === 'All' || car.manufacturer === selectedManufacturer

      return matchesSearch && matchesCategory && matchesManufacturer
    })

    // Sort the filtered results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'year':
          return b.year - a.year
        case 'power':
          return b.power - a.power
        case 'topSpeed':
          return b.topSpeed - a.topSpeed
        case 'name':
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, selectedManufacturer, sortBy])

  return (
    <div className="min-h-screen racing-gradient-bg">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 racing-red-gradient rounded-sm flex items-center justify-center">
              <span className="text-white font-bold">V</span>
            </div>
            <span className="text-xl font-bold text-white racing-title">VELOCITY RACING</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-red-400 transition-colors racing-subtitle text-sm">HOME</a>
            <a href="/cars" className="text-red-400 racing-subtitle text-sm">CARS</a>
            <a href="/races" className="text-white hover:text-red-400 transition-colors racing-subtitle text-sm">RACES</a>
            <a href="/news" className="text-white hover:text-red-400 transition-colors racing-subtitle text-sm">NEWS</a>
            <a href="/gallery" className="text-white hover:text-red-400 transition-colors racing-subtitle text-sm">GALLERY</a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="relative py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black text-white racing-title mb-6">
            HALL OF
            <br />
            <span className="racing-gold-gradient bg-clip-text text-transparent">FAME</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore the most legendary racing cars in automotive history. Each machine represents
            the pinnacle of engineering, design, and performance.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-32 h-1 racing-red-gradient opacity-30 rotate-45"></div>
        <div className="absolute bottom-1/4 right-10 w-24 h-1 racing-gold-gradient opacity-30 -rotate-45"></div>
      </div>

      {/* Search and Filter Bar */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search cars, manufacturers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-input border border-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50"
              />
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  showFilters
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-red-600/20'
                }`}
              >
                <Filter size={16} />
                <span className="text-sm racing-subtitle">FILTERS</span>
              </button>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-4 py-2 bg-input border border-border rounded-lg text-white text-sm racing-subtitle focus:outline-none focus:ring-2 focus:ring-red-500/50"
              >
                <option value="name">Sort by Name</option>
                <option value="year">Sort by Year</option>
                <option value="power">Sort by Power</option>
                <option value="topSpeed">Sort by Top Speed</option>
              </select>

              {/* View Toggle */}
              <div className="flex items-center bg-gray-800/50 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${
                    viewMode === 'grid' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid size={16} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${
                    viewMode === 'list' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <FilterPanel
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedManufacturer={selectedManufacturer}
            onManufacturerChange={setSelectedManufacturer}
            manufacturers={manufacturers}
          />
        </div>
      )}

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-400 text-sm">
            Showing <span className="text-white font-bold">{filteredAndSortedCars.length}</span> of{' '}
            <span className="text-white font-bold">{allCars.length}</span> legendary machines
          </p>
          {(searchTerm || selectedCategory !== 'All' || selectedManufacturer !== 'All') && (
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
                setSelectedManufacturer('All')
              }}
              className="text-red-400 hover:text-red-300 text-sm racing-subtitle"
            >
              CLEAR FILTERS
            </button>
          )}
        </div>
      </div>

      {/* Car Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {filteredAndSortedCars.length > 0 ? (
          <div className={`
            ${viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-4'
            }
          `}>
            {filteredAndSortedCars.map((car) => (
              <RaceCarCard key={car.id} car={car} viewMode={viewMode} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">🏎️</div>
            <h3 className="text-2xl font-bold text-white racing-title mb-4">No Cars Found</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Try adjusting your search criteria or filters to find the racing legends you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}