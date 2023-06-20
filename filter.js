const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

const counts = ['1', '2', '3', '4']

const totalCounts = counts.filter(count => count > 2)

console.log(totalCounts) // 3,4
