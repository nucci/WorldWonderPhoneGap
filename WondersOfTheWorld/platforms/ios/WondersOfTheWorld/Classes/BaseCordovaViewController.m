//
//  BaseCordovaViewController.m
//  WondersOfTheWorld
//
//  Created by Gian Nucci on 09/10/15.
//
//

#import "BaseCordovaViewController.h"

@interface BaseCordovaViewController ()

@end

@implementation BaseCordovaViewController

- (void) setupCordovaWebViewWithFolderName:(NSString *)name
                              andStartPage:(NSString *)startPage {
    self.cordovaViewController = [[CDVViewController alloc] init];
    [self.cordovaViewController setWwwFolderName:name];
    [self.cordovaViewController setStartPage:startPage];
    self.cordovaViewController.view.frame = self.cordovaContainerView.bounds;
    [self.cordovaContainerView addSubview:self.cordovaViewController.view];
    [self addChildViewController:self.cordovaViewController];
    
    [self configWebView];
}

- (void)configWebView {
    [self.cordovaViewController.webView.scrollView setBounces:NO];
}

- (void)stringByEvaluatingJavaScriptFromString:(NSString *)javascriptString{
    if (javascriptString) {
        [self.cordovaViewController.webView stringByEvaluatingJavaScriptFromString:javascriptString];
    }
}

@end
