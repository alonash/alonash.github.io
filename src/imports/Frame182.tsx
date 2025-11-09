export default function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['TT_Commons:Regular',sans-serif] gap-[15px] items-start not-italic relative size-full text-[#3a4147]">
      <p className="leading-[32px] relative shrink-0 text-[24px] w-full">24 Medium</p>
      <p className="leading-[32px] relative shrink-0 text-[20px] w-full">20 Medium</p>
      <p className="leading-[20px] relative shrink-0 text-[16px] w-full">16 Medium</p>
      <p className="leading-[20px] relative shrink-0 text-[16px] w-full">16 Regular</p>
      <p className="leading-[20px] relative shrink-0 text-[14px] tracking-[0.7px] uppercase w-full">14 Medium</p>
      <p className="leading-[20px] relative shrink-0 text-[14px] w-full">14 Regular</p>
      <p className="leading-[20px] relative shrink-0 text-[0px] w-full">
        <span className="text-[14px]">{`13 `}</span>
        <span className="font-['TT_Commons:Medium',sans-serif] not-italic text-[13px]">Regular</span>
      </p>
      <p className="leading-[16px] relative shrink-0 text-[13px] w-full">13 Medium</p>
      <p className="leading-[20px] relative shrink-0 text-[11px] w-full">12 DemiBold</p>
    </div>
  );
}