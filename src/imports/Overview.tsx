import svgPaths from "./svg-ih4732g4n9";
import imgVector from "figma:asset/5aac047d329d934ea60053f5e8a94747f10d72a8.png";
import { imgGroup, imgGroup1, imgGroup2, imgGroup3 } from "./svg-7f2k7";

function UserPlus() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="user-plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="user-plus">
          <path d={svgPaths.p337dacc0} id="Vector" stroke="var(--stroke-0, #3B6FF0)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p21b3b180} id="Vector_2" stroke="var(--stroke-0, #3B6FF0)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M16.6667 6.66667V11.6667" id="Vector_3" stroke="var(--stroke-0, #3B6FF0)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M19.1667 9.16667H14.1667" id="Vector_4" stroke="var(--stroke-0, #3B6FF0)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="calendar">
          <path d={svgPaths.p1da67b80} id="Vector" stroke="var(--stroke-0, #3B6FF0)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #3B6FF0)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M6.66667 1.66667V5" id="Vector_3" stroke="var(--stroke-0, #3B6FF0)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #3B6FF0)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Unlock() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="unlock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="unlock">
          <path d={svgPaths.p2566d000} id="Vector" stroke="var(--stroke-0, #B4BFCF)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p26c16080} id="Vector_2" stroke="var(--stroke-0, #B4BFCF)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function CheckCircle() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check-circle">
          <path d={svgPaths.p34287f00} id="Vector" stroke="var(--stroke-0, #3B6FF0)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p8e7df80} id="Vector_2" stroke="var(--stroke-0, #3B6FF0)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function MoreVertical() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="more-vertical">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="more-vertical">
          <path d={svgPaths.p39a1e780} fill="var(--fill-0, #3B6FF0)" id="Vector" stroke="var(--stroke-0, #3B6FF0)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p11974af0} fill="var(--fill-0, #3B6FF0)" id="Vector_2" stroke="var(--stroke-0, #3B6FF0)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p133c1580} fill="var(--fill-0, #3B6FF0)" id="Vector_3" stroke="var(--stroke-0, #3B6FF0)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Actions() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center right-[134px] top-[26px]" data-name="Actions">
      <UserPlus />
      <Calendar />
      <Unlock />
      <CheckCircle />
      <MoreVertical />
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#f88813] box-border content-stretch flex gap-[10px] items-center overflow-clip px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Tag">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">On Hold</p>
    </div>
  );
}

function StatusNotStarted() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Status - Not Started">
      <Tag />
    </div>
  );
}

function StatusOnHold() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Status - On Hold">
      <StatusNotStarted />
    </div>
  );
}

function StatusOnHold1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center right-[52px] top-[22px]" data-name="Status - On Hold">
      <StatusOnHold />
    </div>
  );
}

function Attribute1() {
  return (
    <div className="content-stretch flex flex-col font-['TT_Commons:Regular',sans-serif] items-start leading-[20px] not-italic overflow-clip relative shrink-0 text-[16px] text-nowrap whitespace-pre" data-name="Attribute 1">
      <p className="relative shrink-0 text-[#788386]">Site</p>
      <p className="relative shrink-0 text-[#3a4147]">Aro-01</p>
    </div>
  );
}

function Attribute2() {
  return (
    <div className="content-stretch flex flex-col font-['TT_Commons:Regular',sans-serif] items-start leading-[20px] not-italic overflow-clip relative shrink-0 text-[16px] text-nowrap whitespace-pre" data-name="Attribute 2">
      <p className="relative shrink-0 text-[#788386]">Equipment</p>
      <p className="relative shrink-0 text-[#3a4147]">Aircondition</p>
    </div>
  );
}

function PriorityLow() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Priority - Low">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Priority - Low">
          <circle cx="10" cy="10" fill="var(--fill-0, #B4BFCF)" id="Ellipse 6" r="6.66667" />
          <g id="arrow-down">
            <path d="M10 7.08333V12.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
            <path d={svgPaths.p3354c0c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0">
      <PriorityLow />
      <p className="font-['TT_Commons:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3a4147] text-[16px] text-nowrap whitespace-pre">Low</p>
    </div>
  );
}

function Attribute3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Attribute 3">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#788386] text-[16px] text-nowrap whitespace-pre">Priority</p>
      <Frame59 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex font-['TT_Commons:Regular',sans-serif] gap-[4px] items-start leading-[20px] not-italic overflow-clip relative shrink-0 text-[16px] text-nowrap whitespace-pre">
      <p className="relative shrink-0 text-[#3a4147]">Today</p>
      <p className="relative shrink-0 text-[#788386]">8:30-10:30</p>
    </div>
  );
}

function Attribute4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Attribute 4">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#788386] text-[16px] text-nowrap whitespace-pre">Schedule</p>
      <Frame60 />
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="user">
          <path d={svgPaths.p27365a00} id="Vector" stroke="var(--stroke-0, #3A4147)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p6f5b580} id="Vector_2" stroke="var(--stroke-0, #3A4147)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[4px] items-start overflow-clip relative shrink-0">
      <User />
      <p className="font-['TT_Commons:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3a4147] text-[16px] text-nowrap whitespace-pre">Aubrey Russell</p>
      <p className="font-['TT_Commons:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#788386] text-[16px] text-nowrap whitespace-pre">Welding team</p>
    </div>
  );
}

