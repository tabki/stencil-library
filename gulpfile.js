var gulp = require("gulp");
var sass = require("gulp-sass");
var path = require("path");
var shell = require("gulp-shell");
var exec = require("child_process").exec;
var spawn = require("child_process").spawn;
var del = require("del");
var rename = require("gulp-rename");
var concat = require("gulp-concat");
var uglifycss = require("gulp-uglifycss");
var fse = require("fs-extra");

/***
 *     ██████╗ ██████╗ ███╗   ██╗███████╗██╗ ██████╗
 *    ██╔════╝██╔═══██╗████╗  ██║██╔════╝██║██╔════╝
 *    ██║     ██║   ██║██╔██╗ ██║█████╗  ██║██║  ███╗
 *    ██║     ██║   ██║██║╚██╗██║██╔══╝  ██║██║   ██║
 *    ╚██████╗╚██████╔╝██║ ╚████║██║     ██║╚██████╔╝
 *     ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝     ╚═╝ ╚═════╝
 *
 */

/*
   -----------------------------------------------------------------------------
   STENCIL
   -----------------------------------------------------------------------------
 */

const makeAbsPath = relPath => path.join(__dirname, relPath);
const STENCIL_DIR = "packages/craft-ui";
const STENCIL_SRC_DIR = makeAbsPath(`/${STENCIL_DIR}/src`);
const STENCIL_COMPONENTS_DIR = path.join(STENCIL_SRC_DIR, "components");

// stencil dev
const STENCIL_BUILD_FOLDER_NAME = "build";
const STENCIL_BUILD_DIR = makeAbsPath(
  `/${STENCIL_DIR}/${STENCIL_BUILD_FOLDER_NAME}`
);
// stencil prod
const STENCIL_DIST_FOLDER_NAME = "dist";
const STENCIL_DIST_DIR = `./${STENCIL_DIR}/${STENCIL_DIST_FOLDER_NAME}`;

/*
  ------------------------------------------------------------------------------
  SASS
  ------------------------------------------------------------------------------
 */

const SASS_LIB_DIR = `${STENCIL_DIR}/sass`;
const TRUSTYLE_SASS_SRC = `${SASS_LIB_DIR}/trustyle.scss`;

/*
  ------------------------------------------------------------------------------
  DOCS
  ------------------------------------------------------------------------------
 */

const GH_PAGES_DIR = "./docs";
const DOCS_DIR = "./packages/craft-ui-docs";
const DOCS_STORIES_DIR = `./${DOCS_DIR}/stories`;
const DOCS_ASSETS_DIR = `./${DOCS_DIR}/assets`;

// where storybook build output will go
const DOCS_STATIC_DIR = `${DOCS_DIR}/www`;
// place where stencil components dist gets copied to
const DOCS_STATIC_DIST_DIR = `${DOCS_STATIC_DIR}/dist`;

/*
 *     $$$$$$\    $$\                                   $$\ $$\
 *    $$  __$$\   $$ |                                  \__|$$ |
 *    $$ /  \__|$$$$$$\    $$$$$$\  $$$$$$$\   $$$$$$$\ $$\ $$ |
 *    \$$$$$$\  \_$$  _|  $$  __$$\ $$  __$$\ $$  _____|$$ |$$ |
 *     \____$$\   $$ |    $$$$$$$$ |$$ |  $$ |$$ /      $$ |$$ |
 *    $$\   $$ |  $$ |$$\ $$   ____|$$ |  $$ |$$ |      $$ |$$ |
 *    \$$$$$$  |  \$$$$  |\$$$$$$$\ $$ |  $$ |\$$$$$$$\ $$ |$$ |
 *     \______/    \____/  \_______|\__|  \__| \_______|\__|\__|
 *
 *
 *
 */

/*
  ------------------------------------------------------------------------------
  UTILS
  ------------------------------------------------------------------------------
*/

function setStencilConfig(env) {
  return gulp
    .src([
      `${STENCIL_DIR}/config/stencil.config.common.js`,
      `${STENCIL_DIR}/config/stencil.config.${env}.js`
    ])
    .pipe(concat("stencil.config.js"))
    .pipe(gulp.dest(`${STENCIL_DIR}`));
}

/*
  ------------------------------------------------------------------------------
  DEV
  ------------------------------------------------------------------------------
*/

gulp.task(function setStencilConfigToDev(done) {
  setStencilConfig("dev");
  done();
});

gulp.task(function startStencilDevServer() {
  return spawn("npm", ["run", "dev"], {
    stdio: "inherit",
    cwd: STENCIL_DIR
  });
});

gulp.task(
  "devStencil",
  gulp.series("setStencilConfigToDev", "startStencilDevServer")
);

/*
  ------------------------------------------------------------------------------
  PUBLISH
  ------------------------------------------------------------------------------
*/

