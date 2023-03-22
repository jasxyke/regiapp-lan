const validator = require('validator')
const httpErr = require('http-errors')
const masterlist = require('../models/masterlist')

function createError(msg) {
    return httpErr(400, msg)
}

function validateFullname(fullname) {
    if (!fullname) throw createError('Fullname is required')
    return fullname
}

function validateCourseId(id) {
    if (!id) throw createError('Course id is required')
    return id
}

function validateYear(year) {
    if (!year) throw createError('Year is required')
    return year
}