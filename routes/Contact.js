const express = require('express');
const router = express.Router();

const {
    getAllContacts,
    createContact,
    editContact,
    deleteContact
} = require('../controllers/Contact')


router.get('/getContact', getAllContacts);
router.post('/createContact', createContact);
router.post('/editContact/:id', editContact);
router.post('/deleteContact/:id', deleteContact);

module.exports = router;