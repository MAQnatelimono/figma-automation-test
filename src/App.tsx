import { ImageWithFallback } from './components/figma/ImageWithFallback';
import svgPaths from "./imports/svg-khihq8b4u8";

function Frame93() {
  return (
    <div className="absolute h-[401px] left-[848px] top-[212px] w-[846px]">
      <div className="absolute h-[525px] left-[-59px] top-[39px] w-[926px]" data-name="image 3">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1655300256486-4ec7251bf84e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhciUyMHBhbmVsc3xlbnwxfHx8fDE3NTU4MTYwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Solar panels"
          className="w-full h-full object-cover"
          style={{ objectPosition: "50.47% 6.34%", transform: "scale(1.4484)" }}
        />
      </div>
    </div>
  );
}

function ImageBackground() {
  return (
    <div className="absolute bg-[#fefbf9] h-[824px] left-0 overflow-clip top-0 w-[1920px]" data-name="Image Background">
      <div className="absolute bg-[#fefcfa] h-[824px] left-0 top-0 w-[1920px]" data-name="Replace This" />
      <Frame93 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#54987b] box-border content-stretch flex gap-4 items-center justify-center left-[150px] px-[30px] py-5 rounded-md top-[699px]" data-name="Button">
      <div className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ffffff] text-[20px] text-nowrap tracking-[0.8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-none whitespace-pre">Get Report</p>
      </div>
      <div className="h-0 relative shrink-0 w-[26px]" data-name="Icon">
        <div className="absolute bottom-[-3.68px] left-0 right-[-1.92%] top-[-3.68px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 8">
            <path d={svgPaths.p18b2c310} fill="var(--stroke-0, white)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <div className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#242424] text-[20px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.3] whitespace-pre">2025</p>
      </div>
      <div className="h-0 relative shrink-0 w-6">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
            <line id="Line 1" stroke="var(--stroke-0, #242424)" x2="24" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TimelineBox2() {
  return (
    <div className="content-stretch flex gap-2.5 items-start justify-start relative shrink-0 w-[292px]" data-name="Timeline box 2">
      <Frame15 />
      <div className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#242424] text-[20px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.3] whitespace-pre">LEED Gold Certification</p>
      </div>
    </div>
  );
}

function TimelineBox() {
  return (
    <div className="absolute content-stretch flex gap-[30px] items-start justify-start left-[150px] top-[65px]" data-name="Timeline box">
      <TimelineBox2 />
    </div>
  );
}

function Component1HeroSection() {
  return (
    <div className="[grid-area:1_/_1] bg-[#242424] h-[824px] ml-0 mt-0 overflow-clip relative w-[1920px]" data-name="1 Hero Section">
      <ImageBackground />
      <Button />
      <div className="absolute font-['Roboto:Regular',_sans-serif] font-normal leading-[0] left-[150px] text-[#242424] text-[20px] top-[441px] w-[678px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4]">At MAQ Software, sustainability is at the heart of how we operate. As a global leader in technology and AI engineering, we are committed to reducing our environmental impact while helping clients achieve their sustainability goals.</p>
      </div>
      <div className="absolute font-['Roboto:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal leading-[1.3] left-[150px] text-[#242424] text-[64px] top-[237px] w-[916px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">{`Sustainability is the `}</p>
        <p>way Forward →</p>
      </div>
      <TimelineBox />
    </div>
  );
}

function Group106170() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <Component1HeroSection />
    </div>
  );
}

function Frame252() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#242627] text-[60px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Discover our commitment to driving sustainability forward</p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-center justify-center pl-0 pr-16 py-0 relative w-full">
          <Frame252 />
        </div>
      </div>
    </div>
  );
}

