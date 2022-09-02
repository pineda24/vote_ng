export class VotationCard {
    title!:string;
    datetime!:Date;
    autor!:VotationCardAutor;
    picture!:string;
    votesAmount!:number;
    peopleAmount!:number;
    optionsList!:VotationCardOption[];
    constructor(
        title?:string,
        datetime?:Date,
        votesAmount?:number,
        peopleAmount?:number,
        picture?:string,
        autor?:VotationCardAutor,
        optionsList?:VotationCardOption[],
    ){
        if(title!==undefined){
            this.title=title;
        }
        else{ //DEV
            this.title="Selección del nuevo director de la facultad de ingeniería"
        }
        if(datetime!==undefined){
            this.datetime=datetime;
        }
        else{ //DEV
            this.datetime=new Date();
        }
        if(autor!==undefined){
            this.autor=autor;
        }
        else{ //DEV
            this.autor=new VotationCardAutor("organization", "Universidad Autonoma de Chihuahua");
        }
        if(votesAmount!==undefined){
            this.votesAmount=votesAmount;
        }
        else{ //DEV
            this.votesAmount=5123;
        }
        if(peopleAmount!==undefined){
            this.peopleAmount=peopleAmount;
        }
        else{ //DEV
            this.peopleAmount=8241;
        }

        if(optionsList!==undefined){
            this.optionsList=optionsList;
        }
        else{ //DEV
            this.optionsList=[
                new VotationCardOption("#C4FFFB", 249),
                new VotationCardOption("#FBC4FF", 192),
                new VotationCardOption("#D1FFC4", 130),
                new VotationCardOption("#F2FFC4", 215)
            ]
        }

        if(picture!==undefined){
            this.picture=picture;
        }
        else{ //DEV
            this.picture="https://mvmstudios.com/wp-content/uploads/2019/11/mural-mosaico-universidad-chihuahua-mvm-studios6.jpg";
        }
    }
}
export class VotationCardOption {
    color!:string;
    picture!:string;
    votesAmount!:number;

    constructor(color?:string, votesAmount?:number){
        
        if(color!==undefined){
            this.color=color;
        }
        else{ //DEV
            this.color="#FFC4DA";
        }
        if(votesAmount!==undefined){
            this.votesAmount=votesAmount;
        }
        else{ //DEV
            this.votesAmount=245
        }

        // DEV
        this.picture="https://www.recreoviral.com/wp-content/uploads/2017/07/hechoscuriosos-7.png";
    }
}
export class VotationCardAutor {
    type!:string;
    fullName!:string;
    picture!:string;
    color!:string

    constructor(type:string, name:string, paternalLastName?:string, maternalLastName?:string){
        this.type=type;
        this.fullName=name;
        if(paternalLastName!==undefined&&maternalLastName!==undefined){
            this.fullName+=" "+paternalLastName+" "+maternalLastName;
        }

        // DEV
        this.picture="https://variety.com/wp-content/uploads/2020/12/Gal_Gadot_v5.png?w=713";
        this.color="#cdd495";
    }
}