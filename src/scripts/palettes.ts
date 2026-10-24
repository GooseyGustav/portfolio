export const K = ['bg', 'surface', 'fg', 'muted', 'line', 'accent', 'accent-soft', 'glow'];
export const palettes: Record<string, { name: string; light: string[]; dark: string[] }> = {
  ember: { name: 'Ember', light: ['#eef0f6', '#ffffff', '#14172b', '#5b6080', '#d4d8e6', '#e0661b', '#f8dcc8', '#9aa7ff'], dark: ['#0c0e1c', '#151935', '#e8eaf6', '#9298bd', '#262b4d', '#ff8a3d', '#3a2416', '#4b55c9'] },
  deepsea: { name: 'Deep Sea', light: ['#eef5f4', '#ffffff', '#0d2326', '#557173', '#cfe0de', '#0d9488', '#cdeeea', '#7cc6d8'], dark: ['#07161a', '#0e2429', '#e4f3f1', '#8fb3b0', '#1c3a3f', '#3fd0c9', '#0f3836', '#1f6f8b'] },
  aurora: { name: 'Aurora', light: ['#f6f1fa', '#ffffff', '#1d1228', '#6e5d80', '#e2d6ec', '#b0279e', '#f3d3ee', '#c2a7f5'], dark: ['#120b1a', '#1d1328', '#f1e9f7', '#a796b8', '#2f2240', '#e45bd1', '#3b1838', '#6d3fd1'] },
  steel: { name: 'Steel', light: ['#f1f2f4', '#ffffff', '#111317', '#5d636b', '#d9dce1', '#2457e6', '#d8e3ff', '#9db6ff'], dark: ['#0f1113', '#181b1f', '#eceef0', '#8d949c', '#262a30', '#3d7bff', '#142446', '#2a4a8f'] },
  forest: { name: 'Forest', light: ['#f1f4ee', '#ffffff', '#142018', '#5b6c5c', '#d6dfd2', '#a77a0c', '#f3e6c0', '#9fd0ad'], dark: ['#0d1510', '#15211a', '#e8efe6', '#94a693', '#23342a', '#e2b33c', '#3a3016', '#2f6b45'] },
};