gulp.task(function setStencilConfigToProd(done) {
  setStencilConfig("prod");
  done();
});

// production build
// ONLY BUILDS STENCIL Components
// ASSUMES you have built css
gulp.task(function buildStencil() {
  return spawn("npm", ["run", "build"], {
    stdio: "inherit",
    cwd: STENCIL_DIR
  });
});

gulp.task(function testStencil() {
  return spawn("npm", ["run", "test"], {
    stdio: "inherit",
    cwd: STENCIL_DIR
  });
});

/*
 *     $$$$$$\
 *    $$  __$$\
 *    $$ /  \__| $$$$$$\   $$$$$$$\  $$$$$$$\
 *    \$$$$$$\   \____$$\ $$  _____|$$  _____|
 *     \____$$\  $$$$$$$ |\$$$$$$\  \$$$$$$\
 *    $$\   $$ |$$  __$$ | \____$$\  \____$$\
 *    \$$$$$$  |\$$$$$$$ |$$$$$$$  |$$$$$$$  |
 *     \______/  \_______|\_______/ \_______/
 *
 */

/*
  ------------------------------------------------------------------------------
  DEV / PUBLiSH
  ------------------------------------------------------------------------------
 */

function compileSass(src) {
  return gulp
    .src(src, {
      base: STENCIL_COMPONENTS_DIR
    })
    .pipe(
      sass({
        includePaths: [SASS_LIB_DIR, STENCIL_COMPONENTS_DIR]
      }).on("error", sass.logError)
    )
    .pipe(gulp.dest(STENCIL_COMPONENTS_DIR));
}

gulp.task(function compileAllSass(done) {
  compileSass(path.join(STENCIL_COMPONENTS_DIR, "**/*.scss"));
  done();
});

gulp.task(function watchSass(done) {
  var watcher = gulp.watch(path.join(STENCIL_COMPONENTS_DIR, "**/*.scss"));

  watcher.on("add", function(filepath) {
    compileSass(filepath);
    console.log("ADD Sass file: ", filepath);
  });

  watcher.on("change", function(filepath) {
    compileSass(filepath);
    console.log("UPDATE Sass file: ", filepath);
  });

  watcher.on("unlink", function(filepath) {
    del.sync(filepath);
    console.log("Delete Sass file", filepath);
  });
  done();
});

/*
  ------------------------------------------------------------------------------
  SASS Libary - copy sass library into dist so it can be referenced elsewhere
  ------------------------------------------------------------------------------
 */

gulp.task(function watchSassLib(done) {
  gulp.watch(
    path.join(SASS_LIB_DIR, "**/*.scss"),
    gulp.series("compileAllSass")
  );
  done();
});

gulp.task(function copySassToDist() {
  return gulp
    .src(`${SASS_LIB_DIR}/**/*.*`)
    .pipe(gulp.dest(`${STENCIL_DIST_DIR}/sass`));
});

/*
 *    $$$$$$$\
 *    $$  __$$\
 *    $$ |  $$ | $$$$$$\   $$$$$$$\   $$$$$$$\
 *    $$ |  $$ |$$  __$$\ $$  _____| $$  _____|
 *    $$ |  $$ |$$ /  $$ |$$ /       \$$$$$$\
 *    $$ |  $$ |$$ |  $$ |$$ |        \____$$\
 *    $$$$$$$  |\$$$$$$  |\$$$$$$$\  $$$$$$$  |
 *    \_______/  \______/  \_______| \_______/
 *
 *
 *
 */

/*
  ------------------------------------------------------------------------------
  DEV
  ------------------------------------------------------------------------------
*/

gulp.task(function devStorybook() {
  return spawn("npm", ["run", "storybook"], {
    stdio: "inherit",
    cwd: DOCS_DIR
  });
});

gulp.task(function linkStencilBuildToDocs() {
  return gulp.src(STENCIL_BUILD_DIR).pipe(gulp.symlink(DOCS_ASSETS_DIR));
});

gulp.task(function copyStencilStoriesToDocs() {
  return gulp
    .src(`${STENCIL_COMPONENTS_DIR}/**/*.js`, {
      base: STENCIL_COMPONENTS_DIR
    })
    .pipe(gulp.dest(DOCS_STORIES_DIR));
});

// UGLY but needed
// mirror changes to files based on watch events
// rather than copying entire dir on change
gulp.task(function syncStencilStoriesToDocs(done) {
  var watcher = gulp.watch(path.join(STENCIL_COMPONENTS_DIR, "**/*.js"));

  watcher.on("add", function(filepath) {
    copyStory(filepath);
    console.log("ADD Story: ", filepath);
  });

  watcher.on("change", function(filepath) {
    copyStory(filepath);
    console.log("UPDATE Story: ", filepath);
  });

  watcher.on("unlink", function(filepath) {
    deleteStory(filepath);
    console.log("Delete Story", filepath);
  });
  done();
});

