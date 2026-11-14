const express = require('express');
const logger = require('./middleware/logger');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger);
app.use('/tasks', taskRoutes);



app.get('/', (req, res) => {
  res.json({ message: 'TaskFlow API çalışıyor' });
});

app.use((req, res) => {
  res.status(404).json({ mesaj: 'Endpoint bulunamadı' });
});

app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} üzerinde çalışıyor`);
});