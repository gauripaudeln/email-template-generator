
import React from 'react';
import Section from './Section';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';



const style = {
    body: {
      margin: 0,
      padding: 0,
      width:'100%',
      backgroundColor:'white'
    },
    table :  {
        border:'1px solid lightgrey',
        //backgroundColor:'red',
        width:'600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderCollapse:'none',
        cellPadding:'0px',
        cellSpacing:'0px',
        borderSpacing: '0px'

        
        
    },
    p:{
        margin:'0', 
        textAlign:'center'
    },
    header:{
        backgroundColor:'#70bbd9',
        padding: '40px 0 30px 0',
        height: '30%',
    },
    content:{
        fontSize: '12px',
       fontFamily: 'Segoe UI'
    },
    
    footer:{
        color:'white',
        
    },
  };
  
  const mainContent = [{leftSection:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", rightSection:" first row right data..."},{leftSection:"second row left data...", rightSection:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}];

function Body() {
    return <table style={style.body} >
        <thead></thead>
        <tbody>
            <tr>
                <td>
                   <table style={style.table} >
                        <thead></thead>
                        <tbody >
                            <Section   component ={<Header style={style.header}/>} />
                            <Section   component ={<Content data={mainContent}  style={style.content}/>}/>
                            <Section   component ={<Footer style={style.footer}/>}/>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>;
 
}

export default Body;