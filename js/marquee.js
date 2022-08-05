/**
 * MARQUEE 3000 MARQUEE 3000 MARQUEE 3000 MARQUEE 3000 MARQUEE 3000
 * http://github.com/ezekielaquino/marquee3000
 * Marquees for the new millennium v1.0
 * MIT License
 */
;
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.Marquee3k = factory();
    }
}(this, function () {
    'use strict';

    let animationId = 0;

    class Marquee3k {
        constructor(element, options) {

            if (element.children.length === 0) {
                throw new Error("Encountered a marquee element without children, please supply a wrapper for your content");
            }

            this.element = element;
            this.selector = options.selector;
            this.speed = element.dataset.speed || 0.25;
            this.pausable = element.dataset.pausable === 'true' ? true : false;
            this.reverse = element.dataset.reverse === 'true' ? true : false;
            this.paused = false;
            this.parent = element.parentElement;
            this.parentProps = this.parent.getBoundingClientRect();
            this.content = element.children[0];
            this.innerContent = this.content.innerHTML;
            this.wrapStyles = '';
            this.offset = 0;

            this._setupWrapper();
            this._setupContent();
            this._setupEvents();

            this.wrapper.appendChild(this.content);
            this.element.appendChild(this.wrapper);
        }

        _setupWrapper() {
            this.wrapper = document.createElement('div');
            this.wrapper.classList.add('marquee3k__wrapper');
            this.wrapper.style.whiteSpace = 'nowrap';
        }

        _setupContent() {
            this.content.classList.add(`${this.selector}__copy`);
            this.content.style.display = 'inline-block';
            this.contentWidth = this.content.offsetWidth;

            this.requiredReps = this.contentWidth > this.parentProps.width ? 2 : Math.ceil((this.parentProps.width - this.contentWidth) / this.contentWidth) + 1;

            for (let i = 0; i < this.requiredReps; i++) {
                this._createClone();
            }

            if (this.reverse) {
                this.offset = this.contentWidth * -1;
            }

            this.element.classList.add('is-init');
        }

        _setupEvents() {
            this.element.addEventListener('mouseenter', () => {
                if (this.pausable) this.paused = true;
            });

            this.element.addEventListener('mouseleave', () => {
                if (this.pausable) this.paused = false;
            });
        }

        _createClone() {
            const clone = this.content.cloneNode(true);
            clone.style.display = 'inline-block';
            clone.classList.add(`${this.selector}__copy`);
            this.wrapper.appendChild(clone);
        }

        animate() {
            if (!this.paused) {
                const isScrolled = this.reverse ? this.offset < 0 : this.offset > this.contentWidth * -1;
                const direction = this.reverse ? -1 : 1;
                const reset = this.reverse ? this.contentWidth * -1 : 0;

                if (isScrolled) this.offset -= this.speed * direction;
                else this.offset = reset;

                this.wrapper.style.whiteSpace = 'nowrap';
                this.wrapper.style.transform = `translate(${this.offset}px, 0) translateZ(0)`;
            }
        }

        _refresh() {
            this.contentWidth = this.content.offsetWidth;
        }

        repopulate(difference, isLarger) {
            this.contentWidth = this.content.offsetWidth;

            if (isLarger) {
                const amount = Math.ceil(difference / this.contentWidth) + 1;

                for (let i = 0; i < amount; i++) {
                    this._createClone();
                }
            }
        }

        static refresh(index) {
            MARQUEES[index]._refresh();
        }

        static pause(index) {
            MARQUEES[index].paused = true;
        }

        static play(index) {
            MARQUEES[index].paused = false;
        }

        static toggle(index) {
            MARQUEES[index].paused = !MARQUEES[index].paused;
        }

        static refreshAll() {
            for (let i = 0; i < MARQUEES.length; i++) {
                MARQUEES[i]._refresh();
            }
        }

        static pauseAll() {
            for (let i = 0; i < MARQUEES.length; i++) {
                MARQUEES[i].paused = true;
            }
        }

        static playAll() {
            for (let i = 0; i < MARQUEES.length; i++) {
                MARQUEES[i].paused = false;
            }
        }

        static toggleAll() {
            for (let i = 0; i < MARQUEES.length; i++) {
                MARQUEES[i].paused = !MARQUEES[i].paused;
            }
        }

        static init(options = {
            selector: 'marquee3k'
        }) {
            if (animationId) window.cancelAnimationFrame(animationId);

            window.MARQUEES = [];
            const marquees = Array.from(document.querySelectorAll(`.${options.selector}`));
            let previousWidth = window.innerWidth;
            let timer;

            for (let i = 0; i < marquees.length; i++) {
                const marquee = marquees[i];
                const instance = new Marquee3k(marquee, options);
                MARQUEES.push(instance);
            }

            animate();

            function animate() {
                for (let i = 0; i < MARQUEES.length; i++) {
                    MARQUEES[i].animate();
                }
                animationId = window.requestAnimationFrame(animate);
            }

            window.addEventListener('resize', () => {
                clearTimeout(timer);

                timer = setTimeout(() => {
                    const isLarger = previousWidth < window.innerWidth;
                    const difference = window.innerWidth - previousWidth;

                    for (let i = 0; i < MARQUEES.length; i++) {
                        MARQUEES[i].repopulate(difference, isLarger);
                    }

                    previousWidth = this.innerWidth;
                }, 250);
            });
        }
    }
    return Marquee3k;
}));
Marquee3k.init()


