export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: 'Cinematic Videos' | 'Reels' | 'AI Videos' | 'Photography';
  thumbnailUrl: string;
  videoUrl?: string; // Direct MP4 link
  aspectRatio: '16:9' | '9:16' | '4:3' | '1:1';
  duration?: string;
  client?: string;
  role?: string;
  year?: string;
  isComingSoon?: boolean;
}

export interface CaseStudy {
  id: string;
  projectName: string;
  result: string;
  platform: 'Instagram' | 'YouTube' | 'TikTok' | 'General';
  category: string;
  explanation: string;
  beforeValue?: string;
  afterValue?: string;
  screenshotPlaceholderType: 'analytics' | 'reels' | 'dashboard';
}

export interface ProcessStep {
  phase: string;
  title: string;
  description: string;
  duration: string;
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  quote: string;
  isPlaceholder?: boolean;
}

