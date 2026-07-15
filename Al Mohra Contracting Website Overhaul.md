# Chat Conversation

Note: _This is purely the output of the chat conversation and does not contain any raw data, codebase snippets, etc. used to generate the output._

### User Input

ROLE & CONTEXT

তুমি একজন সিনিয়র ফুল-স্ট্যাক + ফ্রন্টএন্ড ডিজাইন ইঞ্জিনিয়ার। এই প্রজেক্ট ফোল্ডারটা একটা আগের ক্লায়েন্টের জন্য বানানো হয়েছিল। এখন এটাকে সম্পূর্ণভাবে Al Mohra Contracting Company (Riyadh, Saudi Arabia — CR: 7053500273) এর জন্য নতুন ওয়েবসাইটে রূপান্তর করতে হবে।

ক্লায়েন্টের আগে থেকেই একটা ওয়েবসাইট আছে (WordPress/Elementor দিয়ে বানানো): https://almohra.moumasiworks.xyz/ — কিন্তু client এখন একজন নতুন developer (আমাদের) দিয়ে সম্পূর্ণ নতুন, আধুনিক ওয়েবসাইট চাচ্ছেন। তাই:


পুরনো সাইটে যে যে তথ্য/সেকশন আছে তার সবই নতুন সাইটে থাকতে হবে (নিচে সাইটম্যাপ দেওয়া আছে) — কিছু বাদ দেওয়া যাবে না।
কিন্তু ডিজাইন, অ্যানিমেশন, ইন্টারঅ্যাকশন সম্পূর্ণ নতুনভাবে, আধুনিক ও প্রিমিয়াম মানের বানাতে হবে — পুরনো Elementor-স্টাইল সাইটের চেয়ে দৃশ্যত অনেক এগিয়ে।
সবচেয়ে গুরুত্বপূর্ণ: এই প্রজেক্ট ফোল্ডারে যেই আগের ক্লায়েন্টের ডেটা/কন্টেন্ট/ছবি/লোগো আছে তার সবকিছু মুছে ফেলে নিচের Al Mohra-এর তথ্য দিয়ে replace করতে হবে। কোনো residual পুরনো নাম/লোগো/টেক্সট/কমেন্ট কোডে থেকে যাবে না।
কোনো তথ্য বাদ দেওয়া যাবে না, এবং কোনো ভুল/আন্দাজি তথ্য (hallucinated data) যোগ করা যাবে না — নিচে যা দেওয়া হয়েছে শুধু সেটাই ব্যবহার করবে।



STEP 0 — Design Brief (এটাই সবচেয়ে গুরুত্বপূর্ণ অংশ)

Client চান নতুন সাইটটা আগের সাইট থেকে অনেক বেশি আধুনিক, হালকা (lightweight), অ্যানিমেটেড এবং দৃষ্টিনন্দন হোক। নিচের গাইডলাইন মেনে চলো:

Visual Direction


