/*
Use filter() when: you need to remove unwanted elements based on some condition(s).
*/

var uniqueArray = array.filter( function( elem, index, array ) {
    return array.indexOf( elem ) === index;
} );
