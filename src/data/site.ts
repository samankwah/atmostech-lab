// Site content. Publications and research lines are Dr. Prince Junior Asilevi's real work
// (sources: KNUST staff directory and Google Scholar, Oct 2026). Items marked "placeholder" still need real details.

export const nav = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/people", label: "People" },
  { href: "/publications", label: "Publications" },
  { href: "/tools-data", label: "Tools & Data" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export const lab = {
  name: "AtmosTech Lab",
  affiliation: "KNUST",
  department: "Department of Meteorology and Climate Science, Kwame Nkrumah University of Science and Technology",
  dept: "Department of Meteorology & Climate Science",
  city: "Kumasi, Ghana",
  tagline: "Atmospheric Science & Environmental Technology",
  mission: "Observing, understanding and engineering solutions for the atmosphere.",
  about:
    "AtmosTech Lab brings together atmospheric science, environmental engineering, Earth observation, field and laboratory measurements, computational modelling and data science to understand atmospheric environments and develop practical solutions. Based in the Department of Meteorology & Climate Science at KNUST, our work has a strong focus on Ghana and West Africa while connecting to international atmospheric research.",
  collaborations: "Collaborations and research engagement across KNUST/Ghana, Switzerland, the UK and Germany.",
  email: "pjasilevi@knust.edu.gh",
  // placeholder contact details
  phone: "+233 32 206 0000",
  address: ["College of Science, KNUST", "PMB, University Post Office", "Kumasi, Ghana"],
};

// Footer social links. placeholder: replace each href with the lab's real profile URL.
export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "X", href: "https://x.com/" },
  { label: "YouTube", href: "https://www.youtube.com/" },
];

export const pi = {
  name: "Prince Junior Asilevi, Ph.D.",
  photo: "/people/asilevi.jpg", // from the KNUST staff directory profile
  labRole: "Lab Lead / Principal Investigator",
  role: "Lecturer & Research Scientist, Department of Meteorology & Climate Science, KNUST.",
  summary:
    "Atmospheric and environmental scientist working across emissions, air quality, atmospheric processes, Earth observation, computational modelling and environmental technologies.",
  bio: "Dr. Asilevi leads AtmosTech Lab in the Department of Meteorology and Climate Science, KNUST. He holds a BSc in Physics and an MPhil in Meteorology and Climate Science from KNUST, and a PhD in Environmental Engineering (Sanitation and Waste Management). He is a visiting scientist at the UK Centre for Ecology & Hydrology (UKCEH), Edinburgh, and the EUMETSAT Satellite Application Facility on Climate Monitoring (CM SAF) at Deutscher Wetterdienst, Offenbach, and previously served as Project Manager for the World Bank Africa Centre of Excellence RWESCK at KNUST.",
  interests: [
    "Emissions & air pollution science and control",
    "Atmospheric composition & chemistry",
    "Fire meteorology",
    "Cloud & radiation interaction",
    "Satellite remote sensing",
  ],
  links: [
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=rvu_ifgAAAAJ" },
    { label: "KNUST profile", href: "https://webapps.knust.edu.gh/staff/dirsearch/profile/summary/9b35c71682a9.html" },
  ],
};

export type HeroSlide = {
  image: string;
  alt: string;
  credit: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  text: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
};

// Images are public domain (NASA / NOAA via Wikimedia Commons). Drop your own into /public/hero to replace them.
export const heroSlides: HeroSlide[] = [
  {
    image: "/hero/clouds.jpg",
    alt: "Towering thunderheads seen from the International Space Station",
    credit: "NASA / ISS Expedition 40",
    eyebrow: "KNUST · Ghana / Atmospheric Research",
    title: lab.name,
    subtitle: lab.tagline,
    text: lab.mission,
    primary: { href: "/research", label: "Explore Our Research" },
    secondary: { href: "/people", label: "Meet the Lab" },
  },
  {
    image: "/hero/dust.jpg",
    alt: "Saharan dust blowing off West Africa over the Atlantic, seen by satellite",
    credit: "NOAA NESDIS",
    eyebrow: "Air Quality & Remote Sensing",
    title: "Mapping NO₂ over West Africa",
    subtitle: "From TROPOMI satellite retrievals to street-level monitors",
    text: "Tracking nitrogen dioxide hotspots in Accra and Kumasi, the meteorology that drives them, and the millions of people exposed.",
    primary: { href: "/research#composition-air-quality", label: "Air Quality Research" },
    secondary: { href: "/publications", label: "Read Publications" },
  },
  {
    image: "/hero/congo.jpg",
    alt: "Fields of small cumulus clouds over the Congo Basin rainforest, seen by the MODIS satellite",
    credit: "NASA MODIS",
    eyebrow: "Clouds, Radiation & Climate",
    title: "Clouds, Sunlight & Water",
    subtitle: "Cloud climatology, solar resource and aridity across Ghana",
    text: "Merging station records with satellite and reanalysis data to support clean energy, agriculture and water planning.",
    primary: { href: "/research#climate-processes", label: "Climate Research" },
    secondary: { href: "/projects", label: "See Projects" },
  },
  {
    image: "/hero/lightning.jpg",
    alt: "Multiple lightning strikes during a night-time thunderstorm",
    credit: "NOAA Photo Library",
    eyebrow: "Fire Meteorology & Emissions",
    title: "Smoke, Fire & Emissions",
    subtitle: "Biomass burning, methane and atmospheric chemistry",
    text: "Quantifying how seasonal fires and lake emissions change the composition of the West African atmosphere.",
    primary: { href: "/research#climate-processes", label: "Emissions Research" },
    secondary: { href: "/opportunities", label: "Join the Lab" },
  },
];

