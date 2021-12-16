const express = require('express');
const router = express.Router();
const axios = require('axios');

let apikey = "5542b4e437b543bacaeaa3f88b9ed922"
let URL_ROOT = "https://api.themoviedb.org/3/"
let POSTERROOT = "https://image.tmdb.org/t/p/w500";
let BACKDROPROOT = "https://image.tmdb.org/t/p/w780";
let PROFILEROOT = "https://image.tmdb.org/t/p/w45";
let YOUTUBEROOT = "https://www.youtube.com/watch?v=";
let SUFFIX = "&language=en-US&page=1";
let SUFFIX2 = "&language=en-US&page=2";

router.get('/tvvideo/:id', function(req, res) {
    let id = req.params.id;
    let url = URL_ROOT + "tv/" + id + "/videos?api_key=" + apikey + SUFFIX;
    axios.get(url).then(data => {
        var results = data.data.results;
        var len = 5;
        if (results.length < 5) {
            len = results.length;
        }
        var cum = [];
        for (var i = 0; i < len; i++) {
            var r = results[i];
            var temp = { site: r.site, type: r.type, name: r.name, key: (r.key) };
            cum.push(temp);
        }
        res.send(cum);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/movievideo/:id', function(req, res) {
    let id = req.params.id;
    let url = URL_ROOT + "movie/" + id + "/videos?api_key=" + apikey + SUFFIX;
    axios.get(url).then(data => {
        var results = data.data.results;
        var len = 5;
        if (results.length < 5) {
            len = results.length;
        }
        var cum = [];
        for (var i = 0; i < len; i++) {
            var r = results[i];
            var temp = { site: r.site, type: r.type, name: r.name, key: (r.key) };
            cum.push(temp);
        }
        res.send(cum);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/moviedetails/:id', function(req, res) {
    let id = req.params.id;
    let url = URL_ROOT + "movie/" + id + "?api_key=" + apikey + SUFFIX;
    axios.get(url).then(data => {
        var r = data.data;
        var temp = { id: id, title: r.title, genres: r.genres, spoken_languages: r.spoken_languages, release_date: r.release_date, runtime: r.runtime, overview: r.overview,
                            vote_average: r.vote_average, tagline: r.tagline, poster_path: POSTERROOT + r.poster_path, is_movie:true };
        res.send(temp);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/tvdetails/:id', function(req, res) {
    let id = req.params.id;
    let url = URL_ROOT + "tv/" + id + "?api_key=" + apikey + SUFFIX;
    axios.get(url).then(data => {
        var r = data.data;
        var temp = { id: id, title: r.name, genres: r.genres, spoken_languages: r.spoken_languages, release_date: r.release_date, runtime: r.runtime, overview: r.overview,
                            vote_average: r.vote_average, tagline: r.tagline, poster_path: POSTERROOT + r.poster_path, is_movie:false };
        res.send(temp);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/moviecredits/:id', function(req, res) {
    let id = req.params.id;
    let url = URL_ROOT + "movie/" + id + "/credits" + "?api_key=" + apikey + SUFFIX;
    axios.get(url).then(data => {
        var results = data.data.cast;
        var len = 10;
        if (results.length < 10) {
            len = results.length;
        }
        var cum = [];
        for (var i = 0; i < len; i++) {
            var r = results[i];
            var temp = { name: r.name, profile_path: PROFILEROOT + r.profile_path };
            cum.push(temp);
        }
        res.send(cum);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/tvcredits/:id', function(req, res) {
    let id = req.params.id;
    let url = URL_ROOT + "tv/" + id + "/credits" + "?api_key=" + apikey + SUFFIX;
    axios.get(url).then(data => {
        var results = data.data.cast;
        var len = 10;
        if (results.length < 10) {
            len = results.length;
        }
        var cum = [];
        for (var i = 0; i < len; i++) {
            var r = results[i];
            var temp = { name: r.name, profile_path: PROFILEROOT + r.profile_path };
            cum.push(temp);
        }
        res.send(cum);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/moviereviews/:id', function(req, res) {
    let id = req.params.id;
    let url = URL_ROOT + "movie/" + id + "/reviews" + "?api_key=" + apikey + SUFFIX;
    axios.get(url).then(data => {
        var results = data.data.cast;
        var len = 10;
        if (results.length < 10) {
            len = results.length;
        }
        var cum = [];
        for (var i = 0; i < len; i++) {
            var r = results[i];
            var temp = { name: r.name, profile_path: PROFILEROOT + r.profile_path };
            cum.push(temp);
        }
        res.send(cum);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/tvreviews/:id', function(req, res) {
    let id = req.params.id;
    let url = URL_ROOT + "tv/" + id + "/reviews" + "?api_key=" + apikey + SUFFIX;
    axios.get(url).then(data => {
        var results = data.data.cast;
        var len = 10;
        if (results.length < 10) {
            len = results.length;
        }
        var cum = [];
        for (var i = 0; i < len; i++) {
            var r = results[i];
            var temp = { name: r.name, profile_path: PROFILEROOT + r.profile_path };
            cum.push(temp);
        }
        res.send(cum);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/movierecommendations/:id', function(req, res) {
    let id = req.params.id;
    let url = URL_ROOT + "movie/" + id + "/recommendations" + "?api_key=" + apikey + SUFFIX;
    axios.get(url).then(data => {
        var results = data.data.results;
        var len = 20;
        if (results.length < 20) {
            len = results.length;
        }
        var cum = [];
        for (var i = 0; i < len; i++) {
            var r = results[i];
            var temp = { id: r.id, title: r.title, poster_path: POSTERROOT + r.poster_path };
            cum.push(temp);
        }
        res.send(cum);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/tvrecommendations/:id', function(req, res) {
    let id = req.params.id;
    let url = URL_ROOT + "tv/" + id + "/recommendations" + "?api_key=" + apikey + SUFFIX;
    axios.get(url).then(data => {
        var results = data.data.results;
        var len = 20;
        if (results.length < 20) {
            len = results.length;
        }
        var cum = [];
        for (var i = 0; i < len; i++) {
            var r = results[i];
            var temp = { id: r.id, title: r.name, poster_path: POSTERROOT + r.poster_path };
            cum.push(temp);
        }
        res.send(cum);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/currentmovies', function(req, res) {
    let url = URL_ROOT + "movie/now_playing?api_key=" + apikey + SUFFIX;
    axios.get(url).then(data => {
        var results = data.data.results;
        var len = 5;
        if (results.length < 5) {
            len = results.length;
        }
        var cum = [];
        for (var i = 0; i < len; i++) {
            var r = results[i];
            var temp = { id: r.id, title: r.title, backdrop_path: (BACKDROPROOT + r.backdrop_path), poster_path: (POSTERROOT + r.poster_path) };
            cum.push(temp);
        }
        res.send(cum);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/currenttv', function(req, res) {
    let url = URL_ROOT + "tv/airing_today?api_key=" + apikey + SUFFIX;
    axios.get(url).then(data => {
        var results = data.data.results;
        var len = 5;
        if (results.length < 5) {
            len = results.length;
        }
        var cum = [];
        for (var i = 0; i < len; i++) {
            var r = results[i];
            var temp = { id: r.id, title: r.name, backdrop_path: (BACKDROPROOT + r.backdrop_path), poster_path: (POSTERROOT + r.poster_path) };
            cum.push(temp);
        }
        res.send(cum);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/populartv', function(req, res) {
    let url = URL_ROOT + "tv/popular?api_key=" + apikey + SUFFIX;
    axios.get(url).then(data => {
        var results = data.data.results;
        var len = 24;
        if (results.length < 24) {
            len = results.length;
        }
        var cum = [];
        var i = 0;
        for (i = 0; i < len; i++) {
            var r = results[i];
            var temp = { id: r.id, title: r.name, poster_path: (POSTERROOT + r.poster_path) };
            cum.push(temp);
        }
        res.send(cum);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/trendingtv', function(req, res) {
    let url = URL_ROOT + "trending/tv/day?api_key=" + apikey + SUFFIX;
    axios.get(url).then(data => {
        var results = data.data.results;
        console.log(results);
        var len = 24;
        if (results.length < 24) {
            len = results.length;
        }
        var cum = [];
        var sixlist = [];
        var i = 0;
        for (i = 0; i < len; i++) {
            if(i % 6 == 0 && i != 0) {
                sixlist = [];
            }
            var r = results[i];
            var temp = { id: r.id, title: r.name, poster_path: (POSTERROOT + r.poster_path) };
            sixlist.push(temp);

            if((i + 1) % 6 == 0) {
                cum.push(sixlist);
            }
        }
        if (i % 6 != 0) {
            cum.push(sixlist);
        }
        res.send(cum);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/topratedtv', function(req, res) {
    let url = URL_ROOT + "tv/top_rated?api_key=" + apikey + SUFFIX;
    axios.get(url).then(data => {
        var results = data.data.results;
        var len = 24;
        if (results.length < 24) {
            len = results.length;
        }
        var cum = [];
        var i = 0;
        for (i = 0; i < len; i++) {
            var r = results[i];
            var temp = { id: r.id, title: r.name, poster_path: (POSTERROOT + r.poster_path) };
            cum.push(temp);
        }
        res.send(cum);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/popularmovies', function(req, res) {
    let url = URL_ROOT + "movie/popular?api_key=" + apikey + SUFFIX;
    axios.get(url).then(data => {
        var results = data.data.results;
        var len = 24;
        if (results.length < 24) {
            len = results.length;
        }
        var cum = [];
        var i = 0;
        for (i = 0; i < len; i++) {
            var r = results[i];
            var temp = { id: r.id, title: r.title, poster_path: (POSTERROOT + r.poster_path) };

            cum.push(temp);
        }
        res.send(cum);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/topratedmovies', function(req, res) {
    let url = URL_ROOT + "movie/top_rated?api_key=" + apikey + SUFFIX;
    axios.get(url).then(data => {
        var results = data.data.results;
        var len = 24;
        if (results.length < 24) {
            len = results.length;
        }
        var cum = [];
        var i = 0;
        for (i = 0; i < len; i++) {
            var r = results[i];
            var temp = { id: r.id, title: r.title, poster_path: (POSTERROOT + r.poster_path) };
            cum.push(temp);
        }
        res.send(cum);
    }).catch(err => {
        res.send(err);
    })
});

router.get('/:id', function(req, res) {
    let id = req.params.id;
    let url = "https://jsonplaceholder.typicode.com/posts/" + id;
    axios.get(url).then(posts => {
        res.json(posts.data);
    }).catch(err => {
        res.send(err);
    });
});

module.exports = router;