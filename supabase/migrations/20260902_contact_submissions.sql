-- Run this in the Supabase SQL editor (or via `supabase db push` if you use the CLI)
-- for project pjbwutcxrffnoinzwpfx. It was written by hand, not applied — no
-- credentials to this project were available while building the contact form.

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  honeypot text,
  created_at timestamptz not null default now()
);

alter table public.contact_submissions enable row level security;

-- Anonymous visitors may only INSERT — never read, update, or delete existing
-- submissions. Read access stays restricted to authenticated staff.
create policy "Anyone can submit the contact form"
  on public.contact_submissions
  for insert
  to anon
  with check (true);

create policy "Authenticated staff can read submissions"
  on public.contact_submissions
  for select
  to authenticated
  using (true);

-- Optional: fires the send-contact-notification Edge Function on every insert
-- so a submission emails team@techmechatorque.com. Requires the function to be
-- deployed first (see supabase/functions/send-contact-notification) and a
-- database webhook configured in the Supabase dashboard under
-- Database -> Webhooks, pointed at that function, on INSERT for this table.
-- This is dashboard configuration, not SQL — noted here for completeness.
