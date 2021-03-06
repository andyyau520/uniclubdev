// ref:
//  - <https://github.com/ReactTraining/react-router/issues/3103>
//  - <https://github.com/baronswindle/react-router-compose-hooks/blob/master/index.js>

export default {
  parallel(...hooks) {
    let callbacksRequired = hooks.reduce((totalCallbacks, hook) => {
      if (hook.length >= 3) {
        totalCallbacks++;
      }
      return totalCallbacks;
    }, 0);

    return function onEnter(nextState, replace, executeTransition) {
      let callbacksInvoked = 0;
      hooks.forEach((hook) => {
        hook.call(this, nextState, replace, () => {
          if (++callbacksInvoked === callbacksRequired) {
            executeTransition();
          }
        });
      });
      if (!callbacksRequired) {
        executeTransition();
      }
    };
  },

  series(...hooks) {
    return function onEnter(nextState, replace, executeTransition) {
      (function executeHooksSynchronously(remainingHooks) {
        if (!remainingHooks.length) {
          return executeTransition();
        }
        let nextHook = remainingHooks[0];
        if (nextHook.length >= 3) {
          nextHook.call(this, nextState, replace, () => {
            executeHooksSynchronously(remainingHooks.slice(1));
          });
        } else {
          nextHook.call(this, nextState, replace);
          executeHooksSynchronously(remainingHooks.slice(1));
        }
      })(hooks);
    };
  },
};