function copyStory(filepath) {
  gulp
    .src(filepath, {
      base: STENCIL_COMPONENTS_DIR
    })
    .pipe(gulp.dest(DOCS_STORIES_DIR));
}

function deleteStory(filepath) {
  var filePathFromSrc = path.relative(
    path.resolve(STENCIL_COMPONENTS_DIR),
    filepath
  );
  var destFilePath = path.resolve(DOCS_STORIES_DIR, filePathFromSrc);
  del.sync(destFilePath);
}

gulp.task(function copyStencilAssetsToStaticDocs() {
  return gulp
    .src(`${STENCIL_DIST_DIR}/**/*.*`, {
      base: STENCIL_DIST_DIR
    })
    .pipe(gulp.dest(DOCS_STATIC_DIST_DIR));
});

/*
  ------------------------------------------------------------------------------
  PUBLISH
  ------------------------------------------------------------------------------
*/

// ONLY builds storybook, without assets
gulp.task(function buildStorybook() {
  return spawn("npm", ["run", "build-storybook"], {
    stdio: "inherit",
    cwd: DOCS_DIR
  });
});

// move compiled docs to /docs for gh-pages
gulp.task(function copyDocsToGhPages() {
  return gulp
    .src(`${DOCS_STATIC_DIR}/**/*.*`, {
      base: DOCS_STATIC_DIR
    })
    .pipe(gulp.dest(GH_PAGES_DIR));
});

/*
 *    ██████╗ ██╗   ██╗███╗   ██╗███╗   ██╗███████╗██████╗ ███████╗
 *    ██╔══██╗██║   ██║████╗  ██║████╗  ██║██╔════╝██╔══██╗██╔════╝
 *    ██████╔╝██║   ██║██╔██╗ ██║██╔██╗ ██║█████╗  ██████╔╝███████╗
 *    ██╔══██╗██║   ██║██║╚██╗██║██║╚██╗██║██╔══╝  ██╔══██╗╚════██║
 *    ██║  ██║╚██████╔╝██║ ╚████║██║ ╚████║███████╗██║  ██║███████║
 *    ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚══════╝
 *
 */

/*
  ------------------------------------------------------------------------------
  INIT
  ------------------------------------------------------------------------------
*/

gulp.task(function installLerna() {
  return spawn("npm", ["install", "-g", "lerna"], {
    stdio: "inherit"
  });
});

gulp.task(function lernaBootstrap() {
  return spawn("lerna", ["bootstrap"], {
    stdio: "inherit"
  });
});

gulp.task("init", gulp.series("installLerna", "lernaBootstrap"));

/*
  ------------------------------------------------------------------------------
  CLEAN
  ------------------------------------------------------------------------------
*/

gulp.task(function cleanCSS(done) {
  del.sync([
    `${STENCIL_COMPONENTS_DIR}/**/*.css`,
    `!${STENCIL_COMPONENTS_DIR}`
  ]);
  done();
});

/*
  house keeping - this is to ensure dist
  folder exists when symlink is being setup
  BEFORE stencil starts compiling
*/
gulp.task(function makeStencilBuildFolder(done) {
  fse.ensureDir(STENCIL_BUILD_DIR).then(() => done());
});

gulp.task(
  "clean",
  gulp.parallel(
    "cleanCSS",
    gulp.series(deleteAssetFolders, "makeStencilBuildFolder")
  )
);

function deleteAssetFolders(done) {
  return del(
    [
      STENCIL_BUILD_DIR,
      DOCS_ASSETS_DIR,
      DOCS_STORIES_DIR,
      DOCS_STATIC_DIST_DIR
    ],
    done
  );
}

/*
  ------------------------------------------------------------------------------
  DEV RUNNER
  ------------------------------------------------------------------------------
*/

gulp.task(
  "dev",
  gulp.series(
    "clean",
    "linkStencilBuildToDocs",
    "copyStencilStoriesToDocs",
    "compileAllSass",
    gulp.parallel(
      "devStorybook",
      "devStencil",
      "syncStencilStoriesToDocs",
      "watchSass",
      "watchSassLib"
    )
  ),
  function(done) {
    console.log("done");
  }
);

/*
  ------------------------------------------------------------------------------
  PUBLISH
  ------------------------------------------------------------------------------
*/

gulp.task(function lernaPublish() {
  return spawn("lerna", ["publish"], {
    stdio: "inherit"
  });
});

gulp.task(
  "publish",
  gulp.series(
    "clean",
    "compileAllSass",
    "setStencilConfigToProd",
    "testStencil",
    "buildStencil",
    "copyStencilStoriesToDocs",
    "buildStorybook",
    "copyStencilAssetsToStaticDocs",
    "copyDocsToGhPages",
    "copySassToDist",
    "lernaPublish"
  )
);
