// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var app = angular.module('vraag2', ['ionic'])

 
 app.controller('Ctrl', function($scope) {

         $scope.save= function() {
			var random = Math.floor(Math.random() * (20));

			var answers = { a0: "It is certain", a1: "It is decidedly so", a2: "Without a doubt", a3: "Yes definitely", a4: "You may rely on it", a5: "As I see it, yes", a6: "Most likely",
			a7: "Outlook good", a8: "Yes", a9: "Signs point to yes", a10: "Reply hazy try again", a11: "Ask again later", a12: "Better not tell you now", a13: "Cannot predict now",
			a14: "Concentrate and ask again", a15: "Don't count on it",	a16: "My reply is no", a17: "My sources say no", a18: "Outlook not so good", a19: "Very doubtful" };

			$scope.testinput = answers;
			testinput = "answers.a" + random;
		
            localStorage.setItem('serverip', $scope.serverip);
			var test2 = localStorage.getItem("serverip");
			console.log(test2);

			localStorage.setItem('testinput', $scope.testinput);
			var mega2 = localStorage.getItem("testinput");
			console.log(testinput);

			var mega = "answers." + random;
			console.log(answers.a1);
			
			$scope.testinput = answers;



        };
		$scope.serverip = "888";
 })
 
 
 
 
 
app.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		
	});
})