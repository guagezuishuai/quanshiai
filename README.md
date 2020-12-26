# world-love

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

| businessType   | businessTwoType  | 类型 | 注释|
| :----:| :----: | :----: | :----: |
| 0 | 0 | int | 客户头像|
| 1 | 0 | int | 就诊记录的就诊原因 ；多张图片用排序字段区分 |
| 1 | 1 | int | 就诊记录的用药及处方；多张图片用排序字段区分 |
| 1 | 2 | int | 就诊记录的检查图片；多张图片用排序字段区分 |
| 1 | 3 | int | 就诊记录的病例原件图片；多张图片用排序字段区分 |
| 2 | 0 | int | 体检记录的体检原因 ；多张图片用排序字段区分 |
| 2 | 1 | int | 体检记录的体检报告；多张图片用排序字段区分 |