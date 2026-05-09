const express = require('express');
const router = express.Router();

let notifications = [
    {
        id: 1,
        message: 'Welcome Notification'
    }
];

router.get('/', (req, res) => {
    res.json(notifications);
});

router.post('/', (req, res) => {
    const newNotification = {
        id: notifications.length + 1,
        message: req.body.message
    };

    notifications.push(newNotification);

    res.status(201).json(newNotification);
});

module.exports = router;