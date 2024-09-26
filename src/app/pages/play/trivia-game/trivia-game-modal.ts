export interface Question {
    question:string,
    options: Option[]
}
export interface Option {
    id:number | null,
    option:string | null,
    isTrue?:boolean
}