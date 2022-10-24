import { useEffect } from "react";
import './GlobalStyles.scss';
function GlobalStyles({ children }) {
    useEffect(() => {
        window.onscroll = function (e) {
            const active = [
                {
                    className: ".greeting",
                },
                {
                    className: ".like",
                },
                {
                    className: ".skill",
                },
                {
                    className: ".product",
                },
                {
                    className: ".contant",
                },
            ]
            const $ = document.querySelector.bind(document);
            const $$ = document.querySelectorAll.bind(document);
            const heightMobile = $(".menumobile").getBoundingClientRect().height;;
            active.forEach(function (item, index) {
                const $ = document.querySelector.bind(document);
                var ReactLike = $(item.className).getBoundingClientRect();
                var TopLike = ReactLike.top;
                var TopHeight = ReactLike.height;
                if (TopLike - heightMobile < 0 && TopLike - heightMobile + TopHeight > 0) {
                    $(".item.active").classList.remove("active");
                    $$(".item")[index].classList.add("active");
                }
            })
        }
    })
    return children
}
export default GlobalStyles;