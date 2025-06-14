import React from 'react'
import Home from './componets/Home'

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 px-4 py-10 font-mono relative overflow-hidden">
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-2 h-full">
          {Array.from({length: 144}).map((_, i) => (
            <div key={i} className={`
              ${i % 7 === 0 ? 'bg-red-600' : 
                i % 11 === 0 ? 'bg-blue-600' : 
                i % 13 === 0 ? 'bg-yellow-400' : 
                i % 17 === 0 ? 'bg-black' : 'bg-transparent'}
            `}></div>
          ))}
        </div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 border-4 border-red-600 transform rotate-45 animate-pulse"></div>
      <div className="absolute top-32 right-20 w-12 h-12 bg-blue-600 rounded-full opacity-80"></div>
      <div className="absolute top-60 left-1/4 w-20 h-2 bg-yellow-400"></div>
      <div className="absolute bottom-40 right-10 w-8 h-24 bg-black opacity-60"></div>
      <div className="absolute bottom-20 left-16 w-14 h-14 border-3 border-blue-600 bg-yellow-400 transform -rotate-12"></div>

      {/* Dynamic Header with Layered Typography */}
      <div className="text-center mb-20 relative z-10">
        <div className="relative mb-8">
          {/* Background Typography Shadow */}
          <div className="absolute inset-0 transform translate-x-1 translate-y-1">
            <h1 className="text-8xl font-black text-red-600 opacity-30 tracking-tighter uppercase leading-none">
              AI IMAGE
            </h1>
          </div>
          {/* Main Typography */}
          <h1 className="text-8xl font-black text-black tracking-tighter uppercase leading-none relative z-10">
            AI IMAGE
          </h1>
        </div>
        
        {/* Creative Divider */}
        <div className="flex items-center justify-center gap-2 my-6">
          <div className="w-6 h-6 bg-red-600 transform rotate-45"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-red-600 via-yellow-400 to-blue-600"></div>
          <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 via-black to-red-600"></div>
          <div className="w-6 h-6 bg-yellow-400"></div>
        </div>

        <div className="relative">
          {/* Background Typography Shadow */}
          <div className="absolute inset-0 transform translate-x-2 translate-y-2">
            <h1 className="text-8xl font-black text-blue-600 opacity-20 tracking-tighter uppercase leading-none">
              ENHANCER
            </h1>
          </div>
          {/* Main Typography */}
          <h1 className="text-8xl font-black text-black tracking-tighter uppercase leading-none relative z-10">
            ENHANCER
          </h1>
        </div>

        {/* Subtitle with Geometric Frame */}
        <div className="mt-12 relative">
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-600"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-600 rounded-full"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 transform rotate-45"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-black"></div>
          <div className="border-2 border-black bg-white px-8 py-4">
            <p className="text-sm text-black font-bold uppercase tracking-[0.3em]">
              Transform • Enhance • Create
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Container with Creative Frame */}
      <div className="w-full max-w-4xl relative z-10">
        {/* Decorative Corner Elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-600 transform rotate-45 z-20"></div>
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 rounded-full z-20"></div>
        <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-yellow-400 z-20"></div>
        <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-black z-20"></div>
        
        {/* Creative Multi-layer Border */}
        <div className="bg-black p-1">
          <div className="bg-gradient-to-br from-red-600 via-yellow-400 to-blue-600 p-1">
            <div className="bg-white p-1">
              <div className="bg-zinc-50 border-2 border-dashed border-black p-8 relative">
                {/* Inner decorative elements */}
                <div className="absolute top-2 left-2 w-3 h-3 bg-red-600"></div>
                <div className="absolute top-2 right-2 w-3 h-3 bg-blue-600 rounded-full"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 bg-yellow-400 transform rotate-45"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 bg-black"></div>
                
                <Home />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Creative Footer Section */}
      <div className="mt-16 relative z-10">
        {/* Geometric Pattern Above Footer */}
        <div className="flex justify-center mb-8">
          <div className="grid grid-cols-7 gap-1">
            <div className="w-2 h-2 bg-red-600"></div>
            <div className="w-2 h-2 bg-white border border-black"></div>
            <div className="w-2 h-2 bg-blue-600"></div>
            <div className="w-2 h-2 bg-yellow-400"></div>
            <div className="w-2 h-2 bg-black"></div>
            <div className="w-2 h-2 bg-white border border-black"></div>
            <div className="w-2 h-2 bg-red-600"></div>
            <div className="w-2 h-2 bg-blue-600"></div>
            <div className="w-2 h-2 bg-white border border-black"></div>
            <div className="w-2 h-2 bg-yellow-400"></div>
            <div className="w-2 h-2 bg-white border border-black"></div>
            <div className="w-2 h-2 bg-black"></div>
            <div className="w-2 h-2 bg-red-600"></div>
            <div className="w-2 h-2 bg-blue-600"></div>
          </div>
        </div>

        {/* Footer Text with Creative Layout */}
        <div className="text-center">
         
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-600 opacity-20"></div>
            <div className="relative bg-white px-6 py-2 border-2 border-black">
              <span className="text-sm text-black font-bold uppercase tracking-wide">
                Powered by <span className="text-red-600 font-black">YASHIKA</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Side Elements */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <div className="flex flex-col gap-2">
          <div className="w-1 h-8 bg-red-600"></div>
          <div className="w-1 h-6 bg-blue-600"></div>
          <div className="w-1 h-10 bg-yellow-400"></div>
          <div className="w-1 h-4 bg-black"></div>
        </div>
      </div>
      
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <div className="flex flex-col gap-2">
          <div className="w-1 h-6 bg-blue-600"></div>
          <div className="w-1 h-8 bg-yellow-400"></div>
          <div className="w-1 h-4 bg-red-600"></div>
          <div className="w-1 h-10 bg-black"></div>
        </div>
      </div>
    </div>
  )
}

export default App