"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pushPlugin = require("nativescript-push-notifications");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pushSettings = {
            senderID: "661962428344",
            notificationCallbackAndroid: function (stringifiedData, fcmNotification) {
                var notificationBody = fcmNotification && fcmNotification.getBody();
                console.log("Message received!\n" + notificationBody + "\n" + stringifiedData);
            }
        };
        pushPlugin.register(this.pushSettings, function (token) {
            console.log("Device registered. Access token: " + token);
            ;
        }, function () { });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsNERBQThEO0FBTzlEO0lBU0k7UUFSUSxpQkFBWSxHQUFHO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLDJCQUEyQixFQUFFLFVBQUMsZUFBdUIsRUFBRSxlQUFvQjtnQkFDdkUsSUFBTSxnQkFBZ0IsR0FBRyxlQUFlLElBQUksZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLGdCQUFnQixHQUFHLElBQUksR0FBRyxlQUFlLENBQUMsQ0FBQztZQUNuRixDQUFDO1NBQ0osQ0FBQztRQUdFLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxVQUFDLEtBQWE7WUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUFBLENBQUM7UUFDOUQsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQWJRLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQzs7T0FFVyxZQUFZLENBY3hCO0lBQUQsbUJBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBwdXNoUGx1Z2luIGZyb20gXCJuYXRpdmVzY3JpcHQtcHVzaC1ub3RpZmljYXRpb25zXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBwdXNoU2V0dGluZ3MgPSB7XG4gICAgICAgIHNlbmRlcklEOiBcIjY2MTk2MjQyODM0NFwiLCAvLyBSZXF1aXJlZDogc2V0dGluZyB3aXRoIHRoZSBzZW5kZXIvcHJvamVjdCBudW1iZXJcbiAgICAgICAgbm90aWZpY2F0aW9uQ2FsbGJhY2tBbmRyb2lkOiAoc3RyaW5naWZpZWREYXRhOiBzdHJpbmcsIGZjbU5vdGlmaWNhdGlvbjogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub3RpZmljYXRpb25Cb2R5ID0gZmNtTm90aWZpY2F0aW9uICYmIGZjbU5vdGlmaWNhdGlvbi5nZXRCb2R5KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1lc3NhZ2UgcmVjZWl2ZWQhXFxuXCIgKyBub3RpZmljYXRpb25Cb2R5ICsgXCJcXG5cIiArIHN0cmluZ2lmaWVkRGF0YSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHB1c2hQbHVnaW4ucmVnaXN0ZXIodGhpcy5wdXNoU2V0dGluZ3MsICh0b2tlbjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRldmljZSByZWdpc3RlcmVkLiBBY2Nlc3MgdG9rZW46IFwiICsgdG9rZW4pOztcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkgeyB9KTtcbiAgICB9XG59XG4iXX0=