import { Play } from 'lucide-react';
import type { VideoContent } from '../../types';
import SmartLink from '../ui/SmartLink';

interface VideoSectionProps {
  content: VideoContent;
}

export default function VideoSection({ content }: VideoSectionProps) {
  return (
    <section id="video" className="bg-white px-5 sm:px-[5%]">
      <div className="mx-auto max-w-[1296px] py-16 lg:py-[86.4px]">
        <h2 className="mb-[62px] text-center text-[40px] font-bold leading-[1.05] text-n7-navy sm:text-5xl lg:text-6xl">
          {content.sectionTitle}
        </h2>

        <div className="grid grid-cols-1 gap-[112px] md:grid-cols-2">
          {content.videos.map((video) => (
            <div key={video.href} className="flex flex-col items-center">
              <img
                src={video.publisherLogo.src}
                alt={video.publisherLogo.alt}
                loading="lazy"
                className="mb-5 h-20 w-auto max-w-[360px] object-contain"
              />

              <SmartLink
                href={video.href}
                ariaLabel={video.title}
                className="group relative block aspect-[521/293] w-full overflow-hidden rounded-[1px] bg-[#142E4F] bg-cover bg-center"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/10" />
                <span className="absolute left-1/2 top-1/2 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#EEF0F3] shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Play aria-hidden="true" className="ml-1 h-7 w-7 fill-n7-navy text-n7-navy" />
                </span>
                <span className="absolute bottom-3 left-3 right-3 font-[Arial,sans-serif] text-sm font-bold leading-5 text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.6)]">
                  {video.title}
                </span>
              </SmartLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
