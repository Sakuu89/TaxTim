
import React from 'react'
import ChatBot from "react-simple-chatbot"
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#2aa12e',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#2aa12e',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}


export const HowitworkChat = () => {

  return (
    <div className='chatbot' style={{width:"27%",margin:"auto"}}>
    <ThemeProvider theme={theme}>

     <ChatBot height="270px" style={{width:"43.5vw",boxShadow:"none" }} bubbleStyle={{width:"650px",fontSize:"27px"}} hideHeader="true" hideUserAvatar="true" hideBotAvatar="true" hideSubmitButton="true" bubbleOptionStyle={{fontSize:"20px",backgroundColor:"rgb(128,0,0)"}}  contentStyle={{textAlign:"left",width:"180%",height:"270px", backgroundColor:"white", marginLeft:"-7px",}} headerTitle="Tim" botAvatar="https://www.taxtim.com/za/images/og-thumb3.jpg" steps={[
         {
             id:'Greet',
             message:'Hello! My name is Tim. I am here to help you make tax easy.Click the button below to see how I can help :)',
             trigger:'1',
            },
            {
              id:'1',
              options:[ 
                
                {value:"Start Demo",label:"Start Demo",trigger:'2'}
              ],
             },
             {
              id:'2',
              message:"Let's be honest, nobody likes doing their tax returns. Humans just weren't made to fill in long, boring forms.",
              trigger:'3',
             },
             {
              id:'3',
              options:[
                {value:"That's True",label:"That's True",trigger:'4'}
              ]
             },
             {
              id:'4',
              message:"That's why TaxTim doesn't use forms at all. All we do is have a simple conversation, just like this. Doing your own tax is easier than you think!",
              trigger:'5',
             },
             {
              id:'5',
              options:[
                {value:"I Like it",label:"I Like it",trigger:'6'}
              ]
             },
             {
              id:'6',
              message:"Just answer simple questions one-by-one online about your incomes and expenses. At the end of our chat together, I will automatically fill in and submit your tax forms for you!",
              trigger:'7',
             },
             {
              id:'7',
              options:[
                {value:"Great",label:"Great",trigger:'8'}
              ]
             },
             {
              id:'8',
              message:"I won't use any strange tax terms, like ITA34 or IRP5 without explaining them (click the terms).",
              trigger:'9',
             },
             {
              id:'9',
              options:[
                {value:"Good Job",label:"Good Job",trigger:'10'}
              ]
             },
             {
              id:'10',
              message:"So, are you ready to see the steps of the TaxTim process?",
              trigger:'11',
             },
             {
              id:'11',
              options:[
                {value:"Yes",label:"Yes",trigger:'12'},
                {value:"No",label:"No",trigger:'13'}
              ]
             },
             {
              id:'12',
              message:"You can chat with TaxTim Assistant for further assistance",
              end:true,
             },
             {
              id:'13',
              message:"We would like you to explore our website for other services.",
              end:true,
             },
        ]} />
        </ThemeProvider>
    </div>
  );
}

