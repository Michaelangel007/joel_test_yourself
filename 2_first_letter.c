// http://www.joelonsoftware.com/articles/TestYourself.html
// 2_firstletter could harold eat eight salami elephants
#include <stdio.h>

int main( const int nArg, const char *aArg[] )
{
    int iArg;
    for( iArg = 1; iArg < nArg; iArg++ )
        printf( "%c", aArg[iArg][0] );
    printf( "\n" );
    return 0;
}
