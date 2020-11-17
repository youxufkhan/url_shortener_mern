module.exports = (app) => {
    const mainController = require('../controller/main.controller');

    //Main Routes
    app.route('/link/create')
        .post(mainController.createLink);
    app.route('/link/getUrl')
        .get(mainController.getLink);

};

