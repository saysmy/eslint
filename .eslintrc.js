module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        // 使用javascript standard style, 覆盖前面的规则 https://standardjs.com/rules-zhcn.html#javascript-standard-style
        "standard"
    ],
    "parserOptions": {
        "sourceType": "module",
        "parser": "babel-eslint"
    },
    "rules": {
        "import/no-unresolved": [2, {commonjs: true, amd: true}],
        "import/namespace": 2,
        "import/default": 2,
        "import/export": 2,
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "off"
        ],
        // "semi": [
        //     2, "always"
        // ],
        "no-console": [
            "off"
        ],
        //new实例可以不赋值给变量，new Vue()
        "no-new": ["off"],
        // 是否禁止无用的表达式
        "allowShortCircuit": true, 
        "allowTernary": true,
        // 取消禁止扩展原生对象
        "no-extend-native": 0
    },
    "settings": {
        // 使用webpack中配置的resolve路径
        "import/resolver": "webpack"
    },
};