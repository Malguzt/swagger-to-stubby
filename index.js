const mapper = require('./lib/mapper')

export const getEndpoints = swaggerSpec => {
    return mapper.getEndpoints(swaggerSpec)
}