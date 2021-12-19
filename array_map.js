
var fahrenheit = [ 0, 32, 45, 50, 75, 80, 99, 120 ];

var celcius = fahrenheit.map( function( elem ) {
    return Math.round( ( elem - 32 ) * 5 / 9 );
} ); 


/*

*/

array = [1,2,3,5,6,9,8]

array.map( function( elem, index, array ) {
    console.log(elem, index)
});
