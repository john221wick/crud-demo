<script>
  let id;
  let Name = '';
  let Age ;

  async function createPerson() {
    try {
      const response = await fetch('http://localhost:3000/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, Name, Age })
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error creating person:', error);
    }
  }

  async function readPeople() {
    try {
      const response = await fetch(`http://localhost:3000/read/${id}`);
      const data = await response.json();
      document.getElementById('output').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
      console.error('Error reading people:', error);
      document.getElementById('output').textContent = 'Error reading people: ' + error;
    }
  }

  async function updatePerson() {
    try {
      const response = await fetch('http://localhost:3000/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, Name, Age }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error updating person:', error);
    }
  }

  async function deletePerson() {
    try {
      const response = await fetch('http://localhost:3000/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error deleting person:', error);
    }
  }
</script>

<main class="bg-gray-100 p-6">
  <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
    <h1 class="text-2xl font-bold mb-6 text-center">CRUD App</h1>
    <form id="crud-form" class="space-y-4">
      <div>
        <label for="Name" class="block text-gray-700">Name:</label>
        <input type="text" id="Name" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" bind:value={Name} />
      </div>
      <div>
        <label for="Age" class="block text-gray-700">Age:</label>
        <input type="number" id="Age" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" bind:value={Age} />
      </div>
      <div>
        <label for="id" class="block text-gray-700">ID:</label>
        <input type="number" id="id" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" bind:value={id} />
      </div>
      <div class="flex justify-between mt-4">
        <button type="button" class="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm" on:click|preventDefault={createPerson}>Create</button>
        <button type="button" class="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm" on:click|preventDefault={readPeople}>Read</button>
        <button type="button" class="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-sm" on:click|preventDefault={updatePerson}>Update</button>
        <button type="button" class="bg-red-500 text-white px-4 py-2 rounded-md shadow-sm" on:click|preventDefault={deletePerson}>Delete</button>
      </div>
    </form>
    <div id="output" class="mt-6 p-4 bg-gray-50 rounded-md shadow-inner"></div>
  </div>
</main>
