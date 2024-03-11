import { cn } from "@/lib/utils";
import React from "react";

interface GraphicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  information?: number | string;
  className: string;
}

export function GraphicCard({ title, information, className, ...props }: GraphicCardProps) {
  return (
    <div 
      {...props} 
      className={cn(className, 'grow w-full lg:w-5/12 rounded-md px-2 py-3  bg-gradient-to-r shadow-md')}
    >
      <span className="text-lg text-white font-medium">{title}</span>
      <h4 className="text-3xl text-white font-bold">{information || 'N/A'}</h4>
    </div>
  )
}