// const bcrypt = require('bcryptjs')

module.exports = {
    register:  (req, res) => {
        const { username, password } = req.body;
        // const { session } = req;
        const db = req.app.get('db');
        // const salt = bcrypt.genSaltSync(10);
        // const hash = bcrypt.hashSync(password, salt);
        let newUser = db.user.register({username: username, password: password});
        newUser = newUser[0];
        // sessionStorage.user = {...newUser};
        res.status(201).send(newUser);
    },
    login:  (req, res) => {
        const { username, password } = req.body;
        // const { session } = req;
        const db = req.app.get('db');
        let user = db.user.login({username: username});
        user = user[0];
        if (!user) {
            return res.sendStatus(400)
        }
        // const foundUser = bcrypt.compareSync(password, user.password)
        if (foundUser) {
            delete user.password
            session.user = user
            res.status(200).send(user)
        } else {
            res.sendStatus(401)
        }
    }
}