import axios from 'axios';

const url = 'http://localhost:8080/posts';

const fetchPost = () => axios.get(url);
