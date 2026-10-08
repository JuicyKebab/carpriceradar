// Researched, source-backed enrichment per airport (suppliers on site, the
// surcharges that inflate on-airport rates, seasonality, a money-saving tip).
// Kept separate from the core airport list. Any field may be an empty string.
export const AIRPORT_DETAILS = {
  "phoenix-sky-harbor": {
    "suppliers": "Hertz, Avis, Budget, Enterprise, Alamo, National, Dollar, Thrifty, Sixt and Fox all operate from the consolidated Rental Car Center on Sky Harbor Circle South, linked to the terminals by the free PHX Sky Train.",
    "airportFee": "Phoenix sets a $6 customer facility charge per rental day plus an 11.11% airport concession recovery fee on every on-airport contract, on top of state and local taxes.",
    "peakSeason": "Demand and prices peak from January through March during snowbird season and Cactus League spring training, and are lowest in the hot summer months.",
    "moneyTip": "Booking an off-airport location in Tempe, Mesa or along 7th Avenue instead of the Rental Car Center can save roughly $80 to $200 on a week-long rental by skipping the airport surcharges."
  },
  "honolulu": {
    "suppliers": "Alamo, Avis, Budget, Dollar, Enterprise, Hertz, National, Payless, Sixt and Thrifty all operate from the five-story Consolidated Rent-A-Car facility connected to Terminal 2, which opened in December 2021.",
    "airportFee": "HNL rentals carry a $4.50 per day customer facility charge that funded the Conrac building, plus an airport concession recovery fee of about 11.11% on the base rate.",
    "peakSeason": "Rental demand peaks in summer and over the Christmas and New Year holidays, while January and the spring and autumn shoulder months usually bring better availability and lower rates.",
    "moneyTip": "Renting from an off-airport Honolulu or Waikiki location instead of the airport counter skips the facility charge and concession fee, which can save upwards of $100 on a week-long rental."
  },
  "seattle-tacoma": {
    "suppliers": "Alamo, Avis, Budget, Dollar, Enterprise, Hertz, National, Sixt, Thrifty and Fox all operate from the off-site Rental Car Facility about a mile from the terminal, reached by a free 24-hour shuttle.",
    "airportFee": "The Port of Seattle tariff adds a facility charge of roughly $3.55 per day plus an $8 per-transaction fee, on top of an 11.11% concession recovery fee and Washington state and King County taxes.",
    "peakSeason": "Demand and rates climb from April through October alongside the Alaska cruise season, peaking June through August, while winter months outside the holidays are cheapest.",
    "moneyTip": "Fill up at a gas station on International Boulevard, such as the Chevron or 76 just north of the Rental Car Facility, rather than paying the rental company's refueling surcharge."
  },
  "san-francisco": {
    "suppliers": "Alamo, Avis, Budget, Dollar, Enterprise, National, Sixt and Thrifty operate from the 4th floor of SFO's Rental Car Center, while Hertz and Fox operate from the 1st floor of the same building.",
    "airportFee": "SFO applies a flat customer facility charge of about $10 per rental contract plus an 11.11% concession recovery fee and California state and local taxes on top of the base rate.",
    "peakSeason": "Demand and prices peak from June through August, especially July, while January and February bring rates often 30 to 40% below peak season.",
    "moneyTip": "Fuel up at the Valero on S. Airport Blvd in South San Francisco, or the nearby Costco station with a membership, before returning the car rather than at the pricier stations by the return lanes."
  },
  "las-vegas-harry-reid": {
    "suppliers": "Alamo, Avis, Budget, Dollar, Enterprise, Hertz, National, Sixt, Thrifty, Fox and ACE all operate from the consolidated Rent-A-Car Center, about three miles from the Harry Reid terminal.",
    "airportFee": "On-airport rentals add roughly a 10% concession recovery fee plus a customer facility charge of about $5.50 per day with no cap, on top of the base rate quoted at booking.",
    "peakSeason": "Prices spike during major conventions like CES and SEMA, the Formula 1 weekend and New Year's Eve, while January and the shoulder months (February to May, September to October) run noticeably cheaper.",
    "moneyTip": "Picking up from an off-Strip neighborhood location instead of the airport counter or a hotel desk avoids both the airport facility fees and hotel concession surcharges, which can run as high as 32% at some Strip resorts."
  },
  "denver": {
    "suppliers": "Hertz, Enterprise, Avis, Budget, National, Alamo, Dollar, Thrifty, Sixt and Payless operate on-airport at DEN, which is building a new consolidated rental car facility.",
    "airportFee": "DEN collects a daily customer facility charge on every on-airport rental (around $6 to $10 per day to fund the new facility) plus a concession fee of roughly 10 to 11% owed to the city and county of Denver.",
    "peakSeason": "Demand and prices peak during ski season (December to March) and summer national-park season (June to August); the April-May and September-October shoulder months offer the best rates.",
    "moneyTip": "Taking the A-Line train from DEN to Union Station and renting from a downtown Denver branch instead of the airport counter skips the facility charge and concession fee entirely."
  },
  "new-york-jfk": {
    "suppliers": "Avis, Budget, Enterprise, Hertz, National, Alamo, Dollar, Thrifty and Sixt all operate from JFK's shared Federal Circle rental car center, reached by the free AirTrain JFK.",
    "airportFee": "JFK is one of the few major US airports with no customer facility charge, but renters still pay a concession recovery fee plus New York State and City sales tax, which together can add $30 to $50 a day.",
    "peakSeason": "Rates run highest in summer (June to August) and around major holidays like July 4th and Labor Day, while January and shoulder months such as September are consistently cheapest.",
    "moneyTip": "Since JFK charges no facility fee, timing is the bigger lever: picking up midweek (Tuesday or Wednesday) rather than a Thursday or weekend start avoids the steepest surge pricing at Federal Circle."
  },
  "miami": {
    "suppliers": "More than a dozen brands, including Alamo, Avis, Budget, Dollar, Enterprise, Hertz, National, Thrifty, Payless, Sixt and ACE, operate from MIA's consolidated Rental Car Center, reached by the MIA Mover train.",
    "airportFee": "MIA adds a customer facility charge of around $5.35 per day with no cap plus an airport concession recovery fee, both mandatory Miami-Dade County surcharges that stack on top of the quoted rate.",
    "peakSeason": "Prices peak during Florida's snowbird season from December through April, with December the most expensive month, while September through early November is consistently cheapest.",
    "moneyTip": "Booking well ahead for the December-April snowbird season, and comparing MIA rates against off-airport or Fort Lauderdale (FLL) pickups, can meaningfully cut cost during peak winter demand."
  },
  "london-heathrow": {
    "suppliers": "Hertz, Avis, Enterprise, Europcar, Budget and Sixt all operate desks at Heathrow, with free shuttle buses to off-site rental centers near the Northern Perimeter Road.",
    "airportFee": "UK airport rentals typically add a concession recovery fee plus a location charge of roughly £8 to £15 per day, on top of 20% VAT, a structure distinct from the flat daily surcharges common at US or Gulf airports.",
    "peakSeason": "Demand and prices peak from June through September and again around Christmas and New Year, while January and February are typically the cheapest and quietest months to rent.",
    "moneyTip": "Hiring from a car rental branch in central London rather than the airport desk avoids the concession recovery fee and premium location surcharge added to all Heathrow agreements."
  },
  "dubai": {
    "suppliers": "Hertz, National, Europcar and Dollar are listed as official Dubai Airports concession partners, alongside Avis, Thrifty, Sixt, Budget and Alamo counters across the terminals.",
    "airportFee": "Dubai Airport rentals carry a separate airport surcharge that varies by company (Avis UAE lists AED 50 per terminal), and some companies add an out-of-hours fee for late-night pickups or drop-offs.",
    "peakSeason": "Rental demand and rates peak during the mild winter tourist season from November to March, while the hot April to October off-season sees lower demand and wider vehicle availability.",
    "moneyTip": "Some local UAE firms include a Salik toll tag with no admin fee, while international brands can add AED 5 to 10 per toll crossing, so asking about the toll structure before booking can cut airport-to-city costs."
  },
  "faro": {
    "suppliers": "Avis, Hertz, Europcar, Enterprise, Sixt, Budget, Alamo and National have desks in the arrivals hall, while local firms such as Guerin and Auto Jardim operate from the separate P4 Car Rental Center a short walk from the terminal.",
    "airportFee": "Faro's in-terminal desks add a location surcharge estimated at roughly 15 to 25% versus off-airport rates, and local operators list young-driver, senior-driver and out-of-hours fees for pickups between 8pm and 8am.",
    "peakSeason": "July and August are the busiest and most expensive months as Algarve tourism peaks, while late November through early March is the quietest and cheapest period.",
    "moneyTip": "Walking the short signposted route from the terminal to the P4 Car Rental Center to book with a local Portuguese supplier like Guerin or Auto Jardim is generally cheaper than the international desks inside arrivals."
  },
  "atlanta": {
    "suppliers": "Alamo, Enterprise, National, Avis, Budget, Hertz, Dollar, Thrifty, Sixt and Payless all operate from ATL's consolidated Rental Car Center, reached from the terminals by the free SkyTrain.",
    "airportFee": "On-airport rentals at ATL carry an 11.11% concession recovery fee plus a customer facility charge of about $8.50 per day, on top of combined Georgia state and local rental taxes of roughly 8.9%.",
    "peakSeason": "Prices and demand are highest in summer (June to August), around Thanksgiving and Christmas, and during major conventions or sporting events, while January is typically the cheapest month.",
    "moneyTip": "Comparing the ATL Rental Car Center rate against a nearby off-airport branch in College Park, Midtown or Downtown can avoid the concession fee and facility charge, though the rideshare or MARTA cost to reach it should be weighed against the savings."
  },
  "fort-myers": {
    "suppliers": "RSW's single consolidated Rental Car Center on airport property houses Alamo, Avis, Budget, Dollar, Enterprise, Europcar, Fox, Hertz, National, Payless, Sixt and Thrifty.",
    "airportFee": "On-airport rentals add a customer facility charge of about $5 per day set under Lee County's airport ordinance, plus a concession recovery fee of roughly 11 to 12% of the rental cost.",
    "peakSeason": "Demand and rates peak from January through March during Florida's snowbird season; the slowest, cheapest months are the hot off-season from June through September.",
    "moneyTip": "Every major brand sits in RSW's single Rental Car Center, so comparing them takes one stop. Book 4 to 6 weeks ahead, since snowbird-season demand tightens inventory fast."
  },
  "raleigh-durham": {
    "suppliers": "RDU's on-airport counters include Alamo, Avis, Budget, Dollar, Enterprise, Hertz, National, Advantage and E-Z Rent-A-Car, reached by terminal shuttle while a consolidated facility is being designed.",
    "airportFee": "RDU adds a customer facility charge of $5 per day with no cap, on top of a concession recovery fee of roughly 10 to 11% charged by on-airport brands.",
    "peakSeason": "Busiest in summer (June through August, especially around July 4th) and the Thanksgiving-to-New-Year stretch; January and February see the lowest passenger volumes.",
    "moneyTip": "Off-airport counters around Raleigh-Durham skip RDU's facility charge and concession fee, often beating on-airport quotes by 10 to 15%, at the cost of extra shuttle or transit time."
  },
  "sacramento": {
    "suppliers": "SMF's on-airport counters include Alamo, Avis, Budget, Dollar, Enterprise, Hertz, National, Payless, Thrifty and Zipcar, reached via a 24-hour shuttle from both terminals.",
    "airportFee": "Sacramento charges a customer facility charge of $9 per day capped at 5 days ($45 maximum), plus a concession recovery fee on-airport brands cite in the roughly 8 to 11% range.",
    "peakSeason": "July is SMF's busiest month and summer is peak season, pushing rental demand highest; winter outside the holiday weeks is the quietest and cheapest time to rent.",
    "moneyTip": "Picking up at a non-airport Sacramento location skips the roughly 11% airport concession fee, though you must arrange your own transport there."
  },
  "austin": {
    "suppliers": "Austin-Bergstrom's on-site Rental Car Center hosts Advantage, Alamo, Avis, Budget, Dollar, Enterprise, E-Z Rent-A-Car, Fox, Hertz, National, Payless and Thrifty.",
    "airportFee": "AUS charges a customer facility charge of $6.75 per rental day with no cap, plus brands typically add a concession recovery fee of around 11% for their city lease.",
    "peakSeason": "Demand and prices peak in March during SXSW and again in October during Austin City Limits, with quieter, cheaper shoulder periods in spring and late fall.",
    "moneyTip": "Book weeks ahead of SXSW or ACL, or pick up from an off-airport Austin location, since the facility charge and concession fee only apply to the on-site Rental Car Center."
  },
  "salt-lake-city": {
    "suppliers": "SLC's on-airport Gateway Center facility hosts Alamo, Avis, Budget, Dollar, Enterprise, Hertz, National, Payless, Sixt and Thrifty.",
    "airportFee": "SLC applies a customer facility charge of $5 per rental day up to a 12-day cap, and brands generally add a concession recovery fee of roughly 10% tied to their airport agreement.",
    "peakSeason": "Demand and rates run highest from mid-December through mid-March during ski season, especially around holidays, while November tends to be the cheapest month to book.",
    "moneyTip": "Picking up from a suburb like Murray or Sandy avoids the Gateway Center's facility charge and concession fee, which matters most during the winter ski rush."
  },
  "portland": {
    "suppliers": "PDX's consolidated Rental Car Center on NE Airport Way hosts Alamo, Avis, Budget, Dollar, Enterprise, Hertz, National, Payless, Sixt, Thrifty and Zipcar.",
    "airportFee": "PDX charges a customer facility charge of $6 per rental day up to a 10-day cap, and the Port of Portland collects a concession recovery fee of about 10% that brands pass on.",
    "peakSeason": "Summer, June through August, is Portland's busiest and priciest travel season; winter outside the holidays is the quietest and cheapest time to rent.",
    "moneyTip": "Oregon has no state sales tax, but that does not cover PDX's airport-only facility charge and concession fee, so renting off airport property skips both."
  },
  "houston-intercontinental": {
    "suppliers": "IAH's consolidated Rental Car Center on Will Clayton Parkway houses Alamo, Avis, Budget, Dollar, Enterprise, Hertz, National, Payless, Thrifty and Sixt, reached by a 24/7 shuttle.",
    "airportFee": "Texas airport rentals add a concession recovery fee of around 10 to 11%, plus at IAH a customer facility charge commonly quoted at about $3 per rental day.",
    "peakSeason": "Spring (March through May) brings the highest demand and rates thanks to mild weather and events, while January and the fall shoulder months are quietest.",
    "moneyTip": "Compare an off-airport Houston pickup against the IAH counter, since off-airport rentals avoid the per-day facility charge and concession fee added only at the airport."
  },
  "cancun": {
    "suppliers": "Major brands including Alamo, Avis, Budget, Dollar, Europcar, Hertz, National and Thrifty operate counters in Terminal 3, Cancun International's main international terminal.",
    "airportFee": "Mexican law requires third-party liability insurance in the rate, but Cancun counters frequently claim it is not included and pressure renters into buying it on the spot, sometimes with other add-ons.",
    "peakSeason": "Mid-December through March and spring break is busiest and priciest, while June through October is quietest, with resort rates commonly 40 to 60% below peak.",
    "moneyTip": "Book and pay for full-coverage insurance online in advance, or confirm in writing what your rate includes, so the counter cannot pressure you into an unexpected insurance upsell."
  },
  "fort-lauderdale": {
    "suppliers": "The FLL Rental Car Center next to Terminal 1 hosts Ace, Alamo, Avis, Budget, Dollar, Enterprise, Fox, Hertz, National, Payless, Sixt and Thrifty, with free shuttles from all terminals.",
    "airportFee": "FLL rentals carry a concession recoupment fee of about 10%, a rental car facility charge of roughly $3.95 per day, a Florida surcharge of about $2 per day, plus a small vehicle license fee, on top of 6% state tax.",
    "peakSeason": "December through April is peak as snowbirds and spring breakers push rates highest, with March busiest, while August through October (hurricane season) is consistently cheapest.",
    "moneyTip": "Book the August-to-October shoulder season, or compare a non-airport Fort Lauderdale location, to avoid the stacked facility, concession and Florida surcharge fees at the airport."
  },
  "los-angeles-lax": {
    "suppliers": "LAX's Rental Car Center (open since 2026, linked by the SkyLink people mover) hosts Avis, Budget, Payless, Zipcar, Enterprise, Alamo, National, Europcar, Fox, Hertz, Dollar, Thrifty and Sixt.",
    "airportFee": "LAX adds an 11.11% concession recovery fee plus a customer facility charge of about $9 per day (capped at 5 days), which funds the consolidated Rental Car Center and SkyLink.",
    "peakSeason": "Demand and prices peak in July and August; January and February are the slowest and cheapest months to rent.",
    "moneyTip": "Return the car with a full tank from a gas station outside the airport, since fueling at or near the Rental Car Center costs noticeably more."
  },
  "san-diego": {
    "suppliers": "All pickups at San Diego International happen at the Rental Car Center on Harbor Island, served by Alamo, Avis, Enterprise, Fox, Hertz, National, Payless, Sixt, Thrifty and Zipcar.",
    "airportFee": "San Diego charges a concession recovery fee of roughly 9 to 13% of the base rate plus a customer facility charge of $9 per day (up to a 5-day maximum) that funds the Rental Car Center.",
    "peakSeason": "Prices and demand are highest in June, with January and March typically the cheapest and least busy months to rent.",
    "moneyTip": "Renting from a company location a mile or two off the airport, such as near the Pacific Highway corridor, can avoid the concession fee and still include a free shuttle."
  },
  "santa-ana-sna": {
    "suppliers": "John Wayne Airport's on-site counters, on the Arrival Level between Terminals A and B, include Alamo, Avis, Budget, Dollar, Enterprise, Hertz, National, Sixt and Thrifty.",
    "airportFee": "SNA applies an 11% airport concession fee plus a customer facility charge, both added to the base rate for any car picked up on airport property.",
    "peakSeason": "Summer (July and August) and the December holidays bring the highest demand and prices; January and February are the slowest, cheapest months.",
    "moneyTip": "Off-airport agencies a short shuttle ride away skip the on-site concession fee that counters inside the terminal must charge."
  },
  "chicago-ohare": {
    "suppliers": "O'Hare's Multi-Modal Facility consolidates 13 rental brands, including Alamo, Avis, Budget, Dollar, Enterprise, Fox, Hertz, National, Payless, Sixt and Thrifty, plus off-site ACE and Routes.",
    "airportFee": "Chicago adds a 10% concession recovery fee plus a customer facility charge of roughly $8 per day with no multi-day cap, on top of Illinois and Cook County rental taxes.",
    "peakSeason": "June through August is the busiest and most expensive stretch; January and February see the lowest demand and cheapest rates.",
    "moneyTip": "Taking the CTA Blue Line into downtown Chicago and renting from a city location instead of the O'Hare facility avoids the concession fee and facility charge entirely."
  },
  "dallas-fort-worth": {
    "suppliers": "DFW's single Rental Car Center houses Alamo, Avis, Budget, Dollar, Enterprise, Fox, Hertz, National, Payless, Sixt and Thrifty, reached by a free shared shuttle from both terminals.",
    "airportFee": "Texas fees at DFW include a 10% concession recovery fee and roughly a $7.50 per day customer facility charge, on top of Texas's 6.25% motor vehicle rental tax.",
    "peakSeason": "Demand and prices peak around Thanksgiving and spring break in March; the quietest stretch is typically mid-winter in January.",
    "moneyTip": "Renting at an off-airport branch in nearby Irving or Grapevine, reached by a short rideshare, skips DFW's concession fee and facility charge entirely."
  },
  "minneapolis-saint-paul": {
    "suppliers": "MSP's 12 rental providers, including Alamo, Avis, Budget, Enterprise, Hertz and National, operate from counters at both Terminal 1 and Terminal 2.",
    "airportFee": "MSP charges an 11.11% concession recovery fee plus a $5.90 per day rental auto facility charge, on top of Minnesota's 9.2% rental car tax and 5% registration fee.",
    "peakSeason": "Travel peaks around Thanksgiving, October's MEA fall-break week, and spring break in March; the calmest period is typically January after the holidays.",
    "moneyTip": "The light rail connects MSP to downtown Minneapolis and Mall of America in about 20 minutes, where off-airport rentals skip the concession fee and facility charge."
  },
  "detroit-metro": {
    "suppliers": "DTW's consolidated Rental Car Campus on Lucas Drive, reached by free shuttle from both terminals, hosts Alamo, Avis, Budget, Enterprise, Hertz, National, Dollar, Thrifty and Payless.",
    "airportFee": "DTW adds an 11% concession recovery fee and roughly a $6 per day customer facility charge on top of Michigan's 6% state use tax on the rental.",
    "peakSeason": "The Thanksgiving-through-New-Year stretch is DTW's busiest and most expensive period; January and February are typically quietest.",
    "moneyTip": "Refuel off-airport in nearby Romulus or Taylor before returning the car, since on-airport counters charge a premium for prepaid or missing fuel."
  },
  "san-antonio": {
    "suppliers": "SAT's Consolidated Rental Car Facility, across the sky bridge from Terminal B, hosts about ten brands including Alamo, Avis, Budget, Dollar, Enterprise, Hertz, National, Payless, Sixt and Thrifty.",
    "airportFee": "SAT rentals carry a customer facility charge and a concession recovery fee that fund the rental car facility; the current per-day amount is not published, so confirm it at pickup.",
    "peakSeason": "SAT's busiest, priciest stretches are spring break in March and midsummer, when the airport sets record passenger counts; demand is lowest in deep winter.",
    "moneyTip": "VIA Metropolitan Transit's airport bus is a cheap way to reach off-airport rental branches, letting you skip SAT's facility and concession fees on a longer rental."
  },
  "boston-logan": {
    "suppliers": "Logan's on-airport Rental Car Center at 15 Transportation Way hosts Alamo, Avis, Budget, Dollar, Enterprise, Hertz, National, Payless, Sixt and Thrifty.",
    "airportFee": "Massachusetts applies a $6 per day customer facility charge to Logan rentals, plus a concession recovery fee (commonly cited around 10 to 11%) to cover the airport lease.",
    "peakSeason": "Demand and prices peak during fall foliage (late September through October) and in summer; January and February are typically the slowest, cheapest months.",
    "moneyTip": "Massachusetts has no cash tolls, so bring your own E-ZPass and ask the counter to disable theirs, avoiding the roughly $6.95 per day toll convenience fee."
  },
  "newark": {
    "suppliers": "Newark's consolidated Rental Car Center in the Terminal A garage houses Alamo, Avis, Budget, Dollar, Drivo, Enterprise, Hertz, National, Payless, Sixt and Thrifty.",
    "airportFee": "EWR adds an $8.04 per day customer facility charge to every rental, on top of the concession recovery fee that covers the rental firms' Port Authority lease.",
    "peakSeason": "Prices run highest in summer and around Thanksgiving and the winter holidays, when New York-area air traffic peaks; January and February are typically cheapest.",
    "moneyTip": "Bring your own E-ZPass or use pay-by-plate billing instead of the rental company's toll transponder, which carries a daily administrative fee on top of the toll."
  },
  "philadelphia": {
    "suppliers": "PHL's rental facility lists Alamo, Avis, Budget, Dollar, Enterprise, Hertz, National, Sixt and, unusually for a major airport, Turo as a pickup option.",
    "airportFee": "PHL charges an $8 per day customer facility charge, and rental firms have historically added roughly a 10% airport access fee on top of the base rate.",
    "peakSeason": "Rates run highest in summer and around Thanksgiving and Christmas; January and February are typically the quietest, cheapest window.",
    "moneyTip": "Since Turo is an official PHL pickup option alongside the major brands, compare a peer-to-peer Turo listing against the counters, as it can undercut standard rates and fees."
  },
  "baltimore": {
    "suppliers": "BWI Marshall's rental facility on New Ridge Road hosts Alamo, Avis, Budget, Dollar, Enterprise, Hertz, National, NextCar, Sixt and Thrifty.",
    "airportFee": "BWI applies a $5.75 per day customer facility charge, plus a concession recovery fee rental companies add (commonly cited around 10 to 11.5% at the airport).",
    "peakSeason": "Demand and prices run highest in summer and can spike around Preakness weekend in May; January and February are generally the slowest, cheapest months.",
    "moneyTip": "Compare NextCar, the smaller independent based right at BWI's rental facility, against the major brands, since airport-based independents sometimes undercut counter rates."
  },
  "orlando": {
    "suppliers": "Alamo, Avis, Budget, Dollar, Enterprise, Hertz, National, Payless, Sixt and Thrifty all operate on-site rental counters at Orlando International Airport.",
    "airportFee": "MCO's customer facility charge rose to $9 per day (capped at 7 days) in late 2024, among the highest in the US, plus a concession recovery fee of roughly 11% of the rental cost.",
    "peakSeason": "Prices peak in December and around spring break in March and April, and are lowest in September and January.",
    "moneyTip": "Compare quotes across all the on-site brand counters rather than booking the first result, since the same car on the same dates can vary 30 to 40% between brands at MCO."
  },
  "tampa": {
    "suppliers": "Alamo, Avis, Budget, Dollar, Enterprise, Fox, Hertz, National, Payless, Sixt and Thrifty operate from TPA's Rental Car Center, reached via the SkyConnect train.",
    "airportFee": "TPA charges a customer facility charge of about $5.95 per day with no cap, plus a concession recovery fee of about 11.11% of the rental cost.",
    "peakSeason": "Prices peak from December through April during snowbird season, especially March, and are lowest from June through October, with September typically cheapest.",
    "moneyTip": "Off-airport agencies near TPA that run a free courtesy shuttle skip the Rental Car Center facility fee and often undercut the on-airport counters for the same car."
  },
  "keflavik": {
    "suppliers": "Hertz, Avis, Budget and Europcar have counters inside the KEF terminal, while Sixt, Blue Car Rental, Lava Car Rental and other local firms operate just off-site with a free shuttle.",
    "airportFee": "Iceland has no US-style facility charge, but counters commonly upsell optional sand-and-ash protection and gravel protection on top of the base rate, each a few thousand ISK per day.",
    "peakSeason": "Demand and prices peak in summer (June through August) and are lowest in the winter off-season from November through March.",
    "moneyTip": "Book gravel and sand-and-ash protection online in advance rather than at the counter, and check whether your credit card already covers rental excess before adding paid cover."
  },
  "dublin": {
    "suppliers": "Hertz, Avis, Budget, Enterprise, Sixt and Europcar all operate directly at Dublin Airport, with National, Alamo, Dollar and Thrifty running as sister brands under those groups.",
    "airportFee": "Dublin rentals carry a large damage excess (often 1,600 to 3,000 euros by car class), a young-driver surcharge for under-25s, an airport location surcharge, and a big credit-card hold to cover the excess.",
    "peakSeason": "Prices and demand peak from June through August, with July the busiest, and are lowest in the winter months outside the May-to-September window.",
    "moneyTip": "Pre-book a standalone excess insurance policy online before travel instead of buying the counter's cover, which can cost several times more per day for the same protection."
  },
  "edinburgh": {
    "suppliers": "Edinburgh Airport's on-site car rental centre hosts Alamo, Avis, Budget, Enterprise, Europcar, Hertz, National and Sixt, with Arnold Clark and Green Motion reachable by shuttle.",
    "airportFee": "UK car hire includes 20% VAT, and airport pickups carry a premium location surcharge on top (several brands list a daily airport surcharge), making a city-centre pickup cheaper.",
    "peakSeason": "Demand and prices peak in July and August, while January is the cheapest month to rent.",
    "moneyTip": "Take the tram or bus into Edinburgh city centre and rent from a city branch instead, since airport desks carry a premium location surcharge that city offices avoid."
  },
  "manchester": {
    "suppliers": "Manchester Airport's Car Rental Village, by the long-stay car park, hosts Alamo, Avis, Budget, Enterprise, Europcar, Hertz, National and Sixt.",
    "airportFee": "UK rates include 20% VAT, and airport-location rentals add a premium surcharge versus off-airport branches, which can run noticeably cheaper per day.",
    "peakSeason": "Prices and demand are highest in July and August, while January is the cheapest month to book.",
    "moneyTip": "Compare an off-airport branch reached by a free terminal shuttle against the on-airport desks, since off-site rentals can run meaningfully cheaper per day."
  },
  "auckland": {
    "suppliers": "Auckland Airport's Transport Hub and Car Park buildings host Avis, Budget, Europcar, Hertz, Enterprise, Thrifty and Ezi Car Rental, with Omega reachable by free shuttle.",
    "airportFee": "New Zealand quotes include GST, but airport pickups carry a separate airport concession fee charged on pickup that recovers the fee rental firms pay the airport operator.",
    "peakSeason": "Summer (December through February) is peak season with the highest prices and lowest availability, while winter (June through August) has the lowest prices.",
    "moneyTip": "Use a shuttle-served off-airport operator like Omega or Ezi Car Rental, which run free shuttles to nearby depots and typically price below the on-airport desks."
  },
  "paris-cdg": {
    "suppliers": "CDG's Terminal 1 and Terminal 2 arrival halls host Europcar, Hertz, Avis, Budget, Sixt, Enterprise, National, Alamo and Dollar desks.",
    "airportFee": "French rates include roughly 20% VAT, but CDG pickups add an airport premium-location surcharge on top of the base rate, plus a young-driver surcharge for drivers under 25 that varies by company.",
    "peakSeason": "July and August are the most expensive months due to peak tourist demand, while January and February are the cheapest.",
    "moneyTip": "Take the RER train into central Paris and pick up from a city agency instead of at CDG, since city pickups commonly run well below airport rates."
  },
  "malaga": {
    "suppliers": "Avis, Budget, Sixt, Europcar, Hertz, Firefly, Goldcar/InterRent and Record Go have terminal desks. OK Mobility and Centauro, strong Spanish operators, are also present, with Centauro off-site via free shuttle.",
    "airportFee": "Spain includes 21% VAT in quoted rates. Airport desks usually carry a location surcharge versus off-airport branches, and refueling yourself is cheaper than a prepaid full-to-empty tank.",
    "peakSeason": "Demand and prices peak in July and August on the Costa del Sol and are lowest outside the summer months.",
    "moneyTip": "Pick a terminal-based desk such as Avis, Sixt or OK Mobility to skip the shuttle, and always refuel the car yourself before return instead of prepaying a full tank."
  },
  "alicante": {
    "suppliers": "Avis, Budget, Europcar, Goldcar, Hertz, InterRent, Sixt, Centauro and Record Go all have counters in the arrivals hall; Centauro was founded nearby in Benidorm and Record Go is a major Spanish operator.",
    "airportFee": "Rates include Spanish VAT. Airport desks typically carry a concession fee that off-airport branches avoid, and the fuel policy and any young-driver surcharge add to the headline price.",
    "peakSeason": "Prices and demand on the Costa Blanca are highest in July and August and lowest from January through March.",
    "moneyTip": "Compare an off-airport pickup against the terminal desks, since off-site branches often skip the airport concession fee built into in-terminal rates."
  },
  "palma-mallorca": {
    "suppliers": "Avis, Budget, Enterprise, Europcar, Hertz, Sixt, Thrifty, Goldcar and Centauro operate from the arrivals hall; OK Mobility, headquartered in Palma, is a major local operator at its home airport.",
    "airportFee": "Spanish VAT is included in listed prices. Airport branches add a location surcharge versus town pickups, and under-25 drivers face a young-driver fee that varies by company.",
    "peakSeason": "Demand and prices on Mallorca peak from June through August, especially August, and drop sharply outside the summer season.",
    "moneyTip": "Book well ahead for July and August, since island inventory genuinely runs short and prices can double versus booking months earlier."
  },
  "tenerife-south": {
    "suppliers": "Avis, Budget, Europcar, Goldcar/InterRent, Hertz, Thrifty, Sixt and TopCar have arrivals-hall desks; Cicar, a Canary Islands operator founded in 1967, is a major local alternative with island-wide offices.",
    "airportFee": "Spanish VAT is included in rates. Some brands charge a refueling fee plus the fuel-price difference if the car is not returned at the same level, so a full-to-full policy avoids that, and young-driver surcharges apply under 25.",
    "peakSeason": "Tenerife's peak is reversed from the mainland: demand and prices are highest in winter (December to February) for winter sun, and lowest around May, June and September.",
    "moneyTip": "Try a Canary Islands specialist like Cicar alongside the international brands, and choose a full-to-full fuel policy to avoid overpaying for a prepaid tank."
  },
  "gran-canaria": {
    "suppliers": "Avis, Hertz, Europcar, Sixt, Enterprise, Goldcar and InterRent have arrivals-hall desks; OK Mobility operates from inside the terminal, while Record Go runs a nearby off-airport branch.",
    "airportFee": "Rates include Spanish VAT. Drivers aged 21 to 24 are charged a young-driver surcharge by most agencies, and nearly all require a full-to-full fuel return to avoid a refueling fee.",
    "peakSeason": "Demand and prices peak in December around Christmas and New Year, and again in July and August; the quietest, cheapest months fall outside those windows.",
    "moneyTip": "Book with an off-airport operator like Record Go instead of an in-terminal desk, since off-site counters skip the premium in-airport location surcharge."
  },
  "barcelona": {
    "suppliers": "Avis, Hertz, Europcar, Sixt, Goldcar and Enterprise operate desks across Terminals 1 and 2 at Barcelona El Prat; OK Mobility also has a counter at the airport.",
    "airportFee": "Spanish VAT is included in quoted rates. Some brands apply a surcharge for their premium in-terminal location, and drivers under 25 face a young-driver fee set by several suppliers.",
    "peakSeason": "July and August bring the highest demand and prices, while winter months see the lowest rates.",
    "moneyTip": "Compare an off-airport pickup reachable by the Aerobus or train against the in-terminal desks, since off-site locations commonly avoid the airport facility surcharge."
  },
  "madrid": {
    "suppliers": "Europcar, Avis, Budget, Hertz, Sixt and Enterprise have counters in Terminal 1 and Terminal 4 at Madrid-Barajas; Centauro, Goldcar/InterRent and Record Go also serve the airport, with Centauro running a free shuttle.",
    "airportFee": "VAT is included in listed rates. Most suppliers use a full-to-full fuel policy; returning the car without a full tank triggers a refueling charge plus a flat service fee, and under-25 drivers pay a young-driver surcharge.",
    "peakSeason": "July and August see the highest demand and prices, with December also elevated; the cheapest period runs from January through March.",
    "moneyTip": "Return the car with a full tank yourself rather than skip refueling, since the flat refueling service fee for a partial tank outweighs topping up at a pump near drop-off."
  },
  "lisbon": {
    "suppliers": "Hertz, Avis, Europcar, Sixt, Enterprise, Budget, Alamo, National and Goldcar operate at Humberto Delgado Airport, alongside Portuguese operators Guerin and Auto Jardim with arrivals-hall desks.",
    "airportFee": "Portugal's 23% VAT is included in quoted rates. Airport pickups carry a location surcharge versus city branches, plus young-driver fees for under-25s and out-of-hours fees outside desk hours.",
    "peakSeason": "Demand and prices are highest in July and August and lowest in January and February.",
    "moneyTip": "Book a city-centre or off-airport branch instead of the terminal desk to skip the airport location surcharge entirely."
  },
  "porto": {
    "suppliers": "Hertz, Avis, Europcar, Sixt, Enterprise, Budget, Alamo, Goldcar, Thrifty, OK Mobility and SurPrice operate at Francisco Sa Carneiro Airport, alongside Portuguese operators Guerin and Auto Jardim in the arrivals hall.",
    "airportFee": "Portugal's 23% VAT is included in quoted rates. Airport rentals carry a location surcharge versus city-centre pickup, plus young-driver surcharges for under-25s and out-of-hours collection fees.",
    "peakSeason": "Demand and prices are highest in July and August and lowest in January and February.",
    "moneyTip": "Pick up near Campanha train station or another city office instead of the airport counter to avoid the airport location surcharge."
  },
  "rome-fiumicino": {
    "suppliers": "Hertz, Avis, Europcar, Sixt and Enterprise are among the brands with desks at Fiumicino, most in the Rent a Car area connected to the terminals by covered walkways.",
    "moneyTip": "Stay out of Rome's ZTL: a single camera-detected entry in a hire car usually comes back months later as a fine plus the rental company's admin fee, so park outside the historic centre."
  },
  "venice-marco-polo": {
    "suppliers": "Hertz, Avis, Europcar and Enterprise are among the brands with desks in the P1 car park rental centre at Marco Polo.",
    "moneyTip": "You do not need a car inside Venice, so rent only for the days you leave the lagoon and pick up at the airport on the way out."
  },
  "florence-peretola": {
    "suppliers": "Avis, Budget, Europcar and Hertz are among the brands with offices in the rental building near Florence Airport, reached by shuttle.",
    "moneyTip": "Florence's ZTL is strictly camera-enforced, so collect the car on your way out of the city and park outside the historic centre."
  }
};
