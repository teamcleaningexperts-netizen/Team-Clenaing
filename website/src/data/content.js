export const company = {
  name: 'Team Cleaning Experts',
  phone: '+91 7996688885',
  phoneHref: 'tel:+917996688885',
  whatsappHref:
    'https://wa.me/917996688885?text=Hi%20Team%20Cleaning%20Experts%2C%20I%20would%20like%20to%20book%20a%20cleaning%20service.',
  email: 'service@teamcleaningexperts.in',
  emailHref: 'mailto:service@teamcleaningexperts.in',
  address: '203, 2nd floor, near MSIL, Panathur Post, Bangalore, Karnataka 560087',
  hours: '24 x 7 on Bookings',
  locations: ['Bangalore', 'Mumbai', 'New Delhi', 'Noida', 'Gurugram'],
  mapSrc:
    'https://maps.google.com/maps?q=Panathur%20Bangalore%20560087&t=&z=14&ie=UTF8&iwloc=&output=embed',
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Why Us', to: '/why-us' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact Us', to: '/contact' },
]

export const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '2,476', label: 'Happy Customers' },
  { value: '13,745', label: 'Sq Ft Remediated' },
  { value: '1,120', label: 'Emergency Calls / Month' },
]

export const growthStats = [
  { value: '2,476', label: 'Happy Customers', icon: 'users' },
  { value: '13,745', label: 'Sq Feet of Mold Remediation', icon: 'area' },
  { value: '1,120', label: 'Emergency Calls Per Month', icon: 'phone' },
]

export const aboutStats = [
  { value: '5+', label: 'Years Experience' },
  { value: '2,476+', label: 'Happy Clients' },
  { value: '1,120', label: 'Emergency Calls' },
  { value: '100%', label: 'Client Satisfaction' },
]

export const trustPoints = [
  'Trusted Professionals',
  'Eco-Friendly Products',
  '100% Satisfaction',
]

export const aboutChecks = [
  'Trained & Verified Professionals',
  'Safe & Eco-Friendly Cleaning Products',
  'Flexible & Affordable Packages',
  'Residential, Commercial & Industrial Cleaning',
]

