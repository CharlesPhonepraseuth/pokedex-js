const dataMapper = require('../dataMapper');

const typeController = {

    typesPage: (req, res) => {
        dataMapper.getAllTypes((err, data) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            
            console.log(data.rows);
        });
    }

};

module.exports = typeController;