
import type { PipelineStage } from './types';

export const pipelineData: PipelineStage[] = [
  {
    id: 'loose',
    title: 'Loose',
    icon: 'loose',
    color: 'bg-red-500',
    deals: [
      {
        id: 'deal-1',
        title: 'Cedar Creek Retreat Expansion',
        status: 'LOOSE',
        value: 98000,
        currency: 'USD',
        probability: 0,
        expectedCloseDate: '26 sie 2025',
        assignedTo: ['Taylor Brooks'],
        company: 'Copperleaf Design Co.',
        stageId: 'loose',
      },
    ],
  },
  {
    id: 'marketing-qualified-lead',
    title: 'Marketing Qualified Lead',
    icon: 'marketing',
    color: 'bg-purple-500',
    deals: [],
  },
  {
    id: 'negotiations',
    title: 'Negotiations',
    icon: 'negotiations',
    color: 'bg-yellow-500',
    deals: [
      {
        id: 'deal-2',
        title: 'Redwood Residences Solar Rollout',
        status: 'IN_PROGRESS',
        value: 185000,
        currency: 'USD',
        probability: 55,
        expectedCloseDate: '19 gru 2025',
        assignedTo: ['Mia Johnson', 'Daniel Cho'],
        company: 'Brightside Solar',
        stageId: 'negotiations',
      },
    ],
  },
  {
    id: 'offering',
    title: 'Offering',
    icon: 'offering',
    color: 'bg-green-500',
    deals: [
      {
        id: 'deal-3',
        title: 'Sunset Lofts Battery Upgrade',
        status: 'OPEN',
        value: 82000,
        currency: 'USD',
        probability: 40,
        expectedCloseDate: '8 sty 2026',
        assignedTo: ['Mia Johnson'],
        company: 'Brightside Solar',
        stageId: 'offering',
      },
    ],
  },
  {
    id: 'opportunity',
    title: 'Opportunity',
    icon: 'opportunity',
    color: 'bg-blue-400',
    deals: [
      {
        id: 'deal-4',
        title: 'Midwest Outfitters Expansion',
        status: 'OPEN',
        value: 210000,
        currency: 'USD',
        probability: 35,
        expectedCloseDate: '4 mar 2026',
        assignedTo: ['Lena Ortiz'],
        company: 'Harborview Analytics',
        stageId: 'opportunity',
      },
    ],
  },
  {
    id: 'sales-qualified-lead',
    title: 'Sales Qualified Lead',
    icon: 'salesLead',
    color: 'bg-gray-400',
    deals: [
        {
            id: 'deal-5',
            title: 'Wanderstay Boutique Renovation',
            status: 'IN_PROGRESS',
            value: 145000,
            currency: 'USD',
            probability: 65,
            expectedCloseDate: '9 gru 2025',
            assignedTo: ['Taylor Brooks', 'Naomi Harris'],
            company: 'Copperleaf Design Co.',
            stageId: 'sales-qualified-lead',
        }
    ],
  },
  {
    id: 'stalled',
    title: 'Stalled',
    icon: 'stalled',
    color: 'bg-orange-500',
    deals: [],
  },
  {
    id: 'win',
    title: 'Win',
    icon: 'win',
    color: 'bg-green-600',
    deals: [
        {
            id: 'deal-6',
            title: 'Blue Harbor Grocers Pilot Program',
            status: 'WIN',
            value: 96000,
            currency: 'USD',
            probability: 100,
            expectedCloseDate: '10 paź 2025',
            assignedTo: ['Arjun Patel', 'Lena Ortiz'],
            company: 'Harborview Analytics',
            stageId: 'win',
        }
    ],
  },
];
