page('/', landingPageController.initLandingPage);

page('/reps/:address', officialsPageController.initRepsPage, officialsPageController.loadReps, officialsPageController.loadMap);

page('/about', aboutPageController.initAboutPage);

page('/reps/', '/');

page({
  hashbang: true
});
