import React, { useState, useMemo } from 'react';
import { pipelinesData } from '../constants';
import PipelineColumn from './PipelineColumn';
import type { SalesPipelines } from '../types';
import Icon from './Icon';

const SalesPipeline: React.FC = () => {
  const [allPipelines, setAllPipelines] = useState<SalesPipelines>(pipelinesData);
  const [selectedPipeline, setSelectedPipeline] = useState<string>(Object.keys(pipelinesData)[0]);
  const [ownerFilter, setOwnerFilter] = useState<string>('all');

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetStageId: string) => {
    const dealId = e.dataTransfer.getData('dealId');
    const sourceStageId = e.dataTransfer.getData('sourceStageId');

    if (!dealId || sourceStageId === targetStageId) {
      return;
    }

    setAllPipelines(prevPipelines => {
      const newPipelines: SalesPipelines = JSON.parse(JSON.stringify(prevPipelines));
      const currentPipelineStages = newPipelines[selectedPipeline];
      
      const sourceStage = currentPipelineStages.find((stage) => stage.id === sourceStageId);
      const targetStage = currentPipelineStages.find((stage) => stage.id === targetStageId);
      
      if (!sourceStage || !targetStage) {
          return prevPipelines;
      }
      
      const dealIndex = sourceStage.deals.findIndex((deal) => deal.id === dealId);
      if (dealIndex === -1) {
          return prevPipelines;
      }

      const [movedDeal] = sourceStage.deals.splice(dealIndex, 1);
      movedDeal.stageId = targetStageId;
      targetStage.deals.push(movedDeal);

      return newPipelines;
    });
  };

  const allOwners = useMemo(() => {
    const owners = new Set<string>();
    Object.values(allPipelines).flat().forEach(stage => {
      stage.deals.forEach(deal => {
        deal.assignedTo.forEach(owner => owners.add(owner));
      });
    });
    return ['all', ...Array.from(owners).sort()];
  }, [allPipelines]);

  const displayedStages = useMemo(() => {
    const stages = allPipelines[selectedPipeline] || [];

    if (ownerFilter !== 'all') {
      return stages.map(stage => ({
        ...stage,
        deals: stage.deals.filter(deal => deal.assignedTo.includes(ownerFilter))
      }));
    }

    return stages;
  }, [allPipelines, selectedPipeline, ownerFilter]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Sales Pipeline</h1>
        <div className="flex items-center space-x-4">
            <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">Pipeline</span>
                <select 
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedPipeline}
                    onChange={(e) => setSelectedPipeline(e.target.value)}
                >
                    {Object.keys(allPipelines).map(pipelineName => (
                        <option key={pipelineName} value={pipelineName}>{pipelineName}</option>
                    ))}
                </select>
            </div>
            <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">Owner</span>
                <select 
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={ownerFilter}
                    onChange={(e) => setOwnerFilter(e.target.value)}
                >
                    {allOwners.map(owner => (
                        <option key={owner} value={owner}>{owner === 'all' ? 'All Owners' : owner}</option>
                    ))}
                </select>
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
            <button className="flex items-center bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Icon name="createDeal" className="w-5 h-5 mr-2" />
                <span>Add new deal</span>
            </button>
        </div>
      </div>
      <div className="flex-1 flex gap-4 overflow-x-auto pb-4 -mx-6 px-6">
        {displayedStages.map(stage => (
          <PipelineColumn key={stage.id} stage={stage} onDrop={(e) => handleDrop(e, stage.id)} />
        ))}
      </div>
    </div>
  );
};

export default SalesPipeline;