import { skHelper } from '@supabase/auth-helpers-sveltekit';
import type { User } from '@supabase/supabase-js';
import { derived, writable } from 'svelte/store';

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

const { supabaseClient } = skHelper(supabaseUrl, supabaseAnonKey);
if (!supabaseClient) throw new Error('Failed to initialize supabase');

export const supabase = supabaseClient;

export const user = writable<User | null>();

export const loggedIn = derived(user, ($user) => !!$user);

export function getPublicUrl(bucket: string, path: string) {
    return supabase.storage.from(bucket).getPublicUrl(path).publicURL as string;
}
