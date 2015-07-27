# angular-on-hold
Mousedown interval event handler directive.

# Installation

Bower
```bash
bower install kubukoz/angular-on-hold
```
index.html
```html
<script src="angular.js"></script>
<!--other modules-->
<script src="{{repositoryRoot}}/angular-on-hold.js"></script>
<!--other modules-->
<script src="app/main.js"></script>
```
main.js
```javascript
var app = angular.module("myApp", ["kzHold"]);
```
#Usage
main.js
```javascript
app.run(['$rootScope', function($rootScope){
  //...
  $rootScope.someFunction = function(){
    console.log("triggered click");
  };
  //...
}])
```

template.html
```html
<ANY kz-hold="someFunction" kz-hold-frequency="180">click me</ANY>
```
#Attributes
* __kz-hold__ - required, specifies the function called every time a hold event is triggered
* __kz-hold-frequency__ - optional, specifies the amount of times __kz-hold__ function is triggered per second. 180 by default.