function Attribute5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Attribute 5">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#788386] text-[16px] text-nowrap whitespace-pre">Assignment</p>
      <Frame62 />
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check">
          <path d={svgPaths.p32ddfd00} id="Vector" stroke="var(--stroke-0, #B4BFCF)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[4px] items-start overflow-clip relative shrink-0">
      <Check />
    </div>
  );
}

function Attribute6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Attribute 6">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#788386] text-[16px] text-nowrap whitespace-pre">Planned</p>
      <Frame63 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3a4147] text-[16px] text-nowrap whitespace-pre">CTU (Clean Tran Unit)</p>
    </div>
  );
}

function Attribute7() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Attribute 7">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#788386] text-[16px] text-nowrap whitespace-pre">Book Type</p>
      <Frame64 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3b6ff0] text-[16px] text-nowrap whitespace-pre">12345-678</p>
    </div>
  );
}

function Attribute8() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Attribute 8">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#788386] text-[16px] text-nowrap whitespace-pre">Workpackage</p>
      <Frame65 />
    </div>
  );
}

function Attributes() {
  return (
    <div className="absolute box-border content-stretch flex gap-[40px] items-center left-0 overflow-clip px-[52px] py-[20px] top-[52px]" data-name="Attributes">
      <Attribute1 />
      <Attribute2 />
      <Attribute3 />
      <Attribute4 />
      <Attribute5 />
      <Attribute6 />
      <Attribute7 />
      <Attribute8 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white h-[132px] overflow-clip relative shrink-0 w-full" data-name="Header">
      <p className="absolute font-['TT_Commons:Regular',sans-serif] leading-[32px] left-[52px] not-italic text-[24px] text-black text-nowrap top-[20px] whitespace-pre">Remove weld drains</p>
      <p className="absolute font-['TT_Commons:Regular',sans-serif] leading-[20px] left-[256px] not-italic text-[#788386] text-[16px] text-nowrap top-[28px] whitespace-pre">936bu-fgh- 123456789</p>
      <Actions />
      <StatusOnHold1 />
      <div className="absolute bottom-0 h-px left-0 right-0" data-name="Seperator  ___">
        <div className="absolute bg-[#e8edf2] h-px left-0 right-0 top-1/2 translate-y-[-50%]" data-name="Seperator  ___" />
      </div>
      <Attributes />
    </div>
  );
}

function Tab() {
  return (
    <div className="bg-[#f5f7fa] box-border content-stretch flex gap-[8px] items-center overflow-clip px-0 py-[12px] relative shrink-0" data-name="Tab">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3a4147] text-[14px] text-nowrap tracking-[0.7px] uppercase whitespace-pre">Overview</p>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-2px_0px_0px_inset_#3b6ff0]" />
    </div>
  );
}

function Tab1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-0 py-[12px] relative shrink-0" data-name="Tab">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#788386] text-[14px] text-nowrap tracking-[0.7px] uppercase whitespace-pre">Timeline</p>
    </div>
  );
}

function Tab2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-0 py-[12px] relative shrink-0" data-name="Tab">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#788386] text-[14px] text-nowrap tracking-[0.7px] uppercase whitespace-pre">Gantt</p>
    </div>
  );
}

function Tab3() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-0 py-[12px] relative shrink-0" data-name="Tab">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#788386] text-[14px] text-nowrap tracking-[0.7px] uppercase whitespace-pre">Execution</p>
    </div>
  );
}

function Tab4() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-0 py-[12px] relative shrink-0" data-name="Tab">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#788386] text-[14px] text-nowrap tracking-[0.7px] uppercase whitespace-pre">Issues</p>
      <div className="relative shrink-0 size-[16px]" data-name="Alert">
        <div className="absolute bg-[#fa4500] inset-0 rounded-[18px]" data-name="BG">
          <div aria-hidden="true" className="absolute border-0 border-solid border-white inset-0 pointer-events-none rounded-[18px]" />
        </div>
        <div className="absolute bottom-[-3.13%] flex flex-col font-['TT_Commons:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[11px] text-center text-white top-[3.13%]">
          <p className="leading-[20px]">2</p>
        </div>
      </div>
    </div>
  );
}

function Tab5() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-0 py-[12px] relative shrink-0" data-name="Tab">
      <p className="font-['TT_Commons:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#788386] text-[14px] text-nowrap tracking-[0.7px] uppercase whitespace-pre">Files</p>
      <div className="h-[16px] relative shrink-0 w-[24px]" data-name="Alert">
        <div className="absolute bg-[#e8edf2] inset-0 rounded-[18px]" data-name="BG">
          <div aria-hidden="true" className="absolute border-0 border-solid border-white inset-0 pointer-events-none rounded-[18px]" />
        </div>
        <div className="absolute bottom-[-3.13%] flex flex-col font-['TT_Commons:Regular',sans-serif] justify-center leading-[0] left-0 not-italic right-0 text-[#3a4147] text-[11px] text-center top-[3.13%]">
          <p className="leading-[20px]">13</p>
        </div>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="box-border content-stretch flex gap-[40px] items-center px-[52px] py-0 relative shrink-0" data-name="Tabs">
      <Tab />
      <Tab1 />
      <Tab2 />
      <Tab3 />
      <Tab4 />
      <Tab5 />
    </div>
  );
}

function Header1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-1/2 overflow-clip top-[94px] translate-x-[-50%] w-[1920px]" data-name="Header">
      <Header />
      <Tabs />
    </div>
  );
}

