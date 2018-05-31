import * as pro from './action-type'

export const list = data => {
    return {
        type: pro.LIST,
        data
    }
}