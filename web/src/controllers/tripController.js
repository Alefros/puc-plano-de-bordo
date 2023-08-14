const sqlite3 = require('sqlite3').verbose();

// Crie ou abra o banco de dados
const db = new sqlite3.Database('database.db');

// Crie a tabela trips se ela não existir
db.run(`CREATE TABLE IF NOT EXISTS trips (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  destination TEXT,
  startDate TEXT,
  endDate TEXT
)`);


exports.getTrips = (req, res) => {
    const tripId = req.query.id;

    if (tripId) {
        db.get('SELECT * FROM trips WHERE id = ?', tripId, (err, trip) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (!trip) {
            res.status(404).json({ error: 'Trip not found' });
            return;
        }
        res.json(trip);
        });
    } else {
        db.all('SELECT * FROM trips', (err, trips) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(trips);
        });
    }
};

exports.createTrip = (req, res) => {
  const { name, destination, startDate, endDate } = req.body;
  db.run('INSERT INTO trips (name, destination, startDate, endDate) VALUES (?, ?, ?, ?)',
    [name, destination, startDate, endDate],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID });
    });
};



exports.updateTrip = (req, res) => {
  const tripId = req.params.id;
  const updatedTrip = req.body;
  db.run('UPDATE trips SET name = ?, destination = ?, startDate = ?, endDate = ? WHERE id = ?',
    [updatedTrip.name, updatedTrip.destination, updatedTrip.startDate, updatedTrip.endDate, tripId],
    (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: 'Trip updated' });
    });
};

exports.deleteTrip = (req, res) => {
  const tripId = req.params.id;
  db.run('DELETE FROM trips WHERE id = ?', tripId, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Trip deleted' });
  });
};
