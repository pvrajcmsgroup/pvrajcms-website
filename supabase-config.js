
// PVrajCMS Central Supabase Configuration

const PV_SUPABASE_URL =
  "https://dtkafclesecmrxalohbm.supabase.co";

const PV_SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_BO95M7yNnhsEuCT2qY4GBg_hI-khh8l";

const pvSupabase = window.supabase.createClient(
  PV_SUPABASE_URL,
  PV_SUPABASE_PUBLISHABLE_KEY
);
