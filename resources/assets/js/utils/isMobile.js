export default function () {
  const deviceAgent = navigator.userAgent.toLowerCase();
  const mobileAgent = (
    deviceAgent.match(/(iphone|ipod|ipad)/)
    || deviceAgent.match(/(android)/)
    || deviceAgent.match(/(iemobile)/)
    || deviceAgent.match(/blackberry/i)
    || deviceAgent.match(/samsungbrowser/i))
    || (/OS [1-4]_[0-9_]+ like Mac OS X/i.test(navigator.userAgent)
    );

  const htmlClassList = document.documentElement.classList;
  if (mobileAgent) {
    htmlClassList.add('mobile');
    htmlClassList.remove('no-mobile');
  } else {
    htmlClassList.add('no-mobile');
    htmlClassList.remove('mobile');
  }

  return mobileAgent;
}
