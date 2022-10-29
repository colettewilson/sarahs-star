export const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export const onSubmit = (data, evt) => {
  evt.preventDefault()
  const formEl = evt.target

  fetch('/forms', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': formEl.getAttribute('name'),
      ...data,
    }),
  })
    .then(() => {
      formEl.setAttribute("submitted", true)
      formEl.reset()

      setTimeout(() => {
        formEl.setAttribute("submitted", false)
      }, 3000)
    })
    .catch(error => console.error(error))
}