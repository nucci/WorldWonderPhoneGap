//
//  FlowManagerPlugin.h
//  Cordova
//
//  Created by Gian Lucas Nucci on 16/04/14.
//
//

#import <Cordova/CDVPlugin.h>

/**
 *  Cordova Plugin that provides native container interaction methods
 */
@interface FlowManagerPlugin : CDVPlugin

/**
 *  Presents a view controller
 *  
 *  @param command CDVInvokedUrlCommand instance.
 */
- (void)present:(CDVInvokedUrlCommand *)command;

/**
 *  Dismisses the current view controller
 *  
 *  @param command CDVInvokedUrlCommand instance.
 */
- (void)dismiss:(CDVInvokedUrlCommand *)command;

/**
 *  Retrieve controller data back to js
 *
 *  @param command CDVInvokedUrlCommand instance.
 */
- (void) retrieveControllerData:(CDVInvokedUrlCommand *)command;

@end