function Frame338() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-0 relative w-full">
          <div className="flex flex-col font-['TT_Commons:Regular',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#3a4147] text-[14px] text-center text-nowrap tracking-[0.7px] uppercase">
            <p className="leading-[20px] whitespace-pre">TASK</p>
          </div>
          <div className="relative shrink-0 size-[16px]" data-name="filter-full">
            <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
              <div className="absolute inset-[-5%_-4.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
                  <path d={svgPaths.p2c172780} fill="var(--fill-0, #3B6FF0)" id="Vector" stroke="var(--stroke-0, #3B6FF0)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame339() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-0 relative shrink-0 w-[497px]">
      <Frame338 />
    </div>
  );
}

function Frame340() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center justify-center relative shrink-0 w-[218px]">
      <div className="basis-0 flex flex-col font-['TT_Commons:Regular',sans-serif] grow justify-end leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#3a4147] text-[14px] text-center tracking-[0.7px] uppercase">
        <p className="leading-[20px]">value</p>
      </div>
    </div>
  );
}

function Frame336() {
  return (
    <div className="h-[28px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[28px] items-center px-[10px] py-0 relative w-full">
          <Frame339 />
          <Frame340 />
          <div className="flex flex-col font-['TT_Commons:Regular',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#3a4147] text-[14px] text-center tracking-[0.7px] uppercase w-[491px]">
            <p className="leading-[20px]" dir="auto">
              step type
            </p>
          </div>
          <div className="flex flex-col font-['TT_Commons:Regular',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#3a4147] text-[14px] text-center tracking-[0.7px] uppercase w-[193px]">
            <p className="leading-[20px]">TIME STEMP</p>
          </div>
          <div className="basis-0 flex flex-col font-['TT_Commons:Regular',sans-serif] grow justify-end leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#3a4147] text-[14px] text-center tracking-[0.7px] uppercase">
            <p className="leading-[20px]">employee</p>
          </div>
          <div className="flex flex-col font-['TT_Commons:Regular',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#3a4147] text-[14px] text-center tracking-[0.7px] uppercase w-[93px]">
            <p className="leading-[20px]">ACTIONS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame324() {
  return (
    <div className="basis-0 bg-[rgba(240,244,255,0.7)] grow h-full min-h-px min-w-px relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#f0f4ff] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pl-[8px] pr-0 py-0 relative size-full">
          <p className="font-['TT_Commons:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#3a4147] text-[14px] text-nowrap tracking-[0.7px] uppercase whitespace-pre">Validation Checks</p>
        </div>
      </div>
    </div>
  );
}

function Frame330() {
  return (
    <div className="bg-[rgba(240,244,255,0.7)] h-[32px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[32px] items-center pl-[40px] pr-0 py-0 relative w-full">
          <Frame324 />
          <div className="absolute flex items-center justify-center left-[2px] size-[20px] top-[6px]">
            <div className="flex-none rotate-[180deg]">
              <div className="overflow-clip relative size-[20px]" data-name="chevron / up">
                <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                  <div className="absolute inset-[-12%_-8.49%_-16.97%_-8.49%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7">
                      <path d={svgPaths.p346fe80} id="Vector" stroke="var(--stroke-0, #3B6FF0)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-[25px] size-[6px] top-[13px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
              <circle cx="3" cy="3" fill="var(--fill-0, #3B6FF0)" id="Ellipse 65" r="3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Table() {
  return (
    <div className="absolute bg-[#f0f4ff] left-0 rounded-[2px] size-[12px] top-0" data-name="table">
      <div aria-hidden="true" className="absolute border border-[#f0f4ff] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Frame337() {
  return (
    <div className="absolute left-[3px] size-[6px] top-[3px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g id="Frame 337">
          <path d="M6 3L3.64262e-08 3" id="Line 30" stroke="var(--stroke-0, #3B6FF0)" />
          <path d="M3 6L3 3L3 1.31134e-08" id="Line 31" stroke="var(--stroke-0, #3B6FF0)" />
        </g>
      </svg>
    </div>
  );
}

function Frame322() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <Table />
      <Frame337 />
    </div>
  );
}

function Frame325() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#f0f4ff] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pl-[8px] pr-0 py-0 relative size-full">
          <p className="font-['TT_Commons:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3a4147] text-[16px] text-nowrap whitespace-pre">Packaging controls</p>
        </div>
      </div>
    </div>
  );
}

function Frame328() {
  return (
    <div className="h-[42px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[42px] items-center pl-[40px] pr-0 py-0 relative w-full">
          <Frame322 />
          <Frame325 />
          <div className="absolute left-[26px] size-[6px] top-[18px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
              <circle cx="3" cy="3" fill="var(--fill-0, #55C06F)" id="Ellipse 65" r="3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Table1() {
  return (
    <div className="absolute bg-[#f0f4ff] left-0 rounded-[2px] size-[12px] top-0" data-name="table">
      <div aria-hidden="true" className="absolute border border-[#f0f4ff] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Frame344() {
  return (
    <div className="absolute left-[3px] size-[6px] top-[3px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g id="Frame 337">
          <path d="M6 3L3.64262e-08 3" id="Line 30" stroke="var(--stroke-0, #3B6FF0)" />
          <path d="M3 6L3 3L3 1.31134e-08" id="Line 31" stroke="var(--stroke-0, #3B6FF0)" />
        </g>
      </svg>
    </div>
  );
}

function Frame323() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <Table1 />
      <Frame344 />
    </div>
  );
}

function Frame326() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#f0f4ff] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pl-[8px] pr-0 py-0 relative size-full">
          <p className="font-['TT_Commons:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#3a4147] text-[16px] text-nowrap tracking-[0.7px] whitespace-pre">Fault report - general data</p>
        </div>
      </div>
    </div>
  );
}

