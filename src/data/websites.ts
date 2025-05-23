
export interface WebsiteEntry {
  id: string;
  name: string;
  url: string;
  status: 'available' | 'unavailable' | 'maintenance';
  category: 'Main' | 'User' | 'Others';
}

export const websiteData: WebsiteEntry[] = [
  // Main Websites - Add your main websites here
  { id: 'main-site-example-1', name: 'HF Main Portal', url: 'https://example.com/main-portal', status: 'available', category: 'Main' },
  { id: 'main-site-example-2', name: 'HF Core Services', url: 'https://example.com/core-services', status: 'maintenance', category: 'Main' },
  { id: 'main-site-example-3', name: 'HF Primary Platform', url: 'https://example.com/primary-platform', status: 'unavailable', category: 'Main' },

  // User Websites - Add your user-specific websites here
  { id: 'user-site-example-1', name: 'User Account Management', url: 'https://example.com/user-accounts', status: 'available', category: 'User' },
  { id: 'user-site-example-2', name: 'User Dashboard Services', url: 'https://example.com/user-dashboard', status: 'available', category: 'User' },
  
  // Other Websites - Add any other relevant websites here
  { id: 'other-site-example-1', name: 'Documentation Hub', url: 'https://example.com/docs', status: 'available', category: 'Others' },
  { id: 'other-site-example-2', name: 'Community Forums', url: 'https://example.com/forums', status: 'maintenance', category: 'Others' },
  { id: 'other-site-example-3', name: 'Support Ticket System', url: 'https://example.com/support-tickets', status: 'available', category: 'Others' },
  { id: 'other-site-example-4', name: 'Old Legacy System', url: 'https://example.com/legacy', status: 'unavailable', category: 'Others' },
];
