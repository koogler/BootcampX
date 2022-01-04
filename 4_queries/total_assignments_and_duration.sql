SELECT day, count(content) as number_of_assignments, sum(duration)
FROM assignments
GROUP BY day
ORDER BY day;