var module = angular.module("kzHold", []);
module.directive("kzHold", function($interval){
  return {
      scope: {kzHold: "=", frequency: "=kzHoldFrequency"},
      link: function(scope, elem, attr){
          var action = scope.kzHold;
          var intervalSet;
          var intervalPromise;
          var bindAction = function(){
              if(!intervalSet) {
                  scope.$apply(action);
                  intervalPromise = $interval(action, 1000/(scope.frequency || 180));
                  intervalSet=true;
              }
          };
          var endAction = function(){
              if(intervalSet){
                $interval.cancel(intervalPromise);
                intervalSet=false;
              }
          };
          elem.on("mousedown", bindAction);
          elem.on("mouseup", endAction);
          elem.on("mouseleave", endAction);
      }
  };
});
