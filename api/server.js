const express = require('express');
const configMiddleware = require('../middleware/config.js');

const verifyToken = require('../middleware/token.js')
const verifySession = require('../middleware/session.js');
const authRouter = require('../auth/auth-router.js');
const adminsRouter = require('../models/admins/admins-router.js');
const sectionleadsRouter = require('../models/sectionleads/sectionleads-router.js');
const teamleadsRouter = require('../models/teamleads/teamleads-router.js');
const studentsRouter = require('../models/students/students-router.js');
const cohortsRouter = require('../models/cohorts/cohorts-router.js');
const assignmentsRouter = require('../models/assignments/assignments-router.js');
const attendanceRouter = require('../models/attendance/attendance-router.js');
const gradesRouter = require('../models/grades/grades-router.js');
const retrosRouter = require('../models/retros/retros-router.js');
const ticketsRouter = require('../models/tickets/tickets-router.js');

const server = express();

configMiddleware(server);

server.use('/api/auth', authRouter);
server.use('/api/admins', verifyToken, adminsRouter);
server.use('/api/sectionleads', verifyToken, sectionleadsRouter);
server.use('/api/teamleads', verifyToken, teamleadsRouter);
server.use('/api/students', verifyToken, studentsRouter);
server.use('/api/cohorts', verifyToken, cohortsRouter);
server.use('/api/assignments', verifyToken, assignmentsRouter);
server.use('/api/attendance', verifyToken, attendanceRouter);
server.use('/api/grades', verifyToken, gradesRouter);
server.use('/api/retros', verifyToken, retrosRouter);
server.use('/api/tickets', verifyToken, ticketsRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Server is online!</h2><br><div>Visit: <a href='https://github.com/TL-Dashboard/backend'>https://github.com/TL-Dashboard/backend</a> for more API info.</div>`)
  });

module.exports = server;
