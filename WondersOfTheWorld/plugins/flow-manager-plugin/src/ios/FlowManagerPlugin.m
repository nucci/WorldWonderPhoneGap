//
//  FlowManagerPlugin.m
//  Cordova
//
//  Created by Gian Lucas Nucci on 16/04/14.
//
//

#import "FlowManagerPlugin.h"

@implementation FlowManagerPlugin

#pragma mark -
#pragma mark Public Methods


- (void)present:(CDVInvokedUrlCommand *)command
{
    // Retrieving the arguments
    NSString *identifier = command.arguments[0];
    
    CDVPluginResult *result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    
    //Set data to pass forward
    NSString *className = [NSString stringWithFormat:@"%@ViewController", identifier];
    UIViewController *vc = [[NSClassFromString(className) alloc] init];
    
    [self.viewController.parentViewController.navigationController pushViewController:vc animated:YES];
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];

}

- (void)dismiss:(CDVInvokedUrlCommand *)command
{
    // Retrieving the arguments
    CDVPluginResult *result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];

    [self.viewController.parentViewController.navigationController popViewControllerAnimated:YES];
    
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

@end