import React from 'react'
import Section1 from './components/section1/section1'


const App = () => {

  const users = [
    {
      img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774',
      intro:'',
      tag: 'staisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661611138064-9961ed38e1db?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=900',
      intro:'',
      tag: 'Underserved'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661631318298-a90d9e8003ab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=900',
      intro:'',
      tag: 'Underranked'
    },
    {
      img : 'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
      intro : '',
      tag: 'Underbanked'
    },
    {
      img : 'https://plus.unsplash.com/premium_photo-1661585485816-cf099f97d11d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
      intro : '',
      tag : 'Averrage'
    }
  ]

  return (
    <>
      <Section1 users ={users} />
    </>
  )
}

export default App