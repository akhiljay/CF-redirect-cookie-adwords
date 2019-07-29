# CF-redirect-cookie-adwords

### Premise
Retail owners publish and push ads that consist of new articles and blogs that talk about their products. 
For example: Uber Eats could create an ad with a forbes article that talks about how great uber eats is. 

### Problem
Retail owners are unable to track users who has clicked on their ads when the ad content itself is for third party site.
For example: As the owner of Uber Eats I would like to ensure that I know when a user who has clicked on those ads visit my site so I can either target them with better pricing or better offers. 

### Solution 

DIY method: Create a CF worker that allows you to drop a cookie along with a redirect so you can track the cookie when a particular user visits your site
Third Party Tools might offer the same solution but might be a bit expensive to deal with.

## CloudFlare Worker Solution

https://redirect.akhil.workers.dev?finalurl="Enter Final URL for the arctile"&utm_camp="Enter the cookie you want to set"

example: https://redierct.akhil.workers.dev?finalurl=https%3A%2F%2Ftimesofindia.indiatimes.com%2Ftrend-tracking%2Fev-startups-crank-up-efforts-as-segments-mood-turns-electric%2Farticleshow%2F70416317.cms&utm_camp=akhilcookie
