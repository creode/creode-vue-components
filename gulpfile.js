const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
    return gulp
        .src("./assets/scss/**.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./assets/css"));
}

exports.buildStyles = buildStyles;
// exports.watch = function () {
//     gulp.watch("./sass/**/*.scss", ["sass"]);
// };

gulp.task("watch", function () {
    gulp.watch("./assets/scss/**.scss", gulp.series(buildStyles));
});
