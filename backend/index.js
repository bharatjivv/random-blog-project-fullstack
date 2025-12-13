import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

let blogs = [
  {
    id: uuidv4(),
    title: "Getting Started with JavaScript",
    author: "Alice Johnson",
    content: "JavaScript is a versatile language used for building web applications...",
  },
  {
    id: uuidv4(),
    title: "Understanding CSS Flexbox",
    author: "Mark Lee",
    content: "Flexbox makes it easier to design flexible and responsive layouts...",
  },
  {
    id: uuidv4(),
    title: "A Beginner’s Guide to React",
    author: "Sophia Martinez",
    content: "React is a popular library for building user interfaces...",
  },
  {
    id: uuidv4(),
    title: "Node.js Basics",
    author: "Daniel Kim",
    content: "Node.js allows JavaScript to run on the server side...",
  },
  {
    id: uuidv4(),
    title: "Web Performance Tips",
    author: "Emily Chen",
    content: "Improving web performance leads to better user experience...",
  }
];

app.use(cors());

app.get('/', (req, res) => {
    res.send('Backend Blog Project')
})

app.get('/blogs', (req, res) => {
    res.status(200).json(blogs);
})

app.post('/newblog', (req, res) => {
  // const newBlog = {
  //   id: uuidv4(),
  //   title: req.body.title,
  //   author: req.body.author,
  //   content: req.body.content,
  // }
  // blogs.push(newBlog);
  blogs.push({...req.body, id: uuidv4()})
  res.status(200).json({message: 'blog added'})
})


app.delete('/delete/:id', (req, res) => {
  blogs = blogs.filter((blog) => blog.id !== req.params.id)
  res.status(200).json(blogs)
})


app.listen(3000, () => {
    console.log('Listening on PORT 3000')
})