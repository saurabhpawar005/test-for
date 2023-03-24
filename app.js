cl = console.log;

const movieContainer = document.getElementById("movieContainer")
// let imgPath = `https://www.themoviedb.org/t/p/w300/`
// cl(results);

let cardResult =  '';

results.forEach((obj) => {
    cl(obj)

    cardResult +=`
    
    
    <div class="col-sm-3">
    <div class="card">
    <figure class="moviesCard">
        <img src="https://www.themoviedb.org/t/p/w300/${obj.poster_path} " alt="movie name" title="movie" class="img-fluid">
        <figcaption>
        <div class="row text-white align-items-center p-2">
            <div class="col-sm-9">
             ${obj.title}
            </div>  
            <div class="col-sm-3 text-success">
            ${obj.vote_average}
            </div>
        </div>
        <div class="overview p-4">
            <h4>Overview</h4>
           ${obj.overview}
        </div>
        </figcaption>
    </figure>
    </div>
</div>
    
`

})


movieContainer.innerHTML = cardResult;




