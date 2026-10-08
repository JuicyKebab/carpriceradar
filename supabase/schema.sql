-- CarPriceRadar price-history table.
-- Run in the Supabase SQL editor (or via CLI migration).

create table if not exists car_price_history (
  id          bigint generated always as identity primary key,
  airport_slug text not null,
  category    text not null,          -- economy / compact / suv / premium ...
  price       numeric(10,2) not null,
  currency    text not null default 'USD',
  captured_at timestamptz not null default now()
);

create index if not exists car_price_history_lookup
  on car_price_history (airport_slug, captured_at desc);

-- Public cache table: anyone may read, only the service role writes.
alter table car_price_history enable row level security;

create policy "read prices" on car_price_history
  for select to anon, authenticated using (true);

-- No insert/update/delete policy => only service_role (which bypasses RLS)
-- can write, which is exactly what the /api/snapshot cron uses.

-- Affiliate click log, written by /go/[partner]. No IP, UA or user id stored.
create table if not exists affiliate_clicks (
  id         bigint generated always as identity primary key,
  partner    text not null,               -- dc
  kind       text not null,               -- airport / country
  slug       text not null,
  placement  text not null,               -- top / bottom
  clicked_at timestamptz not null default now()
);

create index if not exists affiliate_clicks_lookup
  on affiliate_clicks (kind, slug, clicked_at desc);

-- RLS on with no policies => only service_role can read or write.
alter table affiliate_clicks enable row level security;
