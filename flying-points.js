var Point = function (x, y, vx, vy, color) {
    var point = {};
    point.layer = null;

    point.hexagon = new Konva.Circle({
        x: x,
        y: y,                
        radius: 10,
        fill: color
    });

    point.initAnim = function (layer, width, height) {            
        point.anim = new Konva.Animation(function (frame) {
            var x = point.hexagon.x();
            var y = point.hexagon.y();
            if (x > width || x < 0) {
                vx = -vx
            }
            if (y > height || y < 0) {
                vy = -vy
            }
            point.hexagon.setX(x + vx);
            point.hexagon.setY(y + vy);
        }, layer);
    };

    return point;
};

var Field = function (container, width, height) {
    var stage = new Konva.Stage({
        container: container,
        width: width,
        height: height
    });

    var layer = new Konva.Layer();
    stage.add(layer);        

    var add = function (point) {
        layer.add(point.hexagon);
        point.initAnim(layer, width, height);
        point.anim.start();
        return point;
    };

    var remove = function (point) {
        point.anim.stop();
        point.hexagon.remove();
    }

    return {
        add: add,
        remove: remove
    };
};