export type ResearchArea = {
  slug: string;
  label: string;
  title: string;
  summary: string;
  topics: string[];
  image?: string;
};

// The five research themes from the Canva design. Images without a /hero path are from Wikimedia Commons:
// NASA carbon dioxide simulation (public domain) and "Innovation Africa - solar panels" (CC0).
export const researchAreas: ResearchArea[] = [
  {
    slug: "composition-air-quality",
    label: "Atmosphere",
    title: "Atmospheric Composition & Air Quality",
    summary:
      "Mapping nitrogen dioxide over West African cities, estimating population exposure, and reading local pollution through rainwater chemistry and greenhouse gas emissions.",
    topics: ["TROPOMI NO₂ hotspots", "Population exposure", "Rainwater chemistry", "Local pollution sources"],
    image: "/hero/dust.jpg",
  },
  {
    slug: "observation",
    label: "Observation",
    title: "Atmospheric Observation & Earth Observation",
    summary:
      "Combining ground monitors, all-sky imaging and satellite records to observe the atmosphere over Ghana, from street-level NO₂ to merged cloud cover climatologies.",
    topics: ["Ground–satellite comparison", "Cloud cover databank", "All-sky imaging"],
    image: "/hero/congo.jpg",
  },
  {
    slug: "modelling-data",
    label: "Computation",
    title: "Atmospheric Modelling & Data Science",
    summary:
      "High-resolution atmospheric chemistry modelling with ICON-ART, statistical predictability of pollution, and machine learning on atmospheric datasets.",
    topics: ["ICON-ART West Africa", "NO₂ predictability", "Machine learning"],
    image: "/research/modelling-co2-simulation.jpg",
  },
  {
    slug: "environmental-technologies",
    label: "Innovation",
    title: "Environmental Technologies",
    summary:
      "Engineering practical tools, from atmospheric-pressure non-thermal plasma for indoor air and water treatment to locally built cloud observation equipment and exposure platforms.",
    topics: ["Non-thermal plasma", "Cloud observation equipment", "Exposure intelligence platforms"],
    image: "/research/environmental-technologies-solar.jpg",
  },
  {
    slug: "climate-processes",
    label: "Climate",
    title: "Climate & Atmospheric Processes",
    summary:
      "Clouds, radiation, hydroclimate and fire meteorology across tropical Ghana: solar resource, aridity and evapotranspiration, and how seasonal fires shape regional pollution.",
    topics: ["Cloud–radiation interaction", "Aridity & evapotranspiration", "Biomass burning"],
    image: "/hero/lightning.jpg",
  },
];

export type Publication = {
  year: number;
  authors: string;
  title: string;
  venue: string;
  doi?: string;
  url?: string;
};

