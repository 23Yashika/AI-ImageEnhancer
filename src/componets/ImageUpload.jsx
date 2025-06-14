import React from 'react';

const ImageUpload = (props) => {

    const showImageHandler = (e) =>{
        const file = e.target.files[0];
       if(file){
        props.UploadImageHandler(file);
       }
    }
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Decorative Corner Elements */}
      <div className="absolute -top-3 -left-3 w-6 h-6 bg-red-600 transform rotate-45 z-10"></div>
      <div className="absolute -top-3 -right-3 w-6 h-6 bg-blue-600 rounded-full z-10"></div>
      <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-yellow-400 z-10"></div>
      <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-black z-10"></div>
      
      {/* Main Upload Container */}
      <div className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative">
        {/* Colored Top Border */}
        <div className="h-2 bg-gradient-to-r from-red-600 via-yellow-400 to-blue-600"></div>
        
        <div className="p-8">
          <label
            htmlFor="fileInput"
            className="block w-full cursor-pointer border-3 border-dashed border-black bg-zinc-50 p-12 text-center hover:bg-yellow-50 hover:border-red-600 transition-all duration-300 relative group"
          >
            {/* Inner decorative dots */}
            <div className="absolute top-3 left-3 w-2 h-2 bg-red-600"></div>
            <div className="absolute top-3 right-3 w-2 h-2 bg-blue-600 rounded-full"></div>
            <div className="absolute bottom-3 left-3 w-2 h-2 bg-yellow-400 transform rotate-45"></div>
            <div className="absolute bottom-3 right-3 w-2 h-2 bg-black"></div>
            
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={showImageHandler}
            />
            
            <div className="flex flex-col items-center justify-center">
              {/* Geometric Upload Icon */}
              <div className="mb-6 relative">
                <div className="w-16 h-16 border-4 border-black bg-white flex items-center justify-center relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-blue-600"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 transform rotate-45"></div>
                </div>
              </div>
              
              {/* Typography */}
              <div className="text-center">
                <h3 className="text-2xl font-black uppercase tracking-wide text-black mb-2">
                  Upload Image
                </h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-px bg-black"></div>
                  <div className="w-2 h-2 bg-red-600 transform rotate-45"></div>
                  <div className="w-8 h-px bg-black"></div>
                </div>
                <p className="text-sm font-medium text-black uppercase tracking-widest">
                  Click or Drag to Upload
                </p>
              </div>
              
              {/* Hover Animation Elements */}
              <div className="mt-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-3 h-3 bg-red-600 animate-pulse"></div>
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse delay-100"></div>
                <div className="w-3 h-3 bg-yellow-400 transform rotate-45 animate-pulse delay-200"></div>
              </div>
            </div>
          </label>
          
          {/* Bottom Decorative Bar */}
          <div className="mt-6 flex justify-center">
            <div className="flex gap-1">
              <div className="w-4 h-1 bg-red-600"></div>
              <div className="w-4 h-1 bg-blue-600"></div>
              <div className="w-4 h-1 bg-yellow-400"></div>
              <div className="w-4 h-1 bg-black"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Side Accent Elements */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4">
        <div className="flex flex-col gap-1">
          <div className="w-2 h-6 bg-red-600"></div>
          <div className="w-2 h-4 bg-blue-600"></div>
          <div className="w-2 h-8 bg-yellow-400"></div>
        </div>
      </div>
      
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4">
        <div className="flex flex-col gap-1">
          <div className="w-2 h-4 bg-blue-600"></div>
          <div className="w-2 h-8 bg-black"></div>
          <div className="w-2 h-6 bg-red-600"></div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;