function Frame273() {
  return (
    <div className="content-stretch flex gap-6 items-center justify-start relative shrink-0 w-full">
      <Frame49 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-0 left-[5.08%] right-[5.08%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 49">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p353dff00} fill="var(--fill-0, #91CF96)" id="Vector" />
            <path d={svgPaths.p37e90a00} fill="var(--fill-0, #91CF96)" id="Vector_2" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p18e5a700} fill="var(--fill-0, #5ABA63)" id="Vector_3" />
            <path d={svgPaths.p365d1c80} fill="var(--fill-0, #5ABA63)" id="Vector_4" />
            <path d={svgPaths.p20274470} fill="var(--fill-0, #5ABA63)" id="Vector_5" />
          </g>
          <path d={svgPaths.p3d47be90} fill="var(--fill-0, #864D18)" id="Vector_6" />
          <path d={svgPaths.p2a8c5f0} fill="var(--fill-0, #AF6D2D)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[49px]" data-name="Component 1">
      <Group2 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-[#f1f7f1] content-stretch flex gap-2.5 items-center justify-center relative rounded shrink-0 size-[72px]">
      <Component1 />
    </div>
  );
}

function Frame274() {
  return (
    <div className="h-[102px] leading-[0] relative shrink-0 w-[624px]">
      <div className="absolute font-['Roboto:SemiBold',_sans-serif] font-semibold left-0 text-[#242627] text-[32px] top-0 w-[624px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Carbon Net Zero</p>
      </div>
      <div className="absolute font-['Roboto:Regular',_sans-serif] font-normal left-0 text-[#797979] text-[16px] top-[54px] w-[624px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Discover innovative methods to grow food sustainably. There are endless possibilities. Promote soil health and biodiversity with eco-friendly farming practices.</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-4 items-start justify-start relative shrink-0 w-full">
      <Frame55 />
      <Frame274 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-8 grow h-full items-start justify-start min-h-px min-w-px relative shrink-0">
      <Frame47 />
    </div>
  );
}

function ServiceCard1() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex gap-2.5 items-center justify-center p-[40px] relative rounded shrink-0 w-[819px]" data-name="Service-card-1">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame48 />
      </div>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-start flex flex-wrap gap-6 items-start justify-center relative shrink-0 w-[1734px]">
      {[...Array(4).keys()].map((_, i) => (
        <ServiceCard1 key={i} />
      ))}
    </div>
  );
}

function Frame225() {
  return (
    <div className="content-stretch flex flex-col gap-10 items-center justify-center relative shrink-0 w-[931px]">
      <Frame115 />
    </div>
  );
}

function Frame226() {
  return (
    <div className="content-stretch flex flex-col gap-16 items-center justify-start relative shrink-0 w-full">
      <Frame273 />
      <Frame225 />
    </div>
  );
}

function Frame248() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
      <Frame226 />
    </div>
  );
}

function Services2() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Services-2">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start pl-[135px] pr-[115px] py-32 relative w-full">
          <Frame248 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start justify-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#242627] text-[60px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">Our Achievements</p>
      </div>
    </div>
  );
}

