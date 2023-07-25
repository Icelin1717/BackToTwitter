console.log('Re Twitter is working')
setInterval(() => {
  
  // Replaces icon of the home button
  let div = document.querySelector('[href="/home"]').firstChild;
  let svg = div.firstChild;
  let g = svg.firstChild;
  let path = g.firstChild;

  svg.setAttribute("width", "50")
  svg.setAttribute("height", "50")
  svg.setAttribute("class", "")
  svg.setAttributeNS(null, "viewBox", "0 0 100 100");
  
  g.setAttribute("id", "twitter-icon")
  g.setAttribute("stroke", "none")
  g.setAttribute("stroke-width", "0")
  g.setAttribute("fill", "#1D9BF0");

  path.setAttribute("d", "M80.057,30.194c-2.288,1.016-4.753,1.701-7.344,2.005c2.632-1.58,4.649-4.088,5.594-7.071c-2.464,1.465-5.2,2.532-8.105,3.102c-2.326-2.471-5.631-4.014-9.317-4.014c-7.05,0-12.76,6.595-12.76,14.744c0,1.155,0.131,2.283,0.385,3.369c-10.6-0.527-19.976-5.602-26.256-13.32c-1.095,1.849-1.721,4.001-1.721,6.281c0,4.321,2.202,8.131,5.549,10.375c-2.046-0.066-3.969-0.631-5.653-1.582c-0.001,0.052-0.001,0.103-0.001,0.155c0,6.04,4.296,11.073,9.986,12.221c-1.045,0.281-2.145,0.434-3.287,0.434c-0.803,0-1.578-0.078-2.337-0.222c1.579,4.953,6.158,8.557,11.587,8.657c-4.231,3.322-9.561,5.304-15.326,5.304c-0.996,0-1.972-0.059-2.94-0.166c5.466,3.543,11.945,5.607,18.886,5.607c22.664,0,35.035-18.751,35.035-35.008c0-0.531-0.012-1.061-0.033-1.589C75.916,35.08,78.211,32.851,80.057,30.194z");

  // Replaces favicons
  const tweetFaviconUrl = 'https://pbs.twimg.com/media/F12BhZ7aEAIc1bQ?format=png&name=small'

  const elementsWithIcon = document.querySelectorAll('link[href*="icon"]');
  elementsWithIcon.forEach(element => {
    
    console.log(element)
    if(element.getAttribute("href") !== tweetFaviconUrl) {
      element.type = "iamge/x-icon";
      element.href = tweetFaviconUrl;
    }
    
  })
}, 500)