export const publications: Publication[] = [
  { year: 2026, authors: "Bonsu, R., Quansah, E., Asilevi, P. J., Baffour-Ata, F., & Limantol, A.", title: "Development and independent validation of a station-constrained FAO-56 reference evapotranspiration dataset for Ghana", venue: "Journal of Southern Hemisphere Earth Systems Science, ES25064" },
  { year: 2026, authors: "Asilevi, P. J., Ablerdu, A. K., Korley, L., Dogbey, F., & Quansah, E.", title: "Population exposure to nitrogen dioxide (NO₂) pollution in West Africa", venue: "Environmental Pollution, 128580" },
  { year: 2026, authors: "Asilevi, P. J., Korley, L., Owusu Nkansah, R., Oppong, M., Luluwa, G., et al.", title: "Biomass burning and nitrogen dioxide pollution over West Africa", venue: "Communications Earth & Environment", doi: "10.1038/s43247-026-03701-x" },
  { year: 2026, authors: "Mijling, B., Afotey, B., Eckert, T. H., Mairhofer, M., Gil Pascual, Á., Yuorkuu, E., … & Asilevi, P. J.", title: "Ground-based monitoring of nitrogen dioxide in Kumasi, Ghana, and its comparison with satellite observations", venue: "Atmospheric Measurement Techniques, 19(9), 3063–3081", doi: "10.5194/amt-19-3063-2026" },
  { year: 2026, authors: "Asilevi, P. J., Pickard, A. E., Kitson, E., Quansah, E., & Spears, B. M.", title: "Hydroclimatic drivers of modeled methane emissions over Volta Lake", venue: "EGU General Assembly 2026 (abstract)" },
  { year: 2026, authors: "Asilevi, P. J., Boakye, P., Owusu, S. Y., Quansah, E., Toku, M., & Ampomah, W.", title: "Using pre-monsoon rainwater chemistry to monitor local atmospheric pollution in Kumasi, Ghana", venue: "Environmental Science: Atmospheres, 6(3), 273–285", doi: "10.1039/D5EA00071H" },
  { year: 2025, authors: "Asilevi, P. J., Boakye, P., Quansah, E., Ablerdu, A. K., & Ampomah, W.", title: "Satellite-detected nitrogen dioxide (NO₂) hotspots in the Greater Accra Region, Ghana", venue: "Nitrogen, 7(1), 4", doi: "10.3390/nitrogen7010004" },
  { year: 2025, authors: "Asilevi, P. J., Dzidzorm, E. N., Boakye, P., & Quansah, E.", title: "Nitrogen dioxide (NO₂) meteorology and predictability for air quality management using TROPOMI", venue: "npj Clean Air, 1, 3", doi: "10.1038/s44407-024-00003-4" },
  { year: 2024, authors: "Asilevi, P. J., Dogbey, F., Boakye, P., Aryee, J. N. A., Yamba, E. I., Owusu, S. Y., Peprah, D. K., Quansah, E., Klutse, N. A. B., Bentum, J. K., & Adjei, K. A.", title: "Bias-corrected NASA data for aridity index estimation over tropical climates in Ghana, West Africa", venue: "Journal of Hydrology: Regional Studies, 51, 101610", doi: "10.1016/j.ejrh.2023.101610" },
  { year: 2022, authors: "Asilevi Junior, P., Opoku, N. K., Martey, F., Setsoafia, E., Ahafianyo, F., Quansah, E., Dogbey, F., Amankwah, S., & Padi, M.", title: "Development of high resolution cloud cover climatology databank using merged manual and satellite datasets over Ghana, West Africa", venue: "Atmosphere-Ocean, 60(5), 566–579", doi: "10.1080/07055900.2022.2072266" },
  { year: 2022, authors: "Junior, P. A., Quansah, E., & Dogbey, F.", title: "Satellite-based estimates of photosynthetically active radiation for tropical ecosystems in Ghana—West Africa", venue: "Tropical Ecology, 63(4), 615–625", doi: "10.1007/s42965-022-00234-0" },
  { year: 2022, authors: "Dogbey, F., Asilevi, P. J., Dzrobi, J. F., Koffi, H. A., & Klutse, N. A. B.", title: "Modelling cloud cover climatology over tropical climates in Ghana", venue: "Atmosphere, 13(8), 1265", doi: "10.3390/atmos13081265" },
  { year: 2022, authors: "Quansah, A. D., Dogbey, F., Asilevi, P. J., Boakye, P., Darkwah, L., Oduro-Kwarteng, S., Sokama-Neuyam, Y. A., & Mensah, P.", title: "Assessment of solar radiation resource from the NASA-POWER reanalysis products for tropical climates in Ghana towards clean energy application", venue: "Scientific Reports, 12(1), 10684", doi: "10.1038/s41598-022-14126-9" },
  { year: 2022, authors: "Boakye, P., Ohemeng-Boahen, G., Darkwah, L., Sokama-Neuyam, Y. A., Appiah-Effah, E., Oduro-Kwarteng, S., Osei, B. A., Asilevi, P. J., & Woo, S. H.", title: "Waste biomass and biomaterials adsorbents for wastewater treatment", venue: "Green Energy and Environmental Technology", doi: "10.5772/geet.05" },
  { year: 2021, authors: "Asilevi, P. J., Boakye, P., Oduro-Kwarteng, S., Fei-Baffoe, B., & Sokama-Neuyam, Y. A.", title: "Indoor air quality improvement and purification by atmospheric pressure non-thermal plasma (NTP)", venue: "Scientific Reports, 11(1), 22830", doi: "10.1038/s41598-021-02276-1" },
  { year: 2021, authors: "Nawaz, M. I., Yi, C., Zhao, H., Asilevi, P. J., Yin, L., Yi, R., Javed, Q., & Wang, H.", title: "Experimental study of nitrobenzene degradation in water by strong ionization dielectric barrier discharge", venue: "Environmental Technology, 42(5), 789–800", doi: "10.1080/09593330.2019.1645740" },
  { year: 2020, authors: "Asilevi, P. J., Yi, C. W., Li, J., Nawaz, M. I., Wang, H. J., Yin, L., & Junli, Z.", title: "Decomposition of formaldehyde in strong ionization non-thermal plasma at atmospheric pressure", venue: "International Journal of Environmental Science and Technology, 17, 765–776", doi: "10.1007/s13762-019-02476-3" },
  { year: 2020, authors: "Asilevi, P. J., Yi, C., Li, J., Wang, H., & Nawaz, M. I.", title: "Decomposition of gas phase benzene under different conditions in atmospheric strong ionization non-thermal plasma", venue: "Maejo International Journal of Energy and Environmental Communication, 2(2), 22–29", doi: "10.54279/mijeec.v2i2.245029" },
  { year: 2020, authors: "Asilevi, P. J., Akambawe, D., Yu, C., Li, J., Boakye, P., Oduro-Kwarteng, S., & Nawaz, M. I.", title: "Research on the electrical characteristics of atmospheric strong ionization dielectric barrier discharge for air pollution control", venue: "Maejo International Journal of Energy and Environmental Communication, 2(1), 50–59", doi: "10.54279/mijeec.v2i1.244953" },
  { year: 2019, authors: "Asilevi, P. J., Quansah, E., Amekudzi, L. K., Annor, T., & Klutse, N. A. B.", title: "Modeling the spatial distribution of global solar radiation (GSR) over Ghana using the Ångström-Prescott sunshine duration model", venue: "Scientific African, 4, e00094", doi: "10.1016/j.sciaf.2019.e00094" },
  { year: 2019, authors: "Yin, L. L., Yi, R. J., Yi, C. W., Geng, T. T., Nawaz, M. I., & Junior, P. A.", title: "Removal of alizarin red dye using strong ionization discharge technology", venue: "Materials Science Forum, 960, 122–127", doi: "10.4028/www.scientific.net/MSF.960.122" },
  { year: 2019, authors: "Nawaz, M. I., Yi, C., Asilevi, P. J., Geng, T., Aleem, M., Zafar, A. M., Azeem, A., & Wang, H.", title: "A study of the performance of dielectric barrier discharge under different conditions for nitrobenzene degradation", venue: "Water, 11(4), 842", doi: "10.3390/w11040842" },
];

