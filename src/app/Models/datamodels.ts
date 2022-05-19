export class FormField<T>{
  value:T;
  key:string;
  label:string;
  required:boolean;
  validators:string;
  order:number;
  controlType:string;
  type:string;
  options:{key:string; value:string}[];
  constructor(
    option:{
      value?:T;
      key?:string;
      lable?:string;
      required?:boolean;
      validator?:string;
      order?:number;
      controlType?:string;
      type?:string;
      options?:{key:string, value:string}[];
    }={}
  ){}
}