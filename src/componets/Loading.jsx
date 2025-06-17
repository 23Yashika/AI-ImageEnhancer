import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <div className='relative'>
        {/* Outer rotating ring */}
        <div className='absolute inset-0 w-20 h-20 rounded-full border-4 border-transparent border-t-cyan-400 border-r-cyan-400 animate-spin'
             style={{
               filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.6))',
               animation: 'spinOuter 2s linear infinite'
             }}>
        </div>
        
        {/* Middle rotating ring */}
        <div className='absolute inset-2 w-16 h-16 rounded-full border-4 border-transparent border-t-purple-400 border-l-purple-400'
             style={{
               filter: 'drop-shadow(0 0 8px rgba(147, 51, 234, 0.6))',
               animation: 'spinMiddle 1.5s linear infinite reverse'
             }}>
        </div>
        
        {/* Inner rotating ring */}
        <div className='w-20 h-20 rounded-full border-4 border-transparent border-t-pink-400 border-b-pink-400'
             style={{
               filter: 'drop-shadow(0 0 6px rgba(236, 72, 153, 0.6))',
               animation: 'spinInner 1s linear infinite'
             }}>
        </div>
        
        {/* Central pulsing core */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full'
             style={{
               background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(0, 255, 255, 0.4))',
               boxShadow: '0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.4)',
               animation: 'corePulse 1s ease-in-out infinite alternate'
             }}>
        </div>
        
        {/* Orbiting particles */}
        {[0, 1, 2, 3].map(i => (
          <div
            key={i}
            className='absolute w-2 h-2 rounded-full'
            style={{
              background: `linear-gradient(45deg, ${
                i % 2 === 0 ? '#00ffff' : '#ff00ff'
              }, ${i % 2 === 0 ? '#ffff00' : '#ff0080'})`,
              boxShadow: `0 0 10px ${i % 2 === 0 ? 'rgba(0, 255, 255, 0.8)' : 'rgba(255, 0, 255, 0.8)'}`,
              animation: `orbit${i} ${2 + i * 0.5}s linear infinite`,
              transformOrigin: '40px 40px'
            }}
          />
        ))}
        
        {/* Scanning effect */}
        <div className='absolute inset-0 w-20 h-20 rounded-full overflow-hidden pointer-events-none'>
          <div className='absolute w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-80'
               style={{
                 animation: 'loadingScan 2s linear infinite',
                 transformOrigin: 'center'
               }}>
          </div>
        </div>
      </div>
      
      {/* Loading text */}
      <div className='absolute mt-24 text-center'>
        <p className='text-cyan-300 font-mono text-sm tracking-widest'
           style={{
             textShadow: '0 0 10px rgba(0, 255, 255, 0.6)',
             animation: 'textBlink 1.5s ease-in-out infinite'
           }}>
          PROCESSING
          <span style={{ animation: 'dotAnimation 1.5s ease-in-out infinite' }}>
            ...
          </span>
        </p>
      </div>


      
    </div>
  )
}

export default Loading