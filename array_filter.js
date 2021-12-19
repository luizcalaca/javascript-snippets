/*
Use filter() when: you need to remove unwanted elements based on some condition(s).
*/

var uniqueArray = array.filter( function( elem, index, array ) {
    return array.indexOf( elem ) === index;
} );

/*

*/

array = [0,1,1,5,6,9,50,36]

var uniqueArray = array.filter( function( elem, index, array ) {
    return ( elem ) > 10;
} );
