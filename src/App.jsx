import React from 'react'
import Home from './componets/Home'

const App = () => {
  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen overflow-hidden py-8 px-4' 
         style={{
           background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 25%, #16213e 50%, #0f3460 75%, #533a7b 100%)',
         }}>
      
      {/* Animated Grid Background */}
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute inset-0' 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px',
               animation: 'gridMove 20s linear infinite'
             }}>
        </div>
      </div>

      {/* Floating Particles */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className='absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className='relative z-10 text-center mb-8'>
        <div className='relative inline-block'>
          {/* <div className='absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg blur opacity-30 animate-pulse'></div> */}
          <h1 className='relative text-5xl font-bold mb-5 px-6 py-3 rounded-lg bg-black bg-opacity-50 backdrop-blur-sm border border-cyan-400 border-opacity-30'
               style={{
                background: 'linear-gradient(90deg, #00ffff, #ff00ff, #ffff00, #00ffff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% 100%',
                animation: 'colorShift 3s ease-in-out infinite',
                textShadow: '0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(255, 0, 255, 0.3)'
               }}>
            AI IMAGE ENHANCER
          </h1>
        </div>
        
        <div className='relative'>
          <p className='text-lg mb-5 text-cyan-300 font-mono tracking-wider'
             style={{
               textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
               animation: 'glow 2s ease-in-out infinite alternate'
             }}>
            &gt; UPLOAD YOUR IMAGE AND LET AI ENHANCE IT IN SECONDS! &lt;
          </p>
          
          {/* Scanning line effect */}
          <div className='absolute inset-0 pointer-events-none overflow-hidden'>
            <div className='absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent'
                 style={{
                   animation: 'scanLine 3s linear infinite'
                 }}>
            </div>
          </div>
        </div>
      </div>
      
      {/* Home Component Container */}
      <div className='relative z-10 w-full max-w-4xl'>
        <div className='relative'>
          <div className='absolute -inset-2 bg-gradient-to-r from-purple-600 via-cyan-400 to-purple-600 rounded-xl blur opacity-20 animate-pulse'></div>
          <div className='relative bg-black bg-opacity-40 backdrop-blur-md rounded-xl border border-cyan-400 border-opacity-30 p-1'
               style={{
                 boxShadow: '0 0 50px rgba(0, 255, 255, 0.2), inset 0 0 20px rgba(0, 255, 255, 0.1)'
               }}>
            <Home/>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='relative z-10 text-sm mt-6 text-center'>
        <div className='inline-block px-4 py-2 rounded-full bg-black bg-opacity-50 backdrop-blur-sm border border-purple-500 border-opacity-30'>
          <span className='text-purple-300 font-mono tracking-widest'
                style={{
                  textShadow: '0 0 10px rgba(147, 51, 234, 0.5)'
                }}>
            POWERED BY YASHIKA
          </span>
        </div>
        
        {/* Pulsing dots */}
        <div className='flex justify-center mt-3 space-x-2'>
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className='w-2 h-2 bg-cyan-400 rounded-full'
              style={{
                animation: `pulse 1.5s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>

      
    </div>
  )
}

export default App

