//
//  StoragePlugin.h
//  WondersOfTheWorld
//
//  Created by Gian Nucci on 07/10/15.
//
//

#import <Cordova/CDVPlugin.h>

@interface StoragePlugin : CDVPlugin

/**
 *  Get value from Defaults by key
 *
 *  @param command CDVInvokedUrlCommand
 */
- (void)get:(CDVInvokedUrlCommand *)command;

/**
 *  Set value in Defalts by key
 *
 *  @param command CDVInvokedUrlCommand
 */
- (void)set:(CDVInvokedUrlCommand *)command;

/**
 *  remove value in Defalts
 *
 *  @param command CDVInvokedUrlCommand
 */
- (void)remove:(CDVInvokedUrlCommand *)command;
@end
