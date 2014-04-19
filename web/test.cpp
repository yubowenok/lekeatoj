#include &lt;iostream&gt;
#include &lt;cstdio&gt;
#include &lt;cmath&gt;
#include &lt;cstring&gt;
#include &lt;algorithm&gt;
#include &lt;string&gt;
#include &lt;vector&gt;
#include &lt;stack&gt;
#include &lt;queue&gt;
#include &lt;set&gt;
#include &lt;map&gt;
#include &lt;sstream&gt;
#include &lt;complex&gt;
#include &lt;cassert&gt;

using namespace std;

typedef long long ll;
typedef vector&lt;int&gt; VI;
typedef pair&lt;int,int&gt; PII;

#define REP(i,s,t) for(int i=(s);i&lt;(t);i++)
#define FILL(x,v) memset(x,v,sizeof(x))
#define EPS 1E-12
const int INF = (int)1E9;

int R,C,M,E;
char gd[55][55];
int main(){
	int cs;
	cin &gt;&gt; cs;
	REP(csn,1,cs+1){
		cin &gt;&gt; R &gt;&gt; C &gt;&gt; M;
		E = R*C-M;
		printf("Case #%d:\n", csn);
		FILL(gd, '*');
		REP(i,0,R) gd[i][C] = 0;
		if(R==1 || C==1){
			if(!E){
				puts("Impossible");
			}else{
				if(R==1){
					REP(j,M,C) gd[0][j] = '.';
					gd[0][C-1] = 'c';
				}else{
					REP(i,M,R) gd[i][0] = '.';
					gd[R-1][0] = 'c';
				}
				REP(i,0,R) printf("%s\n", gd[i]);
			}
		}else{
			if(E==1){
				gd[0][0] = 'c';
				REP(i,0,R) printf("%s\n", gd[i]);
			}else{
				bool ok = 0;
				REP(f,2,E){
					int q = E/f, r = E%f;
					int nr = f, nc = q+(r&gt;0);
					if(nr&lt;=R &amp;&amp; nc&lt;=C &amp;&amp; ((q&gt;=2 &amp;&amp; r!=1) || (q&gt;2 &amp;&amp; r==1 &amp;&amp; f&gt;2))){
						ok = 1;
						REP(i,0,nr){
							REP(j,0,q) gd[i][j] = '.';
						}
						REP(i,0,r) gd[i][q] = '.';
						if(r==1 &amp;&amp; q&gt;2){
							gd[r][q] = '.';
							gd[nr-1][q-1] = '*';
						}
						gd[0][0] = 'c';
						break;
					}
				}
				if(ok){
					REP(i,0,R) printf("%s\n", gd[i]);
				}else{
					puts("Impossible");
				}
			}
		}
	}
	return 0;
}