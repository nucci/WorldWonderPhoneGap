//
//  StoragePlugin.m
//  WondersOfTheWorld
//
//  Created by Gian Nucci on 07/10/15.
//
//

#import "StoragePlugin.h"

@implementation StoragePlugin

- (void)get:(CDVInvokedUrlCommand *)command {
    NSString *key = command.arguments[0];
    
    NSString *value = [[NSUserDefaults standardUserDefaults] valueForKey:key];
    
    CDVPluginResult *result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK
                                                messageAsString:value];
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

- (void)set:(CDVInvokedUrlCommand *)command {
    NSString *key = command.arguments[0];
    NSString *value = command.arguments[1];
    
    [[NSUserDefaults standardUserDefaults] setValue:value forKey:key];
    [[NSUserDefaults standardUserDefaults] synchronize];
    
    CDVPluginResult *result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

- (void)remove:(CDVInvokedUrlCommand *)command {
    NSString *key = command.arguments[0];
    
    [[NSUserDefaults standardUserDefaults] removeObjectForKey:key];
    [[NSUserDefaults standardUserDefaults] synchronize];
    
    CDVPluginResult *result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

@end

