export class Cv{
  public name : string ;
  public contact : string;
  public address : string ;
  public objective : string ;
  public goals : string;
  public matricMarks : string ;
  public intermediateMarks : string;
  public bachelors : string;
  public workExperience : string ;
  public imagePath : string ;

  constructor(name: string, contact : string, address : string , objective : string, goals : string, matric : string, inter : string, bachelor : string , workExp: string, img:string){
    this.name=name;
    this.contact=contact;
    this.address=address;
    this.objective=objective;
    this.goals=goals;
    this.matricMarks=matric;
    this.intermediateMarks=inter;
    this.bachelors=bachelor;
    this.workExperience=workExp;
    this.imagePath=img;
  }
}
