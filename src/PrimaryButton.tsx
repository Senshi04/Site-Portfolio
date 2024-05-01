// import * as React from 'react';

// type Props =  {
//     color: string;
//     lien?: string;
//     texte: string;
// };


// export function PrimaryButton(props: Props) {
//     const primaryButtonStyle = {
//         color: {{props.color}};
//     };
//     return (
//         <div>
//             <button className="primary-button" style={ props.color }>
//                 <a href="{props.lien}">{props.texte}</a>
//             </button>
//         </div>
//     );
// }

import React from 'react'; // Import only what's needed

type Props = {
  color?: string; // Make color optional (default behavior)
  link?: string;  // Use link for clarity
  text: string;    // Use text for better naming
};

export function PrimaryButton(props: Props) {
  const primaryButtonStyle = {
    color: props.color, // Direct access to prop value
  };

  return (
    <button
      className="primary-button"
      style={primaryButtonStyle}
      disabled={!props.link} // Disable button if no link provided
    //   onClick={() => props.link?.(window.location.href = props.link)} // Handle link navigation
    >
      {props.text}
    </button>
  );
}
