import React from 'react';
import type { Deal } from '../types';

interface DealCardProps {
  deal: Deal;
}

const DealCard: React.FC<DealCardProps> = ({ deal }) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value).replace(/,/g, ' ');
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, dealData: Deal) => {
    e.dataTransfer.setData('dealId', dealData.id);
    e.dataTransfer.setData('sourceStageId', dealData.stageId);
    e.currentTarget.style.opacity = '0.5';
    e.currentTarget.style.transform = 'rotate(2deg)';
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.style.opacity = '1';
    e.currentTarget.style.transform = 'rotate(0deg)';
  };

  const getStatusClasses = (status: string): string => {
    switch (status) {
      case 'WIN':
        return 'bg-green-100 text-green-800';
      case 'IN_PROGRESS':
        return 'bg-yellow-100 text-yellow-800';
      case 'OPEN':
        return 'bg-blue-100 text-blue-800';
      case 'LOOSE':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div 
      className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200 cursor-grab active:cursor-grabbing"
      draggable="true"
      onDragStart={(e) => handleDragStart(e, deal)}
      onDragEnd={handleDragEnd}
    >
      <div className="mb-3">
        <h3 className="font-semibold text-gray-800 h-10 leading-tight line-clamp-2">{deal.title}</h3>
        <span className={`inline-block mt-1 text-xs font-medium px-2 py-0.5 rounded-full uppercase tracking-wide ${getStatusClasses(deal.status)}`}>
          {deal.status.replace('_', ' ')}
        </span>
      </div>
      <div className="space-y-1.5 text-sm mb-4">
        <div className="flex justify-between">
          <span className="text-gray-500">Value</span>
          <span className="font-medium text-gray-800">{formatCurrency(deal.value)} {deal.currency}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Probability</span>
          <span className="font-medium text-gray-800">{deal.probability}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Expected close</span>
          <span className="font-medium text-gray-800">{deal.expectedCloseDate}</span>
        </div>
      </div>
      <div>
        <h4 className="font-medium text-gray-800 text-sm mb-2">Open deal</h4>
        <div className="flex flex-wrap gap-2 mb-2">
            {deal.assignedTo.map(name => (
                <span key={name} className="bg-gray-100 text-gray-700 text-sm font-medium px-2.5 py-1 rounded-full">
                    {name}
                </span>
            ))}
        </div>
        <p className="text-sm text-gray-500">{deal.company}</p>
      </div>
    </div>
  );
};

export default DealCard;