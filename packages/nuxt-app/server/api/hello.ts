import { addWrap } from 'utils'

export default defineEventHandler(async() => {
  return {
    hello: addWrap(2, 3)
  }
});
