console.log("Test")


function handleClick(event) {
    // console.log('Click Me clicked...');
    // GET Request to get Authors
    fetch('/api/v1/event/5f1880afa5c17d1708693e55', {
      credentials: 'include',
    })
      .then((stream) => stream.json())
      .then((data) => console.log(data));
  }
  
  handleClick();