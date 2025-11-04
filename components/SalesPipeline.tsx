import React, { useState } from 'react';
import { pipelineData } from '../constants';
import PipelineColumn from './PipelineColumn';
import type { PipelineStage, Deal } from '../types';

const SalesPipeline: React.FC = () => {
  const [stages, setStages] = useState<PipelineStage[]>(pipelineData);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetStageId: string) => {
    const dealId = e.dataTransfer.getData('dealId');
    const sourceStageId = e.dataTransfer.getData('sourceStageId');

    if (!dealId || sourceStageId === targetStageId) {
      return;
    }

    setStages(prevStages => {
      // Use a deep copy to ensure we don't mutate the original state
      const newStages: PipelineStage[] = JSON.parse(JSON.stringify(prevStages));
      const sourceStage = newStages.find((stage) => stage.id === sourceStageId);
      const targetStage = newStages.find((stage) => stage.id === targetStageId);
      
      if (!sourceStage || !targetStage) {
          return prevStages;
      }
      
      const dealIndex = sourceStage.deals.findIndex((deal) => deal.id === dealId);
      if (dealIndex === -1) {
          return prevStages;
      }

      // Move the deal
      const [movedDeal] = sourceStage.deals.splice(dealIndex, 1);
      movedDeal.stageId = targetStageId;
      targetStage.deals.push(movedDeal);

      return newStages;
    });
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <div>
            <h1 className="text-2xl font-bold text-gray-900">Sales Pipeline</h1>
            <p className="text-gray-500 mt-1">Track deals by pipeline stage and drag them between lanes to update progress.</p>
        </div>
        <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-2">Sort by</span>
            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Probability (high to low)</option>
                <option>Probability (low to high)</option>
                <option>Value (high to low)</option>
                <option>Value (low to high)</option>
            </select>
        </div>
      </div>
      <div className="flex-1 flex gap-4 overflow-x-auto pb-4 -mx-6 px-6">
        {stages.map(stage => (
          <PipelineColumn key={stage.id} stage={stage} onDrop={(e) => handleDrop(e, stage.id)} />
        ))}
      </div>
    </div>
  );
};

export default SalesPipeline;
