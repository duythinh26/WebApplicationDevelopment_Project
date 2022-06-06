import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWFlZWY1YWZkZGVlNTAwMzg5NGY4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDUwNzYzOSwiZXhwIjoxNjU0NzY2ODM5fQ.0llCV1jbxaaehCuSLyDBMXmnl6NsocJIB7tM0fPfJLA";

export const publicRequest = axios.create({
    baseURL:BASE_URL,
});

export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});