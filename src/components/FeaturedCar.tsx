'use client'

import { Star, Calendar, Zap, Weight } from 'lucide-react'
import { featuredCars } from '@/data/cars'

export function FeaturedCar() {
  // Get the first featured car for display
  const featuredCar = featuredCars[0]

  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-gold-500/50 transition-all duration-300 championship-glow">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold racing-subtitle">FEATURED CAR</h2>
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-xs text-gray-400 racing-subtitle">CHAMPION</span>
        </div>
      </div>

      {/* Featured Car Image */}
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 group">
        <img
          src="/generated/featured_car.jpg"
          alt={featuredCar.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gold-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

        {/* Championship badge */}
        <div className="absolute top-4 right-4 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold racing-subtitle">
          2024
        </div>
      </div>

      {/* Car Details */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-bold racing-title mb-1">{featuredCar.name}</h3>
          <p className="text-sm text-gray-400">{featuredCar.manufacturer} • {featuredCar.category}</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-red-400" />
              <div>
                <div className="text-sm font-bold text-white">{featuredCar.power} HP</div>
                <div className="text-xs text-gray-500">Max Power</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-gold-400" />
              <div>
                <div className="text-sm font-bold text-white">{featuredCar.year}</div>
                <div className="text-xs text-gray-500">Year</div>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 text-blue-400 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              </div>
              <div>
                <div className="text-sm font-bold text-white">{featuredCar.topSpeed}</div>
                <div className="text-xs text-gray-500">Top Speed</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Weight className="w-4 h-4 text-gray-400" />
              <div>
                <div className="text-sm font-bold text-white">{featuredCar.weight}kg</div>
                <div className="text-xs text-gray-500">Weight</div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full racing-gold-gradient text-black font-bold py-3 rounded-lg racing-subtitle hover:scale-105 transition-all duration-300 championship-glow">
          VIEW DETAILS
        </button>
      </div>

      {/* Bottom decoration */}
      <div className="mt-6 pt-4 border-t border-gray-800">
        <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
          <div className="w-2 h-2 rounded-full racing-gold-gradient"></div>
          <span className="racing-subtitle">HALL OF FAME INDUCTEE</span>
          <div className="w-2 h-2 rounded-full racing-gold-gradient"></div>
        </div>
      </div>
    </div>
  )
}