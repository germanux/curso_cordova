var regNumeroEntero = new RegExp("^(?:\\+|-)?\\d+$");
if (regNumeroEntero.test("999"))
    console.log("999 Pasó el test");
if (regNumeroEntero.test("-999"))
    console.log("-999 Pasó el test");
if ( ! regNumeroEntero.test(" No es num"))
    console.log("No es num NO Pasó el test");
if ( ! regNumeroEntero.test("999   "))
    console.log("999 NO Pasó el test");