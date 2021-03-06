/**
 * Returns a value if it is valid between one of the switch cases.
 * 
 * @param {string} pageType Desired value to be searched after.
 * @returns {string} Value if valid between the switch cases.
 */
const translatePageType = (pageType) => {
    switch (pageType){
        case 'post':
            return 'blog';
        case 'course':
            return 'courses';
        case 'podcast':
            return 'podcasts';
        case 'product':
            return 'store';
        default:
            return pageType;
    };
};

export default translatePageType;