import { masodfoku_x1 } from "./fuggvenyek.js";

function masodfokuTeszt() {
    const tesztEsetLista = [
        {
            a:5,
            b:20,
            c:10,
            vart:-0.59
        },
        {
            a:10,
            b:30,
            c:20,
            vart:-1
        },
        {
            a:4,
            b:12,
            c:3,
            vart:-0.28
        }
        
    ]

    for (let index = 0; index < tesztEsetLista.length; index++) {
        let eredmeny = masodfoku_x1(tesztEsetLista[index].a,tesztEsetLista[index].b,tesztEsetLista[index].c);
        console.assert(eredmeny === tesztEsetLista[index].vart, `elvárt: ${tesztEsetLista[index].vart}, kapott: ${eredmeny}`);
        
    }
    console.log("Minden teszt lefutott!")
    
}
masodfokuTeszt();