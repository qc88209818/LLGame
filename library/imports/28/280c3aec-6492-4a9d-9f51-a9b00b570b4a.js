"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'HelloWorld');
// Script/HelloWorld.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {
        // 加载 Prefab
        cc.loader.loadRes("prefab/btn", function (err, prefab) {
            for (var i = 0; i < 6; ++i) {
                for (var j = 0; j < 4; ++j) {
                    var newNode = cc.instantiate(prefab);
                    newNode.x = 440 + i * 80;
                    newNode.y = 320 + j * 80;
                    cc.director.getScene().addChild(newNode);
                }
            }
        });
    },

    // called every frame
    update: function update(dt) {}
});

cc._RF.pop();