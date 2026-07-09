import { PortfolioItem, CaseStudy, ProcessStep, Testimonial } from './types';
// @ts-ignore
import kaifAliJataniImg from './assets/images/kaif_ali_jatani.jpg';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'cattle-farm-cinematic',
    title: 'Cinematic Shoot: Cattle Farm BTS',
    description: 'A professional behind-the-scenes look and cinematic edit of a cattle farm shoot for Kaif Ali Jatani. Features pristine lighting, atmospheric framing, and documentary-style visual storytelling.',
    category: 'Cinematic Videos',
    thumbnailUrl: 'https://img.youtube.com/vi/2HVf4t_wuIU/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/2HVf4t_wuIU',
    aspectRatio: '16:9',
    duration: '00:19',
    client: 'Kaif Ali Jatani',
    role: 'BTS Videographer & Editor',
    year: '2026'
  },
  {
    id: 'kaif-birthday-cinematic-edit',
    title: "Kaif Ali Jatani's Birthday Cinematic",
    description: "A beautifully crafted and high-energy cinematic edit capturing the highlight moments of Kaif Ali Jatani's birthday celebration. Dynamically edited with premium pacing, sound design, and vibrant colors.",
    category: 'Cinematic Videos',
    thumbnailUrl: 'https://img.youtube.com/vi/9Q8OoUXQiEw/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/9Q8OoUXQiEw',
    aspectRatio: '16:9',
    duration: '01:26',
    client: 'Kaif Ali Jatani',
    role: 'Video Editor',
    year: '2026'
  },
  {
    id: 'ashura-procession-karachi',
    title: 'Ashura Day Procession in Karachi',
    description: 'A powerful cinematic documentary capturing the solemnity, devotion, and monumental scale of the Ashura Day Procession in Karachi. Expertly shot and edited with striking visual storytelling, high-contrast compositions, and ambient sound design.',
    category: 'Cinematic Videos',
    thumbnailUrl: 'https://img.youtube.com/vi/20oJtVSfyGg/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/20oJtVSfyGg',
    aspectRatio: '16:9',
    duration: '02:15',
    client: 'Personal Project',
    role: 'Videographer & Editor',
    year: '2026'
  },
  {
    id: 'gitex-ai-germany-visa',
    title: 'Client Reel: GITEX AI Event',
    description: 'A high-impact promotional reel showcasing the GITEX AI Event and how it can help you obtain a Germany Visa. Features a strong visual hook, structured storytelling, and precise editing.',
    category: 'Reels',
    thumbnailUrl: 'https://img.youtube.com/vi/QBsZILDt4dc/maxresdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/QBsZILDt4dc',
    aspectRatio: '9:16',
    duration: '00:32',
    client: 'Holidays Maker',
    role: 'Scriptwriter, Videographer & Editor',
    year: '2026'
  },
  {
    id: 'holidays-maker-schengen',
    title: 'Client Reel: Schengen Visa Guide',
    description: 'An informative and engaging vertical reel where the CEO explains the 3 European countries to visit before applying for a Schengen Visa. Scripted, filmed, and edited to optimize retention and clarity.',
    category: 'Reels',
    thumbnailUrl: 'https://img.youtube.com/vi/ShYyOKVlg5Y/maxresdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/ShYyOKVlg5Y',
    aspectRatio: '9:16',
    duration: '00:36',
    client: 'Holidays Maker',
    role: 'Scriptwriter, Videographer & Editor',
    year: '2026'
  },
  {
    id: 'dji-mic-mini-review',
    title: 'Personal Reel: Collaboration with DJI',
    description: 'An interactive, hands-on review of the DJI Mic Mini, created in collaboration with DJI. Scripted, filmed, and edited with clean, high-impact product showcases and crisp audio demonstrations.',
    category: 'Reels',
    thumbnailUrl: 'https://img.youtube.com/vi/gQw__Is5C2A/maxresdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/gQw__Is5C2A',
    aspectRatio: '9:16',
    duration: '00:55',
    client: 'DJI',
    role: 'Scriptwriter, Videographer & Editor',
    year: '2026'
  },
  {
    id: 'ai-content-neon',
    title: 'AI Content: Conceptual Sci-Fi Journey',
    description: 'An experimental film exploring futuristic landscapes, created using Midjourney and animated with advanced AI video generation models.',
    category: 'AI Videos',
    thumbnailUrl: 'https://images.unsplash.com/photo-1547891654-e66ed7edd96c?auto=format&fit=crop&q=80&w=1200',
    videoUrl: 'https://player.vimeo.com/external/459389137.hd.mp4?s=8db8d2b210e1a179ad22e173e200388d011ff175&profile_id=174&oauth2_token_id=57447761',
    aspectRatio: '16:9',
    duration: '01:15',
    client: 'AI Film Festival',
    role: 'AI Prompt Specialist & Director',
    year: '2026'
  },
  {
    id: 'ai-content-coming',
    title: 'AI Content: Neural Dreamscapes',
    description: 'A mind-bending AI cinematic experience highlighting procedural details. Coming soon.',
    category: 'AI Videos',
    thumbnailUrl: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=1200',
    aspectRatio: '16:9',
    client: 'Personal Project',
    role: 'AI Artist',
    year: '2026',
    isComingSoon: true
  },
  {
    id: 'photography-project-monolith',
    title: 'Photography Project: Minimal Concrete Geometries',
    description: 'A modern architectural photography series looking at the intersection of shadows and clean cement forms.',
    category: 'Photography',
    thumbnailUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200',
    aspectRatio: '4:3',
    client: 'Exhibition Print',
    role: 'Photographer',
    year: '2026'
  },
  {
    id: 'photography-project-tokyo',
    title: 'Photography Project: Street Nights',
    description: 'Candid urban photography focusing on rainy night reflections, soft neon glow, and human stories.',
    category: 'Photography',
    thumbnailUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=1200',
    aspectRatio: '4:3',
    client: 'Personal Gallery',
    role: 'Photographer',
    year: '2026'
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'case-reel-views',
    projectName: 'Instagram Reel Strategy',
    result: '400K+ Organic Views',
    platform: 'Instagram',
    category: 'Video Editing + Hook Strategy',
    explanation: 'Designed a high-retention vertical reel using attention-grabbing opening hooks and fast-paced editing. The video reached a massive organic audience without any paid ads.',
    beforeValue: 'Avg. 2K views',
    afterValue: '400K+ views',
    screenshotPlaceholderType: 'reels'
  },
  {
    id: 'case-client-growth',
    projectName: 'Client Account Growth Drive',
    result: 'Thousands of Organic Views',
    platform: 'Instagram',
    category: 'Content Planning + Reels Production',
    explanation: 'Re-structured a business client\'s content plan to focus on valuable, engaging reels. Generated consistent views and improved overall audience engagement within 3 months.',
    beforeValue: 'Low engagement',
    afterValue: 'Steady growth & high reach',
    screenshotPlaceholderType: 'dashboard'
  }
];

