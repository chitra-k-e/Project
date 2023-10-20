const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Successfully Ordered!', 'success')
  })
}
// second

const alertPlaceholder1 = document.getElementById('liveAlertPlaceholder1')
const appendAlert1 = (message, type) => {
  const wrapper1 = document.createElement('div')
  wrapper1.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder1.append(wrapper1)
}

const alertTrigger1 = document.getElementById('liveAlertBtn1')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert1('Successfully Ordered!', 'success')
  })
}