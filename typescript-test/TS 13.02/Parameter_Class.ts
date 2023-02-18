class Person2 {
    private name:string;

    public constructor(name: string) {
        this.name=name;
    }
    public getName2(): string {
        return this.name;
    }
} 
const person2=new Person2('javid ashwaq here');
console.log(person2.getName2());