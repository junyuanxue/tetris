const getDropSpeed = score => {
  if (score > 60) return 180
  else if (score > 40) return 250
  else if (score > 20) return 350
  else return 500
}

export default getDropSpeed
