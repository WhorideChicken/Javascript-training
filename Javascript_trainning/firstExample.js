//1번 문제
function solution(s)
{
    let scount = 0;
    let ycount = 0;

    for(let index in s)
    {
        if(s[index] === "p" || s[index] ==="P")
            scount++;

        if(s[index] === "y" || s[index] === "Y")
            ycount++;
    }

    if(scount === ycount)
        return true;

    if(scount === 0 && ycount === 0)
        return true;

    return false;

}

//2번문제
function solution2(absoltes, signs)
{
    let result = 0;

    for(num in absoltes)
    {
        let a = signs[num] ? 1 : -1;
        result += absoltes[num] * a;
    }

    console.log(result);
}
solution2([4,7,12], [true,false,true]);
solution2([1,2,3], [false,false,true]);