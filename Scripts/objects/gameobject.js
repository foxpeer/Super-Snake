var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var GameObject = /** @class */ (function (_super) {
        __extends(GameObject, _super);
        // Constructor
        function GameObject(assetManager, imageString) {
            var _this = _super.call(this, assetManager.getResult(imageString)) || this;
            _this.name = imageString;
            _this.Init();
            return _this;
        }
        GameObject.prototype.Init = function () {
            // Initialize all the properties of my object
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfW = this.width * 0.5;
            this.halfH = this.height * 0.5;
            // Registration points
            this.regX = this.halfW;
            this.regY = this.halfH;
        };
        GameObject.prototype.Start = function () { };
        GameObject.prototype.Update = function () { };
        GameObject.prototype.Reset = function () { };
        GameObject.prototype.Move = function () { };
        GameObject.prototype.CheckBound = function () { };
        GameObject.prototype.getGridPosition = function (squareX, squareY) {
            // TODO: These variables that describe the grid position should probably be somewhere else
            // Size of the grid in pixels
            var gridWidth = 945;
            var gridHeight = 715;
            // Top-left position of the grid on-screen
            var gridTopLeftX = 40;
            var gridTopLeftY = 0;
            // Number of squares in the grid
            var numSquareRows = 30;
            var numSquareColumns = 30;
            // Calculate middle point of square for posX and posY
            var widthOfSquare = gridWidth / numSquareColumns;
            var heightOfSquare = gridHeight / numSquareRows;
            var x = (widthOfSquare * (squareX - 1)) + (widthOfSquare / 2) + gridTopLeftX;
            var y = (heightOfSquare * (squareY - 1)) + (heightOfSquare / 2) + gridTopLeftY;
            var coordinates = new Array(x, y);
            return coordinates;
        };
        return GameObject;
    }(createjs.Bitmap));
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map