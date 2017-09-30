const toArray = (firebaseData) => {
  let arr = []
  Object.keys(firebaseData).forEach((key, index) => {
    arr.push({
      ...firebaseData[key],
      key})
  })
  return arr
}

export default toArray
