/*két egész szám legnagyobb közös osztója
Bemenet két egész szám
Kimenet egy szám
*/
import { lnko, masodfoku_x } from "./fuggvenyek.js";

import { szamjegyekOsszege } from "./fuggvenyek.js";



let eredmeny = lnko(18,3);
console.log(eredmeny);

eredmeny=szamjegyekOsszege(42);
console.log(eredmeny);

masodfoku_x(10,30,20);