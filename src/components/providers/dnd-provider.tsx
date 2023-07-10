import React from 'react';
import { DndProvider as ReactDndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export interface DndProviderProps {
  children: React.ReactNode;
}

export const DndProvider = ({ children }: DndProviderProps) => {
	return <ReactDndProvider backend={HTML5Backend}>{children}</ReactDndProvider>;
};
