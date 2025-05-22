require('dotenv').config();
console.log('nirbhay tiwari ...');

const express = require('express');
const { exec } = require('child_process');
const client = require('./db/psql/db');
const authRouter = require('./routes/user-routes');
const homeRouter = require('./routes/home-route');
const adminRouter = require('./routes/admin-routes');
const learningRouter = require('./routes/learning-routes');

const app = express();
app.use(express.json());

// Auto-sync Prisma schema (creates missing tables)
exec('npx prisma db push --accept-data-loss', (err, stdout, stderr) => {
    if (err) {
      console.error('❌ Prisma DB sync failed:', stderr);
    } else {
      console.log('✅ Prisma schema synced:\n', stdout);
    }
  });

// PostgreSQL connection
client.connect()
  .then(() => console.log('Connected to the PostgreSQL database'))
  .catch((err) => console.error('Connection error', err.stack));

// API routes
app.use('/api/v1/user', authRouter);
app.use('/api/v1/user', homeRouter);
app.use('/api/v1/user/learning', learningRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
