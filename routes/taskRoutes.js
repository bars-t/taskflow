const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/tasks.json');

let tasks = [
  {
    id: 1,
    title: "Veritabanı Tasarımı",
    description: "Tabloları ve ilişkileri belirle",
    status: "completed",
    priority: "high",
    assignee: "musa",
    createdAt: "2026-11-10T09:00:00.000Z"
  },
  {
    id: 2,
    title: "Middleware Geliştirme",
    description: "Logger katmanını hazırla",
    status: "in-progress",
    priority: "high",
    assignee: "ahmet",
    createdAt: "2026-11-12T10:15:00.000Z"
  },
  {
    id: 3,
    title: "Dokümantasyon Hazırlama",
    description: "Postman testlerini tamamla",
    status: "pending",
    priority: "medium",
    assignee: "zeynep",
    createdAt: "2026-11-13T11:00:00.000Z"
  }
];

try {
  if (fs.existsSync(dataPath)) {
    const fileData = fs.readFileSync(dataPath, 'utf-8');
    if (fileData.trim()) {
      tasks = JSON.parse(fileData);
    } else {
      fs.writeFileSync(dataPath, JSON.stringify(tasks, null, 2));
    }
  } else {
    fs.writeFileSync(dataPath, JSON.stringify(tasks, null, 2));
  }
} catch (e) {
  fs.writeFileSync(dataPath, JSON.stringify(tasks, null, 2));
}

function saveToFile() {
  try {
    fs.writeFileSync(dataPath, JSON.stringify(tasks, null, 2));
  } catch (e) {}
}

router.get('/', (req, res) => {
  res.json(tasks);
});

router.get('/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));

  if (!task) {
    return res.status(404).json({ mesaj: 'Görev bulunamadı' });
  }

  res.json(task);
});

router.post('/', (req, res) => {
  const { title, description, priority, assignee } = req.body;

  if (!title || !description || !assignee) {
    return res.status(400).json({ mesaj: 'Lütfen zorunlu alanları doldurun' });
  }

  const newTask = {
    id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    description,
    status: 'pending',
    priority: priority || 'medium',
    assignee,
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);
  saveToFile();

  res.status(201).json({ mesaj: 'Görev eklendi', gorev: newTask });
});

router.put('/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ mesaj: 'Görev bulunamadı' });
  }

  const { title, description, status, priority, assignee } = req.body;

  tasks[index] = {
    ...tasks[index],
    title: title || tasks[index].title,
    description: description || tasks[index].description,
    status: status || tasks[index].status,
    priority: priority || tasks[index].priority,
    assignee: assignee || tasks[index].assignee
  };

  saveToFile();
  res.json({ mesaj: 'Görev güncellendi', gorev: tasks[index] });
});

router.delete('/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ mesaj: 'Görev bulunamadı' });
  }

  const deleted = tasks.splice(index, 1);
  saveToFile();

  res.json({ mesaj: 'Görev silindi', silinen: deleted[0] });
});

module.exports = router;