export default function dotNotate(obj, target = {}, prefix = '') {
  Object.keys(obj).forEach(function (key) {
    if (typeof obj[key] === 'object') {
      dotNotate(obj[key], target, prefix + key + '.')
    } else {
      return (target[prefix + key] = obj[key])
    }
  })

  return target
}
