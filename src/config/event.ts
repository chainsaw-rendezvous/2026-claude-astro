export const event = {
  year: 2027,
  name: '2027 Chainsaw Carvers Rendezvous',
  startDate: '2027-04-21',
  endDate: '2027-04-24',
  displayDates: 'April 21\u00a0\u2013\u00a024, 2027',
  location: {
    name: 'Ridgway Mills Campground',
    address: '260 W Main St, Ridgway, PA',
    full: 'Ridgway Mills Campground, 260 West Main Street, Ridgway, PA 15853',
    iCalFileName: '2027-rendezvous',
  },
  paths: {
    vendorInfo: '/2027/vendor-info',
    schedule: '/2027/schedule',
    carvers: '/2027/carvers',
  },
} as const;

export type EventConfig = typeof event;
