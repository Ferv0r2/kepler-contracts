import { cav } from "klaytn/caver.js";

/**
 * 1. Create contract instance
 * ex:) new caver.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS)
 * You can call contract method through this instance.
 * Now you can access the instance by `this.countContract` variable.
 */

const KeplerContract =
  DEPLOYED_ABI &&
  DEPLOYED_ADDRESS &&
  new caver.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS);

export default KeplerContract;

KeplerContract.options.jsonInterface;
