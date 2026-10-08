# CarPriceRadar — easy-KD airport backlog

Distinct airports with **KD ≤ 15** and real "car rental [airport]" volume (US-locale, OpenSEO),
**not yet built**. Sourced from 4 OpenSEO seed scans (airport car rental / car hire / greece / caribbean),
deduped from phrasing variants (e.g. kona/koa/kailua-kona = one airport). Current live set = 50.

**Order of play:** the 50 live first. Promote the next wave only once GSC shows the current 50 indexing
and ranking (the 87%-vs-41% staged-indexation rule). Build pipeline = research agents (details) +
`_enrich`-style generator (drives/climate) + status flip + deploy — same as waves 1-2.

## Wave 3 — highest priority (US, high volume, low KD)

| Airport | IATA | KD | Volume |
|---|---|---|---|
| San Juan (Luis Munoz Marin) | SJU | 0 | 14,800 |
| Cleveland Hopkins | CLE | 0 | 6,600 |
| Nashville | BNA | 5 | 9,900 |
| Sarasota | SRQ | 0 | 9,900 |
| Kona (Big Island) | KOA | 0 | 8,100 |
| Kahului (Maui) | OGG | 0 | 9,900 |
| New Orleans (Louis Armstrong) | MSY | 0 | 8,100 |
| Washington Dulles | IAD | 0 | 6,600 |
| Washington Reagan | DCA | 4 | 8,100 |
| Indianapolis | IND | 3 | 8,100 |
| Ontario (CA) | ONT | 0 | 8,100 |
| Dallas Love Field | DAL | 6 | 8,100 |
| Jacksonville | JAX | 7 | 8,100 |
| Charlotte | CLT | 12 | 9,900 |

## Wave 4 — US mid-volume, low KD

| Airport | IATA | KD | Volume |
|---|---|---|---|
| Myrtle Beach | MYR | 0 | 6,600 |
| West Palm Beach | PBI | 0 | 6,600 |
| Burbank (Bob Hope / Hollywood) | BUR | 0 | 6,600 |
| Norfolk | ORF | 0 | 5,400 |
| Buffalo | BUF | 0 | 5,400 |
| Reno | RNO | 3 | 6,600 |
| Savannah | SAV | 7 | 6,600 |
| LaGuardia | LGA | 7 | 6,600 |
| Kansas City | MCI | 9 | 5,400 |
| Cincinnati | CVG | 9 | 6,600 |
| Columbus (OH) | CMH | 0 | 2,400 |
| Knoxville | TYS | 0 | 4,400 |
| Syracuse | SYR | 0 | 3,600 |
| Milwaukee | MKE | 19 (borderline) | 5,400 |
| Albuquerque | ABQ | 11 | 9,900 |
| Oakland | OAK | 5 | 12,100 |

## Wave 5 — international (KD mostly 0, lower volume, strong CPC / holiday)

| Airport | IATA | KD | Volume |
|---|---|---|---|
| Calgary | YYC | 3 | 8,100 |
| Toronto Pearson | YYZ | 6 | 3,600 |
| Halifax | YHZ | 0 | 1,300 |
| Mexico City | MEX | 0 | 1,300 |
| Costa Rica (San Jose) | SJO | 0 | 6,600 |
| Amsterdam Schiphol | AMS | 0 | 1,000 |
| Shannon | SNN | 0 | 1,300 |
| Athens | ATH | 0 | ~400 |
| Thessaloniki | SKG | 0 | ~400 |
| Heraklion (Crete) | HER | 1 | ~300 |
| Chania (Crete) | CHQ | 0 | ~300 |
| Rhodes | RHO | 2 | ~200 |
| Split | SPU | 0 | ~400 |
| Zagreb | ZAG | 0 | 1,000 |
| Melbourne (Tullamarine) | MEL | 0 | 1,000 |
| Florence | FLR | 0 | 1,300 |

## Wave 6 — regional scans (Italy, France, Germany, Canada, Australia, South Africa, extra US)

