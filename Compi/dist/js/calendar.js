window.addEventListener('load', function () {
  const selectDate = document.querySelectorAll('.select_date input')

  selectDate.forEach( ( dateInputElement) =>{
    dateInputElement.addEventListener('focus', (event)=>{
      event.target.showPicker()
    })
    dateInputElement.addEventListener('input', (event)=>{
      const selectDate = event.target.value
      const dateContainer = event.target.parentElement;
      const day = dateContainer.querySelector('.day')
      const month = dateContainer.querySelector('.month')
      const year = dateContainer.querySelector('.year')
       
      day.innerText = window.dayjs(selectDate).format('DD')
      month.innerText = window.dayjs(selectDate).format('MMM')
      year.innerText = window.dayjs(selectDate).format('YYYY')
    })  
  })
},false)