
import React, { useState } from 'react';
import Icon from './Icon';
import type { IconName } from './Icon';

interface NavItemProps {
  icon: IconName;
  label: string;
  active?: boolean;
  level?: number;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false, level = 0 }) => {
  const activeClasses = active ? 'bg-gray-100 border-l-2 border-gray-800 text-gray-900 font-semibold' : 'text-gray-600 hover:bg-gray-50';
  const paddingLeft = `pl-${6 + level * 4}`;

  return (
    <a href="#" className={`flex items-center text-sm py-2.5 ${paddingLeft} pr-4 transition-colors duration-200 ${activeClasses}`}>
      <Icon name={icon} className="w-5 h-5 mr-3 text-gray-500" />
      <span>{label}</span>
    </a>
  );
};


interface NavSectionProps {
  title: string;
  children: React.ReactNode;
}

const NavSection: React.FC<NavSectionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div>
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="w-full flex justify-between items-center px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider"
            >
                {title}
                <Icon name={isOpen ? 'chevronUp' : 'chevronDown'} className="w-4 h-4" />
            </button>
            {isOpen && <div className="mt-1">{children}</div>}
        </div>
    );
};


const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex-shrink-0 flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <img src="https://demo.openmercato.com/open-mercato.svg" alt="Open Mercato Logo" className="w-8 h-8 mr-3" />
        <h1 className="text-lg font-bold text-gray-800">Open Mercato</h1>
      </div>
      <nav className="flex-1 overflow-y-auto pt-4">
        <NavSection title="Customers">
            <NavItem icon="companies" label="Companies" />
            <NavItem icon="deals" label="Deals" />
            <NavItem icon="createDeal" label="Create deal" level={1} />
            <NavItem icon="salesPipeline" label="Sales Pipeline" active={true} level={1} />
            <NavItem icon="people" label="People" />
        </NavSection>

        <NavSection title="Data Designer">
            <NavItem icon="systemEntities" label="System Entities" />
            <NavItem icon="userEntities" label="User Entities" />
            <NavItem icon="queryIndexes" label="Query Indexes" />
            <NavItem icon="vectorSearch" label="Vector Search" />
        </NavSection>

        <NavSection title="Directory">
            <NavItem icon="organizations" label="Organizations" />
        </NavSection>

        <NavSection title="Auth">
            <NavItem icon="users" label="Users" />
            <NavItem icon="apiKeys" label="API Keys" />
            <NavItem icon="roles" label="Roles" />
        </NavSection>

        <NavSection title="Configuration">
            <NavItem icon="systemStatus" label="System status" />
            <NavItem icon="cache" label="Cache" />
            <NavItem icon="customers" label="Customers" />
            <NavItem icon="dictionaries" label="Dictionaries" />
            <NavItem icon="sales" label="Sales" />
        </NavSection>
        
        <NavSection title="Work Plan">
            <NavItem icon="generalTasks" label="General tasks" />
            <NavItem icon="customerTasks" label="Customer related tasks" />
        </NavSection>

        <NavSection title="Security">
            <NavItem icon="auditLogs" label="Audit Logs" />
        </NavSection>

        <NavSection title="Developers">
            <NavItem icon="apiDocs" label="API documentation" />
        </NavSection>

        <NavSection title="Example">
            <NavItem icon="exampleAdmin" label="Example Admin" />
        </NavSection>
      </nav>
      <div className="p-4 border-t border-gray-200">
        <button className="w-full flex items-center justify-center text-sm py-2.5 px-4 text-gray-600 hover:bg-gray-100 rounded-lg">
            <Icon name="customize" className="w-5 h-5 mr-3 text-gray-500" />
            <span>Customize sidebar</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