export type Project = {
  slug?: string;
  title: string;
  status: "Active" | "Earlier work";
  years: string;
  area: string;
  category?: string; // short label shown on featured projects
  featured?: boolean;
  image?: string;
  credit?: { text: string; href: string };
  summary: string;
  collaborators?: string;
  outputs: string[]; // publication titles, matched against `publications`
};

// The four featured projects come from the Canva design (years are placeholders). Their images (public/projects)
// are from Wikimedia Commons: ISS Expedition 28 haze over Africa and NASA GSFC dust off West Africa (public domain),
// plus a ceilometer by Famartin and Suhum clouds by Andeyinefred (CC BY-SA, cropped, credited on the image).
// The remaining research lines are built from Dr. Asilevi's publication record. No funders or grant periods are listed publicly; add them when available.
export const projects: Project[] = [
  {
    slug: "clene",
    title: "CLeNE — City-Level Nitrogen Dioxide Exposure Intelligence Platform",
    status: "Active",
    years: "Ongoing",
    area: "Atmospheric Composition & Air Quality",
    category: "Digital Research Platform",
    featured: true,
    image: "/projects/clene-iss-haze-africa.jpg",
    summary:
      "Integrates satellite NO₂, population and urban information to reveal city-level exposure patterns and support air-quality decision-making.",
    outputs: ["Population exposure to nitrogen dioxide (NO₂) pollution in West Africa"],
  },
  {
    slug: "come",
    title: "COME — Cloud Observation and Monitoring Equipment",
    status: "Active",
    years: "Ongoing",
    area: "Environmental Technologies",
    category: "Research Innovation",
    featured: true,
    image: "/projects/come-ceilometer.jpg",
    credit: {
      text: "Famartin, CC BY-SA 3.0",
      href: "https://commons.wikimedia.org/wiki/File:2008-07-09_Ely_Airport_ASOS_Ceilometer_in_Ely,_Nevada.jpg",
    },
    summary: "Locally developed atmospheric observation technology for continuous sky and cloud monitoring.",
    outputs: [],
  },
  {
    slug: "icon-art",
    title: "ICON-ART West Africa",
    status: "Active",
    years: "Ongoing",
    area: "Atmospheric Modelling & Data Science",
    category: "Atmospheric Modelling",
    featured: true,
    image: "/projects/icon-art-west-africa-dust.jpg",
    summary:
      "High-resolution atmospheric chemistry modelling of emissions, transport and urban pollution across West Africa.",
    outputs: [],
  },
  {
    slug: "wascat",
    title: "WASCAT",
    status: "Active",
    years: "Ongoing",
    area: "Atmospheric Observation & Earth Observation",
    category: "Dataset + AI",
    featured: true,
    image: "/projects/wascat-suhum-clouds.jpg",
    credit: {
      text: "Suhum, Ghana · Andeyinefred, CC BY-SA 4.0",
      href: "https://commons.wikimedia.org/wiki/File:Suhum_AYEKOTSE_Clouds.jpg",
    },
    summary: "All-sky image dataset supporting automated cloud segmentation and atmospheric observation.",
    outputs: [],
  },
  {
    title: "West African NO₂ Air Quality from Space",
    status: "Active",
    years: "2024 – present",
    area: "Atmospheric Composition & Air Quality",
    summary:
      "Using TROPOMI satellite retrievals to map nitrogen dioxide hotspots, explain their meteorological drivers and estimate how many people are exposed across West Africa.",
    outputs: [
      "Population exposure to nitrogen dioxide (NO₂) pollution in West Africa",
      "Satellite-detected nitrogen dioxide (NO₂) hotspots in the Greater Accra Region, Ghana",
      "Nitrogen dioxide (NO₂) meteorology and predictability for air quality management using TROPOMI",
    ],
  },
  {
    title: "Biomass Burning & Regional Pollution",
    status: "Active",
    years: "2025 – present",
    area: "Climate & Atmospheric Processes",
    summary:
      "Quantifying the contribution of seasonal biomass burning to nitrogen dioxide pollution over West Africa.",
    outputs: ["Biomass burning and nitrogen dioxide pollution over West Africa"],
  },
  {
    title: "Kumasi Ground-Based NO₂ Monitoring",
    status: "Active",
    years: "2025 – present",
    area: "Atmospheric Observation & Earth Observation",
    summary:
      "A team measuring nitrogen dioxide at street level in Kumasi and comparing it with satellite observations.",
    collaborators: "Mijling, B. and co-authors",
    outputs: ["Ground-based monitoring of nitrogen dioxide in Kumasi, Ghana, and its comparison with satellite observations"],
  },
  {
    title: "Rainwater Chemistry & Urban Pollution",
    status: "Active",
    years: "2025 – present",
    area: "Atmospheric Composition & Air Quality",
    summary:
      "Using the chemistry of pre-monsoon rainfall as a low-cost tracer of local atmospheric pollution in Kumasi.",
    outputs: ["Using pre-monsoon rainwater chemistry to monitor local atmospheric pollution in Kumasi, Ghana"],
  },
  {
    title: "Volta Lake Methane Emissions",
    status: "Active",
    years: "2026 – present",
    area: "Climate & Atmospheric Processes",
    summary:
      "Modelling methane emissions from Volta Lake and the hydroclimatic conditions that control them.",
    collaborators: "Pickard, A. E., Kitson, E., Spears, B. M.",
    outputs: ["Hydroclimatic drivers of modeled methane emissions over Volta Lake"],
  },
  {
    title: "Hydroclimate Datasets for Ghana",
    status: "Active",
    years: "2024 – present",
    area: "Climate & Atmospheric Processes",
    summary:
      "Bias-corrected aridity and station-constrained reference evapotranspiration datasets to support water and agricultural planning.",
    outputs: [
      "Development and independent validation of a station-constrained FAO-56 reference evapotranspiration dataset for Ghana",
      "Bias-corrected NASA data for aridity index estimation over tropical climates in Ghana, West Africa",
    ],
  },
  {
    title: "Cloud Cover Climatology Databank",
    status: "Earlier work",
    years: "2022",
    area: "Atmospheric Observation & Earth Observation",
    summary:
      "A high-resolution cloud cover climatology for Ghana built by merging manual observations with satellite datasets.",
    outputs: [
      "Development of high resolution cloud cover climatology databank using merged manual and satellite datasets over Ghana, West Africa",
      "Modelling cloud cover climatology over tropical climates in Ghana",
    ],
  },
  {
    title: "Solar Radiation Resource for Clean Energy",
    status: "Earlier work",
    years: "2019 – 2022",
    area: "Climate & Atmospheric Processes",
    summary:
      "Modelling global solar and photosynthetically active radiation over Ghana and evaluating NASA-POWER reanalysis for clean-energy applications.",
    outputs: [
      "Modeling the spatial distribution of global solar radiation (GSR) over Ghana using the Ångström-Prescott sunshine duration model",
      "Assessment of solar radiation resource from the NASA-POWER reanalysis products for tropical climates in Ghana towards clean energy application",
      "Satellite-based estimates of photosynthetically active radiation for tropical ecosystems in Ghana—West Africa",
    ],
  },
  {
    title: "Non-Thermal Plasma Air & Water Treatment",
    status: "Earlier work",
    years: "2019 – 2021",
    area: "Environmental Technologies",
    summary:
      "Atmospheric-pressure strong-ionization plasma for decomposing formaldehyde, benzene and other pollutants, and for degrading contaminants in water.",
    outputs: [
      "Indoor air quality improvement and purification by atmospheric pressure non-thermal plasma (NTP)",
      "Decomposition of formaldehyde in strong ionization non-thermal plasma at atmospheric pressure",
      "Decomposition of gas phase benzene under different conditions in atmospheric strong ionization non-thermal plasma",
      "Experimental study of nitrobenzene degradation in water by strong ionization dielectric barrier discharge",
    ],
  },
];

