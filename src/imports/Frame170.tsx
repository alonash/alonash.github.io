import svgPaths from "./svg-r1xhcj50kz";
import { Search, Lightbulb, Palette, RefreshCw } from 'lucide-react';

function Frame8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative rounded-[20px] shrink-0">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.7071067690849304)+(var(--transform-inner-height)*0.7071067690849304)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*0.7071067690849304)+(var(--transform-inner-width)*0.7071067690849304)))]" style={{ "--transform-inner-width": "58", "--transform-inner-height": "58" } as React.CSSProperties}>
        <div className="flex-none rotate-[45deg]">
          <div className="bg-[#3b6ff0] relative rounded-[14px] size-[58px] flex items-center justify-center">
            <Search className="w-6 h-6 text-white -rotate-[45deg]" />
            <div aria-hidden="true" className="absolute border-[6px] border-solid border-white inset-[-6px] pointer-events-none rounded-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-[110.004px]">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.7071067690849304)+(var(--transform-inner-height)*0.7071067690849304)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*0.7071067690849304)+(var(--transform-inner-width)*0.7071067690849304)))]" style={{ "--transform-inner-width": "58", "--transform-inner-height": "58" } as React.CSSProperties}>
        <div className="flex-none rotate-[45deg]">
          <div className="bg-[#3b6ff0] relative rounded-[14px] size-[58px] flex items-center justify-center">
            <Lightbulb className="w-6 h-6 text-white -rotate-[45deg]" />
            <div aria-hidden="true" className="absolute border-[6px] border-solid border-white inset-[-6px] pointer-events-none rounded-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame10({ icon }: { icon: 'palette' | 'refresh' }) {
  const IconComponent = icon === 'palette' ? Palette : RefreshCw;
  
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.7071067690849304)+(var(--transform-inner-height)*0.7071067690849304)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*0.7071067690849304)+(var(--transform-inner-width)*0.7071067690849304)))]" style={{ "--transform-inner-width": "58", "--transform-inner-height": "58" } as React.CSSProperties}>
        <div className="flex-none rotate-[45deg]">
          <div className="bg-[#3b6ff0] relative rounded-[14px] size-[58px] flex items-center justify-center">
            <IconComponent className="w-6 h-6 text-white -rotate-[45deg]" />
            <div aria-hidden="true" className="absolute border-[6px] border-solid border-white inset-[-6px] pointer-events-none rounded-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-1/2 top-[32.93px] translate-x-[-50%] w-[1360px]">
      <Frame8 />
      <Frame9 />
      <Frame10 icon="palette" />
      <Frame10 icon="refresh" />
    </div>
  );
}

export default function Frame170() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[141.923px] left-[71px] top-0 w-[1196.13px]">
        <div className="absolute inset-[-1.06%_-0.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1200 145">
            <path d={svgPaths.p309d6600} id="Vector 1" stroke="var(--stroke-0, #D9E3F3)" strokeLinecap="round" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <Frame13 />
    </div>
  );
}