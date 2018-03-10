/**
 * Defines versions routes for HostMaker api example
 * @author Rúben Gomes <ruben.gomes@timewax.com>
 */

const express = require('express')
const controller = require('./controller')
const router = new express.Router()

exports.routes = () => {
    //router.get('/', controller.getVersionsOfProperty)

    return router
}
