// output to
//    console (for node.js)
//    added as 'pre' tag to webpage
function print( out )
{
    console.log( "" + out );
    // detect if script is running under node.js or in browser
    // http://stackoverflow.com/questions/4224606/how-to-check-whether-a-script-is-running-under-node-js
    if( typeof window !== "undefined" ) // if running in node.js don't add <pre></pre> output to DOM
    {
        var pre = document.createElement( 'pre' );
        pre.innerHTML = "" + out + "\n";
        document.body.appendChild( pre );
    }
}

// Recursion
// ========================================================================
function accumulate(combiner, nullValue, l)
{
    if (l.length == 0)
        return nullValue;
    var first = l.shift();
    return combiner(first, accumulate(combiner, nullValue, l));
}

function add( first, remaining )
{
    return (first*first) + remaining; // if remaining == null -> + 0 cast
/*  // typesafe version
    var sum = (first*first);
    return remaining
        ? sum + remainig
        : sum;
*/
}

function sumOfSquaresAccum( a )
{
     var sum = accumulate( add, 0, a ); // 0 or null
     print( sum );
}

// Iteration
// ========================================================================
function sumOfSquaresArray( a )
{
    var i, s = 0, n = a.length;
    for( i = 0; i < n; i++ )
        s += (a[i] * a[i]);

    print( s );
    return s;
}

function main()
{
    sumOfSquaresArray( [1,2,3,4,5] );
    sumOfSquaresAccum( [1,2,3,4,5] );
}

main();