Theme: Luxury industrial — company profile PDF-এর navy blue (#0B1A33 জাতীয়) + gold/amber (#C9962C জাতীয়) প্যালেট থেকে অনুপ্রাণিত থিম রাখো, কিন্তু flat/Elementor-স্টাইল থেকে সরে গিয়ে depth, glassmorphism, gradient-mesh ব্যাকগ্রাউন্ড, এবং subtle noise/grain টেক্সচার ব্যবহার করো যাতে প্রিমিয়াম/কর্পোরেট ফিল আসে।
Typography: হেডিং-এ একটা elegant serif (PDF কভারে যেমন serif হেডিং ব্যবহার হয়েছে — "COMPANY PROFILE", "ABOUT US") — যেমন "Playfair Display" বা "Cormorant"; body এবং UI টেক্সটে modern sans (Inter/Manrope)।
3D & Depth: Hero সেকশনে হালকা 3D এলিমেন্ট ব্যবহার করো — যেমন Three.js/React-Three-Fiber দিয়ে একটা abstract rotating building/steel-frame wireframe, বা floating glass cards with tilt-on-hover (3D tilt effect using mouse position)।
Parallax: স্ক্রল করার সময় ব্যাকগ্রাউন্ড ইমেজ (crane, skyline, construction site) আর ফোরগ্রাউন্ড কন্টেন্ট আলাদা গতিতে move করবে (multi-layer parallax)। Section transitions-এ scroll-triggered reveal/fade/slide ব্যবহার করো (Framer Motion / GSAP ScrollTrigger)।
Micro-interactions: বাটনে magnetic hover effect, কার্ডে hover-lift + glow border, নাম্বার কাউন্টার (animate-on-scroll) স্ট্যাটের জন্য, স্মুথ স্ক্রল (Lenis/Locomotive Scroll জাতীয়)।
Lightweight: ভারী ইমেজ optimize (WebP/AVIF), lazy-load, code-splitting, animation library হালকা রাখা (GSAP/Framer Motion যথেষ্ট — ভারী 3D শুধু hero-তে, পুরো সাইটে নয়)। Lighthouse performance score high রাখার চেষ্টা করবে।
Dark + Light mix: পুরনো PDF-এর মতো — কিছু সেকশন dark-navy full-bleed (Hero, HSE, Stats, CTA), কিছু সেকশন light/cream ব্যাকগ্রাউন্ড (About, Services detail) — visual rhythm তৈরি করবে।


আগের সাইট থেকে স্পষ্ট পার্থক্য আনতে যা করবে


পুরনো সাইট ছিল standard Elementor grid card লেআউট — নতুন সাইটে asymmetric grid, bento-box layout, বা horizontal scroll showcase (services/projects-এর জন্য) ব্যবহার করো।
পুরনো সাইটের Hero স্ট্যাটিক ছিল — নতুন সাইটে animated counter stats + 3D/parallax hero background।
Navigation: sticky, scroll-aware (scroll down এ hide, scroll up এ show), মেগা-মেনু আধুনিক ড্রপডাউন অ্যানিমেশন সহ।
Client logos: static grid না করে auto-scrolling marquee (infinite loop, pause-on-hover)।
Project/timeline সেকশন: vertical animated timeline বা horizontal draggable carousel।



STEP 1 — Codebase Audit (প্রথমে এটা করবে)


প্রজেক্ট ফোল্ডার স্ক্যান করে framework, styling system, routing structure বের করো।
আগের ক্লায়েন্টের hardcoded company data (নাম, লোগো, ফোন, ইমেইল, সার্ভিস, ক্লায়েন্ট লোগো, hero কপি) কোন কোন ফাইলে আছে খুঁজে বের করো এবং তালিকা দাও।
আগের client-specific image asset (লোগো, টিম ফটো, প্রজেক্ট ফটো) চিহ্নিত করো — এগুলো replace করতে হবে placeholder/নতুন royalty-free দিয়ে।
একটা migration summary দাও, তারপর অনুমোদনের পর Step 2+ এ যাও।



STEP 2 — Sitemap (আগের ওয়েবসাইট https://almohra.moumasiworks.xyz/ থেকে নেওয়া — এই স্ট্রাকচার বজায় রাখো, শুধু ডিজাইন upgrade করবে)

Home
About Us
  ├─ Company Overview
  ├─ Our Visionary Leadership
  ├─ Vision, Mission & Core Values
  └─ Empowering Saudi Vision 2030
Services
  ├─ Manpower Solutions
  │    ├─ Steel Manpower
  │    ├─ MEP & Technical Supervision
  │    ├─ Civil & Construction Manpower
  │    ├─ Mechanical & Industrial Division
  │    ├─ Heavy Equipment & Transport
  │    └─ HSE & Support Services
  ├─ Contracting Services
  │    ├─ Structural Steel Works
  │    ├─ Industrial & Heavy Duty Steel
  │    ├─ Architectural & Finishing Steel
  │    ├─ Telecommunication & Infrastructure
  │    └─ Renovation & Maintenance
  └─ Facility Management
       ├─ Commercial & Industrial Cleaning
       ├─ Hospital & Government Cleaning
       └─ Catering & Support Services
Projects
  ├─ Ongoing Mega Projects
  ├─ Completed Projects
  └─ Prestigious Clients
Compliance
  ├─ HSE Policy & Safety First
  ├─ Quality Assurance & Control (QA/QC)
  ├─ Legal Documents & Certifications
  └─ Terms of Engagement (Commercial Offer)
Contact Us

নতুন সাইটে এই একই sitemap রাখো (URL slug-ও একই রাখলে SEO ভালো থাকবে), কিন্তু প্রতিটা পেজের ভেতরের ডিজাইন Step 0 অনুযায়ী upgrade করবে।


STEP 3 — Full Company Data (PDF-এর ৬৫ পেজ থেকে সম্পূর্ণ verbatim তথ্য — কিছুই বাদ যায়নি)

3.1 Company Identity / Cover


Company Name: Al Mohra Contracting Company (Arabic: شركة المهرة للمقاولات)
Logo mark: "A" monogram styled as a building/skyline with a small window/roof accent (black + gold)
Document Title: Company Profile 2026
Tagline: "Quality | Strength | Trust – Building Excellence"
Affiliation: Saudi Vision 2030
Seal/Stamp text: "ALMOHRA CONTRACTING COMPANY — CR. 7053500273"


3.2 Visionary Leadership (quotes page — Saudi leadership, use respectfully, do not alter wording)


"The Kingdom's success is measured by the well-being of its people." — King Abdulaziz Al Saud




"Our ambition is to build a vibrant society, a thriving economy, and an ambitious nation." — King Salman bin Abdulaziz Al Saud




"Our goal is clear: We will be one of the world's greatest nations." — Crown Prince Mohammed bin Salman



(এই কোটেশনগুলো "Our Visionary Leadership" পেজে থাকবে, ঠিক তাদের ছবি/ফ্রেম-স্টাইল ডিজাইনে দেখাতে চাইলে decorative gold frame মোটিফ ব্যবহার করা যায়, তবে বাস্তব ছবির বদলে respectful stock/illustration ব্যবহার করাই নিরাপদ — client কে জিজ্ঞেস করে official photo bank confirm করে নিতে বলবে)

3.3 Company at a Glance


Full Name: AL MOHRA CONTRACTING COMPANY
Sub-tagline: "Building the Future of Saudi Arabia"
Phone: +966 565 882 482 | +966 502 475 835
Email: mohra.ariful@gmail.com | almohracc@gmail.com
Website: www.almohracontracting.com
Headquarters: 2456 Al Wadeea, Al Olaya Dist, Postal Code: 12222, Riyadh, Kingdom of Saudi Arabia.
Legal Status:

CR Number: 7053500273
VAT Number: 314593295200003
Chamber Membership: 1253910 (First Class)
GOSI Number: 659485508





3.4 Table of Contents (7 sections — mirror this structure in-page as well as in nav)


Corporate Overview (Visionary Leadership, CEO Messages, About Us, Vision 2030)
Core Divisions & Expertise (Fabrication, Erection, Welding, Rebar & MEP Services)
Comprehensive Manpower Solutions (MEP, Civil, Heavy Equipment, Mechanical & HSE Lists)
Construction & Cleaning Works (Structural Steel, Architectural, Maintenance & Catering)
Operational Excellence (HSE Commitment, Logistics, Quality Assurance & QC)
Ongoing Mega Projects & Clients (Prestigious Clients, Riyadh Metro, Qiddiya & Diriyah Focus)
Legal & Compliance Documents (CR, VAT, Chamber of Commerce, GOSI & Banking)


4 Core Value Icons (footer strip of ToC page):

ValueDescriptionINTEGRITYWe do what we say.COMMITMENTWe deliver with dedication.QUALITYWe never compromise.PARTNERSHIPWe grow together with our clients.

3.5 Message from the CEO (full verbatim)

Mr. Ariful Islam — Chief Executive Officer (CEO)

"Welcome to Al Mohra Contracting Company.
Since our establishment, we have been driven by a clear mission: to deliver world-class contracting solutions with unwavering commitment to quality, safety, and reliability.
Our success is built on the trust of our clients, the dedication of our people, and our ability to consistently exceed expectations. We take pride in contributing to Saudi Arabia's Vision 2030 by supporting mega-projects and nation-building initiatives that shape the future of this great Kingdom.
At Al Mohra, we believe in fostering long-term partnerships, embracing innovation, and maintaining the highest standards of integrity in everything we do.
Thank you for considering us as your trusted partner. We look forward to working together to build a stronger, more prosperous future—together."

3.6 Leadership & Commitment (Deputy CEO message — full verbatim)

Ms. Nasrin Akter — Deputy CEO

"At Al Mohra Contracting Company, operational excellence and client satisfaction are at the heart of everything we do. We believe that true success in the contracting and manpower sector comes from a relentless commitment to quality and safety.
Our dedicated team ensures that every workforce deployed, whether in steel fabrication, MEP, or facility management, is highly skilled and strictly adheres to global HSE standards.
We are driven by the pursuit of perfection, continuously evolving to meet the dynamic needs of our partners across the Kingdom.
I am proud of our people, our values, and the trust our clients place in us. Together, we will continue to build a safer, stronger, and more prosperous future for Saudi Arabia."

3.7 About Us (page: "Company Overview" / "About Us" — full verbatim, 3 paragraphs)

Heading: "Defining Excellence in Contracting & Manpower"


"Al Mohra Contracting Company is a premier contracting and manpower supply firm based in Riyadh, Kingdom of Saudi Arabia. With a deep-rooted commitment to quality and precision, we have evolved into a trusted partner for mega-projects across the region."
"Our expertise spans across specialized Steel Manpower Solutions, comprehensive MEP (Mechanical, Electrical, Plumbing) services, robust civil construction, and top-tier facility management. We don't just supply a workforce; we provide highly skilled, certified professionals who drive industrial success."
"By integrating modern project management strategies with a highly capable team, we ensure that every client receives customized, scalable, and efficient solutions tailored to their specific project demands."


3.8 Key Management Team

Operations Manager
"Leads all operational activities with a focus on efficiency, safety, and quality. Ensures seamless execution of projects and optimal resource management across all departments."

Site Supervisor
"Oversees on-site activities and ensures strict adherence to safety standards, quality benchmarks, and project schedules. Acts as the key link between site teams and management."

Footer strip (4 values): LEADERSHIP – Driving Excellence | EXPERIENCE – Built on Trust | COMMITMENT – Delivering Results | TEAMWORK – Achieving Together

(Website sitemap-এ third role "Documents Controller" আলাদা পেজে/কার্ডে আছে — নিচে ৩.১৩-তে দেওয়া আছে)

3.9 Vision, Mission & Values

VISION: "To be the most reliable and innovative contracting and manpower supply partner in the Kingdom of Saudi Arabia, setting the benchmark for industrial excellence and workforce proficiency."

MISSION: "To empower construction and industrial sectors by delivering certified, highly skilled manpower and world-class contracting services, ensuring every project is completed safely, efficiently, and to the highest global standards."

CORE VALUES (with Arabic terms as shown in PDF):

ValueArabicDescriptionQUALITYجودةUncompromising standards in every task.EXCELLENCEإتقانPrecision and mastery in execution.EXPERIENCEخبرةLeveraging deep industry knowledge.COMMITMENTالتزامUnwavering dedication to client success.

3.10 Empowering Saudi Vision 2030 (full verbatim)

Heading: "Empowering Saudi Vision 2030"

"As the Kingdom of Saudi Arabia embarks on a historic journey of economic diversification and infrastructural transformation, Al Mohra Contracting Company is deeply aligned with the ambitious goals of Saudi Vision 2030."

We actively contribute to this national vision by:


"Supplying the highly skilled, specialized workforce required to build tomorrow's smart cities and industrial hubs."
"Elevating industry standards through rigorous training, safety protocols, and operational excellence."
"Supporting the growth of the private sector by delivering reliable contracting and facility management solutions."


Closing line: "Al Mohra is more than a service provider; we are a dedicated partner in building a vibrant and thriving nation."

3.11 Quality & HSE Policy (full verbatim)

Heading: "Quality & HSE Policy — Safety Is Our Foundation"

"At Al Mohra Contracting Company, Health, Safety, and Environment (HSE) is not just a policy; it is a core operational value. We strictly adhere to global and local safety regulations to ensure a zero-harm environment."


Rigorous Safety Training: "All personnel undergo comprehensive safety indoctrination."
Certified Compliance: "We prioritize workers with international certifications (OSHA, NEBOSH) and Aramco-approved standards."
Quality Control: "Our QA/QC inspectors maintain strict oversight on all fabrication and installation works."


(এই পেজে একজন "Documents Controller"-এর ছবি/কার্ড আছে — role শুধু "Documents Controller" লেখা, বিস্তারিত বর্ণনা নেই)

3.12 SECTION 02 — Steel Manpower Solutions (division cover)

Sub-tagline: "Certified Welders | Fabricators | Erectors | Industrial Workforce"

A. Fabrication Workshop Manpower
Tagline: "Precision & Factory-Ready Workforce"
Categories: Steel Fabricators, Fitters and Assemblers, Cutting Machine Operators, Bending Machine Operators, Workshop Helpers

B. Erection & Installation Crew
Tagline: "Building High-Rise to Heavy Industrial Structures"
Body: "Transforming fabricated steel into towering structures requires precision, strength, and an absolute commitment to safety. Our on-site erection and installation crews are trained to work under challenging conditions while adhering to strict structural guidelines."
Categories: Steel Erectors, Riggers (Level 1, Level 2, Level 3), Crane Operators, Bolt Tightening Technicians, Certified Scaffolders
Quote: "Our crews are the backbone of warehouses, factories, and high-rise structural projects across the Kingdom."

C. Highly Skilled Welding Crew
Tagline: "Certified Expertise for Critical Joints"
Body: "Welding is the core process of all steelwork. Al Mohra Contracting Company prides itself on supplying highly demanded, certified welding professionals who meet the stringent standards of the Saudi industrial sector."
Welding Specialists: Structural Welders (ARC, MIG, TIG), 6G Pipe Welders (Advanced Certified), Spot Welders & Multi-Arc Welders, Welding Helpers
Certifications: "We supply professionals with Aramco approvals and AWS / ISO certifications, ensuring flawless execution for oil & gas and heavy industrial projects." (Certification badges/logos referenced: Saudi Aramco, AWS – American Welding Society, ISO)
Footer tags: Certified Professionals | Superior Quality | Safety Focused | Industry Compliant

D. Rebar & Steel Fixing Manpower
Tagline: "Strengthening Concrete Construction"
Body: "Reinforcement steel work is critical for the stability and durability of any concrete structure. We supply expert rebar crews capable of managing large-scale infrastructure, bridge, and building projects."
Categories: Expert Steel Fixers, Bar Benders, Rebar Supervisors, Skilled Construction Helpers
Quote: "From cutting and bending to precise fixing in slabs, beams, and columns, our workforce ensures maximum structural integrity."
Footer tags: Quality Assured | Safety Focused | Precision Driven | Built On Trust

E. MEP & Technical Supervision
Tagline: "The Brain and Nerves of the Project"
Body: "Beyond structural steel, Al Mohra provides comprehensive MEP (Mechanical, Electrical, and Plumbing) manpower and expert technical supervision. A successful project requires seamless integration of utilities and strict oversight."
MEP & Technical Workforce: Electricians & Electrical Technicians, Plumbers & Pipe Fitters, HVAC & Duct Fitters, QA/QC Engineers & Inspectors, Safety Officers (HSE) & Site Supervisors
Quote: "We ensure that every site is managed efficiently, safely, and exactly according to the project blueprint."
Footer tags: Expert Manpower | Seamless Integration | Strict Oversight | Project Success

F. Surface Treatment Crew
Tagline: "Protecting & Finishing Steel Structures"
Body: "To ensure longevity and resistance against harsh environmental conditions, professional surface treatment is essential. We provide specialized crews trained in applying industrial-grade protective coatings and finishes."
Specialists: Professional Sand Blasters, Spray Painters (Industrial & Epoxy Coating), Galvanizing Workers, Coating Quality Inspectors
Quote: "We guarantee that every steel structure is protected against corrosion while maintaining a flawless aesthetic finish."
Footer tags: Corrosion Protection | Industrial-Grade Finishes | Quality Assured | Long-Lasting Performance

G. Comprehensive Labor Supply
Tagline: "Scalable Workforce for Every Project Need"
Body: "Beyond our highly specialized steel and MEP teams, Al Mohra Contracting Company offers a flexible and scalable workforce to support all phases of construction and industrial projects. We understand that every project requires the right people in the right numbers — on time, every time."
Categories (3-column):


Skilled Technicians — "Highly trained professionals with expertise in their respective trades."
Semi-Skilled Workforce — "Experienced workers who bring efficiency and adaptability."
Unskilled Labor Supply — "Dependable general labor to support all onsite activities."
Closing: "We ensure the right workforce mix to maximize productivity, maintain safety, and keep your project on track."


3.13 Comprehensive Manpower Solutions — Category Grids (by Division, with Arabic labels shown in PDF — use bilingual EN/AR tags where shown)

MEP & Technical Division:


Electrician (كهربائي)
Plumber - PPR (سباك)
Plumber - Copper (سباك نحاس)
Pipe Fitter (مركب أنابيب)
Duct Fitter


Civil & Construction Division:


Steel Fixer (حداد مسلح)
Carpenter – Shuttering & Finishing (نجار)
Block Mason (بناء طابوق)
Plaster Mason (مليس)


Heavy Equipment & Transport:


Heavy Driver, Light Driver, Crane Operator, Excavator Operator, Loader Operator, Forklift Operator, Boom Truck Driver, Grader Operator


Mechanical & Industrial Division:


TIG Welder, MIG Welder, 6G Welder, Arc Welder, Steel Fabricator, Pipe Fabricator, Mechanical Fitter, Rigger (Level 1, 2, 3)


Electrical & HVAC Solutions:


Industrial Electrician, Building Electrician, Cable Jointer, Instrument Technician, HVAC Technician, AC Mechanic, Auto Electrician, Fire Alarm Technician


Civil & Finishing Works:


Scaffolder, Spray Painter, Wall Painter, Tiles Mason, Marble Mason, Gypsum Carpenter, Steel Fixer, Concrete Finisher


HSE & Support Services:


Safety Officer, Safety Supervisor, Store Keeper, Time Keeper, Document Controller, Tea Boy, Routine Cleaner, General Helper


Civil & Finishing Works (Aluminium/Glass, bilingual EN/AR):


Aluminium Fitter (فني ألمنيوم)
Glass Fitter (فني زجاج)
Silicon Man (فني سيليكون)


3.14 Terms of Engagement (Manpower Supply Conditions — full verbatim, use as a numbered list/timeline section)


Working Hours: "The standard working duration will be 10 (Ten) hours per day, 6 days a week."
Overtime: "Any work performed beyond the standard 10 hours will be calculated as overtime as per Saudi Labor Law."
Accommodation & Transportation: "Clean, ventilated accommodation and site transportation will be provided by the First Party (Client)."
Food: "Quality food or a food allowance will be provided by the First Party (Client)."
Medical, Insurance & Iqama: "All costs related to Iqama renewal, medical insurance, and other government documentation will be covered by the Second Party (Al Mohra)."
Mobilization: "The required manpower will be mobilized to the site within 48 to 72 hours upon receipt of the official Purchase Order (PO)."
Payment Terms: "Invoices will be submitted at the end of each month. Payment must be cleared within 15 days from the date of the invoice submission."
Safety Equipment (PPE): "Standard safety shoes, helmets, and basic PPE will be provided by the Second Party (Al Mohra). Specific site-required safety gear must be provided by the Client."


Our Commitment (closing statement): "We are committed to delivering reliable, skilled, and disciplined manpower with professionalism, safety, and responsibility."

3.15 SECTION 03 — Steel Construction Works (division cover)

Sub-tagline: "Structural | Architectural | Industrial"

A. Structural Steel Work
Tagline: "The Backbone of Mega-Projects"
Body: "Structural steel is the core of modern infrastructure. Al Mohra Contracting Company delivers top-tier structural steel works that provide unmatched strength, reliability, and precision — forming the foundation of commercial, industrial, and infrastructure developments."
Services:


Installation of Steel Beams — "Expert handling and installation of all types of steel beams."
Columns / Trusses — "Precise erection of columns, trusses, and supporting members."
Heavy-Duty Steel Frames — "Fabrication and installation of heavy-duty steel frames for high-load structures."
Specialized Bridge Structures — "Advanced steel solutions for bridges and complex structures."
Closing box: "Built Strong. Built to Last. — Our structural steel works ensure superior performance, safety, and long-term value for every project."


B. Industrial & Heavy Duty Steel
Tagline: "Built for Extreme Environments"
Body: "Industrial environments demand steel structures that can withstand extreme stress, corrosion, and continuous operation. Al Mohra Contracting Company specializes in delivering heavy-duty steel solutions engineered for performance, durability, and safety in the most challenging industrial applications."
Applications:


Pipe Racks — "Robust pipe rack systems designed for efficient and safe operations."
Industrial Platforms — "Custom-built platforms and steel supports for heavy equipment and maintenance access."
Heavy-Duty Storage Tanks — "Secure and durable steel tanks for industrial liquids, gases, and materials."
Factory Structures — "High-performance steel buildings for manufacturing and production facilities."
Closing box: "Engineered. Built. Reliable. — Our industrial steel works are built to international standards, ensuring long-term reliability, safety, and operational efficiency."


C. Architectural & Finishing Steel Work
Tagline: "Aesthetic Brilliance & Structural Utility"
Body: "We perfect the art of building by combining human requirements with appealing aesthetic solutions. Our architectural steel division focuses on appearance, finishing, and high-quality details."
Services:


Steel Doors & Custom Framings — "Precision-designed steel doors, windows, and custom framings that combine security, durability, and modern aesthetics."
Handrails & Staircases — "Elegant and durable handrails and staircases engineered for safety, functionality, and architectural sophistication."
Decorative Metal Works for Malls — "Custom decorative metal solutions that elevate the visual appeal of commercial spaces, villas, and malls with premium finishes."


D. Telecommunication & Infrastructure Works
Tagline: "Connecting the Kingdom"
Body: "Al Mohra Contracting Company is specialized in the logistical and construction operations associated with utilities, municipal networks, and communication towers throughout Saudi Arabia."
Services:


Self-Supporting Telecom Towers — "Design, supply, erection, and maintenance of self-supporting telecommunication towers for seamless connectivity."
Water Supply & Electrical Networks — "Construction and maintenance of water supply, sewage, and electrical networks that power communities and industries."
Roads & Asphalt Pavements — "High-quality construction of roads, sidewalks, and asphalt pavements built for durability, safety, and efficiency."
Closing box: "Building Connections. Building the Future. — Reliable infrastructure solutions that connect people, power communities, and drive progress."


E. Renovation & Maintenance
Tagline: "Upgrading & Strengthening Existing Facilities"
Body: "We offer a total solution for renewal and upgrades to the highest quality. From strengthening existing structures to complete commercial reconfiguration, we ensure your facilities remain safe, modern, and efficient."
Services:


Structural Strengthening & Retrofitting — "Enhancing the load capacity and durability of existing structures to meet modern safety standards."
Replacing Damaged Steel Components — "Expert replacement and repair of corroded, worn-out, or structurally compromised steel elements."
Commercial & Industrial Facility Refurbishment — "Complete renovation and refurbishment services to improve functionality, appearance, and operational efficiency."


3.16 SECTION 04 — Cleaning & Facility Management (division cover)

Sub-tagline: "Hospitals | Markets | Corporate | Factories"

A. Commercial & Industrial Cleaning
Tagline: "Maintaining Pristine Environments"
Body: "A clean environment is essential for productivity and safety. We provide highly trained cleaning personnel equipped with modern sanitation technology."
Services: Market Cleaners ("Professional cleaning solutions for malls, supermarkets, and retail spaces."), Factory Workers ("Deep cleaning and sanitation services tailored for industrial facilities and warehouses."), Office Cleaners ("Reliable cleaning services to maintain clean, healthy, and productive workplaces.")
Closing box: "Clean Spaces. Strong Impact. — We help your business shine with cleanliness, care, and consistency."

B. Hospital & Government Cleaning
Tagline: "Medical-Grade Sanitation"
Body: "Healthcare and government facilities require an uncompromising level of hygiene. We supply vetted, specially trained cleaning professionals who understand strict medical sanitation protocols."
Focus Areas: Government Hospital Cleaners ("Expert cleaning services for hospitals and healthcare facilities with strict compliance."), Clinic Disinfection ("Advanced disinfection and sanitization solutions for clinics and treatment areas."), Public Buildings ("Reliable cleaning for government offices, public service centers, and administrative buildings.")
Closing box: "Hygiene. Health. Trust. — Clean spaces for a safer tomorrow."

C. Catering & Support Services
Tagline: "Nourishing Your Workforce"
Body: "To support large-scale operations and remote camps, Al Mohra provides complete catering and support services. We ensure your workforce receives hygienic, nutritious meals."
Services: Industrial & Labor Camp Catering ("Nutritious, hygienic meals designed for labor camps and industrial sites."), Corporate Event Catering ("Professional catering for meetings, conferences, and corporate events."), Hospitality Staff ("Trained and uniformed hospitality staff for seamless service.")
Closing box: "Great Food. Stronger Teams. — Support that keeps your operations moving."

3.17 SECTION 05 — Operational Excellence

Health, Safety & Environment — "Our Commitment to Zero Harm"


Strict Compliance — "with Saudi Aramco & NEBOSH standards."
Regular Safety — "Training & Audits."
Premium PPE — "Provision for all workers."
Footer tags: Safety is a Value | Protecting People | Preserving the Environment | Building a Safer Future


Workforce Mobilization — "Logistics & Camp Management"


Rapid Deployment — "Mobilization within 48-72 hours."
Premium Accommodation — "Well-maintained labor camps adhering to Ministry standards."
Efficient Transportation — "Large fleet of modern worker buses."
Footer tags: Fast Mobilization | Comfortable Accommodation | Reliable Transport | Stronger Workforce


Quality Assurance & Control — "Excellence in Every Detail"


Rigorous Skill Vetting & Trade Testing — "We ensure every worker is tested, verified, and fit for the job."
Continuous Performance Monitoring — "Ongoing evaluation to maintain high productivity and workmanship standards."
Compliance with International Quality Standards — "We adhere to globally recognized QA/QC processes and benchmark best practices."
Footer tags: Precision | Integrity | Excellence | Commitment


Our Competitive Edge — "Why Partner With Al Mohra?"


Proven Track Record in Giga-Projects — "Trusted by leading developers and contractors in Saudi Arabia across prestigious mega-projects."
100% Legal & Government Compliance — "Fully compliant with Saudi Labor Law and all government regulations ensuring peace of mind and risk-free operations."
Scalable & Rapid Workforce Solutions — "Agile manpower deployment with the capability to scale up workforce as per project demand – quickly and efficiently."
Tagline box: "YOUR VISION. OUR COMMITMENT. — Building a Stronger Tomorrow Together."
Footer tags: Experience You Can Trust | Commitment to Excellence | People Our Strength | Delivering On Time


(নোট: ওয়েবসাইট ভার্সনে stat কাউন্টারগুলো (Safety Days, Training Hours, Certified Workers ইত্যাদি) source-এ "0" placeholder হিসেবে ছিল — client-কে জিজ্ঞেস করে বাস্তব সংখ্যা confirm করে নিতে হবে, নাহলে ওয়েবসাইটে animated counter "0" না দেখিয়ে একটা reasonable/TBD placeholder বা conditionally hide করে রাখা ভালো)

3.18 SECTION 06 — Project Portfolio & Experience

Sub-tagline: "Trusted by Industry Leaders Across Saudi Arabia"

Our Prestigious Clients (logos):
BINYAH (بنية), Saudi Constructioneers Ltd. (الشركة السعودية للتعمير), Saudi Arabian Baytur, PicoPlay, MENASCO, BACS (Riyadh Metro Project), MAN Enterprise, Samsung C&T (Engineering & Construction Group), Larsen & Toubro, fast (Riyadh Metro Alliance)

Ongoing Mega Projects:


Riyadh Metro (Lines 3, 4, 5 & 6) — Clients: FAST Consortium, Samsung C&T — Discipline: MEP Works & Civil
Qiddiya & KAFD — Clients: JAMED, Saudi Arabian Baytur — Discipline: Electro-Mechanical Works


Qiddiya Giga-Project Focus:


Juffali (JAMED) — Projects: Six Flags & Speed Park
MENASCO — Project: Speed Park
Binyah (Saudi Real Estate Infrastructure Company) — Project: Qiddiya Infrastructure


Diriyah & Key Riyadh Developments (Powered By Saudico Constructioneers Ltd.):


Nesma & Partners — Project: Diriyah
Binyah (Saudi Real Estate Infrastructure Company) — Projects: Diriyah (Risk Cartoon*), Exit 10 Seven, Misk Mishraq Project (Irqah – Riyadh)


(নোট: PDF-এ লেখা আছে "Diriyah (Risk Cartoon)" — এটা সম্ভবত একটা টাইপো/OCR error, প্রকৃত প্রজেক্ট নাম client-এর কাছে জিজ্ঞেস করে confirm করে নেওয়া ভালো, ভুল অনুমান করে বসিয়ে দেওয়া ঠিক হবে না।)

Completed Projects (Metro/Infrastructure):


Ar Riyad New Mobility (ANM) – Riyadh Metro Line 3
Technical Development Co. (TDC) – Riyadh Metro Line 4
Larsen & Toubro (L&T) – Riyadh Metro Line 3
Al Khoraeyef Water and Power Technologies – Wadi Al Dawasir


Completed Projects (Industrial & Commercial Milestones):


Saudi Aramco (KAPSAR) – Electro-Mechanical Works
Zamil Air Conditioning & Refrigeration
ABB Contracting Company – Industrial Area Power Plant
Drake & Scull Contracting Co. – Al Rajhi Project
National Lead Smelting Co. (RASAS) – Factory Labor


3.19 SECTION 07 — Legal & Compliance Documents

Tags: Certified | Verified | Trusted

Commercial Registration:


Al Mohra Contracting Company
National Number: 7053500273
Release Date: 26/01/2026
Entity Type: Company Limited Liability (One Person)
Status: Active


VAT Registration (Zakat, Tax and Customs Authority):


Taxpayer Name: Al Mohra Contracting Company
VAT Registration Number: 314593295200003
Effective Registration Date: 2026/02/01
Taxpayer Address: Riyadh, Al Olaya Dist., 12222
CR National Number: 7053500273
Tax Period: Quarterly
First Filing due date: 2026/04/30
TIN: 3145932952


Chamber of Commerce & National Address:


Riyadh Chamber Membership No.: 1253910
Membership Class: First
Date of Issue: 26/01/2026
Certificate Expires on: 25/01/2027
National Address: Building No. 2456, Al Wadeea Street, Al Olaya Dist., Postal Code 12222, Riyadh, Kingdom of Saudi Arabia


Commercial Extract (Ministry of Commerce):


Trade Name: Al Mohra Contracting Company (شركة آل موهرا كونتراكتينج)
Entity Type: Limited Liability Company (One Person)
Capital: SAR 3,000,000.00
Registered Activity: Building General Construction for Residential Buildings (activity code 410010)
Owner: Al Sira Contracting Company Sh. w Sh. (شركة السيرة للمقاولات ش ش و9) — Nationality: Bangladesh
Manager: Arif Aslam Mohammed Mostafa (عريف اسلام محمد مصطفى) — Nationality: Bangladesh


Corporate Banking Details:


Saudi National Bank (SNB): Account No. 22400000189201, IBAN SA4110000022400000189201, SWIFT NCBKSAJE
Al Rajhi Bank: Account No. 282100010006089647816, IBAN SA7180000282608019647816


GOSI (Social Insurance):


Establishment: Al Mohra Contracting Company
Subscription No.: 659485508
Unified National Number: 7053500273
Address: Postal Code 12222, Saudi Arabia
Certificate valid until: 19/12/1447H


3.20 Closing / CTA Page

Heading: "Building the Future Together — Thank You For Trusting Al Mohra"

"At Al Mohra Contracting Company, every project is a partnership. We bring expertise, dedication, and an uncompromising standard of quality to everything we do. Partner with us to turn your visionary projects into reality."

Footer tags: Commitment to Quality | Expertise You Can Rely On | Partnership Built on Trust | Delivering Value for Tomorrow

3.21 Commercial Offer & Pricing (Manpower Supply Rates, Categories & Terms of Agreement)


নোট: এই সেকশনটা একটা quotation letter — website-এ সরাসরি রেট বসানো ঠিক হবে না (rate column গুলো PDF-এ blank ছিল, client fill করবে B2B-ভিত্তিতে)। ওয়েবসাইটে এটাকে একটা "Request a Quotation" ফর্ম + Manpower Category লিস্ট (৬০+ ক্যাটাগরি নাম, no rates) হিসেবে দেখানো উচিত — সাথে "10 Hours Work" ভিত্তিক rate card ডাউনলোডযোগ্য PDF/inquiry হিসেবে রাখা যায়। নিচে পুরো ক্যাটাগরি লিস্ট verbatim দেওয়া হলো (rate ছাড়া):



Quotation Letter Context (verbatim):
"We are pleased to introduce ourselves as a one of the leading local Manpower suppliers by the virtue of reputation since long time. Currently we are able to supply different categories of highly experienced workers. We are submitting rates and categories of our workers."
— From: Al Mohra Contracting Company, Mobile: 0565882482, Email: Mohra.ariful@gmail.com

Full 103-Category Manpower List (verbatim, in order — "60+ Manpower Categories" ব্যাজে এই লিস্ট থেকেই সংখ্যা এসেছে):

Helper, Electrician, Electrician Foreman, Electrician Lead Man, BMS Technician, AC Technician, Panel Termination, Pipe Fitter Fire Alarm, Pipe Fitter, Pipe Insulator, Pipe Fitter Foreman, Pipe Fitter Lead Man, Plumber, Plumber Foreman, Plumber Lead Man, Duct Fitter-HVAC, Duct Insulator, Duct Foreman, Duct Fitter Lead Man, Steel Fixer, Painter Normal / Painter Epoxy, Mason - Plaster / Tiles Mason, Interlock, Painter - Spray, Finishing / Shuttering Carpenter, Gypsum board Carpenter, Civil Foreman, Civil – Lead Man, Scaffolder (with TUV), Glass Fitter / Silicon Man, Aluminum Fitter / Cladding Fitter, Electrical Engineer, Civil Engineer, Senior Civil Engineer, Civil QC Engineer, Mechanical Engineer, Senior Mechanical Engineer, Mechanical QC Engineer, Civil QC Inspector, Electrical QC / QC Engineer, Mechanical QC Inspector, QA/QC Manager, HSE Officer, HSE Supervisor, Civil Draftman, Electrical Draftman, Logistic Foreman, Logistic Supervisor, Store Keeper, Store Assistant, Electrical Supervisor, Civil Supervisor, Junior Planning Engineer, Senior Planning Engineer, Planning Engineer, Project Manager, Construction Manager, Warehouse Supervisor, Procurements Engineer, Procurements Officer, Road Engineer, Material Engineer, Surveyor, Lead Surveyor, Civil/MEP Qty Surveyor, Environments Officer, Planning Manager, Cook, Civil Site Supervisor, Tea Boy, Surveyor Helper, Flagman, Fire Warden / Fire Watcher, Store Helper, Safety Helper, Assistant Surveyor, Normal Welder, Welder X-Ray-6G, Welder 3G–4G, Welder-Tig, Welder Copper, Light Driver / Heavy Driver, Rigger-I, Rigger-II, Rigger-III, Lifting Supervisor, Logistic Superintendent and Lead, Scaffolding Inspector, Traffic Supervisor, IT Technician, IT Engineer, Male Nurse / (General – Doctor - 80), Glass Fitter / Silicon Man, Aluminum Fitter / Cladding, Man Lift Operator, Forklift Operator, Scissor Lift Operator, Equipment Inspector, Crane Operator (mobile), Steel Erector, Steel Fabricator / Pipe Fabricator, Security Man – Saudi

(এই লিস্টে কিছু আইটেম দুবার আসছে যেমন "Glass Fitter / Silicon Man" এবং "Aluminum Fitter / Cladding Fitter" — মূল PDF/quotation-এ যেভাবে আছে সেভাবেই রাখা হয়েছে, duplicate সরানো হয়নি যাতে কোনো তথ্য বাদ না পড়ে; ওয়েবসাইটে দেখানোর সময় duplicate merge করে নেওয়া যায় UX-এর স্বার্থে, চাইলে client-কে জানিয়ে করবে)

Terms & Conditions (Commercial Offer — full verbatim, numbered):


"The Basic working hours will be 10 hours per day and 6 days in a week. 26 Days a month."
"The First Party. Will provide necessary tools, time Card, safety Belt and Equipment to the workers."
"The Second Party. Will be provided food, Accommodation and transportation inside Riyadh. If it is outside of Riyadh The First Party. Will be provided food, Accommodation and transportation."
"The Second Party. Will provide Original, iqama, medical Insurance & card."
"During the duty period in case of Accident medical expenses by the First party."
"Payment: Should made on monthly basis within 10 days submission of invoice at the end of every Month."
"The First party. Provides government Vat 15% As per Saudi law. This contract duration for one year."
"Others Terms & condition are negotiable, it will be Written in the agreement."
"The First Party. Timesheet will be provided by the first party within 3 days end of each month."


Experience of Work / Client References (full list, verbatim — 21 entries):


Pico.
Fast Consortium LLC – Riyadh Metro.
FCC Electromechanical – Riyadh Metro Line 5 & 6.
BACS – Riyadh Metro.
Samsung Co. (Al Rajhi Head Quarter, Riyadh Metro & KAFD).
Ar Riyadh New Mobility (FAST) – Line 3, Riyadh Metro.
Alstom – TJV & UJV – Riyadh Metro.
Saudi Arabian Baytur Construction Co. – KAFD & Misk Project.
Larsen & Toubro (L&T) – Riyadh Metro.
Technical Development Co. (TDC) – for Contracting.
Saudi Constructioneers Ltd.
Al Fanar Group (Construction and Factory).
Juffali Electro Mechanical Company (JAMED) – Six Flags Project, Qiddiya.
MAN Enterprise Al-Saudia L.L.C.
T. Nagadi Preformed Concrete Group of Factories (Riyadh, Yanbu, Al Nakhi & Tabuk).
Al Etqan Factory Co. for Electric Panels – Saudi Arabia.
Dar Aluminium Products Co. LTD (DALPCO) – Riyadh, Saudi Arabia.
Ajwad Aluminum Company – Riyadh, Saudi Arabia.
Hana Food Industries Company (Joint Stock Company).
Honeywell Co. – Saudi Arabia (Airport – Riyadh).
Kenana Contracting Company Ltd.


Signatory:
Mr. Ariful Islam — Executive Manager, Al Mohra Contracting Company
Mobile: +966-565882482 | Email: mohra.ariful@gmail.com

3.22 Back Cover


Headquarters: 2456 Al Wadeea, Al Olaya Dist, 12222, Riyadh, KSA.
Phone: +966 565 882 482 | +966 502 475 835
Email: mohra.ariful@gmail.com
Website: www.almohracontracting.com



STEP 4 — Homepage Structure Reference (আগের সাইটের হোমপেজ ফ্লো — নতুন সাইটেও একই তথ্য-প্রবাহ রাখো, ডিজাইন upgrade সহ)

আগের সাইটের homepage-এ যেই ক্রমে সেকশন ছিল (নতুন সাইটেও এই তথ্য-প্রবাহ রাখা উচিত, শুধু visual treatment আধুনিক করবে):


Hero — headline: "Trusted Manpower Supply Partner in Saudi Arabia" + sub-copy + 2 CTA buttons ("View Manpower Categories", "Request Quotation") + 4 stat badges (100% Legal Compliance, 48–72h Fast Mobilization, 60+ Manpower Categories, 2030 Vision Aligned)
Prestigious Clients & Partners — logo marquee (10 clients: Samsung C&T, Larsen & Toubro, Nesma & Partners, Binyah, FAST Consortium, Juffali, Menasco, Saudico, PicoPlay — এবং উপরের 3.18-এ দেওয়া বাকিরাও)
Specialized Manpower Solutions — 6 কার্ড (Steel, MEP & Technical, Heavy Equipment & Transport, Civil & Construction, Cleaning & Facility Support, Catering & Support Services) — প্রতিটায় ৩টা করে ট্যাগ
Company Profile PDF Download block — "65 Pages | Full Company Profile" ব্যাজ + Download/Preview বাটন (নতুন profile PDF রেডি হলে link বসাবে)
60+ Manpower Categories — grouped tag-cloud (৩ কলামে trades grouped) + ৩টা stat (48–72h Mobilization Time, Verified Workers & Documents, Scalable As Per Project Demand)
Empowering Saudi Vision 2030 — ৩টা পয়েন্ট কার্ড + closing tagline
Project Experience — 6 প্রজেক্ট কার্ড (Riyadh Metro, Qiddiya, Diriyah — Ongoing; KAFD, Saudi Aramco KAPSAR, Wadi Al Dawasir — Completed)
Leadership — CEO ও Deputy CEO কোট কার্ড + closing statement + "Learn More About Us" CTA
Key Management — Operations Manager, Site Supervisor, Documents Controller কার্ড
HSE Commitment — stat badges (Safety Days w/o LTI, Training Hours, Certified Workers) + ৪টা ফিচার কার্ড (Global Standards, Continuous Training, Standard PPE, QA/QC Oversight)
Building the Future Together — ৪টা ভ্যালু কার্ড + CTA
Competitive Edge — ৩টা বড় কার্ড (Proven Track Record, 100% Legal Compliance, Rapid Deployment) + ৪টা badge stat (ISO Certified, 5000+ Workforce, 24/7 Support, HSE Focused)
Contact / Quotation Form — phone, email, address + একটা "Required Manpower" ড্রপডাউন সহ কুইক কোটেশন ফর্ম
Footer — company summary, quick links, legal status (CR/VAT/Chamber/GOSI), contact info, copyright



STEP 5 — Content Rules


কোনো তথ্য বাদ দেওয়া যাবে না — উপরের প্রতিটা সেকশন, প্রতিটা বুলেট, প্রতিটা কোট website-এ কোথাও না কোথাও থাকতে হবে (হোমপেজে সংক্ষেপে + নিজস্ব sub-page-এ পূর্ণাঙ্গ, ঠিক আগের সাইটের sitemap অনুযায়ী)।
কোনো আন্দাজি/ভুল তথ্য যোগ করা যাবে না — যেখানে PDF-এ স্ট্যাট নাম্বার blank/0 ছিল (যেমন Safety Days, Training Hours, Certified Workers count), সেখানে বাস্তব সংখ্যা বসাবে না — placeholder রাখবে অথবা client-কে জিজ্ঞেস করে নেওয়ার নোট রাখবে।
"Diriyah (Risk Cartoon)" প্রজেক্ট নামটা সম্ভবত টাইপো — client-এর কাছ থেকে সঠিক নাম confirm করে নেওয়ার কথা মাথায় রাখবে, নিজে থেকে বদলাবে না।
Leadership ছবি (King Abdulaziz, King Salman, Crown Prince MBS-এর ছবি) — এগুলো official/respectful প্রোটোকল মেনে ব্যবহার করতে হবে; ঠিক কোন ছবি ব্যবহার করা যাবে সেটা client-কে জিজ্ঞেস করে নেওয়া নিরাপদ, নিজে থেকে random ছবি বসাবে না।
Rate card-এর column গুলো blank ছিল বলে ওয়েবসাইটে rate প্রকাশ্যে না দেখিয়ে "Request Quotation" ফ্লো ব্যবহার করবে (৩.২১-এ ব্যাখ্যা করা আছে)।



STEP 6 — Assets


Al Mohra-এর আসল হাই-রেজ লোগো, টিম ফটো (CEO Ariful Islam, Deputy CEO Nasrin Akter, Documents Controller) client থেকে সংগ্রহ করে নিতে হবে — PDF-এ যা আছে তা AI-generated/stock-looking হতে পারে, তাই real photo confirm করে নেওয়ার নোট রাখবে।
Client লোগো (Samsung C&T, L&T, Nesma, Binyah, FAST, Juffali, Menasco, Saudico, PicoPlay, MAN Enterprise, ইত্যাদি) হাই-রেজ vector আকারে collect করে নেওয়া ভালো।
Construction/industrial থিমের রয়্যালটি-ফ্রি স্টক ইমেজ ব্যবহার করা যাবে hero/section background-এ (crane, skyline, welding spark, steel structure ইত্যাদি) — কপিরাইটেড বা অন্য কোনো কোম্পানির আসল সাইট ছবি ব্যবহার করা যাবে না।
Arabic টেক্সট (কোম্পানির নাম, ট্রেড ক্যাটাগরির bilingual লেবেল) দেখাতে চাইলে RTL-সাপোর্টেড font pairing ব্যবহার করো, পুরো সাইট RTL করার দরকার নেই যদি না client চায়।



STEP 7 — Deliverable Checklist


 আগের প্রজেক্টের সব company data/ছবি/লোগো/কমেন্ট মুছে Al Mohra-এর তথ্য বসানো হয়েছে
 Sitemap (Step 2) অনুযায়ী সব পেজ/সাব-পেজ তৈরি হয়েছে
 হোমপেজে Step 4-এর ফ্লো মেনে সব সেকশন আছে
 Design Brief (Step 0) অনুযায়ী 3D/parallax/animation/modern UI প্রয়োগ হয়েছে — আগের সাইট (almohra.moumasiworks.xyz) থেকে দৃশ্যত উন্নত লাগছে
 Leadership, Key Management, Vision/Mission/Values, HSE, Manpower categories (১০৩টা আইটেম), Projects, Clients, Legal & Compliance — সবগুলো section verbatim তথ্যসহ আছে
 Rate card প্রকাশ্যে না দেখিয়ে quotation-request ফ্লো ব্যবহার হয়েছে
 Responsive (mobile/tablet/desktop) + পারফরম্যান্স (lazy-load, optimized asset) চেক করা হয়েছে
 Contact ফর্ম + ফুটার তথ্য সঠিক (ফোন, ইমেইল, ঠিকানা, CR/VAT/Chamber/GOSI)
website theme dark করবেন নাহ। আর সকল image https://almohra.moumasiworks.xyz/  এই website থেকে সংগ্রহ করবেন। 

*Listed directory [Al Mohra Contracting Co Profile](file:///d:/Jakir-Vai/Al%20Mohra%20Contracting%20Co%20Profile) *

*Listed directory [src](file:///d:/Jakir-Vai/Al%20Mohra%20Contracting%20Co%20Profile/src) *

*Listed directory [public](file:///d:/Jakir-Vai/Al%20Mohra%20Contracting%20Co%20Profile/public) *

*Listed directory [components](file:///d:/Jakir-Vai/Al%20Mohra%20Contracting%20Co%20Profile/src/components) *

*Listed directory [pages](file:///d:/Jakir-Vai/Al%20Mohra%20Contracting%20Co%20Profile/src/pages) *

*Listed directory [assets](file:///d:/Jakir-Vai/Al%20Mohra%20Contracting%20Co%20Profile/src/assets) *

*Viewed [package.json](file:///d:/Jakir-Vai/Al%20Mohra%20Contracting%20Co%20Profile/package.json) *

*Listed directory [Portfolio_images](file:///d:/Jakir-Vai/Al%20Mohra%20Contracting%20Co%20Profile/src/assets/Portfolio_images) *

*Listed directory [animation_image](file:///d:/Jakir-Vai/Al%20Mohra%20Contracting%20Co%20Profile/src/assets/animation_image) *

*Viewed [App.jsx](file:///d:/Jakir-Vai/Al%20Mohra%20Contracting%20Co%20Profile/src/App.jsx) *

*Viewed [Home.jsx](file:///d:/Jakir-Vai/Al%20Mohra%20Contracting%20Co%20Profile/src/pages/Home.jsx) *

*Viewed [Hero.jsx](file:///d:/Jakir-Vai/Al%20Mohra%20Contracting%20Co%20Profile/src/components/Hero.jsx) *

*Viewed [Header.jsx](file:///d:/Jakir-Vai/Al%20Mohra%20Contracting%20Co%20Profile/src/components/Header.jsx) *

*Viewed [Footer.jsx](file:///d:/Jakir-Vai/Al%20Mohra%20Contracting%20Co%20Profile/src/components/Footer.jsx) *

*Viewed [index.css](file:///d:/Jakir-Vai/Al%20Mohra%20Contracting%20Co%20Profile/src/index.css) *

### Planner Response

Now I have a thorough understanding of the codebase. Let me create the implementation plan.

*Edited relevant file*

### Planner Response

## STEP 1 — Codebase Audit Complete ✅

এখানে যা পাওয়া গেছে:

### Framework / Tech Stack
| Item | Value |
|---|---|
| Framework | React 19 + Vite 8 |
| Styling | Tailwind CSS v4 + custom `index.css` (animations, glassmorphism) |
| Routing | React Router DOM v7 |
| Icons | Lucide React |

### পুরনো ক্লায়েন্ট ডেটা যেখানে যেখানে আছে (সব মুছতে হবে)

| ফাইল | কী আছে |
|---|---|
| `Header.jsx` | "MUBARAK CONTRACTING", "MGC", phone `+966 571471320`, email `info@mgc-contracting.com` |
| `Hero.jsx` | "Mubarak Contracting Company", old service description |
| `Footer.jsx` | "Mubarak Contracting Company", MGC website, old phones/emails, Jubail address |
| `Home.jsx` | WhatsApp number `966571471320`, old WhatsApp message text |
| `WhatsAppButton.jsx` | *(needs checking)* |
| `/public/` | `Asnesa Profile.pdf`, `TSC Profile S.pdf`, `logo.png` (MGC logo) |
| `/src/assets/` | Same PDFs, old hero images, portfolio WhatsApp images |
| `package.json` | `"name": "trust-frontend"` |
| `asnesa_images/` | পুরো ফোল্ডার old client images |

### পুরনো Client-Specific Images (replace করতে হবে)
- `animation_image1-4.jpeg` — old site hero images
- `WhatsApp Image 2026-06-05...` (9টি) — old project photos
- `background-image_TSC.jpg.jpeg` — TSC brand image
- `logo.png` (public + assets) — MGC logo

---

প্ল্যান রেডি। **Implementation Plan** আর্টিফ্যাক্টে সব বিস্তারিত আছে।

**৩টি গুরুত্বপূর্ণ প্রশ্ন যেগুলোর উত্তর দিলে এগোনো যাবে:**

1. **Sub-page routing** — প্রতিটা সাব-পেজ কি আলাদা URL route হবে (e.g., `/about`, `/services`), নাকি সব সেকশন একটা লম্বা home-page scroll-এ থাকবে? *(প্ল্যানে hybrid SPA recommend করেছি)*
2. **Approval** — উপরের প্ল্যান ঠিক আছে? অনুমোদন দিলে সাথে সাথে কাজ শুরু করব।
3. কোনো **additional instruction** আছে?

### User Input



*Edited relevant file*

*User accepted the command `Remove-Item -Path "d:\Jakir-Vai\Al Mohra Contracting Co Profile\public\Asnesa Profile.pdf" -Force -ErrorAction SilentlyContinue; Remove-Item -Path "d:\Jakir-Vai\Al Mohra Contracting Co Profile\public\TSC Profile S.pdf" -Force -ErrorAction SilentlyContinue; Remove-Item -Path "d:\Jakir-Vai\Al Mohra Contracting Co Profile\public\logo.png" -Force -ErrorAction SilentlyContinue; Remove-Item -Path "d:\Jakir-Vai\Al Mohra Contracting Co Profile\src\assets\Asnesa Profile.pdf" -Force -ErrorAction SilentlyContinue; Remove-Item -Path "d:\Jakir-Vai\Al Mohra Contracting Co Profile\src\assets\TSC Profile S.pdf" -Force -ErrorAction SilentlyContinue; Remove-Item -Path "d:\Jakir-Vai\Al Mohra Contracting Co Profile\src\assets\logo.png" -Force -ErrorAction SilentlyContinue; Remove-Item -Path "d:\Jakir-Vai\Al Mohra Contracting Co Profile\src\assets\react.svg" -Force -ErrorAction SilentlyContinue; Remove-Item -Path "d:\Jakir-Vai\Al Mohra Contracting Co Profile\src\assets\vite.svg" -Force -ErrorAction SilentlyContinue; Remove-Item -Path "d:\Jakir-Vai\Al Mohra Contracting Co Profile\src\assets\hero.png" -Force -ErrorAction SilentlyContinue; Remove-Item -Path "d:\Jakir-Vai\Al Mohra Contracting Co Profile\src\assets\animation_image" -Recurse -Force -ErrorAction SilentlyContinue; Remove-Item -Path "d:\Jakir-Vai\Al Mohra Contracting Co Profile\src\assets\Portfolio_images" -Recurse -Force -ErrorAction SilentlyContinue; Remove-Item -Path "d:\Jakir-Vai\Al Mohra Contracting Co Profile\asnesa_images" -Recurse -Force -ErrorAction SilentlyContinue; Remove-Item -Path "d:\Jakir-Vai\Al Mohra Contracting Co Profile\asnesa_text.txt" -Force -ErrorAction SilentlyContinue; Remove-Item -Path "d:\Jakir-Vai\Al Mohra Contracting Co Profile\extract_pdf.js" -Force -ErrorAction SilentlyContinue; Remove-Item -Path "d:\Jakir-Vai\Al Mohra Contracting Co Profile\extract_images.js" -Force -ErrorAction SilentlyContinue; Remove-Item -Path "d:\Jakir-Vai\Al Mohra Contracting Co Profile\replace_images.cjs" -Force -ErrorAction SilentlyContinue; Remove-Item -Path "d:\Jakir-Vai\Al Mohra Contracting Co Profile\analyze_raw_colors.js" -Force -ErrorAction SilentlyContinue; Remove-Item -Path "d:\Jakir-Vai\Al Mohra Contracting Co Profile\test_instance.js" -Force -ErrorAction SilentlyContinue; Remove-Item -Path "d:\Jakir-Vai\Al Mohra Contracting Co Profile\TSC_dist.zip" -Force -ErrorAction SilentlyContinue; echo "DONE"`*

### Planner Response

Good, all old assets purged. Now let's update package.json and create the new logo/favicon:

*Edited relevant file*

### Planner Response

Now let's create the Al Mohra logo SVG and favicon:

*Edited relevant file*

*Edited relevant file*

### Planner Response

Now update `index.html` with Al Mohra meta tags, then rewrite the full design system CSS:

*Edited relevant file*

### Planner Response

Now rewrite the full design system CSS:

*Edited relevant file*

### Planner Response

Now update main.jsx and rewrite App.jsx with the full routing:

*Edited relevant file*

*Edited relevant file*

### Planner Response

Now rewrite the shared components. Starting with Layout, Header, Footer, Loader, WhatsAppButton:

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

### Planner Response

Now rewrite the Hero component:

*Edited relevant file*

### Planner Response

Now rewrite Clients (marquee), About, Stats, VisionMission:

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

### Planner Response

Now rewrite Services, Portfolio, Manpower, and create new components:

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

### Planner Response

Now create the new components and rewrite the remaining ones:

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*