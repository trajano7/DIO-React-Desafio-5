import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://duhjlhliiyfzpzwggqxe.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1aGpsaGxpaXlmenB6d2dncXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk0NTY2MDYsImV4cCI6MjA0NTAzMjYwNn0.mZNOahnClCCv4JbLAjH35azNj3DLjSTTQJEbgF6Sj0E",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1aGpsaGxpaXlmenB6d2dncXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk0NTY2MDYsImV4cCI6MjA0NTAzMjYwNn0.mZNOahnClCCv4JbLAjH35azNj3DLjSTTQJEbgF6Sj0E"
    }
})