function solution(a, b)
{    
    a.sort((x, y)=> x[b]>y[b]?1:-1);

    console.log(a);
}

solution(["abce", "abcd", "cdx"], 2);