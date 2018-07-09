import axios from 'axios';

export function fetchUsers() {
	return (dispatch) => {
		axios({
			method: 'GET',
			url: 'https://randomuser.me/api/?results=1000',
		}).then(function(response) {
			console.log('...');
			if(response && response.data && response.data.results) {
				console.log(response.data.results);
			} else {
				console.log('No results in the response.');
			}
		})
		.catch(function (error) {
			//handle error
			console.log(error);
		})
		.then(function() {
			// always executed
		});
	};
};