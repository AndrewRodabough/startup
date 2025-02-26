import express from 'express';
import { tokenValidation } from '../../middleware/jsonValidation.js';
import { CalendarController } from '../../controllers/calendarController.js';
import { validationResult } from 'express-validator';

const router = express.Router();

export default function(dataStore) {
    
    const calendarController = new CalendarController(dataStore);

    router.get('/', tokenValidation, async (req, res) => {

        // check for req errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // get all calendars of a user
        try {

            console.log("\n\nR: getAllCalendars");
            const token = req.headers.authorization;
            const result = await calendarController.getAll(token);
            console.log(result);
            return res.status(200).json(result);

        } catch (error) {

            return res.status(500).json({ error: error.message });
        }
    });

    return router;
};