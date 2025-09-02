import { config } from "../config/main.config"

export const buildExchangerateConvertURL = (from: string, to: string, amount: number): string => {
    const endPoint = '/convert'
    return `${config.exrate_api_url}${endPoint}?${config.exrate_api_key}&${from}&${to}&${amount}`
}