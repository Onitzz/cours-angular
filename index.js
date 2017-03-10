
var app = angular.module('MonApp', ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
      .when('/', {templateUrl : 'home.html', controller: 'PostCtrl'})
      .when('/comments/:id', {templateUrl : 'comments.html', controller: 'CommentCtrl'})
      .otherwise({redirecTo : '/'})
});

app.controller('PostCtrl', function($scope){
    $scope.posts = [
  {
    "id": 0,
    "name": "Gracker",
    "content": "Nulla occaecat velit adipisicing proident veniam irure cupidatat do exercitation dolor nisi Lorem est.",
    "comments": [
      {
        "username": "Mccarty",
        "city": "Cavalero",
        "email": "beckmccarty@gracker.com",
        "content": "Laboris mollit officia magna velit laboris aliquip exercitation dolore occaecat voluptate incididunt."
      },
      {
        "username": "Howe",
        "city": "Bainbridge",
        "email": "beckhowe@gracker.com",
        "content": "Laborum non labore voluptate do exercitation."
      },
      {
        "username": "Sharp",
        "city": "Harmon",
        "email": "becksharp@gracker.com",
        "content": "Exercitation sit duis consequat id nisi."
      }
    ]
  },
  {
    "id": 1,
    "name": "Ebidco",
    "content": "Aliqua eiusmod quis exercitation sit minim mollit cillum minim nulla nulla.",
    "comments": [
      {
        "username": "Ellison",
        "city": "Jackpot",
        "email": "beckellison@ebidco.com",
        "content": "Id ullamco irure proident sit adipisicing consectetur amet occaecat sint."
      },
      {
        "username": "Shepherd",
        "city": "Warsaw",
        "email": "beckshepherd@ebidco.com",
        "content": "Consequat laboris ad quis ad ex quis do magna labore in tempor nostrud officia anim."
      }
    ]
  },
  {
    "id": 2,
    "name": "Zentury",
    "content": "Excepteur magna fugiat veniam minim enim.",
    "comments": [
      {
        "username": "Shaffer",
        "city": "Floris",
        "email": "beckshaffer@zentury.com",
        "content": "Aliqua Lorem sit sit ullamco fugiat dolore esse fugiat laborum nulla."
      },
      {
        "username": "Byrd",
        "city": "Centerville",
        "email": "beckbyrd@zentury.com",
        "content": "Ex cupidatat proident anim occaecat laborum do in culpa."
      },
      {
        "username": "Merrill",
        "city": "Wadsworth",
        "email": "beckmerrill@zentury.com",
        "content": "Reprehenderit fugiat proident sint aliqua ullamco duis anim."
      }
    ]
  },
  {
    "id": 3,
    "name": "Isoternia",
    "content": "Veniam sunt adipisicing ad dolore commodo occaecat esse adipisicing aliqua deserunt in ad dolore nisi.",
    "comments": [
      {
        "username": "Mann",
        "city": "Hasty",
        "email": "beckmann@isoternia.com",
        "content": "Ut nulla ex anim ullamco cillum qui aute sit duis sint commodo mollit dolore."
      }
    ]
  },
  {
    "id": 4,
    "name": "Cosmetex",
    "content": "Exercitation non aliqua ipsum qui cupidatat officia amet eiusmod dolor pariatur.",
    "comments": [
      {
        "username": "Bradley",
        "city": "Coral",
        "email": "beckbradley@cosmetex.com",
        "content": "Esse voluptate sint occaecat officia."
      }
    ]
  }
]
});

app.controller('CommentCtrl', function ($scope){
  console.log($scope);
  $scope.comments = [
  {
    "username": "Mccormick",
    "city": "Adamstown",
    "email": "pennymccormick@daisu.com",
    "content": "Ullamco cillum do eiusmod minim in sint proident fugiat sit magna anim. Occaecat culpa labore amet ut pariatur aliquip magna non anim minim sunt. Sunt laboris do commodo magna. Ipsum elit magna occaecat reprehenderit esse veniam non. Incididunt ut esse tempor ea do aliqua id anim mollit veniam ipsum sint cillum."
  },
  {
    "username": "Aguilar",
    "city": "Trail",
    "email": "pennyaguilar@daisu.com",
    "content": "Ipsum ullamco dolor aute ullamco. Velit ipsum non aliquip commodo proident. Anim dolor in cupidatat do dolore laborum cillum proident ex culpa exercitation. Cillum fugiat ut nulla tempor. Do labore sit cupidatat in."
  },
  {
    "username": "Farrell",
    "city": "Hondah",
    "email": "pennyfarrell@daisu.com",
    "content": "Pariatur et consequat ullamco officia nostrud nisi magna voluptate proident est ut. Mollit nostrud aute ut esse aute duis sint enim qui sunt. Qui aute officia nulla proident pariatur ea tempor et officia ipsum mollit. Deserunt quis tempor velit eiusmod officia laborum. Dolore excepteur ut nostrud excepteur pariatur nostrud anim cupidatat cupidatat aliquip aliquip esse ad nostrud."
  },
  {
    "username": "Sherman",
    "city": "Umapine",
    "email": "pennysherman@daisu.com",
    "content": "Eiusmod magna mollit labore cupidatat in eu. Quis aliqua velit irure consequat. Eiusmod labore elit ea aliqua culpa incididunt culpa. Amet ullamco duis enim ullamco amet cupidatat magna fugiat veniam cillum sint laboris. Laborum amet do ea reprehenderit sit ea nulla dolor ullamco dolor occaecat quis."
  },
  {
    "username": "Clements",
    "city": "Felt",
    "email": "pennyclements@daisu.com",
    "content": "Ex duis voluptate dolore reprehenderit do Lorem aute commodo amet consequat ea mollit. Reprehenderit ad culpa magna in non proident cupidatat ea do. Elit do anim magna sit sint ut sint reprehenderit est Lorem. Dolore exercitation ullamco enim aliquip cupidatat in do eu magna tempor. Consequat cupidatat adipisicing velit est mollit cillum ea nulla sit eiusmod veniam occaecat ullamco ex."
  }
]

});
