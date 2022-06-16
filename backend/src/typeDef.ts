export const typeDefinitions = `
enum DatePrecision {
    half, 
    quarter, 
    year, 
    month, 
    day, 
    hour
}

type Ship {
    name: String,
    model: String,
    type: String,
    roles: [String],
    active: Boolean,
    imo: Int,
    mmsi: Int,
    abs: Int,
    class: Int,
    mass_kg: Int,
    mass_lbs: Int,
    year_built: Int,
    home_port: Int,
    status: Int,
    speed_kn: Int,
    course_deg: Int,
    latitude: Int,
    longitude: Int,
    last_ais_update: String,
    link: String,
    image: String,
    launches: [Launch]
}

type Fairings {
    reused: Boolean,
    recovery_attempt: Boolean,
    recovered: Boolean,
    ships: [Ship]
}

type Patch {
    small: String,
    large: String
}

type Reddit {
    campaign: String,
    launch: String,
    media: String,
    recovery: String
}

type Links {
    patch: Patch,
    reddit: Reddit,
    webcast: String,
    youtube_id: String,
    article: String,
    wikipedia: String
}

type Failure {
    time: Int,
    altitude: Int,
    reason: String,
}

type Launch {
  fairings: Fairings,
  links: Links,
  name: String,
  full_name: String,
  status: String,
  locality: String,
  region: String,
  timezone: String,
  latitude: Int,
  longitude: Int,
  launch_attempts: Int,
  launch_successes: Int,
  rocket: String,
  success: Boolean,
  failures: [Failure],
  details: String,
  launchpad: String,
  flight_number: Int,
  date_utc: String,
  date_unix: Int,
  date_local: String,
  date_precision: DatePrecision,
  upcoming: Boolean,
  auto_update: Boolean
}

type Query {
  latest: Launch
  next: Launch
  past: [Launch]
  upcoming: [Launch]
}
`
