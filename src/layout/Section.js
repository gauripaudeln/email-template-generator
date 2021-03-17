import React from 'react';

function Section(props) {
    return <tr>
        <td style={props.style}>
            {props.component}
        </td>
    </tr>;
}

export default Section;