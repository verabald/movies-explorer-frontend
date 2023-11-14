import { shortsDuration } from '../constants/constants.js'

function searchFilter(movie, req) {
	const search = req.toLowerCase(); 
	const checkSearch = movie.nameRU.toLowerCase().includes(search);
	return checkSearch;
}

function durationFilter(duration, short, correctDuration = shortsDuration) {
	if (short && (duration <= correctDuration)) {
		return true;
	} else {
		return (!short);
	}
}

export default function filterMovies(movie, req, short) {
	return searchFilter(movie, req) && durationFilter(movie.duration, short);
}