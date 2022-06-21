enum DatePrecision {
  half,
  quarter,
  year,
  month,
  day,
  hour,
}

interface Ship {
  name: string
  model: string
  interface: string
  roles: string[]
  active: boolean
  imo: number
  mmsi: number
  abs: number
  class: number
  mass_kg: number
  mass_lbs: number
  year_built: number
  home_port: number
  status: number
  speed_kn: number
  course_deg: number
  latitude: number
  longitude: number
  last_ais_update: string
  link: string
  image: string
  launches: Launch[]
}

export interface Fairings {
  reused: boolean
  recovery_attempt: boolean
  recovered: boolean
  ships: Ship[]
}

interface Patch {
  small: string
  large: string
}

interface Reddit {
  campaign: string
  launch: string
  media: string
  recovery: string
}

interface Links {
  patch: Patch
  reddit: Reddit
  webcast: string
  youtube_id: string
  article: string
  wikipedia: string
}

interface Failure {
  time: number
  altitude: number
  reason: string
}

interface Launch {
  fairings: Fairings
  links: Links
  name: string
  full_name: string
  status: string
  locality: string
  region: string
  timezone: string
  latitude: number
  longitude: number
  launch_attempts: number
  launch_successes: number
  rocket: string
  success: boolean
  failures: Failure[]
  details: string
  launchpad: string
  flight_number: number
  date_utc: string
  date_unix: number
  date_local: string
  date_precision: DatePrecision
  upcoming: boolean
  auto_update: boolean
}

interface LatestType {
  latest: Launch
}

interface NextType {
  next: Launch
}

interface PastType {
  past: Pagination
}

interface UpcomingType {
  upcoming: Pagination
}

interface Pagination {
  launches: [Launch]
  totalItems: number
}