function Frame342() {
  return (
    <div className="h-[42px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[42px] items-center pl-[40px] pr-0 py-0 relative w-full">
          <Frame323 />
          <Frame326 />
          <div className="absolute left-[26px] size-[6px] top-[18px]">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 45, 85, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                <circle cx="3" cy="3" fill="var(--fill-0, #FF2D55)" id="Ellipse 65" r="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Table2() {
  return (
    <div className="bg-[#f0f4ff] h-[12px] relative rounded-[2px] shrink-0 w-full" data-name="table">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[12px] items-center justify-center p-[4px] relative w-full">
          <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[6px] top-[3px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "6", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[270deg]">
              <div className="h-0 relative w-[6px]">
                <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
                    <path d="M0 0.5H6" id="Line 31" stroke="var(--stroke-0, #3B6FF0)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-0 items-center justify-center left-[3px] top-[6px] w-[6px]">
            <div className="flex-none rotate-[180deg]">
              <div className="h-0 relative w-[6px]">
                <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
                    <path d="M0 0.5H6" id="Line 30" stroke="var(--stroke-0, #3B6FF0)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f4ff] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Frame343() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-0 w-[12px]">
      <Table2 />
    </div>
  );
}

function Table3() {
  return (
    <div className="absolute bg-[#f0f4ff] left-0 rounded-[2px] size-[12px] top-0" data-name="table">
      <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip p-[4px] relative rounded-[inherit] size-[12px]">
        <Frame343 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f4ff] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Frame327() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <Table3 />
    </div>
  );
}

function Frame329() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#f0f4ff] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pl-[8px] pr-0 py-0 relative size-full">
          <p className="font-['TT_Commons:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#3a4147] text-[16px] text-nowrap tracking-[0.7px] whitespace-pre">Packaging controls (2)</p>
        </div>
      </div>
    </div>
  );
}

function Table4() {
  return (
    <div className="absolute left-[1683px] size-[20px] top-[6px]" data-name="table">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="table">
          <path d={svgPaths.p3cc96c00} id="Vector" stroke="var(--stroke-0, #3B6FF0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Frame332() {
  return (
    <div className="h-[42px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[42px] items-center pl-[40px] pr-0 py-0 relative w-full">
          <Frame327 />
          <Frame329 />
          <div className="absolute left-[26px] size-[6px] top-[18px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
              <circle cx="3" cy="3" fill="var(--fill-0, #55C06F)" id="Ellipse 65" r="3" />
            </svg>
          </div>
          <Table4 />
        </div>
      </div>
    </div>
  );
}

function Table5() {
  return (
    <div className="bg-[#f0f4ff] h-[12px] relative rounded-[2px] shrink-0 w-full" data-name="table">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[12px] items-center justify-center p-[4px] relative w-full">
          <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[6px] top-[3px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "6", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[270deg]">
              <div className="h-0 relative w-[6px]">
                <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
                    <path d="M0 0.5H6" id="Line 31" stroke="var(--stroke-0, #3B6FF0)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-0 items-center justify-center left-[3px] top-[6px] w-[6px]">
            <div className="flex-none rotate-[180deg]">
              <div className="h-0 relative w-[6px]">
                <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
                    <path d="M0 0.5H6" id="Line 30" stroke="var(--stroke-0, #3B6FF0)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f4ff] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Frame345() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[12px]">
      <Table5 />
    </div>
  );
}

function Frame331() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#f0f4ff] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pl-[8px] pr-0 py-0 relative size-full">
          <p className="font-['TT_Commons:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#3a4147] text-[16px] text-nowrap tracking-[0.7px] whitespace-pre">Packaging controls (3)</p>
        </div>
      </div>
    </div>
  );
}

function Frame346() {
  return (
    <div className="h-[42px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[42px] items-center pl-[40px] pr-0 py-0 relative w-full">
          <Frame345 />
          <Frame331 />
          <div className="absolute left-[26px] size-[6px] top-[18px]">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 45, 85, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                <circle cx="3" cy="3" fill="var(--fill-0, #FF2D55)" id="Ellipse 65" r="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Table6() {
  return (
    <div className="absolute left-0 size-[12px] top-[-3px]" data-name="table">
      <div className="absolute inset-[-8.333%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="table">
            <rect fill="var(--fill-0, #F0F4FF)" height="13" rx="2.5" width="13" x="0.5" y="0.5" />
            <rect height="13" rx="2.5" stroke="var(--stroke-0, #F0F4FF)" width="13" x="0.5" y="0.5" />
            <path d="M7 10L7 4" id="Line 31" stroke="var(--stroke-0, #3B6FF0)" />
            <path d="M10 7L4 7" id="Line 30" stroke="var(--stroke-0, #3B6FF0)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame333() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <Table6 />
    </div>
  );
}

function Frame334() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#f0f4ff] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pl-[8px] pr-0 py-0 relative size-full">
          <p className="font-['TT_Commons:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#3a4147] text-[16px] text-nowrap tracking-[0.7px] whitespace-pre">Calculation of weighing range</p>
        </div>
      </div>
    </div>
  );
}

