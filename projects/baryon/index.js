const axios = require('axios')

const endpoint = "https://api.baryon.network/program/pools"

async function fetch() {
  const pools = await axios.get(endpoint);
  return pools.data.reduce((sum, pool) =>
    sum + pool.liquidity
    , 0);
}

module.exports = {
  timetravel: false,
  fetch
}
