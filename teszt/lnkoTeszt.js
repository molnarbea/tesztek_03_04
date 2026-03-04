import { lnko } from "../fuggvenyek.js";

function lnkoTeszt() {
    //a többszöröse b-nek
    /*let a = 9;
    let b = 3;
    let eredmeny = lnko(a,b);
    console.assert(eredmeny===3, `${a},${b},elvárt: 3, kapott: ${eredmeny}`);*/
    tesztek(9,3,3);

    //lnko>1
    /*a = 24;
    b = 18;
    eredmeny = lnko(a,b);
    console.assert(eredmeny===6, `${a},${b},elvárt: 6, kapott: ${eredmeny}`);*/
    tesztek(24,18,6);

    //lnko==1 de egyik szám sem prím
    /*a = 77;
    b = 15;
    eredmeny = lnko(a,b);
    console.assert(eredmeny===1, `${a},${b},elvárt: 1, kapott: ${eredmeny}`);*/
    tesztek(77,15,1);

    //két prím
    /*a = 7;
    b = 13;
    eredmeny = lnko(a,b);
    console.assert(eredmeny===1, `${a},${b},elvárt: 1, kapott: ${eredmeny}`);*/
    tesztek(7,13,1);

    //két azonos szám
   /* a = 10;
    b = 10;
    eredmeny = lnko(a,b);
    console.assert(eredmeny===10, `${a},${b},elvárt: 10, kapott: ${eredmeny}`);*/
    tesztek(10,10,10);

    //két negatív
    /*a = -5;
    b = -10;
    eredmeny = lnko(a,b);
    console.assert(eredmeny===5, `${a},${b},elvárt: 5, kapott: ${eredmeny}`);*/
    tesztek(-5,-10,5);

    //egy negatív egy pozitív
    /*a = -3;
    b = 4;
    eredmeny = lnko(a,b);
    console.assert(eredmeny===1, `${a},${b},elvárt: 1, kapott: ${eredmeny}`);
    */
    tesztek(-3,4,1);
   
}
function tesztek(a,b,vart) {
    let eredmeny = lnko(a,b);
    console.assert(eredmeny===vart, `${a},${b},elvárt: ${vart}, kapott: ${eredmeny}`);
}
function lnkoTeszt2() {
    const tesztEsetLista = [
        {
            a:18,
            b:3,
            vart:3,
            szoveg:"Az a többszöröse b nek",
        },
        {
            a:24,
            b:18,
            vart:6,
            szoveg:"lnko>1",
        },
        {
            a:77,
            b:15,
            vart:1,
            szoveg:"lnko==1 de egyik szám sem prím",
        },
        {
            a:7,
            b:13,
            vart:1,
            szoveg:"két prím",
        },
        {
            a:10,
            b:10,
            vart:10,
            szoveg:"két azonos szám",
        },
        {
            a:-5,
            b:-10,
            vart:5,
            szoveg:"két negatív",
        },
        {
            a:-3,
            b:-4,
            vart:1,
            szoveg:"egy negatív egy pozitív",
        }


    ]

    for (let index = 0; index < tesztEsetLista.length; index++) {
        let eredmeny = lnko(tesztEsetLista[index].a, tesztEsetLista[index].b);
        console.assert(eredmeny === tesztEsetLista[index].vart, `${tesztEsetLista[index].a},${tesztEsetLista[index].b},elvárt: ${tesztEsetLista[index].vart}, kapott: ${eredmeny}`,tesztEsetLista[index].szoveg);
        
    }
    console.log("Minden teszt lefutott!")
    
}
lnkoTeszt2();