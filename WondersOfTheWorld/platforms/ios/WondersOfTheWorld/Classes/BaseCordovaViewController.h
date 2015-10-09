//
//  BaseCordovaViewController.h
//  WondersOfTheWorld
//
//  Created by Gian Nucci on 09/10/15.
//
//

#import <UIKit/UIKit.h>
#import <Cordova/CDVViewController.h>

@interface BaseCordovaViewController : UIViewController
@property (nonatomic, weak) IBOutlet UIView *cordovaContainerView;
@property (nonatomic, strong) CDVViewController *cordovaViewController;
@property (nonatomic, strong) NSDictionary *controllerData;

- (void) setupCordovaWebViewWithFolderName:(NSString *)name
                              andStartPage:(NSString *)startPage;

- (void)stringByEvaluatingJavaScriptFromString:(NSString *)javascriptString;

@end
