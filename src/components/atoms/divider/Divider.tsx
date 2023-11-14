import React from 'react';

interface DividerProps {
  width?: number;
}

export function Divider({ width = 120 }: DividerProps) {
  return <div className="h-1 bg-[#4075FB]" style={{ width }} />;
}
