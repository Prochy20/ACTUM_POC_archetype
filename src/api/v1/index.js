const express = require('express');

const router = express.Router();

const emojiRoute = require('./emoji');

router.use('/emoji', emojiRoute);

/**
 * @method GET
 * @path /api/v1/
 * @return {JSON} API Status
 */
router.get('/', (req, res) => {
    res
        .json({
            status: 'OK',
            error: null,
            code: 200,
        });
});

module.exports = router;
