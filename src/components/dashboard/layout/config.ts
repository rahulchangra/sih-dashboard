import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Overview', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'patients', title: 'Patients', href: paths.dashboard.patients, icon: 'users' },
  { key: 'appointments', title: 'Appointments', href: paths.dashboard.appointments, icon: 'calendar-plus' },
  { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'account', title: 'Account', href: paths.dashboard.account, icon: 'user' },

] satisfies NavItemConfig[];
