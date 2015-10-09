//
//  AlertPlugin.h
//  WondersOfTheWorld
//
//  Created by Gian Nucci on 07/10/15.
//
//

#import <Cordova/CDVPlugin.h>

@interface AlertPlugin : CDVPlugin
/**
 *  Show Alert with Tilte and message
 *
 *  @param command CDVInvokedUrlCommand
 */
- (void)show:(CDVInvokedUrlCommand *)command;
@end
