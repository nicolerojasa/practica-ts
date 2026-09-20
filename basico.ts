// 1. Variables: const para valores fijos, let para valores que cambian
const usuario: string = "nicole";
let intentos: number = 0;
intentos = intentos + 2;
// 2. Funciones normales y funciones flecha (arrow functions)
function saludar(nombre: string): string {
return `Hola que tal, ${nombre}`;
}
const doble = (n: number): number => n * 2;
// 3. Condicionales
if (intentos > 4) {
console.log("Demasiados intentos");
} else {
console.log("Intentos:", intentos);
}
// 4. Arrays y bucles
const productos = ["teclado", "raton", "monitor" , "mousepad"];
for (const producto of productos) {
console.log("Producto:", producto);
}
// 5. filter y map: los usaras para trabajar con listas de elementos
const largos = productos.filter((p) => p.length > 5);
const mayusculas = largos.map((p) => p.toUpperCase());
console.log(mayusculas);
// 6. Objetos e interfaces (la forma de describir datos en TypeScript)
interface Credenciales {
usuario: string;
clave: string;
}
const cred: Credenciales = { usuario: "standard_user", clave: "secret_sauce" };
console.log(cred.usuario);
// 7. async / await: en Playwright casi todas las acciones son asincronas
async function esperar(ms: number): Promise<void> {
return new Promise((resolve) => setTimeout(resolve, ms));
}
async function main() {
console.log(saludar(usuario));
console.log("Esperando medio segundo...");
await esperar(500);
console.log("Doble de 4:", doble(4));
}
main();