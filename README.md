Toronto Food + Weather Project
Overview
This is my Phase 2 project for CPAN144. The app shows Toronto restaurants and a weather component. You can click on a restaurant to see more details like description and rating. I also added a simple navigation bar so it’s easy to move between pages.

Components
Nav.jsx – The top navigation bar. I used inline styles here to quickly style it. It has links to Home and Restaurants pages.
RestaurantList.jsx – Displays a list of restaurants as clickable items. Each one links to a dynamic page for that restaurant.
Weather.jsx – Shows current Toronto weather using an API. I used useState and useEffect so it updates automatically.
Restaurants Page (/restaurants) – Shows all restaurants using RestaurantList.
Dynamic Restaurant Page (/restaurants/[name]) – Shows description and rating for each restaurant using Next.js dynamic routing.

Routing
Homepage with weather and a small intro.
restaurants → Restaurants list page.
restaurants/[name] → Dynamic page for each restaurant. Clicking a restaurant in the list goes here.
I used Link and encodeURIComponent so restaurant names with spaces work in the URL.
useParams() in the dynamic page gets the restaurant name from the URL.

State Management
Weather data updates automatically when the component mounts using useEffect.
Restaurant pages are static for now, but the dynamic route grabs data from a JS object so you can easily update info later.
