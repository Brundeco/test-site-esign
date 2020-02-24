// Avoid `console` errors in browsers that lack a console.
const nativeConsole = (() => {
    let method;
    const noop = () => {};
    const methods = [
        'assert',
        'clear',
        'count',
        'debug',
        'dir',
        'dirxml',
        'error',
        'exception',
        'group',
        'groupCollapsed',
        'groupEnd',
        'info',
        'log',
        'markTimeline',
        'profile',
        'profileEnd',
        'table',
        'time',
        'timeEnd',
        'timeStamp',
        'trace',
        'warn',
    ];
    let { length } = methods;
    const console = window.console ? window.console : {};

    // eslint-disable-next-line
    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
})();

export { nativeConsole as default };
