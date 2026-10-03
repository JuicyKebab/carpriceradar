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
