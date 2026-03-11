import { szamjegyekOsszege } from "./fuggvenyek.js";

function osszegTeszt() {
    const tesztEsetLista = [
        {
            n:6,
            vart:6
        },
        {
            n:62,
            vart:8
        },
        {
            n:3145,
            vart:13
        },{
            n:-12,
            vart:0
        }
        
    ]

    for (let index = 0; index < tesztEsetLista.length; index++) {
        let eredmeny = szamjegyekOsszege(tesztEsetLista[index].n);
        console.assert(eredmeny === tesztEsetLista[index].vart, `${tesztEsetLista[index].n},elvárt: ${tesztEsetLista[index].vart}, kapott: ${eredmeny}`);
        
    }
    console.log("Minden teszt lefutott!")
    
}
osszegTeszt();