$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall
    
    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(500, 630, 300, 1000);
    createPlatform(950, 500, 190, 400);
    createPlatform(800, 400, 300, 10)
    createPlatform(900, 0, 100, 300);
    createPlatform(700, 300, 100, 10);
    createPlatform(1245, 500, 200, 50);
    createPlatform(1100, 630, 100, 20);
    createPlatform(100, 0, 20, 400);
    createPlatform(1200, 300, 200, 10);
    createPlatform(1000, 200, 300, 10);
    createPlatform(500, 200, 50, 10);
    createPlatform(100, 300, 100, 10);
   createPlatform(0, 650, 300, 150);
   createPlatform(1250, 680, 100, 100);
    // TODO 3 - Create Collectables
    createCollectable("database" ,1300,650, 0, 0);
    createCollectable("database", 1050, 150, 0, 0);
    createCollectable("database", 130, 250, 0, 0);

    
    // TODO 4 - Create Cannons
    createCannon("bottom", 800, 500);
    createCannon("top", 1200, 700);
    createCannon("bottom", 300, 600);
    createCannon("right", 770, 0);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
