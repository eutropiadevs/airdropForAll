
export const truncateString = (string, front, back) => {
    return `${string.substring(0, front)}.....${string.substring(
        string.length - back,
        string.length
    )}`;
}
