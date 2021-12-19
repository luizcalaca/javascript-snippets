
/*
array.reduce( function( prevVal, elem, index, array ) {
    ...
}, initialValue );
*/

/*
What reduce() does: Like map(), reduce() iterates the array from left to right invoking a return function on each element. 
The returned value is the accumulated value passed from callback to callback. After all elements have been evaluated, 
reduce() returns the accumulated/concatenated value.
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
