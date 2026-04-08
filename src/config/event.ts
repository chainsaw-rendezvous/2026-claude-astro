export const event = {
  year: 2026,
  name: '2026 Chainsaw Carvers Rendezvous',
  startDate: '2026-04-22',
  endDate: '2026-04-25',
  displayDates: 'April 22\u00a0\u2013\u00a025, 2026',
  location: {
    name: 'Ridgway Mills Campground',
    address: '260 W Main St, Ridgway, PA',
    full: 'Ridgway Mills Campground, 260 West Main Street, Ridgway, PA 15853',
    iCalFileName: '2026-rendezvous',
  },
  paths: {
    vendorInfo: '/2026/vendor-info',
    schedule: '/2026/schedule',
    carvers: '/2026/carvers',
  },
} as const;

export type EventConfig = typeof event;
