type DictType = {
  term: string;
  definition: string;
};

class Dict {
  private arr: DictType[];

  constructor() {
    this.arr = [];
  }

  public add(wordObj: DictType): string {
    this.arr = [...this.arr, wordObj];
    return `'${wordObj.term}' has been added.`;
  }

  public get(wordObj: DictType): string | undefined {
    for (let item of this.arr) {
      if (item.term === wordObj.term) {
        return `The definition of '${item.term}' is: ${item.definition}`;
      }
    }
    return "⚠️ No matching words found or could not be retrieved.";
  }

  public delete(term: string): string | undefined {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i].term === term) {
        this.arr = this.arr.filter((_, idx) => idx !== i);
        return `'${term}' has been deleted.`;
      }
    }
    return "⚠️ No matching words found or could not be deleted.";
  }

  public update(wordObj: DictType, newObj: DictType): string | undefined {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i].term === wordObj.term) {
        this.arr[i] = newObj;
        return `'${wordObj.term}' has been updated to '${newObj.term}'.`;
      }
    }
    return "⚠️ No matching words found or could not be updated.";
  }

  public showAll(): DictType[] {
    return this.arr;
  }

  public count(): number {
    return this.arr.length;
  }

  public upsert(wordObj: DictType, newObj: DictType): string {
    const foundIndex = this.arr.findIndex((item) => item.term === wordObj.term);
    if (foundIndex !== -1) {
      this.arr[foundIndex] = newObj;
      return `'${wordObj.term}' has been updated to '${newObj.term}'.`;
    } else {
      this.arr.push(newObj);
      return `'${wordObj.term}' does not exist. Instead, '${newObj.term}' has been added.`;
    }
  }

  public exists(wordObj: DictType): string {
    const exists = this.arr.some((item) => item.term === wordObj.term);
    return exists
      ? `The word '${wordObj.term}' exists. 🙆🏻‍♀️`
      : `The word '${wordObj.term}' does not exist. 🙅‍♀️`;
  }

  public bulkAdd(words: DictType[]): string {
    this.arr.push(...words);
    return `The following words have been added: ${words
      .map((el) => el.term)
      .join(", ")}.`;
  }

  public bulkDelete(terms: string[]): string {
    const deletedTerms = [];
    for (let t of terms) {
      const result = this.delete(t);
      if (result) deletedTerms.push(t);
    }
    return `The following words have been deleted: ${deletedTerms.join(", ")}.`;
  }
}

// ------------------------------------------------------------------------------

const dict = new Dict();
const add = dict.add({ term: "realTest", definition: "test" });
const add2 = dict.add({ term: "another", definition: "test2" });
const get = dict.get({ term: "another", definition: "test2" });
const update = dict.update(
  { term: "another", definition: "test2" },
  { term: "another2", definition: "test22" }
);
console.log(get);
console.log(update);
console.log("ShowAll", dict.showAll());
console.log("Count", dict.count());
console.log(
  "Upsert",
  dict.upsert(
    { term: "another2", definition: "test22" },
    { term: "newOne!", definition: "newnew" }
  )
);
console.log(
  "Upsert",
  dict.upsert(
    { term: "blabla", definition: "blablabla" },
    { term: "newOne!", definition: "newnew" }
  )
);
console.log("exists", dict.exists({ term: "realTest", definition: "test" }));
