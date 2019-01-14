// Log ga calls in development
export default function () {
  if (typeof window.ga === typeof undefined) {
    window.ga = (...args) => {
      const msg = `[GA DEV] Call with arguments "${args.join('", "')}"`;
      // eslint-disable-next-line no-console
      console.log(`%c${msg}`, 'background: #ff9800; color: #fff;');
    };
  }
}
