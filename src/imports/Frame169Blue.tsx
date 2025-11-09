import { img } from "./svg-alv58";

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-0 top-[260px]">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#4c556b] text-[18px] w-[686px]" dir="auto">
        Mobideo is a digital platform designed to support field operations for large-scale industrial sites.
        <br aria-hidden="true" />
        The system enables on-site teams to execute tasks, update progress, and ensure compliance — all in real time.
        <br aria-hidden="true" />
        As a Product Designer, I worked closely with the Product Manager and Engineering team to redefine the platform's usability and streamline the task execution experience.
      </p>
    </div>
  );
}

export default function Frame169Blue() {
  return (
    <div className="relative size-full bg-transparent">
      <p className="absolute font-['Lateef:SemiBold',sans-serif] leading-[normal] left-0 not-italic text-[#3B6FF0] text-[49px] top-[37px]" dir="auto">
        Mobideo — Work Management Platform
      </p>
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] left-0 text-[#626b7e] text-[18px] text-nowrap top-[101px] whitespace-pre" dir="auto">
        Enterprise platform for Intel teams
      </p>
      <p className="absolute font-['Lateef:SemiBold',sans-serif] leading-[normal] left-0 not-italic text-[#3B6FF0] text-[42px] text-nowrap top-[195px] whitespace-pre" dir="auto">
        Project Overview
      </p>
      <p className="absolute font-['Lateef:SemiBold',sans-serif] leading-[normal] left-0 not-italic text-[#3B6FF0] text-[42px] text-nowrap top-[510px] whitespace-pre" dir="auto">
        The Challenge
      </p>
      <Frame3 />
      <div className="absolute h-[30px] left-0 overflow-clip top-0 w-[167px]" data-name="Logo - Color">
        <div className="absolute bg-[#fa4500] bottom-0 left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[6.326px_3.75px] mask-size-[153.083px_21.25px] right-[72.73%] top-0" style={{ maskImage: `url('${img}')` }} />
        <div className="absolute bg-black bottom-0 left-[27.27%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-39.22px_3.75px] mask-size-[153.083px_21.25px] right-0 top-0" style={{ maskImage: `url('${img}')` }} />
      </div>
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal leading-[32px] left-0 text-[#4c556b] text-[18px] top-[575px] w-[686px]" dir="auto">
        Field teams in industrial sites operate in high-pressure, complex environments.
        <br aria-hidden="true" />
        The previous interface was dense and inconsistent, forcing users to navigate between multiple screens and rely heavily on manual input.
        <br aria-hidden="true" />
        Our goal was to create an interface that:
        <br aria-hidden="true" />
        <br aria-hidden="true" />
        • Simplifies data entry and task tracking
        <br aria-hidden="true" />
        • Supports real-time collaboration between field and control room
        <br aria-hidden="true" />
        • Works seamlessly across desktop and mobile devices
        <br aria-hidden="true" />
        • Aligns with the company's new Design System
      </p>
    </div>
  );
}
