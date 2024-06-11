export const stripHtmlTags = (str) => {
    return str.replace(/<[^>]*>?/gm, '');
};