Added after 8 more OpenSEO regional seeds. KD ≤15 unless marked. Volumes are low outside the US, but CPC is $9-15.

| Airport | IATA | KD | Volume |
|---|---|---|---|
| Bozeman (Montana) | BZN | 12 | 8,100 |
| Vancouver | YVR | 1 | 3,600 |
| Frankfurt | FRA | 0 | 2,400 |
| Milan | MXP/LIN | 21 (16-30 band) | 1,900 |
| Rome Fiumicino | FCO | 5 | 1,600 |
| Munich | MUC | 19 (16-30 band) | 1,600 |
| Montreal | YUL | 0 | 1,000 |
| Venice | VCE | 0 | 1,000 |
| Naples | NAP | 0 | 880 |
| Marseille | MRS | 12 | 720 |
| Edmonton | YEG | 0 | 720 |
| Bari | BRI | 0 | 720 |
| Cape Town | CPT | 0 | 480 |
| Brisbane | BNE | 0 | 390 |
| Pisa | PSA | 0 | 390 |
| Perth | PER | 0 | 320 |
| Bologna | BLQ | 0 | 320 |
| Bergamo | BGY | 0 | 260 |
| Toulouse | TLS | 5 | 260 |
| Verona | VRN | 0 | 210 |
| Hamburg | HAM | 0 | 210 |
| Stuttgart | STR | 0 | 210 |
| Aruba | AUA | 1 | 18,100 (destination-level keyword "aruba car rental") |

Thailand and the Spanish islands returned nothing usable (volumes 10-30). Not worth building.

## Wave 7 — found via other search intents (return / rental car center / off-airport)

New airports not seen in the "car rental [airport]" scans. KD ≤15.

| Airport | IATA | KD | Volume | Intent that surfaced it |
|---|---|---|---|---|
| San Jose (CA) | SJC | 7 | 9,900 | "car rental return san jose airport" |
| Providence | PVD | 6 | 2,400 | "pvd airport rental car return" |
| Asheville | AVL | 1 | 2,400 | "asheville airport car rental" |
| Zurich | ZRH | 0 | 1,600 | "car rental zurich airport" |
| Curacao | CUR | 0 | 1,600 | "car rental curacao airport" |
| Midland (TX) | MAF | 0 | 1,000 | "midland airport car rental" |
| Krakow | KRK | 0 | 880 | "car rental krakow airport" |

## Intent angle for the airports already live (no new pages needed)

Navigational and logistics queries have far more volume than the commercial ones, at airports we already built:

| Query shape | Examples (KD / volume) |
|---|---|
| "[airport] rental car center" | SFO 0 / 135,000 · PHX 0 / 110,000 · LAX 2 / 110,000 · SEA 0 / 110,000 · TPA 12 / 74,000 · LAS 11 / 9,900 · ATL 0 / 3,600 · PDX 0 / 3,600 |
| "rental car return [airport]" | MCO 16-21 / 12,100 · SAN 9 / 8,100 · ATL 7-10 / 6,600 · FLL 12-14 / 5,400 · LAS 9 / 5,400 · EWR 0 / 4,400 · PDX 0 / 4,400 · BOS 8 / 3,600 |

Caveat: these searchers usually already have a booking (CPC ~$2 vs ~$7), so affiliate value per visit is lower. The value is traffic, links and AI-answer visibility. The pages already cover rental-center logistics; a dedicated "rental car center" and "return" section per airport would target these terms.

## Notes
- **San Juan (SJU)** is the standout: KD 0 at 14,800 volume, US-locale demand (domestic PR travel). Build first in wave 3.
- IATA/volume are from the OpenSEO scans; re-verify KD + volume at build time (they drift).
- Keyword supply is NOT the bottleneck (218 easy-KD airport candidates found across 4 seeds). Domain authority to rank + content depth are. Scale in waves, watch GSC.
- Long tail beyond this list exists (more seeds per region would surface Asia-Pacific, more Spanish/Italian/French regional airports).
