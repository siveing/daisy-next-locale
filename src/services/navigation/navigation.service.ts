import baseServiceApi from "../fetch.service"

export const getNavigation = (): Promise<void> => {
    return baseServiceApi(`topics/tree`, "GET");
}