function Sunrise() {
  return (
    <div className="absolute left-[35.28px] size-[36.813px] top-[35.28px]" data-name="sunrise">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
        <g clipPath="url(#clip0_1_1211)" id="sunrise">
          <path d={svgPaths.pe63cb00} id="Vector" stroke="var(--stroke-0, #F6FEF7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.06774" />
          <path d="M18.4065 3.06779V13.8049" id="Vector_2" stroke="var(--stroke-0, #F6FEF7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.06774" />
          <path d={svgPaths.pd225b80} id="Vector_3" stroke="var(--stroke-0, #F6FEF7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.06774" />
          <path d="M1.53387 27.6097H4.60161" id="Vector_4" stroke="var(--stroke-0, #F6FEF7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.06774" />
          <path d="M32.2114 27.6097H35.2791" id="Vector_5" stroke="var(--stroke-0, #F6FEF7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.06774" />
          <path d={svgPaths.p6fb808} id="Vector_6" stroke="var(--stroke-0, #F6FEF7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.06774" />
          <path d="M35.2791 33.7452H1.53387" id="Vector_7" stroke="var(--stroke-0, #F6FEF7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.06774" />
          <path d={svgPaths.p941cd00} id="Vector_8" stroke="var(--stroke-0, #F6FEF7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.06774" />
        </g>
        <defs>
          <clipPath id="clip0_1_1211">
            <rect fill="white" height="36.8129" width="36.8129" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#6e9e8e] overflow-clip relative rounded-[9.203px] shrink-0 size-[107.371px]" data-name="Icon">
      <Sunrise />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[24.542px] items-start justify-start leading-[0] relative shrink-0" data-name="Title">
      <div className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0 text-[#051c2f] text-[38.347px] w-[493.907px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.3]">LEED Gold Certification</p>
      </div>
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#2f4252] text-[24.542px] w-[493.907px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.4]">Our renewable energy solutions are not only environmentally friendly, but also cost-effective.</p>
      </div>
    </div>
  );
}

function IconBox1() {
  return (
    <div className="content-stretch flex flex-col gap-[30.677px] h-[365px] items-start justify-start relative shrink-0" data-name="Icon box 1">
      <Icon />
      <Title />
    </div>
  );
}

function Sunrise1() {
  return (
    <div className="absolute left-[35.28px] size-[36.813px] top-[35.28px]" data-name="sunrise">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
        <g clipPath="url(#clip0_1_1182)" id="sunrise">
          <path d={svgPaths.p24ef0d00} id="Vector" stroke="var(--stroke-0, #F6FEF7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.06774" />
          <path d="M18.4065 3.06779V13.8049" id="Vector_2" stroke="var(--stroke-0, #F6FEF7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.06774" />
          <path d={svgPaths.p2ab23e00} id="Vector_3" stroke="var(--stroke-0, #F6FEF7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.06774" />
          <path d="M1.53385 27.6097H4.60159" id="Vector_4" stroke="var(--stroke-0, #F6FEF7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.06774" />
          <path d="M32.2113 27.6097H35.2791" id="Vector_5" stroke="var(--stroke-0, #F6FEF7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.06774" />
          <path d={svgPaths.p15d53740} id="Vector_6" stroke="var(--stroke-0, #F6FEF7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.06774" />
          <path d="M35.279 33.7452H1.53385" id="Vector_7" stroke="var(--stroke-0, #F6FEF7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.06774" />
          <path d={svgPaths.p941cd00} id="Vector_8" stroke="var(--stroke-0, #F6FEF7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.06774" />
        </g>
        <defs>
          <clipPath id="clip0_1_1182">
            <rect fill="white" height="36.8129" width="36.8129" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#6e9e8e] overflow-clip relative rounded-[9.203px] shrink-0 size-[107.371px]" data-name="Icon">
      <Sunrise1 />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col gap-[24.542px] items-start justify-start leading-[0] relative shrink-0" data-name="Title">
      <div className="font-['Roboto:Bold',_sans-serif] font-bold relative shrink-0 text-[#051c2f] text-[38.347px] w-[493.907px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.3]">598 KW Solar Energy System</p>
      </div>
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#2f4252] text-[24.542px] w-[493.907px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.4]">We utilize the latest technology in renewable energy to provide the most efficient and effective solutions.</p>
      </div>
    </div>
  );
}

function IconBox2() {
  return (
    <div className="content-stretch flex flex-col gap-[30.677px] items-start justify-start relative shrink-0" data-name="Icon box 2">
      <Icon1 />
      <Title1 />
    </div>
  );
}

function Sunrise2() {
  return (
    <div className="absolute left-[35.28px] size-[36.813px] top-[35.28px]" data-name="sunrise">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
        <g clipPath="url(#clip0_1_1194)" id="sunrise">
          <path d={svgPaths.p1c4f1280} id="Vector" stroke="var(--stroke-0, #F6FEF7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.06774" />
          <path d="M18.4062 3.06779V13.8049" id="Vector_2" stroke="var(--stroke-0, #F6FEF7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.06774" />
          <path d={svgPaths.p1eff1320} id="Vector_3" stroke="var(--stroke-0, #F6FEF7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.06774" />
          <path d="M1.53371 27.6097H4.60145" id="Vector_4" stroke="var(--stroke-0, #F6FEF7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.06774" />
          <path d="M32.2111 27.6097H35.2788" id="Vector_5" stroke="var(--stroke-0, #F6FEF7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.06774" />
          <path d={svgPaths.p16812a40} id="Vector_6" stroke="var(--stroke-0, #F6FEF7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.06774" />
          <path d="M35.2789 33.7452H1.53371" id="Vector_7" stroke="var(--stroke-0, #F6FEF7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.06774" />
          <path d={svgPaths.p3ced7a00} id="Vector_8" stroke="var(--stroke-0, #F6FEF7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.06774" />
        </g>
        <defs>
          <clipPath id="clip0_1_1194">
            <rect fill="white" height="36.8129" width="36.8129" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[#6e9e8e] overflow-clip relative rounded-[9.203px] shrink-0 size-[107.371px]" data-name="Icon">
      <Sunrise2 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col gap-[24.542px] items-start justify-start leading-[0] relative shrink-0" data-name="Title">
      <div className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0 text-[#051c2f] text-[38.347px] w-[493.907px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.3]">100%</p>
      </div>
      <div className="font-['DM_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#2f4252] text-[24.542px] w-[493.907px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.4]">{`Every customer has unique energy needs and requirements. That's why we offer customizable renewable energy solutions.`}</p>
      </div>
    </div>
  );
}

function IconBox3() {
  return (
    <div className="content-stretch flex flex-col gap-[30.677px] items-start justify-start relative self-stretch shrink-0" data-name="Icon box 3">
      <Icon2 />
      <Title2 />
    </div>
  );
}

function IconBox() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Icon Box">
      <IconBox1 />
      <IconBox2 />
      <IconBox3 />
    </div>
  );
}

function Body() {
  return (
    <div className="relative rounded-lg shrink-0 w-full" data-name="Body">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1.5 items-center justify-center leading-[0] p-[16px] relative w-full">
          <div className="font-['Roboto:Bold',_sans-serif] font-bold relative shrink-0 text-[#6e9e8e] text-[32px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[normal]">LEED Gold Certification</p>
          </div>
          <div className="font-['Roboto:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[#000000] text-[0px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[normal] text-[24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Our AI Engineering Center in Noida has earned LEED Gold Certification from the U.S. Green Building Council—a global recognition of our commitment to sustainable design and operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center pl-1 pr-0 py-0 relative w-full">
          <Body />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#6e9e8e] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cards() {
  return (
    <div className="content-stretch flex flex-col gap-8 items-start justify-center relative shrink-0 w-full" data-name="Cards">
      <Card />
      <Card />
      <Card />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col gap-16 items-start justify-start relative shrink-0 w-[1598px]">
      <Cards />
    </div>
  );
}

function OurProductsSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Our Products Section">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-16 items-center justify-start px-[161px] py-20 relative w-full">
          <Frame2 />
          <IconBox />
          <Frame90 />
        </div>
      </div>
    </div>
  );
}

