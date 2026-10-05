// Country pillar data. Each entry powers one page: /rent-a-car/[country].
// Targets "renting a car in [country]" (head term). Requirement sub-topics
// (age, licence, debit card, IDP) have ~0 standalone volume, so they live as
// sections inside the pillar, not as separate pages.
//
// `status: "ready"` = fact-checked and indexable. Anything else is built but
// noindex and left out of the sitemap. Keep every fact sourced: rules differ
// per rental company and change, so word them as "usually" and cite the source.
//
// Row shape for every list below: { k: label, v: text }.

export const COUNTRIES = [
  {
    slug: "iceland",
    name: "Iceland",
    // Draft until a final human fact-check. The KEF airport page now exists.
    status: "draft",
    verified: "2026-10-04",
    metaTitle: "Renting a Car in Iceland: 2026 Rules & Insurance Guide",
    metaDescription:
      "What you need to rent a car in Iceland: age, licence, card, insurance (CDW, gravel, ash), F-road rules and tolls, plus how to compare live prices.",
    h1: "Renting a car in Iceland: what you need to know",
    lead:
      "Age and licence rules, which insurance matters, when you need a 4x4, and which tolls to pay. Then compare live prices for your dates.",
    // Home airport page slugs (lib/airports.js) that exist for this country.
    airports: ["keflavik"],
    esimSlug: "iceland",
    costsNote:
      "Figures are indicative 2026 ranges from rental companies and guides. They change by season, car and insurance bundle, so always check the total in your booking.",
    costs: [
      { k: "Economy car", v: "Guide to Iceland lists small economy cars at about $40 to 70 per day in summer, $50 to 80 in spring and autumn and below $40 in winter. Go Car Rental's 2026 guide gives $45 to $125 per day, from about $45 in winter to about $125 in August, and quotes a 7-day economy rental at $345 in January to March against $887 in August." },
      { k: "4x4", v: "Guide to Iceland gives about $90 to 160 per day for a summer 4x4 SUV, and Go Car Rental gives $85 to $335 across its 4x4 models. Large models cost far more in peak season." },
      { k: "Fuel", v: "On 4 October 2026, price data from gasvaktin.is (shown by Map of Iceland) put 95-octane petrol at about 242 to 285 ISK per litre and diesel at about 290 to 329 ISK. Diesel is roughly 40 to 47 ISK per litre dearer than petrol at the same station. Fuel is not included in the rental price." },
      { k: "Road tax", v: "Since 1 January 2026 the legal road charge is 6.95 ISK per km, and rental companies bill it differently. Blue Car Rental charges a flat 1,550 ISK per rental day as a line item at booking, while Hoeldur (Hertz Iceland) charges 8.81 ISK per km including its admin share. Check whether the quoted price already includes it." },
      { k: "Common extras", v: "Blue Car Rental's blog gives typical market rates of EUR 5 to 15 per day for an additional driver, EUR 10 to 30 for a young driver, EUR 10 to 15 for GPS and EUR 5 to 8 for a child seat. Some companies charge EUR 50 to 100 for a muddy car, and Blue's own cleaning fee starts at ISK 45,000. Its Sand and Ash Protection is 1,850 ISK per day." },
      { k: "Usually not in the headline price", v: "Fuel, optional protection, extras, tolls and in some cases the road tax. Blue Car Rental's terms list an admin fee of ISK 4,500 for handling a fine on your behalf. Mileage is normally unlimited: Go Car Rental says it is included in all its prices." },
    ],
    booking: [
      { k: "Seasons and prices", v: "Go Car Rental treats January to March and October to November as low season, April and May as shoulder, July and August as peak and December as a Christmas spike. Guide to Iceland says a car costs about 65% more in peak summer than in winter." },
      { k: "How far ahead to book", v: "Guide to Iceland recommends booking two to three months ahead for summer, and Go Car Rental advises booking as early as you can, since summer 4x4s and SUVs sell out months ahead. Automatics and 4x4s sell out first. Cars Iceland suggests three to six months ahead for automatics." },
      { k: "Manual or automatic", v: "Guide to Iceland says manuals are often slightly cheaper. Go Car Rental's Suzuki Jimny example shows the automatic about 59% dearer than the manual, and automatics are the category that runs short in summer." },
      { k: "Winter driving", v: "Icelandic winter tyre rules apply to rental cars. Hoeldur says its cars carry season-appropriate tyres at no extra cost and recommends a 4x4 from October to April. Blue Car Rental gives about 4 to 5 hours of daylight in December, and says Highland F-roads close for winter. Check road.is, vedur.is and safetravel.is daily." },
    ],
    checklist: [
      { k: "Photos and written damage", v: "Review the rental company's condition report before signing and have any extra damage added to it. Photograph every panel, the wheels, the interior and the mileage, and inspect the windscreen from both sides for chips." },
      { k: "Fuel type", v: "Confirm whether the car takes petrol or diesel. Blue Car Rental says green nozzles and pumps marked 95 okt are petrol and black pumps marked Diesel are diesel. Wrong-fuel damage is excluded by Blue Car's terms and by other companies' terms." },
      { k: "Insurance before you start", v: "Blue Car Rental says insurance can be added only before the rental starts, so decide on gravel, sand and ash protection and the liability waiver at booking or at the desk. Excesses differ by company and package, so ask for the figure." },
      { k: "If the car is damaged", v: "Cars Iceland says to photograph everything, tell the rental company immediately and call 112 if anyone is hurt. Delay in reporting can void your insurance." },
      { k: "Tolls", v: "Pay the Vaðlaheiðargöng toll online at veggjald.is (or the Veggjald app) within 24 hours before or after driving through, and the Hornafjarðarfljót bridge toll at spolur.is. If you miss the window the charge goes to the rental company, which bills your card plus an admin fee." },
      { k: "Return", v: "Return with the same fuel level as at pickup and keep the receipt. Blue Car Rental charges for missing fuel and for an excessively dirty car, and its terms set a late-return fine of ISK 10,000 plus a full extra rental day. Ask about after-hours key-box returns and any fee, and photograph the car, fuel gauge and mileage again at drop-off." },
    ],
    mistakes: [
      { k: "Skipping gravel and sand and ash protection", v: "Standard packages usually exclude this damage unless you buy the protection, and Blue Car Rental's blog says sand damage can exceed EUR 2,000. Blue Car can only add the cover before the rental starts." },
      { k: "Wrong fuel", v: "Blue Car Rental's terms and other companies' terms say wrong-fuel damage is not covered by any insurance and the renter pays all costs. Check the label at the pump and on the fuel flap." },
      { k: "Opening a door in the wind", v: "Blue Car Rental says wind blowing a door open is covered only with its Liability Waiver. Hold the door with both hands when you park in open spots." },
      { k: "Missing a toll deadline", v: "The charge passes to the rental company, which bills your card plus an admin fee. Go Car Rental says the fee can easily exceed the toll, and Blue Car Rental's terms list an admin fee of ISK 4,500 for fines." },
      { k: "Driving off-road or into rivers", v: "Blue Car Rental's insurance page excludes damage from driving where it is prohibited, and underside and river-water damage are covered only with its Liability Waiver." },
      { k: "Booking late or on price alone", v: "All Things Iceland lists late booking, a car too small for the luggage and choosing the cheapest company as common mistakes. Summer automatics and 4x4s sell out months ahead." },
    ],
    faqExtra: [
      {
        q: "How much does it cost to rent a car in Iceland?",
        a: "Indicative 2026 rates are about $40 to 70 per day for a small economy car in summer and below $40 to 50 in winter, with August reaching about $125. A summer 4x4 is roughly $90 to 160 per day. On top of that, budget for fuel (about 242 to 285 ISK per litre for petrol and 290 to 329 ISK for diesel in early October 2026), the 2026 road tax, optional protection and extras. Mileage is normally unlimited.",
      },
      {
        q: "When should I book a rental car for Iceland?",
        a: "Guide to Iceland recommends booking two to three months ahead for summer, and Go Car Rental advises booking as early as you can, since summer 4x4s and SUVs sell out months ahead. Automatics and 4x4s sell out first. Winter and shoulder months are cheaper and easier, but check daylight hours and road closures on road.is.",
      },
    ],
    sourcesExtra: [
      { label: "Blue Car Rental: Iceland car hire costs", url: "https://www.bluecarrental.is/blog/prices-in-iceland-car-hire-costs-and-what-to-expect/" },
      { label: "Blue Car Rental: hidden costs", url: "https://www.bluecarrental.is/blog/hidden-costs-of-renting-a-car-in-iceland-how-to-avoid-them-with-blue-car-rental/" },
      { label: "Blue Car Rental: terms and conditions", url: "https://www.bluecarrental.is/useful-information/terms/terms-and-conditions/" },
      { label: "Blue Car Rental: insurance", url: "https://www.bluecarrental.is/useful-information/insurance/insurances/" },
      { label: "Blue Car Rental: Iceland road tax 2026", url: "https://www.bluecarrental.is/blog/iceland-road-tax-2026-what-blue-car-rental-customers-should-know/" },
      { label: "Go Car Rental: price guide 2026", url: "https://www.gocarrental.is/driving/rental-cars/car-rental-prices-iceland/" },
      { label: "Go Car Rental: tunnel toll guide", url: "https://www.gocarrental.is/driving/driving-tips/iceland-tunnel-toll/" },
      { label: "Map of Iceland: fuel price index", url: "https://mapoficeland.is/guides/iceland-fuel-price-index/" },
      { label: "Guide to Iceland: car rental costs", url: "https://guidetoiceland.is/travel-info/how-much-does-it-cost-to-rent-a-car-in-iceland" },
      { label: "Cars Iceland: rental insurance guide", url: "https://www.carsiceland.com/blog/iceland-car-rental-insurance-guide" },
      { label: "Cars Iceland: what happens if you crash a rental car", url: "https://www.carsiceland.com/blog/what-happens-if-you-crash-a-rental-car" },
      { label: "Holdur Car Rental: tolls and tunnels in Iceland", url: "https://www.holdurcarrental.is/driving-in-iceland/tolls-and-tunnels-in-iceland" },
      { label: "Spolur: Hornafjardarfljot bridge toll", url: "https://www.spolur.is/en" },
      { label: "Road and Coastal Administration: opening of mountain roads", url: "https://www.vegagerdin.is/en/the-transportation-system/the-road-system/roads/opening-of-mountain-roads" },
      { label: "Go Car Rental: FAQ", url: "https://www.gocarrental.is/faq/" },
    ],
    requirements: [
      { k: "Minimum age", v: "Usually 20 for standard cars and 23 to 25 for 4x4s and larger vehicles. Limits and young-driver surcharges differ by company." },
      { k: "Driving licence", v: "Held for at least 12 months at the time of rental. A licence issued just before your trip is not accepted, even if you meet the age limit." },
      { k: "International permit (IDP)", v: "Not needed if your licence is in the Latin alphabet, which covers the US, Canada, the UK, Australia and most of Europe. Needed if it is not." },
      { k: "Payment card", v: "A physical card in the main driver's name, usually a credit card. Some companies accept debit cards, sometimes only with a certain insurance package. Apple Pay, Google Pay, e-wallets and virtual cards are not accepted." },
      { k: "Deposit", v: "Most companies place an authorisation hold on your card instead of taking a cash deposit. The amount depends on the company and the car." },
    ],
    insurance: [
      { k: "CDW (collision damage waiver)", v: "Caps what you pay after a collision or roll-over at a fixed excess. Included in almost every rate. On paved roads it covers the basics." },
      { k: "SCDW (super CDW)", v: "Lowers that excess further. It has the same exclusions as CDW, so gravel, sand, ash and tyre damage usually stay uncovered." },
      { k: "Gravel protection (GP)", v: "Covers chips and cracks to the windscreen, headlights and front paint from flying gravel. Included in some rates and a paid extra at others, so check." },
      { k: "Sand and ash protection (SAAP)", v: "Covers paint, glass and engine damage from sandstorms and volcanic ash. An optional add-on." },
      { k: "Usually not covered", v: "Tyres, undercarriage and windscreen damage are typically excluded from the standard packages. Read the exclusions before you pick a rate." },
    ],
    insuranceTip:
      "Compare the all-in price with the extras you need, not the headline rate. A cheap rate plus add-ons can cost more than a bundled one.",
    roads: [
      { k: "Paved roads", v: "Most visitors stay on paved roads such as the Ring Road, where a regular 2WD car is fine." },
      { k: "F-roads need a 4x4", v: "F-roads are highland mountain tracks whose number starts with F. By law they need a 4x4. Driving one in a 2WD car is illegal and voids your insurance, so you are personally liable for any damage." },
      { k: "When F-roads open", v: "Opening depends on snow and is set route by route by the Icelandic Road and Coastal Administration. On average the first routes open in early June and the last in early July, and most close between late September and October. Check road.is before you go." },
      { k: "River crossings", v: "Some F-roads, such as F26, involve river crossings and have no services along the route. Check your rental company's terms before you attempt one." },
      { k: "Gravel roads", v: "Many scenic roads are gravel with an 80 km/h limit. 2WD cars are allowed on gravel roads that do not start with F, which is where gravel protection earns its cost." },
    ],
    rules: [
      { k: "Side of the road", v: "Right." },
      { k: "Speed limits", v: "90 km/h on paved roads, 80 km/h on gravel, 50 km/h or lower in towns. Speed cameras are common and fines are charged to your card through the rental company." },
      { k: "Headlights", v: "On at all times, even in bright summer months." },
      { k: "Off-road driving", v: "Illegal everywhere in Iceland and fined heavily." },
      { k: "Tolls", v: "Most roads are toll-free. Two tolls apply: the Vaðlaheiðargöng tunnel in the north, which you pay online (veggjald.is or the Veggjald app) in a 48-hour window from 24 hours before to 24 hours after you drive through, and, since 1 September 2026, the Hornafjarðarfljót bridge on the Ring Road in the south-east (ISK 1,500 per crossing, no booths, pay at spolur.is)." },
    ],
    pickup: [
      { k: "Keflavik Airport (KEF)", v: "Several companies have desks in the arrivals area. Many others run a free shuttle from outside the terminal to a rental center a few minutes away, so allow extra time after landing." },
      { k: "Off-airport rentals", v: "Often cheaper and with more choice, but you take a short free shuttle, usually about 3 to 10 minutes. Check the shuttle hours against your flight time." },
    ],
    faq: [
      {
        q: "Do I need an international driving permit for Iceland?",
        a: "Not if your licence is valid and printed in the Latin alphabet, which covers licences from the US, Canada, the UK, Australia and most of Europe. If your licence uses another alphabet, you also need an IDP.",
      },
      {
        q: "What is the minimum age to rent a car in Iceland?",
        a: "Usually 20 for standard cars and 23 to 25 for 4x4s and larger vehicles, and you must have held your licence for at least a year. The exact limits depend on the company.",
      },
      {
        q: "Can I drive on F-roads with a normal rental car?",
        a: "No. F-roads legally require a 4x4. Driving one in a 2WD car is illegal and voids your insurance, so you pay for any damage yourself.",
      },
      {
        q: "Which car insurance do I need in Iceland?",
        a: "CDW is the base cover. Gravel protection is worth having because many scenic roads are gravel, and sand and ash protection is worth considering for windy or volcanic areas. Standard packages usually exclude tyres, undercarriage and windscreen damage, so read the exclusions.",
      },
      {
        q: "Are there toll roads in Iceland?",
        a: "Two: the Vaðlaheiðargöng tunnel in the north (pay online within a 48-hour window around your drive) and, since 1 September 2026, the Hornafjarðarfljót bridge on the Ring Road in the south-east (ISK 1,500 per crossing, pay at spolur.is). Everything else is toll-free.",
      },
    ],
    sources: [
      { label: "Hertz Iceland: rental requirements", url: "https://www.hertz.is/rental-requirements/" },
      { label: "Northbound: rental car insurance in Iceland", url: "https://www.northbound.is/blog/220/a-quick-guide-to-rental-car-insurance-in-iceland" },
      { label: "Go Car Rental: what are F-roads", url: "https://www.gocarrental.is/driving/4x4/what-are-f-roads-in-iceland/" },
      { label: "Guide to Iceland: driving in Iceland", url: "https://guidetoiceland.is/travel-info/driving-in-iceland" },
      { label: "Blue Car Rental: road tolls", url: "https://www.bluecarrental.is/useful-information/road-tolls/" },
      { label: "Saga Car Rental: car hire at Keflavik Airport", url: "https://sagacarrental.is/travel-blog/driving-in-iceland/car-hire-keflavik-airport-pickup-guide" },
    ],
  },
  {
    slug: "portugal",
    name: "Portugal",
    status: "draft",
    verified: "2026-10-04",
    metaTitle: "Renting a Car in Portugal: Rules, Tolls and Insurance",
    metaDescription:
      "What to know before renting a car in Portugal: age and licence rules, deposits, insurance excess, Via Verde tolls, speed limits and Faro Airport pickup.",
    h1: "Renting a car in Portugal: what you need to know",
    lead:
      "Portugal is easy to drive, but the electronic toll system and the insurance excess catch many renters out. Check these points before you book and again at the rental desk.",
    airports: ["faro", "lisbon", "porto"],
    esimSlug: "portugal",
    costsNote:
      "Figures are indicative 2026 ranges. Price trackers and rental companies measure different things (cheapest listings versus quoted airport rates, with or without insurance), so always check the total in your booking.",
    costs: [
      { k: "Daily rate, economy car", v: "Auto-jardim.com lists economy cars at Lisbon Airport at EUR 18 to 28 per day off-peak (November to February), EUR 30 to 50 in shoulder months (March to June, September and October) and EUR 55 to 85 in peak (July and August). Price trackers such as Discover Cars show lower averages, about EUR 9 in November and EUR 28.60 in August, because they measure cheapest listings." },
      { k: "Fuel", v: "Caetano, citing DGEG, gives a national weekly average for 28 September to 4 October 2026 of EUR 2.099 per litre for petrol and EUR 2.186 for diesel, including a temporary tax discount. Prices move weekly." },
      { k: "Motorway tolls", v: "Brisa's 2026 class 1 (car) tariff, as reported by Eco and Sapo, is EUR 25.05 for Lisbon to Porto on the A1 and EUR 23.80 for Lisbon to the Algarve on the A2. Other guides quote different figures depending on routing." },
      { k: "Extras", v: "Julie Dawn Fox gives about EUR 7 to 10 per day for an extra driver, EUR 6 to 10 per day for drivers under 25 and up to EUR 10 per day per child seat. Airport and train-station pickups often carry a location fee." },
      { k: "Driving to Spain", v: "Cross-border fees vary widely by company and car class. Guides quote anything from nothing to about EUR 150, and Julie Dawn Fox says EUR 60 to 150. Many companies allow Spain only for certain car categories, so confirm before you book." },
      { k: "Usually not in the headline price", v: "The excess waiver at the counter (auto-jardim.com lists super CDW at about EUR 15 to 30 per day), the toll device fee and tolls, the security deposit (auto-jardim.com says EUR 1,200 to 2,000), young or extra driver fees, airport surcharges and fuel. Localrent says the minimum chargeable period is 24 hours, so a short rental is billed as a full day." },
    ],
    booking: [
      { k: "Seasons and prices", v: "Using auto-jardim.com's Lisbon ranges, peak (July and August) costs roughly two to three times the off-peak rate. Discover Cars names August as the most expensive month and November as the cheapest." },
      { k: "How far ahead to book", v: "Book early for June to August, when stock gets limited and prices rise. Julie Dawn Fox gives an example of a small car going from about EUR 50 for a few days to double that within a few weeks." },
      { k: "Automatics", v: "Off Path Portugal and Road Reel both say automatic supply is limited, tightest in peak season, so book early and filter for automatic." },
      { k: "Where to pick up", v: "One guide says Lisbon Airport is usually the cheapest pickup and downtown Lisbon and Faro cost more, but this varies by dates, so compare pickup points. Auto-jardim.com says refuelling near the airport is 10 to 15% dearer than on the motorway." },
    ],
    checklist: [
      { k: "Photograph the car", v: "Take photos or a video of the whole car before and after the rental, including the wheels, windscreen, bumpers and interior, to counter damage claims." },
      { k: "Confirm the toll device", v: "Ask the counter staff to confirm the Via Verde device is activated and mounted on the windscreen, and ask the daily fee, the cap and when tolls are billed. Tolls are billed after the rental." },
      { k: "Petrol or diesel", v: "Gasolina is petrol and gasoleo is diesel. Pumps often use a green handle for petrol and black for diesel, but check the fuel flap and your contract rather than relying on colour. Wrong-fuel damage is typically excluded from rental insurance." },
      { k: "Fuel policy", v: "Choose full-to-full and refuel just before return. Auto-jardim.com says prepaid fuel costs 30 to 50% above market rates, and Localrent says you pay the difference at the company's rates if the level is lower than at pickup." },
      { k: "Beaches and viewpoints", v: "The Government of Canada's travel advice says vehicle break-ins are frequent and that thieves target cars with rental stickers and foreign plates. Keep doors locked, take valuables with you and park in secure areas at night." },
      { k: "Return and after hours", v: "Ask where to leave the keys and how the check-in is documented, and photograph the car and fuel gauge at drop-off. Out-of-hours pickups or returns can add a fee." },
    ],
    mistakes: [
      { k: "Mixing up diesel and petrol", v: "Wrong fuel can wreck the engine and is typically excluded from rental insurance, even full cover, so you may pay for the repair." },
      { k: "Taking the car to Spain without permission", v: "Rental companies expect you to tell them at booking and at pickup. Without written permission the insurance is likely void, and a cross-border fee usually applies. Get the permission on the contract." },
      { k: "Ignoring tolls and fees", v: "Unpaid tolls come back as a fine plus an administrative fee from the rental company. The toll device fee and tolls are billed after return, sometimes weeks later, so keep your card valid." },
      { k: "Choosing prepaid or full-to-empty fuel", v: "You give the company free fuel, and auto-jardim.com says prepaid fuel costs 30 to 50% above market rates. Choose full-to-full." },
      { k: "Skipping the pickup inspection", v: "Without time-stamped photos you may be billed for existing damage, which Julie Dawn Fox says leads to claims against an excess of about EUR 1,000." },
      { k: "Leaving valuables in the car", v: "Break-ins are frequent and rental cars are targeted. Excess waivers often do not cover personal belongings, so take valuables with you." },
    ],
    faqExtra: [
      {
        q: "How much does it cost to rent a car in Portugal?",
        a: "Indicatively, an economy car costs EUR 18 to 28 per day off-peak (November to February), EUR 30 to 50 in shoulder months and EUR 55 to 85 in July and August, according to auto-jardim.com for Lisbon Airport. Other price trackers show lower averages. Budget extra for the toll device fee and tolls (about EUR 24 to 25 each way for Lisbon to the Algarve or to Porto), fuel (about EUR 2.10 to 2.19 per litre in early October 2026) and any insurance upgrade.",
      },
      {
        q: "Can I take a Portuguese rental car to Spain?",
        a: "Usually yes, but you must tell the rental company at booking and at pickup and get permission in writing, or the insurance may be void. A cross-border fee often applies and it varies by company and car category, with guides quoting anything from nothing to about EUR 150.",
      },
    ],
    sourcesExtra: [
      { label: "Caetano: weekly fuel prices, citing DGEG", url: "https://caetano.pt/blog/preco-dos-combustiveis-esta-semana/" },
      { label: "Eco/Sapo: Brisa 2026 toll increases (A1, A2)", url: "https://eco.sapo.pt/2025/12/31/portagens-sobem-45-centimos-entre-lisboa-e-porto-e-50-centimos-entre-lisboa-e-algarve/" },
      { label: "Observador: former SCUT roads, including the A22, toll-free from 1 January 2025", url: "https://observador.pt/2025/01/01/antigas-scut-sem-cobranca-de-portagens-a-partir-desta-quarta-feira/" },
      { label: "Auto-jardim.com: Lisbon car rental prices by season", url: "https://auto-jardim.com/car-rental-in-lisbon/" },
      { label: "Julie Dawn Fox: renting a car in Portugal", url: "https://juliedawnfox.com/rent-car-portugal/" },
      { label: "Portugal Road Trips: Via Verde in rental cars", url: "https://portugalroadtrips.blog/2025/07/30/via-verde-in-rental-cars-everything-you-need-to-know-about-portugals-toll-system/" },
      { label: "Government of Canada: Portugal travel advice", url: "https://travel.gc.ca/destinations/portugal" },
      { label: "Localrent: terms of car rental in Portugal", url: "https://www.localrent.com/en/portugal/terms/" },
    ],
    requirements: [
      { k: "Minimum age", v: "Usually 21, though some companies set 18 and premium cars often need 25. Drivers under 25 usually pay a daily young-driver surcharge." },
      { k: "Driving licence", v: "A full, valid licence usually held for at least one year, plus a passport or ID card. EU and UK licences are accepted, and so are licences from the US and other non-EU countries for stays of up to six months." },
      { k: "International permit (IDP)", v: "Not needed for UK and EU drivers. For US and other non-EU drivers, a licence in English, French, Spanish or Portuguese is generally recognised for up to six months, so an IDP is usually recommended rather than required. A licence in a non-Roman alphabet needs an IDP or an official translation." },
      { k: "Payment card", v: "Most companies want a credit card in the main driver's name. Some accept debit cards with restrictions, so check the exact terms before you travel. Prepaid and digital cards are usually refused." },
      { k: "Deposit", v: "A hold on your card. Its size depends on the car category and the cover you choose, and declining the company's super cover usually means a larger hold." },
    ],
    insurance: [
      { k: "Basic cover and excess", v: "Third-party liability is compulsory and included. Collision damage waiver (CDW) and theft cover are usually included too, but with an excess that often runs from roughly 800 to 2,000 euros depending on the car and company." },
      { k: "Super cover and zero excess", v: "Super CDW at the desk usually reduces the excess to zero. It is usually the priciest way to remove the excess." },
      { k: "What is usually excluded", v: "Standard cover often excludes tyres, windscreen, undercarriage, interior and lost keys. Read the exclusions in your agreement, because super cover does not always remove them." },
      { k: "Credit-card or standalone cover", v: "Many credit cards include rental cover if you pay with that card, but terms vary. A separate excess policy bought before you travel is usually cheaper than the desk upsell, but you may have to pay the excess first and claim it back." },
      { k: "Portugal-specific", v: "Rental cars are fitted with an electronic toll device, so the toll service and its daily fee are part of almost every rental. Choose a full-to-full fuel policy and avoid prepaid fuel schemes." },
    ],
    insuranceTip:
      "Check what your credit card or standalone excess policy actually covers before you reach the desk, so you can decline the upsell with confidence.",
    roads: [
      { k: "Manual or automatic", v: "Manual cars are the default in Portugal. Automatics usually cost more and are in shorter supply, so book one early if you need it." },
      { k: "Car size", v: "A compact car is usually easier in historic town centres, where streets are narrow and parking spaces are small." },
      { k: "Algarve", v: "Driving is generally straightforward on the coast and the motorways, but expect traffic in busy periods. The A22 Via do Infante has been toll-free since 1 January 2025, while the A2 from Lisbon still charges tolls." },
      { k: "Lisbon and Porto", v: "A car is often unnecessary in the big cities because of traffic, one-way streets and expensive parking. Many guides suggest public transport in the centre." },
      { k: "Interior and Douro Valley", v: "Motorways are generally in good condition. Some interior routes are in poorer condition and rural roads can be slower than the map suggests, so allow extra time." },
    ],
    rules: [
      { k: "Side of the road", v: "Right. Seatbelts are compulsory for all occupants and a handheld phone is forbidden while driving. At roundabouts, vehicles already circulating have priority." },
      { k: "Speed limits", v: "50 km/h in built-up areas, 90 km/h outside them and 120 km/h on motorways, with expressways usually at 100 km/h. Posted signs override these, and many cities have 30 km/h zones." },
      { k: "How the tolls work", v: "Many Portuguese motorways have no booths. Gantries read your plate or a toll device and charge automatically, so you cannot pay by cash or card on the spot on those roads." },
      { k: "Tolls in a rental car", v: "Rental companies fit their cars with a Via Verde device and add the toll service to your rental. You usually pay the tolls used plus a daily fee of about EUR 2.2, capped at about EUR 22 per rental, charged to your card after the rental. Hertz lists EUR 2.21 and EUR 22.14." },
      { k: "If the device is missing", v: "On an electronic road the plate is recorded and the toll goes to the rental company, which then charges you, usually with an administration fee. Confirm at pickup that the device is active." },
      { k: "Alcohol limit", v: "0.5 g/l for most drivers, with a lower limit for professional and newly qualified drivers." },
    ],
    pickup: [
      { k: "Faro Airport (FAO)", v: "Large brands usually have desks in the arrivals hall. Smaller local suppliers use a shared desk at the P4 car park, about 250 metres from the terminal exit, and some suppliers use an off-airport depot with a shuttle. Your booking voucher shows which one applies." },
      { k: "Lisbon, Porto and off-airport", v: "Off-airport suppliers usually run a short shuttle. If you are only visiting Lisbon or Porto city centres, you may not need the car until you leave." },
    ],
    faq: [
      {
        q: "Do I need an International Driving Permit in Portugal?",
        a: "Not with an EU or UK licence. US and other non-EU licences in English, French, Spanish or Portuguese are generally recognised for up to six months, so an IDP is usually recommended rather than required. A licence in a non-Roman alphabet needs an IDP or an official translation.",
      },
      {
        q: "What is the minimum age to rent a car in Portugal?",
        a: "Usually 21, though some companies set 18 and premium cars often need 25. Drivers under 25 usually pay a daily young-driver surcharge, and you usually need to have held your licence for at least one year.",
      },
      {
        q: "How do I pay tolls in a Portuguese rental car?",
        a: "Your rental car should have a Via Verde device fitted. You are usually billed the tolls plus a daily fee of about EUR 2.2, capped per rental, and the charge arrives on your card after the rental. Check at pickup that the device is active.",
      },
      {
        q: "Can I rent a car in Portugal with a debit card?",
        a: "Some companies accept debit cards, but with restrictions. Most still prefer a credit card in the main driver's name for the deposit hold. Check the exact terms before you book.",
      },
      {
        q: "Which insurance do I need when renting a car in Portugal?",
        a: "Third-party liability and usually CDW are included, with an excess that often runs from roughly 800 to 2,000 euros. You can reduce it with the company's super cover, a credit card that covers rentals, or a separate excess policy. Check what each one excludes, such as tyres, windscreen and undercarriage.",
      },
    ],
    sources: [
      { label: "Hertz Portugal: mandatory Via Verde e-toll service", url: "https://www.hertz.pt/p/en/hertz-together/mandatory-e-toll-service-via-verde-for-renting-a-car" },
      { label: "Faro Airport: car hire", url: "https://en.aeroportodefaro.com/car-hire" },
      { label: "Europcar: everything you need to know about driving in Portugal", url: "https://www.europcar.com/editorial/tips-and-guides/guides/everything-you-need-to-know-about-driving-in-portugal" },
      { label: "RAC: driving in Portugal", url: "https://www.rac.co.uk/drive/travel/country/portugal/" },
      { label: "AutoLisboa: car rental insurance in Portugal explained", url: "https://autolisboa.com/portugal-car-rental-insurance-explained/" },
      { label: "Oporto Car Rental: driving tips for Portugal", url: "https://www.oportocarrental.com/en/driving-tips-portugal" },
    ],
  },
  {
    slug: "london",
    name: "London",
    status: "draft",
    verified: "2026-10-04",
    metaTitle: "Renting a Car in London: Rules, Charges and Tips",
    metaDescription:
      "Renting a car in London: licence and age rules, insurance, Congestion Charge, ULEZ, driving on the left and Heathrow pickup, based on official sources.",
    h1: "Renting a car in London: what you need to know",
    lead:
      "Many visitors do not need a car in central London, where the Tube, buses and trains cover most trips and driving brings daily charges. A rental makes more sense for day trips outside the city or for travel with luggage and children.",
    airports: ["london-heathrow"],
    esimSlug: "united-kingdom",
    costsNote:
      "Figures are indicative 2026 estimates from booking sites and rental companies, not a tariff. They change by season and company, so always check the total in your booking.",
    costs: [
      { k: "Daily rate", v: "KAYAK's London data gives an overall average of about £34 per day, with small cars around £22 and medium cars around £47. On KAYAK's London data January is the cheapest month (about £22 per day) and December the most expensive (about £38 per day)." },
      { k: "Fuel", v: "On 2 October 2026 the RAC reported UK average unleaded petrol at 174.71p per litre and diesel at 200.01p per litre, the first time diesel passed £2. UK pumps price fuel per litre, and prices have been rising since February 2026." },
      { k: "Parking", v: "Central London parking is expensive. Westminster Council says on-street parking is pay-to-park by zone and charged by the vehicle's CO2 band, and payment apps may add up to 30p per transaction." },
      { k: "Young and extra drivers", v: "Avis UK charges £40 per day for drivers under 25, capped at 10 days. Avis and Sixt list a daily fee for an additional driver (some rates include one free), shown in the booking quote, and a young extra driver also triggers the young-driver fee." },
      { k: "One-way, airport and what the headline price leaves out", v: "Avis says one-way fees are included in your quote and vary by route, and Hertz lists an intercity fee and a location service charge at airports and railway stations. Typically not in the headline: the optional damage waiver, a deposit (Enterprise Heathrow lists £200 to 1,000), refuelling charges and cross-border fees. Which? says pay-at-location can cost £30 to 50 more than pay-now." },
      { k: "Other road charges", v: "GOV.UK lists the Dartford Crossing at £3.50 for a car (£2.80 with a pre-pay account), charged 6am to 10pm every day, due by midnight the day after crossing. Hertz UK says the hirer must pay it, and hire companies add an admin fee if they pay for you. TfL also charges for the Blackwall and Silvertown tunnels, with no booths: pay online or by app by midnight on the third day after travel. Check TfL for current prices." },
    ],
    booking: [
      { k: "Seasons and prices", v: "KAYAK's London data shows December as the dearest month and January as the cheapest. It is a booking-site average rather than a rental tariff, so treat it as a guide." },
      { k: "How far ahead to book", v: "KAYAK advises booking around 7 days before the trip to get a below-average London price, based on its own data. MoneySavingExpert says booking early can save hundreds of pounds on some trips but that last-minute rentals are sometimes cheaper, and suggests free-cancellation bookings you can rebook if prices fall." },
      { k: "Automatic availability", v: "Enterprise UK says automatics are offered at all its branches but availability may be limited, and that they usually cost more than manuals. Filter by transmission when you pick the car class, and book early if you need one." },
      { k: "Taking the car to Europe or Ireland", v: "GOV.UK says a hired vehicle needs a VE103 certificate when taken abroad, and you must confirm the hire company permits it. Policies differ: Enterprise UK lists European Travel Coverage (credit card, 72 hours' notice, France and Ireland among the countries covered) and Avis UK allows Ireland only, with Continental Cover and 5 working days' notice. Check the current price with the company." },
    ],
    checklist: [
      { k: "Photograph all damage before leaving", v: "Which? advises inspecting the car inside and out, photographing every side and reporting anything not on the hire company's form before you drive off. It says 46% of people who paid damage charges told it the damage was already there at pickup. Photograph the car again at return." },
      { k: "Fuel type and policy", v: "Check whether the car takes petrol or diesel before the first fill-up, and prefer full-to-full: MoneySavingExpert and Which? both warn against full-to-empty. Enterprise charges a refuelling fee if you return the car with less fuel than at pickup, and Hertz's pre-paid fuel option gives no refund for unused fuel." },
      { k: "ULEZ compliance", v: "TfL's standards are Euro 4 for petrol and Euro 6 for diesel, and non-compliant cars pay the daily charge. Enter the registration into TfL's vehicle checker at the desk. Most modern rental cars comply, but check each car." },
      { k: "Know how and when you pay charges", v: "The hirer pays the Congestion Charge. TfL charges £18 if paid in advance or on the day, or £21 if paid by midnight on the third day after travel, and you get a penalty notice after that. Dartford is due by midnight the day after crossing. Set a phone reminder for each deadline." },
      { k: "Card, deposit and extras", v: "Enterprise Heathrow takes credit and debit cards, but debit cards at airports need a round-trip plane ticket. MoneySavingExpert says most companies want a credit card for the deposit. Add extra drivers at booking, not at the counter." },
      { k: "Return and after hours", v: "Hertz bills an extra day when a car comes back 30 minutes or more late. Enterprise Heathrow has an after-hours key box in the returns area, while Hertz requires you to arrange an after-hours return beforehand and says you stay responsible for the car until staff inspect it." },
    ],
    mistakes: [
      { k: "Missing the Congestion Charge deadline", v: "Paying on the third day costs £21 instead of £18, and missing midnight that day brings a penalty notice. Rental companies recover unpaid charges from you and often add an admin fee. Pay on the day or in advance." },
      { k: "Forgetting Dartford or the tunnel charges", v: "Dartford must be paid by midnight the day after you cross, and GOV.UK says the fine is £70, reduced to £35 if paid within 14 days and rising to £105 if unpaid. The Blackwall and Silvertown tunnels have no booths, so a missed third-day deadline brings a penalty notice." },
      { k: "Red routes, bus lanes and yellow boxes", v: "TfL says you must not enter a yellow box junction unless your exit is clear (you may wait in it only when turning right and blocked by oncoming traffic), and a car must not use a bus lane during the hours shown on the blue sign. The rental company passes the fine and its own admin fee to you." },
      { k: "Wrong fuel", v: "The RAC says the most serious damage happens after you turn the ignition on. If you realise before starting, do not put the key in and call breakdown cover. If you start the engine, switch it off at once and call for recovery. Check with your rental company whether misfuelling is covered." },
      { k: "Crossing to Europe without permission", v: "Taking a hired car abroad without permission breaks the contract and voids your insurance. Arrange the paperwork before pickup: Enterprise needs 72 hours' notice for its European cover and Avis needs 5 working days for Ireland." },
      { k: "Arriving with only a debit card, or returning late", v: "MoneySavingExpert says a debit or prepaid card often will not work for the deposit, and a return just 30 minutes late can cost an extra day at Hertz." },
    ],
    faqExtra: [
      {
        q: "How much does it cost to rent a car in London?",
        a: "As an indicative 2026 figure, KAYAK data averages about £34 per day for London, with small cars around £22, January cheapest and December dearest (about £38). Extras raise the total: a young-driver fee (Avis charges £40 per day under 25), an extra driver, airport or station location fees, the optional damage waiver, fuel (petrol 174.71p and diesel 200.01p per litre in early October 2026, per the RAC) and road charges such as the £18 Congestion Charge.",
      },
      {
        q: "Can I take a London rental car to France or Ireland?",
        a: "Only with the rental company's permission and a VE103 certificate, and policies differ. Enterprise UK offers European Travel Coverage that includes France and Ireland, with credit card and 72 hours' notice. Avis UK allows Ireland only, with 5 working days' notice. Going abroad without permission voids your insurance, so arrange it at booking.",
      },
    ],
    sourcesExtra: [
      { label: "GOV.UK: Dartford Crossing charges for cars", url: "https://www.gov.uk/pay-dartford-crossing-charge/charges" },
      { label: "TfL: Blackwall and Silvertown tunnels penalty charges", url: "https://tfl.gov.uk/modes/driving/silvertown-blackwall-tunnels-charge/penalty-charges-for-blackwall-and-silvertown-tunnels" },
      { label: "RAC: diesel tops £2 a litre (2 October 2026)", url: "https://media.rac.co.uk/diesel-tops-2-a-litre-for-first-time-ever" },
      { label: "Enterprise UK: European Travel Coverage", url: "https://www.enterprise.co.uk/en/car-hire/deals/europeantravel.html" },
      { label: "Avis UK: Continental Cover", url: "https://www.avis.co.uk/drive-avis/car-hire-services/continental-cover" },
      { label: "KAYAK: London car hire prices by month", url: "https://www.kayak.co.uk/London-Car-Hire.28501.cars.ksp" },
      { label: "Hertz UK: Dart Charge", url: "https://www.hertz.co.uk/rentacar/productservice/index.jsp?targetPage=UK_Dart_Charge.jsp" },
      { label: "Which?: car hire scams and damage checks", url: "https://www.which.co.uk/reviews/car-hire/article/car-hire-advice/car-hire-scams-auABy0O5rX7M" },
    ],
    requirements: [
      { k: "Minimum age", v: "Varies by company: Enterprise UK requires 25 for most cars, while other companies rent from 21 with a young-driver fee. Check your company's terms." },
      { k: "Driving licence", v: "GOV.UK says visitors with a non-UK driving licence can drive in the UK, and visitors from the EU/EEA do not need an international driving permit. Rental desks usually want a physical licence and photo ID." },
      { k: "International permit (IDP)", v: "Not required by UK law for EU/EEA visitors. Some companies ask for an IDP or a certified translation if your licence is not in the Latin alphabet, so check your rental company's terms." },
      { k: "Payment card", v: "Rules differ by company. Some accept major debit cards, many ask for a credit card, and premium cars and 4x4s usually need a credit card. The card usually has to be in the main driver's name." },
      { k: "Deposit or hold", v: "Companies usually place a security hold on your card on top of the rental price. The amount varies by company and car class, so check your booking terms." },
    ],
    insurance: [
      { k: "Third-party liability", v: "Included in UK rental rates because the law requires it. It covers injury and damage to other people and property, not damage to the rental car itself." },
      { k: "CDW and excess", v: "A collision damage waiver (CDW) usually limits what you pay for damage to the rental car to a fixed excess. Which? says excesses typically run from about £200 to £2,500. Without CDW you can be liable for the repair cost up to the full value of the car." },
      { k: "Super cover at the desk", v: "Super cover (Super CDW) reduces or removes that excess. It is usually the most expensive way to remove the excess." },
      { k: "What is usually excluded", v: "Super cover often excludes accessories such as GPS and child seats, interior damage, removable parts, broken keys and fuel contamination. Check the policy wording for tyres, glass and underbody damage." },
      { k: "Third-party excess insurance", v: "An alternative to desk cover: you pay the excess to the rental company if there is damage, then claim it back from your insurer. You usually have to pay first, and the desk may still hold a larger deposit if you decline its own cover." },
    ],
    insuranceTip:
      "Decide how you will cover the excess before you reach the desk, and check what your card or travel policy actually includes.",
    roads: [
      { k: "Automatic or manual", v: "Manual cars are usually the default in UK rental fleets, and automatics are fewer and cost more. If you only drive automatics, book one in advance and confirm the gearbox in your booking." },
      { k: "Size of car", v: "A small car is usually easier on narrow residential streets and in tight parking spaces. The exact model is often not guaranteed, so check the car class." },
      { k: "When you may not need a car", v: "Central London has a Congestion Charge, a ULEZ covering all boroughs and strict parking rules, so a car often adds cost rather than convenience. Many visitors rent only for the days they leave the city." },
      { k: "Check the emissions standard", v: "ULEZ applies to the car being driven, so the car you are given matters. Most modern rental fleets are compliant, but ask your rental company to confirm." },
    ],
    rules: [
      { k: "Side of the road", v: "Left. At roundabouts you give way to traffic already on the roundabout, which comes from your right." },
      { k: "Speed limits", v: "GOV.UK gives 30 mph in built-up areas, 60 mph on single carriageways and 70 mph on dual carriageways and motorways. Many London streets have lower limits, so follow the signs." },
      { k: "Congestion Charge", v: "TfL lists £18 per day if paid on the day or in advance, higher if paid late. It applies Monday to Friday 7am to 6pm and at weekends and bank holidays 12pm to 6pm, with no charge from Christmas Day to New Year's Day. The driver is usually responsible, so with a rental that means you. Check TfL for the current rate." },
      { k: "ULEZ", v: "TfL says the Ultra Low Emission Zone covers all London boroughs but not the M25 and runs 24 hours a day every day except Christmas Day. Non-compliant cars pay £12.50 a day. Check TfL for the current rate." },
      { k: "Parking, bus lanes and red routes", v: "Signs and road markings show what you can and cannot do on red routes and in bus lanes. A penalty charge notice is listed by TfL at £160, or £80 if paid within 14 days." },
      { k: "Penalty notices on a rental", v: "If a charge or fine is not paid, the notice usually goes to the rental company, which passes the cost to you, usually with an administration fee. Paying the Congestion Charge yourself on time avoids this." },
    ],
    pickup: [
      { k: "Heathrow Airport (LHR)", v: "Most rental companies run from sites just off the airport and send free shuttle buses from the terminals. The pickup stop differs by terminal and company, so follow your own rental company's instructions." },
      { k: "City centre versus airport", v: "Picking up at Heathrow means you drive away from the airport and avoid central London at first. A common approach is to take the train or Underground into the city and only collect a car when you leave London. If you collect from a location inside the Congestion Charge zone, you are responsible for the charge." },
    ],
    faq: [
      {
        q: "Do I need an International Driving Permit to rent a car in London?",
        a: "UK law does not require an IDP for EU/EEA visitors, and GOV.UK says visitors with a non-UK licence can drive in the UK. A rental company may still ask for an IDP or a certified translation if your licence is not in the Latin alphabet. Check your rental company's terms.",
      },
      {
        q: "What is the minimum age to rent a car in London?",
        a: "It depends on the company: Enterprise UK requires 25 for most cars, while others rent from 21 and charge a young-driver fee. Check your company's terms.",
      },
      {
        q: "Do I pay the Congestion Charge and ULEZ in a rental car?",
        a: "The Congestion Charge is usually the driver's responsibility, so you pay it if you drive in the zone during charging hours. ULEZ applies to non-compliant cars, and most modern rental fleets are compliant. Unpaid charges are usually passed to you with an admin fee.",
      },
      {
        q: "Can I rent a car in London with a debit card?",
        a: "Sometimes. Some companies accept major debit cards, but many ask for a credit card, and premium cars and 4x4s usually need one. Check the card rules in your booking before you travel.",
      },
      {
        q: "Is driving on the left hard?",
        a: "Many visitors find it manageable after a short time. Start with a quiet route, pick an automatic if you are not used to manuals, and avoid central London at first.",
      },
    ],
    sources: [
      { label: "TfL: Congestion Charge", url: "https://tfl.gov.uk/modes/driving/congestion-charge" },
      { label: "TfL: Ultra Low Emission Zone", url: "https://tfl.gov.uk/modes/driving/ultra-low-emission-zone" },
      { label: "TfL: Red routes", url: "https://tfl.gov.uk/modes/driving/red-routes" },
      { label: "GOV.UK: Visiting the UK as an EU, EEA or Swiss citizen", url: "https://www.gov.uk/guidance/visiting-the-uk-as-an-eu-eea-or-swiss-citizen" },
      { label: "GOV.UK: Speed limits", url: "https://www.gov.uk/speed-limits" },
      { label: "Enterprise UK: what is needed to hire a car", url: "https://www.enterprise.co.uk/en/car-hire-faqs/uk-renter-requirements/what-is-needed-to-hire-a-car.html" },
      { label: "Avis UK: under 25 car hire", url: "https://www.avis.co.uk/under-25-car-hire" },
      { label: "Hertz UK: insurance and waiver options", url: "https://www.hertz.co.uk/p/vehicle-guide/booking-your-vehicle-hire/insurance-waiver-options" },
    ],
  },
  {
    slug: "dubai",
    name: "Dubai",
    status: "draft",
    verified: "2026-10-04",
    metaTitle: "Renting a Car in Dubai: Licence, Insurance and Salik Tolls",
    metaDescription:
      "Renting a car in Dubai: minimum age, licence and IDP rules, deposit, insurance, Salik tolls, speed cameras and airport pickup, explained in plain terms.",
    h1: "Renting a car in Dubai: what you need to know",
    lead:
      "Dubai has modern highways and plenty of rental desks at the airport, plus a few local rules that catch visitors out: Salik tolls, automatic speed cameras and zero tolerance for alcohol. Most companies want a credit card in the driver's name.",
    airports: ["dubai"],
    esimSlug: "uae",
    costsNote:
      "Figures are indicative 2026 headline rates from rental companies and marketplaces. They change by season and company, so always check the total in your booking.",
    costs: [
      { k: "Daily rate, economy car", v: "Rental marketplace Rentop gives roughly AED 70 to 120 per day in low season (May to September) and AED 120 to 180 in high season (October to April), before VAT and extras. Insurance inclusion differs by company." },
      { k: "Daily rate, SUV", v: "Rentop quotes roughly AED 180 to 350 per day for SUVs in low season. Another source says high-season rates can be 1.5 to 2 times summer rates." },
      { k: "Fuel", v: "Gulf News reports the UAE Fuel Price Committee set Special 95 at AED 4.28 and diesel at AED 4.80 per litre for October 2026. Prices are reset monthly and are the same in all emirates. Some rental companies bill refuelling well above the pump price, so return the car full." },
      { k: "Salik", v: "According to dubai.ae, AED 6 at peak (Monday to Saturday, 6 to 10 am and 4 to 8 pm) and AED 4 off-peak and on Sundays, free from 1 to 6 am, plus VAT. Check salik.ae for the current tariff. Rental companies add a fee on top: Avis UAE lists the toll plus AED 2 per crossing and a small daily registration fee, while others quote a flat AED 5 to 6 per crossing." },
      { k: "Extras", v: "Avis UAE lists an additional driver at AED 28 per day, a young-driver fee of AED 10 per day, an airport surcharge of AED 50 per terminal and delivery or collection at AED 100. Hertz UAE lists a flat AED 150 (excluding VAT) one-way fee for any UAE drop-off. Figures differ by company, so check your contract." },
      { k: "Mileage and parking", v: "Many rentals cap mileage at about 250 km per day, sometimes pooled over the whole rental, with overage typically about AED 0.35 to 1 per km. Avis UAE says many daily and weekly rentals are unlimited, so check your contract. Paid parking uses variable Parkin tariffs, so check the sign or the Parkin app." },
    ],
    booking: [
      { k: "High and low season", v: "Rentop defines high season as October to April and low season as May to September. Another source puts winter rates at 1.5 to 2 times summer rates, and December and the Dubai Shopping Festival are the most expensive period. Some luxury renters keep fixed prices all year." },
      { k: "How far ahead", v: "Book early for winter and major events, and ask about weekly or monthly rates, which lower the daily price." },
      { k: "Other emirates", v: "Dubai rentals are usually allowed in Abu Dhabi, Sharjah and the other emirates, but check that your contract and insurance cover the whole UAE. Hertz UAE lists a one-way fee of AED 150 (excluding VAT) for dropping off in another emirate, and Salik and Abu Dhabi's Darb tolls are charged to your card after the rental." },
      { k: "Oman", v: "Not automatic. Avis UAE requires a request 72 hours ahead, an NOC and Oman insurance, at AED 450 to 650 for the first three days, while Hertz UAE generally does not allow its cars to leave the country. Do not assume UAE cover works in Oman." },
      { k: "Delivery", v: "Some companies deliver to your hotel or address in Dubai, for example Avis UAE at AED 100 per delivery or collection. Ask about the fee before you book." },
    ],
    checklist: [
      { k: "Photograph the car", v: "Take timestamped photos or video of every panel, the wheels, the windscreen and the interior, and make sure every existing mark is written on the check-out sheet. Avis UAE charges extra for a dirty exterior or interior, so photograph the interior too." },
      { k: "Salik and mileage", v: "Ask whether the car has a Salik tag, how each crossing is billed and what the admin fee is. Write down the odometer reading and ask whether the mileage allowance is per day or pooled over the rental, and what overage costs per km." },
      { k: "Fuel", v: "Avis UAE uses full-to-full with no refund for unused prepaid fuel. Photograph the fuel gauge at pickup and again at return." },
      { k: "Air conditioning and tyres", v: "Run the air conditioning for a few minutes and check the tyres and spare before you leave. In a Dubai summer a weak system is a real problem, so ask for another car at the desk, not later." },
      { k: "Accident and support", v: "Hertz UAE says to call the police on 999 and not move the car unless minor damage blocks traffic, and that cover is void without a valid police report. Save the rental company's 24-hour number in your phone." },
      { k: "Return", v: "Hertz UAE gives a 29-minute grace period and then charges an extra day, and says the deposit hold can take up to 29 days to release. Fines and Salik can be added after you leave, so keep your contract, return receipt, fuel photo and odometer photo." },
    ],
    mistakes: [
      { k: "Exceeding the mileage allowance", v: "Overage is billed per km, and a day trip to Abu Dhabi and back (about 300 km) can use a whole 250 km day on its own. Check whether the limit is per day or pooled." },
      { k: "Driving to Oman without permission", v: "Avis UAE needs 72 hours notice, an NOC and Oman insurance, and without the paperwork you can be turned back at the border. Do not assume your UAE cover works in Oman." },
      { k: "Not calling the police after an accident", v: "Hertz UAE says insurance cover is void without a valid police report, so you could pay for the full damage. Call 999 first, then the rental company." },
      { k: "Returning the car short of fuel", v: "Avis UAE requires a full tank and refunds no unused prepaid fuel, and companies can bill refuelling well above the pump price." },
      { k: "Returning late", v: "Hertz UAE and Avis UAE give about a 29-minute grace period, then charge an extra day. Plan to return well before the time on your contract." },
      { k: "Ignoring fines until after the rental", v: "Fines and Salik arrive after you leave and are billed to your card with an admin fee, for example about AED 50 per violation at Avis UAE. Pay parking at the machine or in the app and keep your receipts." },
    ],
    faqExtra: [
      {
        q: "How much does it cost to rent a car in Dubai?",
        a: "Indicative 2026 rates are roughly AED 70 to 120 per day for an economy car in low season and AED 120 to 180 in high season, with SUVs from around AED 180 to 350 in low season. On top of that, expect Salik tolls plus the company's admin fee, fuel at about AED 4.28 per litre for Special 95 in October 2026, and extras such as an additional driver or airport surcharge. A deposit hold is also common. Confirm the total before you pay.",
      },
      {
        q: "Can I drive a Dubai rental car to Abu Dhabi or Oman?",
        a: "Abu Dhabi and the other emirates are usually allowed, but check your contract and note Salik and Darb tolls and any one-way fee. Oman needs prior permission: Avis UAE requires 72 hours notice, an NOC and Oman insurance, and Hertz UAE generally does not allow its cars to leave the country. Ask the rental company before you book.",
      },
    ],
    sourcesExtra: [
      { label: "Avis UAE: terms and conditions", url: "https://www.avis.ae/terms-and-conditions" },
      { label: "Dubai government: road toll in Dubai (Salik)", url: "https://www.dubai.ae/living/driving-transportation/road-toll-in-dubai-salik" },
      { label: "Hertz UAE: one-way rentals between emirates", url: "https://www.hertz.ae/en/blog/can-you-rent-a-car-in-dubai-and-drop-it-in-abu-dhabi-or-another-emirate" },
      { label: "LiteRent: terms", url: "https://literent.ae/en/terms" },
      { label: "Gulf News: UAE fuel prices for October 2026", url: "https://gulfnews.com/business/energy/uae-petrol-diesel-prices-for-october-2026-announced-1.500692323" },
      { label: "Khaleej Times: Dubai variable parking fees", url: "https://www.khaleejtimes.com/uae/dubai-variable-parking-fee-to-start-from-april-parkin-announces" },
      { label: "Rentop: Dubai car rental price guide", url: "https://www.rentop.co/guides/how-much-does-it-cost-to-rent-a-car-in-dubai" },
      { label: "Saadatrent: hidden fees in Dubai car rental", url: "https://saadatrent.ae/mag/hidden-fees-in-dubai-car-rental/" },
    ],
    requirements: [
      { k: "Minimum age", v: "Usually 21. For luxury, supercar and larger vehicle classes the minimum is usually 25, and some companies charge a young-driver fee." },
      { k: "Driving licence", v: "The UAE Ministry of Economy and Tourism lists 25 countries whose citizens can drive on their national licence, including the UK, the US, Canada, Australia, France, Germany and Japan, and the list has reportedly been widened since. Visitors from GCC countries can also drive on their own licence. Rental companies usually want the licence held for at least one year. Check your country against the current list and the rental company's own rules before you book." },
      { k: "International permit (IDP)", v: "For other nationalities an IDP alongside the original licence is mandatory. Some rental companies apply their own rules, so carrying an IDP is a cheap safeguard even if your country is on the accepted list." },
      { k: "Passport, visa and card", v: "You usually need a valid passport, a valid visit visa or entry stamp, and your home licence or IDP. A credit card in the main driver's name is usually required, and it usually has to be physically present at pickup." },
      { k: "Deposit", v: "Usually a hold on the credit card, not a charge, with amounts quoted from roughly AED 1,000 to AED 5,000 depending on the car. The hold can take weeks to be released because tolls and fines are settled after the return." },
    ],
    insurance: [
      { k: "Basic cover", v: "Third-party insurance is included by law. Collision damage waiver (CDW) is usually included or offered with a deductible, and the excess depends on the car class." },
      { k: "Super cover", v: "Super CDW (SCDW) usually reduces or removes the excess. Hertz says you need to opt for it at booking or at pickup, so it is not automatic. Personal accident cover is usually a separate add-on." },
      { k: "Usually excluded", v: "Off-road driving is excluded: Avis says insurance does not cover off-road use and Hertz calls it a violation of the rental agreement. Basic CDW often leaves out tyres, wheels and windscreen, and sometimes undercarriage, so read the exclusions." },
      { k: "Police report after an accident", v: "In the UAE a valid police report is mandatory for insurance cover to apply. Hertz says to call 999 and not to move the car unless the accident is minor. Without a report you may be liable for the damage." },
      { k: "Fines and tolls are separate", v: "Insurance does not pay traffic fines or Salik tolls. Rental companies bill these after the rental, usually from the card on file or the deposit, often with an admin fee." },
    ],
    insuranceTip:
      "Ask whether the quoted price includes super cover and what the excess is, and keep the police report number if anything happens.",
    roads: [
      { k: "City and highways", v: "Dubai's urban roads and highways are paved, so a standard rental car is usually enough for normal sightseeing. Larger SUV and luxury classes can come with a higher minimum age." },
      { k: "Off-road and desert driving", v: "Standard rental cars may not be driven off the tarmac. Hertz calls off-road use strictly forbidden and Avis says the insurance does not cover it. Most car hire companies in Dubai do not allow desert use." },
      { k: "Desert trips", v: "Dune driving is usually done on a guided tour with a specially prepared 4x4 whose operator handles insurance. If you rent a 4x4 for off-road use, check that the licence and insurance terms explicitly allow it." },
      { k: "Extra charges", v: "Airport surcharges, extra-driver fees and young-driver fees are usually listed in the rental terms. Check them before you book, because they can change the total more than the car class does." },
    ],
    rules: [
      { k: "Side of the road", v: "Right, with overtaking on the left." },
      { k: "Speed limits and cameras", v: "Limits are posted on signs and vary by road. Dubai is covered by automatic speed cameras, and rental companies pass fines on to you with a processing fee." },
      { k: "Salik tolls", v: "Dubai's electronic toll gates charge a tag on the windscreen, and rental cars come with one fitted, so you do not top anything up. The rental company adds up your crossings and bills them after the rental, usually from the card or deposit, often with an admin fee. Rates are AED 4 to 6 per crossing plus VAT depending on the time of day, so check salik.ae for current rates." },
      { k: "Alcohol", v: "The UAE has zero tolerance for drink driving: any detectable alcohol in your blood is an offence. Penalties are severe and include imprisonment and heavy fines." },
      { k: "Parking", v: "Paid parking zones are common. Unpaid parking becomes a fine that is billed to you through the rental company, so check the sign and pay by app, meter or SMS." },
    ],
    pickup: [
      { k: "Dubai International Airport (DXB)", v: "Rental desks are in the arrivals areas of the terminals. Counter hours and locations vary by company, so check your booking voucher. Some companies charge an airport surcharge or a drop-off charge for ending a rental at the airport." },
      { k: "Delivery and other options", v: "Europcar says delivery and collection within Dubai city limits is included in the quoted rate, and some other companies charge a fee. Confirm the address and any fee before you travel." },
    ],
    faq: [
      {
        q: "Do I need an International Driving Permit to rent a car in Dubai?",
        a: "It depends on your licence. Citizens of the countries on the official list (25 on the Ministry of Economy and Tourism page, including the UK, the US, Canada, Australia and many European countries) and GCC visitors can usually use their national licence. Everyone else needs an IDP with the original licence. Check the current list and your rental company's own rules before you book.",
      },
      {
        q: "What is the minimum age to rent a car in Dubai?",
        a: "Usually 21. For luxury, SUV and performance classes it is usually 25, and some companies charge a young-driver fee.",
      },
      {
        q: "How do Salik tolls work for rental cars?",
        a: "The car has a Salik tag already fitted. Each gate crossing is recorded and the rental company bills the total after the rental, usually from the card or deposit, often adding an admin fee. Ask the company what fee it adds.",
      },
      {
        q: "Can I rent a car in Dubai with a debit card?",
        a: "Usually no. Most large companies require a credit card in the main driver's name for the deposit hold. A few companies or local firms may allow other arrangements, so ask before you book.",
      },
      {
        q: "Is insurance included in a Dubai car rental?",
        a: "Third-party insurance is included by law and basic collision cover is usually included with an excess. Super CDW to reduce the excess is usually an add-on, and off-road use is not covered. After any accident you need a police report for the cover to apply.",
      },
    ],
    sources: [
      { label: "UAE Ministry of Economy and Tourism: renting a car", url: "https://www.moet.gov.ae/en/-/renting-a-car" },
      { label: "Hertz UAE: rental FAQs", url: "https://www.hertz.ae/rental-faqs/" },
      { label: "Hertz UAE: Dubai Airport Terminal 1", url: "https://www.hertz.ae/en/locations/dubai-airport-terminal-1" },
      { label: "Europcar: Dubai delivery and collection", url: "https://www.europcar.com/en-db/p/offers/dubai-delivery-collection" },
      { label: "Ezhire: toll gates in the UAE", url: "https://www.ezhire.ae/blog/toll-gates-in-the-uae" },
      { label: "Gulf News: driving in the UAE as a tourist", url: "https://gulfnews.com/ask-gulf-news/ask-gulf-news-driving-in-the-uae-as-a-tourist-licence-rules-car-rentals-and-insurance-1.500388132" },
    ],
  },
  {
    slug: "hawaii",
    name: "Hawaii",
    status: "draft",
    verified: "2026-10-04",
    metaTitle: "Renting a Car in Hawaii: Age, Insurance, Roads and Rules",
    metaDescription:
      "Renting a car in Hawaii: age and licence rules, insurance, roads rental contracts forbid, no inter-island driving, and how Honolulu airport pickup works.",
    h1: "Renting a car in Hawaii: what you need to know",
    lead:
      "Hawaii rentals are mostly straightforward, but each island needs its own car and many contracts forbid unpaved and remote roads. Most visitors pick up at the airport of the island they fly to.",
    airports: ["honolulu"],
    esimSlug: "united-states",
    costsNote:
      "Figures are indicative 2026 estimates from guides and rental companies. They vary a lot by island and exact dates, so always check the total in your booking.",
    costs: [
      { k: "Daily base rate", v: "Hawaii Travel With Kids (updated January 2026) reports January as the cheapest month at about $49 per day, summer peak at $90 to 196 per day and holiday weeks at $200 to 600 per day, before taxes and fees. It gives a 2025 average of $67 per day, with Kona the most expensive airport at about $127." },
      { k: "State surcharge and tax", v: "The state rental vehicle surcharge is $7.50 per day from 1 January 2026, according to Sovos, and rises to $8.00 in 2027. The Hawaii Department of Taxation says the general excise tax can be passed on at 4.712% in all four counties (4% plus the 0.5% county surcharge), and Hawaii-guide.com says it is applied to the base rate plus insurance." },
      { k: "Airport fees", v: "Hawaii-guide.com and Beat of Hawaii list an airport concession recovery fee of about 11.11% of the base rate at the main airports, and a customer facility charge of $4.50 per day at HNL. Hawaii-guide.com says these do not apply at off-airport pickups." },
      { k: "What the fees add up to", v: "Beat of Hawaii (April 2026) says taxes and fees add about 35% to the advertised base rate, and its February 2026 article gives a Honolulu example of a $115.56 base rate for two days with $61.30 of taxes and fees. Treat this as a rough guide." },
      { k: "Gas", v: "AAA Hawaii (1 October 2026) puts the Hawaii average for regular at $5.62 per gallon against $4.41 nationally, with Honolulu at $5.54, Kahului at $5.71, Lihue at $5.87 and Hilo at $5.69." },
      { k: "Parking and extras", v: "Hawaii Travel With Kids puts Waikiki hotel parking at $40 to 60 per night. Hui's comparison page lists young-driver fees from $19 per day (Hertz) to $29 (Thrifty and Dollar). Hawaii Travel With Kids lists extra drivers at $10 to 15 per day and insurance upsells at $30 to 50 per day." },
    ],
    booking: [
      { k: "Seasons and prices", v: "Peak is June to August and the last two weeks of December into early January. Hawaii Travel With Kids shows holiday weeks at $200 to 600 per day against a January low of about $49." },
      { k: "How far ahead to book", v: "Hawaii-guide.com recommends booking about 30 days ahead, especially for Maui and Kauai, and eight to twelve weeks ahead for Christmas and New Year. Hawaii Travel With Kids advises booking the car when you book the flights. Each island airport has its own inventory." },
      { k: "Cancellation and rebooking", v: "Hawaii-guide.com says pay-later rates typically allow free cancellation while prepaid rates may carry fees. Both it and Hawaii Travel With Kids suggest booking early with free cancellation and rechecking the price, even several times." },
      { k: "Car sharing", v: "Hui Car Share operates on Oahu only. Its own site says insurance, gas, station parking and unlimited mileage are included, the member is responsible for the first $1,000 of damage, and it charges no young-driver fee. Prices start at $12.60 per hour and $131.78 per day for a Prius." },
    ],
    checklist: [
      { k: "Photograph the car", v: "Take photos or video of all exterior and interior damage before leaving the lot, and have the agent note existing dings on the contract." },
      { k: "Ask which roads are forbidden", v: "Hawaiicarrental.com says driving on unpaved or restricted roads voids all coverage, including the agency waiver, personal policies and card cover, and that off-road rescue costs are entirely the renter's. Ask at the counter and read the roads clause." },
      { k: "HNL pickup and return", v: "Alamo's HNL page gives the return address as 300 Rodgers Blvd (second floor of the Rental Car Center). From Terminal 1 follow the blue Rental Car Center Shuttle signs, and from Terminal 2 International Arrivals the shuttles leave from the median at baggage claims 18 and 20. Check your own company's page, as procedures vary." },
      { k: "Fill up before return", v: "Alamo's HNL page lists three fuel options: prepay for a tank and return it empty, let Alamo refuel at higher per-gallon rates, or refill it yourself to the level you received. Hawaiicarrental.com says refuelling yourself is usually cheaper than the agency charge." },
      { k: "Clean off sand and dirt", v: "Hawaiicarrental.com says cleaning fees of up to $250 can apply for smoke odour or for excessive dirt and sand that needs detailing, and all rentals are non-smoking." },
      { k: "Hide valuables", v: "The Hawaii Police Department's January 2026 guidance: lock the vehicle every time, remove or hide valuables before parking, never leave keys or fobs inside and park in well-lit visible spots. Most break-ins involved unlocked cars or items in plain view." },
    ],
    mistakes: [
      { k: "Driving a restricted or unpaved road", v: "All insurance can be voided and you pay for repair and rescue. Check the contract's road list before the Road to Hana or the routes beyond it." },
      { k: "Leaving valuables visible or the car unlocked", v: "The Hawaii Police Department says most reported break-ins involved unlocked cars or valuables in plain view." },
      { k: "Forgetting hotel parking fees", v: "Waikiki parking of $40 to 60 per night can rival the car's daily rate. Ask your hotel for the exact fee before you book." },
      { k: "Assuming credit card cover applies", v: "Card cover is usually secondary in the US, usually excludes some vehicle types, long rentals and off-road use, and only applies if you decline the rental company's waiver and pay for the whole rental with that card. Check your own card's terms." },
      { k: "Debit card surprises", v: "Alamo's HNL page accepts debit cards only with a ticketed return itinerary and a matching home address. Otherwise it asks for a $300 deposit ($850 for luxury) held until the car is returned, and only a spouse or domestic partner can be added as an extra driver." },
      { k: "Booking late or returning dirty", v: "A late peak-season booking can cost far more, and sand or smoke can trigger cleaning fees of up to $250. Book early with free cancellation and clean the car before return." },
    ],
    faqExtra: [
      {
        q: "How much does it cost to rent a car in Hawaii?",
        a: "Indicative 2026 base rates run from about $49 per day in the cheapest month (January) to $90 to 196 per day in summer, and $200 to 600 per day in holiday weeks. On top of that you pay the state surcharge of $7.50 per day, general excise tax of about 4.7%, and at airports an 11.11% concession fee plus $4.50 per day at HNL. Gas averages about $5.62 per gallon (AAA Hawaii, October 2026) and Waikiki hotel parking is usually $40 to 60 per night.",
      },
      {
        q: "When should I book a rental car for Hawaii?",
        a: "Book as soon as your flights are fixed and choose a free-cancellation rate. Hawaii-guide.com suggests at least about 30 days ahead and eight to twelve weeks for Christmas and New Year. Cars on Maui and over holidays sell out and prices can jump sharply, so recheck the price a few times and rebook if it drops.",
      },
    ],
    sourcesExtra: [
      { label: "Sovos: Hawaii annual motor vehicle rental surcharge increase", url: "https://sovos.com/regulatory-updates/sut/hawaii-annual-motor-vehicle-rental-surcharge-increase/" },
      { label: "Beat of Hawaii: rental car fees and taxes (April 2026)", url: "https://beatofhawaii.com/hawaiis-rental-car-tax-push-is-over-the-fees-and-junk-cars-remain/" },
      { label: "Beat of Hawaii: new rental car tax (February 2026)", url: "https://beatofhawaii.com/visitors-on-the-hook-for-hawaiis-new-100-million-rental-car-tax/" },
      { label: "Hawaii Department of Taxation: county surcharge", url: "https://tax.hawaii.gov/geninfo/countysurcharge/" },
      { label: "Maui Now: AAA Hawaii gas prices, October 2026", url: "https://mauinow.com/2026/10/02/aaa-hawai%CA%BBi-gas-prices-tick-higher-remain-among-nations-highest/" },
      { label: "Alamo: Honolulu International Airport location policies", url: "https://www.alamo.com/en/car-rental-locations/us/hi/honolulu-international-airport-36l1.html" },
      { label: "Hawaii Car Rental: your rental contract", url: "https://www.hawaiicarrental.com/info/your-rental-contract/" },
      { label: "Hawaii Police Department: tips to prevent car break-ins", url: "https://www.hawaiipolice.gov/police-offer-safety-tips-to-prevent-car-break-ins/" },
      { label: "Hawaii Travel With Kids: rental car prices and mistakes", url: "https://hawaiitravelwithkids.com/hawaii-car-rental-mistakes/" },
      { label: "Hui Car Share: under-25 rental fee comparison", url: "https://www.drivehui.com/car-rental-under-25/" },
    ],
    requirements: [
      { k: "Minimum age", v: "Usually 21, and some companies rent from 20 in Hawaii. Drivers under 25 usually pay a daily young-driver fee." },
      { k: "Driving licence", v: "US residents usually need a valid, unexpired, government-issued photo licence, and some branches do not accept digital licences. Visitors from countries that ratified the 1949 Geneva Convention on Road Traffic can drive on their national licence plus passport for up to one year after entering the US, if the licence is in the Roman alphabet or has an official translation." },
      { k: "International permit (IDP)", v: "Recommended but not required for a Roman-alphabet licence, and it never replaces your own licence. If your licence is not in the Roman alphabet, carry an IDP or an official translation. Rental counters set their own rules, so check with your company." },
      { k: "Payment card", v: "A credit card in the main driver's name is the safest choice. Some companies accept debit cards, but airport branches usually add conditions such as proof of return travel." },
      { k: "Deposit", v: "Companies usually place a hold on the card at pickup, often the estimated rental cost plus a deposit. With a debit card the money comes out of your bank balance until the hold is released." },
    ],
    insurance: [
      { k: "CDW / LDW at the counter", v: "The collision or loss damage waiver is optional and usually covers damage to or theft of the rental car itself. It is usually sold per day, so it adds noticeably to a longer trip." },
      { k: "Your own auto policy", v: "Many US personal auto policies extend to rentals used for personal trips in the US, with your usual deductible. Loss of use and administrative fees often are not covered, so ask your insurer before you decline the waiver." },
      { k: "Credit card cover", v: "Card rental cover is usually secondary, meaning it pays after your own policy, while some premium travel cards offer primary cover. You usually must decline the waiver and pay for the whole rental with that card, so read the exclusions." },
      { k: "Liability", v: "Hawaii is a no-fault state with minimum liability limits of $20,000 per person, $40,000 per accident and $10,000 for property damage (Hawaii DCCA). Rental agreements usually include basic liability, but confirm in your contract, and extra liability is optional." },
      { k: "Usually excluded", v: "Waivers, personal policies and card cover usually do not apply if you break the contract, for example by driving on roads it forbids, letting an unlisted driver drive or driving impaired. Items stolen from the car are usually not covered by the waiver." },
    ],
    insuranceTip:
      "Before you travel, ask your auto insurer and your card issuer in writing whether they cover rentals in Hawaii, and whether they cover loss of use.",
    roads: [
      { k: "Oahu", v: "Oahu has a public bus system, taxis and ride-sharing, so a car is optional if you stay around Honolulu and Waikiki. A car is useful for the North Shore, the east side and beaches." },
      { k: "Maui, Big Island and Kauai", v: "The Hawaii Tourism Authority recommends a rental car on the Big Island because the island is so large. Kauai has limited bus service, so most visitors rent a car on all three of these islands." },
      { k: "4x4 or Jeep", v: "You usually do not need a 4x4 for the main paved roads. Most major companies do not allow their cars off the pavement, even 4WD vehicles, so a Jeep from a standard company does not change where you may drive." },
      { k: "Roads contracts often forbid", v: "Unpaved roads and some remote routes, for example the unpaved section above the Mauna Kea Visitor Information Station on the Big Island and some remote routes past Hana on Maui. Driving on a forbidden road usually voids your waiver, so read your own contract before you go." },
    ],
    rules: [
      { k: "Side of the road", v: "Right, as in the rest of the United States. All front and back seat occupants must wear seat belts." },
      { k: "Speed limits", v: "Posted limits on most Hawaii highways are low, mostly 55 mph or less, and Honolulu has safety cameras at some intersections. Handheld phone use while driving is fined." },
      { k: "Parking and hotel fees", v: "Waikiki hotels and resorts usually charge for parking separately, so ask about the fee before you decide how long to keep the car." },
      { k: "One car per island", v: "You cannot take a rental car from one island to another. There is no car ferry between the main islands and a reservation does not transfer, so you rent a separate car on each island." },
      { k: "Theft and valuables", v: "Break-ins at beach lots, trailheads and viewpoints often target rental cars. Lock the car and do not leave bags or packages in plain view." },
    ],
    pickup: [
      { k: "Honolulu Airport (HNL)", v: "HNL has a consolidated rental car facility next to the terminals. You can walk from the domestic side of Terminal 2 (baggage claims 19 to 31), and from Terminal 1, Terminal 3 and Terminal 2 International Arrivals you take the Rental Car Center shuttle. Counter hours vary by company." },
      { k: "Other islands and airport fees", v: "Major companies operate at the airports on Maui, Kauai and the Big Island. Airport pickups usually add an airport concession fee and other taxes to the base rate, and cars are often in short supply, so book early." },
    ],
    faq: [
      {
        q: "Do I need an international driving permit in Hawaii?",
        a: "Usually not. Visitors from Geneva Convention countries can drive on their national licence plus passport for up to one year, if the licence is in the Roman alphabet or has an official translation. An IDP is recommended but never replaces your own licence, and the rental company can have its own rule.",
      },
      {
        q: "What is the minimum age to rent a car in Hawaii?",
        a: "Usually 21, and some companies rent from 20. Drivers under 25 usually pay a daily young-driver fee.",
      },
      {
        q: "Do I need a car in Hawaii?",
        a: "It depends on the island. On Oahu you can manage in Honolulu and Waikiki with the bus, taxis and ride-sharing, but on the Big Island, Maui and Kauai most visitors rent a car.",
      },
      {
        q: "Can I take my rental car to another island?",
        a: "No. There is no car ferry between the main islands and rental reservations do not transfer, so you rent a separate car on each island.",
      },
      {
        q: "Is my credit card insurance enough in Hawaii?",
        a: "It can be, but card cover is usually secondary and does not usually cover loss of use or damage on roads the contract forbids. Check the card terms, decline the waiver only if you are sure, and pay for the rental with that card.",
      },
    ],
    sources: [
      { label: "Hawaii Airports: HNL car rentals", url: "https://airports.hawaii.gov/hnl/getting-to-from/ground-transportation/car-rentals/" },
      { label: "Hawaii DOT: consolidated rent-a-car facility at HNL", url: "https://hidot.hawaii.gov/airports/consolidated-rent-a-car-facility-opens-at-hnl-dec-1/" },
      { label: "Hawaii DCCA: motor vehicle insurance information", url: "https://cca.hawaii.gov/ins/consumers-mvi/" },
      { label: "State of Hawaii visitor portal: getting around", url: "https://portal.ehawaii.gov/visitors/getting-around/" },
      { label: "Honolulu Star-Advertiser: foreign driver's licence in Hawaii", url: "https://www.staradvertiser.com/2023/05/30/hawaii-news/kokua-line/kokua-line-does-hawaii-allow-driving-with-foreign-drivers-license/" },
      { label: "Hawaii Tourism Authority: Big Island transportation", url: "https://www.gohawaii.com/islands/hawaii-big-island/travel-info/transportation" },
      { label: "Enterprise: Honolulu International Airport", url: "https://www.enterprise.com/en/car-rental-locations/us/hi/honolulu-international-airport-36e1.html" },
    ],
  },
  {
    slug: "mexico",
    name: "Mexico",
    status: "draft",
    verified: "2026-10-04",
    metaTitle: "Renting a Car in Mexico: Insurance, Tolls, Tips",
    metaDescription:
      "Renting a car in Mexico: mandatory liability insurance, deposits, age rules, tolls and Cancun airport pickup, with sources and a pre-trip checklist.",
    h1: "Renting a car in Mexico: what you need to know",
    lead:
      "Liability insurance is required by law in Mexico, and many cheap online quotes leave it out, so the price at the counter can jump. This guide covers insurance, deposits, age rules, tolls and what to expect when you collect a car at Cancun airport.",
    airports: ["cancun"],
    esimSlug: "mexico",
    costsNote:
      "Cheap headline rates usually exclude mandatory liability cover and fees, so compare the total price at the counter, not the daily rate shown online. Figures are indicative.",
    requirements: [
      { k: "Driving licence", v: "Companies usually ask for a valid licence from your country of residence plus a passport or official ID. Avis Mexico and Hertz Mexico both state this in their terms." },
      { k: "International permit (IDP)", v: "Avis Mexico says an IDP is needed for licences in a non-Roman alphabet, so a licence in Roman script usually does not need one at the counter. The Government of Canada still advises carrying an IDP." },
      { k: "Minimum age", v: "Varies by company. Hertz Mexico says 18 with a young-driver fee up to age 24, Alamo at Cancun airport says 21, and Avis Mexico and Enterprise Mexico say 25." },
      { k: "Payment card", v: "Companies usually require a credit card in the main driver's name for the deposit. Enterprise Mexico and Avis say debit cards are accepted only for the final payment, while Hertz Mexico's terms page limits debit to same-day airport arrivals and its conditions page says debit is accepted with an extra deposit, so check the rules for your location." },
      { k: "Maximum age", v: "Some locations set an upper limit. Alamo at Cancun airport lists a maximum age of 75." },
    ],
    costs: [
      { k: "Base daily rate", v: "The airportcun.com car rental page lists average online rates of about USD 15 per day for economy, USD 19 for standard and USD 38 for a full-size SUV. These are undated aggregator figures and are the starting price before insurance." },
      { k: "Liability insurance", v: "Third-party liability is required by law and is often the add-on that raises the total. AutoSlash (2024) reported liability add-ons of about USD 15 per day at counters, and some companies include a basic level." },
      { k: "Airport fee", v: "Enterprise Mexico states that rentals at airport offices carry a fee of 19%. Other companies may charge different amounts, so check the fee line in the quote." },
      { k: "Young-driver fee", v: "Avis Mexico lists MXN 130 per day for renters aged 21 to 24. Fees differ by company and age band." },
      { k: "Deposit", v: "Avis Mexico states a card pre-authorisation of the rental amount plus USD 1,000, up to USD 4,000 if no waiver is chosen. Enterprise Mexico lists MXN 10,000 plus the rental amount without its protection, falling to MXN 4,000 or MXN 2,000 with a protection package." },
      { k: "Tolls", v: "Diario de Yucatan and Heraldo de Mexico report about 675 pesos for a car on the full Merida to Cancun toll road since 13 April 2026. Most other roads around Cancun and the Riviera Maya do not need a toll budget." },
    ],
    insurance: [
      { k: "Third-party liability is mandatory", v: "Enterprise Mexico and Alamo both state that third-party liability protection is required by law in Mexico. The Government of Canada also says Mexican liability insurance is mandatory and that foreign car insurance is not valid." },
      { k: "Credit-card cover does not replace it", v: "Credit-card benefits usually cover damage to the rental car, not injury or damage you cause to others. AutoSlash states that a card will not provide the required Mexican liability coverage." },
      { k: "What is included varies by company", v: "Hertz Mexico states its reservation price includes liability cover up to MXN 700,000. Avis Mexico says limited third-party liability for property damage is included and extra liability can raise it, while Enterprise Mexico states liability cover up to MXN 4 million per event." },
      { k: "Collision and theft waivers", v: "Waivers are usually optional, with a deductible if you decline or if damage occurs. Alamo at Cancun airport lists a maximum deductible of USD 3,500, and Hertz Mexico's retention table shows MXN 2,000 to 3,000 for compact classes, about MXN 5,000 to 7,000 for most mid-size cars and SUVs, and MXN 15,000 or more for large or premium SUVs." },
      { k: "Insurance changes the deposit", v: "The more cover you take at the counter, the smaller the card hold usually is. Hertz Mexico says the protection level you choose sets the pre-authorisation amount." },
    ],
    insuranceTip:
      "Before you pay, ask in writing what liability limit is included and what the total price is with all mandatory cover, then compare that figure across companies.",
    roads: [
      { k: "Paved main routes", v: "The main routes (Cancun airport, the Hotel Zone, Playa del Carmen, Tulum and the Merida toll road) are paved, and a compact is usually enough. Hertz Mexico shows lower retention amounts for compacts than for SUVs." },
      { k: "Speed bumps and potholes", v: "The Government of Canada warns about speed bumps (topes), potholes and unmarked construction, so a car with some ground clearance can be more comfortable on rural roads." },
      { k: "Avoid rental stickers", v: "The Government of Canada advises renting a car without stickers or advertisements for the rental company, to avoid attracting criminal attention." },
      { k: "Seats and luggage", v: "Ask the company about child seats and luggage space before you book, and do not assume the car shown in the search results is the car you will get." },
    ],
    rules: [
      { k: "Speed limits", v: "Limits are posted in km/h and drop sharply in towns and near schools, so follow the signs." },
      { k: "Topes (speed bumps)", v: "The Government of Canada lists speed bumps, potholes, abandoned vehicles and stray livestock among the hazards. Topes are often poorly marked, so slow down in villages and near junctions." },
      { k: "Police stops", v: "The UK government says to be wary of criminals posing as police and, if real officers ask for money, not to hand over money or your passport and to ask for a written fine to pay later." },
      { k: "Night driving", v: "The Government of Canada advises avoiding travel after dark, and the UK government advises daytime travel where possible and avoiding isolated roads." },
      { k: "Toll roads and fuel", v: "The Government of Canada says toll highways marked D are typically safer and better maintained than secondary routes, and advises filling the tank before you travel as services may be limited in rural areas. Many companies, such as Avis, expect the car back with a full tank." },
      { k: "Cross-border travel", v: "Rental cars usually stay in Mexico. Hertz Mexico says US travel needs prior consent and special cover and southern border travel is prohibited, Enterprise Mexico says cars must never cross the southern border, and Avis says cars rented in Mexico cannot be returned in the US." },
    ],
    pickup: [
      { k: "Cancun airport (CUN)", v: "Alamo lists counters in Terminals 2, 3 and 4 and Avis lists counters in all four terminals. Other companies have offices outside the terminals with a shuttle, so confirm the exact meeting point and phone number before you land." },
      { k: "Unofficial offers", v: "The airportcun.com site says to arrange transport from the airport only with an official provider. Go straight to your own rental company's counter or its named shuttle stop and ignore unsolicited offers." },
    ],
    checklist: [
      { k: "Get the final price", v: "Ask for a written total that includes liability insurance, airport fee, taxes and any extras before you give your card." },
      { k: "Check the contract", v: "PROFECO says a rental company must have its adhesion contract registered with PROFECO and must show the total amount with the VAT breakdown and extra charges." },
      { k: "Confirm the deposit", v: "Ask how large the card hold is with and without insurance and when it is released, and make sure your credit limit covers it." },
      { k: "Inspect the car", v: "PROFECO advises checking the body, mechanical condition, fuel, oil level and mileage and confirming that documents and accessories are complete. Take photos or video of existing damage." },
      { k: "Check tolls and fuel", v: "Ask whether the car has a toll tag or if you must pay tolls yourself, and confirm the fuel policy. Full-to-full is common and prepaid fuel often costs more." },
      { k: "Save the contacts", v: "Keep the rental company's emergency number, your contract, insurance papers and a passport copy with you." },
    ],
    booking: [
      { k: "Compare the total price", v: "Compare quotes that include liability cover and fees. Hertz Mexico says liability up to MXN 700,000 is in its reservation price, whereas other quotes may add it at the counter." },
      { k: "Check what the quote includes", v: "AutoSlash notes that mandatory liability is often not included in the quoted rate, while Avis often includes it. Check what your quote covers before you book." },
      { k: "Use a credit card", v: "Book and pay with a credit card in the main driver's name, because deposits are usually not accepted on debit cards." },
    ],
    mistakes: [
      { k: "Judging by the headline daily rate", v: "A very low daily price often excludes liability insurance and fees, so the counter price can be much higher." },
      { k: "Assuming credit-card cover is enough", v: "Card benefits usually cover damage to the rental car, not liability to others, and Mexican liability insurance is mandatory." },
      { k: "Not checking the deposit", v: "Holds can be large and are often higher if you decline waivers, so check your card limit." },
      { k: "Following unofficial offers", v: "Do not accept transport or rental offers from people who are not at your company's counter or named shuttle stop." },
      { k: "Skipping the inspection", v: "Without photos at pickup, you may be charged for old damage when you return the car." },
      { k: "Driving at night or off the toll roads", v: "Government of Canada advice is to avoid driving after dark and to use toll highways where possible." },
    ],
    faq: [
      {
        q: "Is insurance included when I rent a car in Mexico?",
        a: "Not always. Third-party liability is required by law and many quotes leave it out, so it is added at the counter. Hertz Mexico says liability up to MXN 700,000 is included in its reservation price, while Enterprise Mexico and Alamo describe it as mandatory and priced separately.",
      },
      {
        q: "Do I need an International Driving Permit in Mexico?",
        a: "Usually not if your licence is in Roman script. Avis Mexico says an IDP is needed for non-Roman alphabets. The Government of Canada still advises carrying one.",
      },
      {
        q: "What is the minimum age to rent a car in Mexico?",
        a: "It depends on the company. Hertz Mexico says 18 with a young-driver fee up to 24, Alamo at Cancun says 21, and Avis Mexico and Enterprise Mexico say 25.",
      },
      {
        q: "Are there toll roads between Cancun and Merida, and how do I pay?",
        a: "Yes, the Merida to Cancun toll road (180D). Diario de Yucatan reports about 675 pesos for a car for the full route from 13 April 2026. Ask your rental company whether the car has a toll tag and how tolls are billed.",
      },
      {
        q: "Can I rent a car in Mexico with a debit card?",
        a: "Usually not for the deposit. Enterprise Mexico and Avis say debit cards are only for the final payment, while Hertz Mexico's pages differ on debit cards, so check the rules for your location.",
      },
    ],
    faqExtra: [
      {
        q: "How much does it cost to rent a car in Mexico?",
        a: "Online base rates can be low: the airportcun.com page lists averages of about USD 15 to 38 per day by class. Add liability insurance, the airport fee (Enterprise Mexico lists 19%), young-driver fees, tolls and fuel. A deposit hold is also placed on your card and released after the rental.",
      },
      {
        q: "Is it safe to drive a rental car in Mexico?",
        a: "The Government of Canada says road safety is poor in many areas and advises using toll roads and avoiding driving after dark. Yucatan Magazine reported in August 2026 that the US State Department rated Quintana Roo Level 2 and Yucatan Level 1. Check the current advisory on travel.state.gov before you travel.",
      },
    ],
    sources: [
      { label: "Enterprise Mexico: rental policies", url: "https://enterprise.mx/politicas-de-renta" },
      { label: "Avis Mexico: rental terms", url: "https://production.rent-at-avis.com/avisonline/terms.nsf/TermsDefaultCategories/MX-common?OpenDocument=&INTERNATIONAL=Y" },
      { label: "Hertz Mexico: rental terms", url: "https://www.hertzmexico.com/terminos" },
      { label: "Government of Canada: Mexico travel advice", url: "https://travel.gc.ca/destinations/mexico" },
      { label: "UK government: Mexico safety and security", url: "https://www.gov.uk/foreign-travel-advice/mexico/safety-and-security" },
      { label: "PROFECO: renting a car", url: "https://www.gob.mx/profeco/es/articulos/rentar-un-auto-no-tiene-que-ser-una-pesadilla?idiom=es" },
    ],
    sourcesExtra: [
      { label: "Alamo: Cancun airport location", url: "https://www.alamo.com/es/oficinas-de-alquiler-de-autos/mx/apto-int-de-cancun-kk09.html" },
      { label: "Avis: Cancun airport location", url: "https://www.avis.com/en/locations/lat/mx/cancun/cun" },
      { label: "Hertz Mexico: conditions", url: "https://www.hertzmexico.com/en/conditions" },
      { label: "AutoSlash: Mexico rental insurance", url: "https://blog.autoslash.com/dealing-with-the-mexico-car-rental-insurance-scam/" },
      { label: "Diario de Yucatan: Merida-Cancun toll 2026", url: "https://www.yucatan.com.mx/merida/2026/04/14/precio-de-la-autopista-merida-cancun-en-2026.html" },
      { label: "Heraldo de Mexico: tolls Merida to Cancun", url: "https://yucatan.heraldodemexico.com.mx/nacional/2026/8/7/cuanto-cuestan-las-casetas-de-merida-a-cancun-en-2026-y-cual-es-la-ruta-mas-rapida-6073.html" },
      { label: "Yucatan Magazine: State Department levels", url: "https://yucatanmagazine.com/yucatan-and-campeche-remain-mexicos-safest-states-for-travel/" },
      { label: "Cancun Airport information (airportcun.com)", url: "https://airportcun.com/car-rental-cancun" },
      { label: "PROFECO: tips for renting vehicles safely (2026)", url: "https://www.gob.mx/profeco/prensa/profeco-emite-recomendaciones-para-rentar-vehiculos-de-forma-segura-en-vacaciones?idiom=es" },
    ],
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    status: "draft",
    verified: "2026-10-04",
    metaTitle: "Renting a Car in New Zealand: Rules, Tolls and Ferry",
    metaDescription:
      "Renting a car in New Zealand: licence rules, minimum age, insurance excess, tolls, gravel roads and the Cook Strait ferry. Updated October 2026.",
    h1: "Renting a car in New Zealand: what you need to know",
    lead:
      "New Zealand drives on the left. Most trips from Auckland come down to four things: your licence, the insurance excess, gravel roads and tolls, and what to do about the Cook Strait ferry.",
    airports: ["auckland"],
    esimSlug: "new-zealand",
    costsNote:
      "Daily rates swing a lot between the summer peak and winter, so compare live prices for your exact dates. Company figures below are examples from each company's own pages.",
    requirements: [
      { k: "Driving side", v: "New Zealand drives on the left. NZTA also warns that many roads are narrow, winding and hilly, and that some are unsealed gravel." },
      { k: "Licence validity", v: "NZTA says that from 1 November 2026 you can drive on an overseas car licence for up to 12 months from the day you last arrived in New Zealand, and that until 31 October 2026 the limit is 18 months. Rental companies can still set their own rules, so check the one you book with." },
      { k: "Translation or IDP", v: "If your licence is not in English you need an accurate English translation from an NZTA-approved translator, or an International Driving Permit (IDP). Carry it together with your original licence." },
      { k: "Minimum age", v: "Rental companies set their own limits. Avis and GO Rentals state 21 and Ace Rentals states 18, while Hertz NZ sets the age by car class, from 18 for economy cars up to 25 for premium, with a daily surcharge for drivers under 21. GO Rentals requires 25 for its Tesla Model Y, and Avis also asks for a full licence held for at least 12 months." },
      { k: "Card at the desk", v: "You usually need a physical card in the main driver's name. Avis does not accept phone or contactless wallet payments for the deposit, and GO Rentals asks for a credit card bond on its standard cover." },
    ],
    costs: [
      { k: "Daily rate", v: "Rates vary widely by season, car class and booking date, and averages published by comparison sites disagree with each other. Use live quotes for your dates." },
      { k: "Young-driver fee", v: "GO Rentals and Ace Rentals say they do not charge a young-driver fee. Other companies usually add a daily or per-rental fee for younger renters, so check the quote." },
      { k: "Excess and reduction", v: "GO Rentals gives an example of a basic excess of NZ$4,000, with an option to cut it to NZ$1,000 for NZ$45 a day. Amounts depend on the company and the vehicle." },
      { k: "Bond or deposit", v: "Ace Rentals states a NZ$200 bond for most cover options. Avis states a NZ$200 hold on a credit card for passenger vehicles, or the rental amount plus NZ$200 on a debit card." },
      { k: "Tolls", v: "The three toll roads charge NZ$2.60 (Northern Gateway), NZ$2.30 (Tauranga Eastern Link) and NZ$2.10 (Takitimu Drive) for a car. Hertz NZ sells a Toll Pass at a flat NZ$7.50 per rental, and GO Rentals includes tolls in a NZ$3 a day Total Road Care package." },
      { k: "Card fees and one-way fees", v: "GO Rentals states card fees of 2.5% for Visa and Mastercard and 4% for American Express, and Ace Rentals states 1.99% excluding GST. One-way fees vary by route and are shown at booking, and Ace says moving a car between islands can cost up to NZ$1,000 plus GST." },
    ],
    insurance: [
      { k: "What basic cover is", v: "Basic cover usually means a collision damage waiver and theft protection. You still pay an excess if the car is damaged or stolen, and GO Rentals describes basic cover as the highest excess on offer." },
      { k: "Reduced-excess options", v: "GO Rentals sells three levels: GO Basic, GO Assured (lower excess and bond for a daily fee) and GO Peace of Mind (zero bond and excess for a daily fee, though some vehicles still carry an excess). Other companies use similar tiers with different names." },
      { k: "Usual exclusions", v: "GO Rentals lists undercarriage damage, roof damage from neglect, driving under the influence, unauthorised drivers and wrong fuel as not covered by standard rental insurance. Tyres and windscreen are commonly excluded elsewhere, but GO Rentals says it covers both." },
      { k: "Gravel and underbody", v: "GO Rentals states that on permitted gravel roads underbody damage is not covered by its insurance. Rivers, beaches and forbidden roads are usually excluded under every company's terms." },
    ],
    insuranceTip:
      "Before you pay for an excess reduction, read what it leaves out, because tyres, glass, the underbody and roof damage are the common gaps.",
    roads: [
      { k: "Gravel roads", v: "GO Rentals states that legal, named gravel roads are allowed, and other companies usually allow them with restrictions. Remember that underbody damage is usually not covered." },
      { k: "Roads rentals usually forbid", v: "GO Rentals lists Ball Hut Road (near Mt Cook), Skippers Road (Queenstown), Ninety Mile Beach, Te Paki Stream Bed, Macetown road, unformed roads, tracks and beaches. Ace Rentals bans beaches and Skippers Canyon and forbids towing. Check the exact list in your contract." },
      { k: "Small car or SUV", v: "For a trip on sealed highways a small or medium car is usually enough. Most roads have one lane each way, so a larger vehicle matters more for luggage and comfort than for road access." },
      { k: "Campervans", v: "A campervan gives you a bed and kitchen but is slower on winding roads and harder to park. Interislander says all rented campervans and caravans may travel on its ferry whatever the rental company." },
      { k: "Winter and alpine roads", v: "If you plan to drive the Milford Road in winter, check chain rules first. GO Rentals says it hires out snow chains and shows customers how to fit them." },
    ],
    rules: [
      { k: "Speed limits", v: "The open road limit for cars is 100 km/h and 50 km/h applies in urban areas unless signs say otherwise. Cars towing a trailer and heavy vehicles are limited to 90 km/h, and NZTA says exceeding a permanent limit by more than 40 km/h brings an automatic 28-day licence suspension." },
      { k: "110 km/h roads", v: "The Waikato Expressway between Hampton Downs and Tamahere has had a 110 km/h limit since 13 July 2022. Always follow the posted sign, because limits can change." },
      { k: "Alcohol", v: "For drivers aged 20 and over the limit is 250 micrograms of alcohol per litre of breath or 50 mg per 100 ml of blood. For drivers under 20 it is zero (NZ Ministry of Transport)." },
      { k: "Seat belts and child seats", v: "NZTA says everyone in a vehicle must wear a seat belt. Children under 7 must use an approved child restraint, and the driver is legally responsible. Visitors follow the same rules." },
      { k: "Fatigue", v: "NZTA warns that tired drivers are more likely to crash. Rest before you drive after a long flight, take regular breaks and plan shorter days than the map suggests." },
      { k: "One-lane bridges", v: "A red circle sign means you must give way to oncoming traffic. A blue rectangle sign means other vehicles should give way to you, but slow down and check for vehicles already on the bridge." },
    ],
    pickup: [
      { k: "Desk or shuttle", v: "At Auckland Airport some companies have counters at the airport and others pick you up by shuttle. GO Rentals states a shuttle from 7:30am to 6pm and Ace Rentals states a shuttle pick-up and drop-off service. Check your voucher for the exact meeting point." },
      { k: "Documents and time", v: "Bring your licence, any translation or IDP, and a physical card in the main driver's name. Allow extra time after a long flight, and do the vehicle check before leaving the lot." },
    ],
    checklist: [
      { k: "Licence", v: "Check that your licence is valid for the whole rental and that any IDP or translation is with it." },
      { k: "Card", v: "Bring a physical credit card in the main driver's name with enough limit for the bond." },
      { k: "Excess", v: "Note the excess and what the reduction option excludes before signing." },
      { k: "Vehicle check", v: "Photograph the car, including the roof, wheels and windscreen, and make sure all damage is on the form." },
      { k: "Tolls", v: "Ask the rental company how tolls are handled before you pay one online, because some include tolls or sell a package." },
      { k: "Ferry", v: "If you cross islands, ask the company for its written ferry policy before you book a sailing." },
    ],
    booking: [
      { k: "Book early for summer", v: "December to February is the peak season and prices are highest then. Book early for the car and any ferry sailing, because GO Rentals warns ferries can fill up fast." },
      { k: "Cook Strait ferry", v: "Interislander and Bluebridge cross between Wellington and Picton in around 3.5 hours (GO Rentals). Bluebridge lists Avis, Budget, GO Rentals, Apex, Enterprise, Sixt and others as allowing cars on board, while Hertz, Europcar, Thrifty and Dollar do not. Bluebridge lists Ace Rentals as allowed only if you return to the island of pickup, but Ace's own FAQ says its cars cannot cross between islands, so ask Ace before you book." },
      { k: "Cars that stay behind", v: "Interislander has Hertz, Europcar, Thrifty and Dollar kiosks at the Wellington and Picton terminals, where you usually drop one car and collect another." },
      { k: "One-way hire", v: "A one-way rental between islands avoids the ferry vehicle ticket. A relocation fee may apply and is shown at booking." },
    ],
    mistakes: [
      { k: "Assuming your licence is valid for the whole stay", v: "NZTA's overseas-licence limit changes on 1 November 2026, and rental companies set their own rules. Check the limit for your arrival date." },
      { k: "Taking the car on the ferry without checking", v: "Some companies do not allow it, and a travel-tips site says breaking the rule can bring a fine and may invalidate insurance. Check your own contract." },
      { k: "Driving forbidden gravel roads", v: "Skippers Road, Macetown road and Ninety Mile Beach appear in company lists of banned roads. Damage there is usually not covered." },
      { k: "Paying a toll twice or not at all", v: "Ask your rental company before buying a toll online, because some include tolls or sell a package." },
      { k: "Ignoring the Milford Road chain signs", v: "NZTA says police may fine drivers NZ$750 for driving past signs that require chains." },
      { k: "Skipping the vehicle check", v: "Photograph the car at pickup, because the excess applies to damage you cannot prove was already there." },
    ],
    faq: [
      {
        q: "Do I need an International Driving Permit in New Zealand?",
        a: "Only if your licence is not in English. In that case you need an IDP or an accurate English translation from an NZTA-approved translator, and you carry it with your original licence.",
      },
      {
        q: "What is the minimum age to rent a car in New Zealand?",
        a: "It depends on the company. Avis and GO Rentals state 21 and Ace Rentals states 18, and Hertz NZ sets the age by car class, from 18 up to 25 for premium cars. GO Rentals requires 25 for its Tesla Model Y.",
      },
      {
        q: "How do tolls work in a New Zealand rental car?",
        a: "There are three toll roads: Northern Gateway, Tauranga Eastern Link and Takitimu Drive. A casual user can pay online or by phone within five working days of the trip. For a rental, NZTA says to check with the rental company first, because some include tolls or sell a toll package.",
      },
      {
        q: "Which side of the road do you drive on in New Zealand?",
        a: "On the left. NZTA also warns that many roads are narrow and winding and that some are unsealed.",
      },
      {
        q: "Can I take a rental car on the ferry between islands?",
        a: "It depends on the company. Bluebridge lists Avis, Budget, GO Rentals, Apex, Enterprise and Sixt as allowing it, and Hertz, Europcar, Thrifty and Dollar as not, so with those you drop the car at one terminal and collect another at the other end.",
      },
    ],
    faqExtra: [
      {
        q: "How much does it cost to rent a car in New Zealand?",
        a: "Prices change a lot with the season, car class and booking date, so check live prices for your dates. On top of the daily rate, look at the excess, any fee to reduce it, toll arrangements, card fees and one-way or relocation fees.",
      },
      {
        q: "Can I take my rental car on the Cook Strait ferry?",
        a: "Some companies allow it and some do not. Bluebridge lists Avis, Budget, GO Rentals, Apex, Enterprise and Sixt as allowing it, and Hertz, Europcar, Thrifty and Dollar as not. Check your own company's terms before you book a sailing, and remember that campervans are allowed whatever the company.",
      },
    ],
    sources: [
      { label: "NZTA: driving on New Zealand roads (overseas licences)", url: "https://www.nzta.govt.nz/travelling-on-our-roads/visitors-and-new-residents/driving-on-nz-roads" },
      { label: "NZTA: visiting New Zealand", url: "https://www.nzta.govt.nz/travelling-on-our-roads/visitors-and-new-residents/visiting-new-zealand" },
      { label: "NZTA: toll fees", url: "https://www.nzta.govt.nz/roads-and-rail/toll-roads/toll-road-information/tolls-and-fees" },
      { label: "NZTA: toll roads and rental vehicles", url: "https://nzta.govt.nz/roads-and-rail/toll-roads/toll-road-information/toll-roads-and-rental-vehicles" },
      { label: "NZTA: toll road terms and conditions", url: "https://www.nzta.govt.nz/roads-and-rail/toll-roads/toll-road-information/terms-and-conditions" },
      { label: "NZ Ministry of Transport: drink-driving limits", url: "https://www.transport.govt.nz/common-transport-queries/drink-driving-limits-in-new-zealand" },
    ],
    sourcesExtra: [
      { label: "NZTA Road Code: speed limits", url: "https://nzta.govt.nz/roadcode/general-road-code/about-limits/speed-limits" },
      { label: "NZTA: requirements for using child restraints", url: "https://nzta.govt.nz/travelling-on-our-roads/keeping-children-safe/child-restraints/requirements-for-using-child-restraints" },
      { label: "NZTA: giving way on one-lane bridges", url: "https://www.nzta.govt.nz/roadcode/general-road-code/about-driving/giving-way/giving-way-on-one-lane-bridges" },
      { label: "NZTA: SH94 Milford Road travel tips", url: "https://www.nzta.govt.nz/projects/sh94-milford-road/important-travel-tips" },
      { label: "Bluebridge: rental cars on the ferry", url: "https://www.bluebridge.co.nz/rental-car/" },
      { label: "Interislander: check-in and rental vehicles", url: "https://www.interislander.co.nz/plan/checking-in-as-a-foot-passenger" },
      { label: "Avis NZ: requirements for renting", url: "https://go.avis.co.nz/en/customer-service/faqs/nz/requirement-for-renting" },
      { label: "GO Rentals: before you book FAQs", url: "https://www.gorentals.co.nz/help/before-you-book/" },
    ],
  },
  {
    slug: "ireland",
    name: "Ireland",
    status: "draft",
    verified: "2026-10-04",
    metaTitle: "Renting a Car in Ireland: Rules, Tolls, Insurance",
    metaDescription:
      "Renting a car in Ireland: licence and age rules, insurance and excess, M50 and other tolls, Dublin Airport pickup and driving on the left.",
    h1: "Renting a car in Ireland: what you need to know",
    lead:
      "Ireland drives on the left, many rural roads are narrow, and rental insurance works differently from what many visitors expect. This guide covers the rules, costs and traps for renting in the Republic of Ireland, with Dublin Airport as the main pickup point.",
    airports: ["dublin"],
    esimSlug: "ireland",
    costsNote:
      "Rental companies do not publish one standard daily price, so compare the total after insurance, airport fees, tolls and extras. Company figures are examples from their own terms.",
    requirements: [
      { k: "Minimum age", v: "Europcar Ireland sets its minimum age at 22 and charges young drivers a surcharge of 30 euro per day (March 2026 terms). Other companies set different limits, so check your company's terms." },
      { k: "Driving licence", v: "Europcar Ireland usually requires a full licence held for at least 24 months, and you must show the original licence in person at pickup. Europcar says digital licences are not accepted." },
      { k: "International permit (IDP)", v: "Europcar Ireland says holders of UK, US, Canadian, Australian and EU licences do not need an IDP to rent from it. Citizens Information says visitors with a licence from outside the EU, the EEA and its list of recognised states need an IDP to drive for up to 12 months, but the US is not on that list and the RSA says a valid licence from outside the EU/EEA can be used for up to a year. The RSA tells tourists to ask their rental company what it requires." },
      { k: "Payment card", v: "Rental companies usually want a credit card in the renter's name. Europcar Ireland accepts debit cards only if you also provide a credit card to cover the excess or buy its Partial Cover, and it does not accept prepaid cards or phone wallets such as Apple Pay." },
      { k: "Deposit", v: "Europcar Ireland takes the higher of the vehicle excess and the amount on your booking confirmation as a deposit, as a hold on a credit card or a charge on a debit card. Other companies hold the excess or a set deposit on a credit card." },
    ],
    costs: [
      { k: "Daily rate", v: "Prices depend on season, car group, transmission and how early you book, and the company terms give no standard rate. Compare the full price with the cover you actually want." },
      { k: "Young-driver surcharge", v: "Europcar Ireland charges 30 euro per day for drivers under 26 (March 2026 tariff)." },
      { k: "Additional driver", v: "Europcar Ireland lists 11.35 euro per day for an additional driver." },
      { k: "Airport fees", v: "Europcar's tariff lists an airport pickup surcharge that applies unless it is already in your rate. Check whether your quote includes it." },
      { k: "Tolls, fuel and one-way", v: "The M50 toll and a rental company administration fee are usually charged to your card after the rental. Cars usually go back with a full tank, or the company charges a refuelling fee plus fuel." },
    ],
    insurance: [
      { k: "CDW is usually included", v: "Europcar Ireland's standard price includes third-party liability plus Basic Cover (collision damage waiver and theft waiver), with an excess. Declining it is only possible in narrow cases." },
      { k: "High excess", v: "Europcar sets the excess per vehicle and says it is the most you pay for covered damage if you follow the terms. Excesses in Ireland are often high, so check the figure for your car." },
      { k: "Zero-excess cover", v: "Europcar's Premium Protection reduces the excess to zero for cars if you pay by credit card, but drivers under 26 cannot buy it. Super covers often exclude tyres, wheels, glass and keys, so check what yours includes." },
      { k: "Credit card and third-party cover", v: "Europcar Ireland does not accept excess cover bought from a third-party provider such as an online broker. You can still claim on it afterwards, but Europcar recovers the money from you first. Credit-card CDW is accepted only for US or Canadian residents with a US or Canadian card, a letter from the card issuer naming the Republic of Ireland dated within 21 days of pickup, and 5,000 euro available on the card." },
      { k: "Tyres, glass and other exclusions", v: "Europcar's terms treat tyre, windscreen and essential-item damage separately and list Protection Plus as the product covering them." },
    ],
    insuranceTip:
      "Before you decline any cover, ask the company in writing whether it accepts your credit card or third-party policy, and take the letter or booking confirmation with you.",
    roads: [
      { k: "Manual or automatic", v: "Budget Ireland says manual cars are the most common vehicles on Irish roads with excellent availability across its categories, and it suggests an automatic if you are not used to driving a manual. If you are not confident with gears on the left, book an automatic early." },
      { k: "Narrow rural roads", v: "The RSA says many local roads in Ireland are very narrow with no hard shoulder. On such roads, slow down and pull in at gaps for oncoming traffic." },
      { k: "Farm traffic and animals", v: "The RSA warns that you can meet tractors and animals on rural roads, so drive slowly and carefully." },
      { k: "Car size", v: "A smaller car is usually easier on narrow lanes, in villages and in car parks." },
      { k: "Electric cars", v: "Europcar Ireland lists a charging key fob fee for electric cars to use its charging network. Check the charging arrangements and the return charge level with your company." },
    ],
    rules: [
      { k: "Drive on the left", v: "The RSA states that traffic in Ireland drives on the left. Seat belts are compulsory in front and rear seats, and holding a mobile phone while driving is illegal." },
      { k: "Speed limits", v: "Limits are in km/h. Citizens Information lists defaults of 120 on motorways, 100 on national roads, 80 on regional roads, 60 on rural local roads and 50 in built-up areas, and many urban roads are being lowered to 30. Follow the posted sign." },
      { k: "Fines and cameras", v: "Citizens Information lists speeding as a 160 euro fine plus 3 penalty points, rising to 240 euro if paid late, and average-speed cameras on roads such as the M7 and the Dublin Port Tunnel. The RSA says foreign licence holders are covered by the penalty points system." },
      { k: "Drink driving", v: "The limit is 50 mg of alcohol per 100 ml of blood for most drivers and lower for learner, novice and professional drivers, per Citizens Information. The maximum penalty is a fine of 5,000 euro, six months in prison or both, plus disqualification." },
      { k: "M50 toll", v: "The M50 toll is barrier-free between Junction 6 and Junction 7. From 1 January 2026 a car pays 2.60 euro with a tag, 3.20 euro with a video account and 3.80 euro if unregistered (eFlow, TII). An unregistered car usually must be paid for by 8pm the next day at eflow.ie, by phone or at a Payzone outlet." },
      { k: "Other tolls", v: "TII's 2026 maximum car tolls are 2.30 euro on most toll roads such as the M1, M7 and M8, 1.80 euro on the M3 and 3.60 euro on the M4. The Dublin Port Tunnel charges more at peak times. Check TII for current rates." },
    ],
    pickup: [
      { k: "Dublin Airport desks", v: "Dublin Airport says rental desks are in the Arrivals Halls of Terminal 1 and Terminal 2. Avis says standard collections are at the Eastlands Car Hire Facility, reached by a complimentary shuttle from a pickup point at each terminal." },
      { k: "Returns", v: "Budget Ireland describes Eastlands as adjacent to the terminals, open daily from 05:00 to 01:30 with a complimentary shuttle. Europcar charges a fee if you return to the wrong terminal, so check your return point." },
    ],
    checklist: [
      { k: "Documents", v: "Bring your original driving licence, passport and a credit card in the renter's name. Add an IDP if your licence or rental company requires one." },
      { k: "Card and deposit", v: "Check the deposit amount and that the credit card has enough available limit. Europcar does not accept phone wallets or prepaid cards." },
      { k: "Cover and excess", v: "Confirm what is included, the excess, whether tyres, glass and keys are covered, and whether your own insurance is accepted." },
      { k: "Inspect the car", v: "Photograph all existing scratches and dents before leaving, and make sure they are on the rental agreement." },
      { k: "Tolls and cross-border", v: "Ask how the company handles the M50 toll and its admin fee, and tell them if you plan to enter Northern Ireland." },
      { k: "Fuel and return", v: "Confirm the fuel policy, the right fuel type and the return time and place, including the correct terminal at Dublin Airport." },
    ],
    booking: [
      { k: "When to book", v: "Book as early as you can for summer and for busy event weekends, and especially for automatics, which are fewer in the fleet." },
      { k: "Compare the total", v: "Compare prices that include insurance, airport fees and extras. Note which rate includes Basic Cover and what the excess is." },
      { k: "Northern Ireland and the UK", v: "Companies usually allow Northern Ireland but need advance notice and may charge. Europcar Ireland charges a cross-border fee and tracks vehicles electronically, and Avis says to pre-book cross-border cover." },
      { k: "Mainland Europe", v: "Europcar says vehicles may not leave the island of Ireland, with penalties. Check your own company's policy before you plan a ferry trip." },
    ],
    mistakes: [
      { k: "Assuming credit-card cover is enough", v: "Europcar Ireland accepts credit-card CDW only from US and Canadian residents with a letter and extra pre-authorisation. It does not accept third-party excess products." },
      { k: "Ignoring the M50 toll", v: "There is no barrier. An unpaid toll leads to penalties, and rental companies often add their own admin fee to the toll." },
      { k: "Only reading the headline price", v: "Airport fees, young-driver surcharges, additional drivers, cross-border and one-way fees can add up quickly." },
      { k: "Booking a car that is too big", v: "Narrow rural lanes and stone walls make a smaller car much easier." },
      { k: "Forgetting about farm traffic", v: "The RSA warns about tractors and animals on rural roads. Leave extra time and slow down." },
      { k: "Overlooking tyres and glass", v: "Many super covers exclude tyres, wheels, glass and keys, so check what yours includes." },
    ],
    faq: [
      {
        q: "Do I need an International Driving Permit to rent a car in Ireland?",
        a: "It depends on your licence and the company. Europcar Ireland says holders of UK, US, Canadian, Australian and EU licences do not need an IDP to rent from it. Citizens Information says visitors with a licence from outside the EU, the EEA and its list of recognised states need an IDP to drive for up to 12 months. Official pages differ on this point for licences such as the US, so confirm with your rental company before you travel.",
      },
      {
        q: "What is the minimum age to rent a car in Ireland?",
        a: "It varies by company. Europcar Ireland's minimum is 22, with a daily surcharge for drivers under 26. Check your company's terms.",
      },
      {
        q: "How do I pay the M50 toll in a rental car?",
        a: "The M50 is barrier-free, so cameras record the plate. An unregistered car costs 3.80 euro from 1 January 2026, payable by 8pm the next day at eflow.ie or at a Payzone outlet. Many rental companies pay it for you and charge your card, usually with an admin fee, so ask which applies to you.",
      },
      {
        q: "Can I rent a car in Ireland with a debit card?",
        a: "Sometimes. Europcar Ireland accepts a debit card only if you also provide a credit card for the excess or buy its Partial Cover, and it does not accept prepaid cards or phone wallets.",
      },
      {
        q: "Is car rental insurance included in Ireland?",
        a: "Basic CDW and theft cover are usually included, but with a high excess. Europcar Ireland says Premium Protection reduces it to zero for cars if you pay by credit card, but drivers under 26 cannot buy it. Check what is excluded, such as tyres, glass and keys.",
      },
    ],
    faqExtra: [
      {
        q: "How much does it cost to rent a car in Ireland?",
        a: "There is no standard price. The daily rate depends on the car group, transmission, season and how early you book. Compare the final price, including insurance, airport fees and extras such as a second driver (Europcar lists 11.35 euro per day) and young-driver surcharges (Europcar lists 30 euro per day).",
      },
      {
        q: "Can I take an Irish rental car to Northern Ireland?",
        a: "Usually yes, but tell the company in advance. Europcar Ireland charges a cross-border fee and tracks vehicles electronically, and Avis says to pre-book cross-border cover. Going without telling the company can breach the rental terms and leave you liable for damage, so check your company's wording.",
      },
    ],
    sources: [
      { label: "eFlow: M50 toll rate changes 2026", url: "https://www.eflow.ie/news/op/m50-toll-rate-changes-2026" },
      { label: "TII: toll charge increase from 1 January 2026", url: "https://www.tii.ie/en/news/press-releases/toll-charge-increase-from-1st-january-2026/" },
      { label: "Citizens Information: speed limits in Ireland", url: "https://www.citizensinformation.ie/en/travel-and-recreation/motoring/roads-and-safety/road-traffic-speed-limits-in-ireland/" },
      { label: "Citizens Information: foreign driving licences in Ireland", url: "https://www.citizensinformation.ie/en/travel-and-recreation/motoring/driver-licensing/exchanging-foreign-driving-permit/" },
      { label: "RSA: advice for tourists driving in Ireland", url: "https://www.rsa.ie/road-safety/road-users/tourists" },
      { label: "Citizens Information: drink driving offences", url: "https://www.citizensinformation.ie/en/travel-and-recreation/motoring/driving-offences/drink-driving-offences-in-ireland/" },
    ],
    sourcesExtra: [
      { label: "eFlow: tourist and rental information", url: "https://www.eflow.ie/tourist-and-rental-info" },
      { label: "eFlow: how the M50 toll works", url: "https://www.eflow.ie/how-it-works" },
      { label: "Europcar Ireland: terms and tariff guide (March 2026)", url: "https://www.carhire.ie/booking/terms/EUROPCAR%20IRELAND%20Terms%20&%20Conditions%20and%20Tariff%20Guide%20(March%202026).pdf" },
      { label: "Dublin Airport: car rental", url: "https://www.dublinairport.com/to-from-the-airport/car-rental" },
      { label: "Avis: Dublin Airport Terminal 1 and 2", url: "https://www.avis.ie/CarHire/Europe/Ireland/Dublin/Dublin-Airport-Terminal-1-2" },
      { label: "Budget Ireland: Dublin Airport Eastlands returns", url: "https://www.budget.ie/dublin-airport-eastlands/" },
      { label: "Budget Ireland: manual vs automatic", url: "https://www.budget.ie/automatic_or_manual.php" },
    ],
  },
  {
    slug: "scotland",
    name: "Scotland",
    status: "draft",
    verified: "2026-10-04",
    metaTitle: "Renting a Car in Scotland: Rules, Costs and Tips",
    metaDescription:
      "Renting a car in Scotland from Edinburgh: licence and age rules, insurance, single-track roads, Edinburgh LEZ, ferries and the NC500.",
    h1: "Renting a car in Scotland: what you need to know",
    lead:
      "Scotland is easiest to see by car, but single-track roads, remote fuel stops, island ferries and Edinburgh's Low Emission Zone all affect which car you pick and how you drive it. This guide covers the points that matter when you collect a car at Edinburgh Airport.",
    airports: ["edinburgh"],
    esimSlug: "united-kingdom",
    costsNote:
      "Prices swing a lot between August and winter, and fuel prices are unusually high in October 2026, so compare the full cost rather than the headline daily rate.",
    requirements: [
      { k: "Driving licence", v: "Visitors with a valid licence from outside the UK can drive in Great Britain for up to 12 months from their last entry. Rental companies still check the licence and your passport, and often want it held for at least one year (Sixt and Hertz both state one year)." },
      { k: "International permit (IDP)", v: "UK law lets visitors drive on a valid licence from their home country for 12 months, so an IDP is not a legal requirement. Rental companies set their own rules: Sixt says licences in non-Roman alphabets must come with an IDP, and Hertz asks for any necessary international permits. If your licence is not in English, carry an IDP." },
      { k: "Minimum age", v: "Varies by company. Hertz UK states a minimum of 21, and a young-driver surcharge applies to younger drivers, with the amount varying by vehicle and location. Enterprise UK states all drivers must be 25 or older, and 30 or older for full-size MPVs, premium cars and 4x4s. Arnold Clark says age can limit the car size you can hire." },
      { k: "Card and deposit", v: "You usually need a payment card in the main driver's name. Sixt takes a credit card hold of £300 for standard groups, rising to £2,000 for sports and luxury cars, or a debit card deposit that is taken from your account straight away." },
      { k: "Documents at the desk", v: "Bring your passport and a physical licence, because Sixt states digital licences are not accepted. UK residents also need a DVLA licence check code, and Arnold Clark asks non-UK customers for a boarding pass, flight ticket or stamped passport." },
    ],
    costs: [
      { k: "Daily rate and season", v: "Rates vary by season, car class and booking date, and published averages disagree. August and the Edinburgh festival period are the busiest and priciest, so compare live quotes for your dates." },
      { k: "Fuel", v: "The RAC reported on 2 October 2026 an average of 174.71p per litre for petrol and 200.01p for diesel, a record for diesel. Remote Highland stations are often dearer than the UK average." },
      { k: "Deposit hold", v: "Sixt's terms (09/2026) list a card approval of £300 for most car groups and up to £2,000 for sports and luxury cars. The hold is released after return, but it reduces your available credit during the trip." },
      { k: "One-way fees", v: "Arnold Clark says one-way charges start from £50 and depend on vehicle size, not distance. Enterprise says the fee varies by location, car category and date, so check the quote for Edinburgh to Inverness or Glasgow before you book." },
      { k: "Parking in cities", v: "City of Edinburgh Council on-street tariffs in the main controlled zones run from £4.20 per hour in the extended zones to £9.00 per hour in the central zones (page dated April 2025)." },
      { k: "Fines and admin fees", v: "You pay any parking or traffic fine plus the rental company's handling fee. Sixt's terms set an administration fee of £40 for each fine it handles." },
    ],
    insurance: [
      { k: "CDW and excess", v: "Collision damage waiver limits what you pay for damage to the car, but you still owe an excess per incident. Kayak puts typical excess at £500 to £3,000, depending on company and car." },
      { k: "Super cover at the desk", v: "Desk products usually reduce or remove the excess. Sixt says its protection can reduce the excess to between £0 and £150 depending on the product, your age and the car group." },
      { k: "Third-party excess policies", v: "Separate excess policies from independent insurers usually work on a pay-first basis: you pay the rental company's excess, then claim the money back with documents. The rental company will still hold its deposit." },
      { k: "Tyres, glass and underbody", v: "Standard waivers usually exclude tyres, windscreen and windows, underbody and roof, and keys. Sixt sells a separate tyre and glass protection that reduces your liability to £0." },
      { k: "Single-track roads and wildlife", v: "Scuffs from passing places and deer or sheep strikes are the usual Highland claims. Sixt's terms bar driving through spaces too narrow for the car, and Enterprise and Sixt both bar off-road driving, including unpaved surfaces." },
    ],
    insuranceTip:
      "Before you pay for any extra, read which parts of the car the excess covers and whether tyres, glass and underbody are included.",
    roads: [
      { k: "Which car to choose", v: "A compact or mid-size car is usually easier on narrow Highland roads and in Edinburgh and Glasgow parking. SUVs are popular for Glencoe, Skye and the NC500 for luggage space and comfort, as Europcar notes. Larger vehicles are often advised to avoid the B869 Drumbeg Road and the Bealach na Ba." },
      { k: "Manual or automatic", v: "Rental fleets in Scotland usually include both, but availability varies by location. Arnold Clark says most of its categories come in both, so reserve an automatic at booking and confirm it on the voucher." },
      { k: "Single-track roads", v: "These roads are wide enough for one vehicle and have passing places. The Highway Code (Rule 155) says to pull into a passing place on your left, or wait opposite one on your right, when meeting or being overtaken, and Rule 156 says not to park in passing places." },
      { k: "North Coast 500", v: "The official NC500 route is 516 miles and the official advice is to allow at least 5 days, ideally 7 or more. Roads are winding and often take longer than map apps suggest, phone signal can be patchy, and VisitScotland says there are fewer fuel stations in the countryside, so keep the tank topped up." },
      { k: "Highland weather and winter", v: "VisitScotland says the coldest months are December to February. The NC500 winter guide warns of black ice and snow on higher ground and shorter daylight, and says the Bealach na Ba can be impassable in winter. Check Traffic Scotland and the forecast before long drives." },
    ],
    rules: [
      { k: "Side of the road and speed limits", v: "Drive on the left. For cars the national limits are 30 mph in built-up areas, 60 mph on single carriageways and 70 mph on dual carriageways and motorways. VisitScotland notes that 20 mph limits are increasingly common in city centres." },
      { k: "Lower drink-drive limit", v: "Scotland's limit is 50 mg of alcohol per 100 ml of blood. England, Wales and Northern Ireland use 80 mg, so a drink that is fine in England can break the law in Scotland. GOV.UK notes it is impossible to say how many drinks equals the limit." },
      { k: "Edinburgh Low Emission Zone", v: "Fines have been issued since 1 June 2024, and the zone runs 24 hours a day, every day. Petrol cars need Euro 4 and diesel cars need Euro 6. The council says vehicles registered outside the UK must also meet the standard unless exempt, and checking is the driver's responsibility." },
      { k: "LEZ penalty", v: "A non-compliant car gets a penalty of £60 for the first offence, then £120, £240 and £480, and the council reduces penalties by 50% if paid within 14 days. A hire company will usually pass the fine on with its own admin fee." },
      { k: "Tolls", v: "Scotland has no road tolls on its main bridges: the Abolition of Bridge Tolls (Scotland) Act 2008 ended tolls on the Forth and Tay road bridges. The Edinburgh LEZ is a penalty scheme for non-compliant vehicles, not a daily charge." },
    ],
    pickup: [
      { k: "Where the desks are", v: "Edinburgh Airport lists eight providers in its Car Rental Centre: Alamo, Avis, Budget, Enterprise, Europcar, Hertz, National and Sixt. It is a short walk from the terminal along a covered walkway next to the multi-storey car park, so check your confirmation for where to go." },
      { k: "Getting to the city", v: "The airport is about 20 minutes by car from the city centre and close to the M8 and M9. Edinburgh Trams also runs from the airport, so if your first night is in the centre you can skip the car until you leave the city." },
    ],
    checklist: [
      { k: "Licence, passport and card", v: "Bring a physical licence, passport and a card in the main driver's name. Add an IDP if your licence is not in English or uses a non-Roman alphabet." },
      { k: "Photograph the car", v: "Record every scratch, tyre, windscreen chip and alloy mark before leaving the car park. Highland roads and narrow passing places make small marks common." },
      { k: "Confirm the excess", v: "Ask the exact excess and what is excluded (tyres, glass, underbody, roof, keys). Check whether your own excess policy needs you to pay the desk first." },
      { k: "Check the LEZ status", v: "Ask the desk to confirm the car meets Euro 4 petrol or Euro 6 diesel if you will enter central Edinburgh. The driver is responsible." },
      { k: "Plan fuel for remote areas", v: "Fill up whenever you pass a station on the north and west coasts and do not let the tank drop low. Check your fuel type and the full-to-full policy." },
      { k: "Ferry and island plans", v: "If you plan to take the car to an island, ask the rental company in writing, and book a CalMac vehicle space early." },
    ],
    booking: [
      { k: "Summer and August", v: "Summer and the Edinburgh festivals in August are the busiest and most expensive period. Book as early as you can for those dates, especially for automatics and larger cars." },
      { k: "Automatics", v: "Fleets are mostly mixed, but availability of automatics varies by location. If you need one, reserve it at booking and confirm it on the voucher." },
      { k: "Shoulder season and winter", v: "Prices are usually lower outside summer, but winter brings snow, short daylight and some closed attractions on the NC500. Allow extra time and check conditions." },
      { k: "Ferries and one-way trips", v: "CalMac advises booking vehicle space in advance. One-way trips need a quote that includes the drop-off fee." },
    ],
    mistakes: [
      { k: "Driving after one drink", v: "Scotland's limit is lower than England's, 50 mg per 100 ml of blood, and one drink can put some drivers over." },
      { k: "Underestimating the NC500", v: "516 miles on winding roads takes days, not hours. The official guidance is at least 5 days." },
      { k: "Running low on fuel", v: "Stations are fewer in the countryside, so top up whenever you can." },
      { k: "Parking in passing places", v: "The Highway Code says not to park in them, and it blocks traffic on roads where there is no room to pass." },
      { k: "Assuming the excess covers everything", v: "Tyres, glass and underbody are usually excluded unless you buy extra cover, and Highland single-track roads make these claims more likely." },
      { k: "Ignoring the LEZ", v: "The LEZ is enforced by cameras and you remain responsible, even in a rental. Fines come with a rental company admin fee on top." },
    ],
    faq: [
      {
        q: "Do I need an International Driving Permit to drive in Scotland?",
        a: "UK law lets visitors drive on a valid licence from their home country for up to 12 months, so an IDP is not required by law. Rental companies set their own rules: Sixt says licences in non-Roman alphabets must come with an IDP, and Hertz asks for any necessary international permits. If your licence is not in English, carry an IDP.",
      },
      {
        q: "What is the minimum age to rent a car in Scotland?",
        a: "It depends on the company. Hertz states 21 with a surcharge for younger drivers, and Enterprise states 25 for most cars and 30 for full-size MPVs, premium cars and 4x4s. Most companies also want the licence held for at least one year.",
      },
      {
        q: "How do single-track roads work?",
        a: "They are wide enough for one vehicle with passing places. Pull into a passing place on your left, or wait opposite one on your right, to let oncoming or faster traffic pass, and do not park in them.",
      },
      {
        q: "Do I have to pay the Edinburgh Low Emission Zone charge in a rental car?",
        a: "There is no daily charge. Fines are issued only if the car is non-compliant, which means petrol below Euro 4 or diesel below Euro 6. The first penalty is £60, with a 50% reduction if paid within 14 days, and the council says the driver is responsible for compliance.",
      },
      {
        q: "Can I get an automatic car in Scotland?",
        a: "Yes, most major companies offer automatics, for example Arnold Clark in most categories and Europcar at Edinburgh Airport. Availability varies by location and date, so reserve one at booking and confirm it on your voucher.",
      },
    ],
    faqExtra: [
      {
        q: "How much does it cost to rent a car in Scotland?",
        a: "Daily rates vary by season and company, with August the busiest and priciest. Add the deposit hold, any young-driver surcharge, one-way fees (from £50 at Arnold Clark) and fuel, which averaged 174.71p per litre for petrol and 200.01p for diesel in early October 2026 according to the RAC.",
      },
      {
        q: "Can I take a rental car on the ferry to the Scottish islands?",
        a: "Often yes, but check with the company first, because policies differ. CalMac advises booking vehicle space in advance, and you can book without a registration by ticking that you are hiring a vehicle and updating it later.",
      },
    ],
    sources: [
      { label: "City of Edinburgh Council: Low Emission Zone", url: "https://www.edinburgh.gov.uk/low-emission-zone" },
      { label: "City of Edinburgh Council: LEZ penalty charges", url: "https://www.edinburgh.gov.uk/low-emission-zone/lez-penalty-charges/3" },
      { label: "GOV.UK: the drink drive limit", url: "https://www.gov.uk/drink-drive-limit" },
      { label: "The Highway Code: rules 103 to 158", url: "https://www.gov.uk/guidance/the-highway-code/general-rules-techniques-and-advice-for-all-drivers-and-riders-103-to-158" },
      { label: "Edinburgh Airport: car hire", url: "https://www.edinburghairport.com/transport-links/car-hire" },
      { label: "VisitScotland: driving in Scotland", url: "https://www.visitscotland.com/travel-planning/driving" },
    ],
    sourcesExtra: [
      { label: "North Coast 500: planning your NC500 adventure", url: "https://www.northcoast500.com/top-tips-hitting-route/planning-your-north-coast-500-adventure/" },
      { label: "North Coast 500: road safety", url: "https://www.northcoast500.com/top-tips-hitting-route/road-safety/" },
      { label: "North Coast 500: winter travel tips", url: "https://www.northcoast500.com/see-do/winter/top-tips-for-travelling-the-north-coast-500-in-winter/" },
      { label: "CalMac: vehicle reservations", url: "https://www.calmac.co.uk/en-gb/faqs/tickets-and-reservations/i-have-a-vehicle-do-i-need-to-make-a-reservation/" },
      { label: "CalMac: booking a hire car without the car details", url: "https://www.calmac.co.uk/en-gb/faqs/tickets-and-reservations/i-am-travelling-in-a-hire-car-and-dont-have-the-car-details-can-i-book-online/" },
      { label: "Sixt UK: rental terms 09/2026", url: "https://www.sixt.co.uk/shared/t-c/sixt_GB_en.pdf" },
      { label: "RAC: diesel tops £2 a litre (2 October 2026)", url: "https://media.rac.co.uk/diesel-tops-2-a-litre-for-first-time-ever" },
    ],
  },
  {
    slug: "france",
    name: "France",
    status: "draft",
    verified: "2026-10-04",
    metaTitle: "Renting a Car in France: Rules, Costs and Tolls",
    metaDescription:
      "What you need to rent a car in France: licence, deposit, insurance, tolls, Crit'Air and low-emission zones, speed limits and Paris CDG pickup.",
    h1: "Renting a car in France: what you need to know",
    lead:
      "Renting in France is straightforward if you sort out four things before you go: a card in the driver's name for the deposit, how tolls and fines reach you, whether your route enters a low-emission zone, and which equipment and limits apply.",
    airports: ["paris-cdg"],
    esimSlug: "france",
    costsNote:
      "These are charges and rules taken from company terms and official pages, not price quotes, because daily rates change with season, car and booking date.",
    requirements: [
      { k: "Minimum age", v: "Avis France says the minimum age is 18, with a narrower choice of categories under 25. Other companies set higher minimums and charge a young-driver fee, so enter the real driver age when you book." },
      { k: "Licence held and ID", v: "Hertz and Avis France both ask for a full licence held for at least one year. Hertz also asks for a passport or ID card and says photocopies are not accepted." },
      { k: "Foreign licences and IDP", v: "Per service-public.gouv.fr, an EU or EEA licence is valid in France. A non-EU licence on a short stay must be in French or come with an International Driving Permit or an official translation, and UK licences are exempt from the IDP requirement." },
      { k: "Payment card and deposit", v: "Avis France requires a primary credit card in the renter's name. Hertz says a major credit card in the driver's name is needed for the deposit hold even if the rental was prepaid, and release of the hold can take up to 30 days." },
      { k: "Additional drivers", v: "Hertz terms say your cover stops applying if the person driving was not authorised as the main or an additional driver. Register everyone who will drive at the desk." },
    ],
    costs: [
      { k: "Young-driver fee", v: "Avis and Hertz France both charge a per-day fee for younger drivers. Avis says the fee is already included in the price shown once you enter the driver's age, so compare final totals." },
      { k: "Deposit hold on your card", v: "Hertz France usually holds the amount due at pickup plus the price of a full tank, with an extra amount if you did not buy its SuperCover. Other companies use different formulas, so check the amount on your contract and make sure your card limit covers it." },
      { k: "Fuel", v: "Hertz says fuel is not included and the car is handed over with the fuel level shown on the contract. If you return it with less, Hertz charges the fuel price plus a service fee, and a prepaid full tank is priced above local pumps. Refuelling yourself avoids the extra charge." },
      { k: "Tolls", v: "Hertz terms say the renter pays all tolls during the rental. Service-public.gouv.fr says motorway toll rates rose by an average of 0.86% on 1 February 2026, with increases between 0.62% and 1.21% by network." },
      { k: "Fines and handling fees", v: "The renter pays any fine or parking charge incurred during the rental, and Hertz may add a fine-handling fee whose amount is set in the contract." },
      { k: "Late return", v: "Hertz bills one extra rental day for each started 24-hour period after the agreed return time, with a 29-minute grace period. It may also add a late-return fee." },
    ],
    insurance: [
      { k: "Third-party liability", v: "Compulsory liability insurance is included in the rental price. Service-public.gouv.fr notes that it covers damage to third parties only, not injury to you, damage to the rental car or theft." },
      { k: "Collision cover (CDW) and excess", v: "Hertz says collision damage cover is often already included and limits your liability to the excess shown on your contract for each incident other than theft. The excess is shown at booking and on the rental contract, and can be reduced or removed with an option." },
      { k: "Theft cover and SuperCover", v: "Theft protection also carries an excess. Hertz sells SuperCover and glass and tyre cover as optional products that can reduce or remove the excess." },
      { k: "Exclusions to know", v: "Hertz says its cover can be void in cases of gross negligence, with examples such as hitting low barriers or height limits, driving on a beach or flooded road, filling the wrong fuel, and ignoring a warning light. Hertz's damage list also counts any glass chip or crack and any tyre damage as chargeable." },
      { k: "If you rely on a card or other policy", v: "Ask the desk how a claim works before you decline their cover. Hertz deducts damage from the card pre-authorisation and may debit your card if damage exceeds it, so you usually pay first and reclaim later." },
    ],
    insuranceTip:
      "Check the vehicle condition sheet is filled in and photograph every side of the car before you leave the car park, because new damage found on return is charged to you.",
    roads: [
      { k: "Manual or automatic", v: "If you are new to driving on the right, consider an automatic. If you need one, check that the booking says automatic, since a car category on its own may not guarantee it." },
      { k: "Car size", v: "A compact car is usually easier in Paris and old town centres with narrow streets and tight car parks, and Hertz counts scratches and dents over 10 mm as chargeable damage." },
      { k: "Low-emission zones", v: "Crit'Air 3 covers older cars, roughly diesel before 2011 and petrol before 2006 according to the Metropole du Grand Paris. A recent rental is usually in a better class, but check the sticker on the windscreen." },
      { k: "Petrol or diesel", v: "Check the fuel type on the fuel flap or in the car before the first fill. Hertz terms list filling the wrong fuel as gross negligence that can void your cover." },
    ],
    rules: [
      { k: "Speed limits", v: "Service-public.gouv.fr lists 50 km/h in built-up areas, 80 on two-way roads, 90 on multi-lane roads, 110 on dual carriageways and 130 on motorways. In rain the motorway limit drops to 110, and in visibility under 50 m the limit is 50 on all roads. Speeding fines start at 68 euros, and radar detectors are banned. Signs override the general limits." },
      { k: "Camera fines and rental companies", v: "A rental company is the registered owner of the car, so the notice usually reaches you through the company, which adds its handling fee. For foreign drivers who do not pay, service-public.gouv.fr says a deposit can be demanded and the vehicle can be impounded." },
      { k: "Alcohol", v: "The limit is 0.5 g/l of blood, and 0.2 g/l for probationary licence holders. Between 0.5 and 0.8 g/l the fixed fine is usually 135 euros, and from 0.8 g/l it is a criminal offence." },
      { k: "Mandatory equipment", v: "A hi-vis vest and a warning triangle must be on board. Service-public.gouv.fr says not showing them at a check can cost up to 38 euros, while failing to use them when stopped on the road is fined at a usual 135 euros. It also states that a breathalyser is not mandatory. From 1 November to 31 March, winter tyres or chains are required in mountain municipalities where signs say so." },
      { k: "Crit'Air and low-emission zones", v: "A Crit'Air sticker is required in low-emission zones and during pollution episodes. Paris restricts Crit'Air 3, 4, 5 and unclassified cars inside the A86 on weekdays 8:00 to 20:00, but says controls are informational with no fines until 31 December 2026. Lyon has banned classes 3, 4, 5 and unclassified since 1 January 2025, so check each city's page." },
      { k: "Tolls", v: "Hertz says many motorways are tolled and can be paid in euros or by card, and the renter pays all tolls. Free-flow sections have no barrier and must be paid within 72 hours online, at Nirio tobacconists or through a toll subscription, or you risk a flat penalty plus the toll. Service-public.gouv.fr cites a 90 euro fine, reduced to 10 euros if paid within 15 days." },
    ],
    pickup: [
      { k: "Counters at Paris CDG", v: "Avis lists counters at Terminal 1 on the arrivals level, at Terminals 2A to 2D on the Service Area level and at 2E/2F on the arrivals level, with returns possible 24 hours a day. Other companies use other spots, so check your voucher." },
      { k: "Leaving the airport", v: "Avis says Paris is about 40 minutes by car from CDG and Disneyland Paris about 30 minutes. If you plan to drive into central Paris, remember the A86 low-emission zone and check the sticker class before you go." },
    ],
    checklist: [
      { k: "Documents", v: "Bring your licence, an IDP or official translation if you hold a non-EU licence not in French, your passport or ID, and a credit card in the main driver's name." },
      { k: "Deposit", v: "Read the deposit amount on the contract and make sure your card limit covers it." },
      { k: "Damage sheet", v: "Check every existing mark is on the vehicle condition sheet and take dated photos of all sides, the wheels and the windscreen." },
      { k: "Sticker and equipment", v: "Look for the Crit'Air sticker on the windscreen and check the hi-vis vest and warning triangle are in the car." },
      { k: "Fuel", v: "Confirm the fuel type and the fuel policy, and note the fuel level on the contract." },
      { k: "Return time", v: "Write down the agreed return time and any grace period, since late hours are billed as extra days." },
    ],
    booking: [
      { k: "Enter the real driver age", v: "Avis says the young-driver fee is included in the displayed price once you enter the birth date, which avoids a surprise at the desk." },
      { k: "Compare the excess", v: "Hertz shows the excess at booking and on the contract. Compare the excess and the deposit as well as the daily rate." },
      { k: "Use a credit card", v: "Book and pick up with a credit card in the driver's name. Hertz says prepaying does not remove the deposit hold." },
      { k: "Tell the company about border trips", v: "Hertz requires prior approval for driving abroad and charges a cross-border fee, so mention any trip outside France when you book." },
    ],
    mistakes: [
      { k: "Card problems", v: "Arriving with only a debit card or a card in another person's name can mean the car is refused. Avis requires a primary credit card in the renter's name." },
      { k: "Wrong age at booking", v: "Booking with the wrong birth date can leave a fee unpaid until the desk, where it is added to your bill." },
      { k: "Wrong fuel", v: "Hertz terms list filling the wrong fuel or contaminating the tank as gross negligence that can void your cover." },
      { k: "Low barriers and car parks", v: "Hertz names hitting low barriers or height limits as an example of gross negligence. Check the height limit on car park entrances." },
      { k: "Missing a free-flow toll", v: "If you do not pay within 72 hours, the notice goes to the registered owner, which is the rental company, and then comes back to you with a penalty and the company's handling fee." },
      { k: "Crossing a border unannounced", v: "Hertz extends cover to another country only with its approval and charges a cross-border fee. In banned countries, cover does not apply and a contractual penalty is charged." },
    ],
    faq: [
      {
        q: "Do I need an International Driving Permit to rent a car in France?",
        a: "It depends on your licence. Service-public.gouv.fr says an EU or EEA licence is valid in France. A non-EU licence on a short stay must be in French or come with an IDP or an official translation, and UK licences are exempt from the IDP requirement. Check your company's terms too.",
      },
      {
        q: "What is the minimum age to rent a car in France?",
        a: "Avis France says 18, with a one-year licence requirement and a narrower choice of categories under 25. Other companies set higher limits and charge young-driver fees, so enter the real age when booking.",
      },
      {
        q: "How do tolls work for rental cars in France?",
        a: "Many motorways are tolled, and Hertz says tolls can be paid in euros or by card, with the renter paying all tolls. On free-flow sections with no barrier you must pay within 72 hours online at the operator site, at Nirio tobacconists or via a toll subscription. If not, a notice goes to the registered owner, which is the rental company, and a penalty applies.",
      },
      {
        q: "Do I need a Crit'Air sticker in a rental car?",
        a: "A Crit'Air sticker is required in French low-emission zones and during pollution episodes. Rental cars usually carry one, but check the windscreen and tell the desk if it is missing. Paris inside the A86 restricts Crit'Air 3, 4, 5 and unclassified cars on weekdays 8:00 to 20:00 with no fines until 31 December 2026.",
      },
      {
        q: "Can I rent a car in France with a debit card?",
        a: "Usually you need a credit card in the main driver's name. Avis requires a primary credit card in the renter's name, and Hertz's pages differ on debit cards, so check your company's terms before you travel.",
      },
    ],
    faqExtra: [
      {
        q: "How much does it cost to rent a car in France?",
        a: "Daily rates change with season, car and booking date, so compare live prices. Beyond the daily rate, plan for a young-driver fee under 25, the deposit hold, tolls, fuel, a cross-border fee if you leave France, and handling fees on any fine.",
      },
      {
        q: "Can I take a French rental car to Spain, Italy or Switzerland?",
        a: "Often yes, but you must ask first. Hertz France terms say you may drive only in the rental country unless Hertz approves, a cross-border fee applies, and cover extends only to approved countries. Driving into a banned country voids cover and carries a contractual penalty. Confirm with your own company.",
      },
    ],
    sources: [
      { label: "Service-Public: mandatory equipment in the car", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F19459?lang=en" },
      { label: "Service-Public: speed limits and speeding fines", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F19460" },
      { label: "Service-Public: Crit'Air sticker", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33371?lang=en" },
      { label: "Ville de Paris: low-emission zone", url: "https://www.paris.fr/pages/la-zone-a-faibles-emissions-zfe-pour-lutter-contre-la-pollution-de-l-air-16799" },
      { label: "Hertz France: general rental terms", url: "https://images.hertz.com/pdfs/RT_FULL_FR_FR.pdf" },
      { label: "Avis France: Paris Charles de Gaulle counters", url: "https://www.avis.fr/services-avis/location-voiture/europe/france/paris/aeroport-de-paris-charles-de-gaulle" },
    ],
    sourcesExtra: [
      { label: "Service-Public: driving in France on a non-EU licence", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1459?lang=en" },
      { label: "Service-Public: alcohol and driving", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2881?lang=en" },
      { label: "Service-Public: rental car insurance", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F23420?lang=en" },
      { label: "Service-Public: fines for foreign drivers", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F414" },
      { label: "Service-Public: free-flow tolling", url: "https://www.service-public.gouv.fr/particuliers/actualites/A18559?lang=en" },
      { label: "Service-Public: motorway toll rates from 1 February 2026", url: "https://www.service-public.gouv.fr/particuliers/actualites/A16201?lang=en" },
      { label: "Metropole de Lyon: low-emission zone", url: "https://www.grandlyon.com/mes-services-au-quotidien/se-deplacer/circuler-dans-la-zone-a-faibles-emissions-zfe" },
      { label: "Hertz France: booking requirements", url: "https://www.hertz.fr/p/guide-vehicule/reserver-votre-vehicule" },
    ],
  },
  {
    slug: "spain",
    name: "Spain",
    status: "draft",
    verified: "2026-10-04",
    metaTitle: "Renting a Car in Spain: Licence, Tolls, ZBE, Deposits",
    metaDescription:
      "What to know before renting a car in Spain in 2026: licence and IDP, age, card and deposit, insurance, tolls, low-emission zones and airport pickup.",
    h1: "Renting a car in Spain: what you need to know",
    lead:
      "Renting a car in Spain is simple if your licence, card and cover are in order, but deposits, toll roads and low-emission zones catch many visitors out. This guide covers what rental companies usually ask for and how the rules look in October 2026.",
    airports: ["malaga", "alicante", "palma-mallorca", "tenerife-south", "gran-canaria", "barcelona", "madrid"],
    esimSlug: "spain",
    costsNote:
      "Rental companies do not publish one standard rate and company figures change, so always check the total on your booking.",
    requirements: [
      { k: "Minimum age", v: "Varies by company and car group. Avis Spain says 21, and Hertz Spain says the standard minimum is 25 with some cars available from a lower age with a young-driver surcharge and premium cars from 28 or 30." },
      { k: "Driving licence", v: "Hertz, Avis and Europcar usually ask for a full licence held for at least one year. Avis says digital licences are not accepted." },
      { k: "International permit (IDP)", v: "GOV.UK says UK photocard holders do not need an IDP in Spain, but paper licences and licences issued in Gibraltar or the Crown Dependencies may. The DGT advises visitors from outside the EU and EEA to carry an international permit, and accepts a licence in Spanish or with an official translation. Hertz recommends an IDP for non-EU renters, so US drivers should carry one." },
      { k: "Payment card", v: "Avis Spain accepts Visa and MasterCard credit and debit cards in the renter's own name, but not Maestro, pre-paid or digital cards, and not cash. Hertz Spain's terms mention a credit or debit card for the deposit, while Europcar's terms list credit cards, so check the card rules for your booking." },
      { k: "Deposit", v: "Hertz Spain's terms say the hold is the amounts due at pickup plus a full tank of fuel, and more if you do not buy SuperCover, and release can take up to 30 days. Avis Spain says the pre-authorisation is the rental price plus 200 euros, and Europcar's Spain deposit policy lowers the deposit to 300 euros with a protection that reduces the excess and to 100 euros with one that reduces it to zero." },
    ],
    costs: [
      { k: "Daily rate", v: "Rates vary widely by season, airport, car group and booking date. August and school holidays are usually the most expensive, and January the cheapest, so compare live quotes for your dates." },
      { k: "Fuel", v: "Fuel is not included in the rental rate. Hertz says its prepaid fuel option usually costs more than local stations and gives no refund for unused fuel, and that returning the car short means Hertz refuels it at a higher price. Check current pump prices before you set a budget." },
      { k: "Tolls", v: "Most Spanish motorways are free, but several AP motorways are still tolled in 2026, including the AP-7 from Malaga to Guadiaro and the AP-7 from Alicante to Cartagena. Press reports say toll rates rose on 1 January 2026, and some toll concessions are ending, so check the operator for current rates." },
      { k: "Extras and fees", v: "Young-driver fees, additional drivers, one-way fees and cross-border fees are usually extra and differ by company. Avis Spain lists a one-time cross-border fee and domestic one-way fees, and Hertz lists its own cross-border fee, so read the fee table for your booking." },
      { k: "Usually not in the headline price", v: "Fuel, tolls, parking, fines, young and additional driver fees, one-way and cross-border fees, and optional cover such as SuperCover or glass and tyre cover are usually extra. Hertz Spain's terms say fines and similar charges are billed to you." },
      { k: "Fine admin fees", v: "Companies often add an administration fee when they pass a traffic fine to you. Hertz's terms list a fines administration charge, and the Olive Press reported in August 2026 that Spain's consumer ministry fined Avis 1 million euros over such fees, so check your contract." },
    ],
    insurance: [
      { k: "What is included", v: "Hertz's Spain terms say the rate includes third-party liability insurance. Collision damage waiver and theft protection reduce what you owe for the car to an excess, shown during booking and on the rental agreement." },
      { k: "The excess", v: "Hertz says the excess applies to each incident of damage, so two separate scrapes can mean two excess charges. The amount differs by company and car, so read it on the booking summary before paying." },
      { k: "Super cover and zero excess", v: "Optional products such as Hertz SuperCover reduce or remove the excess, and Hertz asks for a larger hold if you decline it. Europcar's Spain deposit policy lowers its deposit to 100 euros when protection takes the excess to zero." },
      { k: "Excess insurance from third parties", v: "Hertz says that if you buy excess insurance from a third party you stay liable to Hertz for the excess and must claim it back from your insurer. Expect the rental company to hold your card for the excess amount in that case." },
      { k: "Common exclusions", v: "Hertz sells glass and tyre cover separately and lists undercarriage damage on bad roads, wrong fuel, lost keys, driving into low barriers and driving on a flat tyre as problem areas. Europcar's terms exclude underbody and roof damage from striking bridges or tunnels and say you pay to replace damaged tyres." },
    ],
    insuranceTip:
      "Before buying any extra cover, check in writing whether glass, tyres, undercarriage, keys and wrong-fuel damage are included, because these are the usual gaps.",
    roads: [
      { k: "Manual or automatic", v: "Manual cars are usually the default in Spanish rental fleets, and automatics are fewer and usually cost more, so select automatic explicitly when you book." },
      { k: "Car size", v: "A small or compact car is usually easier in old town streets, car parks and narrow village roads. Take a larger car only if you need the luggage space or will drive long motorway distances." },
      { k: "Islands and mainland", v: "Hertz forbids driving a car rented on the mainland to the Balearic or Canary Islands, Ceuta or Melilla, and the reverse, without its permission, and Avis Spain lists islands as prohibited." },
      { k: "Mountain and rural roads", v: "Spain has many winding mountain roads, and damage to the underside from bad roads is a typical exclusion in Hertz and Europcar terms. Skip unpaved tracks in a rental car." },
      { k: "Low-emission zones and the car", v: "The environmental label decides where you may drive in zones such as Madrid and Barcelona. Ask the desk which label your car has before you head into a city centre." },
    ],
    rules: [
      { k: "Side of the road", v: "Traffic drives on the right and overtakes on the left. Carry your licence, passport and rental documents in the car." },
      { k: "Speed limits", v: "DGT lists 120 km/h for cars on motorways and dual carriageways and 90 km/h on conventional roads, and some roads are signed for different limits. Since 11 May 2021 urban limits are 20 km/h on streets with no kerb height, 30 km/h on streets with one lane per direction and 50 km/h on streets with two or more lanes per direction." },
      { k: "Alcohol limit", v: "DGT gives a general limit of 0.5 g/l of alcohol in blood and 0.3 g/l for novice drivers and professional drivers. The safest approach is not to drink if you are driving." },
      { k: "Tolls", v: "AP motorways are the tolled ones, and you can pay by cash, card or the Via-T electronic tag. Via-T lanes need a device in the car, so use the manned or card lanes if your car has no tag." },
      { k: "Low-emission zones (ZBE)", v: "Madrid's ZBE covers the whole municipality (not the M-40, M-45 and M-50), bans passenger cars with no environmental label, applies to foreign-registered cars too, and fines 200 euros or 100 euros with early payment, according to the city. Barcelona's AMB says foreign-plated cars must register to drive in its ZBE, and other cities also run zones, so check the city rules before driving in." },
      { k: "Equipment and fines", v: "Since 1 January 2026 the connected V16 beacon is the only legal pre-signalling device in Spain and replaces warning triangles, according to the DGT. Ask the desk whether your rental car carries one. Fines are billed to you: Hertz says it may pass your details to the authority or pay the fine and recover it from you with an administration charge." },
    ],
    pickup: [
      { k: "Airport desks and shuttles", v: "Each Spanish airport has its own mix of desks in the arrivals area and companies that run a shuttle to an office nearby. Follow the meeting point on your booking voucher, because off-airport companies pick you up outside the terminal." },
      { k: "Off-airport and city pickups", v: "City and station offices are usually smaller and may close earlier than airport desks, so confirm opening hours and the exact address before you travel." },
    ],
    checklist: [
      { k: "Documents", v: "Bring your licence, an IDP if you hold a non-EU licence or if the company asks, your passport and the booking voucher." },
      { k: "Card", v: "Use a credit card in the main driver's name with enough limit for the hold, and check the deposit amount on the rental agreement before signing." },
      { k: "Fuel", v: "Check which fuel the car takes and the fuel policy. Gasolina is petrol and gasóleo (also labelled diésel) is diesel, and wrong fuel is a typical excluded damage." },
      { k: "Condition", v: "Photograph or film every panel, the wheels, the windscreen and the interior at pickup and again at return, and note anything on the form." },
      { k: "Equipment", v: "Check the car has a V16 beacon and a reflective vest, and save the roadside assistance number from the rental agreement." },
      { k: "Borders and islands", v: "Tell the company before you cross into Portugal, Andorra or Gibraltar, and do not take the car on a ferry without written permission." },
    ],
    booking: [
      { k: "Seasons", v: "Summer and school holidays usually cost the most, and island fleets are smaller." },
      { k: "How far ahead", v: "Book early for summer, Easter and public holidays, and compare free-cancellation rates so you can rebook if the price drops." },
      { k: "Automatics", v: "Automatics are usually fewer and sell out first, especially on islands and in summer, so reserve one early if you need it." },
      { k: "Cross-border and ferries", v: "Hertz lists Portugal, Andorra, Gibraltar and France for cars rented in Spain with a fee, and forbids the UK, Ceuta and Melilla and inter-island transfers. Avis Spain approves a list of countries with a one-time fee and prohibits islands, so read the company list before you book." },
    ],
    mistakes: [
      { k: "Fuel policy traps", v: "Hertz says its prepaid fuel option usually costs more than local stations with no refund. Full-to-full is usually cheapest if you refuel near the airport and keep the receipt." },
      { k: "Skipping the damage check", v: "Damage you do not record at pickup can be charged to you at return, and the hold on your card pays for it. Photograph everything and get the form stamped." },
      { k: "Entering a low-emission zone", v: "Driving into a ZBE with a car that does not meet the label rule can mean a 200 euro fine in Madrid, and the rental company will pass the fine to you. Ask the desk which label the car has." },
      { k: "Undeclared border or island trips", v: "Insurance and waivers can be voided if you drive into a country or onto an island your contract forbids, and companies charge fees for undeclared crossings." },
      { k: "Fines and fees", v: "The rental company identifies you to the authority and may bill the fine with an admin fee. Check your contract and ask whether the fee can be waived." },
      { k: "Wrong card type", v: "Avis Spain refuses Maestro, pre-paid and digital cards, and a card that is not in the main driver's name can be refused. Confirm the card rules in writing before you travel." },
    ],
    faq: [
      {
        q: "Do I need an international driving permit to rent a car in Spain?",
        a: "It depends on your licence and the company. GOV.UK says UK photocard holders do not need one, but paper licences and licences from Gibraltar or the Crown Dependencies may. The DGT advises visitors from outside the EU and EEA to carry one, and Hertz recommends one for non-EU renters, so a US driver should carry one.",
      },
      {
        q: "What is the minimum age to rent a car in Spain?",
        a: "Avis Spain says 21 and Hertz Spain says 25 as standard, so it depends on the company and car. Under 25 you usually pay a young-driver surcharge.",
      },
      {
        q: "Are the toll roads in Spain free?",
        a: "Most motorways are free, but several AP motorways are still tolled in 2026, including the AP-7 from Malaga to Guadiaro and from Alicante to Cartagena. Some concessions are ending, so check the operator for the road you plan to use.",
      },
      {
        q: "Can I rent a car in Spain with a debit card?",
        a: "Sometimes. Avis Spain accepts Visa and MasterCard debit cards in the renter's name (not Maestro, pre-paid or digital cards, and not cash), Hertz Spain's terms mention a credit or debit card for the deposit, and Europcar's terms list credit cards. Policies differ by company and car group, so check your booking terms.",
      },
      {
        q: "What insurance do I need to rent a car in Spain?",
        a: "Third-party liability is included in the rate (Hertz Spain's terms), and collision and theft cover reduce your liability to an excess. Extra products such as SuperCover reduce or remove the excess, so check what is excluded, such as glass and tyres.",
      },
    ],
    faqExtra: [
      {
        q: "How much does it cost to rent a car in Spain?",
        a: "Rates vary widely by season, airport and car group, with August usually the priciest and January the cheapest, so compare live quotes. Fuel, tolls, a young or additional driver, cross-border or one-way fees and optional cover are usually extra, so check the total on your booking.",
      },
      {
        q: "Can I take a Spanish rental car to Portugal or Gibraltar?",
        a: "Usually only with the company's permission and a fee. Hertz lists Portugal, Andorra, Gibraltar and France for cars rented in Spain and forbids the UK, Ceuta and Melilla, and Avis Spain lists approved countries with a one-time fee. Check the list before you book.",
      },
    ],
    sources: [
      { label: "DGT: driving with a foreign licence", url: "https://www.dgt.es/nuestros-servicios/permisos-de-conducir/permisos-extranjeros-y-de-fuerzas-y-cuerpos-de-seguridad/conducir-con-un-permiso-extranjero/" },
      { label: "DGT: V16 beacon", url: "https://www.dgt.es/muevete-con-seguridad/tecnologia-e-innovacion-en-carretera/Dispositivos-de-presenalizacion-V16/" },
      { label: "Hertz Spain: rental terms", url: "https://images.hertz.com/pdfs/RT_FULL_ES_EN.pdf" },
      { label: "Avis Spain: location conditions", url: "https://production.rent-at-avis.com/avisonline/terms.nsf/TermsDefaultCategories/ES-common?OpenDocument=&INTERNATIONAL=Y" },
      { label: "GOV.UK: international driving permits", url: "https://www.gov.uk/driving-abroad/international-driving-permit" },
    ],
    sourcesExtra: [
      { label: "Europcar: deposit policy", url: "https://www.europcar.com/en-us/p/legal-information/deposit-policy" },
      { label: "Europcar: general rental terms", url: "https://www.europcar.com/en-us/p/legal-information/general-rental-terms" },
      { label: "DGT: alcohol limits", url: "https://www.dgt.es/muevete-con-seguridad/evita-conductas-de-riesgo/consumo-de-alcohol/" },
      { label: "DGT: urban speed limits since May 2021", url: "https://revista.dgt.es/es/multimedia/infografia-animada/2021/0510-Velocidad30.shtml" },
      { label: "AMB: ZBE registry for foreign cars", url: "https://zberegistre.ambmobilitat.cat/es" },
      { label: "Travelinformation.eu: Spain toll roads", url: "https://travelinformation.eu/spain/toll-roads/" },
      { label: "Spanish consumer ministry: Avis fined 1 million euros over fine admin fees", url: "https://www.dsca.gob.es/en/comunicacion/notas-prensa/consumo-sanciona-millon-euros-empresa-alquiler-coches-avis-practicas" },
      { label: "Olive Press: Avis fined 1 million euros over fine admin fees", url: "https://www.theolivepress.es/spain-news/2026/08/20/car-hire-company-avis-slapped-with-e1-million-fine-for-charging-customers-in-spain-admin-fee-for-paying-traffic-fines/" },
    ],
  },
  {
    slug: "italy",
    name: "Italy",
    status: "draft",
    verified: "2026-10-04",
    metaTitle: "Renting a Car in Italy: ZTL, Tolls, IDP and Insurance",
    metaDescription:
      "Rules for renting a car in Italy: ZTL fines, licence and IDP, insurance excess, autostrada tolls, speed limits and pickup at Rome, Venice and Florence.",
    h1: "Renting a car in Italy: what you need to know",
    lead:
      "Italy is easy to drive outside the cities, but historic centres are camera-controlled ZTL zones and the fines reach you through the rental company, sometimes months later. Visitors with a non-EU licence also need an International Driving Permit or a sworn Italian translation to drive legally.",
    airports: ["rome-fiumicino", "venice-marco-polo", "florence-peretola"],
    esimSlug: "italy",
    costsNote:
      "Daily rates depend on season, car class and booking date, so compare live prices for your dates. The figures below are charges and rules from company terms and official pages.",
    requirements: [
      { k: "Minimum age", v: "Each company sets its own rules. Hertz (Fiumicino terms) usually rents from 25, or from 21 with a young-driver fee. Maggiore requires 25 and offers a young-driver supplement for ages 19 to 24, and Enterprise at Florence lists 19 for mini cars. ACI notes that some firms also set a maximum age." },
      { k: "Licence", v: "A valid national licence held for at least one year is the usual rule (ACI, Hertz), and Enterprise at Florence asks for three years. Maggiore and Enterprise do not accept digital licences." },
      { k: "International permit (IDP)", v: "Under Article 135 of the Highway Code, a non-EU/EEA licence holder who is not resident in Italy must carry an international permit or an official Italian translation with the licence. ACI accepts both the 1949 permit (valid one year) and the 1968 permit (valid three years). Some counters may still hand over the car without one, but the law still applies at a police check." },
      { k: "Payment card", v: "ACI says it is almost impossible to rent a car in Italy without a credit card in the driver's name. Maggiore's terms require a credit card in the renter's name for the deposit hold, accept Visa and Mastercard debit or Maestro cards only at some offices, and do not accept Visa Electron, prepaid or digital cards. Policies differ, so check the terms of your booking." },
      { k: "Deposit", v: "Europcar's deposit policy lists 300 euros if you buy a protection that lowers your excess and 100 euros if it cuts the excess to zero, and the hold without extra protection is higher and shown in your booking. Maggiore says the amount blocked on the card varies by country and rate, and you cannot use that money until the card issuer releases it." },
    ],
    costs: [
      { k: "Young-driver fee", v: "Hertz (Fiumicino terms) and Enterprise (Florence) charge a daily fee that depends on the driver's age band, with the amount shown in the terms for each location. Check the quote for your age." },
      { k: "Deposit hold", v: "Europcar's deposit policy lists 300 euros with a protection that lowers your excess and 100 euros with a zero-excess protection, and more without extra protection. The hold is blocked on the card until the company releases it after the return." },
      { k: "Airport and station surcharge", v: "Maggiore's terms say a surcharge applies at some locations, mainly airports, railway stations and some city-centre offices. It is usually included in the quoted price but may appear as a separate line on the contract." },
      { k: "Extra driver", v: "Maggiore charges a fee for each additional driver, and ACI says a second driver usually costs extra. Each extra driver must sign the rental form." },
      { k: "Cross-border and ferries", v: "Hertz (Fiumicino terms) lists a fee for leaving Italy and a possible penalty if the trip is not declared. Maggiore charges a cross-border fee once per rental and allows only the countries named in the contract." },
      { k: "Tolls and fuel", v: "Autostrade per l'Italia publishes a January 2026 flat-road class A rate of 0.07869 euro per km including 22% VAT, which is roughly 8 euros per 100 km (our calculation), and mountain sections cost more. MIMIT's self-service average on 4 October 2026 was 2.049 euros per litre for petrol and 2.244 euros for diesel." },
    ],
    insurance: [
      { k: "What is usually included", v: "Maggiore's terms say that in Europe its rates include a base level of waiver. You can still be charged up to the maximum shown in its rate card, plus taxes and admin fees where they apply." },
      { k: "Card or third-party cover", v: "Maggiore's terms say that if you buy cover from an outside provider you stay liable to the rental company and must claim the money back from the provider afterwards. Check your card's terms before relying on it." },
      { k: "Super cover and zero excess", v: "Maggiore sells optional reductions that limit or remove your liability for damage and theft. Europcar's deposit policy shows a hold of 300 euros with an excess-reducing protection and 100 euros with a zero-excess protection, and Sicily by Car says optional cover reduces the amount blocked on the card." },
      { k: "What is often left out", v: "ACI says damage to tyres, bodywork and stone chips on the windscreen is generally not included, and advises checking that theft and legal costs are covered. Locauto says damage during a ferry crossing is usually not in the basic cover." },
      { k: "Why the counter price jumps", v: "Extras added at the desk can include super cover, extra driver, young-driver supplement, airport or station surcharge, fuel option and a cross-border fee. ACI advises asking about any cost that is not clearly shown, so read the contract line by line before signing." },
    ],
    insuranceTip:
      "Before buying super cover, compare its daily price with the excess it removes, and note every existing mark on the delivery form.",
    roads: [
      { k: "Manual or automatic", v: "Avis Italy labels every car in its search results as manual or automatic, and says automatic availability varies by location. If you need an automatic, filter for it when booking and check the label before you confirm." },
      { k: "Small car for old towns", v: "Old centres have narrow streets and ZTL borders, so a compact car is usually easier to park and turn around." },
      { k: "ZTL and the pickup office", v: "Maggiore's terms warn that you may need to leave quickly from an office in a historic area, and that driving in a restricted zone requires the right permit. Check the route out of your pickup point before you collect the car." },
      { k: "Mountains and the Dolomites", v: "Winter tyres or chains must be on board from 15 November to 15 April on signed roads, according to the Polizia di Stato, and the A22 Brennero motorway says the rule applies even without snow. Maggiore's terms say the car must be equipped when the pickup location is in an area that requires it." },
      { k: "Venice", v: "Venice is car-free: the road ends at Piazzale Roma, and you can park at Piazzale Roma or the Tronchetto island. Rent the car for the days you leave the city, not for the days inside it." },
    ],
    rules: [
      { k: "Side of the road and speed limits", v: "Drive on the right. ACI lists 130 km/h on autostrade, 110 on main out-of-town roads, 90 on other out-of-town roads and 50 in built-up areas, with lower limits in rain. Tutor average-speed cameras on autostrade are run by the Polizia Stradale." },
      { k: "ZTL limited traffic zones", v: "Cameras read plates at the zone boundary, and entering without a permit is fined 83 to 332 euros under Article 7 of the Highway Code, with no penalty points (ACI). Rome's Centro Storico ZTL runs on weekdays and Saturday afternoons, with a night zone on Friday and Saturday, so check Roma Mobilita for current hours. Florence's ZTL also runs most days and on some summer nights, so check the Comune di Firenze page." },
      { k: "Autostrada tolls", v: "Most autostrade charge by distance, and you can pay by cash, card or Telepass (the prepaid Viacard is discontinued). Yellow gates are reserved for Telepass customers, and other lanes take cash or cards. If you pass without paying, you can pay online without extra charge within 15 days of the date on the notice, so pay as soon as you can. After that Autostrade adds an admin fee and may sanction 87 to 344 euros plus 2 licence points." },
      { k: "Alcohol", v: "The limit is 0.5 g/l. It is zero for drivers under 21, for those in their first 3 years with a category B licence, and for professional drivers (ACI). Between 0.5 and 0.8 g/l the fine is 543 to 2,170 euros plus a licence suspension." },
      { k: "Equipment and winter tyres", v: "You must carry a warning triangle, and a hi-vis vest must be worn when stepping out outside built-up areas at night or in poor visibility (ACI). Dipped headlights are required on motorways and out-of-town roads, even by day (Hertz). Winter tyres or chains must be on board from 15 November to 15 April on signed roads." },
      { k: "Fines", v: "Foreign drivers stopped by an officer can pay a fine reduced by 30% on the spot (ACI). Camera fines go to the rental company, which gives your details to the authorities and may add an admin fee (Hertz)." },
    ],
    pickup: [
      { k: "Rome Fiumicino, Venice Marco Polo and Florence Peretola", v: "At FCO the rental desks are in Office Tower 2, reached by pedestrian tunnels, and cars are collected and returned in the Multilevel Parking buildings A, B or C (Aeroporti di Roma). At VCE the rental offices are on level 3 of the P1 multi-storey car park, reached by a covered walkway on the left as you leave arrivals (Avis). At FLR the rental offices are off-site on Via Palagio degli Spini, reached by a free shuttle of about 10 minutes from the stop by the short-term car park (Hertz, Enterprise)." },
      { k: "City and off-airport pickup", v: "City offices can sit inside or beside a ZTL, so plan your route out before you collect the car. In Venice the road ends at Piazzale Roma, where the municipal car park is." },
    ],
    checklist: [
      { k: "Documents", v: "Bring your licence, an IDP or sworn Italian translation if you are non-EU, your passport or ID, a credit card in the driver's name and the booking confirmation." },
      { k: "Damage check", v: "Walk around the car, photograph every mark and make sure it is written on the delivery paper, as ACI advises, then repeat at return." },
      { k: "Fuel", v: "Confirm the fuel policy and the fuel level, and check whether the car takes benzina (petrol) or gasolio (diesel) before you fill up." },
      { k: "Insurance", v: "Check that theft is included, what the excess is, and what is excluded, such as tyres and windscreen, before you sign." },
      { k: "ZTL plan", v: "Ask your hotel whether it is inside a ZTL and whether it can register your plate for your stay, and plan routes outside the zones." },
      { k: "Equipment", v: "Check the hi-vis vest and warning triangle are in the car, and ask about winter tyres or chains if you drive in the mountains between 15 November and 15 April." },
    ],
    booking: [
      { k: "Book early", v: "Sicily by Car advises booking 3 to 4 months ahead for the best rates, with free cancellation up to 48 hours before pickup on its prepaid rate." },
      { k: "Automatics", v: "Each car on Avis Italy's search results is labelled manual or automatic, and automatic availability varies by location, so select an automatic early." },
      { k: "Prepaid bookings", v: "Maggiore says that even with a prepaid reservation you must show a credit card in your name at pickup." },
      { k: "Compare the total", v: "ACI advises checking every cost, including driver age, extra driver, VAT and child seat, and adding any airport surcharge." },
    ],
    mistakes: [
      { k: "Driving into a ZTL", v: "Cameras fine every entry, and the fine and any admin fee reach you through the rental company, sometimes long after the trip." },
      { k: "Skipping the IDP", v: "A counter may rent you the car with only a national licence, but a police check can still lead to a fine because Italian law requires a permit or sworn translation." },
      { k: "Not reading the excess", v: "Basic cover usually leaves a high excess, and tyres, bodywork and windscreen are often excluded." },
      { k: "Entering the wrong toll lane", v: "Use gates marked for cash or cards unless you hold a Telepass, and pay any missed toll online within 15 days." },
      { k: "Skipping the damage and fuel check", v: "ACI advises noting existing damage and the fuel level on the form so you are not charged for them later." },
      { k: "Not declaring ferries or borders", v: "Maggiore's terms say you may lose your waiver benefits if you leave the rental country without telling the company, and Hertz lists a possible penalty." },
    ],
    faq: [
      {
        q: "Do I need an International Driving Permit in Italy?",
        a: "If your licence was issued outside the EU/EEA, Italian law (Article 135) requires an international permit or an official Italian translation alongside it. ACI accepts both the 1949 and 1968 permits. Some rental desks may not ask for it, but a police check can still lead to a fine.",
      },
      {
        q: "What is the minimum age to rent a car in Italy?",
        a: "It depends on the company. Hertz usually rents from 25, or from 21 with a young-driver fee at Fiumicino. Maggiore requires 25 with a supplement for ages 19 to 24, and Enterprise at Florence lists 19 for mini cars. A licence held for one to three years is also usually required.",
      },
      {
        q: "What is a ZTL?",
        a: "A zona a traffico limitato is a limited traffic zone in a historic centre, enforced by cameras that read plates. Entering without a permit is fined 83 to 332 euros under Article 7 of the Highway Code, and the fine reaches you through the rental company.",
      },
      {
        q: "How do tolls and Telepass work in Italy?",
        a: "Autostrade tolls are usually distance-based, payable by cash, card or Telepass. Yellow gates are reserved for Telepass customers, so use a gate marked for cash or cards. If you miss a toll you can usually pay online within 15 days without extra charge.",
      },
      {
        q: "Can I rent a car in Italy with a debit card?",
        a: "It depends on the company. Maggiore requires a credit card in the renter's name for the deposit hold and accepts debit cards only at some offices, and Sicily by Car asks for a credit card as a guarantee although it also advertises a formula without one. Check your booking terms.",
      },
    ],
    faqExtra: [
      {
        q: "How much does it cost to rent a car in Italy?",
        a: "The daily rate depends on season, car class and how early you book, so compare live prices for your dates. Extras can add a lot: young-driver fees, a deposit hold (Europcar lists 300 euros with an excess-reducing protection, 100 with zero excess, and more without), airport surcharges, tolls, and fuel at about 2.05 euros per litre for petrol (MIMIT, 4 October 2026).",
      },
      {
        q: "Can I take an Italian rental car to Sicily, Sardinia or abroad?",
        a: "Maggiore says you can reach the islands by ferry, and Locauto says each company decides and that damage during a crossing is usually not in basic cover. Hertz's Fiumicino terms list the countries it allows and a fee for leaving Italy. Always tell the company first, as Maggiore's terms say you may lose waiver benefits otherwise.",
      },
    ],
    sources: [
      { label: "ACI: fines for foreign motorists", url: "https://www.aci.it/fileadmin/documenti/viaggia_con_noi/pdf/ing/Fines_for_foreign_motorists.pdf" },
      { label: "ACI: compulsory documents and safety equipment", url: "https://www.aci.it/fileadmin/documenti/viaggia_con_noi/pdf/ing/1__Compulsory_documents_and_safety_equipment_to_be_carried_on_board_.pdf" },
      { label: "Roma Mobilita: ZTL Centro", url: "https://romamobilita.it/it/muoversiaroma/auto-moto/ZTL-centro" },
      { label: "Autostrade per l'Italia: unpaid toll", url: "https://www.autostrade.it/en/servizi-al-cliente/pedaggio/mancato-pagamento/paga-online" },
      { label: "MIMIT: national average fuel prices", url: "https://www.mimit.gov.it/it/prezzi-carburanti-media-nazionale" },
      { label: "Aeroporti di Roma: car rental at Fiumicino", url: "https://www.adr.it/web/aeroporti-di-roma-en/pax-fco-car-rental" },
    ],
    sourcesExtra: [
      { label: "ACI: car renting (visiting motorists)", url: "https://www.aci.it/fileadmin/documenti/viaggia_con_noi/pdf/Driving_in_Italy__information_for_visiting_motorists/Car-renting.pdf" },
      { label: "Comune di Firenze: ZTL", url: "https://mobilita.comune.fi.it/muoversi/muoversi/ztl.html" },
      { label: "ACI: Highway Code article 7 (ZTL)", url: "https://www.aci.it/fileadmin/cds/art-7.php" },
      { label: "Maggiore: general rental conditions", url: "https://doc.maggiore.it/maggiore/condizioni_generali_it.pdf" },
      { label: "Hertz Fiumicino: licence and IDP terms", url: "https://www.hertz.com/rentacar/reservation/reviewmodifycancel/templates/rentalTerms.jsp?KEYWORD=LICENSE&EOAG=FCO" },
      { label: "Hertz Fiumicino: age terms", url: "https://www.hertz.com/rentacar/reservation/reviewmodifycancel/templates/rentalTerms.jsp?KEYWORD=AGE&EOAG=FCO" },
      { label: "Europcar: deposit policy", url: "https://www.europcar.com/en-us/p/legal-information/deposit-policy" },
      { label: "EVZ Germany: ZTL in Italy", url: "https://www.evz.de/en/topics/transport/car/fines-abroad/ztl-italy/" },
      { label: "Polizia di Stato: winter tyres from 15 November", url: "https://www.poliziadistato.it/articolo/dal-15-novembre-scatta-l-obbligo-degli-pneumatici-invernali" },
    ],
  },
];

export const BUILT_COUNTRIES = COUNTRIES;
export const READY_COUNTRIES = COUNTRIES.filter((c) => c.status === "ready");

export function getCountry(slug) {
  return COUNTRIES.find((c) => c.slug === slug) || null;
}

// The published country guide that covers this airport, if any. Draft guides
// are never linked from public pages.
export function pillarForAirport(airportSlug) {
  return READY_COUNTRIES.find((c) => c.airports?.includes(airportSlug)) || null;
}

// Cross-link to the sister eSIM site. Plain link with UTM, not an affiliate redirect.
export function esimLink(country) {
  if (!country?.esimSlug) return null;
  const q = new URLSearchParams({
    utm_source: "carpriceradar",
    utm_medium: "crosssite",
    utm_campaign: `rent-a-car-${country.slug}`,
  });
  return `https://gbscout.com/esim/${country.esimSlug}?${q.toString()}`;
}
