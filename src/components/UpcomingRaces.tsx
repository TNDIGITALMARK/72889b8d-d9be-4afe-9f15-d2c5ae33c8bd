'use client'

import { Calendar, MapPin, Clock } from 'lucide-react'

interface Race {
  id: string
  name: string
  location: string
  date: string
  time: string
  category: string
}

const upcomingRaces: Race[] = [
  {
    id: '1',
    name: 'MONACO GP',
    location: 'Monaco',
    date: 'MAY 28',
    time: '15:00',
    category: 'Formula 1'
  },
  {
    id: '2',
    name: 'SILVERSTONE',
    location: 'UK',
    date: 'JUL 9',
    time: '14:30',
    category: 'Formula 1'
  },
  {
    id: '3',
    name: 'SILVERSTONE',
    location: 'UK',
    date: 'JUL 9',
    time: '14:30',
    category: 'Formula 1'
  },
  {
    id: '4',
    name: 'SUZUKA CIRCUIT',
    location: 'Japan',
    date: 'OCT 22',
    time: '13:00',
    category: 'Formula 1'
  }
]

export function UpcomingRaces() {
  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-red-500/50 transition-all duration-300">
      <h2 className="text-xl font-bold text-white mb-6 racing-subtitle">UPCOMING RACES</h2>

      <div className="space-y-4">
        {upcomingRaces.map((race, index) => (
          <div
            key={race.id}
            className="group border border-gray-800/50 rounded-lg p-4 hover:border-red-500/30 transition-all duration-300 racing-hover"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full racing-red-gradient"></div>
                <span className="text-sm font-bold text-white racing-subtitle">{race.name}</span>
              </div>
              <span className="text-xs text-gray-500 bg-gray-800/50 px-2 py-1 rounded racing-subtitle">
                {race.category}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin size={14} />
                <span>{race.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Calendar size={14} />
                  <span>{race.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Clock size={14} />
                  <span>{race.time}</span>
                </div>
              </div>
            </div>

            {/* Race progress indicator */}
            <div className="mt-3 h-1 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full racing-red-gradient transition-all duration-500 group-hover:w-full"
                style={{ width: `${25 * (index + 1)}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* View all races button */}
      <div className="mt-6 pt-4 border-t border-gray-800">
        <button className="w-full text-center text-sm text-gray-400 hover:text-red-400 transition-colors racing-subtitle py-2 hover:bg-red-500/5 rounded-md">
          VIEW ALL RACES
        </button>
      </div>
    </div>
  )
}