function Title3() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Roboto:Regular',_sans-serif] font-normal gap-5 items-start justify-start leading-[0] left-[150px] top-[110px]" data-name="Title">
      <div className="relative shrink-0 text-[#051c2f] text-[18px] w-[560px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4]">Renewable Energy Boomed In 2020</p>
      </div>
      <div className="relative shrink-0 text-[#2f4252] text-[64px] w-[560px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4]">The numbers speak</p>
      </div>
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="bg-[#f5f6f7] h-[54px] overflow-clip relative rounded shrink-0 w-[540px]" data-name="Progress bar">
      <div className="absolute bg-[#54987b] h-[54px] left-0 top-0 w-[258px]" data-name="Bar color" />
      <div className="absolute font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] left-10 text-[#ffffff] text-[24px] text-nowrap top-[15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4] whitespace-pre">135.5</p>
      </div>
    </div>
  );
}

function ProgressBar1() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0" data-name="Progress bar 1">
      <div className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#051c2f] text-[24px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4] whitespace-pre">2014</p>
      </div>
      <ProgressBar />
    </div>
  );
}

function ProgressBar4() {
  return (
    <div className="bg-[#f5f6f7] h-[54px] overflow-clip relative rounded shrink-0 w-[540px]" data-name="Progress bar">
      <div className="absolute bg-[#54987b] h-[54px] left-0 top-0 w-[318px]" data-name="Bar color" />
      <div className="absolute font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] left-10 text-[#ffffff] text-[24px] text-nowrap top-[15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4] whitespace-pre">174.4</p>
      </div>
    </div>
  );
}

