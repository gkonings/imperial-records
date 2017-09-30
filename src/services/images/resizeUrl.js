const resizeUrl = (url, size) => {
  // https://lh3.googleusercontent.com/-7bWe5X_yvmU/AAAAAAAAAAI/AAAAAAAAEYk/GbQmHxgQo9o/s80-c/photo.jpg

  const index = url.indexOf('/photo.')
  const newUrl = url.slice(0, index) + `/s${size}-c` + url.slice(index)

  return newUrl
}

export default resizeUrl
