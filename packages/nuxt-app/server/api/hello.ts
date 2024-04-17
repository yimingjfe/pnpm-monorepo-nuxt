import { execa } from 'execa';
import { addWrap } from 'utils'

export default defineEventHandler(async() => {
  await execa('echo', ['hello execa']);
  return {
    hello: addWrap(2, 3)
  }
});
