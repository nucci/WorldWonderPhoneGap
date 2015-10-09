//
//  WonderListViewController.m
//  WondersOfTheWorld
//
//  Created by Gian Nucci on 07/10/15.
//
//

#import "WonderListViewController.h"
#import <Cordova/CDVViewController.h>

@interface WonderListViewController ()
@end

@implementation WonderListViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    [self setupCordovaWebViewWithFolderName:@"www/view"
                               andStartPage:@"wonderList.html"];
    [self setTitle:@"Wonders List"];
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    [self.navigationController setNavigationBarHidden:NO
                                             animated:YES];
    
    UIBarButtonItem *logoutButton = [[UIBarButtonItem alloc] initWithTitle:@"Logout"
                                                                     style:UIBarButtonItemStylePlain
                                                                    target:self
                                                                    action:@selector(logout:)];
    self.navigationItem.rightBarButtonItem = logoutButton;
}

- (void)logout:(id *)sender {
    
    [[NSUserDefaults standardUserDefaults] removeObjectForKey:@"currentSession"];
    [[NSUserDefaults standardUserDefaults] synchronize];
    
    [self stringByEvaluatingJavaScriptFromString:@"WonderListController.logout();"];
}

@end
