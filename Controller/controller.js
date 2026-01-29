const db = require('../data/db');

/* GET all students */
exports.getStudents = (req, res) => {
    db.query('SELECT * FROM students', (err, results) => {
        if (err) {
            console.error('Error fetching students:', err.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results);
    });
};

/* ADD student */
exports.addStudent = (req, res) => {
    const { id, name, depart } = req.body;

    const query = 'INSERT INTO students (id, name, depart) VALUES (?, ?, ?)';
    db.query(query, [id, name, depart], (err, results) => {
        if (err) {
            console.error('Error adding student:', err.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        res.status(201).json({
            message: 'Student data added successfully',
            id: results.insertId
        });
    });
};

/* UPDATE student */
exports.updateStudent = (req, res) => {
    const { id } = req.params;
    const { name, depart } = req.body;

    const query = 'UPDATE students SET name = ?, depart = ? WHERE id = ?';
    db.query(query, [name, depart, id], (err, results) => {
        if (err) {
            console.error('Error updating student:', err.message);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.json({ message: 'Student data updated successfully' });
    });
};
