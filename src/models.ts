import * as jsonfile from "jsonfile";

class Contact {
  id?: number = undefined;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    // usar la version Async (readFile)
    // const json = jsonfile.readFileSync(__dirname + "/contacts.json");
    // this.data = json;
    const promise = jsonfile.readFile(__dirname + "/contacts.json");
    promise.then((json) => {
      this.data = json;
    });
    return promise;
  };
  
  getAll() {
    return this.data;
  };
  
  addOne(contact: Contact) {
    this.data.push(contact);
  };
  
  save() {
    // usar la version Async (writeFIle)
    // jsonfile.writeFileSync(__dirname + "/contacts.json", this.data);
    const promise = jsonfile.writeFile(__dirname + "/contacts.json", this.data);
    return promise;
  };

  getOneById(id) {
    const encontrado = this.data.find((contacto) => {
      if (contacto?.id == id) {
        return true;
      }
    });

    return encontrado;
  };
}
export { ContactsCollection, Contact };
