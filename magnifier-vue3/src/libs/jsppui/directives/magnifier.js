import { getStyle } from '../utils/tools'

export default {
    mounted(el) {
        const oImgWrap = el,
            oMagWrap = oImgWrap.querySelector('.mag-wrap'),
            oMagImg = oMagWrap.querySelector('.mag-img'),
            imgWidth = getStyle(oImgWrap, 'width'),
            imgHeight = getStyle(oImgWrap, 'height'),
            magWidth = getStyle(oMagWrap, 'width'),
            magHeight = getStyle(oMagWrap, 'height'),
            imgX = oImgWrap.offsetLeft,
            imgY = oImgWrap.offsetTop;
        // console.log(imgWidth, imgHeight, magWidth, magHeight);
        // console.log(imgX, imgY);

        const init = () => {
            bindEvent();
        }

        function bindEvent() {
            oImgWrap.addEventListener('mouseover', (el) => {
                oMagWrap.className += ' show'
                showMag(getXY(el).x, getXY(el).y);
                document.addEventListener('mousemove', handleMousemove, false);
            }, false);

            oImgWrap.addEventListener('mouseout', handleMouseout, false)
        }

        function handleMousemove(el) {
            const { x, y, mouseX, mouseY } = getXY(el)
            showMag(x, y, mouseX, mouseY);
        }

        function handleMouseout() {
            oMagWrap.className = 'mag-wrap'
            document.removeEventListener('mousemove', handleMousemove, false)
        }

        function showMag(x, y, mouseX, mouseY) {
            oMagWrap.style.left = x + 'px';
            oMagWrap.style.top = y + 'px';
            oMagImg.style.left = -x + 'px';
            oMagImg.style.top = -y + 'px';

            if (mouseX < 0 || mouseY < 0 || mouseX > imgWidth || mouseY > imgHeight) {
                oMagWrap.className = 'mag-wrap'
                    //取消之后解绑
                document.removeEventListener('mousemove', handleMousemove, false)
            }
        }

        function getXY(el) {
            return {
                x: el.pageX - imgX - magWidth / 2,
                y: el.pageY - imgY - magHeight / 2,
                mouseX: el.pageX - imgX,
                mouseY: el.pageY - imgY
            }
        }
        init();
    },
}