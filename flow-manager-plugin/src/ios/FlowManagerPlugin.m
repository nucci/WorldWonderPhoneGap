//
//  FlowManagerPlugin.m
//  Cordova
//
//  Created by Gian Lucas Nucci on 16/04/14.
//
//

#import "FlowManagerPlugin.h"
#import "BaseCordovaViewController.h"

@implementation FlowManagerPlugin

#pragma mark -
#pragma mark Public Methods


- (void)present:(CDVInvokedUrlCommand *)command
{
    // Retrieving the arguments
    NSString *identifier = command.arguments[0];
    BOOL killHistory = [command.arguments[1] boolValue];
    NSDictionary *controllerData = command.arguments[2];
    
    CDVPluginResult *result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    
    //Set data to pass forward
    NSString *className = [NSString stringWithFormat:@"%@ViewController", identifier];
    BaseCordovaViewController *vc = (BaseCordovaViewController *)[[NSClassFromString(className) alloc] init];
    [vc setControllerData:controllerData];
    
    if (killHistory) {
        [self.viewController.parentViewController.navigationController setViewControllers:@[vc]
                                                                                 animated:YES];
    } else {
        [self.viewController.parentViewController.navigationController pushViewController:vc
                                                                                 animated:YES];
    }
    
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];

}

- (void)dismiss:(CDVInvokedUrlCommand *)command
{
    // Retrieving the arguments
    CDVPluginResult *result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];

    [self.viewController.parentViewController.navigationController popViewControllerAnimated:YES];
    
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

- (void) retrieveControllerData:(CDVInvokedUrlCommand *)command {
    BaseCordovaViewController *current = (BaseCordovaViewController *)self.viewController.parentViewController;
    NSLog(@">>> SEND CONTROLLER DATA: %@",current.controllerData);
    CDVPluginResult *result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:current.controllerData];
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

@end