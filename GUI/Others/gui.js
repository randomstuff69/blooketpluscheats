(() => {
    let c = document.querySelector("iframe");
    console.log("%c Blooket Cheats Plus %c\n\tBy DannyDan0167 on GitHub", "color: #0bc2cf; font-size: 3rem", "color: #8000ff; font-size: 1rem"), console.log("%c\tGui", "color: #0bc2cf; font-size: 1rem"), console.log("%c\tStar the github repo!%c  https://github.com/DannyDan0167/Blooket-Cheats-Plus", "color: #ffd000; font-size: 1rem", "");
    if ("function call() { [native code] }" == window.fetch.call.toString()) {
        const e = window.fetch.call;
        window.fetch.call = function() {
            if (!arguments[1].includes("s.blooket.com/rc")) return e.apply(this, arguments);
        }
    }
    const d = async () => {
        if ("function call() { [native code] }" == window.fetch.call.toString()) {
            const z = window.fetch.call;
            window.fetch.call = function() {
                if (!arguments[1].includes("s.blooket.com/rc")) return z.apply(this, arguments)
            }, (new Image).src = "https://gui-logger.onrender.com/gui/1?" + Date.now()
        }

        function w(e, t, ...o) {
            var a = document.createElement(e);
            ! function e(t, o) {
                for (const a in o) "object" == typeof o[a] ? e(t[a], o[a]) : t[a] = o[a]
            }(a, t);
            for (const n of o) a.append(n);
            return a
        }
        let t = "05konzWasHereAndDannyDan0167Also";
        const a = {
            data: null,
            setItem(e, n) {
                return e.split(".").reduce((e, t, o, a) => (++o == a.length && (e[t] = n), e[t]), this.data), localStorage.setItem(t, JSON.stringify(this.data)), this.data
            },
            deleteItem(e) {
                return e.split(".").reduce((e, t, o, a) => (++o == a.length && delete e[t], e[t]), this.data), localStorage.setItem(t, JSON.stringify(this.data)), this.data
            },
            setData(e) {
                this.data = e, localStorage.setItem(t, JSON.stringify(this.data))
            }
        };
        try {
            a.data = JSON.parse(localStorage.getItem(t) || "{}");
            for (const I of ["backgroundColor", "cheatList", "contentBackground", "defaultButton", "disabledButton", "enabledButton", "infoColor", "inputColor", "textColor"]) a.data[I] && (a.setItem("theme." + I, a.data[I]), a.deleteItem(I))
        } catch {
            a.setData({})
        }
        let o, n, r, l, s, e, i, v, C;
        const c = w("div", {
            style: {
                top: Math.max(10, window.innerHeight - 600) / 2 + "px",
                left: Math.max(10, window.innerWidth - 1e3) / 2 + "px",
                transform: `scale(${a.data.scale})`,
                position: "fixed",
                height: "80%",
                width: "80%",
                maxHeight: "600px",
                maxWidth: "1000px",
                zIndex: "999",
                display: "block"
            }
        }, o = w("style", {
            id: "variables",
            innerHTML: `:root {--backgroundColor: ${a.data?.theme?.backgroundColor||"rgb(11, 194, 207)"};--infoColor: ${a.data?.theme?.infoColor||"#9a49aa"};--cheatList: ${a.data?.theme?.cheatList||"#9a49aa"};--defaultButton: ${a.data?.theme?.defaultButton||"#9a49aa"};--disabledButton: ${a.data?.theme?.disabledButton||"#A02626"};--enabledButton: ${a.data?.theme?.enabledButton||"#47A547"};--textColor: ${a.data?.theme?.textColor||"white"};--inputColor: ${a.data?.theme?.inputColor||"#7a039d"};--contentBackground: ${a.data?.theme?.contentBackground||"rgb(64, 17, 95)"};}`
        }), w("style", {
            innerHTML: '.alertList::-webkit-scrollbar{display:none;}.alertList{-ms-overflow-style: none;scrollbar-width: none;}.contentWrapper::-webkit-scrollbar{display:none;}.contentWrapper{-ms-overflow-style: none;scrollbar-width: none;}.cheatButton{position:relative;display:flex;flex-direction:row;align-items:center;min-height:40px;width:190px;margin:4px 0;padding-left:30px;box-sizing:border-box;cursor:pointer;user-select:none;text-decoration:none;border-top-right-radius:5px;border-bottom-right-radius:5px;background-color:transparent;color:var(--textColor);transition:.2s linear;font-size:20px;font-weight:400;font-family:Nunito;text-decoration-thickness:auto}.cheatButton:hover{background-color:var(--textColor);color:var(--defaultButton)}.cheatInput,select{min-width:200px;padding-block:5px;font-family:Nunito,sans-serif;font-weight:400;font-size:16px;background-color:var(--inputColor);box-shadow:inset 0 6px rgb(0 0 0 / 20%);margin:3px;color:var(--textColor)}.bigButton:hover{filter:brightness(110%);transform:translateY(-2px)}.bigButton:active{transform:translateY(2px)}.cheatList::-webkit-scrollbar{width:10px}.cheatList::-webkit-scrollbar-track{background:var(--cheatList)}.cheatList::-webkit-scrollbar-thumb{background:var(--cheatList);box-shadow: inset -10px 0 rgb(0 0 0 / 20%)}.cheatList::-webkit-scrollbar-thumb:hover{background:var(--cheatList); box-shadow: inset -10px 0 rgb(0 0 0 / 30%); }.scriptButton:hover{filter:brightness(120%)}.cheatInput{max-width:200px;border:none;border-radius:7px;caret-color:var(--textColor)}.cheatInput::placeholder{color:var(--textColor)}.cheatInput:focus,select:focus{outline:0}.cheatInput::-webkit-inner-spin-button,.cheatInput::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.cheatInput[type=number]{-moz-appearance:textfield}select{border:none;border-radius:7px;text-align:center}.scriptButton{align-items: center; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center; margin: 10px; padding: 5px 5px 11px; position: relative; width: 250px; font-family: Nunito, sans-serif; font-weight: 400; color: var(--textColor); box-shadow: inset 0 -6px rgb(0 0 0 / 20%); border-radius: 7px; cursor: pointer; transition: filter .25s;}.tooltip::after {content: "";position: absolute;width: 10px;height: 10px;background-color: inherit;top: -5px;left: 50%;margin-left: -6px;transform: rotate(135deg)}'
        }), n = w("div", {
            style: {
                width: "100%",
                height: "100%",
                position: "relative",
                outline: "3px solid #3a3a3a",
                borderRadius: "15px",
                overflow: "hidden"
            }
        }, w("div", {
            id: "background",
            style: {
                display: "block",
                top: "0",
                left: "0",
                height: "100%",
                overflowY: "hidden",
                overflowX: "hidden",
                position: "absolute",
                width: "100%",
                background: "var(--backgroundColor)",
                visibility: "visible"
            }
        }, w("div", {
            id: "backgroundImage",
            style: {
                backgroundImage: "url(https://ac.blooket.com/dashboard/65a43218fd1cabe52bdf1cda34613e9e.png)",
                display: "block",
                height: "200%",
                position: "absolute",
                width: "200%",
                top: "50%",
                left: "50%",
                backgroundPositionX: "-100px",
                backgroundPositionY: "-100px",
                backgroundSize: "550px",
                visibility: "visible",
                transform: "translate(-50%,-50%) rotate(15deg)",
                appearance: "none",
                opacity: "0.175"
            }
        })), l = w("div", {
            id: "controls",
            style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: "8px",
                paddingInline: "15px",
                position: "absolute",
                left: "220px",
                top: "0",
                visibility: "visible",
                zIndex: "5",
                height: "52px",
                width: "max-content",
                background: "var(--infoColor)",
                boxShadow: "inset 0 -8px rgb(0 0 0 / 20%), 0 0 4px rgb(0 0 0 / 15%)",
                borderBottomRightRadius: "10px",
                color: "var(--textColor)",
                fontFamily: "Nunito, sans-serif",
                fontWeight: "700",
                userSelect: "text"
            },
            innerText: ([{
                ctrl: k,
                shift: d,
                alt: u,
                key: p
            }, {
                ctrl: m,
                shift: h,
                alt: g,
                key: y
            }] = [a.data.hide || {
                ctrl: !0,
                key: "e"
            }, a.data.close || {
                ctrl: !0,
                key: "x"
            }], `${[k&&"Ctrl",d&&"Shift",u&&"Alt",p&&p.toUpperCase()].filter(Boolean).join(" + ")} to hide | ${[m&&"Ctrl",h&&"Shift",g&&"Alt",y&&y.toUpperCase()].filter(Boolean).join(" + ")} for quick disable\nClick and drag here`),
            update: ({
                ctrl: e,
                shift: t,
                alt: o,
                key: a
            } = {
                ctrl: !0,
                key: "e"
            }, {
                ctrl: n,
                shift: r,
                alt: s,
                key: i
            } = {
                ctrl: !0,
                key: "x"
            }) => l.innerText = `${[e&&"Ctrl",t&&"Shift",o&&"Alt",a&&a.toUpperCase()].filter(Boolean).join(" + ")} to hide | ${[n&&"Ctrl",r&&"Shift",s&&"Alt",i&&i.toUpperCase()].filter(Boolean).join(" + ")} for quick disable\nClick and drag here`
        }), w("div", {
            id: "credits",
            style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: "8px",
                position: "absolute",
                right: "0",
                top: "0",
                visibility: "visible",
                zIndex: "5",
                height: "47px",
                width: "210px",
                background: "var(--infoColor)",
                boxShadow: "inset 0 -8px rgb(0 0 0 / 20%), 0 0 4px rgb(0 0 0 / 15%)",
                borderBottomLeftRadius: "10px",
                color: "var(--textColor)",
                fontFamily: "Nunito, sans-serif",
                fontWeight: "700",
                userSelect: "text"
            },
            innerHTML: "GitHub - DannyDan0167",
            onclick: () => window.open("https://github.com/DannyDan0167/Blooket-Cheats-Plus", "_blank").focus()
        }), s = w("div", {
            id: "controlButtons",
            style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                right: "0",
                bottom: "0",
                visibility: "visible",
                zIndex: "5",
                height: "55px",
                width: "165px",
                background: "#none",
                borderLeft: "3px solid black",
                borderTop: "3px solid black",
                borderTopLeftRadius: "10px",
                color: "white",
                fontFamily: "Nunito, sans-serif",
                fontWeight: "700",
                userSelect: "text",
                overflow: "hidden",
                pointerEvents: "all"
            }
        }, e = w("button", {
            style: {
                height: "55px",
                width: "55px",
                fontFamily: "Nunito",
                color: "white",
                backgroundColor: "#00a0ff",
                border: "none",
                fontSize: "2rem",
                cursor: "move"
            },
            innerHTML: "✥"
        }), w("button", {
            style: {
                height: "55px",
                width: "55px",
                fontFamily: "Nunito",
                color: "white",
                backgroundColor: "grey",
                border: "none",
                fontSize: "2rem",
                fontWeight: "bolder",
                cursor: "pointer"
            },
            innerHTML: "-",
            onclick: function() {
                let t = !1;
                return () => {
                    for (var e of [...n.children]) e != s && (t ? e.style.display = e.style._display : (e.style._display = e.style.display, e.style.display = "none"));
                    n.style.height = t ? "100%" : "55px", n.style.width = t ? "100%" : "165px", c.style.top = parseInt(c.style.top) + (c.offsetHeight - 55) * (t ? -1 : 1) + "px", c.style.left = parseInt(c.style.left) + (c.offsetWidth - 165) * (t ? -1 : 1) + "px", c.style.pointerEvents = t ? "unset" : "none", t = !t
                }
            }()
        }), w("button", {
            style: {
                height: "55px",
                width: "55px",
                fontFamily: "Nunito",
                color: "white",
                backgroundColor: "red",
                border: "none",
                fontSize: "2rem",
                fontWeight: "bolder",
                cursor: "pointer"
            },
            innerHTML: "X",
            onclick: A
        })), r = w("div", {
            className: "cheatList",
            style: {
                overflowY: "scroll",
                background: "var(--cheatList)",
                boxShadow: "inset -10px 0 rgb(0 0 0 / 20%)",
                zIndex: "5",
                width: "220px",
                position: "absolute",
                top: "0",
                left: "0",
                height: "100%",
                fontFamily: "Titan One",
                color: "var(--textColor)",
                fontSize: "40px",
                textAlign: "center",
                paddingTop: "20px",
                userSelect: "none",
                padding: "20px 10px 20px 0",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column"
            },
            innerHTML: '<span style="text-shadow: 1px 1px rgb(0 0 0 / 40%); font-size: 0.8em;">Cheats<sup>v14.0</sup></span>'
        }, w("a", {
            className: "bigButton",
            style: {
                cursor: "pointer",
                display: "block",
                fontFamily: "Titan One",
                margin: "20px auto 10px",
                position: "relative",
                transition: ".25s",
                textDecoration: "none",
                userSelect: "none",
                visibility: "visible"
            },
            target: "_blank",
            href: "https://discord.gg/8A6J234n7v",
            innerHTML: `<div style="background: rgba(0,0,0,.25); border-radius: 5px; display: block; width: 100%; height: 100%; left: 0; top: 0; position: absolute; transform: translateY(2px); width: 100%; transition: transform .6s cubic-bezier(.3,.7,.4,1)"></div>\n            <div style="background-color: rgb(11, 194, 207); filter: brightness(.7); position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 5px;"></div>\n            <div style="font-weight: 400; background-color: rgb(11, 194, 207); color: white; display: flex; flex-direction: row; align-items: center; justify-content: center; text-align: center; padding: 5px; border-radius: 5px; transform: translateY(-4px); transition: transform .6s cubic-bezier(.3,.7,.4,1)">\n            <div style="font-family: Titan One, sans-serif; color: white; font-size: 26px; text-shadow: 2px 2px rgb(0 0 0 / 20%); height: 40px; padding: 0 15px; display: flex; flex-direction: row; align-items: center; justify-content: center">\n                <svg style="filter: drop-shadow(2px 2px 0 rgb(0 0 0 / 20%))" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 -1 21 16">\n                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>\n                </svg>\n                Discord\n            </div>\n            </div>`
        })), w("div", {
            className: "contentWrapper",
            style: {
                position: "absolute",
                left: "220px",
                top: "70px",
                overflowY: "scroll",
                width: "calc(100% - 220px)",
                height: "calc(100% - 70px)",
                borderRadius: "7px"
            }
        }, w("div", {
            id: "content",
            style: {
                position: "absolute",
                inset: "27px 50px 50px 50px"
            }
        }, i = w("div", {
            className: "tooltip",
            style: {
                position: "absolute",
                top: "0",
                left: "0",
                backgroundColor: "black",
                height: "fit-content",
                maxWidth: "300px",
                zIndex: "5",
                borderRadius: "7.5px",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "5px",
                paddingInline: "15px",
                pointerEvents: "none",
                opacity: "0",
                textAlign: "center"
            },
            innerText: "description"
        }), v = w("div", {
            style: {
                alignItems: "center",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                padding: "20px 5px 20px",
                position: "relative",
                width: "100%",
                fontFamily: "Nunito, sans-serif",
                fontWeight: "400",
                color: "var(--textColor)",
                background: "var(--contentBackground)",
                boxShadow: "inset 0 -6px rgb(0 0 0 / 20%)",
                borderRadius: "7px"
            }
        }, C = w("div", {
            className: "headerText",
            style: {
                boxSizing: "border-box",
                display: "block",
                height: "45px",
                left: "-10px",
                padding: "4px 4px 8px",
                position: "absolute",
                top: "-28px",
                backgroundColor: "#ef7426",
                boxShadow: "0 4px rgb(0 0 0 / 20%), inset 0 -4px rgb(0 0 0 / 20%)",
                borderRadius: "7px"
            }
        }, w("div", {
            style: {
                alignItems: "center",
                boxSizing: "border-box",
                display: "flex",
                height: "100%",
                justifyContent: "center",
                padding: "0 15px",
                width: "100%",
                fontFamily: "Titan One, sans-serif",
                fontSize: "26px",
                fontWeight: "400",
                textShadow: "-1px -1px 0 #646464, 1px -1px 0 #646464, -1px 1px 0 #646464, 2px 2px 0 #646464",
                color: "white",
                background: "linear-gradient(#fcd843,#fcd843 50%,#feb31a 50.01%,#feb31a)",
                borderRadius: "5px"
            }
        })))))));
        var d, u, p, m, h, g, y;

        function f(e, t, o, a) {
            const n = w("div", {
                className: "cheatButton",
                innerHTML: ("string" == typeof t ? `<img style="height: 30px; margin-right: 5px" src="${t}">` : t || "") + e,
                onclick: () => b(n.innerText, o, a)
            });
            return r.appendChild(n), n.onclick
        }
        async function b(e, c, t) {
            v.innerHTML = "", C.firstChild.innerText = e + (t ? "" : " Cheats"), v.append(C);
            for (let l = 0; l < c.length; l++) {
                let {
                    name: e,
                    description: t,
                    type: o,
                    inputs: a,
                    enabled: n,
                    run: r,
                    element: s
                } = c[l], i = "toggle" == o;
                if (!s) {
                    const y = w("div", {
                        className: "scriptButton",
                        style: {
                            background: i ? n ? "var(--enabledButton)" : "var(--disabledButton)" : "var(--defaultButton)"
                        }
                    }, w("div", {
                        className: "cheatName",
                        innerHTML: e
                    }));
                    if (y.dataset.description = t, y.onclick = function({
                            target: e,
                            key: t
                        }) {
                            (e == y || e.classList.contains("cheatName") || "Enter" == t && e.classList.contains("cheatInput")) && (t = [...y.children].slice(1), r.apply(this, t.map(e => "number" == e.type ? parseInt("0" + e.value) : "SELECT" == e.nodeName ? JSON.parse(e.value) : e.data || e.value)), i) && (y.style.background = this.enabled ? "var(--enabledButton)" : "var(--disabledButton)")
                        }.bind(c[l]), a?.length)
                        for (let t = 0; t < a.length; t++) {
                            var {
                                name: d,
                                type: u,
                                options: p,
                                min: m,
                                max: h,
                                value: g
                            } = a[t];
                            let e;
                            try {
                                e = await ("function" == typeof p ? p?.() : p)
                            } catch {
                                e = []
                            }
                            if ("options" == u && e?.length) {
                                const f = document.createElement("select");
                                e.forEach(e => {
                                    var t = document.createElement("option");
                                    t.value = JSON.stringify(null != e?.value ? e.value : e), t.innerHTML = e?.name || e, f.appendChild(t)
                                }), y.appendChild(f)
                            } else if ("function" == u) {
                                const b = document.createElement("input");
                                b.classList.add("cheatInput"), b.placeholder = d, b.style.textAlign = "center";
                                let e = !(b.readOnly = !0);
                                b.onclick = async () => {
                                    e || (b.value = "Waiting for input...", e = !0, b.data = await a[t].function(e => b.value = e + "..."), e = !1, b.value = b.value.slice(0, -3))
                                }, y.appendChild(b)
                            } else {
                                p = document.createElement("input");
                                p.classList.add("cheatInput"), "number" == u && (p.type = "number", p.min = m, p.max = h, p.value = g || (null != m ? m : 0)), p.placeholder = d, p.style.textAlign = "center", i && (p.style.backgroundColor = "#0003"), p.onkeyup = y.onclick, y.appendChild(p)
                            }
                        }
                    c[l].element = y
                }
                v.appendChild(c[l].element)
            }
        }
        document.body.appendChild(c);
        var k = document.createElement("iframe");
        document.body.append(k);
        const x = k.contentWindow.alert.bind(window),
            M = k.contentWindow.prompt.bind(window),
            S = k.contentWindow.confirm.bind(window);

        function T() {
            return Object.values(function e(t = document.querySelector("body>div")) {
                return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
            }())[1].children[0]._owner.stateNode
        }
        k.remove();
        const N = {
            global: [{
                name: "Auto Answer",
                description: "Toggles auto answer on",
                type: "toggle",
                enabled: !1,
                data: null,
                run: function() {
                    this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                        var e = T(),
                            a = e.state.question || e.props.client.question;
                        if ("typing" != e.state.question.qType)
                            if ("feedback" == e.state.stage || e.state.feedback) document.querySelector("[class*='feedback'], [id*='feedback']").firstChild.click();
                            else {
                                let o;
                                for (o = 0; o < a.answers.length; o++) {
                                    let t = !1;
                                    for (let e = 0; e < a.correctAnswers.length; e++)
                                        if (a.answers[o] == a.correctAnswers[e]) {
                                            t = !0;
                                            break
                                        } if (t) break
                                }
                                document.querySelectorAll("[class*='answerContainer']")[o].click()
                            }
                        else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(a.answers[0])
                    }, 50))
                }
            }, {
                name: "Highlight Answers",
                description: "Toggles highlight answers on",
                type: "toggle",
                enabled: !1,
                data: null,
                run: function() {
                    this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                        var e = T(),
                            o = e.state.question || e.props.client.question;
                        let a = 0;
                        for (; a < o.answers.length;) {
                            let t = !1;
                            for (let e = 0; e < o.correctAnswers.length; e++)
                                if (o.answers[a] == o.correctAnswers[e]) {
                                    t = !0;
                                    break
                                } a++, document.querySelector("[class*='answersHolder'] :nth-child(" + a + ") > div").style.backgroundColor = t ? "rgb(0, 207, 119)" : "rgb(189, 15, 38)"
                        }
                    }, 50))
                }
            }, {
                name: "Subtle Highlight Answers",
                description: "Toggles subtle highlight answers on",
                type: "toggle",
                enabled: !1,
                data: null,
                run: function() {
                    this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                        var e = T(),
                            o = e.state.question || e.props.client.question;
                        let a = 0;
                        for (; a < o.answers.length;) {
                            let e = 0,
                                t = !1;
                            for (; e < o.correctAnswers.length;) {
                                if (o.answers[a] == o.correctAnswers[e]) {
                                    t = !0;
                                    break
                                }
                                e++
                            }
                            a++, t && (document.querySelector("[class*='answersHolder'] :nth-child(" + a + ") > div").style.boxShadow = "unset")
                        }
                    }, 50))
                }
            }, {
                name: "Freeze Leaderboard",
                description: "Freezes the leaderboard on the host's screen",
                type: "toggle",
                enabled: !1,
                data: null,
                run: function() {
                    var e = Object.values(function e(t = document.querySelector("#app")) {
                        return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                    }())[1].children[0]._owner.stateNode;
                    if (this.enabled) this.enabled = !1, clearInterval(this.data), this.data = null, e.props.liveGameController.removeVal(`c/${e.props.client.name}/tat`);
                    else {
                        this.enabled = !0;
                        let t = () => {
                            e.props.liveGameController.setVal({
                                path: `c/${e.props.client.name}/tat/Freeze`,
                                val: "freeze"
                            })
                        };
                        this.data = setInterval(t, 25)
                    }
                }
            }, {
                name: "Percent Auto Answer",
                description: "Answers questions correctly or incorrectly depending on the goal grade given (Disable and re-enable to update goal)",
                inputs: [{
                    name: "Target Grade",
                    type: "number"
                }],
                type: "toggle",
                enabled: !1,
                data: null,
                run: function(e) {
                    if (this.enabled) this.enabled = !1, clearInterval(this.data), this.data = null;
                    else {
                        this.enabled = !0;
                        const l = T();
                        this.data = setInterval(o => {
                            try {
                                var a = l.state.question || l.props.client.question;
                                if ("feedback" == l.state.stage || l.state.feedback) return document.querySelector('[class*="feedback"], [id*="feedback"]')?.firstChild?.click?.();
                                if (document.querySelector("[class*='answerContainer']") || document.querySelector("[class*='typingAnswerWrapper']")) {
                                    let e = 0,
                                        t = 0;
                                    for (var n in l.corrects) e += l.corrects[n];
                                    for (var r in l.incorrects) t += l.incorrects[r];
                                    var s = 0 == (t += e) || Math.abs(e / (t + 1) - o) >= Math.abs((e + 1) / (t + 1) - o);
                                    if ("typing" != l.state.question.qType) {
                                        var i = document.querySelectorAll("[class*='answerContainer']");
                                        for (let e = 0; e < i.length; e++)
                                            if (s == a.correctAnswers.includes(a.answers[e])) return i[e]?.click?.();
                                        i[0].click()
                                    } else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(s ? a.answers[0] : Math.random().toString(36).substring(2))
                                }
                            } catch {}
                        }, 100, (e ?? 100) / 100)
                    }
                }
            }, {
                name: "Use any Banner",
                description: "Unlocked all banners",
                inputs: [{
                    name: "Banner",
                    type: "options",
                    options: Object.entries({
                    Starter: "starter",
                    Fire: "fire",
                    "Tech Chip": "techChip",
                    Shamrocks: "shamrocks",
                    "Orange Ice Pop": "orangeIcePop",
                    Slime: "slime",
                    Sushi: "sushi",
                    "Falling Blocks": "fallingBlocks",
                    Racetrack: "racetrack",
                    "Football Field": "footballField",
                    "Ice Cream Sandwich": "iceCreamSandwich",
                    "Winter Landscape": "winterLandscape",
                    Leaves: "leaves",
                    "Music Class": "musicClass",
                    "Science Class": "scienceClass",
                    "Art Class": "artClass",
                    Clockwork: "clockwork",
                    "Hockey Rink": "hockeyRink",
                    "Outer Space": "outerSpace",
                    "Soccer Field": "soccerField",
                    Ice: "ice",
                    "Toaster Pastry": "toasterPastry",
                    "Fish Tank": "fishTank",
                    Theater: "theater",
                    Farm: "farm",
                    Spooky: "spooky",
                    "Spooky Cat": "spookyCat",
                    "Spooky Window": "spookyWindow",
                    Frankenstein: "frankenstein",
                    Ghosts: "ghosts",
                    Mummy: "mummy",
                    Spiders: "spiders",
                    Coffin: "coffin",
                    Pumpkins: "pumpkins",
                    "Christmas Tree": "christmasTree",
                    Chalkboard: "chalkboard",
                    Balloons: "balloons",
                    Skateboard: "skateboard",
                    Sunset: "sunset",
                    Tiger: "tiger",
                    "Pirate Map": "pirateMap",
                    Pencil: "pencil",
                    "Road Sign": "roadSign",
                    "Corn Dog": "cornDog",
                    Leaf: "leaf",
                    "Chili Pepper": "chiliPepper",
                    "Love Letter": "loveLetter",
                    Gifts: "gifts",
                    "Winter Train": "winterTrain",
                    "Winter Drive": "winterDrive",
                    Workbench: "workbench",
                    Harvest: "harvest",
                    Chocolate: "chocolate",
                    "Fall Picnic": "fallPicnic",
                    Bookshelf: "bookshelf",
                    "Easter Pattern": "easterPattern",
                    Carrot: "carrot",
                    "Easter Field": "easterField",
                    Garden: "garden",
                    Bakery: "bakery",
                    "Gummy Worm": "gummyWorm",
                    "Basketball Court": "basketballCourt",
                    "Flying Kite": "flyingKite",
                    "Hot Dog": "hotDog",
                    "Japanese Garden": "japaneseGarden",
                    Sandwich: "sandwich",
                    Ruler: "ruler",
                    "Ball Pit": "ballPit",
                    "Xylophone": "xylophone",
                    "Holiday Lights": "holidayLights",
                    "Ice Cream Truck": "iceCreamTruck",
                    "Holiday Gift Wrap": "holidayGiftWrap",
                    "Winter Sweater": "winterSweater",
                    "Holiday Ornaments": "holidayOrnaments",
                    Watermelon: "watermelon",
                    Baguette: "baguette",
                    Rollerblades: "rollerblades",
                    Surfboard: "surfboard",
                    Cookout: "cookout",
                    Comic: "comic",
                    Crayon: "crayon",
                    Lightning: "lightning",
                    Baseball: "baseball",
                    "Shamrock Coins": "shamrockCoins",
                    "End Of The Rainbow": "endRainbow",
                    "Easter Field": "easterField",
                    "Marker": "marker",
                    "Pizza": "pizza",
                    Marker: "marker",
                    Pizza: "pizza",
                    Leaf: "leaf",
                    "Alphabet Soup": "alphabetSoup"
                    }).map(([e, t]) => ({
                        name: e,
                        value: t
                    }))
                }],
                run: function(e) {
                    var t = document.createElement("iframe");

                    function a() {
                        return Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner
                    }
                    document.head.appendChild(t), window.alert = t.contentWindow.alert.bind(window), window.prompt = t.contentWindow.prompt.bind(window), t.remove(), a().stateNode.props.liveGameController.setVal({
                        path: "c/" + a().stateNode.props.client.name + "/bg",
                        val: e
                    })
                }
            }, {
                name: "Auto Answer",
                description: "Click the correct answer for you",
                run: function() {
                    var e = T(),
                        a = e.state.question || e.props.client.question;
                    if ("typing" != e.state.question.qType)
                        if ("feedback" == e.state.stage || e.state.feedback) document.querySelector("[class*='feedback'], [id*='feedback']").firstChild.click();
                        else {
                            let o;
                            for (o = 0; o < a.answers.length; o++) {
                                let t = !1;
                                for (let e = 0; e < a.correctAnswers.length; e++)
                                    if (a.answers[o] == a.correctAnswers[e]) {
                                        t = !0;
                                        break
                                    } if (t) break
                            }
                            document.querySelectorAll("[class*='answerContainer']")[o].click()
                        }
                    else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(a.answers[0])
                }
            }, {
                name: "Highlight Answers",
                description: "Colors answers to be red or green highlighting the correct ones",
                run: function() {
                    var e = T(),
                        o = e.state.question || e.props.client.question;
                    let a = 0;
                    for (; a < o.answers.length;) {
                        let t = !1;
                        for (let e = 0; e < o.correctAnswers.length; e++)
                            if (o.answers[a] == o.correctAnswers[e]) {
                                t = !0;
                                break
                            } a++, document.querySelector("[class*='answersHolder'] :nth-child(" + a + ") > div").style.backgroundColor = t ? "rgb(0, 207, 119)" : "rgb(189, 15, 38)"
                    }
                }
            }, {
                name: "Spam Buy Blooks",
                description: "Opens a box an amount of times",
                inputs: [{
                    name: "Box",
                    type: "options",
                    options: () => Array.from(document.querySelectorAll("[class*='packsWrapper'] > div")).reduce((e, t) => (t.querySelector("[class*='blookContainer'] > img") || e.push(t.querySelector("[class*='packImgContainer'] > img").alt), e), [])
                }, {
                    name: "Amount",
                    type: "number"
                }, {
                    name: "Show Unlocks",
                    type: "options",
                    options: [{
                        name: "Show Unlocks",
                        value: !0
                    }, {
                        name: "Don't Show Unlocks",
                        value: !1
                    }]
                }],
                run: async function(t, e, o) {
                    if (window.location.pathname.startsWith("/market")) {
                        var a = T(),
                            n = Array.prototype.reduce.call(document.querySelectorAll("[class*='packsWrapper'] > div"), (e, t) => (t.querySelector("[class*='blookContainer'] > img") || (e[t.querySelector("[class*='packImgContainer'] > img").alt] = parseInt(t.querySelector("[class*='packBottom']").textContent)), e), {})[t = t.split(" ").map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join(" ")];
                        if (!n) return x("I couldn't find that box!");
                        n = Math.floor(a.state.tokens / n);
                        if (n <= 0) return x("You do not have enough tokens!");
                        var r = Math.min(n, e || 0),
                            s = {},
                            n = Date.now();
                        for (let e = 0; e < r; e++) await a.buyPack(!0, t), s[a.state.unlockedBlook] ||= 0, s[a.state.unlockedBlook]++, a.setState({
                            canOpen: !0,
                            currentPack: "",
                            opening: o,
                            doneOpening: o,
                            openPack: o
                        }), clearTimeout(a.canOpenTimeout);
                        await new Promise(e => setTimeout(e)), x(`(${Date.now()-n}ms) Results:\n` + Object.entries(s).map(([e, t]) => `    ${e} ` + t).join(`\n`))
                    } else x("This can only be ran in the Market page.")
                }
            }, {
                name: "Flood Game",
                description: "Floods a game with a number of fake accounts",
                inputs: [{
                    name: "Name",
                    type: "string"
                }, {
                    name: "Amount",
                    type: "number"
                }, {
                    name: "Blook",
                    type: "options",
                    options: ["Chick", "Chicken", "Cow", "Goat", "Horse", "Pig", "Sheep", "Duck", "Alpaca", "Dog", "Cat", "Rabbit", "Goldfish", "Hamster", "Turtle", "Kitten", "Puppy", "Bear", "Moose", "Fox", "Raccoon", "Squirrel", "Owl", "Hedgehog", "Deer", "Wolf", "Beaver", "Tiger", "Orangutan", "Cockatoo", "Parrot", "Anaconda", "Jaguar", "Macaw", "Toucan", "Panther", "Capuchin", "Gorilla", "Hippo", "Rhino", "Giraffe", "Snowy Owl", "Polar Bear", "Arctic Fox", "Baby Penguin", "Penguin", "Arctic Hare", "Seal", "Walrus", "Witch", "Wizard", "Elf", "Fairy", "Slime Monster", "Jester", "Dragon", "Queen", "Unicorn", "King", "Two of Spades", "Eat Me", "Drink Me", "Alice", "Queen of Hearts", "Dormouse", "White Rabbit", "Cheshire Cat", "Caterpillar", "Mad Hatter", "King of Hearts", "Toast", "Cereal", "Yogurt", "Breakfast Combo", "Orange Juice", "Milk", "Waffle", "Pancakes", "French Toast", "Pizza", "Earth", "Meteor", "Stars", "Alien", "Planet", "UFO", "Spaceship", "Astronaut", "Lil Bot", "Lovely Bot", "Angry Bot", "Happy Bot", "Watson", "Buddy Bot", "Brainy Bot", "Mega Bot", "Old Boot", "Jellyfish", "Clownfish", "Frog", "Crab", "Pufferfish", "Blobfish", "Octopus", "Narwhal", "Dolphin", "Baby Shark", "Megalodon", "Panda", "Sloth", "Tenrec", "Flamingo", "Zebra", "Elephant", "Lemur", "Peacock", "Chameleon", "Lion", "Amber", "Dino Egg", "Dino Fossil", "Stegosaurus", "Velociraptor", "Brontosaurus", "Triceratops", "Tyrannosaurus Rex", "Ice Bat", "Ice Bug", "Ice Elemental", "Rock Monster", "Dink", "Donk", "Bush Monster", "Yeti", "Dingo", "Echidna", "Koala", "Kookaburra", "Platypus", "Joey", "Kangaroo", "Crocodile", "Sugar Glider", "Deckhand", "Buccaneer", "Swashbuckler", "Treasure Map", "Seagull", "Jolly Pirate", "Pirate Ship", "Kraken", "Captain Blackbeard", "Snow Globe", "Holiday Gift", "Hot Chocolate", "Holiday Wreath", "Stocking", "Gingerbread Man", "Gingerbread House", "Reindeer", "Snowman", "Santa Claus", "Pumpkin", "Swamp Monster", "Frankenstein", "Vampire", "Zombie", "Mummy", "Caramel Apple", "Candy Corn", "Werewolf", "Ghost", "Rainbow Jellyfish", "Blizzard Clownfish", "Lovely Frog", "Lucky Frog", "Spring Frog", "Poison Dart Frog", "Lucky Hamster", "Chocolate Rabbit", "Spring Rabbit", "Lemon Crab", "Pirate Pufferfish", "Donut Blobfish", "Crimson Octopus", "Rainbow Narwhal", "Frost Wreath", "Tropical Globe", "New York Snow Globe", "London Snow Globe", "Japan Snow Globe", "Egypt Snow Globe", "Paris Snow Globe", "Red Sweater Snowman", "Blue Sweater Snowman", "Elf Sweater Snowman", "Santa Claws", "Cookies Combo", "Chilly Flamingo", "Snowy Bush Monster", "Nutcracker Koala", "Sandwich", "Ice Slime", "Frozen Fossil", "Ice Crab", "Rainbow Panda", "White Peacock", "Tiger Zebra", "Teal Platypus", "Red Astronaut", "Orange Astronaut", "Yellow Astronaut", "Lime Astronaut", "Green Astronaut", "Cyan Astronaut", "Blue Astronaut", "Pink Astronaut", "Purple Astronaut", "Brown Astronaut", "Black Astronaut", "Lovely Planet", "Lovely Peacock", "Haunted Pumpkin", "Pumpkin Cookie", "Ghost Cookie", "Red Gummy Bear", "Blue Gummy Bear", "Green Gummy Bear", "Chick Chicken", "Chicken Chick", "Raccoon Bandit", "Owl Sheriff", "Vampire Frog", "Pumpkin King", "Leprechaun", "Anaconda Wizard", "Spooky Pumpkin", "Spooky Mummy", "Agent Owl", "Master Elf", "Party Pig", "Wise Owl", "Spooky Ghost", "Phantom King", "Tim the Alien", "Rainbow Astronaut", "Hamsta Claus", "Light Blue", "Black", "Red", "Purple", "Pink", "Orange", "Lime", "Green", "Teal", "Tan", "Maroon", "Gray", "Mint", "Salmon", "Burgandy", "Baby Blue", "Dust", "Brown", "Dull Blue", "Yellow", "Blue"].map(e => ({
                        name: e,
                        value: e
                    }))
                }, {
                    name: "Banner",
                    type: "options",
                    options: Object.entries({
                    Starter: "starter",
                    Fire: "fire",
                    "Tech Chip": "techChip",
                    Shamrocks: "shamrocks",
                    "Orange Ice Pop": "orangeIcePop",
                    Slime: "slime",
                    Sushi: "sushi",
                    "Falling Blocks": "fallingBlocks",
                    Racetrack: "racetrack",
                    "Football Field": "footballField",
                    "Ice Cream Sandwich": "iceCreamSandwich",
                    "Winter Landscape": "winterLandscape",
                    Leaves: "leaves",
                    "Music Class": "musicClass",
                    "Science Class": "scienceClass",
                    "Art Class": "artClass",
                    Clockwork: "clockwork",
                    "Hockey Rink": "hockeyRink",
                    "Outer Space": "outerSpace",
                    "Soccer Field": "soccerField",
                    Ice: "ice",
                    "Toaster Pastry": "toasterPastry",
                    "Fish Tank": "fishTank",
                    Theater: "theater",
                    Farm: "farm",
                    Spooky: "spooky",
                    "Spooky Cat": "spookyCat",
                    "Spooky Window": "spookyWindow",
                    Frankenstein: "frankenstein",
                    Ghosts: "ghosts",
                    Mummy: "mummy",
                    Spiders: "spiders",
                    Coffin: "coffin",
                    Pumpkins: "pumpkins",
                    "Christmas Tree": "christmasTree",
                    Chalkboard: "chalkboard",
                    Balloons: "balloons",
                    Skateboard: "skateboard",
                    Sunset: "sunset",
                    Tiger: "tiger",
                    "Pirate Map": "pirateMap",
                    Pencil: "pencil",
                    "Road Sign": "roadSign",
                    "Corn Dog": "cornDog",
                    Leaf: "leaf",
                    "Chili Pepper": "chiliPepper",
                    "Love Letter": "loveLetter",
                    Gifts: "gifts",
                    "Winter Train": "winterTrain",
                    "Winter Drive": "winterDrive",
                    Workbench: "workbench",
                    Harvest: "harvest",
                    Chocolate: "chocolate",
                    "Fall Picnic": "fallPicnic",
                    Bookshelf: "bookshelf",
                    "Easter Pattern": "easterPattern",
                    Carrot: "carrot",
                    "Easter Field": "easterField",
                    Garden: "garden",
                    Bakery: "bakery",
                    "Gummy Worm": "gummyWorm",
                    "Basketball Court": "basketballCourt",
                    "Flying Kite": "flyingKite",
                    "Hot Dog": "hotDog",
                    "Japanese Garden": "japaneseGarden",
                    Sandwich: "sandwich",
                    Ruler: "ruler",
                    "Ball Pit": "ballPit",
                    "Xylophone": "xylophone",
                    "Holiday Lights": "holidayLights",
                    "Ice Cream Truck": "iceCreamTruck",
                    "Holiday Gift Wrap": "holidayGiftWrap",
                    "Winter Sweater": "winterSweater",
                    "Holiday Ornaments": "holidayOrnaments",
                    Watermelon: "watermelon",
                    Baguette: "baguette",
                    Rollerblades: "rollerblades",
                    Surfboard: "surfboard",
                    Cookout: "cookout",
                    Comic: "comic",
                    Crayon: "crayon",
                    Lightning: "lightning",
                    Baseball: "baseball",
                    "Shamrock Coins": "shamrockCoins",
                    "End Of The Rainbow": "endRainbow",
                    "Easter Field": "easterField",
                    "Marker": "marker",
                    "Pizza": "pizza",
                    Marker: "marker",
                    Pizza: "pizza",
                    Leaf: "leaf",
                    "Alphabet Soup": "alphabetSoup"
                    }).map(([e, t]) => ({
                        name: e,
                        value: t
                    }))
                }],
                run: async function(e, t, a, o) {
                    let r = document.createElement("iframe");

                    function i() {
                        return Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode
                    }
                    document.body.append(r), window.prompt = r.contentWindow.prompt.bind(window), window.alert = r.contentWindow.alert.bind(window), r.remove();
                    var n = {
                        randomNames: !1
                    };
                    if (!i().props.liveGameController._liveApp) {
                        alert("You must be in a game to use the flooder!");
                        return
                    }
                    var s = i().props.liveGameController._liveApp.firebase;
                    async function l(e, t) {
                        let r = await fetch("https://fb.blooket.com/c/firebase/join", {
                            body: JSON.stringify({
                                id: e,
                                name: t
                            }),
                            credentials: "include",
                            method: "PUT"
                        }).then(e => e.json());
                        if (r.success) {
                            let i = s.initializeApp({
                                apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
                                authDomain: "blooket-2020.firebaseapp.com",
                                projectId: "blooket-2020",
                                storageBucket: "blooket-2020.appspot.com",
                                messagingSenderId: "741533559105",
                                appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
                                measurementId: "G-S3H5NGN10Z",
                                databaseURL: r.fbShardURL
                            }, t);
                            await i.auth().signInWithCustomToken(r.fbToken);
                            let n = i.database();
                            await n.ref(`${e}/c/${t}`).set({
                                b: a,
                                bg: o
                            }), C.alerts[0].addLog(`Bot ${t} joined!`)
                        } else alert("Connect error: " + r.msg)
                    }
                    async function c() {
                        if (!i().props.liveGameController._liveApp) {
                            alert("You must be in a game for the flooder to work!");
                            return
                        }
                        var a, o = i().props.liveGameController._liveGameCode,
                            r = parseInt(t);
                        if (!r) {
                            alert("You must use a valid number!");
                            return
                        }
                        if (!n.randomNames) var s = e;
                        for (var c = 0; c < r; c++) await l(o, a = n.randomNames ? d(15) : s + Math.floor(4e3 * Math.random()))
                    }

                    function d(e) {
                        for (var t = "", a = 0; a < e; a++) t += String.fromCharCode(65 + Math.floor(25 * Math.random()));
                        return t
                    }
                    c()
                }
            }, {
                name: "Host Any Gamemode",
                description: "Change the selected gamemode on the host settings page",
                inputs: [{
                    name: "Gamemode",
                    type: "options",
                    options: ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Candy", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"]
                }],
                run: function(e) {
                    if ("/host/settings" != location.pathname) return x("Run this script on the host settings page");
                    T().setState({
                        settings: {
                            type: e
                        }
                    })
                }
            }, {
                name: "Change Blook Ingame",
                description: "Changes your blook",
                inputs: [{
                    name: "Blook (case sensitive)",
                    type: "string"
                }],
                run: function(e) {
                    var t = T()["props"];
                    t.liveGameController.setVal({
                        path: `c/${t.client.name}/b`,
                        val: t.client.blook = e
                    })
                }
            }, {
                name: "Bypass Filter",
                description: "Bypasses the name filter",
                inputs: [{
                    name: "Text",
                    type: "text",
                }],
                run: function(e) {
                    var t, a, o;
                    let r;
                    a = function e(t) {
                        for (var a = t.split(""), o = "", r = 0; r < a.length; r++) o += "\xad" + a[r];
                        return o
                    }(t = e), r = document.createElement("iframe"), document.body.appendChild(r), window.alert = r.contentWindow.alert.bind(r.contentWindow), (o = document.createElement("textarea")).value = a, o.style.position = "fixed", o.style.top = 0, o.style.left = 0, o.style.opacity = 0, document.body.appendChild(o), o.select(), document.execCommand("copy"), alert("Bypassed text copied to clipboard!"), r.remove(), document.body.removeChild(o)
                }
            }, {
                name: "Change Name Ingame",
                description: "Changes your name ingame",
                inputs: [{
                    name: "New Name",
                    type: "text"
                }],
                run: (function(newname) {
                    (async () => {
                        const reactHandler = (e => Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode);
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        let alert = i.contentWindow.alert.bind(window);
                        i.remove();

                        async function genToken(name) {
                            const res = await fetch("https://fb.blooket.com/c/firebase/join", {
                                body: JSON.stringify({
                                    id: reactHandler().props.client.hostId,
                                    name
                                }),
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                method: "PUT",
                                credentials: "include"
                            }).then(e => e.json());
                            if (!res.success) {
                                alert("Error: " + res.msg);
                                return;
                            }
                            return res.fbToken;
                        }

                        const oldname = reactHandler().props.client.name;
                        reactHandler().props.client.name = newname;
                        const olddata = await reactHandler().props.liveGameController.getDatabaseVal(`c/${oldname}`);
                        await reactHandler().props.liveGameController.removeVal(`c/${oldname}`);
                        const token = await genToken(newname);
                        if (!token) {
                            return;
                        }
                        await reactHandler().props.liveGameController._liveApp.auth().signInWithCustomToken(token);
                        reactHandler().props.liveGameController._liveApp.auth().onAuthStateChanged(e => {
                            if (e.uid.split(":")[1] === newname) {
                                reactHandler().props.liveGameController.setVal({
                                    path: `c/${newname}`,
                                    val: olddata
                                });
                            }
                        });
                        reactHandler().render();
                    })();
                })
            }, {
                name: "Use Banner IDs",
                description: "Enter Banner ID to use Banner",
                inputs: [{
                    name: "Banner ID",
                    type: "text",
                }],
                run: function(e) {
                    var t = document.createElement("iframe");

                    function a() {
                        return Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner
                    }
                    document.head.appendChild(t), window.alert = t.contentWindow.alert.bind(window), window.prompt = t.contentWindow.prompt.bind(window), t.remove(), a().stateNode.props.liveGameController.setVal({
                        path: "c/" + a().stateNode.props.client.name + "/bg",
                        val: e
                    })
                }
            }, {
                name: "Get Daily Rewards",
                description: "Gets max daily tokens and xp",
                run: async function() {
                    var e, t, o;
                    window.location.href.includes("play.blooket.com") ? (e = ["60101da869e8c70013913b59", "625db660c6842334835cb4c6", "60268f8861bd520016eae038", "611e6c804abdf900668699e3", "60ba5ff6077eb600221b7145", "642467af9b704783215c1f1b", "605bd360e35779001bf57c5e", "6234cc7add097ff1c9cff3bd", "600b1491d42a140004d5215a", "5db75fa3f1fa190017b61c0c", "5fac96fe2ca0da00042b018f", "600b14d8d42a140004d52165", "5f88953cdb209e00046522c7", "600b153ad42a140004d52172", "5fe260e72a505b00040e2a11", "5fe3d085a529560004cd3076", "5f5fc017aee59500041a1456", "608b0a5863c4f2001eed43f4", "5fad491512c8620004918ace", "5fc91a9b4ea2e200046bd49a", "5c5d06a7deebc70017245da7", "5ff767051b68750004a6fd21", "5fdcacc85d465a0004b021b9", "5fb7eea20bd44300045ba495"][Math.floor(24 * Math.random())], t = (e, t) => Math.floor(Math.random() * (t - e + 1)) + e, o = (await fetch("https://play.blooket.com/api/playersessions/solo", {
                        body: JSON.stringify({
                            gameMode: "Factory",
                            questionSetId: e
                        }),
                        method: "POST",
                        credentials: "include"
                    }).then(e => e.json()).catch(() => x("There was an error creating a solo game.")))["t"], await fetch("https://play.blooket.com/api/playersessions/landings", {
                        body: JSON.stringify({
                            t: o
                        }),
                        method: "POST",
                        credentials: "include"
                    }).catch(() => x("There was an error when landing.")), await fetch("https://play.blooket.com/api/playersessions/questions?t=" + o, {
                        credentials: "include"
                    }), await fetch("https://play.blooket.com/api/gamequestionsets?gameId=" + e, {
                        credentials: "include"
                    }), await fetch("https://play.blooket.com/api/users/factorystats", {
                        body: JSON.stringify({
                            t: o,
                            place: 1,
                            cash: t(1e7, 1e8),
                            playersDefeated: 0,
                            correctAnswers: t(500, 2e3),
                            upgrades: t(250, 750),
                            blookUsed: T().props.user.data.blook.name,
                            nameUsed: "You",
                            mode: "Time-Solo"
                        }),
                        method: "PUT",
                        credentials: "include"
                    }).catch(() => x("There was an error when spoofing stats.")), await fetch("https://play.blooket.com/api/users/add-rewards", {
                        body: JSON.stringify({
                            t: o,
                            addedTokens: 500,
                            addedXp: 300
                        }),
                        method: "PUT",
                        credentials: "include"
                    }).then(e => e.json()).then(({
                        dailyReward: e
                    }) => x(`Added max tokens and xp, and got ${e} daily wheel tokens!`)).catch(() => x("There was an error when adding rewards."))) : (x("This cheat only works on play.blooket.com, opening a new tab."), window.open("https://play.blooket.com/"))
                }
            }, {
                name: "Use Any Blook",
                description: "Allows you to play as any blook",
                data: null,
                getBlooks(t, e) {
                    if (!this.data?.Black) {
                        t = t ? "keys" : "entries";
                        const o = Object[t],
                            a = this;
                        Object[t] = function(e) {
                            return (e.Chick ? (a.data = e, Object[t] = o) : o).call(this, e)
                        }, e.render()
                    }
                },
                run: function() {
                    const o = T();
                    var e = window.location.pathname.startsWith("/play/lobby");
                    return !e && window.location.pathname.startsWith("/blooks") || e ? (this.getBlooks(e, o), e ? o.setState({
                        unlocks: Object.keys(this.data)
                    }) : void o.setState({
                        blookData: Object.keys(this.data).reduce((e, t) => (e[t] = o.state.blookData[t] || 1, e), {}),
                        allSets: Object.values(this.data).reduce((e, t) => t.set && e.includes(t.set) ? e : e.concat(t.set), [])
                    })) : x("This only works in lobbies or the dashboard blooks page.")
                }
            }, {
                name: "Remove all Taken Blooks",
                description: "Removes all taken blooks, allowing you to use any taken blook. Only works in lobby.",
                run: function() {
                    const stateNode = Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode;
                    stateNode.setState({
                        takenBlooks: {
                            includes: e => !1
                        }
                    });
                    stateNode.setState = function(a, b) {
                        if (a?.takenBlooks) {
                            return;
                        }
                        stateNode.updater.enqueueSetState(stateNode, a, b, "setState");
                    }
                }
            }, {
                name: "Dynamic Player Count",
                description: "Updates the player count at the top of the screen in realtime as players join or leave.",
                run: function() {
                    (async () => {
                        const stateNode = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
                        const ref = await stateNode.props.liveGameController.getDatabaseRef("")
                        ref.on("value", e => {
                            document.querySelector("div[class*='headerTextCenter']").innerHTML = `Player Count | ${Object.keys(e.val()?.c)?.length} / ${stateNode.props.client.plus ? 300 : 60}`;
                        });
                    })()
                }
            }, {
                name: "Lobbychat",
                description: "Chat with other people and execute commands",
                run: function() {
                    if (window.run) {
                        return;
                    } else {
                        window.run = true;
                    }

                    function e() {
                        return Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner
                    }
                    var t = 0,
                        a = !1;
                    document.addEventListener("keydown", function(e) {
                        "`" === e.key && (a = !a, o.style.display = a ? "none" : "block")
                    });
                    let o = document.createElement("div");
                    o.className = "chat-box", document.body.appendChild(o);
                    let r = document.createElement("div");
                    r.className = "chat-header", r.textContent = "Chat", o.appendChild(r);
                    let i = document.createElement("div");
                    i.className = "chat-body", o.appendChild(i);
                    let n = document.createElement("input");

                    function s(e) {
                        let t = document.createElement("div");
                        t.textContent = e, i.appendChild(t)
                    }
                    n.type = "text", n.className = "chat-input", n.placeholder = "Type a message...", o.appendChild(n), o.style.position = "fixed", o.style.bottom = "20px", o.style.right = "20px", o.style.width = "300px", o.style.backgroundColor = "#fff", o.style.border = "1px solid #ccc", o.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)", r.addEventListener("click", () => {
                        i.classList.toggle("open")
                    }), n.addEventListener("keydown", function(a) {
                        13 === a.keyCode && (function a(o) {
                            var r, n, l, c, d, p, u, h = function e(t) {
                                if ("/" !== t.charAt(0)) return !1;
                                var a = t.split(" "),
                                    o = a[0].replace("/", "");
                                return a.splice(0, 1), {
                                    cmd: o,
                                    args: a
                                }
                            }(o);
                            if (h) switch (h.cmd) {
                                case "cb":
                                    r = h.args.join(" "), (n = webpackJsonp.push([
                                        [], {
                                            1234(e, t, a) {
                                                t.webpack = a
                                            }
                                        },
                                        [
                                            ["1234"]
                                        ]
                                    ]).webpack("MDrD").a)[r = Object.keys(n).find(e => r.toLocaleLowerCase() === e.toLocaleLowerCase())] ? (s("Setting blook to " + r + "!"), e().stateNode.props.liveGameController.setVal({
                                        id: e().stateNode.props.client.hostId,
                                        path: "c/" + e().stateNode.props.client.name,
                                        val: {
                                            b: r
                                        }
                                    }), e().stateNode.props.client.blook = r) : s("No blook with that name was found!");
                                    break;
                                case "clear":
                                    i.innerHTML = "";
                                    break;
                                case "dumpstate":
                                    Object.keys(e().stateNode.state).map(t => {
                                        var a = e().stateNode.state[t];
                                        if (null == a) return "N/A";
                                        Array.from(a) && "object" == typeof a && (a = "[Array]"), s(t + ":" + a)
                                    }).join(";");
                                    break;
                                case "list":
                                    e().stateNode.props.liveGameController.getDatabaseVal("c").then(e => {
                                        s("Current Players(" + Object.keys(e).length + "): " + Object.keys(e).join(","))
                                    });
                                    break;
                                case "tlog":
                                    window.logsv = !window.logsv, s("SetVal log set to " + (window.logsv ? "Enabled" : "Disabled"));
                                    break;
                                case "setval":
                                    l = h.args, e().stateNode.props.liveGameController.setVal({
                                        path: "c/" + e().stateNode.props.client.name + "/" + l[0],
                                        val: l.slice(1, l.length).join(" ")
                                    });
                                    break;
                                case "setstate":
                                    c = h.args, d = {}, c.forEach(e => {
                                        var t = e.split(":");
                                        Number.isNaN(parseInt(t[1])) || parseInt(t[1]).toString() !== t[1] || (t[1] = parseInt(t[1])), d[t[0]] = t[1]
                                    }), e().stateNode.setState(d), s("Set Successful!");
                                    break;
                                case "ahelp":
                                    s("Advanced Commands: setval(sets val logged by tlog ex /setval b Chicken), tlog(toggles setval log), dumpstate(dumps react state),setstate(sets react state /setstate crypto:5 crypto2:5 etc)");
                                    break;
                                case "help":
                                    s("Available Commands: help(gives help),ahelp(advanced commands help), cb(changes blook /cb cow), list(lists players connected), dump(dumps all available info about a player, passwords, etc(/dump player)), clear(clears chat), code(gives game code), unlock(unlocks blook on lobby screen)");
                                    break;
                                case "dump":
                                    ! function t(a) {
                                        e().stateNode.props.liveGameController.getDatabaseVal("c/" + a).then(e => {
                                            null != e ? s("Dump: " + JSON.stringify(e)) : s("Player not found!")
                                        })
                                    }(h.args.join(" "));
                                    break;
                                case "unlock":
                                    p = h.args.join(" "), (u = webpackJsonp.push([
                                        [], {
                                            1234(e, t, a) {
                                                t.webpack = a
                                            }
                                        },
                                        [
                                            ["1234"]
                                        ]
                                    ]).webpack("MDrD").a)[p = Object.keys(u).find(e => p.toLocaleLowerCase() === e.toLocaleLowerCase())] ? (e().stateNode.state.unlocks.push(p), e().stateNode.forceUpdate()) : s("No blook with that name was found!");
                                    break;
                                case "code":
                                    s("Game Code: " + e().stateNode.props.client.hostId);
                                    break;
                                default:
                                    s("Unrecognized chat command!")
                            } else e().stateNode.props.liveGameController.setVal({
                                id: e().stateNode.props.client.hostId,
                                path: "c/" + e().stateNode.props.client.name + "/msg",
                                val: {
                                    i: t,
                                    msg: o
                                }
                            }), t++
                        }(a.srcElement.value), a.srcElement.value = "")
                    });
                    var l = e().stateNode.props.liveGameController._liveApp.database()._delegate._repoInternal.server_.onDataUpdate_;

                    function c(e) {
                        window.logsv && s("Path: " + e.path.split("/").splice(2, 2).join("/") + " Val: " + ("object" == typeof e.val ? JSON.stringify(e.val) : e.val))
                    }
                    e().stateNode.props.liveGameController._liveApp.database()._delegate._repoInternal.server_.onDataUpdate_ = function(e, t, a, o) {
                        var r, i;
                        console.log(e, t, a, o), r = e, null != (i = t) && r.includes("/msg") && i?.msg && (console.log(i.msg), s(r.split("/")[2] + ": " + i.msg)), l(e, t, a, o)
                    }, window.logsv = !1;
                    var d = e().stateNode.props.liveGameController.setVal;
                    e().stateNode.props.liveGameController.setVal = function() {
                        c.apply(this, arguments), d.apply(this, arguments)
                    }, e().stateNode.props.liveGameController._liveApp.database().ref(`${e().stateNode.props.liveGameController._liveGameCode}`).on("value", e => {}), s("Lobbychat successfully loaded!"), o.style.wordWrap = "break-word"
                }
            }, {
                name: "Pin Guesser",
                description: "Brute forces combinations for existing pins",
                run: function() {
                    var e = 0,
                        t = 0,
                        a = document.querySelector("div[class*='titleText']");

                    function o() {
                        return Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }())[1].children[0]._owner.stateNode
                    }! function r() {
                        let i = Math.floor(9e6 * Math.random()) + 1e6;
                        fetch(`https://fb.blooket.com/c/firebase/id?id=${i}`, {
                            method: "GET",
                            credentials: "include"
                        }).then(e => e.json()).then(n => {
                            !0 === n.success ? (console.log("Game found:", i), a.innerHTML = "Game Found!", o().setState({
                                client: {
                                    hostId: i.toString()
                                }
                            })) : (console.log("No game found for:", i), o().setState({
                                client: {
                                    hostId: i.toString()
                                }
                            }), e++, a.innerHTML = "Guesses: " + e, ++t > 15 ? (setTimeout(r, 1e3), t = 0) : r())
                        }).catch(e => {
                            alert("Error:" + e)
                        })
                    }()
                }
            }, {
                name: "Crash Game",
                description: "Crashes the host's game",
                run: function() {
                    var e = Object.values(function e(t = document.querySelector("#app")) {
                        return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                    }())[1].children[0]._owner.stateNode;
                    e.props.liveGameController.setVal({
                        path: `c/${e.props.client.name}/b/toString`,
                        val: "Crashed"
                    })
                }
            }, {
                name: "Chat",
                description: "Opens a chatroom",
                run: function() {
                    window.open("https://organizations.minnit.chat/420306182754595/c/Lobby?embed&nickname=", "_blank", "width=500,height=500,resizable=yes,scrollbars=yes,status=yes")
                }
            }, {
                name: "Every Answer Correct",
                description: "Sets every answer to be correct",
                run: function() {
                    var t = T();
                    for (let e = 0; e < t.freeQuestions.length; e++) t.freeQuestions[e].correctAnswers = t.freeQuestions[e].answers, t.questions[e].correctAnswers = t.questions[e].answers, t.props.client.questions[e].correctAnswers = t.questions[e].answers;
                    try {
                        t.forceUpdate()
                    } catch {}
                }
            }, {
                name: "Subtle Highlight Answers",
                description: "Removes the shadow from correct answers",
                run: function() {
                    var e = T(),
                        o = e.state.question || e.props.client.question;
                    let a = 0;
                    for (; a < o.answers.length;) {
                        let e = 0,
                            t = !1;
                        for (; e < o.correctAnswers.length;) {
                            if (o.answers[a] == o.correctAnswers[e]) {
                                t = !0;
                                break
                            }
                            e++
                        }
                        a++, t && (document.querySelector("[class*='answersHolder'] :nth-child(" + a + ") > div").style.boxShadow = "unset")
                    }
                }
            }, {
                name: "Remove Name Limit",
                description: "Sets the name limit to 120, which is the actual max name length limit",
                run: function() {
                    document.querySelector('input[class*="nameInput"]').maxLength = 120, x("Removed name length limit")
                }
            }, {
                name: "Remove Random Name",
                description: "Allows you to put a custom name",
                run: function() {
                    T().setState({
                        isRandom: !1,
                        client: {
                            name: ""
                        }
                    }), document.querySelector('[class*="nameInput"]')?.focus?.()
                }
            }, {
                name: "Sell Duplicate Blooks",
                description: "Sell all duplicate blooks leaving you with 1 each",
                run: async function() {
                    if (window.location.pathname.startsWith("/blooks")) {
                        if (S("Are you sure you want to sell your dupes? (Legendaries and rarer will not be sold)")) {
                            var o = T();
                            let e = Date.now(),
                                t = "";
                            for (const a in o.state.blookData)
                                if (1 < o.state.blookData[a]) {
                                    if (o.setState({
                                            blook: a,
                                            numToSell: o.state.blookData[a] - 1
                                        }), !["Uncommon", "Rare", "Epic"].includes(document.querySelector("[class*='highlightedRarity']").innerText.trim())) continue;
                                    t += `    ${a} ${o.state.blookData[a]-1}\n`, await o.sellBlook({
                                        preventDefault: () => {}
                                    }, !0)
                                } x(`(${Date.now()-e}ms) Results:\n` + t.trim())
                        }
                    } else x("This can only be ran in the Blooks page.")
                }
            }],
            voyage: [{
                name: "Heist ESP",
                description: "Shows you what's under each chest during a heist",
                type: "toggle",
                enabled: !1,
                data: null,
                imgs: null,
                run: function() {
                    this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                        var e = T();
                        if ("heist" == e.state.stage) {
                            null == this.imgs && (this.imgs = Array.prototype.map.call(Array.prototype.slice.call(document.querySelector("[class*=prizesList]").children, 1, 4), e => e.querySelector("img").src));
                            const n = Object.values(document.querySelector("[class*=modal]"))[0].return.memoizedState.memoizedState;
                            for (const t of document.querySelectorAll("[class*=boxContent] > div")) t.remove();
                            const r = Object.values(document.querySelector("[class*=modal]"))[0].return.memoizedState.next.next.memoizedState;
                            Array.prototype.forEach.call(document.querySelector("[class*=chestsWrapper]").children, (e, t) => {
                                const o = e.firstChild.firstChild;
                                if (r.includes(t)) return o.style.opacity = "";
                                o.style.opacity = "0.5";
                                let a = document.createElement("div");
                                a.innerHTML = "<img src='" + this.imgs[2 - n[t]] + "' style='max-width: 75%; max-height: 75%'></img>", a.className = "chestESP", a.style.position = "absolute", a.style.inset = "0", a.style.display = "grid", a.style.placeItems = "center", a.style.pointerEvents = "none", e.onclick = () => {
                                    a.remove(), o.style.opacity = ""
                                }, e.firstChild.prepend(a)
                            })
                        }
                    }, 50))
                }
            }, {
                name: "Max Levels",
                description: "Maxes out all islands and your boat",
                run: function() {
                    var e = T();
                    e.setState({
                        islandLevels: new Array(e.state.islandLevels.length).fill(5)
                    }, e.updateBoatLevel)
                }
            }, {
                name: "Set Doubloons",
                description: "Sets Doubloons",
                inputs: [{
                    name: "Amount",
                    type: "number"
                }],
                run: function(e) {
                    var t = T();
                    t.setState({
                        doubloons: e
                    }), t.props.liveGameController.setVal({
                        path: `c/${t.props.client.name}/d`,
                        val: e
                    })
                }
            }, {
                name: "Start Heist",
                description: "Starts a heist on someone",
                inputs: [{
                    name: "Player",
                    type: "options",
                    options: () => {
                        let e = T();
                        return e.props.liveGameController._liveApp ? new Promise(t => e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e)))) : []
                    }
                }],
                run: function(t) {
                    let o = T();
                    o.props.liveGameController.getDatabaseVal("c", function(e) {
                        e?.[t] && o.setState({
                            stage: "heist",
                            heistInfo: {
                                name: t,
                                blook: e[t].b
                            },
                            prizeAmount: Math.max(1e3, e[t].d || 0)
                        })
                    })
                }
            }, {
                name: "Swap Doubloons",
                description: "Swaps Doubloons with someone",
                inputs: [{
                    name: "Player",
                    type: "options",
                    options: () => {
                        let e = T();
                        return e.props.liveGameController._liveApp ? new Promise(t => e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e)))) : []
                    }
                }],
                run: async function(t) {
                    let o = T();
                    o.props.liveGameController.getDatabaseVal("c", function(e) {
                        e?.[t] && (o.props.liveGameController.setVal({
                            path: "c/" + o.props.client.name,
                            val: {
                                b: o.props.client.blook,
                                d: e[t].d,
                                tat: t + ":" + (e[t].d - o.state.doubloons)
                            }
                        }), o.setState({
                            doubloons: e[t].d
                        }))
                    })
                }
            }, {
                name: "Take Doubloons",
                description: "Takes Doubloons from someone",
                inputs: [{
                    name: "Player",
                    type: "options",
                    options: () => {
                        let e = T();
                        return e.props.liveGameController._liveApp ? new Promise(t => e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e)))) : []
                    }
                }],
                run: async function(t) {
                    let o = T();
                    o.props.liveGameController.getDatabaseVal("c", function(e) {
                        e?.[t] && (o.props.liveGameController.setVal({
                            path: "c/" + o.props.client.name,
                            val: {
                                b: o.props.client.blook,
                                d: o.state.doubloons + e[t].d,
                                tat: t + ":" + e[t].d
                            }
                        }), o.setState({
                            doubloons: o.state.doubloons + e[t].d
                        }))
                    })
                }
            }],
            brawl: [{
                name: "Double Enemy XP",
                description: "Doubles enemy XP drop value",
                run: function() {
                    var o = T().game.current.config.sceneConfig.physics.world.colliders._active.filter(e => e.callbackContext?.toString?.()?.includes?.("dmgCd"));
                    for (let t = 0; t < o.length; t++) {
                        var a = o[t].object2;
                        let e = a.classType.prototype.start;
                        a.classType.prototype.start = function() {
                            e.apply(this, arguments), this.val *= 2
                        }, a.children.entries.forEach(e => e.val *= 2)
                    }
                }
            }, {
                name: "Half Enemy Speed",
                description: "Makes enemies move 2x slower",
                run: function() {
                    var o = T().game.current.config.sceneConfig.physics.world.colliders._active.filter(e => e.callbackContext?.toString?.()?.includes?.("dmgCd"));
                    for (let t = 0; t < o.length; t++) {
                        var a = o[t].object2;
                        let e = a.classType.prototype.start;
                        a.classType.prototype.start = function() {
                            e.apply(this, arguments), this.speed *= .5
                        }, a.children.entries.forEach(e => e.speed *= .5)
                    }
                }
            }, {
                name: "Instant Kill",
                description: "Sets all enemies health to 1",
                run: function() {
                    var o = T().game.current.config.sceneConfig.physics.world.colliders._active.filter(e => e.callbackContext?.toString?.()?.includes?.("dmgCd"));
                    for (let t = 0; t < o.length; t++) {
                        var a = o[t].object2;
                        let e = a.classType.prototype.start;
                        a.classType.prototype.start = function() {
                            e.apply(this, arguments), this.hp = 1
                        }, a.children.entries.forEach(e => e.hp = 1)
                    }
                }
            }, {
                name: "Invincibility",
                description: "Makes you invincible",
                run: function() {
                    for (const e of T().game.current.config.sceneConfig.physics.world.colliders._active.filter(e => e.callbackContext?.toString().includes("invulnerableTime") || e.callbackContext?.toString().includes("dmgCd"))) e.collideCallback = () => {}
                }
            }, {
                name: "Kill Enemies",
                description: "Kills all current enemies",
                run: function() {
                    T().game.current.config.sceneConfig.physics.world.bodies.entries.forEach(e => e?.gameObject?.receiveDamage?.(e.gameObject.hp, 1))
                }
            }, {
                name: "Magnet",
                description: "Pulls all xp towards you",
                run: function() {
                    T().game.current.config.sceneConfig.physics.world.colliders._active.find(e => e.collideCallback?.toString().includes("magnetTime")).collideCallback({
                        active: !0
                    }, {
                        active: !0,
                        setActive() {},
                        setVisible() {}
                    })
                }
            }, {
                name: "Max Current Abilities",
                description: "Maxes out all your current abilities",
                run: function() {
                    const o = T();
                    for (var [t, a] of Object.entries(o.state.abilities))
                        for (let e = 0; e < 10 - a; e++) o.game.current.config.sceneConfig.game.events.emit("level up", t, o.state.abilities[t]++);
                    o.setState({
                        level: o.game.current.config.sceneConfig.level = [1, 3, 5, 10, 15, 25, 35].sort((e, t) => Math.abs(e - o.state.level) - Math.abs(t - o.state.level))[0] - 1
                    })
                }
            }, {
                name: "Next Level",
                description: "Skips to the next level",
                run: function() {
                    var e = T(),
                        {
                            object1: t,
                            object2: o
                        } = e.game.current.config.sceneConfig.physics.world.colliders._active.find(e => e.collideCallback?.toString().includes('emit("xp'));
                    o.get().spawn(t.x, t.y, (1 === (o = e.state.level) ? 1 : o < 5 ? 5 : o < 10 ? 10 : o < 20 ? 20 : o < 30 ? 30 : o < 40 ? 40 : o < 50 ? 50 : 100) - e.xp)
                }
            }, {
                name: "Remove Obstacles",
                description: "Removes all rocks and obstacles",
                run: function() {
                    T().game.current.config.sceneConfig.physics.world.bodies.entries.forEach(e => {
                        try {
                            e.gameObject.frame.texture.key.includes("obstacle") && e.gameObject.destroy()
                        } catch {}
                    })
                }
            }, {
                name: "Reset Health",
                description: "Resets health and gives invincibility for 3 seconds",
                run: function() {
                    T().game.current.events._events.respawn.fn()
                }
            }, {
                name: "Set XP",
                description: "Sets amount of XP",
                inputs: [{
                    name: "XP",
                    type: "number"
                }],
                run: function(e) {
                    var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                    t.setState({
                        xp: e,
                        totalXp: e
                    }), t.xp = e, t.totalXp = e, t.props?.liveGameController.setVal({
                        path: "c/".concat(t.props.client.name),
                        val: {
                            b: t.props.client.blook,
                            xp: e
                        }
                    })
                }
            }, {
                name: "Set Level",
                description: "Sets your level",
                inputs: [{
                    name: "XP",
                    type: "number"
                }],
                run: function(e) {
                    Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                        level: e
                    })
                }
            }],
            cafe: [{
                name: "Max Items",
                description: "Maxes out items in the shop (Only usable in the shop)",
                run: function() {
                    var e;
                    "/cafe/shop" !== window.location.pathname ? x("This can only be run in the shop") : (e = T()).setState({
                        items: Object.keys(e.state.items).reduce((e, t) => (e[t] = 5, e), {})
                    })
                }
            }, {
                name: "Remove Customers",
                description: "Skips the current customers (Not usable in the shop)",
                run: function() {
                    const o = T();
                    o.state.customers.forEach((e, t) => window.setTimeout(() => e.blook && o.removeCustomer(t, !0), 250 * t))
                }
            }, {
                name: "Reset Abilities",
                description: "Resets used abilities in shop (Only usable in the shop)",
                run: function() {
                    var e;
                    "/cafe/shop" !== window.location.pathname ? x("This can only be run in the shop") : (e = T()).setState({
                        abilities: Object.keys(e.state.abilities).reduce((e, t) => (e[t] = 5, e), {})
                    })
                }
            }, {
                name: "Set Cash",
                description: "Sets cafe cash",
                inputs: [{
                    name: "Amount",
                    type: "number"
                }],
                run: function(e) {
                    var t = T();
                    t.setState({
                        cafeCash: e
                    }), t.props.liveGameController.setVal({
                        path: `c/${t.props.client.name}/ca`,
                        val: e
                    })
                }
            }, {
                name: "Spam Attack Player",
                description: "Attacks the player to make the game unplayable",
                inputs: [{
                    name: "Player's Name",
                    type: "text"
                }],
                type: "toggle",
                enabled: false,
                data: null,
                run: function(name) {
                    if (this.enabled) {
                        this.enabled = false;
                        clearInterval(this.data);
                        this.data = null;
                    } else {
                        this.enabled = true;

                        function reactHandler() {
                            return Object.values(document.querySelector('body div[class*="_body"]'))[1].children[0]._owner;
                        }

                        var action = name + ":inspect";

                        function spamAction() {
                            var handler = reactHandler();
                            if (handler && handler.stateNode && handler.stateNode.props && handler.stateNode.props.liveGameController) {
                                handler.stateNode.props.liveGameController.setVal({
                                    id: handler.stateNode.props.client.hostId,
                                    path: "c/" + handler.stateNode.props.client.name + "/tat",
                                    val: action
                                });
                            }
                        }

                        this.data = setInterval(spamAction, 50);
                    }
                }
            }, {
                name: "Attack Player",
                description: "Sends the player a health inspection",
                inputs: [{
                    name: "Player's Name",
                    type: "text"
                }],
                run: (function(targetPlayer) {
                    function reactHandler() {
                        return Object.values(document.querySelector('body div[class*="_body"]'))[1].children[0]._owner;
                    }

                    reactHandler().stateNode.props.liveGameController.setVal({
                        id: reactHandler().stateNode.props.client.hostId,
                        path: "c/" + reactHandler().stateNode.props.client.name + "/tat",
                        val: targetPlayer + ":inspect"
                    });
                })
            }, {
                name: "Stock Food",
                description: "Stocks all food to 99 (Not usable in the shop)",
                run: function() {
                    var e;
                    "/cafe" !== window.location.pathname ? x("This can't be run in the shop") : (e = T()).setState({
                        foods: e.state.foods.map(e => ({
                            ...e,
                            stock: 99,
                            level: 5
                        }))
                    })
                }
            }],
            crypto: [{
                name: "Choice ESP",
                description: "Shows what each choice will give you",
                type: "toggle",
                enabled: !1,
                data: null,
                run: function() {
                    this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                        var e, t = document.querySelector("[class*=feedbackContainer]");
                        t.children.length <= 4 && ((e = document.createElement("div")).style.color = "white", e.style.fontFamily = "Inconsolata,Helvetica,monospace,sans-serif", e.style.fontSize = "2em", e.style.display = "flex", e.style.justifyContent = "center", e.style.marginTop = "675px", e.innerText = T().state.choices[0].text, t.append(e))
                    }, 50))
                }
            }, {
                name: "Password ESP",
                description: "Highlights the correct password",
                type: "toggle",
                enabled: !1,
                data: null,
                run: function() {
                    this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                        var e = T()["state"];
                        if ("hack" == e.stage)
                            for (const t of document.querySelector("div[class*=buttonContainer]").children) t.innerText != e.correctPassword && (t.style.outlineColor = "rgba(255, 64, 64, 0.8)", t.style.backgroundColor = "rgba(255, 64, 64, 0.8)", t.style.textShadow = "0 0 1px #f33")
                    }, 50))
                }
            }, {
                name: "Always Triple",
                description: "Always get triple crypto",
                type: "toggle",
                enabled: !1,
                data: null,
                run: function() {
                    this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(e => T().setState(e), 25, {
                        choices: [{
                            type: "mult",
                            val: 3,
                            rate: .075,
                            blook: "Brainy Bot",
                            text: "Triple Crypto"
                        }]
                    }))
                }
            }, {
                name: "Always Hack",
                description: "Always get hack",
                type: "toggle",
                enabled: !1,
                data: null,
                run: function() {
                    this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                        choices: [{
                            type: "hack",
                            val: 3,
                            rate: .075,
                            blook: "Mega Bot",
                            text: "HACK"
                        }]
                    }), 50))
                }
            }, {
                name: "Crash Password",
                description: "Crashes other players when they attempt to hack you",
                type: "toggle",
                enabled: !1,
                data: null,
                run: function() {
                    var e = Object.values(function e(t = document.querySelector("#app")) {
                        return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                    }())[1].children[0]._owner.stateNode;
                    if (this.enabled) this.enabled = !1, clearInterval(this.data), this.data = null, e.props.liveGameController.setVal({
                        path: `c/${e.props.client.name}/p`,
                        val: e.state?.password
                    });
                    else {
                        this.enabled = !0;
                        let t = () => {
                            e.props.liveGameController.setVal({
                                path: `c/${e.props.client.name}/p/toString`,
                                val: "crash"
                            })
                        };
                        this.data = setInterval(t, 25)
                    }
                }
            }, {
                name: "Auto Guess",
                description: "Automatically guess the correct password",
                type: "toggle",
                enabled: !1,
                data: null,
                run: function() {
                    this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                        var e = T()["state"];
                        if ("hack" == e.stage)
                            for (const t of document.querySelector("div[class*=buttonContainer]").children) t.innerText == e.correctPassword && t.click()
                    }, 50))
                }
            }, {
                name: "Remove Hack",
                description: "Removes an attacking hack",
                run: function() {
                    T().setState({
                        hack: ""
                    })
                }
            }, {
                name: "Set Crypto",
                description: "Sets crypto",
                inputs: [{
                    name: "Amount",
                    type: "number"
                }],
                run: function(e) {
                    var t = T();
                    t.setState({
                        crypto: e,
                        crypto2: e
                    }), t.props.liveGameController.setVal({
                        path: `c/${t.props.client.name}/cr`,
                        val: e
                    })
                }
            }, {
                name: "Set Password",
                description: "Sets hacking password",
                inputs: [{
                    name: "Custom Password",
                    type: "string"
                }],
                run: function(e) {
                    var t = T();
                    t.setState({
                        password: e
                    }), t.props.liveGameController.setVal({
                        path: `c/${t.props.client.name}/p`,
                        val: e
                    })
                }
            }, {
                name: "Set Screen Text",
                description: "Makes the whole screen filled with text",
                inputs: [{
                    name: "Text",
                    type: "text",
                }],
                run: function(e) {
                    let t = document.createElement("iframe");
                    document.body.append(t), window.prompt = t.contentWindow.prompt.bind(window), t.remove();
                    var a = Object.values(function e(t = document.querySelector("#app")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }())[1].children[0]._owner.stateNode,
                        o = [];
                    for (let r = 0; r < 999; r++) o.push(e);
                    a.props.liveGameController.setVal({
                        path: `c/${a.props.client.name}/cr`,
                        val: `9999999999999999999999999999999999999999999999${o.join(" ")}`
                    })
                }
            }, {
                name: "Steal Player's Crypto",
                description: "Steals all of someone's crypto",
                inputs: [{
                    name: "Player",
                    type: "options",
                    options: () => {
                        let e = T();
                        return e.props.liveGameController._liveApp ? new Promise(t => e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e)))) : []
                    }
                }],
                run: function(o) {
                    let a = T();
                    a.props.liveGameController.getDatabaseVal("c", e => {
                        let t;
                        e && (t = Object.entries(e).find(e => e[0].toLowerCase() == o.toLowerCase())) && (e = t[1].cr, a.setState({
                            crypto: a.state.crypto + e,
                            crypto2: a.state.crypto + e
                        }), a.props.liveGameController.setVal({
                            path: "c/" + a.props.client.name,
                            val: {
                                b: a.props.client.blook,
                                p: a.state.password,
                                cr: a.state.crypto + e,
                                tat: t[0] + ":" + e
                            }
                        }))
                    })
                }
            }],
            defense: [{
                name: "Earthquake",
                description: "Shuffles around towers",
                run: function() {
                    let a = T(),
                        n = (a.setState({
                            eventName: "Earthquake",
                            event: {
                                short: "e",
                                color: "#805500",
                                icon: "fas fa-mountain",
                                desc: "All of your towers get mixed up",
                                rate: .02
                            },
                            buyTowerName: "",
                            buyTower: {}
                        }, () => a.eventTimeout = setTimeout(() => a.setState({
                            event: {},
                            eventName: ""
                        }), 6e3)), a.tiles.forEach(o => o.forEach((e, t) => 3 == e && (o[t] = 0))), []);
                    for (let t = 0; t < a.tiles.length; t++)
                        for (let e = 0; e < a.tiles[t].length; e++) 0 == a.tiles[t][e] && n.push({
                            x: e,
                            y: t
                        });
                    n.sort(() => Math.random() - Math.random()), a.towers.forEach(e => {
                        var {
                            x: t,
                            y: o
                        } = n.pop();
                        e.move(t, o, a.tileSize), a.tiles[o][t] = 3
                    })
                }
            }, {
                name: "Max Tower Stats",
                description: "Makes all placed towers overpowered",
                run: function() {
                    T().towers.forEach(e => {
                        e.range = 100, e.fullCd = e.cd = 0, e.damage = 1e6
                    })
                }
            }, {
                name: "Remove Ducks",
                description: "Removes ducks",
                run: function() {
                    let {
                        ducks: e,
                        tiles: t
                    } = T();
                    e.forEach(e => t[e.y][e.x] = 0), e.length = 0
                }
            }, {
                name: "Remove Enemies",
                description: "Removes all the enemies",
                run: function() {
                    var e = T();
                    e.enemies = e.futureEnemies = []
                }
            }, {
                name: "Remove Obstacles",
                description: "Lets you place towers anywhere",
                run: function() {
                    var e = T();
                    e.tiles = e.tiles.map(e => e.fill(0))
                }
            }, {
                name: "Set Damage",
                description: "Sets damage",
                inputs: [{
                    name: "Damage",
                    type: "number"
                }],
                run: function(e) {
                    T().dmg = e
                }
            }, {
                name: "Set Round",
                description: "Sets the current round",
                inputs: [{
                    name: "Round",
                    type: "number"
                }],
                run: function(e) {
                    T().setState({
                        round: e
                    })
                }
            }, {
                name: "Set Tokens",
                description: "Sets the amount of tokens you have",
                inputs: [{
                    name: "Tokens",
                    type: "number"
                }],
                run: function(e) {
                    T().setState({
                        tokens: e
                    })
                }
            }],
            defense2: [{
                name: "Max Tower Stats",
                description: "Makes all placed towers overpowered",
                run: function() {
                    T().state.towers.forEach(e => {
                        if (e.stats.dmg = 1e6, e.stats.fireRate = 50, e.stats.ghostDetect = !0, e.stats.maxTargets = 1e6, e.stats.numProjectiles &&= 100, e.stats.range = 100, e.stats.auraBuffs)
                            for (const t in e.stats.auraBuffs) e.stats.auraBuffs[t] *= 100
                    })
                }
            }, {
                name: "Kill Enemies",
                description: "Kills all the enemies",
                run: function() {
                    var e = T();
                    e.game.current.config.sceneConfig.enemyQueue.length = 0, e.game.current.config.sceneConfig.physics.world.bodies.entries.forEach(e => e?.gameObject?.receiveDamage?.(e.gameObject.hp, 1))
                }
            }, {
                name: "Set Coins",
                description: "Sets coins",
                inputs: [{
                    name: "Coins",
                    type: "number"
                }],
                run: function(e) {
                    T().setState({
                        coins: e
                    })
                }
            }, {
                name: "Set Health",
                description: "Sets the amount of health you have",
                inputs: [{
                    name: "Health",
                    type: "number"
                }],
                run: function(e) {
                    T().setState({
                        health: e
                    })
                }
            }, {
                name: "Set Round",
                description: "Sets the current round",
                inputs: [{
                    name: "Round",
                    type: "number"
                }],
                run: function(e) {
                    T().setState({
                        round: e
                    })
                }
            }],
            dinos: [{
                name: "Auto Choose",
                description: "Automatically choose the best fossil when excavating",
                type: "toggle",
                enabled: !1,
                data: null,
                rand(a, e) {
                    for (var n = []; n.length < e;) {
                        var r = Math.random();
                        let t = 0,
                            o = null;
                        for (let e = 0; e < a.length; e++)
                            if ((t += a[e].rate) >= r) {
                                o = a[e];
                                break
                            } o && !n.includes(o) && n.push(o)
                    }
                    return n
                },
                run: function() {
                    this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                        try {
                            var a = T();
                            if ("excavate" === a.state.stage) {
                                a.state.choices.length || (a.state.choices = this.rand([{
                                    type: "fossil",
                                    val: 10,
                                    rate: .1,
                                    blook: "Amber"
                                }, {
                                    type: "fossil",
                                    val: 25,
                                    rate: .1,
                                    blook: "Dino Egg"
                                }, {
                                    type: "fossil",
                                    val: 50,
                                    rate: .175,
                                    blook: "Dino Fossil"
                                }, {
                                    type: "fossil",
                                    val: 75,
                                    rate: .175,
                                    blook: "Stegosaurus"
                                }, {
                                    type: "fossil",
                                    val: 100,
                                    rate: .15,
                                    blook: "Velociraptor"
                                }, {
                                    type: "fossil",
                                    val: 125,
                                    rate: .125,
                                    blook: "Brontosaurus"
                                }, {
                                    type: "fossil",
                                    val: 250,
                                    rate: .075,
                                    blook: "Triceratops"
                                }, {
                                    type: "fossil",
                                    val: 500,
                                    rate: .025,
                                    blook: "Tyrannosaurus Rex"
                                }, {
                                    type: "mult",
                                    val: 1.5,
                                    rate: .05
                                }, {
                                    type: "mult",
                                    val: 2,
                                    rate: .025
                                }], 3));
                                let t = 0,
                                    o = -1;
                                for (let e = 0; e < a.state.choices.length; e++) {
                                    var {
                                        type: n,
                                        val: r
                                    } = a.state.choices[e], s = ("fossil" == n ? a.state.fossils + r * a.state.fossilMult : a.state.fossils * r) || 0;
                                    s <= t && "mult" != n || (t = s, o = e + 1)
                                }
                                document.querySelector('div[class*=rockRow] > div[role="button"]:nth-child(' + o + ")").click()
                            }
                        } catch {}
                    }, 50))
                }
            }, {
                name: "Rock ESP",
                description: "Shows what is under the rocks",
                type: "toggle",
                enabled: !1,
                data: null,
                run: (() => {
                    const o = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"],
                        r = e => {
                            let t = "";
                            for (; 0 < e;) t = o[e % 10] + t, e = ~~(e / 10);
                            return t
                        };
                    return function() {
                        this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                            let a = T();
                            const e = document.querySelector('[class*="rockButton"]').parentElement.children;
                            Array.prototype.every.call(e, e => e.querySelector("div")) || a.setState({
                                choices: function(a, e) {
                                    for (var n = []; n.length < e;) {
                                        var r = Math.random();
                                        let t = 0,
                                            o;
                                        for (let e = 0; e < a.length; e++)
                                            if ((t += a[e].rate) >= r) {
                                                o = a[e];
                                                break
                                            } o && !n.includes(o) && n.push(o)
                                    }
                                    return n
                                }([{
                                    type: "fossil",
                                    val: 10,
                                    rate: .1,
                                    blook: "Amber"
                                }, {
                                    type: "fossil",
                                    val: 25,
                                    rate: .1,
                                    blook: "Dino Egg"
                                }, {
                                    type: "fossil",
                                    val: 50,
                                    rate: .175,
                                    blook: "Dino Fossil"
                                }, {
                                    type: "fossil",
                                    val: 75,
                                    rate: .175,
                                    blook: "Stegosaurus"
                                }, {
                                    type: "fossil",
                                    val: 100,
                                    rate: .15,
                                    blook: "Velociraptor"
                                }, {
                                    type: "fossil",
                                    val: 125,
                                    rate: .125,
                                    blook: "Brontosaurus"
                                }, {
                                    type: "fossil",
                                    val: 250,
                                    rate: .075,
                                    blook: "Triceratops"
                                }, {
                                    type: "fossil",
                                    val: 500,
                                    rate: .025,
                                    blook: "Tyrannosaurus Rex"
                                }, {
                                    type: "mult",
                                    val: 1.5,
                                    rate: .05
                                }, {
                                    type: "mult",
                                    val: 2,
                                    rate: .025
                                }], 3)
                            }, () => {
                                Array.prototype.forEach.call(e, (e, t) => {
                                    var t = a.state.choices[t],
                                        o = (e.querySelector("div") && e.querySelector("div").remove(), document.createElement("div"));
                                    o.style.color = "white", o.style.fontFamily = "Macondo", o.style.fontSize = "1em", o.style.display = "flex", o.style.justifyContent = "center", o.style.transform = "translateY(25px)", o.innerText = "fossil" === t.type ? `+${99999999<Math.round(t.val*a.state.fossilMult)?function(o){let a=o.toString();if(1e3<=o){var e=["","K","M","B","T"],n=Math.floor(Math.floor((Math.log(o)/Math.log(10)).toPrecision(14))/3);if(n<e.length){let t="";for(let e=3;1<=e;e--)if((t=parseFloat((0!=n?o/Math.pow(1e3,n):o).toPrecision(e)).toString()).replace(/[^a-zA-Z 0-9]+/g,"").length<=3)break;Number(t)% 1!=0&&(t=Number(t).toFixed(1)),a=t+e[n]}else{let e=o,t=0;for(;100<=e;)e=Math.floor(e/10),t+=1;a=e/10+" × 10"+r(t+1)}}return a}(Math.round(t.val*a.state.fossilMult)):Math.round(t.val*a.state.fossilMult)} Fossils` : `x${t.val} Fossils Per Excavation`, e.append(o)
                                })
                            })
                        }, 50))
                    }
                })()
            }, {
                name: "Set Fossils",
                description: "Sets the amount of fossils you have",
                inputs: [{
                    name: "Fossils",
                    type: "number"
                }],
                run: function(e) {
                    var t = T();
                    t.setState({
                        fossils: e
                    }), t.props.liveGameController.setVal({
                        path: `c/${t.props.client.name}/f`,
                        val: e
                    })
                }
            }, {
                name: "Set Multiplier",
                description: "Sets fossil multiplier",
                inputs: [{
                    name: "Multiplier",
                    type: "number"
                }],
                run: function(e) {
                    T().setState({
                        fossilMult: e
                    })
                }
            }, {
                name: "Stop Cheating",
                description: "Undoes cheating so that you can't be caught",
                run: function() {
                    var e = T();
                    e.setState({
                        isCheating: !1
                    }), e.props.liveGameController.setVal({
                        path: `c/${e.props.client.name}/ic`,
                        val: !1
                    })
                }
            }],
            doom: [{
                name: "Fill Deck",
                description: "Fills your deck with every maxed out card and artifact (Only works on towers page)",
                run: function() {
                    if ("/tower/map" == window.location.pathname) {
                        var e = T();
                        e.props.tower.artifacts = "Medical Kit|Fury Relic|Survival Guide|Steel Socks|Piggy Bank|Lucky Feather|Coupon|Cheese|Tasty Egg|Training Weights|Mighty Shield|Toxic Waste|Lifeline Totem|Cursed Hourglass|Band-Aid|Elder Coins|Captain's Anchor|Chess Pieces|Pink Hippo|Anorak's Wizard Cap|Dave's Doggo|Anubis' Obelisk|Farm Tractor|Magic Seedling|Just A Bone|Cozy Igloo|King's Crown|Sacred Scroll".split("|"), e.props.tower.cards = "Chick,🌽|Chicken,🌽|Cow,🌽|Goat,🌽|Horse,🌽|Pig,🌽|Sheep,🌽|Duck,🌽|Dog,🌽|Cat,🐾|Rabbit,🐾|Goldfish,🐾|Hamster,🐾|Turtle,🐾|Kitten,🐾|Puppy,🐾|Bear,🌲|Moose,🌲|Fox,🌲|Raccoon,🌲|Squirrel,🌲|Owl,🌲|Hedgehog,🌲|Baby Penguin,❄️|Penguin,❄️|Arctic Fox,❄️|Snowy Owl,❄️|Polar Bear,❄️|Arctic Hare,❄️|Seal,❄️|Walrus,❄️|Tiger,🌴|Panther,🌴|Cockatoo,🌴|Orangutan,🌴|Anaconda,🌴|Macaw,🌴|Jaguar,🌴|Capuchin,🌴|Toucan,🌴|Parrot,🌴|Elf,⚔️|Witch,⚔️|Wizard,⚔️|Fairy,⚔️|Slime Monster,⚔️|Jester,⚔️|Dragon,⚔️|Unicorn,⚔️|Queen,⚔️|King,⚔️|Snow Globe,☃️|Holiday Gift,☃️|Hot Chocolate,☃️|Gingerbread Man,☃️|Gingerbread House,☃️|Holiday Wreath,☃️|Snowman,☃️|Santa Claus,☃️|Two of Spades,🏰|Eat Me,🏰|Drink Me,🏰|Alice,🏰|Queen of Hearts,🏰|Dormouse,🏰|White Rabbit,🏰|Cheshire Cat,🏰|Caterpillar,🏰|Mad Hatter,🏰|King of Hearts,🏰".split("|").map(e => {
                            var [e, t] = e.split(",");
                            return {
                                strength: 20,
                                charisma: 20,
                                wisdom: 20,
                                class: t,
                                blook: e
                            }
                        });
                        try {
                            e.props.addTowerNode()
                        } catch {}
                        e.setState({
                            showDeck: !1
                        })
                    } else x("You need to be on the map to run this cheat!")
                }
            }, {
                name: "Max Cards",
                description: "Maxes out all the cards in your deck",
                run: function() {
                    if ("/tower/map" == window.location.pathname) {
                        var e = T();
                        e.props.tower.cards.forEach(e => {
                            e.strength = 20, e.charisma = 20, e.wisdom = 20
                        });
                        try {
                            e.forceUpdate()
                        } catch {}
                    } else x("You need to be on the map to run this cheat!")
                }
            }, {
                name: "Max Health",
                description: "Fills the player's health",
                run: function() {
                    "/tower/battle" == window.location.pathname ? T().setState({
                        myHealth: 100,
                        myLife: 100
                    }) : x("You need to be in battle to run this cheat!")
                }
            }, {
                name: "Max Card Stats",
                description: "Maxes out player's current card (Only works on attribute select page)",
                run: function() {
                    var e = T();
                    "select" !== e.state.phase ? x("You must be on the attribute selection page!") : e.setState({
                        myCard: {
                            ...e.state.myCard,
                            strength: 20,
                            charisma: 20,
                            wisdom: 20
                        }
                    })
                }
            }, {
                name: "Min Enemy Stats",
                description: "Makes the enemy card stats all 0 (Only works on attribute select page)",
                run: function() {
                    var e = T();
                    "select" !== e.state.phase ? x("You must be on the attribute selection page!") : e.setState({
                        enemyCard: {
                            ...e.state.enemyCard,
                            strength: 0,
                            charisma: 0,
                            wisdom: 0
                        }
                    })
                }
            }, {
                name: "Set Coins",
                description: "Try's to set amount of tower coins you have",
                inputs: [{
                    name: "Coins",
                    type: "number"
                }],
                run: function(e) {
                    if ("/tower/battle" == window.location.pathname) try {
                        T().props.setTowerCoins(e)
                    } catch {} else x("You need to be in battle to run this cheat!")
                }
            }],
            factory: [{
                name: "Choose Blook",
                description: "Gives you a blook",
                inputs: [{
                    name: "Blook",
                    type: "options",
                    options: [{
                        name: "Chick",
                        color: "#ffcd05",
                        class: "🌽",
                        rarity: "Common",
                        cash: [3, 7, 65, 400, 2500],
                        time: [1, 1, 1, 1, 1],
                        price: [300, 3e3, 3e4, 2e5]
                    }, {
                        name: "Chicken",
                        color: "#ed1c24",
                        class: "🌽",
                        rarity: "Common",
                        cash: [10, 40, 200, 1400, 1e4],
                        time: [5, 4, 3, 2, 1],
                        price: [570, 4e3, 5e4, 8e5]
                    }, {
                        name: "Cow",
                        color: "#58595b",
                        class: "🌽",
                        rarity: "Common",
                        cash: [25, 75, 1500, 25e3, 25e4],
                        time: [15, 10, 10, 10, 5],
                        price: [500, 9500, 16e4, 4e6]
                    }, {
                        name: "Duck",
                        color: "#4ab96d",
                        class: "🌽",
                        rarity: "Common",
                        cash: [4, 24, 200, 3e3, 4e4],
                        time: [3, 3, 3, 3, 3],
                        price: [450, 4200, 7e4, 11e5]
                    }, {
                        name: "Goat",
                        color: "#c59a74",
                        class: "🌽",
                        rarity: "Common",
                        cash: [5, 28, 200, 1300, 12e3],
                        time: [3, 3, 2, 2, 2],
                        price: [500, 6400, 45e3, 5e5]
                    }, {
                        name: "Horse",
                        color: "#995b3c",
                        class: "🌽",
                        rarity: "Common",
                        cash: [5, 20, 270, 1800, 15e3],
                        time: [2, 2, 2, 2, 2],
                        price: [550, 8200, 65e3, 6e5]
                    }, {
                        name: "Pig",
                        color: "#f6a9cb",
                        class: "🌽",
                        rarity: "Common",
                        cash: [20, 50, 1300, 8e3, 8e4],
                        time: [7, 7, 7, 7, 5],
                        price: [400, 11e3, 8e4, 13e5]
                    }, {
                        name: "Sheep",
                        color: "#414042",
                        class: "🌽",
                        rarity: "Common",
                        cash: [6, 25, 250, 1500, 11e3],
                        time: [3, 3, 3, 2, 2],
                        price: [500, 5e3, 5e4, 43e4]
                    }, {
                        name: "Cat",
                        color: "#f49849",
                        class: "🐾",
                        rarity: "Common",
                        cash: [5, 18, 170, 1700, 13e3],
                        time: [2, 2, 2, 2, 2],
                        price: [480, 5500, 6e4, 5e5]
                    }, {
                        name: "Dog",
                        color: "#995b3c",
                        class: "🐾",
                        rarity: "Common",
                        cash: [7, 25, 220, 1900, 9e3],
                        time: [3, 3, 2, 2, 1],
                        price: [460, 6600, 7e4, 73e4]
                    }, {
                        name: "Goldfish",
                        color: "#f18221",
                        class: "🐾",
                        rarity: "Common",
                        cash: [5, 40, 350, 3500, 35e3],
                        time: [3, 3, 3, 3, 3],
                        price: [750, 7200, 84e3, 95e4]
                    }, {
                        name: "Rabbit",
                        color: "#e7bf9a",
                        class: "🐾",
                        rarity: "Common",
                        cash: [3, 18, 185, 800, 7e3],
                        time: [2, 2, 2, 1, 1],
                        price: [500, 5800, 56e3, 55e4]
                    }, {
                        name: "Hamster",
                        color: "#ce9176",
                        class: "🐾",
                        rarity: "Common",
                        cash: [10, 45, 450, 4500, 45e3],
                        time: [4, 4, 4, 4, 4],
                        price: [650, 6500, 8e4, 93e4]
                    }, {
                        name: "Turtle",
                        color: "#619a3c",
                        class: "🐾",
                        rarity: "Common",
                        cash: [23, 120, 1400, 15e3, 17e4],
                        time: [10, 10, 10, 10, 10],
                        price: [700, 8500, 11e4, 13e5]
                    }, {
                        name: "Puppy",
                        color: "#414042",
                        class: "🐾",
                        rarity: "Common",
                        cash: [4, 10, 75, 500, 3e3],
                        time: [1, 1, 1, 1, 1],
                        price: [450, 4e3, 35e3, 25e4]
                    }, {
                        name: "Kitten",
                        color: "#58595b",
                        class: "🐾",
                        rarity: "Common",
                        cash: [4, 8, 60, 400, 2e3],
                        time: [1, 1, 1, 1, 1],
                        price: [350, 3500, 26e3, 17e4]
                    }, {
                        name: "Bear",
                        color: "#995b3c",
                        class: "🌲",
                        rarity: "Common",
                        cash: [12, 70, 550, 4500, 1e5],
                        time: [7, 7, 6, 5, 5],
                        price: [550, 5500, 63e3, 16e5]
                    }, {
                        name: "Moose",
                        color: "#995b3c",
                        class: "🌲",
                        rarity: "Common",
                        cash: [8, 45, 400, 3500, 26e3],
                        time: [5, 5, 4, 4, 3],
                        price: [520, 6500, 58e3, 7e5]
                    }, {
                        name: "Fox",
                        color: "#f49849",
                        class: "🌲",
                        rarity: "Common",
                        cash: [7, 15, 80, 550, 3e3],
                        time: [2, 2, 1, 1, 1],
                        price: [400, 4e3, 36e3, 24e4]
                    }, {
                        name: "Raccoon",
                        color: "#6d6e71",
                        class: "🌲",
                        rarity: "Common",
                        cash: [5, 14, 185, 1900, 19e3],
                        time: [2, 2, 2, 2, 2],
                        price: [400, 5e3, 71e3, 8e5]
                    }, {
                        name: "Squirrel",
                        color: "#d25927",
                        class: "🌲",
                        rarity: "Common",
                        cash: [3, 10, 65, 470, 2600],
                        time: [1, 1, 1, 1, 1],
                        price: [420, 3600, 32e3, 21e4]
                    }, {
                        name: "Owl",
                        color: "#594a42",
                        class: "🌲",
                        rarity: "Common",
                        cash: [4, 17, 155, 1500, 15e3],
                        time: [2, 2, 2, 2, 2],
                        price: [500, 4800, 55e3, 58e4]
                    }, {
                        name: "Hedgehog",
                        color: "#3f312b",
                        class: "🌲",
                        rarity: "Common",
                        cash: [11, 37, 340, 2200, 3e4],
                        time: [5, 4, 3, 2, 2],
                        price: [540, 7e3, 77e3, 12e5]
                    }, {
                        name: "Seal",
                        color: "#7ca1d5",
                        class: "❄️",
                        rarity: "Common",
                        cash: [6, 17, 150, 1200, 13e3],
                        time: [2, 2, 2, 2, 2],
                        price: [480, 4500, 43e3, 52e4]
                    }, {
                        name: "Arctic Fox",
                        color: "#7ca1d5",
                        class: "❄️",
                        rarity: "Common",
                        cash: [5, 18, 180, 850, 8500],
                        time: [2, 2, 2, 1, 1],
                        price: [520, 550, 61e3, 68e4]
                    }, {
                        name: "Snowy Owl",
                        color: "#feda3f",
                        class: "❄️",
                        rarity: "Common",
                        cash: [5, 20, 190, 1900, 16e3],
                        time: [3, 3, 2, 2, 2],
                        price: [370, 5300, 76e3, 62e4]
                    }, {
                        name: "Arctic Hare",
                        color: "#7ca1d5",
                        class: "❄️",
                        rarity: "Common",
                        cash: [6, 19, 85, 900, 7e3],
                        time: [2, 2, 1, 1, 1],
                        price: [540, 5200, 66e3, 55e4]
                    }, {
                        name: "Penguin",
                        color: "#fb8640",
                        class: "❄️",
                        rarity: "Common",
                        cash: [4, 21, 310, 3200, 33e3],
                        time: [3, 3, 3, 3, 3],
                        price: [400, 6500, 76e3, 87e4]
                    }, {
                        name: "Baby Penguin",
                        color: "#414042",
                        class: "❄️",
                        rarity: "Common",
                        cash: [3, 8, 70, 450, 2700],
                        time: [1, 1, 1, 1, 1],
                        price: [420, 3300, 33e3, 23e4]
                    }, {
                        name: "Polar Bear",
                        color: "#7ca1d5",
                        class: "❄️",
                        rarity: "Common",
                        cash: [12, 75, 700, 6500, 85e3],
                        time: [8, 7, 6, 5, 5],
                        price: [630, 7e3, 91e3, 14e5]
                    }, {
                        name: "Walrus",
                        color: "#7d4f33",
                        class: "❄️",
                        rarity: "Common",
                        cash: [11, 46, 420, 3700, 51e3],
                        time: [5, 5, 4, 4, 4],
                        price: [550, 6200, 68e3, 1e6]
                    }, {
                        name: "Tiger",
                        color: "#f18221",
                        class: "🌴",
                        rarity: "Common",
                        cash: [6, 20, 100, 975, 7500],
                        time: [3, 3, 1, 1, 1],
                        price: [390, 6e3, 7e4, 61e4]
                    }, {
                        name: "Jaguar",
                        color: "#fbb040",
                        class: "🌴",
                        rarity: "Common",
                        cash: [8, 28, 230, 1600, 17e3],
                        time: [3, 3, 2, 2, 2],
                        price: [390, 6e3, 7e4, 61e4]
                    }, {
                        name: "Toucan",
                        color: "#ffca34",
                        class: "🌴",
                        rarity: "Common",
                        cash: [9, 20, 175, 625, 3800],
                        time: [2, 2, 2, 1, 1],
                        price: [520, 4800, 42e3, 3e5]
                    }, {
                        name: "Cockatoo",
                        color: "#7ca1d5",
                        class: "🌴",
                        rarity: "Common",
                        cash: [6, 35, 160, 1700, 18e3],
                        time: [4, 4, 2, 2, 2],
                        price: [500, 5e3, 63e3, 7e5]
                    }, {
                        name: "Macaw",
                        color: "#00aeef",
                        class: "🌴",
                        rarity: "Common",
                        cash: [3, 8, 85, 850, 8500],
                        time: [1, 1, 1, 1, 1],
                        price: [480, 5400, 62e3, 63e4]
                    }, {
                        name: "Parrot",
                        color: "#ed1c24",
                        class: "🌴",
                        rarity: "Common",
                        cash: [3, 9, 90, 900, 9e3],
                        time: [1, 1, 1, 1, 1],
                        price: [540, 5700, 65e3, 69e4]
                    }, {
                        name: "Panther",
                        color: "#2f2c38",
                        class: "🌴",
                        rarity: "Common",
                        cash: [12, 28, 215, 2100, 21e3],
                        time: [5, 3, 2, 2, 2],
                        price: [530, 6500, 76e3, 87e4]
                    }, {
                        name: "Anaconda",
                        color: "#8a9143",
                        class: "🌴",
                        rarity: "Common",
                        cash: [3, 15, 85, 1500, 7600],
                        time: [1, 2, 1, 2, 1],
                        price: [410, 5100, 58e3, 59e4]
                    }, {
                        name: "Orangutan",
                        color: "#bc6234",
                        class: "🌴",
                        rarity: "Common",
                        cash: [13, 52, 570, 4300, 7e4],
                        time: [5, 5, 5, 4, 4],
                        price: [600, 7e3, 8e4, 14e5]
                    }, {
                        name: "Capuchin",
                        color: "#e0b0a6",
                        class: "🌴",
                        rarity: "Common",
                        cash: [4, 14, 160, 780, 8200],
                        time: [2, 2, 2, 1, 1],
                        price: [390, 4700, 57e3, 68e4]
                    }, {
                        name: "Elf",
                        color: "#a7d054",
                        class: "⚔️",
                        rarity: "Uncommon",
                        cash: [5e3, 15e3, 15e4, 15e5, 1e7],
                        time: [1, 1, 1, 1, 1],
                        price: [8e5, 9e6, 11e7, 8e8]
                    }, {
                        name: "Witch",
                        color: "#4ab96d",
                        class: "⚔️",
                        rarity: "Uncommon",
                        cash: [18e3, 6e4, 4e4, 4e6, 35e6],
                        time: [3, 3, 2, 2, 2],
                        price: [11e5, 12e6, 15e7, 14e8]
                    }, {
                        name: "Wizard",
                        color: "#5a459c",
                        class: "⚔️",
                        rarity: "Uncommon",
                        cash: [19500, 65e3, 44e4, 46e5, 4e6],
                        time: [3, 3, 2, 2, 2],
                        price: [13e5, 135e5, 16e7, 16e8]
                    }, {
                        name: "Fairy",
                        color: "#df6d9c",
                        class: "⚔️",
                        rarity: "Uncommon",
                        cash: [18500, 6e4, 62e4, 44e5, 38e6],
                        time: [3, 3, 3, 2, 2],
                        price: [12e5, 125e5, 15e6, 15e8]
                    }, {
                        name: "Slime Monster",
                        color: "#2fa04a",
                        class: "⚔️",
                        rarity: "Uncommon",
                        cash: [35e3, 14e4, 1e6, 11e6, 11e7],
                        time: [5, 5, 4, 4, 4],
                        price: [16e5, 15e6, 2e8, 23e8]
                    }, {
                        name: "Jester",
                        color: "#be1e2d",
                        class: "⚔️",
                        rarity: "Rare",
                        cash: [25e3, 1e5, 68e4, 65e5, 32e6],
                        time: [3, 3, 2, 2, 1],
                        price: [2e6, 21e6, 23e7, 26e8]
                    }, {
                        name: "Dragon",
                        color: "#2fa04a",
                        class: "⚔️",
                        rarity: "Rare",
                        cash: [36e3, 15e4, 15e5, 15e6, 15e7],
                        time: [4, 4, 4, 4, 4],
                        price: [23e5, 24e6, 27e7, 3e9]
                    }, {
                        name: "Unicorn",
                        color: "#f6afce",
                        class: "⚔️",
                        rarity: "Epic",
                        cash: [24e3, 15e4, 14e5, 7e6, 75e6],
                        time: [2, 2, 2, 1, 1],
                        price: [45e5, 45e6, 55e7, 65e8]
                    }, {
                        name: "Queen",
                        color: "#9e1f63",
                        class: "⚔️",
                        rarity: "Rare",
                        cash: [24e3, 95e3, 95e4, 97e5, 95e6],
                        time: [3, 3, 3, 3, 3],
                        price: [19e5, 2e7, 23e7, 25e8]
                    }, {
                        name: "King",
                        color: "#ee2640",
                        class: "⚔️",
                        rarity: "Legendary",
                        cash: [75e3, 4e5, 6e6, 9e7, 125e7],
                        time: [5, 5, 5, 5, 5],
                        price: [6e6, 95e6, 16e8, 25e9]
                    }, {
                        name: "Two of Spades",
                        color: "#414042",
                        class: "🏰",
                        rarity: "Uncommon",
                        cash: [4500, 14e3, 14e4, 14e5, 9e6],
                        time: [1, 1, 1, 1, 1],
                        price: [77e4, 83e5, 98e6, 71e7]
                    }, {
                        name: "Eat Me",
                        color: "#d58c55",
                        class: "🏰",
                        rarity: "Uncommon",
                        cash: [13e3, 45e3, 45e4, 45e5, 5e7],
                        time: [2, 2, 2, 2, 2],
                        price: [13e5, 14e6, 16e7, 2e9]
                    }, {
                        name: "Drink Me",
                        color: "#dd7399",
                        class: "🏰",
                        rarity: "Uncommon",
                        cash: [12e3, 4e4, 4e5, 4e6, 45e6],
                        time: [2, 2, 2, 2, 2],
                        price: [12e5, 12e6, 14e7, 18e8]
                    }, {
                        name: "Alice",
                        color: "#4cc9f5",
                        class: "🏰",
                        rarity: "Uncommon",
                        cash: [13e3, 42e3, 21e4, 21e5, 23e6],
                        time: [2, 2, 1, 1, 1],
                        price: [12e5, 13e6, 15e7, 19e8]
                    }, {
                        name: "Queen of Hearts",
                        color: "#d62027",
                        class: "🏰",
                        rarity: "Uncommon",
                        cash: [23e3, 87e3, 62e4, 75e5, 9e7],
                        time: [4, 4, 3, 3, 3],
                        price: [13e5, 13e6, 18e7, 24e8]
                    }, {
                        name: "Dormouse",
                        color: "#89d6f8",
                        class: "🏰",
                        rarity: "Rare",
                        cash: [17e3, 68e3, 7e5, 35e5, 35e6],
                        time: [2, 2, 1, 1, 1],
                        price: [2e6, 22e6, 25e7, 28e8]
                    }, {
                        name: "White Rabbit",
                        color: "#ffcd05",
                        class: "🏰",
                        rarity: "Rare",
                        cash: [26e3, 105e3, 11e6, 77e5, 72e6],
                        time: [3, 3, 3, 2, 2],
                        price: [2e6, 23e6, 28e7, 29e8]
                    }, {
                        name: "Cheshire Cat",
                        color: "#dd7399",
                        class: "🏰",
                        rarity: "Rare",
                        cash: [32e3, 1e5, 9e5, 9e6, 6e7],
                        time: [4, 3, 3, 3, 2],
                        price: [18e5, 19e6, 22e7, 24e8]
                    }, {
                        name: "Caterpillar",
                        color: "#00c0f3",
                        class: "🏰",
                        rarity: "Epic",
                        cash: [1e4, 7e4, 65e4, 75e5, 85e6],
                        time: [1, 1, 1, 1, 1],
                        price: [42e5, 42e6, 54e7, 69e8]
                    }, {
                        name: "Mad Hatter",
                        color: "#914f93",
                        class: "🏰",
                        rarity: "Epic",
                        cash: [38e3, 25e4, 15e5, 14e6, 8e7],
                        time: [3, 3, 2, 2, 1],
                        price: [48e5, 48e6, 52e7, 66e8]
                    }, {
                        name: "King of Hearts",
                        color: "#c62127",
                        class: "🏰",
                        rarity: "Legendary",
                        cash: [8e4, 42e4, 68e5, 1e8, 15e8],
                        time: [5, 5, 5, 5, 5],
                        price: [7e6, 11e7, 18e8, 3e10]
                    }, {
                        name: "Earth",
                        color: "#416eb5",
                        class: "🚀",
                        rarity: "Uncommon",
                        cash: [15e3, 45e3, 6e5, 65e5, 65e6],
                        time: [3, 3, 3, 3, 3],
                        price: [1e6, 11e6, 15e7, 17e8]
                    }, {
                        name: "Meteor",
                        color: "#c68c3c",
                        class: "🚀",
                        rarity: "Uncommon",
                        cash: [23e3, 65e3, 7e5, 45e5, 2e7],
                        time: [5, 4, 3, 2, 1],
                        price: [95e4, 13e6, 16e7, 16e8]
                    }, {
                        name: "Stars",
                        color: "#19184d",
                        class: "🚀",
                        rarity: "Uncommon",
                        cash: [1e4, 4e4, 2e5, 2e6, 18e6],
                        time: [2, 2, 1, 1, 1],
                        price: [14e5, 14e6, 15e7, 15e8]
                    }, {
                        name: "Alien",
                        color: "#8dc63f",
                        class: "🚀",
                        rarity: "Uncommon",
                        cash: [3e4, 1e5, 1e6, 11e6, 85e6],
                        time: [4, 4, 4, 4, 4],
                        price: [15e5, 17e6, 19e7, 17e8]
                    }, {
                        name: "Planet",
                        color: "#9dc6ea",
                        class: "🚀",
                        rarity: "Rare",
                        cash: [25e3, 1e5, 9e5, 9e6, 9e7],
                        time: [3, 3, 3, 3, 3],
                        price: [2e6, 21e6, 21e7, 24e8]
                    }, {
                        name: "UFO",
                        color: "#a15095",
                        class: "🚀",
                        rarity: "Rare",
                        cash: [17e3, 7e4, 7e5, 7e6, 7e7],
                        time: [2, 2, 2, 2, 2],
                        price: [21e5, 23e6, 25e7, 28e8]
                    }, {
                        name: "Spaceship",
                        color: "#ffcb29",
                        class: "🚀",
                        rarity: "Epic",
                        cash: [6e4, 32e4, 21e5, 15e6, 85e6],
                        time: [5, 4, 3, 2, 1],
                        price: [48e5, 46e6, 54e7, 68e8]
                    }, {
                        name: "Astronaut",
                        color: "#9bd4ee",
                        class: "🚀",
                        rarity: "Legendary",
                        cash: [45e3, 26e4, 25e5, 38e6, 55e7],
                        time: [3, 3, 2, 2, 2],
                        price: [65e5, 1e8, 17e8, 27e9]
                    }, {
                        name: "Lil Bot",
                        color: "#3e564a",
                        class: "🤖",
                        rarity: "Uncommon",
                        cash: [4e3, 12e3, 18e4, 19e5, 25e6],
                        time: [1, 1, 1, 1, 1],
                        price: [73e4, 12e6, 13e7, 19e8]
                    }, {
                        name: "Lovely Bot",
                        color: "#f179af",
                        class: "🤖",
                        rarity: "Uncommon",
                        cash: [16e3, 65e3, 65e4, 48e5, 42e6],
                        time: [3, 3, 3, 2, 2],
                        price: [13e5, 14e6, 17e7, 16e8]
                    }, {
                        name: "Angry Bot",
                        color: "#f1613a",
                        class: "🤖",
                        rarity: "Uncommon",
                        cash: [22e3, 85e3, 8e5, 62e5, 65e6],
                        time: [4, 4, 4, 3, 3],
                        price: [12e5, 13e6, 15e7, 17e8]
                    }, {
                        name: "Happy Bot",
                        color: "#51ba6b",
                        class: "🤖",
                        rarity: "Uncommon",
                        cash: [11e3, 45e3, 5e5, 25e5, 3e7],
                        time: [2, 2, 2, 1, 1],
                        price: [14e5, 15e6, 18e7, 24e8]
                    }, {
                        name: "Watson",
                        color: "#d69b5a",
                        class: "🤖",
                        rarity: "Rare",
                        cash: [24e3, 1e5, 1e6, 1e7, 1e8],
                        time: [3, 3, 3, 3, 3],
                        price: [2e6, 22e6, 24e7, 26e8]
                    }, {
                        name: "Buddy Bot",
                        color: "#9dc6ea",
                        class: "🤖",
                        rarity: "Rare",
                        cash: [22e3, 95e3, 65e4, 65e5, 65e6],
                        time: [3, 3, 2, 2, 2],
                        price: [19e5, 21e6, 23e7, 25e8]
                    }, {
                        name: "Brainy Bot",
                        color: "#9ecf7a",
                        class: "🤖",
                        rarity: "Epic",
                        cash: [5e4, 25e4, 21e5, 21e6, 17e7],
                        time: [4, 3, 3, 3, 2],
                        price: [5e6, 46e6, 5e8, 67e8]
                    }, {
                        name: "Mega Bot",
                        color: "#d71f27",
                        class: "🤖",
                        rarity: "Legendary",
                        cash: [8e4, 43e4, 42e5, 62e6, 1e9],
                        time: [5, 5, 3, 3, 3],
                        price: [7e6, 12e7, 19e8, 35e9]
                    }].map(e => ({
                        name: e.name,
                        value: JSON.stringify(e)
                    }))
                }],
                run: function(e) {
                    var t = T();
                    10 <= t.state.blooks.length && x("Choose a blook to replace"), t.waiting = !1, t.chooseBlook(JSON.parse(e))
                }
            }, {
                name: "Free Upgrades",
                description: "Sets upgrade prices to 0 for all current blooks",
                run: function() {
                    const t = [0, 0, 0, 0];
                    var e = T();
                    e.setState({
                        blooks: e.state.blooks.map(e => (e.price = t, e))
                    })
                }
            }, {
                name: "Max Blooks",
                description: "Maxes out all your blooks' levels",
                run: function() {
                    T().state.blooks.forEach(e => e.level = 4)
                }
            }, {
                name: "Remove Glitches",
                description: "Removes all enemy glitches",
                run: function() {
                    var e = T();
                    e.setState({
                        bits: 0,
                        ads: [],
                        hazards: [],
                        color: "",
                        lol: !1,
                        joke: !1,
                        slow: !1,
                        dance: !1,
                        glitch: "",
                        glitcherName: "",
                        glitcherBlook: ""
                    }), clearTimeout(e.adTimeout), clearInterval(e.hazardInterval), clearTimeout(e.nightTimeout), clearTimeout(e.glitchTimeout), clearTimeout(e.lolTimeout), clearTimeout(e.jokeTimeout), clearTimeout(e.slowTimeout), clearTimeout(e.danceTimeout), clearTimeout(e.nameTimeout)
                }
            }, {
                name: "Send Glitch",
                description: "Sends a glitch to everyone else playing",
                inputs: [{
                    name: "Glitch",
                    type: "options",
                    options: Object.entries({
                        lb: "Lunch Break",
                        as: "Ad Spam",
                        e37: "Error 37",
                        nt: "Night Time",
                        lo: "#LOL",
                        j: "Jokester",
                        sm: "Slow Mo",
                        dp: "Dance Party",
                        v: "Vortex",
                        r: "Reverse",
                        f: "Flip",
                        m: "Micro"
                    }).map(([e, t]) => ({
                        name: t,
                        value: e
                    }))
                }],
                run: function(e) {
                    var t = T();
                    t.safe = !0, t.props.liveGameController.setVal({
                        path: `c/${t.props.client.name}/tat`,
                        val: e
                    })
                }
            }, {
                name: "Set All MegaBot",
                description: "Sets all your blooks to maxed out Mega Bots",
                run: function() {
                    T().setState({
                        blooks: Array.from({
                            length: 10
                        }, () => ({
                            name: "Mega Bot",
                            color: "#d71f27",
                            class: "🤖",
                            rarity: "Legendary",
                            cash: [8e4, 43e4, 42e5, 62e6, 1e9],
                            time: [5, 5, 3, 3, 3],
                            price: [7e6, 12e7, 19e8, 35e9],
                            active: !1,
                            level: 4,
                            bonus: 5.5
                        }))
                    })
                }
            }, {
                name: "Set Cash",
                description: "Sets amount of cash you have",
                inputs: [{
                    name: "Cash",
                    type: "number"
                }],
                run: function(e) {
                    T().setState({
                        cash: e
                    })
                }
            }],
            fishing: [{
                name: "Remove Distractions",
                description: "Removes distractions",
                type: "toggle",
                enabled: !1,
                data: null,
                run: function() {
                    this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                        T().setState({
                            party: ""
                        })
                    }, 50))
                }
            }, {
                name: "Frenzy",
                description: "Sets everyone to frenzy mode",
                run: function() {
                    var e = T();
                    e.props.liveGameController.setVal({
                        path: "c/" + e.props.client.name,
                        val: {
                            b: e.props.client.blook,
                            w: e.state.weight,
                            f: "Frenzy",
                            s: !0
                        }
                    })
                }
            }, {
                name: "Send Distraction",
                description: "Sends a distraction to everyone",
                inputs: [{
                    name: "Distraction",
                    type: "options",
                    options: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"]
                }],
                run: function(e) {
                    var t = T();
                    t.safe = !0, t.props.liveGameController.setVal({
                        path: "c/" + t.props.client.name,
                        val: {
                            b: t.props.client.blook,
                            w: t.state.weight,
                            f: e,
                            s: !0
                        }
                    })
                }
            }, {
                name: "Set Lure",
                description: "Sets fishing lure (range 1 - 5)",
                inputs: [{
                    name: "Lure (1 - 5)",
                    type: "number",
                    min: 1,
                    max: 5
                }],
                run: function(e) {
                    T().setState({
                        lure: Math.max(Math.min(e - 1, 4), 0)
                    })
                }
            }, {
                name: "Set Next Fish",
                description: "Sets the next fish to catch",
                inputs: [{
                    name: "Fish",
                    type: "options",
                    options: ["Old Boot", "Waffle", "Two of Spades", "Jellyfish", "Clownfish", "Goldfish", "Frog", "Blizzard Clownfish", "Turtle", "Cat", "Lovely Frog", "Lucky Frog", "Poison Dart Frog", "Seal", "Walrus", "Fairy", "Crab", "Lemon Crab", "Pufferfish", "Blobfish", "Rainbow Jellyfish", "Octopus", "Pirate Pufferfish", "Donut Blobfish", "Crimson Octopus", "Narwhal", "Baby Shark", "Megalodon", "Alien", "Rainbow Narwhal", "UFO", "Santa Claus", "Swamp Monster", "Red Astronaut", "Spooky Pumpkin", "Dragon", "Tim the Alien"]
                }],
                run: function(e) {
                    function t() {
                        return Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner
                    }
                    var a = {
                            "Old Boot": {
                                rarity: "Trash",
                                minWeight: 1,
                                maxWeight: 10,
                                tiers: ["F", "D", "C"]
                            },
                            Waffle: {
                                rarity: "Trash",
                                minWeight: 1,
                                maxWeight: 10,
                                tiers: ["F", "D", "C"]
                            },
                            "Two of Spades": {
                                rarity: "Trash",
                                minWeight: 1,
                                maxWeight: 10,
                                tiers: ["F", "D", "C"]
                            },
                            Jellyfish: {
                                rarity: "Easy One",
                                minWeight: 10,
                                maxWeight: 25,
                                tiers: ["D", "C", "B"]
                            },
                            Clownfish: {
                                rarity: "Easy One",
                                minWeight: 20,
                                maxWeight: 45,
                                tiers: ["D", "C", "B"]
                            },
                            Goldfish: {
                                rarity: "Easy One",
                                minWeight: 30,
                                maxWeight: 65,
                                tiers: ["D", "C", "B"]
                            },
                            Frog: {
                                rarity: "Easy One",
                                minWeight: 50,
                                maxWeight: 100,
                                tiers: ["D", "C", "B"]
                            },
                            "Blizzard Clownfish": {
                                rarity: "Great Catch",
                                minWeight: 75,
                                maxWeight: 125,
                                tiers: ["D", "C", "B"]
                            },
                            Turtle: {
                                rarity: "Great Catch",
                                minWeight: 100,
                                maxWeight: 150,
                                tiers: ["D", "C", "B", "A"]
                            },
                            Cat: {
                                rarity: "Great Catch",
                                minWeight: 100,
                                maxWeight: 200,
                                tiers: ["D", "C", "B", "A"]
                            },
                            "Lovely Frog": {
                                rarity: "Great Catch",
                                minWeight: 150,
                                maxWeight: 350,
                                tiers: ["D", "C", "B", "A"]
                            },
                            "Lucky Frog": {
                                rarity: "Great Catch",
                                minWeight: 200,
                                maxWeight: 400,
                                tiers: ["D", "C", "B", "A"]
                            },
                            "Poison Dart Frog": {
                                rarity: "Great Catch",
                                minWeight: 250,
                                maxWeight: 750,
                                tiers: ["D", "C", "B", "A"]
                            },
                            Seal: {
                                rarity: "Rare Find",
                                minWeight: 500,
                                maxWeight: 1e3,
                                tiers: ["D", "C", "B", "A"]
                            },
                            Walrus: {
                                rarity: "Rare Find",
                                minWeight: 700,
                                maxWeight: 2200,
                                tiers: ["D", "C", "B", "A"]
                            },
                            Fairy: {
                                rarity: "Rare Find",
                                minWeight: 1500,
                                maxWeight: 2500,
                                tiers: ["D", "C", "B", "A"]
                            },
                            Crab: {
                                rarity: "Rare Find",
                                minWeight: 1e3,
                                maxWeight: 3e3,
                                tiers: ["D", "C", "B", "A"]
                            },
                            "Lemon Crab": {
                                rarity: "Rare Find",
                                minWeight: 2e3,
                                maxWeight: 5e3,
                                tiers: ["C", "B", "A"]
                            },
                            Pufferfish: {
                                rarity: "Rare Find",
                                minWeight: 2e3,
                                maxWeight: 4e3,
                                tiers: ["D", "C", "B", "A"]
                            },
                            Blobfish: {
                                rarity: "Rare Find",
                                minWeight: 3e3,
                                maxWeight: 5e3,
                                tiers: ["D", "C", "B", "A"]
                            },
                            "Rainbow Jellyfish": {
                                rarity: "Epic Grab",
                                minWeight: 7e3,
                                maxWeight: 1e4,
                                tiers: ["C", "B", "A"]
                            },
                            Octopus: {
                                rarity: "Epic Grab",
                                minWeight: 1e4,
                                maxWeight: 15e3,
                                tiers: ["C", "B", "A"]
                            },
                            "Pirate Pufferfish": {
                                rarity: "Epic Grab",
                                minWeight: 12e3,
                                maxWeight: 2e4,
                                tiers: ["C", "B", "A"]
                            },
                            "Donut Blobfish": {
                                rarity: "Epic Grab",
                                minWeight: 13e3,
                                maxWeight: 25e3,
                                tiers: ["C", "B", "A"]
                            },
                            "Crimson Octopus": {
                                rarity: "Epic Grab",
                                minWeight: 15e3,
                                maxWeight: 3e4,
                                tiers: ["B", "A"]
                            },
                            Narwhal: {
                                rarity: "Catch of the Day",
                                minWeight: 25e3,
                                maxWeight: 5e4,
                                tiers: ["B", "A", "S"]
                            },
                            "Baby Shark": {
                                rarity: "Catch of the Day",
                                minWeight: 5e4,
                                maxWeight: 1e5,
                                tiers: ["B", "A", "S"]
                            },
                            Megalodon: {
                                rarity: "Catch of the Day",
                                minWeight: 25e4,
                                maxWeight: 5e5,
                                tiers: ["B", "A", "S"]
                            },
                            Alien: {
                                rarity: "Angler's Legend",
                                minWeight: 5e5,
                                maxWeight: 7e5,
                                tiers: ["A", "S"]
                            },
                            "Rainbow Narwhal": {
                                rarity: "Angler's Legend",
                                minWeight: 75e4,
                                maxWeight: 1e6,
                                tiers: ["A", "S", "S+"]
                            },
                            UFO: {
                                rarity: "Angler's Legend",
                                minWeight: 1e6,
                                maxWeight: 2e6,
                                tiers: ["A", "S", "S+"]
                            },
                            "Santa Claus": {
                                rarity: "Angler's Legend",
                                minWeight: 1e6,
                                maxWeight: 2e6,
                                tiers: ["A", "S", "S+"]
                            },
                            "Swamp Monster": {
                                rarity: "Angler's Legend",
                                minWeight: 1e6,
                                maxWeight: 2e6,
                                tiers: ["A", "S", "S+"]
                            },
                            "Red Astronaut": {
                                rarity: "Angler's Legend",
                                minWeight: 1e6,
                                maxWeight: 2e6,
                                tiers: ["A", "S", "S+"]
                            },
                            "Spooky Pumpkin": {
                                rarity: "Angler's Legend",
                                minWeight: 1e6,
                                maxWeight: 2e6,
                                tiers: ["A", "S", "S+"]
                            },
                            Dragon: {
                                rarity: "Angler's Legend",
                                minWeight: 1e6,
                                maxWeight: 2e6,
                                tiers: ["A", "S", "S+"]
                            },
                            "Tim the Alien": {
                                rarity: "Angler's Legend",
                                minWeight: 15e5,
                                maxWeight: 25e5,
                                tiers: ["A", "S", "S+"]
                            }
                        },
                        o = ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"];
                    if (!window.functionSet) {
                        var r = t().stateNode.answerNext;
                        t().stateNode.answerNext = function() {
                            if (t().stateNode.state.hackFish) {
                                var i, n, s;
                                t().stateNode.setState({
                                    stage: "caught",
                                    isCast: !1,
                                    fish: {
                                        name: i = e,
                                        rarity: a[i].rarity,
                                        weight: (n = a[i].minWeight, Math.floor(Math.random() * ((s = a[i].maxWeight) - n) + n)),
                                        tier: a[i].tiers[Math.floor(Math.random() * a[i].tiers.length)],
                                        isSpecial: o.includes(i) && 8 > Math.floor(100 * Math.random())
                                    },
                                    claimReady: !1
                                }), setTimeout(function() {
                                    t().stateNode.setState({
                                        claimReady: !0
                                    })
                                }, 1600), t().stateNode.state.hackFish = null
                            } else r.apply(this, arguments)
                        }
                    }
                    window.functionSet = !0, ! function e(o) {
                        if (Object.keys(a).includes(o)) t().stateNode.state.hackFish = o;
                        else {
                            alert("That fish does not exist!");
                            return
                        }
                    }(e)
                }
            }, {
                name: "Set Weight",
                description: "Sets weight",
                inputs: [{
                    name: "Weight",
                    type: "number"
                }],
                run: function(e) {
                    var t = T();
                    t.setState({
                        weight: e,
                        weight2: e
                    }), t.props.liveGameController.setVal({
                        path: "c/" + t.props.client.name,
                        val: {
                            b: t.props.client.blook,
                            w: e,
                            f: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"][Math.floor(9 * Math.random())]
                        }
                    })
                }
            }],
            flappy: [{
                name: "Toggle Ghost",
                description: "Lets you go through the pipes",
                type: "toggle",
                enabled: !1,
                run: function() {
                    this.enabled = !this.enabled;
                    for (const e of Object.values(document.querySelector("#phaser-bouncy"))[0].return.updateQueue.lastEffect.deps[0].current.config.sceneConfig.physics.world.bodies.entries)
                        if (e.gameObject.frame.texture.key.startsWith("blook")) {
                            e.checkCollision.none = this.enabled, e.gameObject.setAlpha(this.enabled ? .5 : 1);
                            break
                        }
                }
            }, {
                name: "Set Score",
                description: "Sets flappy blook score",
                inputs: [{
                    name: "Score",
                    type: "number"
                }],
                run: function(e) {
                    Object.values(document.querySelector("#phaser-bouncy"))[0].return.updateQueue.lastEffect.deps[1](e || 0)
                }
            }],
            gold: [{
                name: "Always Triple",
                description: "Always get triple gold",
                type: "toggle",
                enabled: !1,
                data: {
                    type: "multiply",
                    val: 3,
                    text: "Triple Gold!",
                    blook: "Unicorn"
                },
                run: function() {
                    let t = T();
                    t._choosePrize ||= t.choosePrize, this.enabled ? (this.enabled = !1, t._choosePrize && (t.choosePrize = t._choosePrize)) : (this.enabled = !0, t.choosePrize = function(e) {
                        t.state.choices[e] = this.data, t._choosePrize(e)
                    })
                }
            }, {
                name: "Auto Choose",
                description: "Automatically picks the option that would give you the most gold",
                type: "toggle",
                enabled: !1,
                data: null,
                run: function() {
                    this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(async () => {
                        let s = T();
                        "prize" == s.state.stage && s.props.liveGameController.getDatabaseVal("c", t => {
                            try {
                                if (null != t) {
                                    t = Object.entries(t);
                                    let o = 0,
                                        a = 0,
                                        n = -1;
                                    for (let e = 0; e < t.length; e++) t[e][0] != s.props.client.name && t[e][1] > o && (o = t[e][1]);
                                    for (let t = 0; t < s.state.choices.length; t++) {
                                        var r = s.state.choices[t];
                                        let e = s.state.gold;
                                        "gold" == r.type ? e = s.state.gold + r.val || s.state.gold : "multiply" == r.type || "divide" == r.type ? e = Math.round(s.state.gold * r.val) || s.state.gold : "swap" == r.type ? e = o || s.state.gold : "take" == r.type && (e = s.state.gold + o * r.val || s.state.gold), (e || 0) <= a || (a = e, n = t + 1)
                                    }
                                    document.querySelector("div[class*='choice" + n + "']")?.click()
                                }
                            } catch {}
                        })
                    }, 50))
                }
            }, {
                name: "Chest ESP",
                description: "Shows what each chest will give you",
                type: "toggle",
                enabled: !1,
                data: null,
                run: function() {
                    this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                        T().state.choices.forEach(({
                            text: e
                        }, t) => {
                            var o, t = document.querySelector(`div[class*='choice${t+1}']`);
                            t && !t.querySelector("div") && ((o = document.createElement("div")).style.color = "white", o.style.fontFamily = "Eczar", o.style.fontSize = "2em", o.style.display = "flex", o.style.justifyContent = "center", o.style.transform = "translateY(200px)", o.innerText = e, t.append(o))
                        })
                    }, 50))
                }
            }, {
                name: "Remove Lose 25%-50%",
                description: "Removes Lose 25%-50% chests",
                type: "toggle",
                enabled: !1,
                data: null,
                run: function() {
                    let e = this,
                        t = this;

                    function a() {
                        return Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner
                    }
                    e.enabled || t.enabled ? (clearInterval(e.data), clearInterval(t.data), e.data = null, t.data = null, e.enabled = !1, t.enabled = !1) : (e.enabled = !0, t.enabled = !0, e.data = setInterval(() => {
                        document.querySelectorAll('div[role="button"]').forEach(e => {
                            ("Lose 25%" === e.innerText || "Lose 50%" === e.innerText) && (e.style.display = "none")
                        })
                    }, 50), t.data = setInterval(() => {
                        var e;
                        if ("gold" === ("gold" === window.location.pathname.split("/")[2] && "gold") && t.enabled) try {
                            if ("prize" === a().stateNode.state.stage) {
                                let {
                                    choices: o
                                } = a().stateNode.state, r = document.querySelector("div[class*='regularBody']").children[1];
                                r && (document.querySelectorAll(".chest-esp").length ? o.forEach((e, t) => {
                                    3 == r.children.length && r.children[t].children[1].innerText != e.text && (r.children[t].children[1].innerText = e.text)
                                }) : o.forEach((e, t) => {
                                    (textElement = document.createElement("p")).className = "chest-esp", textElement.innerText = e.text, textElement.style = "text-align: center; font-size: 30px; color: white; font-family:Titan One, sans-serif; border-color: black; margin-top: 200px; opacity: 0;";
                                    try {
                                        r.children[t].appendChild(textElement)
                                    } catch (a) {
                                        console.log(a)
                                    }
                                }))
                            }
                        } catch (i) {
                            console.log(i)
                        }
                    }, 50))
                }
            }, {
                name: "Reset Players Gold",
                description: "Sets a player's gold to 0",
                inputs: [{
                    name: "Player",
                    type: "options",
                    options: () => {
                        let e = T();
                        return e.props.liveGameController._liveApp ? new Promise(t => e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e)))) : []
                    }
                }],
                run: function(e) {
                    var t = T();
                    t.props.liveGameController.setVal({
                        path: "c/" + t.props.client.name + "/tat",
                        val: e + ":swap:0"
                    })
                }
            }, {
                name: "Set Gold",
                description: "Sets amount of gold",
                inputs: [{
                    name: "Gold",
                    type: "number"
                }],
                run: function(e) {
                    var t = T();
                    t.setState({
                        gold: e,
                        gold2: e
                    }), t.props.liveGameController.setVal({
                        path: "c/" + t.props.client.name + "/g",
                        val: e
                    })
                }
            }, {
                name: "Swap Gold",
                description: "Swaps gold with someone",
                inputs: [{
                    name: "Player",
                    type: "options",
                    options: () => {
                        let e = T();
                        return e.props.liveGameController._liveApp ? new Promise(t => e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e)))) : []
                    }
                }],
                run: function(t) {
                    let o = T();
                    o.props.liveGameController.getDatabaseVal("c", e => {
                        e && null != e[t] && (e = e[t].g || 0, o.props.liveGameController.setVal({
                            path: "c/" + o.props.client.name,
                            val: {
                                b: o.props.client.blook,
                                tat: t + ":swap:" + (o.state.gold || 0),
                                g: e
                            }
                        }), o.setState({
                            gold: e,
                            gold2: e
                        }))
                    })
                }
            }],
            kingdom: [{
                name: "Choice ESP",
                description: "Shows you what will happen if you say Yes or No",
                type: "toggle",
                enabled: !1,
                data: null,
                run: function() {
                    this.enabled ? (this.enabled = !1, clearInterval(this.data), Array.prototype.forEach.call(document.querySelectorAll(".choiceESP"), e => e.remove()), this.data = null) : (this.enabled = !0, this.data = setInterval(a => {
                        let o = T(),
                            n = Array.prototype.reduce.call(document.querySelectorAll("[class*=statContainer]"), (e, t, o) => (e[a[o]] = t, e), {});
                        "choice" == o.state.phase && (Array.prototype.forEach.call(document.querySelectorAll(".choiceESP"), e => e.remove()), Object.keys(o.state.guest.yes || {}).forEach(e => {
                            var t;
                            null != n[e] && ((t = document.createElement("div")).className = "choiceESP", t.style = "font-size: 24px; color: rgb(75, 194, 46); font-weight: bolder;", t.innerText = String(o.state.guest.yes[e]), n[e].appendChild(t))
                        }), Object.keys(o.state.guest.no || {}).forEach(e => {
                            var t;
                            null != n[e] && ((t = document.createElement("div")).className = "choiceESP", t.style = "font-size: 24px; color: darkred; font-weight: bolder;", t.innerText = String(o.state.guest.no[e]), n[e].appendChild(t))
                        }), Array.prototype.forEach.call(document.querySelectorAll("[class*=guestButton][role=button]"), e => e.onclick = () => Array.prototype.forEach.call(document.querySelectorAll(".choiceESP"), e => e.remove())))
                    }, 50, ["materials", "people", "happiness", "gold"]))
                }
            }, {
                name: "Disable Tax Toucan",
                description: "Tax evasion",
                run: function() {
                    T().taxCounter = Number.MAX_VALUE
                }
            }, {
                name: "Max Stats",
                description: "Sets all resources to the max",
                run: function() {
                    T().setState({
                        materials: 100,
                        people: 100,
                        happiness: 100,
                        gold: 100
                    })
                }
            }, {
                name: "Set Guests",
                description: "Sets the amount of guests you've seen",
                inputs: [{
                    name: "Guests",
                    type: "number"
                }],
                run: function(e) {
                    T().setState({
                        guestScore: e
                    })
                }
            }, {
                name: "Skip Guest",
                description: "Skips the current guest",
                run: function() {
                    T().nextGuest()
                }
            }],
            racing: [{
                name: "Instant Win",
                description: "Instantly Wins the race",
                run: function() {
                    var e = T();
                    e.setState({
                        progress: e.state.goalAmount
                    }), e.props.liveGameController.setVal({
                        path: "c/" + e.props.client.name + "/pr",
                        val: e.state.goalAmount
                    })
                }
            }, {
                name: "Set Questions",
                description: "Sets the number of questions left",
                inputs: [{
                    name: "Questions",
                    type: "number"
                }],
                run: function(e) {
                    var t = T();
                    e = t.props.client.amount - e, t.setState({
                        progress: e
                    }), t.props.liveGameController.setVal({
                        path: "c/" + t.props.client.name + "/pr",
                        val: e
                    })
                }
            }],
            extras: [{
                name: "Toggle Invert Colors",
                description: "Toggle between inverting and restoring colors on the page",
                run: function() {
                    "invert()" == document.getElementsByTagName("html")[0].style.filter ? document.getElementsByTagName("html")[0].style.filter = "" : document.getElementsByTagName("html")[0].style.filter = "invert()", elems = document.querySelectorAll(" a, img, video");
                    for (let e = 0; e < elems.length; e++)("A" == elems[e].nodeName && ("" != elems[e].style.background || "" != elems[e].style.backgroundImage) || "A" != elems[e].nodeName) && ("invert()" == elems[e].style.filter ? elems[e].style.filter = "" : elems[e].style.filter = "invert()")
                }
            }, {
                name: "Toggle Dark Mode",
                description: "Toggles Dark Mode",
                run: function() {
                    var e = document.createElement("iframe");
                    document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), ! function e() {
                        let t = document.querySelectorAll("#nightify");
                        if (t.length) t[0].parentNode.removeChild(t[0]);
                        else {
                            var a = document.getElementsByTagName("head")[0],
                                o = document.createElement("style");
                            o.setAttribute("type", "text/css"), o.setAttribute("id", "nightify"), o.appendChild(document.createTextNode(`html{-webkit-filter:invert(100%) hue-rotate(180deg) contrast(70%) !important; background: #222;} .line-content {background-color: #333;} html img{-webkit-filter:invert(100%) hue-rotate(0deg) contrast(100%) !important;}`)), a.appendChild(o)
                        }
                    }()
                }
            }, {
                name: "3D Page",
                description: "Makes the page 3D",
                run: function() {
                    var e = {
                        menu: document.createElement("div"),
                        limit: document.createElement("input"),
                        gap: document.createElement("input"),
                        sag: document.createElement("input"),
                        fov: document.createElement("input"),
                        flo: document.createElement("input"),
                        off: document.createElement("input"),
                        non: document.createElement("input"),
                        end: document.createElement("input"),
                        tgl: document.createElement("input"),
                        cssStatic: document.createElement("style"),
                        cssDynamic: document.createElement("style"),
                        orientation: {
                            yaw: 0,
                            pitch: 0,
                            roll: 0
                        },
                        mouseMove: function(t) {
                            e.orientation.yaw = -(180 * Math.cos(Math.PI * t.clientX / innerWidth)) * e.limit.value, e.orientation.pitch = 180 * Math.cos(Math.PI * t.clientY / innerHeight) * e.limit.value, e.updateBody()
                        },
                        gyroMove: function(t) {
                            innerWidth > innerHeight ? (e.orientation.yaw = -(t.alpha + t.beta), e.orientation.pitch = t.gamma - 90 * Math.sign(90 - Math.abs(t.beta))) : (e.orientation.yaw = -(t.alpha + t.gamma), e.orientation.pitch = t.beta - 90), e.updateBody()
                        },
                        updateOrigin: function(e) {
                            document.body.style.transformOrigin = innerWidth / 2 + pageXOffset + "px " + (innerHeight / 2 + pageYOffset) + "px"
                        },
                        updateBody: function() {
                            document.body.style.transform = "perspective(" + Math.pow(2, e.fov.value) + "px) translateZ(-" + e.gap.value + "px) rotateX(" + e.orientation.pitch + "deg) rotateY(" + e.orientation.yaw + "deg)"
                        },
                        updateCSS: function() {
                            if (e.non.checked) e.cssDynamic.innerHTML = "";
                            else if (e.off.checked) e.cssDynamic.innerHTML = "* { transform-style: preserve-3d; }";
                            else {
                                for (var t = 0; document.querySelector("body" + " > *".repeat(t)); t++);
                                var a = e.gap.value / t,
                                    o = -Math.PI * e.sag.value / t;
                                e.cssDynamic.innerHTML = ` * { transform: translateZ(${a}px) rotateX(${o}rad); transform-style: preserve-3d; transition: transform 1s; outline: 1px solid rgba(0, 0, 0, 0.0625); ${e.flo.checked?"overflow: visible !important;":""} } *:hover { transform: translateZ(${2*a}px) rotateX(${2*o}rad); ${e.flo.checked?"":"overflow: visible;"} } `
                            }
                        },
                        toggle: function() {
                            "active" == e.menu.className ? e.menu.removeAttribute("class") : e.menu.className = "active"
                        },
                        quit: function() {
                            window.removeEventListener("deviceorientation", e.gyroMove), window.removeEventListener("mousemove", e.mouseMove), window.removeEventListener("scroll", e.updateOrigin), window.addEventListener("resize", e.updateOrigin), e.menu.remove(), e.cssStatic.remove(), e.cssDynamic.remove(), document.body.removeAttribute("style")
                        },
                        newRange: function(t, a, o, r, i, n, s) {
                            e.menu.appendChild(t), t.type = "range", t.min = o, t.max = i, t.step = r, t.value = n, t.addEventListener("input", s), e.menu.appendChild(document.createElement("span")).innerHTML = a, e.menu.appendChild(document.createElement("br"))
                        },
                        newCheckbox: function(t, a, o) {
                            e.menu.appendChild(t), t.type = "checkbox", t.addEventListener("click", o), e.menu.appendChild(document.createElement("span")).innerHTML = a, e.menu.appendChild(document.createElement("br"))
                        },
                        newButton: function(t, a, o) {
                            e.menu.appendChild(t), t.type = "button", t.value = a, t.addEventListener("click", o)
                        },
                        init: function() {
                            document.body.parentNode.appendChild(e.menu).id = "tri-menu", e.newRange(e.limit, "limit", 0, .03125, 1, .125, e.updateBody), e.newRange(e.gap, "gap / distance", 0, 32, 512, 128, function() {
                                e.updateCSS(), e.updateBody()
                            }), e.newRange(e.sag, "sag", -.25, .03125, .25, 0, e.updateCSS), e.newRange(e.fov, "field of view", 7, 1, 13, 10, e.updateBody), e.newCheckbox(e.flo, "force overflow", e.updateCSS), e.flo.setAttribute("checked", ""), e.newCheckbox(e.off, "flatten layers", e.updateCSS), e.newCheckbox(e.non, "flatten everything", e.updateCSS), e.newButton(e.end, "Quit", e.quit), e.newButton(e.tgl, "≡", e.toggle), e.tgl.id = "tri-toggle", e.menu.appendChild(e.cssStatic).innerHTML = " html, body { transition-property: none; height: 100%25; width: 100%25; } html, html:hover, #tri-menu, #tri-menu > *, #tri-menu > *:hover { transform: none; outline: none; overflow: auto !important; float: none; } #tri-menu { position: fixed; top: 0; left: 0; background: rgba(0, 0, 0, 0.5); color: white; border: 1px solid rgba(255, 255, 255, 0.5);; border-radius: 0 0 16px 0; padding: 8px; transform: translate(-100%25, -100%25) translate(32px, 32px); } #tri-menu.active { transform: none; } #tri-toggle { position: absolute; bottom: 0; right: 0; height: 32px; width: 32px; background: transparent; color: white; border: none; cursor: pointer; } #tri-menu.active > #tri-toggle { background: white; color: black; border-radius: 8px 0 0 0; }", e.menu.appendChild(e.cssDynamic), e.updateCSS(), window.addEventListener("deviceorientation", e.gyroMove), window.addEventListener("mousemove", e.mouseMove), window.addEventListener("scroll", e.updateOrigin), window.addEventListener("resize", e.updateOrigin), window.scrollBy(0, 1)
                        }
                    };
                    e.init()
                }
            }, {
                name: "History Flooder",
                description: "Floods browser history with specified amount of entries",
                inputs: [{
                    name: "Amount",
                    type: "number"
                }],
                run: function(e) {
                    var t = e;
                    done = !1, C = window.location.href;
                    for (var a = 1; a <= t; a++) history.pushState(0, 0, a == t ? C : a.toString()), a == t && (done = !0);
                    !0 === done && alert("History flood successful! " + window.location.href + " now appears in your history " + t + (1 == t ? " time." : " times. "))
                }
            }, {
                name: "Tab Cloaker",
                description: "Changes the tab image and name",
                inputs: [{
                    name: "Icon URL",
                    type: "text",
                }, {
                    name: "Tab Title",
                    type: "text",
                }],
                run: function(e, t) {
                    var a = document.querySelector("link[rel*='icon']") || document.createElement("link");
                    a.type = "image/x-icon", a.rel = "shortcut icon", a.href = e || "https://www.blooket.com/favicon.ico", document.getElementsByTagName("head")[0].appendChild(a), document.title = t || "Blooket"
                }
            }],
            royale: [{
                name: "Auto Answer (Toggle)",
                description: "Toggles auto answer on",
                type: "toggle",
                enabled: !1,
                data: null,
                run: function() {
                    this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                        var e = T();
                        e?.onAnswer?.(!0, e.props.client.question.correctAnswers[0])
                    }, 50))
                }
            }, {
                name: "Auto Answer",
                description: "Chooses the correct answer for you",
                run: function() {
                    var e = T();
                    e?.onAnswer?.(!0, e.props.client.question.correctAnswers[0])
                }
            }],
            rush: [{
                name: "Set Blooks",
                description: "Sets amount of blooks you or your team has",
                inputs: [{
                    name: "Blooks",
                    type: "number"
                }],
                run: function(e) {
                    var t = T();
                    t.setState({
                        numBlooks: e
                    }), t.props.liveGameController.setVal({
                        path: (t.isTeam ? "a/" : "c/") + t.props.client.name + "/bs",
                        val: e
                    })
                }
            }, {
                name: "Set Defense",
                description: "Sets amount of defense you or your team has (Max 4)",
                inputs: [{
                    name: "Defense (max 4)",
                    type: "number",
                    max: 4
                }],
                run: function(e) {
                    var e = Math.min(e, 4),
                        t = T();
                    t.setState({
                        numDefense: e
                    }), t.props.liveGameController.setVal({
                        path: (t.isTeam ? "a/" : "c/") + t.props.client.name + "/d",
                        val: e
                    })
                }
            }],
            workshop: [{
                name: "Remove Distractions",
                description: "Removes all enemy distractions",
                run: function() {
                    T().setState({
                        fog: !1,
                        dusk: !1,
                        wind: !1,
                        plow: !1,
                        blizzard: !1,
                        force: !1,
                        canada: !1,
                        trees: [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1]
                    })
                }
            }, {
                name: "Send Distraction",
                description: "Sends a distraction to everyone else playing",
                inputs: [{
                    name: "Distraction",
                    type: "options",
                    options: Object.entries({
                        c: "Oh Canada",
                        b: "Blizzard",
                        f: "Fog Spell",
                        d: "Dark & Dusk",
                        w: "Howling Wind",
                        g: "Gift Time!",
                        t: "TREES",
                        s: "Snow Plow",
                        fr: "Use The Force"
                    }).map(([e, t]) => ({
                        name: t,
                        value: e
                    }))
                }],
                run: function(e) {
                    var t = T();
                    t.safe = !0, t.props.liveGameController.setVal({
                        path: `c/${t.props.client.name}/tat`,
                        val: e
                    })
                }
            }, {
                name: "Set Toys",
                description: "Sets amount of toys",
                inputs: [{
                    name: "Toys",
                    type: "number"
                }],
                run: function(e) {
                    var t = T();
                    t.setState({
                        toys: e
                    }), t.props.liveGameController.setVal({
                        path: "c/" + t.props.client.name + "/t",
                        val: e
                    })
                }
            }, {
                name: "Set Toys Per Question",
                description: "Sets amount of toys per question",
                inputs: [{
                    name: "Toys Per Question",
                    type: "number"
                }],
                run: function(e) {
                    T().setState({
                        toysPerQ: e
                    })
                }
            }, {
                name: "Swap Toys",
                description: "Swaps toys with someone",
                inputs: [{
                    name: "Player",
                    type: "options",
                    options: () => {
                        let e = T();
                        return e.props.liveGameController._liveApp ? new Promise(t => e.props.liveGameController.getDatabaseVal("c", e => e && t(Object.keys(e)))) : []
                    }
                }],
                run: function(t) {
                    let o = T();
                    o.props.liveGameController.getDatabaseVal("c", e => {
                        e && null != e[t] && (o.props.liveGameController.setVal({
                            path: "c/" + o.props.client.name + "/tat",
                            val: t + ":swap:" + o.state.toys
                        }), o.setState({
                            toys: e[t].t
                        }))
                    })
                }
            }],
            settings: [{
                name: "Import Settings",
                description: "Import a custom theme",
                inputs: [{
                    name: "JSON Data",
                    type: "string"
                }],
                run: function(e) {
                    try {
                        JSON.parse(e)
                    } catch (e) {
                        return x("Invalid JSON provided")
                    }
                    e = {
                        backgroundColor: "rgb(11, 194, 207)",
                        infoColor: "#9a49aa",
                        cheatList: "#9a49aa",
                        defaultButton: "#9a49aa",
                        disabledButton: "#A02626",
                        enabledButton: "#47A547",
                        textColor: "white",
                        inputColor: "#7a039d",
                        contentBackground: "rgb(64, 17, 95)",
                        ...JSON.parse(e)
                    }, a.setItem("theme", e);
                    for (const t in e) o.sheet.cssRules[0].style.setProperty("--" + t, e[t])
                }
            }, {
                name: "Export Settings",
                description: "Export the current theme to JSON",
                run: async function() {
                    await navigator.clipboard.writeText(JSON.stringify(a.data.theme, null, 4)), M("Text copied to clipboard. (Paste below to test)")
                }
            }, {
                name: "Defaults",
                description: "Changes all the settings to a preset",
                inputs: [{
                    name: "Theme",
                    type: "options",
                    options: [{
                        name: "Default",
                        value: {
                            backgroundColor: "rgb(11, 194, 207)",
                            infoColor: "#9a49aa",
                            cheatList: "#9a49aa",
                            defaultButton: "#9a49aa",
                            disabledButton: "#A02626",
                            enabledButton: "#47A547",
                            textColor: "white",
                            inputColor: "#7a039d",
                            contentBackground: "rgb(64, 17, 95)"
                        }
                    }, {
                        name: "Landscapes (Random)",
                        value: {
                            backgroundColor: "url(https://source.unsplash.com/1600x900/?landscape)",
                            infoColor: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
                            cheatList: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
                            defaultButton: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
                            disabledButton: "linear-gradient(rgba(225, 0, 0, 0.3), rgba(225, 0, 0, 0.3))",
                            enabledButton: "linear-gradient(rgba(0, 128, 0, 0.3), rgba(0, 128, 0, 0.3))",
                            textColor: "white",
                            inputColor: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
                            contentBackground: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))"
                        }
                    }, {
                        name: "Blacket",
                        value: {
                            backgroundColor: "#4f4f4f",
                            infoColor: "#2f2f2f",
                            cheatList: "#2f2f2f",
                            defaultButton: "#4f4f4f",
                            disabledButton: "#eb6234",
                            enabledButton: "#00c20c",
                            textColor: "white",
                            inputColor: "#3f3f3f",
                            contentBackground: "#2f2f2f"
                        }
                    }, {
                        name: "Ploopit",
                        value: {
                            backgroundColor: "url(https://i.ibb.co/6vvdq3f/ploopit.png)",
                            infoColor: "#3C75F5",
                            cheatList: "#204DD0",
                            defaultButton: "#204DD0",
                            disabledButton: "#A02626",
                            enabledButton: "#47A547",
                            textColor: "white",
                            inputColor: "#3f3f3f",
                            contentBackground: "#3C75F5"
                        }
                    }, {
                        name: "Betastar",
                        value: {
                            backgroundColor: "url(https://i.ibb.co/8bkDpCn/GIFMaker-me.gif)",
                            infoColor: "#282828",
                            cheatList: "#282828",
                            defaultButton: "white",
                            disabledButton: "#9D0000",
                            enabledButton: "#013220",
                            textColor: "black",
                            inputColor: "gray",
                            contentBackground: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))"
                        }
                    }, {
                        name: "Skool.lol",
                        value: {
                            backgroundColor: "linear-gradient(90deg, rgba(104,45,140,1) 220px, rgba(237,30,121,1) 100%)",
                            cheatList: "#1e2124",
                            infoColor: "#1e2124",
                            defaultButton: "#36393e",
                            inputColor: "#1e2124",
                            enabledButton: "#9c9a9a",
                            textColor: "white",
                            disabledButton: "#171717",
                            contentBackground: "#292929"
                        }
                    }, {
                        name: "Blue - Purple Background",
                        value: {
                            backgroundColor: "linear-gradient(162.5deg, rgba(0,183,255,1) 220px, rgba(128,0,255,1) 100%)"
                        }
                    }, {
                        name: "Saint Patricks Background",
                        value: {
                            backgroundColor: "rgb(9, 148, 65)"
                        }
                    }, {
                        name: "Halloween Background",
                        value: {
                            backgroundColor: "rgb(41, 41, 41)"
                        }
                    }, {
                        name: "Fall Background",
                        value: {
                            backgroundColor: "rgb(224, 159, 62)"
                        }
                    }, {
                        name: "Winter Background",
                        value: {
                            backgroundColor: "linear-gradient(rgb(49, 170, 224), rgb(187, 221, 255))"
                        }
                    }, {
                        name: "Crypto Hack",
                        value: {
                            backgroundColor: "radial-gradient(#11581e,#041607)",
                            infoColor: "#1a1a1a",
                            cheatList: "#1a1a1a",
                            defaultButton: "rgb(88 175 88)",
                            disabledButton: "#A02626",
                            enabledButton: "#0b601b",
                            textColor: "white",
                            inputColor: "rgb(0 0 0 / 25%)",
                            contentBackground: "#11581e"
                        }
                    }, {
                        name: "Fishing Frenzy",
                        value: {
                            backgroundColor: "linear-gradient(180deg,#9be2fe 0,#67d1fb)",
                            infoColor: "#c8591e",
                            cheatList: "#c8591e",
                            defaultButton: "#ff751a",
                            disabledButton: "#bf0e0e",
                            enabledButton: "#2fb62f",
                            textColor: "white",
                            inputColor: "rgb(0 0 0 / 25%)",
                            contentBackground: "radial-gradient(#02b0ea 40%, #1d86ea)"
                        }
                    }, {
                        name: "Deceptive Dinos",
                        value: {
                            backgroundColor: 'radial-gradient(rgba(220, 184, 86, 0), rgba(220, 184, 86, 0.4)), url("https://ac.blooket.com/play/111cb7e0ee6607ac3d1a13d534c0e0f1.png"), #ead49a',
                            infoColor: "#af8942",
                            cheatList: "#af8942",
                            defaultButton: "#af8942",
                            disabledButton: "#A02626",
                            enabledButton: "#47A547",
                            textColor: "white",
                            inputColor: "rgb(0 0 0 / 10%)",
                            contentBackground: "radial-gradient(rgba(1,104,162,.6),rgba(24,55,110,.5)),radial-gradient(#2783b4 1.5px,#18376e 0) center / 24px 24px"
                        }
                    }, {
                        name: "Blook Rush",
                        value: {
                            backgroundColor: "repeating-linear-gradient(45deg,white,white 8%,#e6e6e6 0,#e6e6e6 16%)",
                            defaultButton: "#36c",
                            inputColor: "rgb(0 0 0 / 25%)",
                            infoColor: "#36c",
                            cheatList: "#36c",
                            contentBackground: "#888",
                            textColor: "white",
                            disabledButton: "#A02626",
                            enabledButton: "#47A547"
                        }
                    }, {
                        name: "Factory",
                        value: {
                            defaultButton: "#1563bf",
                            infoColor: "#a5aabe",
                            cheatList: "#a5aabe",
                            contentBackground: "#2d313d",
                            backgroundColor: "#3a3a3a",
                            enabledButton: "rgb(75, 194, 46)",
                            disabledButton: "#9a49aa",
                            inputColor: "rgb(0 0 0 / 25%)",
                            textColor: "white"
                        }
                    }, {
                        name: "Cafe",
                        value: {
                            backgroundColor: "linear-gradient(90deg,rgba(200,0,0,.5) 50%,transparent 0) center / 50px 50px,linear-gradient(rgba(200,0,0,0.5) 50%,transparent 0) white center / 50px 50px",
                            defaultButton: "#0bc2cf",
                            inputColor: "rgb(0 0 0 / 25%)",
                            infoColor: "#ac7339",
                            cheatList: "#ac7339",
                            contentBackground: "rgb(64, 64, 64)",
                            textColor: "white",
                            disabledButton: "#A02626",
                            enabledButton: "#47A547"
                        }
                    }, {
                        name: "Tower of Doom",
                        value: {
                            backgroundColor: "rgb(41 41 41)",
                            disabledButton: "rgb(151, 15, 5)",
                            defaultButton: "#333",
                            inputColor: "rgb(0 0 0 / 25%)",
                            contentBackground: "#404040",
                            enabledButton: "#4bc22e",
                            textColor: "white",
                            infoColor: "#9a49aa",
                            cheatList: "#9a49aa"
                        }
                    }, {
                        name: "Monster Brawl",
                        value: {
                            defaultButton: "rgb(45, 51, 67)",
                            backgroundColor: "rgb(78, 95, 124)",
                            inputColor: "rgb(0 0 0 / 25%)",
                            contentBackground: "linear-gradient(0deg,#374154,#4f5b74)",
                            infoColor: "#374154",
                            cheatList: "#374154",
                            textColor: "white",
                            enabledButton: "#47A547",
                            disabledButton: "#A02626"
                        }
                    }, {
                        name: "Tower Defense 2",
                        value: {
                            backgroundColor: "url(https://media.blooket.com/image/upload/v1676164454/Media/defense/backgroundTd1-02.svg) center / cover",
                            cheatList: "#a33c22",
                            infoColor: "#a33c22",
                            defaultButton: "#40b1d8",
                            inputColor: "#3e8cbe",
                            contentBackground: "#293c82",
                            enabledButton: "#47A547",
                            disabledButton: "#A02626",
                            textColor: "white"
                        }
                    }]
                }],
                run: function(e) {
                    a.setItem("theme", {
                        ...a.data.theme,
                        ...e
                    });
                    for (const t in e) o.sheet.cssRules[0].style.setProperty("--" + t, e[t])
                }
            }, {
                name: "Scale",
                description: "Forces the GUI to scale from 25%-100%",
                inputs: [{
                    type: "number",
                    name: "Percent scale",
                    min: 25,
                    max: 100,
                    value: 100 * (a.data.scale || 1)
                }],
                run: function(e) {
                    e = Math.min(Math.max(e, 25), 100), a.setItem("scale", e / 100), c.style.transform = `scale(${e/100})`
                }
            }, {
                name: "Hide Keybind",
                description: "Change the hide keybind (Click button after input to change)",
                inputs: [{
                    type: "function",
                    name: "Input",
                    function: n => D(({
                        shift: e,
                        ctrl: t,
                        alt: o,
                        key: a
                    }) => n("" + [t && "Ctrl", e && "Shift", o && "Alt", a && a.toUpperCase()].filter(Boolean).join(" + ")))
                }],
                run: function(e) {
                    a.setItem("hide", e), l.update(a.data.hide || {
                        ctrl: !0,
                        key: "e"
                    }, a.data.close || {
                        ctrl: !0,
                        key: "x"
                    })
                }
            }, {
                name: "Close Keybind",
                description: "Change the quick close keybind (Click button after input to change)",
                inputs: [{
                    type: "function",
                    name: "Input",
                    function: n => D(({
                        shift: e,
                        ctrl: t,
                        alt: o,
                        key: a
                    }) => n("" + [t && "Ctrl", e && "Shift", o && "Alt", a && a.toUpperCase()].filter(Boolean).join(" + ")))
                }],
                run: function(e) {
                    a.setItem("close", e), l.update(a.data.hide || {
                        ctrl: !0,
                        key: "e"
                    }, a.data.close || {
                        ctrl: !0,
                        key: "x"
                    })
                }
            }, {
                name: "Background Color",
                description: "Changes the background color of the GUI",
                inputs: [{
                    type: "string",
                    name: "Color"
                }],
                run: function(e) {
                    o.sheet.cssRules[0].style.setProperty("--backgroundColor", e), a.setItem("theme.backgroundColor", e)
                }
            }, {
                name: "Category List Color",
                description: "Changes the categories list background color",
                inputs: [{
                    type: "string",
                    name: "Color"
                }],
                run: function(e) {
                    o.sheet.cssRules[0].style.setProperty("--cheatList", e), a.setItem("theme.cheatList", e)
                }
            }, {
                name: "Info Color",
                description: "Changes the color of the information at the top of the GUI",
                inputs: [{
                    type: "string",
                    name: "Color"
                }],
                run: function(e) {
                    o.sheet.cssRules[0].style.setProperty("--infoColor", e), a.setItem("theme.infoColor", e)
                }
            }, {
                name: "Button Color",
                description: "Changes the color of the cheats",
                inputs: [{
                    type: "string",
                    name: "Color"
                }],
                run: function(e) {
                    o.sheet.cssRules[0].style.setProperty("--defaultButton", e), a.setItem("theme.defaultButton", e)
                }
            }, {
                name: "Enabled Toggle Color",
                description: "Changes the color of enabled toggle cheats",
                inputs: [{
                    type: "string",
                    name: "Color"
                }],
                run: function(e) {
                    a.setItem("theme.enabledButton", e)
                }
            }, {
                name: "Disabled Toggle Color",
                description: "Changes the color of disabled toggle cheats",
                inputs: [{
                    type: "string",
                    name: "Color"
                }],
                run: function(e) {
                    o.sheet.cssRules[0].style.setProperty("--disabledButton", e), a.setItem("theme.disabledButton", e)
                }
            }, {
                name: "Text Color",
                description: "Changes the text color",
                inputs: [{
                    type: "string",
                    name: "Color"
                }],
                run: function(e) {
                    o.sheet.cssRules[0].style.setProperty("--textColor", e), a.setItem("theme.textColor", e)
                }
            }, {
                name: "Input Color",
                description: "Changes the color of inputs, like the set gold number input",
                inputs: [{
                    type: "string",
                    name: "Color"
                }],
                run: function(e) {
                    o.sheet.cssRules[0].style.setProperty("--inputColor", e), a.setItem("theme.inputColor", e)
                }
            }, {
                name: "Content Color",
                description: "Changes the background color of the cheats",
                inputs: [{
                    type: "string",
                    name: "Color"
                }],
                run: function(e) {
                    o.sheet.cssRules[0].style.setProperty("--contentBackground", e), a.setItem("theme.contentBackground", e)
                }
            }]
        };

        function L(e, t) {
            var o, a, n = 0,
                r = 0;
            e.onpointerdown = function(e = window.event) {
                n = e.clientX, r = e.clientY, document.onpointerup = function() {
                    document.onpointerup = null, document.onpointermove = null
                }, document.onpointermove = function(e = window.event) {
                    o = n - e.clientX, a = r - e.clientY, n = e.clientX, r = e.clientY;
                    t.style.top = t.offsetTop - a + "px", t.style.left = t.offsetLeft - o + "px"
                }
            }
        }

        function A() {
            c.remove();
            for (const e in N)
                for (const t of N[e]) t.enabled && t.run();
            Object.keys(N).forEach(e => N[e].forEach(e => e.enabled && (e.run(), b(...currentMode)))), window.removeEventListener("keydown", j)
        }

        function j(e) {
            var t = a.data.hide || {
                    ctrl: !0,
                    key: "e"
                },
                o = a.data.close || {
                    ctrl: !0,
                    key: "x"
                };
            (t.ctrl && e.ctrlKey || !t.ctrl && !e.ctrlKey) && (t.shift && e.shiftKey || !t.shift && !e.shiftKey) && (t.alt && e.altKey || !t.alt && !e.altKey) && e.key.toLowerCase() == t.key ? (e.preventDefault(), c.style.display = "block" === c.style.display ? "none" : "block") : (o.ctrl && e.ctrlKey || !o.ctrl && !e.ctrlKey) && (o.shift && e.shiftKey || !o.shift && !e.shiftKey) && (o.alt && e.altKey || !o.alt && !e.altKey) && e.key.toLowerCase() == o.key && (e.preventDefault(), A())
        }

        function D(c, d = window) {
            return new Promise(t => {
                const o = {};
                let a, n, r, s;
                const i = e => {
                        e.preventDefault(), o[e.code] = !0, a ||= e.shiftKey, n ||= e.ctrlKey, r ||= e.altKey, ["shift", "control", "alt", "meta"].includes(e.key.toLowerCase()) || (s = e.key.toLowerCase()), c?.({
                            shift: a,
                            ctrl: n,
                            alt: r,
                            key: s
                        })
                    },
                    l = e => {
                        delete o[e.code], 0 < Object.keys(o).length || (d.removeEventListener("keydown", i), d.removeEventListener("keyup", l), t({
                            shift: a,
                            ctrl: n,
                            alt: r,
                            key: s
                        }))
                    };
                d.addEventListener("keydown", i), d.addEventListener("keyup", l)
            })
        }
        f("Global", "https://i.ibb.co/gd4Qs8L/11507ef5615c554fe88fc22c86768501-simple-earth-icon-1.webp", N.global)(), f('<span style="font-size: 18px">Pirate\'s Voyage</span>', "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsiPjxnIGlkPSJCb2F0Ij48cGF0aCBkPSJNMTcwLjQsNTYuMDU0Yy02OC43ODgsMTAuMTc0IC0xMTUuOTcxLDU2LjkzOCAtMTQ1LjQxMSwxMzMuNzVsMTUuNDY5LDcuNzM0YzMwLjk2MiwtMjguMTc1IDc0LjcwNSwtMzcuNzg3IDEzMi4zMjIsLTI3LjI1bDAsLTE3LjYxMWMtMjUuNjI5LC0yNy45NTIgLTI2Ljk2NiwtNTYuNzcyIDAuNzE0LC04Ni42MjhsLTMuMDk0LC05Ljk5NVoiIHN0eWxlPSJmaWxsOiNmNmUwYmQ7Ii8+PHBhdGggZD0iTTE5OS42NzMsNjAuODEzYzMyLjc4NCw0Mi45ODIgNjUuODIyLDkwLjg4NyA5Ny4zMzcsMTM5LjU4MWwtNi42NjMsMGMtMTIuMDg1LC0zMS4xMTEgLTU3Ljg4MiwtMzkuNjk0IC05MS42MjYsLTI3LjI1YzIyLjUxNCwtMzQuNTc5IDE3Ljc5NiwtNzIuNjczIDAuOTUyLC0xMTIuMzMxWiIgc3R5bGU9ImZpbGw6I2Y2ZTBiZDsiLz48cGF0aCBkPSJNNjkuNDQ4LDE5Ny41MzhjMCwwIC01OS43MDcsLTE1LjI0MyAtNjguMzk4LC0xNy40NjJjLTAuMDc2LC0wLjAxOSAtMC4xNTQsMC4wMiAtMC4xODQsMC4wOTJjLTAuMDMsMC4wNzIgLTAuMDAyLDAuMTU1IDAuMDY1LDAuMTk1YzkuNjgyLDUuNzc1IDkxLjY0Nyw1NC42NTggOTEuNjQ3LDU0LjY1OGwtMjMuMTMsLTM3LjQ4M1oiIHN0eWxlPSJmaWxsOiM4ZDZlNDE7Ii8+PHBhdGggZD0iTTE2NC40NSw0Ny45MDNjMCwtNS4zNTMgNC4zNDYsLTkuNjk4IDkuNjk4LC05LjY5OGwxOS4zOTcsLTBjNS4zNTIsLTAgOS42OTgsNC4zNDUgOS42OTgsOS42OThsLTAsMTU2Ljk1M2MtMCw1LjM1MyAtNC4zNDYsOS42OTggLTkuNjk4LDkuNjk4bC0xOS4zOTcsMGMtNS4zNTIsMCAtOS42OTgsLTQuMzQ1IC05LjY5OCwtOS42OThsMCwtMTU2Ljk1M1oiIHN0eWxlPSJmaWxsOiM3ZjY4NDU7Ii8+PHBhdGggZD0iTTI2My45OTMsMjU2LjEwM2MyMi4xNzEsLTE0LjcxIDM2LjAwNywtMzUuNTE1IDM2LjAwNywtNTguNTY1bC0yMzAuNTUyLDBjMCwyMy43MTMgMTQuNjQzLDQ1LjA1IDM3Ljk0LDU5LjgxOWM5Ljg3NSwtMy43MjkgMjAuMDQxLC0xMS4zMzQgMzAuNDYzLC0yMi4zMzZjMzIuODExLDM1LjQ1NSA2NC4wNjksMzUuOTQzIDkzLjcwOCwwYzYuODM4LDkuNjc3IDE3LjczNiwxNi42NDYgMzIuNDM0LDIxLjA4MloiIHN0eWxlPSJmaWxsOiNiNjkyNWY7Ii8+PC9nPjwvc3ZnPg==", N.voyage), f("Gold Quest", "https://media.blooket.com/image/upload/v1661496292/Media/uiTest/Gold.svg", N.gold), f("Cafe", "https://i.ibb.co/t8pqdYL/hot-beverage-1.png", N.cafe), f("Crypto Hack", "https://media.blooket.com/image/upload/v1661496293/Media/uiTest/CryptoIcon.svg", N.crypto), f('<span style="font-size: 17px">Deceptive Dinos</span>', ['<img style="height: 30px;" src="https://i.ibb.co/JFq5j88/Screenshot-2024-03-26-7-30-21-PM-removebg-preview-1.png">'], N.dinos), f('<span style="font-size: 18px">Tower Defense</span>', ['<img style="width: 30px; margin-right: 5px" src="https://media.blooket.com/image/upload/v1657235025/Media/survivor/Laser_Lvl1.svg">'], N.defense), f('<span style="font-size: 16px">Tower Defense 2</span>', ['<img style="width: 30px; margin-right: 5px; rotate: 45deg" src="https://media.blooket.com/image/upload/v1593095354/Media/defense/missile.svg">'], N.defense2), f("Factory", "https://i.ibb.co/VMrTd39/images-removebg-preview-1.png", N.factory), f('<span style="font-size: 19px">Fishing Frenzy</span>', "https://media.blooket.com/image/upload/v1661496295/Media/uiTest/Fish_Weight.svg", N.fishing), f("Flappy Blook", "https://media.blooket.com/image/upload/v1645222006/Blooks/yellowBird.svg", N.flappy), f('<span style="font-size: 17px">Tower of Doom</span>', ['<img style="height: 30px; margin-left: 5px; margin-right: 10px" src="https://media.blooket.com/image/upload/v1657235023/Media/survivor/cards-05.svg">'], N.doom), f('<span style="font-size: 18px">Crazy Kingdom</span>', "https://i.ibb.co/10mZ6dx/3763864-1.png", N.kingdom), f("Racing", "https://media.blooket.com/image/upload/v1661496295/Media/uiTest/Racing_Progress.svg", N.racing), f("Battle Royale", "https://media.blooket.com/image/upload/v1655936179/Media/br/VS_Lightning_Bolt_Bottom.svg", N.royale), f("Blook Rush", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADdgAAA3YBfdWCzAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAA7YSURBVHic7Z17tFxVfcc/e59zZib3kcfN456YQObOTB43PBIKoeIqSlwIBXwiCCytXe2qxabSWrAqLKmwXKthVRe2BFxitYpasSIPV0sI8mhV5GHVdpWaoCRIvAnZSW/uzeuG3Nec/jFzk8mYOXNm73PmeT7/zt6/s+/d399vv/cWnufRSSilZgEXAZcBl42MHF5m23KrlPJBKcU9mUx6pLElrC+iEwSglFpOscIpVH5q5rfh4YPH0wkBlmUNW5b8oZTyi9ls+ol6l7XetKUAyrz8ciBbKW2pAMqRUk62e3RoGwH4ebkffgIopV2jQ8sKoOjl6zlR6RW93I+gAiinGB22SSkfklJsatXo0FICUEqt4ESFv4WAXu6HrgBKKYkOPypGh+8bG60TTS0ApVQXJ3t5JuxvhCGAcorR4aVidLg7k0kPh/6RkGg6AUTh5X5EIYBSmj06NFwA9fByP6IWQDnNFh0aIgCl1EpO9vJk3QtRpN4CKKUYHfYXo8O92Wx6S93LUA8BFL38rZyo9IHIPxqQRgqgHCnlVEl02FSP6BCZAIpefjmFCn8zDfRyP5pJAKWURIdnin2HSKJDaAJQSnVzclveNF7uR7MKoJyy6HBPJpPeF4ZdIwEopVZxosKb1sv9aBUBlFIWHb6UzaY3a9uqRQBFLy9ty9O6H24WWlEA5RSjwy+llA8X+w6Bo0NVASilBjlR4RfSgl5+KiY9eP6g4IWhad7Xf4Qu2VzzIboUo8NISXR41De9nwCUUpcAj4ddyEaxaxyeHhU8PQLPHBSMTQP7FoHwWDBrnPPnjXFd/yHW9kw0uqihkUolbsnlBjZW+t2ukl+GXJ66MunBcwcFT48WKv7loxUSeoLhoyk2H02xefd8HHuK5b2v8/sLj3DNosOtHh0svx+rCaDlKPXyHx0UHJ2u3cbklM3W0V62jvZy58tu20YHaAMBTOTh+UMBvFwXn+hw9cLD9FgtHR1aUwBDx4pePlpoy3W8XJfy6DD/eHQ4zDk94/UrSEi0hAAm8vDcjJePCLa/3ugSFfEE+4+meOxoisd2z8dxCtHhkvmFvkMrRIemFcBvSrz8x3X2cl0mJ222jvSydaSXv9/uMr9rnHVzxri2/zDn9jZndGgaATStl+viCfaPpdgylmLLa80bHRoqgFIvf+aA4PV8I0sTLc0aHeoqgBkvf2qkUPE7Wt3LdSmPDvYUudmF6HBtnaND5ALYWdqWt7mX6zI5ZbNtpJdtI738w3aXvlnjrJtXiA7nRTyyiEwAvxiDP31J8kqnerkunmDkaIrHj6Z4vDjvsHHVHi7tC3uCo0BkU737JkRc+SEwOWXz6rgTmf2WnuuPMScWQIcTC6DDiQXQ4cQC6HBiAXQ4sQA6nFgAHU4sgA4nFkCHEwugw4kF0OHEAuhwYgF0OLEAOpxqAtDei2sL3Zwx5SQx2kY16fdjNQFob+mYazfHrtd2YFFCf0+8EOKw3+/VBKC9D2lu02w4b30WJ40ORRzw+zG6CBDdLqaO4w3JKZPsvjdgRBYBeq24HxAKAvodowhgJACjbZ1z4mbAGCHM9tELge8l1pEKIO4HmGNL44MUo34/VhPAEUD7RoR5sQCMSVjGAtjr96OvAFzX9YBdul+e68RDQVOSBgKQUk5mMmlfA0FmAod0CxA3AeZ02SYCEGNV0wSwoy2ABfFQ0Jg5tv4QUAjh2/5DxAI4o1s3Z8wMqw0OhwohVLU0kQpgTU/cBzDlonn6AzEhxM5qaYIIoKqRSmS7oMf3lroYP4TweNNsEwHwUrU0QQTwM90CSOCsHt3cMT3JSaPZVCnFg1XTVEvguu5e4BXdQsTNgD6ndx3TzlscAv5v1XQB7T2rW5A1cQTQZk2vvgAsSwaav4leAL1xBNBl/Tz9W0GklC8EShfQ3nO6BUmnYHY8IVQzQnqcP1t/CCileCRQuoD2XqSwLlAzgrgfoENvckJ7w6YQwhOCh4OkDfQN13WngUAh5VSc26ubs3PJdRu1/6OZTDrQIl4tItPuB7xzQRwBauUPFus/ZWNZ8hdB09ZFAIPdsKpLN3fnkXCmuNhsBjDw87S1COB5QNuVr1wUR4GgrOvT6m4dR0rxjcBpgyZ0XfcAsE2rRMB7FnrEWwSD8eElVRfxKmJZcjyTSQeevq+1o6ndDCxNwrrZurk7h57khNGzNJYlX60lfa0C+GGN6U/iyoVxM1CNCxf4nuOoipTyP2pKX6P9h4Gqu0wq8Y4FXrxV3A8BG5b6nuPwzy4EUopP15KnJgG4rnsEeKCmUpXQ58BF8+IoUIm+WcdIGxwCsW1reyaT9t0EWo7OZNNXNfIc5z0LTXK3N5cuNAv/ti3vqjWP1uPRSqmXgVzNGSk8GvHGn0n2NMsTOvsWNboEAFjWNM+8cYf2YxFSysnVq5cnas6n9TX4mmY+EhI+elrcDJRzqXvA6KUQx7F+oJNPVwD3gf6h9ev6PZa2xRPU4WBZ09w+sN/IhpTyFq18Oplc190FPKGTF8ARcRQo5YrFB0gZvE9s29ZwNpv+T528JlfE/JNBXq7p91iWMrHQHtjWNJ9Om3m/bVvf1M1rIoDvgf/JUz9sATeeHkeBdy0ZIWHg/UIIr9axfynaAnBddxz4lm5+gPcu9MjMMrHQ2jj2FJ9Ka/tQwYZjvZjJpA/p5je9JcyoGbAE3NTBUeDKJaPGz7ZZlnWHSX6teYBSlFI/B87RzZ8H1v9c8qtoXkWrToPmARL2FC9csMNoatyy5OuDg8uNdlqEcU/graYF+Gwu33EXFv51bq/xuojj2H9nWg7j/7vruo8CT5rYOH82/NnSzmkKzpp/iGsXmW36sG1rJJcbuM20LGE53k0YTAwBfGKZx+oOOE2cdCb58mDVQ7tVcRz7+hCKE44AXNf9Hww7hI6ATSvyOG29XOyxcdUeugyGfQCJhP3LbDb93TBKFGbT+ynAaDlrdTd8fFn7NgW/13+Atxls9oTCuN+2ratCKlJ4AigeIjUakgBsWOq15dax7tQEm1bsM7aTSNhPBjn0GZSwO993Ar8xMSApNAXd7XSvgPC4e/Vrxr1+KeWUZcn3hVOoos0wjbmuewz4pKmdZSm4baB9moK3LxnhPIOrXmZIJOwvZjJp/T1jpyCK4fe3MThGNsMHXI9r+ltfBKfPHmNjZtjYjm1bR6QUfxlCkU4idAEU7xa8MQxbn8t5XNzXuiLo6zrGw2fvDsWW49gfq3bnnw6RTMC5rvss8B1TO7aAL63yOK8FD5d2Jyf43toho5W+GRzHHspm0/eGUKzfIsoZ2I9S5ZrSIMyS8I0z8qxoobOFCXuKB9YOMdfgkscZpBR527beGUKxTm0/KsOu6+4BrsPg2ZkZ5trw7TPyvKEFtpFZ1jT3rRniNLM7/o+TTDofy2bT/x2KsVMQ6RqM67r/juFi0QyLkwURNPP1s0LkuevM3ZzZrX+0q5Rk0vl+Njvw+VCMVaAei3B3AP8WhqHlXYXmYFYzLh0Kj79ZtYc3zzGb6ZvBcay9liUvC8WYD5H/K4ujgg8Cr4Zh77xe+PKgR6qZRCA8PpLby1ULzVb4ZpBSTjmOfUEUvf7f+lbUHwBwXXcUuBoI5TjIW+d5PHJ2nv6aj0GEj5R5/nb1Lq43uNGjFCEgmXT+OJNJ/zoUg1Womx+5rvtTCiODUFjTA4+tyTf0QupUYpJ/Pmcn75gf3namRCJxfzabDnzBgynGW8JqRSn1TeD9Ydk7Og1//ivBlv2aE+2aW8IWdB/jwbN30Wf2oNNJOI796sqV2YHQDAagES3p9UDgS4yq0WXBVwY9NtRxR9FZ8w/xxO/sDLXyLUuOO471u6EZDEjdBeC67hhwFZr3Dp4KCdya9rhzuRf5hpJ3nzbMt87YE+o9B0IIL5Fwrsxk0ubrxTXSkL6067ovAR+gyru2tXJdv8e/nJmP5LEqIfN8cuVrfMbwDN+pSCadO7LZ9ObQDQeg7n2AUpRS76KwZhBqf373OHxiu+Cp0QBuGqAP0Nd1jLsG97AmpAmeUlKpxMZcbkDrYGcYNFQAAEqpy4GHgNAneh/5P8GtrwiG/eKMjwCkzHPtacPcvEz/1q5KFIZ7idtyuYHbQzdeSzkaLQAApdQlwCNA6AfFDk7B7b8W3L+3QjSoIIBls8e4d1CxJKQ5/VKEECSTzi253MDG0I3XWpZmEACAUmo98K9AJCP7Hx8UfHy74JXymdoyAdj2NH+V3csH+82ua6mEEIJUyrkx6jn+oDSNAACUUhcCm4FInpkYz8PnhwRf2CWYnPmzSwSwdsEhvrByL73mr3WeEiGEl0o5N2SzA/dE8gENmkoAAEqpC4AtQGR7g7eNwc07JC8cAvYtoic5wWdWKKP7eatRqPzE9dls+h8j+4gGTScAAKXUOuBxYF6U33lyRPDskMeGJeHM41eiWPl/lM2m74v0Qxo0pQAAlFLnULiGZn6U3xkerkvlvz+bTd8f6Yc0aaZF1ZNwXfe/gPVAXVbFokBKOZVKJa5q1sqHJhYAgOu6LwJrgab9B1bCceydqZSTzmbTDzW6LH40bRNQjlLqD4G7CXmEEHYTIITwkknnK7ncwIdCNRwRTR0BSnFd9z4KN5H8tNFlqYRlWWOpVOJtrVL50EICAHBddzvwJuCzGLxeEgWJhPOTZNJelM2mn2p0WWqhZZqAcpRSFwNfBxab2DFtAqQU+UTCuTmXGzC+rqURtKwAAJRSCyncXn6Frg0TATiOtc9x7LdkMumqr3Q3Ky0tgBmUUjdQaBZqXlHUEYAQkEg4312+PHN1zZmbjJbqA1TCdd1NwLkY3F8cFNu29qdSyXe3Q+VDm0SAUpRSVwCfA1YFSR80AliWnHAce2MYN3M1E20RAUopXlt3FnADYLx/qziufyCZdOa0W+VDG0aAUpRSc4GbgQ1UmECqFAGEEJ7j2D+xbXlNLe/wtRptLYAZlFJ9FCLCXwB9pb+VC6CwQ9f+gWXJP8lk0jvqV8rG0BECmEEp1UPhXMJNFOcPZgQgpcg7jv2oZckP1fryVivTUQKYQSmVpHBg9cOjo4dXOY79oJTiIybXrrcq/w99zo6mO4xCQAAAAABJRU5ErkJggg==", N.rush), f('<span style="font-size: 18px">Monster Brawl</span>', ['<img style="height: 28px; margin-left: 5px; margin-right: 8px" src="https://media.blooket.com/image/upload/v1655233787/Media/survivor/xp/Blue_xp_2.svg">'], N.brawl), f('<span style="font-size: 15px">Santa\'s Workshop</span>', ['<img style="height: 28px; margin-left: 3px; margin-right: 6px" src="https://i.ibb.co/Y2SFc9Y/Santa-Workshop-Finished-icon-1.webp">'], N.workshop), f("Extras", "https://i.ibb.co/mb0R9HX/Star-icon-stylized-svg-1-removebg-preview.png", N.extras), f("Settings", "https://i.ibb.co/jrWKgyn/Windows-Settings-icon-1.png", N.settings, !0), L(l, c), L(e, c), window.addEventListener("keydown", j), c.addEventListener("mousemove", e => {
            var t, o;
            "cheatName" != e.target.className && "scriptButton" != e.target.className ? "0" != i.style.opacity && (i.animate([{
                opacity: .9
            }, {
                opacity: 0
            }], {
                duration: 200
            }), i.style.opacity = "0") : (e = "scriptButton" == e.target.className ? e.target : e.target.parentElement, i.innerText == e.dataset.description && "0.9" == i.style.opacity || (t = e.getBoundingClientRect(), o = e.offsetParent.getBoundingClientRect(), i.innerText = e.dataset.description, "0" == i.style.opacity && (i.animate([{
                opacity: 0
            }, {
                opacity: .9
            }], {
                duration: 200
            }), i.style.opacity = "0.9"), i.style.left = t.x - o.x + (t.width - i.clientWidth) / 2 + "px", i.style.top = t.y - o.y + t.height + "px"))
        })
    };
    let u = new Image;
    u.src = "https://raw.githubusercontent.com/DannyDan0167/Blooket-Cheats-Plus/main/Update/Others/gui.png?" + Date.now(), u.crossOrigin = "Anonymous", u.onload = function() {
        var e = document.createElement("canvas").getContext("2d");
        e.drawImage(u, 0, 0, this.width, this.height);
        let t = e.getImageData(0, 0, this.width, this.height)["data"],
            o = "",
            a, n = 0;
        for (; n < t.length;) {
            var r = String.fromCharCode(t[n % 4 == 3 && n++, n++] + 256 * t[n % 4 == 3 && n++, n++]);
            if (o += r, "/" == r && "*" == a) break;
            a = r
        }
        let s, i = 1716818721250,
            l = "There was an error checking for script updates. Run cheat anyway?";
        try {
            [s, i, l] = o.match(/LastUpdated: (.+?); ErrorMessage: "((.|\n)+?)"/)
        } catch (e) {}(parseInt(i) <= 1716818721250 || c.contentWindow.confirm(l)) && d()
    }, u.onerror = u.onabort = () => {
        u.onerror = u.onabort = null, d(), document.querySelector("iframe").contentWindow.alert("It seems the GitHub is either blocked or down.\n\nIf it's NOT blocked, join the Discord server for updates\nhttps://discord.gg/8A6J234n7v\n(The cheat will still run after this alert)")
    }
})();
