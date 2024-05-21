const express = require('express');
const app = express();
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const port = process.env.PORT || 3000;

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const cors = require('cors');

//using cors 

app.use(cors());

app.use(express.json());

// for post request 

app.post('/create', async (req, res) => {
  const { id, Name, Age } = req.body;
  console.log(req.body)
  const { data, error } = await supabase
    .from('pp')
    .insert({ id, Name, Age });
  if (error) {
    console.error(error);
    res.status(500).send({ messAge: 'Error creating person' });
  } else {
    res.send({ messAge: 'Person created successfully' });
  }
});

//for get request 

app.get('/read/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const { data, error } = await supabase
      .from('pp')
      .select('Name, Age')
      .eq('id', userId)
      .single();

    if (error) {
      console.error(error);
      res.status(500).send({ messAge: 'Error reading pp' });
    } else {
      res.send(data);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ messAge: 'Internal server error' });
  }
});

//for update

app.put('/update', async (req, res) => {
  const { id, Name, Age } = req.body;
  const { data, error } = await supabase
    .from('pp')
    .update(id, { Name, Age });
  if (error) {
    console.error(error);
    res.status(500).send({ messAge: 'Error updating person' });
  } else {
    res.send({ messAge: 'Person updated successfully' });
  }
});

//for deleting 

app.delete('/delete', async (req, res) => {
  const { id } = req.body;
  const { error } = await supabase
    .from('pp')
    .delete()
    .eq('id', id);

  if (error) {
    console.error(error);
    res.status(500).send({ messAge: 'Error deleting person' });
  } else {
    res.send({ messAge: 'Person deleted successfully' });
  }
});

app.listen(port, () => {
  console.log('Server listening on port 3000');
});