export const processSteps: ProcessStep[] = [
  {
    phase: '01',
    title: 'Understanding Your Brand',
    description: 'I start by learning about your business, your target audience, and your goals. This helps me align on the vision and style so that the final product feels entirely true to your brand.',
    duration: 'Step 1',
    deliverables: ['Creative Consultation', 'Project Discussion', 'Style Alignment']
  },
  {
    phase: '02',
    title: 'Planning the Content',
    description: 'I draft concepts, write simple and clear scripts, and plan the shots. For vertical reels, I structure precise timing to capture the viewer\'s attention within the first few seconds.',
    duration: 'Step 2',
    deliverables: ['Video Concepts', 'Video Scripts', 'Shot Lists']
  },
  {
    phase: '03',
    title: 'Recording & Creating',
    description: 'I handle all the filming, lighting, and audio setup using professional tools. If we are creating AI content, I write precise prompts and use advanced neural models to generate custom visuals.',
    duration: 'Step 3',
    deliverables: ['Professional Raw Footage', 'Studio-Quality Audio', 'AI Visual Assets']
  },
  {
    phase: '04',
    title: 'Editing & Final Touches',
    description: 'This is where the video comes together. I trim the footage, add high-quality sound design, apply smooth color-grading, and write clean motion typography to make the video engaging and polished.',
    duration: 'Step 4',
    deliverables: ['Video Editing', 'Sound Design & Foley', 'Color-Graded Master File']
  },
  {
    phase: '05',
    title: 'Publishing & Growth',
    description: 'I help you optimize how the video is published. I advise on eye-catching covers (thumbnails), clean captions, and hashtags so the content stands out, performs well, and gets real business results.',
    duration: 'Step 5',
    deliverables: ['Cover Images', 'Caption & Tag Guide', 'Growth Insights']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'review-placeholder-1',
    name: 'Nadir Ahmed',
    role: 'CEO',
    company: 'Holidays Maker',
    avatarUrl: '',
    quote: 'Salam delivered exceptional results for our travel brand. The vertical videos and strategic hooks completely transformed our social media reach!',
    isPlaceholder: false
  },
  {
    id: 'review-placeholder-2',
    name: 'Syed Shah Noor',
    role: 'Founder',
    company: 'Vibe & Scale and Seekho Ai',
    avatarUrl: '',
    quote: 'The AI Instagram reels Salam edited for us were absolutely phenomenal. His creative hooks, smooth editing, and engaging style took our audience engagement to a whole new level!',
    isPlaceholder: false
  },
  {
    id: 'review-placeholder-3',
    name: 'Kaif Ali Jatani',
    role: 'Videographer and Photographer',
    company: '',
    avatarUrl: '',
    quote: 'Collaborating on video projects with Salam has been a fantastic experience. His attention to detail, visual storytelling ability, and technical editing skills are top-notch for high-impact social content.',
    isPlaceholder: false
  }
];

export const contactConfig = {
  calendlyUrl: 'https://calendly.com/salamhussain-mp4',
  whatsappUrl: 'https://wa.me/923343154855?text=Hi%20Salam!%20I%20found%20your%20portfolio%20website%20and%20would%20like%20to%20discuss%20my%20project.'
};

