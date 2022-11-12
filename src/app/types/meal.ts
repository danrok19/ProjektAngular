export type MealType={
    name: string
    realizationTime: number
    rating: number
}
export class MealClass {
    constructor(
      private name: string,
      private timePrep: number,
      private index_nr: number,
      private discription: string
    ) {}
  
    get Name(): string {
      return this.name;
    }
  
    set Name(name: string) {
      this.name = name;
    }
  
    get TimePrep(): number {
      return this.timePrep;
    }
  
    set TimePrep(timePrep: number) {
      this.timePrep = timePrep;
    }
  
    get Index_nr(): number {
      return this.index_nr;
    }
  
    set Index_nr(index_nr: number) {
      this.index_nr = index_nr;
    }

    set Discription(discription: string){
        this.discription = discription;
    }

    get Discription(): string{
        return this.discription;
    }
}