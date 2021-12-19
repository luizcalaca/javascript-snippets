
/*
array.reduce( function( prevVal, elem, index, array ) {
    ...
}, initialValue );
*/

var rockets = [
    { country:'Russia', launches:32 },
    { country:'US', launches:23 },
    { country:'China', launches:16 },
    { country:'Europe(ESA)', launches:7 },
    { country:'India', launches:4 },
    { country:'Japan', launches:3 }
];
 
var sum = rockets.reduce( function( prevVal, elem ) {
    return prevVal + elem.launches;
}, 0 );

console.log(sum)
