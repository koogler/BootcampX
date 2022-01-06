const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2]

pool.query(`
SELECT teachers.name as teacher, cohorts.name as cohort, count(assistance_requests) as total_assistances
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE '%${cohortName}%'
GROUP BY teachers.name, cohorts.name
ORDER BY teacher;
`)
  .then(res => {
    res.rows.forEach(row => {
      console.log(`${cohortName}: ${row.teacher}`);
    })
  }).catch(err => console.error('query error', err.stack));
