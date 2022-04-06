const express = require('express');

const router = express.Router();

/**
 * @typedef { import('express').Request } Request
 * @typedef { import('express').Response } Response
 * @typedef { import('express').NextFunction } Next
 */

/**
 * @method GET
 * @path /api/v1/emoji
 * @param {Request} req Express Request
 * @param {Response} res Express Response
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
