'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { ArrowLeft, Calendar, Zap, Weight, Trophy, Star, Share2, Heart } from 'lucide-react'
import { getCarById } from '@/data/cars'
import { CarGallery } from '@/components/CarGallery'
import { SpecSheet } from '@/components/SpecSheet'
import { TimelineComponent } from '@/components/TimelineComponent'

export default function CarBiography() {
  const params = useParams()
  const carId = params.id as string
  const car = getCarById(carId)
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'history' | 'gallery'>('overview')

  if (!car) {
    return (
      <div className="min-h-screen racing-gradient-bg flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-6">🏎️</div>
          <h1 className="text-3xl font-bold text-white racing-title mb-4">Car Not Found</h1>
          <p className="text-gray-400 mb-8">The racing legend you're looking for doesn't exist in our hall of fame.</p>
          <a
            href="/cars"
            className="racing-red-gradient px-6 py-3 rounded-lg text-white font-bold racing-subtitle inline-flex items-center space-x-2 hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft size={16} />
            <span>BACK TO HALL OF FAME</span>
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen racing-gradient-bg">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <a
              href="/cars"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors racing-hover"
            >
              <ArrowLeft size={16} />
              <span className="racing-subtitle text-sm">BACK TO HALL OF FAME</span>
            </a>
            <div className="w-px h-6 bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 racing-red-gradient rounded-sm flex items-center justify-center">
                <span className="text-white font-bold">V</span>
              </div>
              <span className="text-xl font-bold text-white racing-title">VELOCITY RACING</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-red-400 transition-colors">
              <Share2 size={20} />
            </button>
            <button className="p-2 text-gray-400 hover:text-red-400 transition-colors">
              <Heart size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Car Info */}
            <div className="space-y-8 speed-slide">
              <div className="space-y-4">
                {car.featured && (
                  <div className="inline-flex items-center space-x-2 bg-gold-600/20 px-4 py-2 rounded-full">
                    <Star className="w-4 h-4 text-gold-400" />
                    <span className="text-sm font-bold text-gold-400 racing-subtitle">HALL OF FAME INDUCTEE</span>
                  </div>
                )}
                <h1 className="text-4xl md:text-6xl font-black text-white racing-title">
                  {car.name}
                </h1>
                <div className="flex items-center space-x-6 text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span className="text-lg font-semibold">{car.year}</span>
                  </div>
                  <div className="w-px h-6 bg-gray-600"></div>
                  <span className="text-lg">{car.manufacturer}</span>
                  <div className="w-px h-6 bg-gray-600"></div>
                  <span className="bg-red-600/20 px-3 py-1 rounded-full text-sm racing-subtitle">
                    {car.category}
                  </span>
                </div>
                <p className="text-lg text-gray-300 max-w-2xl">
                  {car.description}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-card/50 rounded-xl border border-border">
                  <Zap className="w-6 h-6 text-red-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white racing-title">{car.power}</div>
                  <div className="text-sm text-gray-400 racing-subtitle">HORSEPOWER</div>
                </div>
                <div className="text-center p-4 bg-card/50 rounded-xl border border-border">
                  <div className="w-6 h-6 text-blue-400 mx-auto mb-2 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                  </div>
                  <div className="text-2xl font-bold text-white racing-title">{car.topSpeed}</div>
                  <div className="text-sm text-gray-400 racing-subtitle">KM/H TOP SPEED</div>
                </div>
                <div className="text-center p-4 bg-card/50 rounded-xl border border-border">
                  <Weight className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white racing-title">{car.weight}</div>
                  <div className="text-sm text-gray-400 racing-subtitle">KILOGRAMS</div>
                </div>
              </div>
            </div>

            {/* Car Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-gray-900 to-black flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-8xl mb-6">🏎️</div>
                    <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
                    <p className="text-lg text-gray-300">The Legend Lives On</p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-4 racing-red-gradient opacity-75"></div>
                <div className="absolute bottom-0 left-0 w-full h-4 racing-gold-gradient opacity-75"></div>

                {/* Category badge */}
                <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                  <span className="text-sm racing-subtitle">{car.category}</span>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 left-6 right-6">
                <div className="bg-card/90 backdrop-blur-sm rounded-xl p-4 border border-border">
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <Trophy className="w-5 h-5 text-gold-400 mx-auto mb-1" />
                      <div className="text-sm font-bold text-white">{car.achievements.length}</div>
                      <div className="text-xs text-gray-400">Achievements</div>
                    </div>
                    <div className="w-px h-8 bg-border"></div>
                    <div className="text-center">
                      <Calendar className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                      <div className="text-sm font-bold text-white">{car.racingHistory.length}</div>
                      <div className="text-xs text-gray-400">Race Wins</div>
                    </div>
                    <div className="w-px h-8 bg-border"></div>
                    <div className="text-center">
                      <Star className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
                      <div className="text-sm font-bold text-white">9.8</div>
                      <div className="text-xs text-gray-400">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center space-x-8">
            {[
              { id: 'overview', label: 'OVERVIEW' },
              { id: 'specs', label: 'SPECIFICATIONS' },
              { id: 'history', label: 'RACING HISTORY' },
              { id: 'gallery', label: 'GALLERY' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-6 px-4 racing-subtitle text-sm border-b-2 transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'border-red-500 text-red-400'
                    : 'border-transparent text-gray-400 hover:text-white hover:border-gray-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {activeTab === 'overview' && (
          <div className="space-y-16 speed-slide">
            {/* Achievements */}
            <section>
              <h2 className="text-3xl font-bold text-white racing-title mb-8">Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {car.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-4 p-6 bg-card/80 rounded-xl border border-border">
                    <div className="w-12 h-12 racing-gold-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{achievement}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Racing Legacy */}
            <section>
              <h2 className="text-3xl font-bold text-white racing-title mb-8">Racing Legacy</h2>
              <div className="bg-card/80 rounded-2xl p-8 border border-border">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {car.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-800">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white racing-title">{car.racingHistory.length}</div>
                    <div className="text-gray-400 racing-subtitle text-sm">MAJOR VICTORIES</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white racing-title">{car.year}s</div>
                    <div className="text-gray-400 racing-subtitle text-sm">GOLDEN ERA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white racing-title">LEGEND</div>
                    <div className="text-gray-400 racing-subtitle text-sm">STATUS</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'specs' && <SpecSheet car={car} />}
        {activeTab === 'history' && <TimelineComponent car={car} />}
        {activeTab === 'gallery' && <CarGallery car={car} />}
      </div>
    </div>
  )
}