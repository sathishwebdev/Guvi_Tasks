// Movie datas

const Movie1 = {
    title : "After",
    year : "2019",
    studio : ["Voltage Pictures",
       " CalMaple Media",
       " Diamond Film Productions",
       " Offspring Entertainment",
      "  Frayed Pages Entertainment",
        "Wattpad"],
    rating : "PG-13",
    director : "Jenny Gage",
    description: "Tessa Young is a dedicated student, dutiful daughter and loyal girlfriend to her high school sweetheart. Entering her first semester of college, Tessa's guarded world opens up when she meets Hardin Scott, a mysterious and brooding rebel who makes her question all she thought she knew about herself -- and what she wants out of life."
} 

const Movie2 = {
    title : "Iron Man",
    year : "2008",
    studio : ["Universal studio"],
    rating : "PG-13",
    director : " Jon Favreau",
    description: "When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world."
}

const Movie3 = {
    title : "Beast",
    year : "2022",
    studio : ["Sun studios"],
    director : " Jon Favreau",
    description: "Beast is a Tamil action, romance movie written and directed by Nelson Dilipkumar. The movie has Thalapathy Vijay and Pooja Hegde as the lead roles, with Yogi Babu, Shine Tom Chacko, VTV Ganesh, and Aparna Das in supporting roles. The movie is being produced by Kalanidhi Maran under the banner Sun Pictures. The music is composed by Anirudh Ravichander."

}

 // class movie 
class Movie {
    constructor (props){
        this.title = props.title,
        this.studio = props.studio,
        this.rating = props.rating || "PG",
        this.director = props.director,
        this.description = props.description,
        this.year = props.year
    }

    getTitle(){
        console.log(` Title : ${this.title}`);
        return this.title
    }
    getStudio(){
        console.log(` Studio : ${this.studio}`);
        return this.studio
    }
    getRating(){
        console.log(`Rating : ${this.rating}`);
        return this.rating
    }
    getDetail(){
        console.log(`The ${this.title} is a movie which is directed by ${this.director} under ${this.studio} and released on ${this.year}. The film's short story is that ${this.description}`)

        return `The ${this.title} is a movie which is directed by ${this.director} under ${this.studio} and released on ${this.year}. The film's short story is that ${this.description}`
    }
    getYear(){
        console.log(` Released on ${this.year}`)

        return this.year
    }
    getDescription(){
        console.log(`Description : ${this.description}`);
        return this.description
    }
    getDirector(){
        console.log(` Director : ${this.director}`)
        return this.director
    }
    render(){
        return `<div>
            <h1>${this.title}</h1>
            <p> ${this.year} | ${this.rating} | ${this.studio} </p>
            <h3> Description </h3> 
            <p>${this.description}<p>
        </div>`
    }
}

//object for class movie

const After = new Movie(Movie1);
const IronMan = new Movie(Movie2);
const Beast  = new Movie(Movie3)

After.getTitle()
After.getDescription()
const After_Detail = After.getDetail();
var txt = After.render() + IronMan.render() + Beast.render();


document.getElementById("root").innerHTML = txt