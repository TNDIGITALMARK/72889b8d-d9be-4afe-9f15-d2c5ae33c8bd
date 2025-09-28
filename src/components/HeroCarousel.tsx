'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { featuredCars } from '@/data/cars'

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredCars.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredCars.length) % featuredCars.length)
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  const currentCar = featuredCars[currentSlide]

  return (
    <div className="relative h-[80vh] min-h-[600px] overflow-hidden">
      {/* Background with subtle checkered pattern */}
      <div className="absolute inset-0 checkered-bg opacity-20"></div>

      {/* Main Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 speed-slide">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black text-white racing-title">
                UNLEASH YOUR
                <br />
                <span className="racing-red-gradient bg-clip-text text-transparent">
                  POTENTIAL
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                Experience the power of precision engineering and speed
              </p>
            </div>

            {/* CTA Button */}
            <button className="racing-red-gradient px-8 py-4 rounded-md text-white font-bold racing-subtitle tracking-wide hover:scale-105 transition-all duration-300 racing-glow">
              EXPLORE CARS
            </button>
          </div>

          {/* Car Showcase */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              {/* Placeholder for car image - using gradient for now */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-gray-900 to-black flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-6xl mb-4">🏎️</div>
                  <h3 className="text-2xl font-bold mb-2">{currentCar.name}</h3>
                  <p className="text-lg text-gray-300">{currentCar.year} • {currentCar.manufacturer}</p>
                  <div className="mt-4 flex justify-center space-x-4 text-sm">
                    <span className="bg-red-600 px-3 py-1 rounded">{currentCar.power}HP</span>
                    <span className="bg-yellow-600 px-3 py-1 rounded">{currentCar.topSpeed}km/h</span>
                  </div>
                </div>
              </div>

              {/* Racing stripes effect */}
              <div className="absolute top-0 left-0 w-full h-2 racing-red-gradient opacity-75"></div>
              <div className="absolute bottom-0 left-0 w-full h-2 racing-gold-gradient opacity-75"></div>
            </div>

            {/* Navigation Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={20} />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {featuredCars.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'racing-red-gradient racing-glow'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-32 h-1 racing-gold-gradient opacity-60 rotate-45"></div>
      <div className="absolute bottom-1/4 left-10 w-24 h-1 racing-red-gradient opacity-60 -rotate-45"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
    </div>
  )
}