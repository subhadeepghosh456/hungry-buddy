import React from 'react';

const Shrimmer = () => {
    return (   
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
          {Array(15)
            .fill("")
            .map((e,index) => (
              <div className="max-w-sm w-[100%] rounded overflow-hidden h-[250px] bg-slate-300" key={index}></div>
            ))}
        </div>     
    );
  };
  
  export default Shrimmer;
  