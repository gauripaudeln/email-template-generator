import React from 'react';

const style = {
    table: {
       // border: '2px solid black',
        cellPadding: 0,
        cellSpacing: 0,
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        
        
       
        
    },
    tdOuter: {
        vAlign: 'top',
        width: '260',
        marginLeft: 'auto',
        marginRight: 'auto',
        
       // border: '2px solid black',
        

    },
    tdMiddle: {
        padding:'25px 0 0 0',
       // border: '2px solid black',

    },

    tdRight: {
        fontSize: '0',
        lineHeight: '0',
        width: '20',
        padding:'25px 0 0 0',
       // border: '2px solid black',

    },

    borderTop :{
        borderTop: "1px solid lightsteelblue",
    },
    

   
};


function Content(props) {
    let firstRow=props.data[0];
    let secondRow=props.data[1];
    return <table style={{ ...style.table, ...props.style }}>
        <tr>
            <td style={style.tdOuter}>
                <table  >
                    <tr>
                        <td>
                            {firstRow.leftSection} 
                        </td>
                    </tr>
                    <tr>
                        <td  style={style.borderTop} >
                        {secondRow.leftSection} 
                        </td>
                    </tr>
                </table>
            </td>

            <td style={style.tdMiddle}> </td>
            <td style={style.tdLeft}>
                <table >
                    <tr>
                        <td>
                        {firstRow.rightSection} 
                        </td>
                    </tr>
                    <tr>
                        <td  style={style.borderTop} >
                             {secondRow.rightSection} 
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>;
}
export default Content;