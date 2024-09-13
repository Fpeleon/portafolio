'use strict'

const tabBottom = document.querySelectorAll('.tab_bottom')
const redemptionAcumulation = document.querySelectorAll('.redemption_acumulation')

tabBottom.forEach( ( cadaA , i )=>{
  tabBottom[i].addEventListener('click', ()=>{

    tabBottom.forEach( ( cadaA, i)=>{
      tabBottom[i].classList.remove('active_a')
      redemptionAcumulation[i].classList.remove('active')
    })

    tabBottom[i].classList.add('active_a')
    redemptionAcumulation[i].classList.add('active')
  })
})

const tabBottomDesktop = document.querySelectorAll('.tab_bottom_desktop')
const redemptionAcumulationDesktop = document.querySelectorAll('.redemption_acumulation')

tabBottomDesktop.forEach( ( cadaA , i )=>{
  tabBottomDesktop[i].addEventListener('click', ()=>{

    tabBottomDesktop.forEach( ( cadaA, i)=>{
      tabBottomDesktop[i].classList.remove('active_a')
      redemptionAcumulationDesktop[i].classList.remove('active')
    })

    tabBottomDesktop[i].classList.add('active_a')
    redemptionAcumulationDesktop[i].classList.add('active')
  })
})