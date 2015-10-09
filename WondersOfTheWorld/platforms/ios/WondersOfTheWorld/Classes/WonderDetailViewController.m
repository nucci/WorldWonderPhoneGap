//
//  WonderDetailViewController.m
//  WondersOfTheWorld
//
//  Created by Gian Nucci on 09/10/15.
//
//

#import "WonderDetailViewController.h"

@interface WonderDetailViewController ()

@end

@implementation WonderDetailViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    [self setupCordovaWebViewWithFolderName:@"www/view"
                               andStartPage:@"wonderDetail.html"];
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    [self.navigationController setNavigationBarHidden:NO
                                             animated:YES];
}

@end
