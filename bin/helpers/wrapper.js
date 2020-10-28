const pagination = (res, data, req, totalData, code, message) => {
    let totalPage = 1;
    let total = 0;
    if (req.query.size !== null) {
        if (totalData > req.query.size) {
            total = req.query.size / totalData;
            totalPage = parseInt(total);
        }
    }
    res.send(code, {
        content: data,
        meta: {
            page: req.query.page !== null ? req.query.page : 0,
            size: req.query.size !== null ? req.query.size : 0,
            totalPage: totalPage,
            totalData: totalData,
        },
        message: message,
    });
};

module.exports = {
    pagination,
};
