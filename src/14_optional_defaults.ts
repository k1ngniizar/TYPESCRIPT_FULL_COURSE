function greetPersonOptional(name?: string): string {
  const toUppercase = name ? name.toLocaleUpperCase() : "GUEST";
  return `Hello ${toUppercase}`;
}

console.log(greetPersonOptional("Ebenezer")); // output should be -> Hello EBENEZER
console.log(greetPersonOptional()); // output should be -> Hello GUEST

function greetPersonDefault(name: string = "default"): string {
  const toUppercase = name.toUpperCase();
  return `Hello ${toUppercase}`;
}

console.log(greetPersonDefault("Ebenezer")); // output should be -> Hello EBENEZER
console.log(greetPersonDefault()); // output should be -> Hello DEFAULT

function connect(host: string, port?: number, secure?: boolean) {
  const p = port ?? 80;
  const s = secure ?? false;

  return `Connect ${host} ${p} ${s}`;
}

connect("localhost", 5000, true); //✅
//connect("localhost", true, 5000) ❌ Parameters must follow exact order given in the function declaration.