export const services = [
  {
    id: 'home-cleaning',
    title: 'Home Cleaning',
    bar: ['Home', 'Cleaning'],
    short: 'Keep your home fresh and healthy',
    description:
      'Complete house cleaning for kitchens, bedrooms, bathrooms and living areas so your family comes home to a healthier space.',
    icon: 'home',
    image: '/images/home.jpg',
  },
  {
    id: 'office-cleaning',
    title: 'Office Cleaning',
    bar: ['Office', 'Cleaning'],
    short: 'Clean workplaces for better productivity',
    description:
      'Daily and scheduled office cleaning that keeps workstations, cabins, restrooms and common areas professional and hygienic.',
    icon: 'building',
    image: '/images/office.jpg',
  },
  {
    id: 'deep-cleaning',
    title: 'Deep Cleaning',
    bar: ['Deep', 'Cleaning'],
    short: 'Specialized deep cleaning services',
    description:
      'Intensive top-to-bottom cleaning for neglected corners, kitchens, bathrooms and post-construction spaces.',
    icon: 'sparkles',
    image: '/images/deep.jpg',
  },
  {
    id: 'sofa-carpet',
    title: 'Sofa & Carpet Cleaning',
    bar: ['Sofa &', 'Carpet'],
    short: 'Restore freshness and remove stains',
    description:
      'Professional upholstery and carpet care that lifts dust, stains and allergens from sofas, rugs and fabric surfaces.',
    icon: 'sofa',
    image: '/images/sofa.jpg',
  },
  {
    id: 'glass-window',
    title: 'Glass & Window Cleaning',
    bar: ['Glass &', 'Window'],
    short: 'Crystal clear and streak-free finish',
    description:
      'Interior and exterior glass cleaning for homes, offices and commercial facades with a streak-free shine.',
    icon: 'glass',
    image: '/images/window.jpg',
  },
  {
    id: 'sanitization',
    title: 'Sanitization & Disinfection',
    bar: ['Sanitization'],
    short: 'Eliminate germs and ensure safety',
    description:
      'Hospital-grade sanitization for high-touch surfaces, offices and homes to reduce bacteria, viruses and allergens.',
    icon: 'shield',
    image: '/images/sanitize.jpg',
  },
  {
    id: 'mold-remediation',
    title: 'Mold Remediation',
    short: 'Recover your space from mold damage',
    description:
      'Specialist mold inspection, containment, removal and prevention for homes and offices across Bangalore and other cities.',
    icon: 'droplets',
    image: '/images/mold.jpg',
    featured: true,
  },
  {
    id: 'black-mold-remediation',
    title: 'Black Mold (Stachybotrys) Remediation',
    short: 'Safe removal of toxic black mold',
    description:
      'Contained removal of Stachybotrys from drywall and ceilings after floods or leaks — reduces breathing problems, headaches and serious allergy risks.',
    icon: 'droplets',
    image: '/images/mold.jpg',
  },
  {
    id: 'aspergillus-mold-treatment',
    title: 'Aspergillus Mold Treatment',
    short: 'Ducts, walls and HVAC mold care',
    description:
      'Targets Aspergillus in AC ducts and damp walls to ease wheezing, sinus issues and long-term respiratory irritation.',
    icon: 'droplets',
    image: '/images/mold.jpg',
  },
  {
    id: 'penicillium-mold-remediation',
    title: 'Penicillium Mold Remediation',
    short: 'Bedrooms, storage and wallpaper mold',
    description:
      'Clears Penicillium from mattresses, boxes and wallpaper to stop hay fever symptoms, asthma flare-ups and musty odours.',
    icon: 'droplets',
    image: '/images/mold.jpg',
  },
  {
    id: 'fusarium-mold-cleanup',
    title: 'Fusarium Mold Cleanup',
    short: 'Flooded floors and carpet mold',
    description:
      'Remediates Fusarium after water damage on carpets and subfloors — lowers risk of skin, eye and respiratory irritation.',
    icon: 'droplets',
    image: '/images/mold.jpg',
  },
  {
    id: 'aureobasidium-mold-removal',
    title: 'Aureobasidium Mold Removal',
    short: 'Window frames and painted walls',
    description:
      'Treats dark spots behind paint and wallpaper to prevent skin rashes, eye irritation and recurring allergy symptoms.',
    icon: 'droplets',
    image: '/images/mold.jpg',
  },
  {
    id: 'trichoderma-mold-remediation',
    title: 'Trichoderma Mold Remediation',
    short: 'Wood, cabinets and crawl spaces',
    description:
      'Stops Trichoderma on joists and wet wood to protect air quality, reduce cough and fatigue, and prevent structural damage.',
    icon: 'droplets',
    image: '/images/mold.jpg',
  },
]

export const values = [
  {
    title: 'Quality',
    text: 'High standards in every service we deliver, from routine cleaning to complex mold remediation.',
    icon: 'award',
  },
  {
    title: 'Trust',
    text: 'Verified and trained professionals you can welcome into your home or workplace with confidence.',
    icon: 'badge',
  },
  {
    title: 'Safety',
    text: 'Eco-friendly and safe products that protect your family, staff, pets and indoor air quality.',
    icon: 'shield',
  },
  {
    title: 'Customer Focus',
    text: 'Your satisfaction is our priority — customized plans, 24x7 bookings and clear communication.',
    icon: 'heart',
  },
]

export const whyPoints = [
  {
    title: 'Trained & Verified Professionals',
    text: 'Every technician is trained, background-checked and equipped to handle residential and commercial jobs.',
  },
  {
    title: 'Mold Remediation Specialists',
    text: 'We do not just wipe visible growth. We find the moisture source, contain spores and restore safer indoor air.',
  },
  {
    title: 'Safe & Eco-Friendly Products',
    text: 'We use products that are effective on dirt, bacteria and mold without putting your family at risk.',
  },
  {
    title: '24 x 7 Bookings',
    text: 'Emergency mold and cleaning calls are handled around the clock. Book anytime at +91 7996688885.',
  },
  {
    title: 'Multi-City Coverage',
    text: 'Serving Bangalore, Mumbai, New Delhi, Noida and Gurugram with the same professional standard.',
  },
  {
    title: 'Flexible, Affordable Packages',
    text: 'One-time deep cleans, recurring home/office plans and custom mold jobs priced to the space and severity.',
  },
]

