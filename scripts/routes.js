page('/');

page('/reps/:address', addressController.loadReps);

page('/about', callbackToLoadAboutPage);
