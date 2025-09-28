'use client'

import { Calendar, Zap, Weight, Trophy, Eye } from 'lucide-react'
import Link from 'next/link'
import { RaceCar } from '@/data/cars'

interface RaceCarCardProps {
  car: RaceCar
  viewMode: 'grid' | 'list'
}

export function RaceCarCard({ car, viewMode }: RaceCarCardProps) {
  if (viewMode === 'list') {
    return (
      <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-red-500/50 transition-all duration-300 racing-card">
        <div className="flex items-center space-x-6">
          {/* Car Image */}
          <div className="relative w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-gray-900 to-black flex items-center justify-center">
              <div className="text-white text-2xl">🏎️</div>
            </div>
            <div className="absolute top-2 right-2">
              <span className="bg-red-600 text-white text-xs px-2 py-1 rounded racing-subtitle">
                {car.category}
              </span>
            </div>
          </div>

          {/* Car Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white racing-title mb-1">{car.name}</h3>
                <p className="text-gray-400 text-sm">{car.manufacturer} • {car.year}</p>
              </div>
              {car.featured && (
                <div className="flex items-center space-x-1 bg-gold-600/20 px-3 py-1 rounded-full">
                  <Trophy className="w-3 h-3 text-gold-400" />
                  <span className="text-xs text-gold-400 racing-subtitle">FEATURED</span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-3 gap-6 mb-4">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-red-400" />
                <div>
                  <div className="text-sm font-bold text-white">{car.power} HP</div>
                  <div className="text-xs text-gray-500">Power</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 text-blue-400 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{car.topSpeed} km/h</div>
                  <div className="text-xs text-gray-500">Top Speed</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Weight className="w-4 h-4 text-gray-400" />
                <div>
                  <div className="text-sm font-bold text-white">{car.weight} kg</div>
                  <div className="text-xs text-gray-500">Weight</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-gray-300 text-sm flex-1 pr-4 line-clamp-2">
                {car.description.substring(0, 120)}...
              </p>
              <Link href={`/cars/${car.id}`}>
                <button className="flex items-center space-x-2 racing-red-gradient px-4 py-2 rounded-lg text-white text-sm font-bold racing-subtitle hover:scale-105 transition-all duration-300">
                  <Eye size={14} />
                  <span>VIEW</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Grid view
  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-border hover:border-red-500/50 transition-all duration-300 racing-card group">
      {/* Car Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-gray-900 to-black flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
          <div className="text-white text-4xl">🏎️</div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-red-600/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full racing-subtitle">
            {car.category}
          </span>
        </div>

        {/* Featured Badge */}
        {car.featured && (
          <div className="absolute top-4 right-4">
            <div className="bg-gold-600/90 backdrop-blur-sm text-black px-3 py-1 rounded-full flex items-center space-x-1">
              <Trophy className="w-3 h-3" />
              <span className="text-xs racing-subtitle font-bold">FEATURED</span>
            </div>
          </div>
        )}

        {/* Year Badge */}
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center space-x-2 text-white">
            <Calendar className="w-4 h-4" />
            <span className="text-lg font-bold racing-title">{car.year}</span>
          </div>
        </div>

        {/* View Button (appears on hover) */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link href={`/cars/${car.id}`}>
            <button className="racing-red-gradient px-4 py-2 rounded-lg text-white text-sm font-bold racing-subtitle flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
              <Eye size={14} />
              <span>VIEW</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Car Details */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-white racing-title mb-1">{car.name}</h3>
          <p className="text-gray-400 text-sm">{car.manufacturer}</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Zap className="w-4 h-4 text-red-400" />
            </div>
            <div className="text-sm font-bold text-white">{car.power}</div>
            <div className="text-xs text-gray-500">HP</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <div className="w-4 h-4 text-blue-400 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              </div>
            </div>
            <div className="text-sm font-bold text-white">{car.topSpeed}</div>
            <div className="text-xs text-gray-500">km/h</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Weight className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-sm font-bold text-white">{car.weight}</div>
            <div className="text-xs text-gray-500">kg</div>
          </div>
        </div>

        <p className="text-gray-300 text-sm line-clamp-2 mb-4">
          {car.description}
        </p>

        {/* Achievements */}
        {car.achievements.length > 0 && (
          <div className="border-t border-gray-800 pt-4">
            <div className="flex items-center space-x-2 mb-2">
              <Trophy className="w-3 h-3 text-gold-400" />
              <span className="text-xs text-gray-400 racing-subtitle">ACHIEVEMENTS</span>
            </div>
            <div className="text-xs text-gray-300">
              {car.achievements[0]}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}