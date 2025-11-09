import { useState, useEffect } from "react";
import { motion } from "motion/react";
import svgPaths from "./svg-1jf70j8614";
import imgImage1 from "figma:asset/9422b8624b15a894d7a8eeddb1c837d02253efa7.png";
import imgImage2 from "figma:asset/c0173ffeb7b4a18af802cfc67077c2f6a3ac0671.png";

function AndLogic() {
  return (
    <div className="absolute h-[67.958px] left-[98px] top-[183.04px] w-[308.928px]" data-name="And Logic">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 309 68">
        <g id="And Logic">
          <path d={svgPaths.p392d6a80} fill="var(--fill-0, #3B6FF0)" id="Vector" />
          <path d={svgPaths.p932ad00} fill="var(--fill-0, #3B6FF0)" id="Vector_2" />
          <path d={svgPaths.p196d2780} fill="var(--fill-0, #3B6FF0)" id="Vector_3" />
          <path d={svgPaths.p3e90ca00} fill="var(--fill-0, #3B6FF0)" id="Vector_4" />
          <path d={svgPaths.p2546e2f0} fill="var(--fill-0, #3B6FF0)" id="Vector_5" />
          <path d={svgPaths.p117b6ce0} fill="var(--fill-0, #3B6FF0)" id="Vector_6" />
          <path d={svgPaths.p2791ae00} fill="var(--fill-0, #3B6FF0)" id="Vector_7" />
          <path d={svgPaths.p38bf45f0} fill="var(--fill-0, #3B6FF0)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function DesignWithEmpathy() {
  return (
    <div className="absolute h-[67.958px] left-[100.98px] top-[95px] w-[675.551px]" data-name="Design with empathy">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 676 68">
        <g id="Design with empathy">
          <path d={svgPaths.pa5bd500} fill="var(--fill-0, #3B6FF0)" id="Vector" />
          <path d={svgPaths.p25c94700} fill="var(--fill-0, #3B6FF0)" id="Vector_2" />
          <path d={svgPaths.p1fb69100} fill="var(--fill-0, #3B6FF0)" id="Vector_3" />
          <path d={svgPaths.p2e835200} fill="var(--fill-0, #3B6FF0)" id="Vector_4" />
          <path d={svgPaths.p1842f800} fill="var(--fill-0, #3B6FF0)" id="Vector_5" />
          <path d={svgPaths.p2d30700} fill="var(--fill-0, #3B6FF0)" id="Vector_6" />
          <path d={svgPaths.p2538f100} fill="var(--fill-0, #3B6FF0)" id="Vector_7" />
          <path d={svgPaths.p37b480} fill="var(--fill-0, #3B6FF0)" id="Vector_8" />
          <path d={svgPaths.p358fdbf0} fill="var(--fill-0, #3B6FF0)" id="Vector_9" />
          <path d={svgPaths.p2e5ce00} fill="var(--fill-0, #3B6FF0)" id="Vector_10" />
          <path d={svgPaths.p10d5ba00} fill="var(--fill-0, #3B6FF0)" id="Vector_11" />
          <path d={svgPaths.p3c529f80} fill="var(--fill-0, #3B6FF0)" id="Vector_12" />
          <path d={svgPaths.p24e58300} fill="var(--fill-0, #3B6FF0)" id="Vector_13" />
          <path d={svgPaths.p669d80} fill="var(--fill-0, #3B6FF0)" id="Vector_14" />
          <path d={svgPaths.p3675fa00} fill="var(--fill-0, #3B6FF0)" id="Vector_15" />
          <path d={svgPaths.p592c4c0} fill="var(--fill-0, #3B6FF0)" id="Vector_16" />
          <path d={svgPaths.p3348d200} fill="var(--fill-0, #3B6FF0)" id="Vector_17" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[61.401px] relative w-[23.189px]">
      <div className="absolute bottom-0 left-0 right-0 top-[-2.44%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 63">
          <g id="Group 1">
            <path d={svgPaths.p27902580} fill="var(--fill-0, #A7BAE0)" fillOpacity="0.9" id="Vector 10" />
            <path d={svgPaths.p10907f80} fill="var(--fill-0, #A7BAE0)" fillOpacity="0.9" id="Vector 12" />
            <path d={svgPaths.p2f046980} id="Ellipse 2" stroke="var(--stroke-0, #3B6FF0)" strokeWidth="3" />
            <path d={svgPaths.p3048e200} id="Vector" stroke="var(--stroke-0, #3B6FF0)" strokeWidth="3" />
            <path d={svgPaths.p37528e80} fill="var(--fill-0, #A7BAE0)" fillOpacity="0.9" id="Vector 11" />
            <path d={svgPaths.p210f3f80} id="Vector 9" stroke="var(--stroke-0, #3B6FF0)" strokeWidth="3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame23() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('works');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div 
      className="relative rounded-[14px] shrink-0 w-full cursor-pointer transition-colors duration-300"
      onClick={scrollToProjects}
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-0 relative w-full">
          <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[64px] relative shrink-0 text-[#6185a2] text-[18px] text-nowrap tracking-[-0.18px] whitespace-pre" dir="auto">
            Selected Projects
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('works');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div 
      className="relative shrink-0 size-[36px] cursor-pointer"
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      onClick={scrollToProjects}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Frame 25">
          <rect fill="var(--fill-0, #3B6FF0)" height="36" rx="18" width="36" />
          <path d={svgPaths.p1127ba40} fill="var(--fill-0, #F5F8FF)" id="Vector" />
        </g>
      </svg>
    </motion.div>
  );
}

function Frame24() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-1/2 -translate-x-1/2 top-[730px] w-[151px] z-20">
      <Frame23 />
      <Frame25 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute bg-[#f5f8ff] h-[672px] left-0 overflow-clip rounded-bl-[82px] top-0 w-[1462px]">
      <div className="absolute h-[7px] left-[498.13px] top-[158px] w-[94px]" data-name="Vector 4 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94 7">
          <path d={svgPaths.p1520e900} fill="var(--fill-0, #3B6FF0)" id="Vector 4 (Stroke)" />
        </svg>
      </div>
      <div className="absolute h-[4px] left-[629.13px] top-[158px] w-[98px]" data-name="Vector 5 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98 4">
          <path d={svgPaths.p4c15100} fill="var(--fill-0, #3B6FF0)" id="Vector 5 (Stroke)" />
        </svg>
      </div>
      <div className="absolute h-[5px] left-[764.13px] top-[159px] w-[42px]" data-name="Vector 6 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 5">
          <path d={svgPaths.p3d858e00} fill="var(--fill-0, #3B6FF0)" id="Vector 6 (Stroke)" />
        </svg>
      </div>
      <div className="absolute h-[2.784px] left-[235.13px] top-[242.43px] w-[77px]">
        <div className="absolute inset-[-71.84%_-2.6%_-71.85%_-2.6%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81 7">
            <path d={svgPaths.p16dce200} id="Vector 7" stroke="var(--stroke-0, #3B6FF0)" strokeLinecap="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[5px] left-[360.13px] top-[243px] w-[51px]" data-name="Vector 8 (Stroke)">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 5">
          <path d={svgPaths.p11e9a600} fill="var(--fill-0, #3B6FF0)" id="Vector 8 (Stroke)" />
        </svg>
      </div>
      <AndLogic />
      <DesignWithEmpathy />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.7071067690849304)+(var(--transform-inner-height)*0.7071067690849304)))] items-center justify-center left-[783.96px] top-[89.37px] w-[calc(1px*((var(--transform-inner-height)*0.7071067690849304)+(var(--transform-inner-width)*0.7071067690849304)))]" style={{ "--transform-inner-width": "23.1875", "--transform-inner-height": "61.390625" } as React.CSSProperties}>
        <div className="flex-none rotate-[45deg]">
          <Group1 />
        </div>
      </div>
      <div className="absolute inset-[26.79%_68.81%_72.62%_31.12%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 4">
          <path d={svgPaths.p22684480} fill="var(--fill-0, #3B6FF0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[27.83%_67.58%_71.58%_32.15%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p39f83f00} fill="var(--fill-0, #3B6FF0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[32.74%_69.84%_66.67%_29.89%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p25dccb00} fill="var(--fill-0, #3B6FF0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[30.51%_67.1%_69.34%_32.56%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 1">
          <path d={svgPaths.p1dbeeec0} fill="var(--fill-0, #3B6FF0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[30.51%_70.25%_69.34%_29.41%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 1">
          <path d={svgPaths.p213b1600} fill="var(--fill-0, #3B6FF0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[32.74%_67.58%_66.67%_32.15%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p195cce00} fill="var(--fill-0, #3B6FF0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[27.83%_69.84%_71.58%_29.89%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p55f8180} fill="var(--fill-0, #3B6FF0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[27.08%_68.13%_72.32%_31.67%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 4">
          <path d={svgPaths.p1c944400} fill="var(--fill-0, #3B6FF0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[29.02%_67.24%_70.54%_32.49%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 3">
          <path d={svgPaths.p15bcbc00} fill="var(--fill-0, #3B6FF0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.7%_70.18%_68.01%_29.55%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 2">
          <path d={svgPaths.pfebce30} fill="var(--fill-0, #3B6FF0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.7%_67.24%_67.86%_32.49%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 3">
          <path d={svgPaths.p31050a80} fill="var(--fill-0, #3B6FF0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[29.02%_70.18%_70.54%_29.55%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 3">
          <path d={svgPaths.p5d0f590} fill="var(--fill-0, #3B6FF0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[27.08%_69.36%_72.32%_30.44%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 4">
          <path d={svgPaths.p3b541700} fill="var(--fill-0, #3B6FF0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[34.97%_68.4%_64.73%_30.71%]" data-name="Vector">
        <div className="absolute inset-[-25%_-3.85%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 3">
            <path d={svgPaths.p35cf8800} fill="var(--fill-0, #3B6FF0)" id="Vector" stroke="var(--stroke-0, #3B6FF0)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[35.56%_68.4%_64.14%_30.71%]" data-name="Vector">
        <div className="absolute inset-[-25%_-3.85%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 3">
            <path d={svgPaths.p15f77c80} fill="var(--fill-0, #3B6FF0)" id="Vector" stroke="var(--stroke-0, #3B6FF0)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[36.16%_68.61%_63.39%_30.98%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4">
            <path d={svgPaths.p3d3f2800} fill="var(--fill-0, #3B6FF0)" id="Vector" stroke="var(--stroke-0, #3B6FF0)" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[39.635px] left-[439.95px] top-[190.87px] w-[14.552px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 40">
          <path d={svgPaths.p33079e80} fill="var(--fill-0, #A7BAE0)" id="Vector 13" />
        </svg>
      </div>
      <div className="absolute inset-[27.98%_67.65%_65.33%_30.03%]" data-name="Vector">
        <div className="absolute inset-[-1.11%_-1.47%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 46">
            <path d={svgPaths.p7dc1f0} fill="var(--fill-0, #3B6FF0)" id="Vector" stroke="var(--stroke-0, #3B6FF0)" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[14px] left-[782px] top-[142px] w-[10.565px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 14">
          <path d={svgPaths.p125daff1} fill="var(--fill-0, #AFC0E4)" id="Ellipse 3" />
        </svg>
      </div>
      <div className="absolute h-[13px] left-[781.99px] top-[142px] w-[5.512px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 13">
          <path d={svgPaths.p270bab00} fill="var(--fill-0, #DDE8FF)" id="Vector 14" />
        </svg>
      </div>
    </div>
  );
}

export default function Frame28() {
  const [isHovered, setIsHovered] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setStartAnimation(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  const text1 = ["Hi", "!", "i'm", "Alon", "."];
  const text2 = "Product Designer crafting clear and scalable experiences,".split(' ');
  const text3 = "that make complex systems feel simple.".split(' ');
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };
  
  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      rotateX: -90,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };
  
  return (
    <div className="relative size-full">
      <Frame15 />
      <div 
        className="absolute h-[672px] left-[1126px] rounded-br-[82px] rounded-tr-[82px] top-0 w-[469px] cursor-pointer" 
        data-name="image 1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Base image */}
        <img 
          alt="" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-br-[82px] rounded-tr-[82px] size-full transition-opacity duration-[1200ms] ease-in-out" 
          src={imgImage1} 
          style={{ opacity: isHovered ? 0 : 1 }}
        />
        {/* Hover image */}
        <img 
          alt="" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-br-[82px] rounded-tr-[82px] size-full transition-opacity duration-[1200ms] ease-in-out" 
          src={imgImage2} 
          style={{ opacity: isHovered ? 1 : 0 }}
        />
        
        {/* Comic Speech Bubble */}
        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: -10 }}
          animate={isHovered ? { 
            scale: 1, 
            opacity: 1, 
            rotate: 0 
          } : { 
            scale: 0, 
            opacity: 0, 
            rotate: -10 
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className="absolute -left-[280px] top-[120px] z-10"
          style={{ transformOrigin: "bottom right" }}
        >
          {/* Speech bubble */}
          <div className="relative">
            {/* Main bubble */}
            <div className="bg-white border-4 border-[#3B6FF0] rounded-3xl px-8 py-6 shadow-2xl relative">
              <p 
                className="text-[#3B6FF0] m-0 whitespace-nowrap"
                style={{
                  fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive",
                  fontSize: "32px",
                  fontWeight: "bold",
                  letterSpacing: "0.5px"
                }}
              >
                Don't be judgment!
              </p>
            </div>
            
            {/* Bubble tail */}
            <svg 
              className="absolute -right-[45px] top-[50%] -translate-y-1/2" 
              width="50" 
              height="40" 
              viewBox="0 0 50 40"
            >
              <path 
                d="M 5 20 Q 25 10, 45 5 Q 30 20, 45 35 Q 25 30, 5 20 Z" 
                fill="white" 
                stroke="#3B6FF0" 
                strokeWidth="4"
              />
            </svg>
          </div>
        </motion.div>
      </div>
      <motion.div 
        className="absolute font-['Montserrat:Medium',sans-serif] font-medium h-[188px] leading-[46px] left-[101px] text-[#306493] text-[26px] top-[299px] tracking-[-0.26px] w-[902px]"
        initial="hidden"
        animate={startAnimation ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <p className="mb-0" dir="auto">
          {text1.map((word, index) => {
            const isHighlight = word === "Hi" || word === "Alon";
            return (
              <motion.span
                key={`word1-${index}`}
                variants={wordVariants}
                className={`inline-block ${
                  isHighlight 
                    ? "font-['Montserrat:SemiBold',sans-serif] font-semibold text-[#306493] mr-[0.15em]" 
                    : word === "!" || word === "." ? "" : "mr-[0.3em]"
                }`}
                whileHover={{
                  scale: isHighlight ? 1.05 : 1,
                  color: isHighlight ? "#3B6FF0" : "#306493",
                  transition: { duration: 0.2 }
                }}
              >
                {word}
              </motion.span>
            );
          })}
        </p>
        
        <p className="mb-0" dir="auto">
          {text2.map((word, index) => (
            <motion.span
              key={`word2-${index}`}
              variants={wordVariants}
              className="inline-block mr-[0.3em]"
              whileHover={{
                scale: 1.02,
                y: -2,
                transition: { duration: 0.2 }
              }}
            >
              {word}
            </motion.span>
          ))}
        </p>
        
        <p dir="auto">
          {text3.map((word, index) => (
            <motion.span
              key={`word3-${index}`}
              variants={wordVariants}
              className="inline-block mr-[0.3em]"
              whileHover={{
                scale: 1.02,
                y: -2,
                transition: { duration: 0.2 }
              }}
            >
              {word}
            </motion.span>
          ))}
        </p>
      </motion.div>
      
      {/* Skills Tags */}
      <motion.div 
        className="absolute left-[101px] top-[510px] flex flex-wrap gap-2.5"
        initial={{ opacity: 0, y: 10 }}
        animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        {['Design', 'UX', 'UI', 'Design System', 'CSS', 'HTML'].map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={startAnimation ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ 
              delay: 1.5 + (index * 0.07),
              duration: 0.5,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#3B6FF0",
              color: "#FFFFFF",
              transition: { duration: 0.2 }
            }}
            className="px-4 py-2 bg-[#EFF6FF] text-[#3B6FF0] rounded-full border border-[#3B6FF0] cursor-default transition-colors"
            style={{
              fontFamily: "'Montserrat:Medium',sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.3px"
            }}
          >
            #{skill}
          </motion.div>
        ))}
      </motion.div>
      
      {/* Selected Projects Button - Outside Blue Frame */}
      <Frame24 />
    </div>
  );
}
