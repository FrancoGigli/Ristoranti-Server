'use strict';

module.exports = {
    create(req, res) {
        const data = req.body;
        if (data.password !== data.confirmPassword) return res.badRequest("Password not the same");

        User.create({
            email: data.email,
            password: data.password,
            name: data.name
            //etc...
        })
            .then((user) => {
                res.send({ token: jwToken.issue({ id: user.id }) }); // payload is { id: user.id}
            })
            .catch((err) => {
                sails.log.error(err);
                return res.serverError("Something went wrong");
            });
    },

    login(req, res) {
        const data = req.body;

        if (!data.email || !data.password) return res.badRequest('Email and password required');

        User.findOne({ email: email })
            .then((user) => {
                if (!user) return res.notFound();

                User.comparePassword(password, user.password)
                    .then(() => {
                        return res.send({ token: jwToken.issue({ id: user.id }) })
                    })
                    .catch((err) => {
                        return res.forbidden();
                    });
            })
            .catch((err) => {
                sails.log.error(err);
                return res.serverError();
            });
    }
};