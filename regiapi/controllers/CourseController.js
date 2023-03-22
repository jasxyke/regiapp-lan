const httpErr = require('http-errors')
const course = require('../models/courses')

class CourseController {

    static async index(req, res) {
        try {
            res.send(await course.all())
        } catch (error) {
            res.send(err)
        }
    }
}

module.exports = CourseController