export function findPublication(title: string) {
  return publications.find((p) => p.title === title);
}

export function publicationHref(p: Publication) {
  return p.doi ? `https://doi.org/${p.doi}` : p.url;
}

export type Person = {
  name: string;
  role: string;
  group:
    | "Principal Investigator"
    | "Researchers"
    | "PhD Students"
    | "MSc Students"
    | "Research Assistants"
    | "Visiting Researchers"
    | "Alumni";
  interests: string;
  photo?: string; // path under public/, e.g. "/people/ama-owusu.jpg"; a silhouette shows until one is set
};

// Only the PI is real; the other entries are fictional placeholders, with stock portraits from pravatar.cc (Unsplash photos) in public/people.
export const people: Person[] = [
  { name: pi.name, photo: pi.photo, role: "Principal Investigator · Lecturer", group: "Principal Investigator", interests: "Air pollution, atmospheric chemistry, fire meteorology, cloud–radiation interaction, remote sensing" },
  { name: "Dr. Ama Owusu", photo: "/people/ama-owusu.jpg", role: "Senior Research Fellow", group: "Researchers", interests: "Air quality, sensor calibration, exposure science" },
  { name: "Dr. Kofi Boateng", photo: "/people/kofi-boateng.jpg", role: "Postdoctoral Researcher", group: "Researchers", interests: "Numerical weather prediction, WRF, data assimilation" },
  { name: "Dr. Efua Asante", photo: "/people/efua-asante.jpg", role: "Postdoctoral Researcher", group: "Researchers", interests: "Satellite remote sensing, rainfall estimation" },
  { name: "Dr. Kwame Mensah", photo: "/people/kwame-mensah.jpg", role: "Research Fellow", group: "Researchers", interests: "Atmospheric chemistry modelling with ICON-ART" },
  { name: "Yaw Adjei", photo: "/people/yaw-adjei.jpg", role: "PhD Candidate", group: "PhD Students", interests: "Monsoon onset prediction with machine learning" },
  { name: "Akosua Darko", photo: "/people/akosua-darko.jpg", role: "PhD Candidate", group: "PhD Students", interests: "Urban heat islands and heat-health" },
  { name: "Emmanuel Tetteh", photo: "/people/emmanuel-tetteh.jpg", role: "PhD Candidate", group: "PhD Students", interests: "Harmattan dust transport and optical properties" },
  { name: "Adwoa Boakye", photo: "/people/adwoa-boakye.jpg", role: "PhD Candidate", group: "PhD Students", interests: "Biomass burning emissions and satellite fire products" },
  { name: "Abena Frimpong", photo: "/people/abena-frimpong.jpg", role: "MSc Student", group: "MSc Students", interests: "Low-cost PM sensor networks" },
  { name: "Kwesi Appiah", photo: "/people/kwesi-appiah.jpg", role: "MSc Student", group: "MSc Students", interests: "Boundary-layer turbulence measurements" },
  { name: "Esi Quaye", photo: "/people/esi-quaye.jpg", role: "MSc Student", group: "MSc Students", interests: "Lightning climatology over Ghana" },
  { name: "Kojo Asare", photo: "/people/kojo-asare.jpg", role: "MSc Student", group: "MSc Students", interests: "All-sky imaging and cloud segmentation" },
  { name: "Kofi Agyeman", photo: "/people/kofi-agyeman.jpg", role: "Research Assistant", group: "Research Assistants", interests: "Field campaigns and NO₂ sensor deployment" },
  { name: "Afia Mensah", photo: "/people/afia-mensah.jpg", role: "Research Assistant", group: "Research Assistants", interests: "Rainwater sampling and laboratory analysis" },
  { name: "Nana Ama Sarpong", photo: "/people/nana-ama-sarpong.jpg", role: "Research Assistant", group: "Research Assistants", interests: "Satellite data processing and GIS" },
  { name: "Kwabena Owusu", photo: "/people/kwabena-owusu.jpg", role: "Research Assistant", group: "Research Assistants", interests: "Instrumentation and all-sky camera maintenance" },
  { name: "Dr. Lena Fischer", photo: "/people/lena-fischer.jpg", role: "Visiting Researcher · Germany", group: "Visiting Researchers", interests: "Satellite cloud and radiation climate records" },
  { name: "Dr. Thomas Keller", photo: "/people/thomas-keller.jpg", role: "Visiting Researcher · Switzerland", group: "Visiting Researchers", interests: "Atmospheric chemistry transport modelling" },
  { name: "Dr. Sarah Mitchell", photo: "/people/sarah-mitchell.jpg", role: "Visiting Researcher · United Kingdom", group: "Visiting Researchers", interests: "Lake greenhouse gas emissions and hydroclimate" },
  { name: "Dr. Daniel Weber", photo: "/people/daniel-weber.jpg", role: "Visiting Researcher · Germany", group: "Visiting Researchers", interests: "Air quality monitoring networks" },
  { name: "Dr. Samuel Nkrumah", photo: "/people/samuel-nkrumah.jpg", role: "Now at Ghana Meteorological Agency", group: "Alumni", interests: "Seasonal forecasting" },
  { name: "Dr. Grace Ofori", photo: "/people/grace-ofori.jpg", role: "Now at University of Leeds", group: "Alumni", interests: "Aerosol modelling" },
];

