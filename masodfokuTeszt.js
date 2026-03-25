import { masodfoku_x } from "./fuggvenyek.js";

function masodfokuTeszt() {
    const tesztEsetLista = [
        {
            a:5,
            b:20,
            c:10,
            x1:-0.59,
            x2:-3.41
        },
        {
            a:10,
            b:30,
            c:20,
            x1:-1.00,
            x2:-2.00
        },
        {
            a:4,
            b:12,
            c:3,
            x1:-0.28,
            x2:-2.72
        },
         {
            a:1,
            b:2,
            c:3,
            x1:"nincs mo",
            x2:"nincs mo"
        },
         {
            a:1,
            b:4,
            c:4,
            x1:-2.00,
            x2:-2.00
        }
        
    ]

    for (let index = 0; index < tesztEsetLista.length; index++) {
        let eredmeny = masodfoku_x(tesztEsetLista[index].a,tesztEsetLista[index].b,tesztEsetLista[index].c);
        //console.log(eredmeny)
        console.assert(JSON.stringify(eredmeny.x1) == JSON.stringify(tesztEsetLista[index].x1) && JSON.stringify(eredmeny.x2) ==JSON.stringify(tesztEsetLista[index].x2), `elvárt: ${tesztEsetLista[index].x1}, ${tesztEsetLista[index].x2}, kapott: ${eredmeny}`);
        
    }
    console.log("Minden teszt lefutott!")
    
}
masodfokuTeszt();