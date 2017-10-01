const resizeUrl = (url, size) => {
  if (!size) return url

  const index = url.indexOf('/photo.')
  const newUrl = url.slice(0, index) + `/s${size}-c` + url.slice(index)

  return newUrl
}

export default resizeUrl
