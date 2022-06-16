import { URL } from './utils/constraints'

export const routes = () => ({
  latest: `${URL}/latest`,
  next: `${URL}/next`,
  past: `${URL}/past`,
  upcoming: `${URL}/upcoming`,
})
