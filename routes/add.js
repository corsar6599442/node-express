const {Router} = require('express')
const Course = require('../models/course')
const router = Router()

router.get('/', (req, res) => {
    res.render('add', {
		title: 'Добавить курс',
		isAdd: true
	})
})

router.post('/', async (req, res) => {
    // const course = new Course(req.body.title, req.body.price, req.body.image)
    const course = new Course({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image
    })

    try {
        await course.save()
    } catch (e) {
        console.log(e)
        res.redirect('/courses')
    }
})

module.exports = router