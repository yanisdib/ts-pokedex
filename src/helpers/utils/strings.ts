export const toPascalCase = (text: string): string => {
    const regex = /(^\w|-\w)/g;

    return text.replace(regex, clearAndUpperText);
}

const clearAndUpperText = (text: string): string => {
    return text.replace('-', '')
        .toUpperCase()
}