export const peopleGroups: Person["group"][] = [
  "Principal Investigator",
  "Researchers",
  "PhD Students",
  "MSc Students",
  "Research Assistants",
  "Visiting Researchers",
  "Alumni",
];

export const groupSlug = (group: string) => group.toLowerCase().replace(/\s+/g, "-");

// Partners named in Dr. Asilevi's profile and the lab's publications
export const collaborators = [
  {
    name: "UK Centre for Ecology & Hydrology",
    place: "Edinburgh, United Kingdom",
    note: "Visiting scientist position; Volta Lake methane modelling with A. E. Pickard, E. Kitson and B. M. Spears.",
  },
  {
    name: "EUMETSAT CM SAF, Deutscher Wetterdienst",
    place: "Offenbach, Germany",
    note: "Visiting scientist with the Satellite Application Facility on Climate Monitoring.",
  },
  {
    name: "Kumasi NO₂ monitoring team",
    place: "B. Mijling and co-authors",
    note: "Ground-based nitrogen dioxide monitoring in Kumasi compared with satellite observations.",
  },
  {
    name: "Africa Centre of Excellence RWESCK",
    place: "KNUST, Kumasi, Ghana",
    note: "World Bank Africa Centre of Excellence where Dr. Asilevi served as Project Manager.",
  },
];

export type Tool = {
  name: string;
  kind: "Dataset" | "Software" | "Dashboard" | "Platform";
  description: string;
  linkLabel: string;
  href: string;
  featured?: boolean;
  image?: string;
  credit?: { text: string; href: string };
};

