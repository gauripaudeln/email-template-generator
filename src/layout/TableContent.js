import React from 'react';

function TableContent(props) {
    return <table style={style.body}>
        <thead></thead>
        <tbody>
            <tr>
                <td>
                   <table style={style.table}>
                        <thead></thead>
                        <tbody>
                            {props.TableRows}
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>;
 
}

export default TableContent;