function ProgressBar2() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0" data-name="Progress bar 2">
      <div className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#051c2f] text-[24px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4] whitespace-pre">2016</p>
      </div>
      <ProgressBar4 />
    </div>
  );
}

function ProgressBar5() {
  return (
    <div className="bg-[#f5f6f7] h-[54px] overflow-clip relative rounded shrink-0 w-[540px]" data-name="Progress bar">
      <div className="absolute bg-[#54987b] h-[54px] left-0 top-0 w-[495px]" data-name="Bar color" />
      <div className="absolute font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] left-10 text-[#ffffff] text-[24px] text-nowrap top-[15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4] whitespace-pre">278.3</p>
      </div>
    </div>
  );
}

function ProgressBar3() {
  return (
    <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0" data-name="Progress bar 3">
      <div className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#051c2f] text-[24px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4] whitespace-pre">2020</p>
      </div>
      <ProgressBar5 />
    </div>
  );
}

function ProgressBar6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-5 items-start justify-start left-[150px] top-[430px]" data-name="Progress bar">
      <ProgressBar1 />
      <ProgressBar2 />
      <ProgressBar3 />
    </div>
  );
}

function Component2ProgressBar() {
  return (
    <div className="bg-[#ffffff] h-[940px] relative shrink-0 w-full" data-name="2 Progress Bar">
      <Title3 />
      <ProgressBar6 />
      <div className="absolute h-[600px] top-[191px] w-[861.818px]" data-name="image 4" style={{ left: "calc(41.667% + 55.636px)" }}>
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1630404991412-9504d094e8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzdXN0YWluYWJsZSUyMGJ1aWxkaW5nJTIwZ3JlZW4lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzU1ODk1MTI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Sustainable building"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto:Regular',_sans-serif] font-normal gap-5 items-start justify-start leading-[0] relative shrink-0 w-[611px]" data-name="Title">
      <div className="relative shrink-0 text-[#051c2f] text-[64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.3]">A Message from our Leadership</p>
      </div>
      <div className="relative shrink-0 text-[#2f4252] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.4]">At MAQ Software, we believe in the power of renewable energy to create a more sustainable future. With a passion for clean energy and a commitment to our customers, we are dedicated to delivering the best possible solutions.</p>
      </div>
    </div>
  );
}

function Mission2() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Mission 2">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-16 items-center justify-center px-[161px] py-20 relative w-full">
          <Title4 />
          <div className="h-[600px] relative shrink-0 w-[700px]">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1739298061757-7a3339cee982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxleGVjdXRpdmUlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc1NTg5NTE0M3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Leadership team"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#242424] relative shrink-0 w-full" data-name="Footer">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-16 items-center justify-center px-[161px] py-20 relative w-full">
          <div className="flex items-center justify-center w-[200px] h-[60px]">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1637489981573-e45e9297cb21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNQVElMjBTb2Z0d2FyZSUyMGxvZ28lMjBidWlsZGluZ3xlbnwxfHx8fDE3NTU4OTUxMzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="MAQ Software Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="font-['Roboto:Regular',_sans-serif] font-normal text-[#ffffff] text-[16px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.4]">© 2025 MAQ Software. All rights reserved. Building a sustainable future through technology.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-auto">
      <div className="min-w-[1920px]">
        <Group106170 />
        <Services2 />
        <OurProductsSection />
        <Component2ProgressBar />
        <Mission2 />
        <Footer />
      </div>
    </div>
  );
}