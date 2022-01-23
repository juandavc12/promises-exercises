/**
 *
 * EXERCISE 1
 *
 * @param {Promise} promise
 * @param {function} asyncTransformer
 */
function flatMapPromise(promise, asyncTransformer) {
  return new Promise((resolve, reject) => {
    promise
      .then((value) => resolve(asyncTransformer(value)))
      .catch((value) => reject(value));
  });
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise} firstPromise
 * @param {function} slowAsyncProcess
 */
function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess) {
  return firstPromise.then((value) => slowAsyncProcces(value));
}

/**
 *
 * EXERCISE 3
 *
 * @param {function} getUserById
 * @param {function} getOrganizationById
 */
function makeGetUserByIdWithOrganization(getUserById, getOrganizationById) {
  return function getUserByIdWithOrganization(userId) {
    return new Promise((resolve) => {
      getUserById(userId).then((value) => {
        if (value !== undefined) {
          getOrganizationById(val['organizationId']).then((value2) => {
            resolve({
              ...value,
              organization: value2,
            });
          });
        } else {
          resolve(value);
        }
      });
    });
  };
}

module.exports = {
  flatMapPromise,
  chainTwoAsyncProcesses,
  makeGetUserByIdWithOrganization,
};
