/*3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.*/ 

const Array = [4, "dos", 8, "tres", 5, 9, 1, "cero"];
 
for (let i = 0; i < Array.length; i++) {
    if (typeof Array[i] === "number") {
      console.log(Array[i]);
    }
  }


// NOTA: number (número) y string (palabra). Se debe utilizar "typeof para verificar cada elemento".