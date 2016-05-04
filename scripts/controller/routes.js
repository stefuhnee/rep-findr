page('/', landingPageController.initLandingPage);

page('/reps/:address', officialsPageController.loadReps, officialsPageController.loadMap);

//page('/about', fuckyou);

page();
