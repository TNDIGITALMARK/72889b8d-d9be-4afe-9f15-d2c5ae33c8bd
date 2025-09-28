'use client'

import { Trophy, Calendar, MapPin, User, Medal, Star } from 'lucide-react'
import { RaceCar } from '@/data/cars'

interface TimelineComponentProps {
  car: RaceCar
}

export function TimelineComponent({ car }: TimelineComponentProps) {
  return (
    <div className="space-y-8 speed-slide">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white racing-title mb-4">Racing History</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Chronicle of victories and memorable moments that made the {car.name} a racing legend
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 racing-red-gradient opacity-60"></div>

        <div className="space-y-12">
          {car.racingHistory.map((event, index) => (
            <div key={index} className="relative flex items-start space-x-8">
              {/* Timeline Marker */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 racing-red-gradient rounded-full flex items-center justify-center border-4 border-black">
                  {event.result.includes('1st') ? (
                    <Trophy className="w-8 h-8 text-white" />
                  ) : event.result.includes('2nd') ? (
                    <Medal className="w-8 h-8 text-white" />
                  ) : (
                    <Star className="w-8 h-8 text-white" />
                  )}
                </div>
              </div>

              {/* Event Content */}
              <div className="flex-1 pb-8">
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-red-500/50 transition-all duration-300 racing-card">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white racing-title mb-2">{event.event}</h3>
                      <div className="flex items-center space-x-4 text-gray-400">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{event.year}</span>
                        </div>
                        {event.driver && (
                          <>
                            <div className="w-px h-4 bg-gray-600"></div>
                            <div className="flex items-center space-x-2">
                              <User className="w-4 h-4" />
                              <span>{event.driver}</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Result Badge */}
                    <div className="mt-4 md:mt-0">
                      <div className={`px-4 py-2 rounded-full text-sm font-bold racing-subtitle ${
                        event.result.includes('1st')
                          ? 'racing-gold-gradient text-black championship-glow'
                          : event.result.includes('2nd')
                          ? 'bg-gray-300 text-black'
                          : event.result.includes('3rd')
                          ? 'bg-orange-600 text-white'
                          : 'bg-red-600 text-white'
                      }`}>
                        {event.result}
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-red-400" />
                        <span className="text-white font-semibold">{event.event}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Trophy className="w-5 h-5 text-gold-400" />
                        <span className="text-gray-300">Result: {event.result}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-blue-400" />
                        <span className="text-gray-300">Year: {event.year}</span>
                      </div>
                      {event.driver && (
                        <div className="flex items-center space-x-3">
                          <User className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">Driver: {event.driver}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Event Impact */}
                  <div className="mt-6 pt-6 border-t border-gray-800">
                    <p className="text-gray-300 text-sm">
                      {event.result.includes('1st') &&
                        "This victory solidified the car's reputation as a dominant force in racing history."
                      }
                      {event.result.includes('2nd') &&
                        "A strong performance that demonstrated the car's competitive capabilities."
                      }
                      {(!event.result.includes('1st') && !event.result.includes('2nd')) &&
                        "An important milestone in the car's competitive journey."
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Racing Statistics Summary */}
      <div className="bg-gradient-to-r from-red-600/10 to-gold-600/10 rounded-2xl p-8 border border-red-500/20">
        <h3 className="text-2xl font-bold text-white racing-title mb-6">Racing Legacy Summary</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 racing-gold-gradient rounded-full flex items-center justify-center mx-auto mb-3">
              <Trophy className="w-8 h-8 text-black" />
            </div>
            <div className="text-2xl font-bold text-white racing-title">
              {car.racingHistory.filter(event => event.result.includes('1st')).length}
            </div>
            <div className="text-sm text-gray-400 racing-subtitle">VICTORIES</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-3">
              <Medal className="w-8 h-8 text-gray-700" />
            </div>
            <div className="text-2xl font-bold text-white racing-title">
              {car.racingHistory.filter(event => event.result.includes('2nd')).length}
            </div>
            <div className="text-sm text-gray-400 racing-subtitle">SECOND PLACE</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-white racing-title">
              {car.racingHistory.length}
            </div>
            <div className="text-sm text-gray-400 racing-subtitle">TOTAL RACES</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 racing-red-gradient rounded-full flex items-center justify-center mx-auto mb-3">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-white racing-title">
              {Math.max(...car.racingHistory.map(event => event.year)) - Math.min(...car.racingHistory.map(event => event.year)) + 1}
            </div>
            <div className="text-sm text-gray-400 racing-subtitle">ACTIVE YEARS</div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-gray-300 max-w-3xl mx-auto">
              The {car.name} competed at the highest levels of motorsport, establishing itself as one of the most successful and iconic racing cars of the {car.year}s era. Its legacy continues to inspire racing enthusiasts and automotive engineers worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}