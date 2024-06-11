export const stripHtmlTags = (str) => {
    return str.replace(/<[^>]*>?/gm, "");
};

export const formatDate = (str) => {
    const date = new Date(str);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-GB", options);
    return formattedDate
};
