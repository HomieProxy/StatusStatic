
export interface WebsiteEntry {
  id: string;
  name: string;
  url: string;
  status: 'available' | 'unavailable' | 'maintenance';
  category: 'Main' | 'User' | 'Others';
}

export const websiteData: WebsiteEntry[] = [
  // Main Websites - Add your main websites here
  { id: 'main-site', name: 'HF Main Portal', url: 'https://example.com/main-portal', status: 'available', category: 'Main' },

  // User Websites - Add your user-specific websites here
  { id: 'user-site-1', name: 'User Dashboard 01', url: 'https://example.com/user-dashboard01', status: 'available', category: 'User' },
  { id: 'user-site-2', name: 'User Dashboard 02', url: 'https://example.com/user-dashboard02', status: 'available', category: 'User' },
  { id: 'user-site-3', name: 'User Dashboard 03', url: 'https://example.com/user-dashboard03', status: 'available', category: 'User' },
  
  // Other Websites - Add any other relevant websites here
  { id: 'other-site-1', name: 'Documentation Hub', url: 'https://example.com/docs', status: 'available', category: 'Others' },
];
