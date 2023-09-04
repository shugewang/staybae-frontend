# Challenges

[X] Ensure that the favourites can be selected from the Top Picks as well be removed from the favourite list (similar to the Property Details page)
- I implemented an 'onClick' event handler within the 'MediumCard' component that calls the 'toggleSave' function. This allows users to save or remove properties from their favorites in the 'TopPicks' section.
- I also moved the 'Link' component responsible for navigating to the property detail page into the 'MediumCard' component. This ensures favouriting/unfavouriting a property from TopPicks will not navigate away from the home page.

[X] Add ability to remove items from the favourites list
- I brought in the 'useFavourite' hook, which includes the 'removeFavourite' function.
- I then created a div element that contains the 'XCircleIcon,' which has an 'onClick' event handler that triggers the 'removeFavourite(id)' function.

[X] On the footer, create a link or amend the footer to add an ‘About Us’ page. Create a new about
us page and add content to it. You must ensure you can navigate to it as well once it’s clicked.
- I added a new page titled "AboutUs" and linked to it in the 'Footer' component.

[X] Enhance the search results to render a map. For this you will be required to use Google Maps.
This will also require you to obtain a personal access token from the Google Developers portal. DO NOT STORE THE TOKEN in any repository where you store the code.
- I created an util function called 'getCoordinatesForLocation' that returns the coordinates of any search cities using the OpenWeather API. For region search, I created 'getCoordinatesForRegion' that returns the coordinates of the centre of the region.
- I added property lat and lon to type PropertyType, which allows me to create Google Map Markers based on property coordinates.
- I used react-google-maps/api to render a Google Map on the 'Search' page. An useEffect hook calls the util functions to set the centre of the Map. This is executed whenever searchLocation or region changes.
- Clicking on a Marker calls useNavigate from 'react-router-dom', which takes the user to that property details page.

[X] Add more properties to the application and add their longitude/latitude (to show more markers on the map)
- I added more properties and sent the POST request using Postman.

Bonus:

[ ] Add places of interest on each property when you access the property details page. This can be achieved by using the longitude and latitude of the property and Google Maps for places of interest close to that location or in that City (see if you can find things to do from Google Maps for a given city).
- I attempted to add a "getNearbyPlacesOfInterest" function in PropertyDetails page that utilises the Google Places API. However, I received a CORS error for the network request despite receiving a 200 response status from the API."