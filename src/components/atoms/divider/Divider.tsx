import React from 'react';

interface DividerProps {
  width?: number;
}

export function Divider({ width = 120 }: DividerProps) {
  return <div className="bg-[#4075FB] h-1" style={{ width }} />;
}