function Frame347() {
  return (
    <div className="h-[42px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[42px] items-center pl-[40px] pr-0 py-0 relative w-full">
          <Frame333 />
          <Frame334 />
          <div className="absolute left-[26px] size-[6px] top-[14px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
              <circle cx="3" cy="3" fill="var(--fill-0, #55C06F)" id="Ellipse 65" r="3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Table7() {
  return (
    <div className="bg-[#f0f4ff] h-[12px] relative rounded-[2px] shrink-0 w-full" data-name="table">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[12px] items-center justify-center p-[4px] relative w-full">
          <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[6px] top-[3px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "6", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[270deg]">
              <div className="h-0 relative w-[6px]">
                <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
                    <path d="M0 0.5H6" id="Line 31" stroke="var(--stroke-0, #3B6FF0)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-0 items-center justify-center left-[3px] top-[6px] w-[6px]">
            <div className="flex-none rotate-[180deg]">
              <div className="h-0 relative w-[6px]">
                <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
                    <path d="M0 0.5H6" id="Line 30" stroke="var(--stroke-0, #3B6FF0)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f4ff] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Frame348() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[12px]">
      <Table7 />
    </div>
  );
}

function Table8() {
  return (
    <div className="absolute left-[1621px] size-[20px] top-[6px]" data-name="table">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="table">
          <path d={svgPaths.p3cc96c00} id="Vector" stroke="var(--stroke-0, #3B6FF0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Frame335() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#f0f4ff] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pl-[8px] pr-0 py-0 relative size-full">
          <p className="font-['TT_Commons:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#3a4147] text-[16px] text-nowrap tracking-[0.7px] whitespace-pre">Quality controls QA</p>
          <Table8 />
        </div>
      </div>
    </div>
  );
}

function Frame341() {
  return (
    <div className="h-[42px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[42px] items-center pl-[40px] pr-0 py-0 relative w-full">
          <Frame348 />
          <Frame335 />
          <div className="absolute left-[26px] size-[6px] top-[18px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
              <circle cx="3" cy="3" fill="var(--fill-0, #55C06F)" id="Ellipse 65" r="3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame349() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame330 />
      <Frame328 />
      <Frame342 />
      <Frame332 />
      <Frame346 />
      <Frame347 />
      <Frame341 />
    </div>
  );
}

function Frame319() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12px] items-start px-0 py-[2px] relative shrink-0 w-full">
      <Frame349 />
    </div>
  );
}

function Frame309() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[788px] items-start left-[52px] pb-[40px] pt-[8px] px-[20px] rounded-[8px] top-[292px] w-[1816px]">
      <div aria-hidden="true" className="absolute border border-[#f0f4ff] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)]" />
      <Frame336 />
      <Frame319 />
    </div>
  );
}