// The featured four come from the Canva design. Their images (public/tools, public/hero) are from Wikimedia Commons:
// NASA 2014 global NO₂ map (public domain), "Clouds in blue sky" (CC0), NASA Goddard GEOS-5 modelled clouds
// (CC BY 2.0, credited on the card) and the NOAA dust image. Other datasets are taken from the publications; software/dashboards are placeholders.
export const tools: Tool[] = [
  { name: "CLeNE platform", kind: "Platform", featured: true, image: "/tools/clene-no2-map.jpg", description: "City-level nitrogen dioxide exposure intelligence combining satellite NO₂, population and urban data.", linkLabel: "Request access", href: "/contact" },
  { name: "WASCAT dataset", kind: "Dataset", featured: true, image: "/tools/wascat-clouds.jpg", description: "All-sky image dataset for automated cloud segmentation and atmospheric observation.", linkLabel: "Request access", href: "/contact" },
  {
    name: "Atmospheric modelling outputs",
    kind: "Dataset",
    featured: true,
    image: "/tools/geos5-model-clouds.jpg",
    credit: {
      text: "NASA Goddard, CC BY 2.0",
      href: "https://commons.wikimedia.org/wiki/File:GEOS-5_Modeled_Clouds_at_3.5-km_Global_Resolution_(HD_Video)_(4409790980).jpg",
    },
    description: "ICON-ART West Africa simulations of emissions, transport and urban pollution.",
    linkLabel: "Request access",
    href: "/contact",
  },
  { name: "Satellite / ground observation products", kind: "Dataset", featured: true, image: "/hero/dust.jpg", description: "Processed satellite retrievals and ground measurements of atmospheric composition over Ghana.", linkLabel: "Request access", href: "/contact" },
  { name: "Ghana Cloud Cover Climatology Databank", kind: "Dataset", description: "High-resolution cloud cover climatology for Ghana from merged manual and satellite observations (Atmosphere-Ocean, 2022).", linkLabel: "Request access", href: "/contact" },
  { name: "Ghana FAO-56 Reference Evapotranspiration", kind: "Dataset", description: "Station-constrained, independently validated reference evapotranspiration dataset for Ghana (JSHESS, 2026).", linkLabel: "Request access", href: "/contact" },
  { name: "Bias-Corrected Aridity Index for Ghana", kind: "Dataset", description: "Aridity index from bias-corrected NASA-POWER data over Ghana's tropical climates (J. Hydrology: Regional Studies, 2024).", linkLabel: "Request access", href: "/contact" },
  { name: "Ghana Solar Radiation Maps", kind: "Dataset", description: "Spatial global solar radiation estimates from the Ångström-Prescott model and site-assessed NASA-POWER products.", linkLabel: "Request access", href: "/contact" },
  { name: "West Africa NO₂ Hotspot Maps", kind: "Dashboard", description: "TROPOMI-based nitrogen dioxide hotspot maps for Greater Accra and West Africa (placeholder dashboard).", linkLabel: "Open dashboard", href: "#" },
  { name: "Lab Code on GitHub", kind: "Software", description: "Analysis scripts for satellite NO₂, bias correction and climatology workflows (placeholder link).", linkLabel: "View on GitHub", href: "https://github.com" },
];

export type Opportunity = {
  title: string;
  type: "PhD" | "MSc" | "Postdoc" | "Internship";
  deadline: string;
  description: string;
};

// placeholder openings
export const opportunities: Opportunity[] = [
  { title: "PhD Studentship: Satellite Air Quality over West Africa", type: "PhD", deadline: "15 January 2027", description: "Work with TROPOMI and ground data on NO₂, biomass burning and population exposure. Background in physics, chemistry, maths or computer science." },
  { title: "Postdoctoral Fellow: Atmospheric Composition", type: "Postdoc", deadline: "30 November 2026", description: "Lead analysis of urban NO₂ monitoring, rainwater chemistry and emissions in Ghana." },
  { title: "MSc Research Projects 2027", type: "MSc", deadline: "Rolling", description: "Projects in air pollution remote sensing, cloud and radiation climatology, hydroclimate datasets and plasma pollution control." },
  { title: "Undergraduate Summer Internships", type: "Internship", deadline: "28 February 2027", description: "8-week internships in fieldwork, instrument operation and satellite data analysis for KNUST undergraduates." },
];

// News images (public/news) are photos of people at work in Ghana and West Africa from Wikimedia Commons, mostly
// from Wiki Loves Africa and Wikimedia Ghana events (Centre for Climate workshop, KNUST, Obuasi field trip).
// CC BY and CC BY-SA images are cropped and credited on the card; CC0 ones carry no credit.
export const newsCategories = [
  {
    slug: "research-updates",
    label: "Research Updates",
    image: "/news/research-updates-workshop.jpg",
    credit: {
      text: "Zapsmedia25, CC BY 4.0",
      href: "https://commons.wikimedia.org/wiki/File:Wikiforhumanrights_Workshop_for_Students_at_the_Centre_for_Climate_Change_and_Sustainability_Studies_Department_university_of_Ghana_11.jpg",
    },
  },
  {
    slug: "field-lab",
    label: "Field & Lab",
    image: "/news/field-lab-obuasi-trip.jpg",
    credit: undefined,
  },
  {
    slug: "publications-conferences",
    label: "Publications & Conferences",
    image: "/news/publications-presentation.jpg",
    credit: {
      text: "Zapsmedia25, CC BY 4.0",
      href: "https://commons.wikimedia.org/wiki/File:Wikiforhumanrights_Workshop_for_Students_at_the_Centre_for_Climate_Change_and_Sustainability_Studies_Department_university_of_Ghana_08.jpg",
    },
  },
] as const;

export type NewsItem = {
  date: string;
  title: string;
  summary: string;
  category: (typeof newsCategories)[number]["slug"];
  image?: string;
  credit?: { text: string; href: string };
};

