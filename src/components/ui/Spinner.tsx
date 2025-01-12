import React from 'react';

export default function Spinner() {
  return (
    <div className="w-5 h-5 relative">
      <div className="absolute w-full h-full border-2 border-white/30 border-t-white rounded-full animate-spin" />
    </div>
  );
}