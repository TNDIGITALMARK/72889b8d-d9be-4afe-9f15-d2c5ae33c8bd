'use client'

import { Engine, Cog, Suspension, Disc, Gauge } from 'lucide-react'
import { RaceCar } from '@/data/cars'

interface SpecSheetProps {
  car: RaceCar
}

export function SpecSheet({ car }: SpecSheetProps) {
  const specs = [
    {
      icon: Engine,
      category: 'ENGINE',
      items: [
        { label: 'Engine Type', value: car.specifications.engine },
        { label: 'Max Power', value: `${car.power} HP` },
        { label: 'Configuration', value: car.specifications.engine.includes('V12') ? 'V12' : car.specifications.engine.includes('V8') ? 'V8' : 'Other' }
      ]
    },
    {
      icon: Cog,
      category: 'TRANSMISSION',
      items: [
        { label: 'Transmission', value: car.specifications.transmission },
        { label: 'Drive Type', value: car.specifications.transmission.includes('AWD') ? 'All-Wheel Drive' : 'Rear-Wheel Drive' }
      ]
    },
    {
      icon: Suspension,
      category: 'CHASSIS',
      items: [
        { label: 'Suspension', value: car.specifications.suspension },
        { label: 'Weight', value: `${car.weight} kg` }
      ]
    },
    {
      icon: Disc,
      category: 'BRAKES',
      items: [
        { label: 'Brake System', value: car.specifications.brakes },
        { label: 'Type', value: 'Racing Spec' }
      ]
    },
    {
      icon: Gauge,
      category: 'PERFORMANCE',
      items: [
        { label: 'Top Speed', value: `${car.topSpeed} km/h` },
        { label: 'Power to Weight', value: `${(car.power / car.weight * 1000).toFixed(1)} HP/kg` },
        { label: 'Category', value: car.category }
      ]
    }
  ]

  return (
    <div className="space-y-8 speed-slide">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white racing-title mb-4">Technical Specifications</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Detailed engineering specifications and performance data for the {car.name}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {specs.map((spec, index) => {
          const Icon = spec.icon
          return (
            <div
              key={index}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-red-500/50 transition-all duration-300 racing-card"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 racing-red-gradient rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white racing-subtitle">{spec.category}</h3>
              </div>

              <div className="space-y-4">
                {spec.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-between py-3 border-b border-gray-800/50 last:border-b-0">
                    <span className="text-gray-400 text-sm racing-subtitle">{item.label}</span>
                    <span className="text-white font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Performance Chart */}
      <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border">
        <h3 className="text-2xl font-bold text-white racing-title mb-6">Performance Metrics</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Power Gauge */}
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="absolute inset-0 rounded-full border-8 border-gray-800"></div>
              <div
                className="absolute inset-0 rounded-full border-8 border-red-500 border-t-transparent"
                style={{
                  transform: `rotate(${(car.power / 1000) * 270}deg)`,
                  transition: 'transform 2s ease-out'
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{car.power}</div>
                  <div className="text-xs text-gray-400">HP</div>
                </div>
              </div>
            </div>
            <div className="racing-subtitle text-sm text-gray-400">POWER OUTPUT</div>
          </div>

          {/* Speed Gauge */}
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="absolute inset-0 rounded-full border-8 border-gray-800"></div>
              <div
                className="absolute inset-0 rounded-full border-8 border-blue-500 border-t-transparent"
                style={{
                  transform: `rotate(${(car.topSpeed / 400) * 270}deg)`,
                  transition: 'transform 2s ease-out'
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{car.topSpeed}</div>
                  <div className="text-xs text-gray-400">KM/H</div>
                </div>
              </div>
            </div>
            <div className="racing-subtitle text-sm text-gray-400">TOP SPEED</div>
          </div>

          {/* Weight Ratio */}
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="absolute inset-0 rounded-full border-8 border-gray-800"></div>
              <div
                className="absolute inset-0 rounded-full border-8 border-gold-500 border-t-transparent"
                style={{
                  transform: `rotate(${((car.power / car.weight) / 1) * 270}deg)`,
                  transition: 'transform 2s ease-out'
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-white">{(car.power / car.weight).toFixed(2)}</div>
                  <div className="text-xs text-gray-400">HP/KG</div>
                </div>
              </div>
            </div>
            <div className="racing-subtitle text-sm text-gray-400">POWER TO WEIGHT</div>
          </div>
        </div>
      </div>

      {/* Technical Notes */}
      <div className="bg-gradient-to-r from-red-600/10 to-gold-600/10 rounded-2xl p-8 border border-red-500/20">
        <h3 className="text-xl font-bold text-white racing-title mb-4">Engineering Notes</h3>
        <p className="text-gray-300 mb-6">
          The {car.name} represents the pinnacle of {car.year}s automotive engineering, featuring cutting-edge technology and materials that were revolutionary for its time.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-black/20 rounded-lg">
            <div className="text-2xl font-bold text-red-400">{car.year}</div>
            <div className="text-xs text-gray-400 racing-subtitle">YEAR</div>
          </div>
          <div className="text-center p-4 bg-black/20 rounded-lg">
            <div className="text-2xl font-bold text-blue-400">{car.category}</div>
            <div className="text-xs text-gray-400 racing-subtitle">CLASS</div>
          </div>
          <div className="text-center p-4 bg-black/20 rounded-lg">
            <div className="text-2xl font-bold text-gold-400">LEGEND</div>
            <div className="text-xs text-gray-400 racing-subtitle">STATUS</div>
          </div>
          <div className="text-center p-4 bg-black/20 rounded-lg">
            <div className="text-2xl font-bold text-green-400">ICONIC</div>
            <div className="text-xs text-gray-400 racing-subtitle">RATING</div>
          </div>
        </div>
      </div>
    </div>
  )
}