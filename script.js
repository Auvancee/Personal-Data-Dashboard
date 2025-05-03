async function fetchData() {
    const res = await fetch('http://localhost:3000/api/data');
    const data = await res.json();
    document.getElementById('data-display').innerText = JSON.stringify(data, null, 2);
  }
  
  document.getElementById('data-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const games = document.getElementById('games').value.split(',').map(g => g.trim());
    const cars = parseInt(document.getElementById('cars').value, 10);
  
    const newData = {
      name,
      favoriteGames: games,
      NumberOfCars: cars
    };
  
    await fetch('http://localhost:3000/api/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData)
    });
  
    fetchData(); // Refresh display
  });
  
  // Initial load
  fetchData();
  