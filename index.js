
const path = require('path')

const express = require('express')
const hbs = require('handlebars')
const exphbs = require('express-handlebars')
const layouts = require('handlebars-layouts')

const homeControllers = require('./routers/home')
const coursesControllers = require('./routers/courses')
const addCourseController = require('./routers/addCourse')
const cartController = require('./routers/cart')


const PORT = process.env.PORT || 3000

const app = express()

layouts.register(hbs);
app.engine('hbs', exphbs({
    partilDir: path.resolve(__dirname, "views", "partials"),
    layoutsDir: path.resolve(__dirname, "views", "layouts"),
    defaultLayout: 'main',
    extname: 'hbs'
}))

app.set('view engine', 'hbs')
app.set('views', path.resolve(__dirname, "views"))

app.use(express.static(path.resolve(__dirname, 'public')));

// for url data pars
app.use(express.urlencoded({ extended: true }))

app.use('/', homeControllers)
app.use('/courses', coursesControllers)
app.use('/add-course', addCourseController)
app.use('/cart', cartController)


app.listen(PORT, () => console.log(`Server is running on ${PORT}`))


async function start() {
    try {
        const url = ''
        await mongoose.connect(url, { usNewUrlParser: true })
        app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
    } catch (e) {
        console.log("Start func", e)
    }
}


