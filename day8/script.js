
// data of movies in array of array format
const movieList = [["After", "Voltage Pictures", "PG13"],["unratedMovie", "Unknown Studio"], ["Love Yourself", "Studio Single", "R"], ["Iron Man", "universal studio", "PG13"], ["unkownFilm", "Studio Single"]  ]

// class movie
class Movie {
    // constructor with arguments and the rating have the default value as PG
    constructor(title , studio, rating = "PG"){
        //assign the argument values to respective class properties
    this.title = title
    this.studio = studio
    this.rating = rating
    }

    // create a method to develop a detailed overview of the movie
    getDetail(){
        return `The ${this.title} is a movie which is under ${this.studio} and rated as ${this.rating}`
    }
    
    // static method to filter out the unRated or PG rated movies in the list of data of movies in array of array format
 static getPG(movie){
     var pgArray = [];
    for(let i in movie){
        if(movie[i].length === 2){
            pgArray.push(movie[i][0])
        }
    }
    return !pgArray.length == 0 ?  pgArray : `There is no PG or unRated movies`
 }
}

// get detailed overview for all the movies in the list of data by getDetail method
for(let i in movieList){
const movies = new Movie(...movieList[i])
console.log(movies.getDetail())
}

// filter out unrated or PG rated movies from list of data
console.log(` Un-Rated Movies : ${Movie.getPG(movieList)}`);

// create a instance for class Movie with its title, studio, rating
const CRMovie = new Movie("Casino Royale", "Eon Productions", "PG13")
// get detailed overview for created instance
console.log(CRMovie.getDetail())





// quest No. 2 
// coverting uml diagram to class
// create a class circle

class Circle{
    // constructor with arguments to get radius , color
    constructor(radius, color){
        this.radius = radius
        this.color = color
    }
    // method to return a radius
    getRadius = () => this.radius
    
    //method to set radius
    setRadius(rad){
        this.radius = rad;
        console.log(`Radius of the circle is changed to ${rad}`)
    }

    //method to get Color
    getColor = () => this.color

    //method to  set color

    setColor(col){
        this.color = col
        console.log(`Color of the circle is changed to ${col}`)
    }

    //method to get a info of circle as string
    toString=()=>`circle[radius = ${this.radius}, color = ${this.color}]`

    //calculate area of circle

    getArea = () => Math.PI*(this.radius*this.radius)

    // calculate circumference of the circle
    
    getCircumference =() => 2 * Math.PI * this.radius
}

const redCircle = new Circle(2.4, "red")

// get the info of redCircle using methods of class Circle
console.log(`redCircle's Info \n Radius : ${redCircle.getRadius()} \n Color : ${redCircle.getColor()} \n Area : ${redCircle.getArea()} \n Circumference : ${redCircle.getCircumference()} \n`);

// set the color as blue
redCircle.setColor("blue")

//set thr radius as 3
redCircle.setRadius(3.0)

//getting the changed color and radius as string by toString method
console.log(redCircle.toString())






// // Movie datas

// const Movie1 = {
//     title : "After",
//     year : "2019",
//     studio : ["Voltage Pictures",
//        " CalMaple Media",
//        " Diamond Film Productions",
//        " Offspring Entertainment",
//       "  Frayed Pages Entertainment",
//         "Wattpad"],
//     rating : "PG-13",
//     director : "Jenny Gage",
//     description: "Tessa Young is a dedicated student, dutiful daughter and loyal girlfriend to her high school sweetheart. Entering her first semester of college, Tessa's guarded world opens up when she meets Hardin Scott, a mysterious and brooding rebel who makes her question all she thought she knew about herself -- and what she wants out of life."
// } 

// const Movie2 = {
//     title : "Iron Man",
//     year : "2008",
//     studio : ["Universal studio"],
//     rating : "PG-13",
//     director : " Jon Favreau",
//     description: "When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world."
// }

// const Movie3 = {
//     title : "Beast",
//     year : "2022",
//     studio : ["Sun studios"],
//     director : " Jon Favreau",
//     description: "Beast is a Tamil action, romance movie written and directed by Nelson Dilipkumar. The movie has Thalapathy Vijay and Pooja Hegde as the lead roles, with Yogi Babu, Shine Tom Chacko, VTV Ganesh, and Aparna Das in supporting roles. The movie is being produced by Kalanidhi Maran under the banner Sun Pictures. The music is composed by Anirudh Ravichander."

// }

//  // class movie 
// class Movie {
//     constructor (props){
//         this.title = props.title,
//         this.studio = props.studio,
//         this.rating = props.rating || "PG",
//         this.director = props.director,
//         this.description = props.description,
//         this.year = props.year
//     }

//     getTitle(){
//         console.log(` Title : ${this.title}`);
//         return this.title
//     }
//     getStudio(){
//         console.log(` Studio : ${this.studio}`);
//         return this.studio
//     }
//     getRating(){
//         console.log(`Rating : ${this.rating}`);
//         return this.rating
//     }
//     getDetail(){
//         console.log(`The ${this.title} is a movie which is directed by ${this.director} under ${this.studio} and released on ${this.year}. The film's short story is that ${this.description}`)

//         return `The ${this.title} is a movie which is directed by ${this.director} under ${this.studio} and released on ${this.year}. The film's short story is that ${this.description}`
//     }
//     getYear(){
//         console.log(` Released on ${this.year}`)

//         return this.year
//     }
//     getDescription(){
//         console.log(`Description : ${this.description}`);
//         return this.description
//     }
//     getDirector(){
//         console.log(` Director : ${this.director}`)
//         return this.director
//     }
//     render(){
//         return `<div>
//             <h1>${this.title}</h1>
//             <p> ${this.year} | ${this.rating} | ${this.studio} </p>
//             <h3> Description </h3> 
//             <p>${this.description}<p>
//         </div>`
//     }
// }

// //object for class movie

// const After = new Movie(Movie1);
// const IronMan = new Movie(Movie2);
// const Beast  = new Movie(Movie3)

// After.getTitle()
// After.getDescription()
// const After_Detail = After.getDetail();
// var txt = After.render() + IronMan.render() + Beast.render();


// document.getElementById("root").innerHTML = txt
