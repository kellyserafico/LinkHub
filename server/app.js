const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/login', async (req, res) => {
  const { usernameOrEmail, password } = req.body;
  try {
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { username: usernameOrEmail },
          { email: usernameOrEmail }
        ],
        password: password
      }
    });

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})


app.post('/users', async (req, res) => {
  const {username, email, password} = req.body;
  try{
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { username: username },
          { email: email }
        ]
      }
    });

    if (existingUser) {
      if (existingUser.username === username) {
        res.status(400).json({ error: 'Username already exists.' });
      } else {
        res.status(400).json({ error: 'Email already exists.' });
      }
    } else {
      const newUser = await prisma.user.create({
        data: {
          username,
          email,
          password
        },
      });
      res.json(newUser);
    }
  }
  catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user.' });
  }
});

app.patch('/users/:id/name', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id, 10) },
      data: { name: name }
    });

    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating user name:', error);
    res.status(500).json({ error: 'Failed to update user name.' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})