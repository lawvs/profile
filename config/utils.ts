import path from 'path'

export const resolvePath = (dir = '') => path.join(__dirname, '..', dir)
