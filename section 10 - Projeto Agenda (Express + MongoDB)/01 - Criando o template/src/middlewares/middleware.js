exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Valor da variavel local.'
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN') {
        return res.render('includes/404');
    }
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};