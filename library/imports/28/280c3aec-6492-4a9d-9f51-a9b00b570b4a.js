"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'HelloWorld');
// Script/HelloWorld.js

"use strict";

var NumberButton = cc.Class({
    extends: cc.Node,

    properties: {
        index: 0,
        node: cc.Node
    },

    init: function init(prefab, idx) {
        this.index = idx;
        var newNode = cc.instantiate(prefab);
        newNode.x = 0;
        newNode.y = 0;
        this.addChild(newNode);

        this.width = newNode.width;
        this.height = newNode.height;
        this.node = newNode;
        this.setNumber(0);
    },

    setNumber: function setNumber(num) {
        var labelNode = this.node.getChildByName("label");
        var labelComp = labelNode.getComponent(cc.Label);
        labelComp.string = num;
    },

    setListener: function setListener(func, self) {
        this.node.on('click', func, self);
    }
});

cc.Class({
    extends: cc.Component,

    properties: {
        nNanDu: 6,
        nWidth: 5,
        nHeight: 5,
        nodeArr: {
            default: [],
            type: cc.Node
        },
        numArr: {
            default: [],
            type: cc.Integer
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        // 加载 Prefab
        var self = this;
        cc.loader.loadRes("prefab/btn", function (err, prefab) {
            for (var i = 0; i < self.nWidth; ++i) {
                for (var j = 0; j < self.nHeight; ++j) {
                    var newNode = new NumberButton();
                    cc.director.getScene().addChild(newNode);
                    self.nodeArr.push(newNode);

                    newNode.init(prefab, self.nodeArr.length);
                    newNode.setPosition(45 + i * 85, 45 + j * 85);
                    newNode.setListener(self.onClickButton, self);

                    self.resetNumber();
                }
            }
        });
    },

    // called every frame
    update: function update(dt) {},

    resetNumber: function resetNumber() {
        for (var i = 0; i < this.nodeArr.length; ++i) {
            var num = Math.floor(Math.random() * this.nNanDu + 1);
            this.numArr.push(num);

            var node = this.nodeArr[i];
            node.setNumber(num);
        }
    },

    onClickStart: function onClickStart() {
        this.resetNumber();
    },

    onClickButton: function onClickButton(event) {
        var btn = event.target;
        cc.log(btn.index);
    }
});

cc._RF.pop();