
import type React from 'react';
import type { IconName } from './components/Icon';

export interface Deal {
  id: string;
  title: string;
  status: string;
  value: number;
  currency: string;
  probability: number;
  expectedCloseDate: string;
  assignedTo: string[];
  company: string;
  stageId: string;
}

export interface PipelineStage {
  id: string;
  title: string;
  icon: IconName;
  color: string;
  deals: Deal[];
}
