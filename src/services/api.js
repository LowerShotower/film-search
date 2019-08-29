import axios from "axios";

const API_HOST = 'https://www.omdbapi.com/'
const MAIN_URL_PART = '?i=tt3896198&apikey=8523cbb8';
const PAGE_URL_PART = '&page=';

export const fetchMovies = async ({ movie, page }) => {
  const pageUrlPart = page ? PAGE_URL_PART + page : ''
  return  axios.get(`${API_HOST}${MAIN_URL_PART}&s=${movie}${pageUrlPart}`)
}