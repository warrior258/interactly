const { pool } = require('../db/config');
const mysql = require('mysql');

const getAllContacts = (req, res) => {
    
    try {
        pool.getConnection((err, connection) => {
            if(err){
                return res.send('Cannot connect to the db');
            }
                        
            connection.query('SELECT * FROM contacts', (err, rows) => {

                connection.release();

                if(err){
                    return res.send('Query cannot executed!')
                }

                if(rows.length === 0){
                    return res.status(200).json({message: 'No Contacts found'});
                }
                
                res.status(200).json({contacts: rows});
            })
        });
        
    } catch (error) {        
        res.send('Connection error!!');
    }
};

const createContact = (req, res) => {
    // console.log(req.body);
    const { first_name, last_name, email, mobile_number } = req.body;

    try {
        pool.getConnection((err, connection) => {
            if(err){
                return res.send('Cannot connect to the db');
            }
                        
            connection.query('INSERT INTO contacts (first_name, last_name, email, mobile_number) VALUES (?, ?, ?, ?);', [first_name, last_name, email, mobile_number], (err, result) => {
               
                if(err){
                    return res.send('Query cannot executed!')
                }
                
                res.status(200).json({message: "Contact Created!"})
                
            })
        });
        
    } catch (error) {        
        res.send('Connection error!!');
    }
    
    
};

const editContact = (req, res) => {
    
    const { id } = req.params;
    // console.log(req.body);
    const { first_name, last_name, email, mobile_number } = req.body;

    try {
        pool.getConnection((err, connection) => {
            if(err){
                return res.send('Cannot connect to the db');
            }
                        
            connection.query('UPDATE contacts SET first_name=?, last_name=?, email=?, mobile_number=? WHERE id=?;', [first_name, last_name, email, mobile_number, id], (err, result) => {
               
                if(err){
                    // console.log(err);
                    return res.send('Query cannot executed!')
                }
                
                res.status(200).json({message: "Contact Updated!"})
                
            })
        });
        
    } catch (error) {        
        res.send('Connection error!!');
    }
};

const deleteContact = (req, res) => {

    const { id } = req.params;

    try {
        pool.getConnection((err, connection) => {
            if(err){
                return res.send('Cannot connect to the db');
            }
                        
            connection.query('DELETE FROM contacts WHERE id=?;', [id], (err, result) => {
               
                if(err){
                    return res.send('Query cannot executed!')
                }
                
                res.status(200).json({message: "Contact Deleted!"})
                
            })
        });
        
    } catch (error) {        
        res.send('Connection error!!');
    }
};

module.exports = {
    getAllContacts,
    createContact,
    editContact,
    deleteContact
}
