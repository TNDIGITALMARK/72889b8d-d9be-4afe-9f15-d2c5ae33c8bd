'use client'

import { useState, useEffect } from 'react'

interface StatItem {
  label: string
  value: string
  unit: string
}

const stats: StatItem[] = [
  { label: 'TOP SPEED', value: '360', unit: 'KM/H' },
  { label: 'ACCELERATION', value: '2.8', unit: '0-100 KM/H' },
  { label: 'DOWNFORCE', value: '1200', unit: 'KG AT 200' }
]

function AnimatedCounter({ end, duration = 2000 }: { end: number, duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime = Date.now()
    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(end * easeOutQuart))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    animate()
  }, [end, duration])

  return <span>{count}</span>
}

export function RacingStats() {
  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-red-500/50 transition-all duration-300">
      <h2 className="text-xl font-bold text-white mb-6 racing-subtitle">RACING STATISTICS</h2>

      <div className="space-y-6">
        {stats.map((stat, index) => (
          <div key={index} className="group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400 racing-subtitle">{stat.label}</span>
              <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center border-2 border-red-600/30 group-hover:border-red-500 group-hover:racing-glow transition-all duration-300">
                <div className="w-4 h-4 rounded-full racing-red-gradient"></div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-2xl font-black text-white racing-title">
                <AnimatedCounter end={parseInt(stat.value.replace('.', ''))} />
                {stat.value.includes('.') && <span>.{stat.value.split('.')[1]}</span>}
              </div>
              <div className="text-xs text-gray-500 racing-subtitle">{stat.unit}</div>
            </div>

            {/* Progress bar effect */}
            <div className="mt-2 h-1 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full racing-red-gradient transition-all duration-1000 ease-out"
                style={{
                  width: `${Math.min(parseInt(stat.value.replace('.', '')) / 10, 100)}%`,
                  animation: 'speed-slide 1.5s ease-out'
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom accent */}
      <div className="mt-6 pt-4 border-t border-gray-800">
        <div className="text-center">
          <span className="text-xs text-gray-500 racing-subtitle">PERFORMANCE METRICS</span>
        </div>
      </div>
    </div>
  )
}