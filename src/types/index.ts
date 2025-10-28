export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  details: string[];
  category: 'political' | 'military' | 'social' | 'international';
}

export interface HistoricalDocument {
  id: string;
  title: string;
  date: string;
  type: 'agreement' | 'law' | 'report' | 'memoir' | 'study';
  description: string;
  url?: string;
  importance: 'primary' | 'secondary' | 'supplementary';
}

export interface AnalysisPoint {
  id: string;
  category: string;
  title: string;
  content: string[];
  evidence: string[];
  counterArguments?: string[];
}

export interface SearchResult {
  id: string;
  title: string;
  content: string;
  section: string;
  relevance: number;
}

export interface NavigationItem {
  path: string;
  label: string;
  icon: string;
  description: string;
}
