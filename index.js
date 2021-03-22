window.addEventListener('load', function() {
    var iword = document.getElementsByClassName('iword');
    var flag = 1;
    for (var i = 0; i < iword.length; i++) {
        var iword1 = iword[i];
        iword1.addEventListener('touchend', function() {
            flag++;
            var flag1 = flag % 2;
            if (flag1 !== 0) {
                this.style.transform = 'rotateX(360deg)';
                this.style.transition = 'all 1s';
                flag++;
            } else {
                this.style.transform = '';
                this.style.transition = '';
                flag++;
            }
        })
    }
    for (var i = 0; i < iword.length; i++) {
        var iword1 = iword[i];
        iword1.addEventListener('click', function() {
            var flag1 = flag % 2;
            if (flag1 !== 0) {
                this.style.transform = 'rotateX(360deg)';
                this.style.transition = 'all 1s';
                flag++;
            } else {
                this.style.transform = '';
                this.style.transition = '';
                flag++;
            }
        })
    }
    var one = document.getElementsByClassName('one');
    for (var i = 0; i <= 1; i++) {
        one[i].addEventListener('touchend', function() {
            this.style.animationName = 'deng';
            this.style.animationDuration = '2s';
            this.style.animationFillMode = 'forwards';
        })
    }
    for (var i = 0; i <= 1; i++) {
        one[i].addEventListener('click', function() {
            this.style.animationName = 'deng';
            this.style.animationDuration = '2s';
            this.style.animationFillMode = 'forwards';
        })
    }
    var fuzi = document.getElementsByClassName('fu');
    var tu = document.getElementsByClassName('tu');
    fuzi[0].addEventListener('touchend', function() {
        this.style.transform = 'rotateX(180deg)';
        this.style.transition = 'all 1.5s';
        window.setTimeout(function() {
            tu[0].style.display = 'block';
            tu[0].style.animation = 'tu 24s steps(12) infinite';
            tu[0].style.animationDelay = '1s';
        }, 1500);
    })
    fuzi[0].addEventListener('click', function() {
        this.style.transform = 'rotateX(180deg)';
        this.style.transition = 'all 1.5s';
        window.setTimeout(function() {
            tu[0].style.display = 'block';
            tu[0].style.animation = 'tu 24s steps(12) infinite';
            tu[0].style.animationDelay = '1s';
        }, 1500);
    })
    var xqian = document.getElementsByClassName('xqian');
    var xxqian = xqian[0].querySelectorAll('div');
    xqian[0].addEventListener('touchend', function() {
        for (var i = 0; i < 6; i++) {
            xxqian[i].style.display = 'block';
        }
        this.style.animation = 'rotate 5s linear 0.7s infinite';

    })
    xqian[0].addEventListener('click', function() {
        for (var i = 0; i < 6; i++) {
            xxqian[i].style.display = 'block';
        }
        this.style.animation = 'rotate 5s linear 0.7s infinite';

    })

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var dian = document.getElementsByClassName('dian');
    var chu = document.getElementsByClassName('chu');
    var xchu = chu[0].querySelectorAll('div');
    var mask = document.getElementsByClassName('mask');
    var zhuan = document.getElementsByClassName('zhuan');
    var guan = document.getElementsByClassName('guan');
    var times = 1;
    var nums = null;
    dian[0].addEventListener('touchend', function() {
        if (times <= 1) {
            times++;
            chu[0].style.transform = '';
            chu[0].style.transition = '';
            mask[0].style.display = 'block';
            nums = getRandom(0, 12);
            window.setTimeout(function() {
                xchu[nums].style.display = 'block';
                zhuan[0].style.display = 'none';
            }, 2000);
            window.setTimeout(function() {
                chu[0].style.transform = 'rotateX(360deg)';
                chu[0].style.transition = 'all 3s';
            }, 1000);
        } else {
            dian[0].style.animationPlayState = 'paused';
        }

    })
    dian[0].addEventListener('click', function() {
        if (times <= 1) {
            times++;
            chu[0].style.transform = '';
            chu[0].style.transition = '';
            mask[0].style.display = 'block';
            nums = getRandom(0, 12);
            window.setTimeout(function() {
                xchu[nums].style.display = 'block';
                zhuan[0].style.display = 'none';
            }, 2000);
            window.setTimeout(function() {
                chu[0].style.transform = 'rotateX(360deg)';
                chu[0].style.transition = 'all 3s';
            }, 1000);
        } else {
            dian[0].style.animationPlayState = 'paused';
        }

    })
    guan[0].addEventListener('touchend', function() {
        mask[0].style.display = 'none';
    })
    guan[0].addEventListener('click', function() {
        mask[0].style.display = 'none';
    })

})