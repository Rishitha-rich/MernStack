const Products = require('./routes/ProductRoute')
const Users = require('./routes/UserRoute')
const Orders = require('./routes/OrderRoute')
const Auth = require('./routes/AuthRoute')
app.get('/', (req, res) => res.status(200).json({ message: "Welcome" }))
app.use('/products', Products)
app.use('/users', Users)
app.use('/orders', Orders)
app.use('/auth', Auth)

app.listen(port, (() => console.log(`Listening on ${port}`)))


