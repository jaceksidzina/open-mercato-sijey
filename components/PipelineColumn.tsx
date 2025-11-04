import React, { useState } from 'react';
import type { PipelineStage } from '../types';
import DealCard from './DealCard';
import Icon from './Icon';

interface PipelineColumnProps {
  stage: PipelineStage;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
}

const PipelineColumn: React.FC<PipelineColumnProps> = ({ stage, onDrop }) => {
  const dealCount = stage.deals.length;
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    onDrop(e);
    setIsDraggingOver(false);
  };

  return (
    <div 
      className={`w-80 flex-shrink-0 bg-gray-50 rounded-lg p-3 flex flex-col transition-colors duration-200 ${isDraggingOver ? 'bg-blue-100' : ''}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      <div className="flex justify-between items-center mb-4 px-1 min-h-[2rem]">
        <div className="flex items-center min-w-0">
          <Icon name={stage.icon} className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0" />
          <h2 className="font-semibold text-gray-800 whitespace-nowrap text-ellipsis overflow-hidden">{stage.title}</h2>
        </div>
        <div className="flex items-center flex-shrink-0">
          <span className="ml-2 text-sm text-gray-500">Deals: {dealCount}</span>
          <div className={`w-2.5 h-2.5 rounded-full ${stage.color} ml-2`}></div>
        </div>
      </div>
      <div className="space-y-3 flex-1 overflow-y-auto pr-1">
        {dealCount > 0 ? (
          stage.deals.map(deal => (
            <DealCard key={deal.id} deal={deal} />
          ))
        ) : (
          <div className="border-2 border-dashed border-gray-300 rounded-lg h-24 flex items-center justify-center">
            <p className="text-sm text-gray-500">No deals in this stage yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PipelineColumn;