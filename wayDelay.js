
/**
 * Delay an `action` for `time`
 * and then run the `action` asynchronously to other JavaScript.
 *
 * @param {number} time // Measured in milliseconds (1000ms = 1s).
 * @param {function} action
 */
const waydelay = (time, action) => {

  // Create a promise that will delay.
  const delay = (delayInMs) => {
    return new Promise(resolve => setTimeout(resolve, delayInMs));
  }

  // Make the promise, wait for it to complete, then run the `action`.
  const waydelayedAction = async () => {
    let delayRes = await delay(time);
    action();
  }

  // Finally, call the function that puts it all together.
  waydelayedAction();
}

define(function (require, exports, module) {

  module.exports = {
    waydelay: require('./waydelay.js')
  };

});