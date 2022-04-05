const express = require('express');

const router = express.Router();

/**
 * @method GET
 * @path /api/v1/emoji
 * @return {JSON} Emoji
 * @description This is an example of GET endpoint
 * @todo It should be deleted in production
 */
router.get('/', (req, res) => {
    res
        .json({
            message: '👋👋 🐭 👋👋',
            status: 'OK',
            error: null,
            code: 200,
        });
});

module.exports = router;
