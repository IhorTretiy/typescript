class Dictionary<T, U, V> {
  private key: T;
  private value: U;
  private description: V;

  constructor(key: T, value: U, description: V) {
    this.key = key;
    this.value = value;
    this.description = description;
  }

  public getKey(): T {
    return this.key;
  }

  public setKey(key: T): void {
    this.key = key;
  }

  public getValue(): U {
    return this.value;
  }

  public setValue(value: U): void {
    this.value = value;
  }

  public getDescription(): V {
    return this.description;
  }

  public setDescription(description: V): void {
    this.description = description;
  }
}

const term1 = new Dictionary<string, number, string>("abc", 42, "A string key with an integer value.");
console.log(term1.getKey());
console.log(term1.getValue());
console.log(term1.getDescription());

const term2 = new Dictionary<number, boolean, string>(123, true, "An integer key with a boolean value.");
console.log(term2.getKey());
console.log(term2.getValue());
console.log(term2.getDescription());
