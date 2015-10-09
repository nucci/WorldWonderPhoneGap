//
//  LoginViewController.m
//  WondersOfTheWorld
//
//  Created by Gian Nucci on 07/10/15.
//
//

#import "LoginViewController.h"
#import <Cordova/CDVViewController.h>

@interface LoginViewController ()

@end

@implementation LoginViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    [self setupCordovaWebViewWithFolderName:@"www/view"
                               andStartPage:@"login.html"];
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    [self.navigationController setNavigationBarHidden:YES
                                             animated:NO];
}

@end
