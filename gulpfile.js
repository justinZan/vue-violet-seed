const gulp = require('gulp');
const merge = require('gulp-merge-json'); //合并json
const plumber = require('gulp-plumber'); //异常处理
const sonar = require('gulp-sonar');
// 皮肤打包使用
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const minifyCss = require('gulp-minify-css');
const path = require('path');
const fs = require('fs');
const async = require('async');
const minimist = require('minimist');

//angular国际化词条目录n
const i18nPath = './src/i18n/';

//组件词条目录
const comPath = './src/';

// 皮肤文件目录
const themesPath = './src/themes';

// 合并词条
gulp.task('merge-i18n', function() {
  gulp
    .src([comPath + '**/*zh-CN.json'])
    .pipe(plumber())
    .pipe(merge({ fileName: 'zh-CN.json' }))
    .pipe(gulp.dest(i18nPath));
});

// 皮肤打包路径
const skinUrl = themesPath + '/**/*.scss';

/* skin打包开始 */
gulp.task('buildSkin', ['moveIcons'], function() {
  // 从element-theme-chalk中scss获取
  const config = {
    themePath: 'node_modules/element-theme-chalk',
    cssFiles: '*',
    varPath: './src/common/var.scss'
  };
  // 定义需要生成的文件 新增一个文件名需要在此处添加对应的文件名
  const array = [{ path: 'white' }, { path: 'black' }];
  const functionArray = [];
  for (let i = 0; i < array.length; i++) {
    const fspath = array[i].path;
    // 重写var.scss
    functionArray.push(function(cb) {
      const varsPath = path.resolve(config.themePath, config.varPath);
      fs.writeFileSync(varsPath, fs.readFileSync(`${themesPath}/${fspath}/variables.scss`), 'utf-8');
      console.log(`${fspath} var.scss have changed`);
      cb(null, i);
    });
    // 编译打包并合并
    functionArray.push(function(cb) {
      gulp
        .src([path.resolve(config.themePath, './src/' + config.cssFiles + '.scss'), `${themesPath}/${fspath}/*.scss`])
        .pipe(sass.sync())
        .pipe(concat('themes.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest(`./public/themes/${fspath}`))
        .on('end', () => {
          console.log(`${fspath} themes.css created end`);
          cb(null, i);
        });
    });
    // 将fonts打包进
    functionArray.push(function(cb) {
      gulp
        .src([path.resolve(config.themePath, './src/fonts/**/*')])
        .pipe(gulp.dest(`./public/themes/${fspath}/fonts`))
        .on('end', () => {
          console.log(`${fspath} fonts  created end`);
          cb(null, i);
        });
    });
  }
  async.series([...functionArray], (err, values) => {
    console.log('skin build end');
  });
});
// 移动themes的icons文件
gulp.task('moveIcons', function() {
  gulp
    .src(`./${themesPath}/icons/**/*`)
    .pipe(gulp.dest('./public/themes/icons'))
    .on('end', () => {
      console.log(`icons have moved`);
    });
});
// 创建新的变量文件 gulp createThemes --env xxx
gulp.task('createThemes', function() {
  const knownOptions = {
    string: 'env',
    default: { env: process.env.NODE_ENV || 'production' }
  };
  const options = minimist(process.argv.slice(2), knownOptions);
  const createPath = options.env;
  const varsPath = path.resolve('node_modules/element-theme-chalk', './src/common/var.scss');
  if (/^[a-z]+$/.test(createPath)) {
    fs.mkdir(`./${themesPath}/${createPath}`, err => {
      if (err) {
        return false;
      }
    });
    fs.writeFileSync(`./${themesPath}/${createPath}/variables.scss`, fs.readFileSync(varsPath), 'utf-8');
    console.log(`new themes scss have created`);
  } else {
    console.log(`只能输入小写`);
  }
});
/* skin打包结束 */

gulp.task('sonar', () => {
  const option = {
    sonar: {
      host: {
        url: 'http://172.18.24.25:9000'
      },
      login: 'devappuser',
      password: 'devapp',
      projectKey: 'violet-seed',
      projectName: 'violet-seed',
      projectVersion: '1.0.0',
      sources: 'src',
      // test: 'tests',
      language: 'ts',
      sourceEncoding: 'UTF-8',
      ts: {
        tslintpath: 'node_modules/tslint/bin/tslint',
        tslintconfigpath: 'tslint.json',
        lcov: {
          reportpath: 'coverage/lcov.info'
        }
      },
      exec: {
        maxBuffer: 1024 * 1024
      }
    }
  };

  return gulp.src('thisFileDoesNotExist.js', { read: false }).pipe(sonar(option));
});
