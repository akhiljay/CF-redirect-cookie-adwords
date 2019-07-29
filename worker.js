

addEventListener('fetch', async event => {
  event.respondWith(handleRequest(event.request))
})

//function to handle the request
async function handleRequest(request) {
  const url = request.url
	// Function to parse query strings
	function getParameterByName(name) {
		name = name.replace(/[\[\]]/g, '\\$&')
		name = name.replace(/\//g, '')
		var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
			results = regex.exec(url)
		if (!results) return null
		else if (!results[2]) return ''
		else if (results[2]) {
			results[2] = results[2].replace(/\//g, '')
		}
		return decodeURIComponent(results[2].replace(/\+/g, ' '));
	}

	// Using the function getParameterByName to extract finalurl
	var finalURL = getParameterByName('finalurl')
	console.log(finalURL)

//conditionally add a campaign cookie you wish to add to the url 
var utmcookie = getParameterByName('utm_camp')
console.log(utmcookie)
//issue the redirect 

  return new Response('', {
			status: 302,
			headers: {
            Location: finalURL,
            'Set-Cookie':utmcookie,
      }
		})

}