export const processSteps = [
  { step: '01', title: 'Book a Visit', text: 'Call or send a message. We schedule a free inspection at your convenience.' },
  { step: '02', title: 'Inspect & Quote', text: 'We assess the space, moisture source or cleaning scope and share a clear quote.' },
  { step: '03', title: 'Clean & Restore', text: 'Our team contains, cleans, remediates and sanitizes with professional equipment.' },
  { step: '04', title: 'Prevent & Follow Up', text: 'We advise on moisture control and prevention so the problem is less likely to return.' },
]

export const moldTypes = [
  {
    number: '01',
    name: 'Alternaria',
    title: 'Alternaria Mold',
    text: 'Common in showers, bathtubs, window frames and under sinks where moisture collects. Velvety dark green or brown growth that spreads quickly and often points to ongoing water damage.',
    healthIssues: [
      'Worsening asthma and frequent asthma attacks, especially in children and elderly people',
      'Allergic rhinitis — sneezing, blocked nose, itchy eyes and throat irritation',
      'Skin rashes and hives on contact in sensitive individuals',
      'Upper respiratory infections when exposure continues in damp bathrooms or kitchens',
    ],
    service:
      'We isolate the affected wet areas, remove contaminated grout or sealants where needed, HEPA-vacuum spores and treat surfaces to reduce regrowth after leaks are fixed.',
    image: '/mold-01.jpg',
  },
  {
    number: '02',
    name: 'Chaetomium',
    title: 'Chaetomium Mold',
    text: 'Thrives in heavily water-damaged buildings — roofs, basements, burst pipes and soaked drywall. Cotton-like texture; starts white and turns gray, brown or black. A strong musty odour is a common warning sign.',
    healthIssues: [
      'Skin and nail fungal infections with prolonged contact',
      'Eye, nose and throat irritation from airborne spores',
      'Headaches, fatigue and nausea in poorly ventilated spaces',
      'Higher allergy risk for people with weakened immunity or chronic lung conditions',
    ],
    service:
      'We trace the moisture source, remove unsalvageable drywall or insulation, contain the zone and professionally remediate before structural drying and prevention advice.',
    image: '/mold-02.jpg',
  },
  {
    number: '03',
    name: 'Cladosporium',
    title: 'Cladosporium Mold',
    text: 'Often found on carpets, fabrics, upholstery, wooden floors and inside cabinets. Olive-green or brown suede-like patches that can survive in cooler indoor areas, not only tropical humidity.',
    healthIssues: [
      'Chronic cough, wheezing and shortness of breath',
      'Sinus congestion and recurring respiratory infections',
      'Asthma flare-ups and bronchial hypersensitivity',
      'Skin and eye irritation when spores settle on bedding or soft furnishings',
    ],
    service:
      'We deep-clean or treat carpets and upholstery, sanitize wood and cabinet interiors, and improve airflow so spores do not return to fabric surfaces.',
    image: '/mold-03.jpg',
  },
  {
    number: '04',
    name: 'Mucor',
    title: 'Mucor Mold',
    text: 'White or gray mold in thick patches near leaky windows, doors and AC drip trays where condensation builds. Grows fast when humidity stays above normal for several days.',
    healthIssues: [
      'Flu-like symptoms — fever, body aches, fatigue and chills',
      'Asthma attacks and severe breathing difficulty in sensitive people',
      'Facial swelling or sinus pain with heavy indoor exposure',
      'Serious invasive infections are rare but more likely in immunocompromised individuals — urgent remediation is advised',
    ],
    service:
      'We contain fast-spreading patches, remove contaminated materials, dry the structure and treat condensation points around windows, doors and HVAC lines.',
    image: '/mold-04.jpg',
  },
  {
    number: '05',
    name: 'Stachybotrys',
    title: 'Stachybotrys (Black Mold)',
    text: 'Often called “black mold.” Slimy black or dark green growth on cellulose-rich materials — drywall, ceiling tiles and cardboard — after long-term leaks or flooding that was not dried properly.',
    healthIssues: [
      'Persistent cough, chest tightness and difficulty breathing',
      'Headaches, dizziness and trouble concentrating (sometimes described as “brain fog”)',
      'Burning eyes, sore throat and skin irritation',
      'Strong reactions in infants, elderly residents and anyone with asthma, COPD or immune disorders — professional removal is strongly recommended',
    ],
    service:
      'Full containment, safe removal of affected drywall and porous items, antimicrobial treatment and moisture repair — our specialist black mold remediation protocol.',
    image: '/mold-01.jpg',
  },
  {
    number: '06',
    name: 'Aspergillus',
    title: 'Aspergillus Mold',
    text: 'Very common indoors on dust, insulation, AC ducts and damp walls. Colours range from green and yellow to white or grey. Often linked to poor filtration or hidden duct moisture.',
    healthIssues: [
      'Allergic bronchopulmonary symptoms — wheezing, coughing and mucus production',
      'Sinusitis and ear pressure from inhaling spores over time',
      'Skin and lung irritation in people with existing allergies',
      'In rare cases, invasive aspergillosis in severely immunocompromised patients — early duct and wall treatment reduces risk',
    ],
    service:
      'Duct and HVAC assessment, HEPA filtration during work, remediation of colonized surfaces and guidance on filters and humidity control.',
    image: '/mold-02.jpg',
  },
  {
    number: '07',
    name: 'Penicillium',
    title: 'Penicillium Mold',
    text: 'Blue, green or white fuzzy growth on food, wallpaper, mattresses and water-damaged mattresses or storage boxes. Spreads easily through the air in cluttered or poorly ventilated rooms.',
    healthIssues: [
      'Hay fever–type symptoms — sneezing, itchy eyes and nasal congestion',
      'Chronic sinus inflammation and post-nasal drip',
      'Asthma development or worsening in long-term exposure settings',
      'Some species produce mycotoxins that can irritate lungs and immune response when concentrations are high indoors',
    ],
    service:
      'Removal of contaminated porous items, surface treatment, dehumidification and storage-area organization to limit spore spread.',
    image: '/mold-03.jpg',
  },
  {
    number: '08',
    name: 'Fusarium',
    title: 'Fusarium Mold',
    text: 'Pink, white or red patches on wet carpet, plant soil tracked indoors, humidifiers and flooded flooring. Often appears after appliance leaks or indoor plant over-watering near walls.',
    healthIssues: [
      'Eye infections (keratitis) and skin lesions with direct contact in vulnerable people',
      'Respiratory irritation, sore throat and allergic lung inflammation',
      'Onychomycosis (nail fungus) linked to damp floor contact',
      'Increased risk of systemic infection only in severely immunosuppressed individuals — still requires prompt cleanup',
    ],
    service:
      'Flooring and carpet remediation, drying subfloors, treating wall bases and fixing appliance or planter-related moisture sources.',
    image: '/mold-04.jpg',
  },
  {
    number: '09',
    name: 'Aureobasidium',
    title: 'Aureobasidium Mold',
    text: 'Dark brown or black spots behind wallpaper, on painted window frames, wooden skirting and damp painted walls. Common when exterior paint fails or window seals leak silently.',
    healthIssues: [
      'Skin rash and dermatitis — often on hands and arms when scrubbing visible spots without protection',
      'Eye and throat irritation from disturbed spores during DIY cleaning',
      'Aggravation of asthma and seasonal allergies',
      'Recurrent symptoms if wallpaper or paint layers are not properly treated and the wall stays damp',
    ],
    service:
      'Careful removal of affected wallpaper or coatings, wall drying, antimicrobial treatment and resealing after moisture ingress is stopped.',
    image: '/mold-01.jpg',
  },
  {
    number: '10',
    name: 'Trichoderma',
    title: 'Trichoderma Mold',
    text: 'White or green woolly mold on wet wood, subfloor joists, cabinetry and wallpaper glue. Frequently follows slow leaks in kitchens, bathrooms and service ducts.',
    healthIssues: [
      'Persistent cough and lung irritation from high spore counts in enclosed crawl spaces',
      'Sinus and allergy symptoms in occupants above affected floors',
      'Some strains release strong odours and enzymes that damage wood, weakening floors and frames over time',
      'Workers or residents with mold sensitivity may experience fatigue and headaches until remediation is complete',
    ],
    service:
      'Structural wood assessment, remediation in crawl spaces and cabinets, wood treatment and long-term moisture monitoring recommendations.',
    image: '/mold-02.jpg',
  },
]

