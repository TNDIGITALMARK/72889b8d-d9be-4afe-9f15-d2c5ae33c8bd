'use client'

import { RaceCar } from '@/data/cars'

interface FilterPanelProps {
  selectedCategory: RaceCar['category'] | 'All'
  onCategoryChange: (category: RaceCar['category'] | 'All') => void
  selectedManufacturer: string
  onManufacturerChange: (manufacturer: string) => void
  manufacturers: string[]
}

const categories: Array<RaceCar['category'] | 'All'> = [
  'All',
  'Formula 1',
  'Le Mans',
  'Rally',
  'GT',
  'Prototype'
]

export function FilterPanel({
  selectedCategory,
  onCategoryChange,
  selectedManufacturer,
  onManufacturerChange,
  manufacturers
}: FilterPanelProps) {
  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border speed-slide">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Category Filter */}
        <div>
          <h3 className="text-white font-bold racing-subtitle mb-4">CATEGORY</h3>
          <div className="grid grid-cols-2 gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-4 py-2 rounded-lg text-sm racing-subtitle transition-all duration-300 ${
                  selectedCategory === category
                    ? 'racing-red-gradient text-white racing-glow'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-red-600/20 hover:text-white'
                }`}
              >
                {category === 'All' ? 'ALL CATEGORIES' : category.replace('Le Mans', 'LE MANS')}
              </button>
            ))}
          </div>
        </div>

        {/* Manufacturer Filter */}
        <div>
          <h3 className="text-white font-bold racing-subtitle mb-4">MANUFACTURER</h3>
          <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto">
            {manufacturers.map((manufacturer) => (
              <button
                key={manufacturer}
                onClick={() => onManufacturerChange(manufacturer)}
                className={`px-4 py-2 rounded-lg text-sm racing-subtitle transition-all duration-300 text-left ${
                  selectedManufacturer === manufacturer
                    ? 'racing-gold-gradient text-black championship-glow'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gold-600/20 hover:text-gold-400'
                }`}
              >
                {manufacturer === 'All' ? 'ALL BRANDS' : manufacturer.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="mt-6 pt-6 border-t border-gray-800">
        <h3 className="text-white font-bold racing-subtitle mb-4">QUICK FILTERS</h3>
        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-xs racing-subtitle hover:bg-red-600/20 hover:text-red-400 transition-all duration-300">
            FEATURED ONLY
          </button>
          <button className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-xs racing-subtitle hover:bg-gold-600/20 hover:text-gold-400 transition-all duration-300">
            CHAMPIONSHIP WINNERS
          </button>
          <button className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-xs racing-subtitle hover:bg-blue-600/20 hover:text-blue-400 transition-all duration-300">
            HIGH PERFORMANCE
          </button>
          <button className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-xs racing-subtitle hover:bg-green-600/20 hover:text-green-400 transition-all duration-300">
            VINTAGE CLASSICS
          </button>
        </div>
      </div>
    </div>
  )
}