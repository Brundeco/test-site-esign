const deviceAgent = navigator.userAgent.toLowerCase();
export const isMobile =
    deviceAgent.match(/(iphone|ipod|ipad)/) ||
    deviceAgent.match(/(android)/) ||
    deviceAgent.match(/(iemobile)/) ||
    deviceAgent.match(/blackberry/i) ||
    deviceAgent.match(/samsungbrowser/i) ||
    /OS [1-4]_[0-9_]+ like Mac OS X/i.test(navigator.userAgent);

export const setIsMobileClass = () => {
    const htmlClassList = document.documentElement.classList;
    if (isMobile) {
        htmlClassList.add('mobile');
        htmlClassList.remove('no-mobile');
    } else {
        htmlClassList.add('no-mobile');
        htmlClassList.remove('mobile');
    }
};
