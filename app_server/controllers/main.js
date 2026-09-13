/* GET Homepage */
    const index = (req, res) => {
        res.render('index', { title: 'Travlr Getaway' });
        }; 

    module.exports = {
        index
    };