// items reference real publications; dates are approximate (month only)
export const news: NewsItem[] = [
  { date: "2026-10-01", category: "research-updates", image: "/news/item-climate-workshop.jpg", credit: { text: "Zapsmedia25, CC BY 4.0", href: "https://commons.wikimedia.org/wiki/File:Wikiforhumanrights_Workshop_for_Students_at_the_Centre_for_Climate_Change_and_Sustainability_Studies_Department_university_of_Ghana_13.jpg" }, title: "Biomass burning study in Communications Earth & Environment", summary: "New work quantifies how seasonal fires drive nitrogen dioxide pollution across West Africa." },
  { date: "2026-09-01", category: "research-updates", image: "/news/item-presenter.jpg", credit: { text: "Zapsmedia25, CC BY 4.0", href: "https://commons.wikimedia.org/wiki/File:Wikiforhumanrights_Workshop_for_Students_at_the_Centre_for_Climate_Change_and_Sustainability_Studies_Department_university_of_Ghana_02.jpg" }, title: "Population exposure to NO₂ in West Africa", summary: "Our paper in Environmental Pollution estimates how many people across the region breathe polluted air." },
  { date: "2026-07-01", category: "field-lab", image: "/news/item-field-trip.jpg", title: "Kumasi NO₂ monitoring paper in Atmospheric Measurement Techniques", summary: "Ground-based nitrogen dioxide measurements in Kumasi compared with satellite observations." },
  { date: "2026-04-01", category: "publications-conferences", image: "/news/item-talk.jpg", credit: { text: "Zapsmedia25, CC BY 4.0", href: "https://commons.wikimedia.org/wiki/File:Wikiforhumanrights_Workshop_for_Students_at_the_Centre_for_Climate_Change_and_Sustainability_Studies_Department_university_of_Ghana_05.jpg" }, title: "Volta Lake methane at EGU 2026", summary: "Dr. Asilevi presented modelled methane emissions over Volta Lake and their hydroclimatic drivers." },
  { date: "2026-03-01", category: "field-lab", image: "/news/item-lab.jpg", credit: { text: "Atidamilare, CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:African_students_working_in_the_lab.jpg" }, title: "Rainwater chemistry as a pollution tracer", summary: "Published in Environmental Science: Atmospheres: pre-monsoon rain reveals local pollution in Kumasi." },
  { date: "2026-02-01", category: "field-lab", image: "/news/item-technician.jpg", credit: { text: "Amuzujoe, CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:A_Ghanaian_Computer_Hardware_Technician.jpg" }, title: "Station-constrained evapotranspiration dataset for Ghana", summary: "A FAO-56 reference evapotranspiration dataset built on weather-station records and independently validated, now in the Journal of Southern Hemisphere Earth Systems Science." },
  { date: "2026-01-01", category: "research-updates", image: "/news/item-classroom.jpg", credit: { text: "NanaGyabeng gh, CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Ghana_Technology_University_College_,Code_train_bootcamp.jpg" }, title: "NO₂ hotspots across Greater Accra", summary: "Satellite data reveal where nitrogen dioxide concentrates in Ghana's capital region, published in Nitrogen." },
  { date: "2025-01-01", category: "publications-conferences", image: "/news/item-knust-students.jpg", title: "NO₂ meteorology paper in npj Clean Air", summary: "How weather shapes nitrogen dioxide over Ghana, and how well TROPOMI-based predictions can support air quality management." },
  { date: "2024-02-01", category: "publications-conferences", image: "/news/item-knust-workshop.jpg", title: "Bias-corrected aridity index in Journal of Hydrology: Regional Studies", summary: "Bias-corrected NASA data used to estimate aridity across Ghana's tropical climates." },
];

// "How we work" steps. Images in public/how-we-work come from Wikimedia Commons. Field observations is the
// automatic weather station at the Ghana Meteorological Agency head office, Accra ("Surface Soil Recorder 03.jpg"
// by Amuzujoe, CC BY-SA 4.0, cropped; needs the visible credit below). The rest are public domain or CC0: NASA
// (Europa Clipper mass spectrometer, ISS photo iss068e026839, GEOS-5 "Portrait of Global Aerosols", Discover
// supercomputer) and "Sunset Drive Air monitoring station" (CC0).
export const methods: { title: string; image: string; credit?: { text: string; href: string } }[] = [
  {
    title: "Field observations",
    image: "/how-we-work/gmet-weather-station.jpg",
    credit: {
      text: "Ghana Meteorological Agency, Accra · Amuzujoe, CC BY-SA 4.0",
      href: "https://commons.wikimedia.org/wiki/File:Surface_Soil_Recorder_03.jpg",
    },
  },
  { title: "Laboratory analysis", image: "/how-we-work/laboratory-analysis.jpg" },
  { title: "Satellite Earth observation", image: "/how-we-work/satellite-earth-observation.jpg" },
  { title: "Atmospheric modelling", image: "/how-we-work/atmospheric-modelling.jpg" },
  { title: "Data science & machine learning", image: "/how-we-work/data-science.jpg" },
  { title: "Decision tools & environmental technologies", image: "/how-we-work/decision-tools.jpg" },
];

// Home page "Questions driving the work"; `publication` is matched against `publications` for a DOI link
export const selectedResearch: { title: string; publication?: string; href?: string }[] = [
  { title: "Development of a city level nitrogen dioxide exposure (CLeNE) intelligence platform for West Africa", href: "/projects#clene" },
  { title: "Population-weighted NO₂ exposure in West African cities", publication: "Population exposure to nitrogen dioxide (NO₂) pollution in West Africa" },
  { title: "Meteorological drivers and predictability of NO₂ in Ghana", publication: "Nitrogen dioxide (NO₂) meteorology and predictability for air quality management using TROPOMI" },
  { title: "Saharan dust composition and transport" },
  { title: "Cloud observation and all-sky datasets", publication: "Development of high resolution cloud cover climatology databank using merged manual and satellite datasets over Ghana, West Africa" },
];

// Home page team tiles, each linking to its section on the People page
export const teamGroups = [
  { label: "Students", href: "/people#phd-students" },
  { label: "Research Assistants", href: "/people#research-assistants" },
  { label: "Visiting Researchers", href: "/people#visiting-researchers" },
  { label: "Collaborators", href: "/people#collaborators" },
];

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });
}
