SELECT day, count(*) as total_assignments
FROM assignments
GROUP BY day
HAVING count(assignments.*) >=10
ORDER BY day ASC;
