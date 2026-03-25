export function lnko(a,b) {
    a=Math.abs(a);
    b=Math.abs(b);
    while(a!=b){
        if(a>b){
            a = a-b;
        }else{
            b = b-a;
        }
    }
    return a;
}

export function szamjegyekOsszege(n) {
    let z = 0;
    while (n>0){
        let c = n%10;
        z = z+c;
        n = Math.floor(n/10);
    }
    return z;
}

export function  masodfoku_x(a,b,c) {
    let x1;
    let x2;
    if(b*b-4*a*c >= 0){
        x1=(((-b) + Math.sqrt(b*b-4*a*c))/(a*2)).toFixed(2);
        x2=(((-b) - Math.sqrt(b*b-4*a*c))/(a*2)).toFixed(2);

    }else{
        x1 = "nincs mo";
        x2 = "nincs mo";
    }
    console.log(x1,x2);
    return {x1:x1, x2:x2};
}
