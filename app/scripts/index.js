var $ = require('jquery');
var _ = require('underscore');
var Handlebars = require('handlebars');
var githubtoken = require('./gitapikey.js');

// if(githubtoken !== undefined){
//   $.ajaxSetup({
//     headers: {
//       'Authorization': 'token ' + githubtoken.token
//     }
//   });
// }

$.ajax('https://api.github.com/users/Oeromilk').then(displayUserProfile);

$.ajax('https://api.github.com/users/Oeromilk/repos').then(displayUserRepos);

function displayUserProfile(data){
  var profile = data;
  var $profileContainer = $('.profile-location');

  var source = $('#profile-template').html();
  var template = Handlebars.compile(source);

    $profileContainer.append(template(profile));

}

function displayUserRepos(data){
  var repos = data;
  var $repoContainer = $('#repo-location');

  var source = $('#repo-temp').html();
  var template = Handlebars.compile(source);

  _.each(repos, function(repo){
    $repoContainer.append(template(repo));
  });
}