//linking marquee with respective hover triggers
Marquee3k.pauseAll(), $(".a0").mouseenter(function () {
    for (Marquee3k.play(0), i = 0; 23 >= i; i++)
        if (0 != i)
            for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0.65vw)"
}), $(".a0").mouseleave(function () {
    for (Marquee3k.pause(0), i = 0; 23 >= i; i++)
        for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0vw)"
}), $(".a1").mouseenter(function () {
    for (Marquee3k.play(1), i = 0; 23 >= i; i++)
        if (1 != i)
            for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0.65vw)"
}), $(".a1").mouseleave(function () {
    for (Marquee3k.pause(1), i = 0; 23 >= i; i++)
        for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0vw)"
}), $(".a2").mouseenter(function () {
    for (Marquee3k.play(2), i = 0; 23 >= i; i++)
        if (2 != i)
            for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0.65vw)"
}), $(".a2").mouseleave(function () {
    for (Marquee3k.pause(2), i = 0; 23 >= i; i++)
        for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0vw)"
}), $(".a3").mouseenter(function () {
    for (Marquee3k.play(3), i = 0; 23 >= i; i++)
        if (3 != i)
            for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0.65vw)"
}), $(".a3").mouseleave(function () {
    for (Marquee3k.pause(3), i = 0; 23 >= i; i++)
        for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0vw)"
}), $(".a4").mouseenter(function () {
    for (Marquee3k.play(4), i = 0; 23 >= i; i++)
        if (4 != i)
            for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0.65vw)"
}), $(".a4").mouseleave(function () {
    for (Marquee3k.pause(4), i = 0; 23 >= i; i++)
        for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0vw)"
}), $(".a5").mouseenter(function () {
    for (Marquee3k.play(5), i = 0; 23 >= i; i++)
        if (5 != i)
            for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0.65vw)"
}), $(".a5").mouseleave(function () {
    for (Marquee3k.pause(5), i = 0; 23 >= i; i++)
        for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0vw)"
}), $(".a6").mouseenter(function () {
    for (Marquee3k.play(6), i = 0; 23 >= i; i++)
        if (6 != i)
            for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0.65vw)"
}), $(".a6").mouseleave(function () {
    for (Marquee3k.pause(6), i = 0; 23 >= i; i++)
        for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0vw)"
}), $(".a7").mouseenter(function () {
    for (Marquee3k.play(7), i = 0; 23 >= i; i++)
        if (7 != i)
            for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0.65vw)"
}), $(".a7").mouseleave(function () {
    for (Marquee3k.pause(7), i = 0; 23 >= i; i++)
        for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0vw)"
}), $(".a8").mouseenter(function () {
    for (Marquee3k.play(8), i = 0; 23 >= i; i++)
        if (8 != i)
            for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0.65vw)"
}), $(".a8").mouseleave(function () {
    for (Marquee3k.pause(8), i = 0; 23 >= i; i++)
        for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0vw)"
}), $(".a9").mouseenter(function () {
    for (Marquee3k.play(9), i = 0; 23 >= i; i++)
        if (9 != i)
            for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0.65vw)"
}), $(".a9").mouseleave(function () {
    for (Marquee3k.pause(9), i = 0; 23 >= i; i++)
        for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0vw)"
}), $(".a10").mouseenter(function () {
    for (Marquee3k.play(10), i = 0; 23 >= i; i++)
        if (10 != i)
            for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0.65vw)"
}), $(".a10").mouseleave(function () {
    for (Marquee3k.pause(10), i = 0; 23 >= i; i++)
        for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0vw)"
}), $(".a11").mouseenter(function () {
    for (Marquee3k.play(11), i = 0; 23 >= i; i++)
        if (11 != i)
            for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0.65vw)"
}), $(".a11").mouseleave(function () {
    for (Marquee3k.pause(11), i = 0; 23 >= i; i++)
        for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0vw)"
}), $(".a12").mouseenter(function () {
    for (Marquee3k.play(12), i = 0; 23 >= i; i++)
        if (12 != i)
            for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0.65vw)"
}), $(".a12").mouseleave(function () {
    for (Marquee3k.pause(12), i = 0; 23 >= i; i++)
        for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0vw)"
}), $(".a13").mouseenter(function () {
    for (Marquee3k.play(13), i = 0; 23 >= i; i++)
        if (13 != i)
            for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0.65vw)"
}), $(".a13").mouseleave(function () {
    for (Marquee3k.pause(13), i = 0; 23 >= i; i++)
        for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0vw)"
}), $(".a14").mouseenter(function () {
    for (Marquee3k.play(14), i = 0; 23 >= i; i++)
        if (14 != i)
            for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0.65vw)"
}), $(".a14").mouseleave(function () {
    for (Marquee3k.pause(14), i = 0; 23 >= i; i++)
        for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0vw)"
}), $(".a15").mouseenter(function () {
    for (Marquee3k.play(15), i = 0; 23 >= i; i++)
        if (15 != i)
            for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0.65vw)"
}), $(".a15").mouseleave(function () {
    for (Marquee3k.pause(15), i = 0; 23 >= i; i++)
        for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0vw)"
}), $(".a16").mouseenter(function () {
    for (Marquee3k.play(16), i = 0; 23 >= i; i++)
        if (16 != i)
            for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0.65vw)"
}), $(".a16").mouseleave(function () {
    for (Marquee3k.pause(16), i = 0; 23 >= i; i++)
        for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0vw)"
}), $(".a17").mouseenter(function () {
    for (Marquee3k.play(17), i = 0; 23 >= i; i++)
        if (17 != i)
            for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0.65vw)"
}), $(".a17").mouseleave(function () {
    for (Marquee3k.pause(17), i = 0; 23 >= i; i++)
        for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0vw)"
}), $(".a18").mouseenter(function () {
    for (Marquee3k.play(18), i = 0; 23 >= i; i++)
        if (18 != i)
            for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0.65vw)"
}), $(".a18").mouseleave(function () {
    for (Marquee3k.pause(18), i = 0; 23 >= i; i++)
        for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0vw)"
}), $(".a19").mouseenter(function () {
    for (Marquee3k.play(19), i = 0; 23 >= i; i++)
        if (19 != i)
            for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0.65vw)"
}), $(".a19").mouseleave(function () {
    for (Marquee3k.pause(19), i = 0; 23 >= i; i++)
        for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0vw)"
}), $(".a20").mouseenter(function () {
    for (Marquee3k.play(20), i = 0; 23 >= i; i++)
        if (20 != i)
            for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0.65vw)"
}), $(".a20").mouseleave(function () {
    for (Marquee3k.pause(20), i = 0; 23 >= i; i++)
        for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0vw)"
}), $(".a21").mouseenter(function () {
    for (Marquee3k.play(21), i = 0; 23 >= i; i++)
        if (21 != i)
            for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0.65vw)"
}), $(".a21").mouseleave(function () {
    for (Marquee3k.pause(21), i = 0; 23 >= i; i++)
        for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0vw)"
}), $(".a22").mouseenter(function () {
    for (Marquee3k.play(22), i = 0; 23 >= i; i++)
        if (22 != i)
            for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0.65vw)"
}), $(".a22").mouseleave(function () {
    for (Marquee3k.pause(22), i = 0; 23 >= i; i++)
        for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0vw)"
}), $(".a23").mouseenter(function () {
    for (Marquee3k.play(23), i = 0; 23 >= i; i++)
        if (23 != i)
            for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0.65vw)"
}), $(".a23").mouseleave(function () {
    for (Marquee3k.pause(23), i = 0; 23 >= i; i++)
        for (l = document.querySelectorAll(".a" + i).length, j = 0; j < l; j++) document.querySelectorAll(".a" + i)[j].style.filter = "blur(0vw)"
});