interface Credenciales {
  usuario: string;
  clave: string;
}

// Devuelve true solo si usuario y clave no estan vacios y la clave tiene 6 o mas caracteres
function validarLogin(cred: Credenciales): boolean {
  const usuarioOk = cred.usuario.trim().length > 0;
  const claveOk = cred.clave.trim().length > 0;
  const longitudOk = cred.clave.length >= 6;
  return usuarioOk && claveOk && longitudOk;
}

// Cuatro casos de prueba: tres invalidos y uno valido
const casos: Credenciales[] = [
  { usuario: "", clave: "secret_sauce" },
  { usuario: "standard_user", clave: "   " },
  { usuario: "standard_user", clave: "secret_sauce" },
  { usuario: "standard_user", clave: "abc" },
];

for (const caso of casos) {
  const resultado = validarLogin(caso);
  console.log(`usuario="${caso.usuario}" clave="${caso.clave}" -> ${resultado}`);
}