# flying-points

Add/remove flying points to canvas

Using [Konva](http://konvajs.github.io/)



## Install 

> bower install flying-points [--save]



## Demo

![Demo](https://raw.githubusercontent.com/antirek/flying-points/master/images/demo.png)

See live: http://antirek.github.io/flying-points




## Using

`````html

<script src="bower_components/konva/konva.min.js"></script>
<script src="flying-points.js"></script>

<div id="container"></div>

<script>
    var width = 600; //window.innerWidth;
    var height = 300; window.innerHeight;
    
    var field = new Field('container', width, height);

    var point1 = field.add(new Point(50, 50, 5, -5, 'red'));
    var point2 = field.add(new Point(50, 50, 11, 10, 'green'));
    var point3 = field.add(new Point(250, 250, 21, -10, 'blue'));
    
    setTimeout(function () {
        field.remove(point1);
    }, 15000);
</script>


`````
