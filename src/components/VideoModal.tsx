import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Film, Calendar, Briefcase, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { PortfolioItem } from '../types';
import { portfolioItems } from '../data';

interface VideoModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onSelectItem?: (item: PortfolioItem) => void;
}

export default function VideoModal({ item, onClose, onSelectItem }: VideoModalProps) {
  if (!item) return null;

  const videoItems = portfolioItems.filter(p => p.videoUrl && !p.isComingSoon);
  const currentIndex = videoItems.findIndex(p => p.id === item.id);

  const handleNext = () => {
    if (!onSelectItem || currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % videoItems.length;
    onSelectItem(videoItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!onSelectItem || currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + videoItems.length) % videoItems.length;
    onSelectItem(videoItems[prevIndex]);
  };

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [duration, setDuration] = useState('00:00');

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Reset states when item changes
  useEffect(() => {
    setIsPlaying(true);
    setProgress(0);
  }, [item]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration || 0;
    if (total > 0) {
      setProgress((current / total) * 100);
    }
    setCurrentTime(formatTime(current));
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(formatTime(videoRef.current.duration));
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const value = parseFloat(e.target.value);
    const total = videoRef.current.duration || 0;
    videoRef.current.currentTime = (value / 100) * total;
    setProgress(value);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const requestFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const getYouTubeEmbedUrl = (url: string) => {
    if (!url) return null;
    const regExp = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[1].length === 11) {
      return `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0`;
    }
    return null;
  };

  const youtubeEmbedUrl = getYouTubeEmbedUrl(item.videoUrl || '');
  const isPhotography = item.category === 'Photography';

  return (
    <AnimatePresence>
      <motion.div
        id="video-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 overflow-y-auto bg-[#09090B]/95 p-0 sm:p-4 md:p-8 backdrop-blur-2xl flex flex-col lg:items-center lg:justify-center scrollbar-none"
        onClick={onClose}
      >
        {/* Soft Ambient Glow in Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7C3AED]/10 blur-[150px] pointer-events-none"></div>
        </div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 180 }}
          className="relative w-full max-w-6xl bg-[#09090B] lg:glass rounded-none sm:rounded-[24px] overflow-hidden lg:overflow-visible shadow-premium flex flex-col lg:flex-row min-h-screen sm:min-h-0 lg:h-full lg:max-h-[85vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            id="close-modal-btn"
            onClick={onClose}
            className="fixed top-4 right-4 sm:absolute sm:top-6 sm:right-6 z-[60] p-3 rounded-full bg-[#111114]/90 sm:bg-[#111114]/80 text-[#B8B8C2] hover:text-white border border-white/5 hover:border-white/20 hover:scale-110 active:scale-95 transition-all duration-300 backdrop-blur-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Media Player Area */}
          <div className="flex-1 bg-black flex items-center justify-center relative group min-h-[300px] lg:min-h-0">
            {isPhotography ? (
              <img
                src={item.thumbnailUrl}
                alt={item.title}
                className="w-full h-full object-contain max-h-[50vh] lg:max-h-[85vh]"
                referrerPolicy="no-referrer"
              />
            ) : youtubeEmbedUrl ? (
              <iframe
                src={youtubeEmbedUrl}
                title={item.title}
                className={`w-full h-full ${
                  item.aspectRatio === '9:16' ? 'aspect-[9/16] max-w-[360px]' : 'aspect-video'
                } max-h-[50vh] lg:max-h-[85vh] rounded-xl border border-white/5`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : item.videoUrl ? (
              <>
                <video
                  ref={videoRef}
                  src={item.videoUrl}
                  autoPlay
                  loop
                  playsInline
                  onClick={togglePlay}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  className="w-full h-full object-contain cursor-pointer max-h-[50vh] lg:max-h-[85vh]"
                />

                {/* custom sleek video controls overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300 flex flex-col gap-3">
                  {/* Seek Bar */}
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={progress}
                      onChange={handleProgressChange}
                      className="w-full h-1 accent-[#7C3AED] bg-white/20 rounded-lg appearance-none cursor-pointer hover:h-1.5 transition-all"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Play / Pause */}
                      <button
                        onClick={togglePlay}
                        className="text-white hover:text-[#06B6D4] transition-colors"
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
                      </button>

                      {/* Time indicators */}
                      <div className="text-xs font-mono text-[#B8B8C2]">
                        {currentTime} <span className="text-white/20">/</span> {duration}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      {/* Audio Controls */}
                      <button
                        onClick={toggleMute}
                        className="text-white hover:text-[#06B6D4] transition-colors"
                      >
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </button>

                      {/* Fullscreen */}
                      <button
                        onClick={requestFullscreen}
                        className="text-white hover:text-[#06B6D4] transition-colors"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Big centered play state overlay on pause */}
                {!isPlaying && (
                  <div
                    onClick={togglePlay}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer"
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="p-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white"
                    >
                      <Play className="w-8 h-8 fill-white" />
                    </motion.div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center text-[#8A8A96] p-6">
                <Film className="w-12 h-12 mx-auto mb-3 opacity-40" />
                <p>No video content available for this work</p>
              </div>
            )}

            {/* Prev/Next buttons overlay */}
            {onSelectItem && currentIndex !== -1 && (
              <>
                {/* Previous Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-black/60 text-[#B8B8C2] hover:text-[#06B6D4] hover:bg-black/80 border border-white/5 hover:border-[#06B6D4]/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:scale-110 active:scale-95 transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 opacity-100 pointer-events-auto"
                  aria-label="Previous video"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Next Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-black/60 text-[#B8B8C2] hover:text-[#06B6D4] hover:bg-black/80 border border-white/5 hover:border-[#06B6D4]/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:scale-110 active:scale-95 transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 opacity-100 pointer-events-auto"
                  aria-label="Next video"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Project Details Sidebar */}
          <div className="w-full lg:w-[380px] p-6 sm:p-8 flex flex-col justify-between bg-[#111114] border-t lg:border-t-0 lg:border-l border-white/5 lg:overflow-y-auto h-auto lg:h-full lg:max-h-none">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#7C3AED]/10 text-[#06B6D4] border border-[#7C3AED]/15 mb-4">
                <Sparkles className="w-3 h-3" />
                {item.category}
              </div>

              <h2 className="text-2xl font-display font-medium text-white tracking-tight mb-3">
                {item.title}
              </h2>

              <p className="text-sm text-[#B8B8C2] leading-relaxed mb-6 font-sans">
                {item.description}
              </p>

              {/* Specs Grid */}
              <div className="space-y-4 border-t border-white/5 pt-6">
                {item.client && (
                  <div className="flex items-start gap-3">
                    <User className="w-4 h-4 text-[#8A8A96] mt-0.5" />
                    <div>
                      <h4 className="text-xs font-mono text-[#8A8A96] uppercase tracking-wider">Client</h4>
                      <p className="text-sm text-white font-medium">{item.client}</p>
                    </div>
                  </div>
                )}

                {item.role && (
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-4 h-4 text-[#8A8A96] mt-0.5" />
                    <div>
                      <h4 className="text-xs font-mono text-[#8A8A96] uppercase tracking-wider">My Role</h4>
                      <p className="text-sm text-white font-medium">{item.role}</p>
                    </div>
                  </div>
                )}

                {item.year && (
                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-[#8A8A96] mt-0.5" />
                    <div>
                      <h4 className="text-xs font-mono text-[#8A8A96] uppercase tracking-wider">Year</h4>
                      <p className="text-sm text-white font-medium">{item.year}</p>
                    </div>
                  </div>
                )}

                {item.duration && (
                  <div className="flex items-start gap-3">
                    <Film className="w-4 h-4 text-[#8A8A96] mt-0.5" />
                    <div>
                      <h4 className="text-xs font-mono text-[#8A8A96] uppercase tracking-wider">Duration</h4>
                      <p className="text-sm text-white font-medium">{item.duration}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Horizontal Scrollable Playlist / More Videos (especially great for mobile "scroll & watch" experience) */}
              {onSelectItem && (
                <div className="mt-8 pt-6 border-t border-white/5 hidden lg:block">
                  <h4 className="text-xs font-mono text-[#8A8A96] uppercase tracking-wider mb-3">
                    More Videos (Scroll & Tap)
                  </h4>
                  <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none -mx-2 px-2 snap-x">
                    {videoItems.map((vItem) => {
                      const isActive = vItem.id === item.id;
                      return (
                        <button
                          key={vItem.id}
                          onClick={() => onSelectItem(vItem)}
                          className={`flex-shrink-0 w-28 snap-start text-left group/playlist-item focus:outline-none transition-all duration-300 ${
                            isActive ? 'scale-95' : 'hover:scale-102'
                          }`}
                        >
                          <div className={`relative aspect-video rounded-lg overflow-hidden bg-black border ${
                            isActive ? 'border-[#06B6D4] ring-1 ring-[#06B6D4]/30' : 'border-white/5 group-hover/playlist-item:border-white/20'
                          }`}>
                            <img
                              src={vItem.thumbnailUrl}
                              alt={vItem.title}
                              className="w-full h-full object-cover opacity-80 group-hover/playlist-item:opacity-100 transition-opacity"
                              referrerPolicy="no-referrer"
                            />
                            {isActive && (
                              <div className="absolute inset-0 bg-[#06B6D4]/15 flex items-center justify-center">
                                <span className="text-[9px] font-mono bg-black/60 text-[#06B6D4] px-1.5 py-0.5 rounded uppercase tracking-wider">
                                  Active
                                </span>
                              </div>
                            )}
                          </div>
                          <p className={`text-[10px] font-medium mt-1.5 line-clamp-2 leading-tight transition-colors ${
                            isActive ? 'text-[#06B6D4]' : 'text-[#B8B8C2] group-hover/playlist-item:text-white'
                          }`}>
                            {vItem.title}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Vertical Grid Playlist for Mobile "One Page" continuous experience */}
              {onSelectItem && (
                <div className="mt-8 pt-6 border-t border-white/5 block lg:hidden">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
                    <h4 className="text-xs font-mono text-[#8A8A96] uppercase tracking-widest font-bold">
                      All My Work (Watch & Scroll)
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {portfolioItems.map((vItem) => {
                      if (vItem.isComingSoon) return null;
                      const isActive = vItem.id === item.id;
                      return (
                        <button
                          key={vItem.id}
                          onClick={() => {
                            onSelectItem(vItem);
                            const modalElement = document.getElementById('video-modal');
                            if (modalElement) {
                              modalElement.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                          }}
                          className={`w-full text-left rounded-2xl overflow-hidden bg-[#18181C]/50 border transition-all duration-300 p-3 flex gap-3 items-center group/playlist-item ${
                            isActive 
                              ? 'border-[#06B6D4] bg-[#06B6D4]/5' 
                              : 'border-white/5 hover:border-white/10 hover:bg-[#18181C]'
                          }`}
                        >
                          <div className={`relative w-20 aspect-video rounded-lg overflow-hidden bg-black shrink-0 ${
                            vItem.aspectRatio === '9:16' ? 'w-12 aspect-[9/16]' : 'w-20 aspect-video'
                          }`}>
                            <img
                              src={vItem.thumbnailUrl}
                              alt={vItem.title}
                              className="w-full h-full object-cover opacity-80 group-hover/playlist-item:opacity-100 transition-opacity"
                              referrerPolicy="no-referrer"
                            />
                            {isActive ? (
                              <div className="absolute inset-0 bg-[#06B6D4]/15 flex items-center justify-center">
                                <span className="text-[8px] font-mono bg-black/60 text-[#06B6D4] px-1 rounded uppercase tracking-wider">
                                  Playing
                                </span>
                              </div>
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover/playlist-item:opacity-100 transition-opacity">
                                <Play className="w-3.5 h-3.5 text-white fill-white" />
                              </div>
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className="text-[8px] font-mono tracking-wider text-[#8A8A96] uppercase">
                              {vItem.category}
                            </span>
                            <h5 className={`text-xs font-medium line-clamp-1 leading-tight transition-colors ${
                              isActive ? 'text-[#06B6D4]' : 'text-white group-hover/playlist-item:text-[#06B6D4]'
                            }`}>
                              {vItem.title}
                            </h5>
                            <p className="text-[10px] text-[#8A8A96] font-mono mt-0.5 truncate">
                              {vItem.client || 'Personal Project'}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* CTA in sidebar */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <a
                href="#consultation"
                onClick={onClose}
                className="w-full inline-flex items-center justify-center px-5 py-3 rounded-[16px] text-xs font-medium tracking-wide uppercase transition-all duration-300 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#06B6D4] text-white shadow-[0_0_20px_rgba(124,58,237,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:scale-[1.02]"
              >
                Inquire About Similar Project
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