function RotateCw() {
  return (
    <div className="absolute left-[2px] size-[20px] top-[2px]" data-name="rotate-cw">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="rotate-cw">
          <path d={svgPaths.p36da8300} id="Vector" stroke="var(--stroke-0, #3B6FF0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p10140900} id="Vector_2" stroke="var(--stroke-0, #3B6FF0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function PauseCircle() {
  return (
    <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="pause-circle">
      <RotateCw />
    </div>
  );
}

function History() {
  return (
    <div className="overflow-clip relative size-full" data-name="history">
      <PauseCircle />
    </div>
  );
}

function History1() {
  return (
    <div className="absolute left-[1754px] size-[24px] top-[448.5px]" data-name="history">
      <div className="absolute bottom-[37.5%] left-1/2 right-[35.42%] top-[35.42%]" data-name="Vector">
        <div className="absolute inset-[-9.23%_-23.91%_-12.88%_-17.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 8">
            <path d="M0.6 0.6V4.6L4.1 7.1" id="Vector" stroke="var(--stroke-0, #3B6FF0)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] size-[24px]">
          <History />
        </div>
      </div>
    </div>
  );
}

function Table9() {
  return (
    <div className="absolute left-[1759px] size-[20px] top-[346px]" data-name="table">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="table">
          <path d={svgPaths.p3cc96c00} id="Vector" stroke="var(--stroke-0, #3B6FF0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function User1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="user">
          <path d={svgPaths.p3f220f80} id="Vector" stroke="var(--stroke-0, #3A4147)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p36604d00} id="Vector_2" stroke="var(--stroke-0, #3A4147)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Frame61() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] items-center left-[1509px] overflow-clip px-[4px] py-0 top-[347px]">
      <User1 />
      <div className="flex flex-col font-['TT_Commons:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a4147] text-[16px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Aubrey Russell</p>
      </div>
      <div className="flex flex-col font-['TT_Commons:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#788386] text-[16px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Welding team</p>
      </div>
    </div>
  );
}

function User2() {
  return (
    <div className="absolute left-[1513px] size-[14px] top-[384px]" data-name="user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="user">
          <path d={svgPaths.p3f220f80} id="Vector" stroke="var(--stroke-0, #3A4147)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p36604d00} id="Vector_2" stroke="var(--stroke-0, #3A4147)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function User3() {
  return (
    <div className="absolute left-[1513px] size-[14px] top-[427px]" data-name="user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="user">
          <path d={svgPaths.p3f220f80} id="Vector" stroke="var(--stroke-0, #3A4147)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          <path d={svgPaths.p36604d00} id="Vector_2" stroke="var(--stroke-0, #3A4147)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[1.94%_48.56%_97.22%_48.52%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.524px_-5.22px] mask-size-[57.389px_22.867px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute bottom-[-8.52%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 10">
          <g id="Group">
            <path d={svgPaths.p2782f080} fill="var(--fill-0, #A0B9F8)" id="Vector" />
            <path d={svgPaths.p2440cae0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
            <path d={svgPaths.pa4ca200} fill="var(--fill-0, white)" id="Vector_3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[1.46%_48.52%_96.43%_48.49%]" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] absolute inset-[1.28%_7.42%_97.88%_86.81%] mask-position-[-364.681px,_-0.224px_-13.795px,_-5.22px] mask-size-[616.374px_54.309px,_114.033px_22.867px]" data-name="Group" style={{ maskImage: `url('${imgGroup1}'), url('${imgGroup2}')` }}>
      <div className="absolute bottom-0 left-0 right-[-0.77%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112 10">
          <g id="Group">
            <path d={svgPaths.p5e4d180} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p25efc00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-[0.79%_7.27%_97.09%_86.8%]" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] absolute inset-[0.88%_0.92%_95.91%_93.88%] mask-position-[-500.559px,_-1.2px_-9.517px,_-0.942px] mask-size-[616.374px_54.309px,_102.108px_37.159px]" data-name="Group" style={{ maskImage: `url('${imgGroup1}'), url('${imgGroup3}')` }}>
      <div className="absolute inset-[-2.89%_-1%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 102 37">
          <g id="Group">
            <path d={svgPaths.p2d8ffa00} id="Vector" stroke="var(--stroke-0, white)" strokeDasharray="1 4" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p231c7280} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p155a9900} fill="var(--fill-0, #1049D5)" id="Vector_3" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-[0.79%_0.86%_95.77%_93.82%]" data-name="Mask group">
      <Group3 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute bottom-[94.97%] contents left-[67.83%] right-[0.09%] top-0" data-name="Group">
      <div className="absolute inset-[1.22%_22.43%_96.19%_67.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.373px_-13.22px] mask-size-[616.374px_54.309px]" data-name="Vector" style={{ maskImage: `url('${imgGroup1}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 188 28">
          <path d={svgPaths.p2b074f80} fill="var(--fill-0, #1049D5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[1.22%_22.43%_96.19%_67.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.373px_-13.22px] mask-size-[616.374px_54.309px]" data-name="Vector" style={{ maskImage: `url('${imgGroup1}')` }}>
        <div className="absolute inset-[-1.79%_-0.27%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 189 29">
            <path d={svgPaths.p2bf74400} id="Vector" stroke="var(--stroke-0, #7197F4)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[1.92%_23.07%_97.02%_76.31%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-163.223px_-20.723px] mask-size-[616.374px_54.309px]" data-name="Vector" style={{ maskImage: `url('${imgGroup1}')` }}>
        <div className="absolute inset-[-5.25%_-5.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 13">
            <path d={svgPaths.p19ce7a80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[2.82%_22.99%_96.89%_76.84%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-173.397px_-30.477px] mask-size-[616.374px_54.309px]" data-name="Vector" style={{ maskImage: `url('${imgGroup1}')` }}>
        <div className="absolute inset-[-27.29%_-26.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d={svgPaths.p1e401100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[1.85%_20.81%_97.16%_78.49%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-204.961px_-20.009px] mask-size-[616.374px_54.309px]" data-name="Vector" style={{ maskImage: `url('${imgGroup1}')` }}>
        <div className="absolute inset-[-5.6%_-4.47%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
            <path d={svgPaths.p5be8bf0} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[3.11%_21.1%_96.82%_78.77%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-210.379px_-33.586px] mask-size-[616.374px_54.309px]" data-name="Vector" style={{ maskImage: `url('${imgGroup1}')` }}>
        <div className="absolute inset-[-116%_-32.03%_-84.26%_-32.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 3">
            <path d={svgPaths.p3856d980} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[1.46%_20.54%_97.49%_78.84%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-211.669px_-15.721px] mask-size-[616.374px_54.309px]" data-name="Vector" style={{ maskImage: `url('${imgGroup1}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p179f1e80} fill="var(--fill-0, #FA4500)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[1.46%_20.54%_97.49%_78.84%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-211.669px_-15.721px] mask-size-[616.374px_54.309px]" data-name="Vector" style={{ maskImage: `url('${imgGroup1}')` }}>
        <div className="absolute inset-[-4.37%_-4.19%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p1e0d8d80} id="Vector" stroke="var(--stroke-0, white)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[1.69%_20.77%_97.85%_79.06%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-215.991px_-18.235px] mask-size-[616.374px_54.309px]" data-name="Vector" style={{ maskImage: `url('${imgGroup1}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 5">
          <path d={svgPaths.p3f4acf00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[1.79%_19.18%_97.09%_80.27%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-239.245px_-19.294px] mask-size-[616.374px_54.309px]" data-name="Vector" style={{ maskImage: `url('${imgGroup1}')` }}>
        <div className="absolute inset-[-4.94%_-5.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
            <path d={svgPaths.p2e859200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[2%_19.3%_97.71%_80.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-245.208px_-21.541px] mask-size-[616.374px_54.309px]" data-name="Vector" style={{ maskImage: `url('${imgGroup1}')` }}>
        <div className="absolute bottom-0 left-[-7.31%] right-[-26.83%] top-[-18.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 4">
            <path d={svgPaths.p28c6bf80} id="Vector" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[3.04%_19.36%_96.96%_80.45%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-242.599px_-32.871px] mask-size-[616.374px_54.309px]" data-name="Vector" style={{ maskImage: `url('${imgGroup1}')` }}>
        <div className="absolute inset-[-0.6px_-16.1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
            <path d="M0.6 0.6H4.32656" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[3.18%_19.38%_96.82%_80.47%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-242.972px_-34.3px] mask-size-[616.374px_54.309px]" data-name="Vector" style={{ maskImage: `url('${imgGroup1}')` }}>
        <div className="absolute inset-[-0.6px_-20.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 2">
            <path d="M0.6 0.6H3.58125" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[1.85%_17.36%_96.82%_81.86%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-269.803px_-20.009px] mask-size-[616.374px_54.309px]" data-name="Vector" style={{ maskImage: `url('${imgGroup1}')` }}>
        <div className="absolute inset-[-4.2%_-4.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
            <path d={svgPaths.p3c7dcf00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[2.12%_17.59%_97.35%_82.25%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-277.256px_-22.867px] mask-size-[616.374px_54.309px]" data-name="Vector" style={{ maskImage: `url('${imgGroup1}')` }}>
        <div className="absolute inset-[-10.5%_-26.85%_-14%_-20.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 8">
            <path d={svgPaths.p3a1b18e0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[1.72%_16.47%_96.69%_83.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-301.106px_-18.579px] mask-size-[616.374px_54.309px]" data-name="Vector" style={{ maskImage: `url('${imgGroup1}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 18">
          <path d={svgPaths.p10a7eac0} fill="var(--fill-0, #A0B9F8)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[2.71%_14.91%_96.89%_84.47%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-319.739px_-29.298px] mask-size-[616.374px_54.309px]" data-name="Vector" style={{ maskImage: `url('${imgGroup1}')` }}>
        <div className="absolute inset-[-13.99%_-5.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 6">
            <path d={svgPaths.p3af43a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[1.92%_15.07%_97.55%_84.62%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-322.72px_-20.723px] mask-size-[616.374px_54.309px]" data-name="Vector" style={{ maskImage: `url('${imgGroup1}')` }}>
        <div className="absolute inset-[-10.5%_-10.06%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7">
            <path d={svgPaths.p1192a000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[94.97%] left-[86.02%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-349.552px_0px] mask-size-[616.374px_54.309px] right-[0.09%] top-0" data-name="Vector" style={{ maskImage: `url('${imgGroup1}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 267 55">
          <path d={svgPaths.p5986700} fill="var(--fill-0, #1049D5)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[3.1%_7%_96.05%_86.84%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-365.412px_-33.53px] mask-size-[616.374px_54.309px]" data-name="Vector" style={{ maskImage: `url('${imgGroup1}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119 10">
          <path d={svgPaths.p10ff0b00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <ClipPathGroup1 />
      <MaskGroup />
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute bottom-[94.97%] contents left-[67.81%] right-[0.09%] top-0" data-name="Clip path group">
      <Group4 />
    </div>
  );
}

export default function Overview() {
  return (
    <div className="bg-[#f5f7fa] relative size-full" data-name="Overview">
      <Header1 />
      <Frame309 />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-0 top-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "284", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="relative w-[284px]">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 284 1">
                <path d={svgPaths.p8b9000} id="Line 31" stroke="var(--stroke-0, #A0B9F8)" strokeOpacity="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-0 top-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "284", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="relative w-[284px]">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 284 1">
                <path d={svgPaths.p1fb06280} id="Line 32" stroke="var(--stroke-0, #A0B9F8)" strokeOpacity="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-0 top-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "284", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="relative w-[284px]">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 284 1">
                <path d={svgPaths.p18a09880} id="Line 33" stroke="var(--stroke-0, #A0B9F8)" strokeOpacity="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-0 top-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "284", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="relative w-[284px]">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 284 1">
                <path d={svgPaths.p43293c0} id="Line 35" stroke="var(--stroke-0, #A0B9F8)" strokeOpacity="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-0 top-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "226", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="relative w-[226px]">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 226 1">
                <path d={svgPaths.p3c9e1f40} id="Line 36" stroke="var(--stroke-0, #A0B9F8)" strokeOpacity="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[81px] top-[380.5px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "220.25", "--transform-inner-height": "7.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[7.5px] relative w-[220.25px]">
            <div className="absolute bottom-0 left-[-0.23%] right-0 top-[-6.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 221 8">
                <path d={svgPaths.p1efbe40} id="Line 30" stroke="var(--stroke-0, #B4BFCF)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <History1 />
      <Table9 />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[81px] top-[378px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "13.5", "--transform-inner-height": "7.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[7.5px] relative w-[13.5px]">
            <div className="absolute bottom-0 left-[-3.7%] right-0 top-[-6.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">
                <path d={svgPaths.pc2746d0} id="Line 41" stroke="var(--stroke-0, #B4BFCF)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[81px] top-[419px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "13.5", "--transform-inner-height": "7.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[7.5px] relative w-[13.5px]">
            <div className="absolute bottom-0 left-[-3.7%] right-0 top-[-6.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">
                <path d={svgPaths.pc2746d0} id="Line 41" stroke="var(--stroke-0, #B4BFCF)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[81px] top-[461px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "13.5", "--transform-inner-height": "7.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[7.5px] relative w-[13.5px]">
            <div className="absolute bottom-0 left-[-3.7%] right-0 top-[-6.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">
                <path d={svgPaths.pc2746d0} id="Line 41" stroke="var(--stroke-0, #B4BFCF)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[81px] top-[503px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "13.5", "--transform-inner-height": "7.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[7.5px] relative w-[13.5px]">
            <div className="absolute bottom-0 left-[-3.7%] right-0 top-[-6.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">
                <path d={svgPaths.pc2746d0} id="Line 41" stroke="var(--stroke-0, #B4BFCF)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[81px] top-[541px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "13.5", "--transform-inner-height": "7.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[7.5px] relative w-[13.5px]">
            <div className="absolute bottom-0 left-[-3.7%] right-0 top-[-6.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">
                <path d={svgPaths.pc2746d0} id="Line 41" stroke="var(--stroke-0, #B4BFCF)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['TT_Commons:Medium',sans-serif] leading-[20px] left-[599px] not-italic text-[#677684] text-[16px] text-nowrap top-[351px] tracking-[0.7px] whitespace-pre" dir="auto">
        String
      </p>
      <p className="absolute font-['TT_Commons:Medium',sans-serif] leading-[20px] left-[839px] not-italic text-[#677684] text-[16px] text-nowrap top-[351px] tracking-[0.7px] whitespace-pre" dir="auto">
        22-656-233-97
      </p>
      <div className="absolute flex flex-col font-['TT_Commons:Regular',sans-serif] justify-center leading-[0] left-[1316px] not-italic text-[#3a4147] text-[0px] text-nowrap top-[355px] translate-y-[-50%]">
        <p className="leading-[20px] text-[16px] whitespace-pre">
          <span>{`6/26/2023    `}</span>
          <span className="text-[#788386]">4:15:17 PM</span>
        </p>
      </div>
      <Frame61 />
      <div className="absolute flex flex-col font-['TT_Commons:Regular',sans-serif] justify-center leading-[0] left-[1316px] not-italic text-[#3a4147] text-[0px] text-nowrap top-[395px] translate-y-[-50%]">
        <p className="leading-[20px] text-[16px] whitespace-pre">
          9/12<span>{`/2023    `}</span>
          <span className="text-[#788386]">4:15:17 PM</span>
        </p>
      </div>
      <p className="absolute font-['TT_Commons:Medium',sans-serif] leading-[20px] left-[600px] not-italic text-[#677684] text-[16px] text-nowrap top-[395px] tracking-[0.7px] whitespace-pre">String</p>
      <p className="absolute font-['TT_Commons:Medium',sans-serif] leading-[20px] left-[839px] not-italic text-[#677684] text-[16px] text-nowrap top-[395px] tracking-[0.7px] whitespace-pre">{`Carry out the tests as detailed in the "packaging process"`}</p>
      <div className="absolute flex flex-col font-['TT_Commons:Regular',sans-serif] justify-center leading-[0] left-[1535px] not-italic text-[#3a4147] text-[16px] text-nowrap top-[393px] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">Aubrey Russell</p>
      </div>
      <div className="absolute flex flex-col font-['TT_Commons:Regular',sans-serif] justify-center leading-[0] left-[1535px] not-italic text-[#3a4147] text-[16px] text-nowrap top-[436px] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">Aubrey Russell</p>
      </div>
      <div className="absolute flex flex-col font-['TT_Commons:Regular',sans-serif] justify-center leading-[0] left-[1640px] not-italic text-[#788386] text-[16px] text-nowrap top-[393px] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">Welding team</p>
      </div>
      <div className="absolute flex flex-col font-['TT_Commons:Regular',sans-serif] justify-center leading-[0] left-[1640px] not-italic text-[#788386] text-[16px] text-nowrap top-[436px] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">Welding team</p>
      </div>
      <div className="absolute flex flex-col font-['TT_Commons:Regular',sans-serif] justify-center leading-[0] left-[1316px] not-italic text-[#3a4147] text-[0px] text-nowrap top-[436px] translate-y-[-50%]">
        <p className="leading-[20px] text-[16px] whitespace-pre">
          1/2/2024 <span className="text-[#788386]">4:15:17 PM</span>
        </p>
      </div>
      <p className="absolute font-['TT_Commons:Medium',sans-serif] leading-[20px] left-[600px] not-italic text-[#677684] text-[16px] text-nowrap top-[431px] tracking-[0.7px] whitespace-pre">Multiline</p>
      <p className="absolute font-['TT_Commons:Medium',sans-serif] leading-[20px] left-[839px] not-italic text-[#677684] text-[16px] text-nowrap top-[431px] tracking-[0.7px] whitespace-pre">Test: the integrity of the controller for the integrity of the plug</p>
      <User2 />
      <User3 />
      <div className="absolute bottom-[95%] left-0 right-0 top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 54">
          <path d="M1920 0H0V54H1920V0Z" fill="var(--fill-0, #3B6FF0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[2.51%_97.94%_97.49%_1.36%]" data-name="Vector">
        <div className="absolute inset-[-0.6px_-4.47%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 2">
            <path d="M0.6 0.6H14.0156" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[2.12%_97.94%_97.88%_1.36%]" data-name="Vector">
        <div className="absolute inset-[-0.6px_-4.47%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 2">
            <path d="M0.6 0.6H14.0156" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[2.91%_97.94%_97.09%_1.36%]" data-name="Vector">
        <div className="absolute inset-[-0.6px_-4.47%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 2">
            <path d="M0.6 0.6H14.0156" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[1.92%_92.16%_96.96%_3.14%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 13">
          <path d={svgPaths.p2a3a8000} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <ClipPathGroup />
      <ClipPathGroup2 />
      <div className="absolute inset-[1.19%_88.94%_96.16%_8.73%]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" height="28.584" src={imgVector} width="44.719" />
      </div>
      <div className="absolute inset-[1.72%_91.73%_96.69%_8.23%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 18">
          <path d={svgPaths.p10a7eac0} fill="var(--fill-0, #7197F4)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}