//
//  AlertPlugin.m
//  WondersOfTheWorld
//
//  Created by Gian Nucci on 07/10/15.
//
//

#import "AlertPlugin.h"

@implementation AlertPlugin

- (void)show:(CDVInvokedUrlCommand *)command{
    // Retrieving the arguments
    NSString *title = command.arguments[0];
    NSString *message = command.arguments[1];
    
    UIAlertController *alert = [UIAlertController alertControllerWithTitle:title
                                                                   message:message
                                                            preferredStyle:UIAlertControllerStyleAlert];
    UIAlertAction *action = [UIAlertAction actionWithTitle:@"OK"
                                                     style:UIAlertActionStyleCancel
                                                   handler:nil];
    [alert addAction:action];
    [self.viewController.parentViewController presentViewController:alert
                                                           animated:YES
                                                         completion:nil];
    
    CDVPluginResult *result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

@end
