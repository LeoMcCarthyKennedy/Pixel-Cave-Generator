class Cave {

    constructor() {
        this.map = [];
    }

    generate(size, fill, smoothness, water) {
        this.map = [];

        for (var y = 0; y < size; y++) {
            this.map[y] = [];
            for (var x = 0; x < size; x++) {
                if (x == 0 || y == 0) {
                    this.map[y][x] = 1;
                } else if (x == size - 1 || y == size - 1) {
                    this.map[y][x] = 1;
                } else if (Math.random() >= fill) {
                    this.map[y][x] = 1;
                } else {
                    this.map[y][x] = 0;
                }
            }
        }

        for (var i = 0; i < smoothness; i++) {
            for (var y = 1; y < size - 1; y++) {
                for (var x = 1; x < size - 1; x++) {
                    var count = 0;

                    for (var a = -1; a < 2; a++) {
                        for (var b = -1; b < 2; b++) {
                            if (this.map[y + a][x + b] == 1) {
                                count++;
                            }
                        }
                    }

                    if (count > 4) {
                        this.map[y][x] = 1;
                    } else {
                        this.map[y][x] = 0;
                    }
                }
            }
        }

        this.update();

        return this.map;
    }

    update() {
        for (var y = 0; y < 128; y++) {
            for (var x = 0; x < 128; x++) {
                switch (this.map[y][x]) {
                    case 0:
                        ctx.fillStyle = "black";
                        break;
                    case 1:
                        ctx.fillStyle = "brown";
                        break;
                }
                
                ctx.fillRect(x * 10, y * 10, 10, 10);
            }
        }
    }
}