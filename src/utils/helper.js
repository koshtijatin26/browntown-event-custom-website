export const formatDateUS = (dateString, hideTime = false) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const options = {
        month: "short",
        day: "numeric",
        year: "numeric",
    };
    if (!hideTime) {
        options.hour = "numeric";
        options.minute = "numeric";
        options.hour12 = true;
    }
    return new Intl.DateTimeFormat("en-US", options).format(date);
};
