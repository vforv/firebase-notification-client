import { Component } from "@angular/core";
import * as pushPlugin from "nativescript-push-notifications";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {
    private pushSettings = {
        senderID: "661962428344", // Required: setting with the sender/project number
        notificationCallbackAndroid: (stringifiedData: string, fcmNotification: any) => {
            const notificationBody = fcmNotification && fcmNotification.getBody();
            console.log("Message received!\n" + notificationBody + "\n" + stringifiedData);
        }
    };

    constructor() {
        pushPlugin.register(this.pushSettings, (token: string) => {
            console.log("Device registered. Access token: " + token);;
        }, function () { });
    }
}
