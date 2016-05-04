page('/', landingPageController.initLandingPage);

page('/reps/:address', officialsPageController.loadReps, officialsPageController.initReps);

//page('/about', fuckyou);

page();