export const faqs = [
  {
    q: 'What types of cleaning services do you offer?',
    a: 'We offer home cleaning, office cleaning, deep cleaning, sofa & carpet cleaning, glass & window cleaning, sanitization, general mold remediation, and targeted treatment for black mold (Stachybotrys), Aspergillus, Penicillium, Fusarium, Aureobasidium and Trichoderma.',
  },
  {
    q: 'Are your cleaning professionals trained?',
    a: 'Yes. Our technicians are trained, verified and experienced in both routine cleaning and mold remediation. We follow containment and safety protocols on every job.',
  },
  {
    q: 'Do you use eco-friendly cleaning products?',
    a: 'Yes. We use safe, eco-friendly products that are effective on dirt, allergens and mold while remaining suitable for homes with children and pets.',
  },
  {
    q: 'How can I book a cleaning service?',
    a: 'Call +91 7996688885, email service@teamcleaningexperts.in, or send a message through our Contact page. Bookings are open 24 x 7.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We currently serve Bangalore, Mumbai, New Delhi, Noida and Gurugram. Our main office is at 203, 2nd floor, near MSIL, Panathur Post, Bangalore, Karnataka 560087.',
  },
  {
    q: 'Can I get a customized cleaning plan?',
    a: 'Absolutely. We tailor packages to your space, frequency and problem areas — from a one-time deep clean to recurring office service or a full mold remediation plan.',
  },
  {
    q: 'Do you provide one-time cleaning services?',
    a: 'Yes. One-time, periodic and emergency services are all available, including urgent mold clean-up.',
  },
  {
    q: 'How do I identify black mold?',
    a: 'Black mold is often the first thing homeowners think of when they see growth on drywall or inside air ducts. If anyone at home has allergic reactions or breathing problems, the mold could be toxic and you should call remediation experts. Mature growth looks black; earlier stages are closer to dark brown or green and can resemble dirt.',
  },
  {
    q: 'How much does professional mold remediation cost?',
    a: 'Cost depends on the size of the area, how easy the mold is to reach (crawl spaces or roofs cost more than a living-room wall) and how severe the damage is. If drywall needs to be removed, restoration costs rise. The best way to get a figure is a free inspection.',
  },
  {
    q: 'Can mold come back after the remediation process?',
    a: 'Professional work always starts by tracking down the moisture source. If that cause is removed or repaired, the issue should not return. Surface cleaning alone is not enough. Even after successful remediation, mold can return if moisture levels rise again.',
  },
  {
    q: 'Is it safe to live in a house with mold damage?',
    a: 'Mold exposure would have to be extreme and prolonged to do serious damage to a healthy adult, but it should still be removed as soon as possible. If you are not reacting, keep treating visible areas and proceed with professional removal. If air quality becomes unpleasant, step away from the space until remediation is complete.',
  },
  {
    q: 'What is the difference between mold removal and mold remediation?',
    a: 'Remediation restores mold to a naturally balanced level and addresses the moisture source. Removal aims to physically take away as many spores as possible. No one can eradicate mold completely. Remediation is the true goal of professional work.',
  },
  {
    q: 'Is mold remediation really worth it?',
    a: 'Where health is concerned, any process that reduces risk is worth it. Mold in a family home or office can be dangerous. After we remove mold and its cause, the chance of recurrence is much lower than with simple clean-up and containment.',
  },
  {
    q: 'How do you ensure customer satisfaction?',
    a: 'Clear inspection, honest quotes, trained staff, safe products and follow-up prevention advice. We have served 2,476+ happy customers and handle 1,120+ emergency calls every month.',
  },
]

export const images = {
  hero: '/images/hero.jpg',
  heroAlt: '/images/team.jpg',
  team: '/images/team.jpg',
  aboutStory: '/images/about.jpg',
  supplies: '/images/about.jpg',
  cta: '/images/cta.jpg',
  growth: '/images/banner.jpg',
  banner: '/images/banner.jpg',
  contactBanner: '/images/team.jpg',
  faqBanner: '/images/deep.jpg',
}
