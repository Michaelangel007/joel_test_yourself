// http://www.joelonsoftware.com/articles/TestYourself.html
// 3_whatisoutput
#include <stdio.h>

// begin
char* midstr( size_t offset, char *text )
{
   return (text + offset);
}
// end

char *fn(int i, char *s)
{
  while (i)
  {
    s++;
    i--;
  }

  return s;
}

int main(int argc, char** argv)
{
  int a = 2;
  static char c[] = "test";

  printf("%s\n", fn(a,c));

// begin
  printf( "%s\n", midstr( a, c ) );
// end  

  return 0;
}
