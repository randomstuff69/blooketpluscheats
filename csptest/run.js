//CREDITS TO 05KONZ FOR THE RUNTIME
const toRun = "global/crashgame";
((cheat) => {
    // Blooket developers will be able to detect this easily, so use with caution
    if (window.runCheat) return window.runCheat(cheat);

    let i = document.querySelector("iframe");
    if (!i) {
        i = document.createElement('iframe');
        document.body.append(i);
        i.style.display = "none";
    }
    const alert = i.contentWindow.alert.bind(window);
    const confirm = i.contentWindow.confirm.bind(window);
    const prompt = i.contentWindow.prompt.bind(window);
    const log = i.contentWindow.console.log;

    // by CryptoDude3 or me!
    if (window.fetch.call.toString() == 'function call() { [native code] }') {
        const call = window.fetch.call;
        window.fetch.call = function () {
            return arguments[1].includes("s.blooket.com/rc") ? log("Bypassed anti-cheat") : call.apply(this, arguments);
        }
    }

    const nil = Symbol("null");
    const This = Symbol("this");

    const Types = {};
    const tokens = "NumberExpr:number_expr,FloatExpr:float_expr,StringExpr:string_expr,SymbolExpr:symbol_expr,BinaryExpr:binary_expr,PrefixExpr:prefix_expr,SuffixExpr:suffix_expr,AssignmentExpr:assignment_expr,ObjectExpr:object_expr,ArrayExpr:array_expr,CallExpr:call_expr,MemberExpr:member_expr,DynamicMemberExpr:dynamic_member_expr,TernaryExpr:ternary_expr,FuncExpr:func_expr,GroupExpr:group_expr,BlockStmt:block_stmt,ExpressionStmt:expression_stmt,VarDeclStmt:declr_stmt,FuncDeclStmt:func_decl_stmt,WhileStmt:while_stmt,ForStmt:for_stmt,IfStmt:if_stmt,ElseStmt:else_stmt,ReturnStmt:return_stmt,ContinueStmt:continue_stmt,BreakStmt:break_stmt,EndFunc:end_func,EndFor:end_for,EndWhile:end_while,EndIf:end_if,EndElse:end_else,TernaryQue:ternary_que,TernaryCol:ternary_col,EndTernary:end_ternary,ForIncr:for_incr,TypeofExpr:typeof_expr".split(",").map(x => x.trim().split(":"));
    for (let id = 0; id < tokens.length; id++) {
        Types[tokens[id][0]] = tokens[id][1];
        Types[tokens[id][1]] = id;
        Types[id] = tokens[id][0];
    }
    class Env {
        constructor(parent, constants = {}) {
            this.parent = parent;
            this.constants = Object.create(null);
            this.variables = Object.create(null);
            for (const constant in constants) this.declareVar(constant, constants[constant], true);
        }
        declareVar(name, value, constant) {
            if (name in this.variables) throw new Error(`Cannot declare variable ${name}. As it already is defined.`);
            if (constant) this.constants[name] = true;
            return this.variables[name] = value;
        }
        assignVar(name, value) {
            if (this.constants[name]) throw new Error(`Cannot reassign constant variable`);
            const env = this.resolve(name);
            return env.variables[name] = value;
        }
        hasVar(name) {
            if (name in this.variables) return true;
            if (this.parent == undefined) return false;
            return this.parent.hasVar(name);
        }
        resolve(name) {
            if (name in this.variables) return this;
            if (this.parent == undefined) throw new Error(`Cannot resolve '${name}' as it does not exist.`);
            return this.parent.resolve(name);
        }
        lookupVar(name) {
            const env = this.resolve(name);
            return env.variables[name];
        }
    }

    function assignment_op(assignee, operator, value) {
        switch (operator) {
            case "+=":
                return assignee + value;
            case "-=":
                return assignee - value;
            case "*=":
                return assignee * value;
            case "/=":
                return assignee / value;
            case "%=":
                return assignee % value;
            case "=":
                return value
        }
        throw new Error(`Unknown assignment operator: ${operator}`);
    }

    class Eval {
        ind = 0;
        source;
        constructor(source) {
            this.source = source;
        }
        StringExpr() {
            const size = this.code(this.ind++);
            const str = this.source.slice(this.ind, this.ind + size);
            this.ind += size;
            return str;
        }
        NumberExpr() {
            const size = this.code(this.ind++);
            let num = 0;
            for (let i = 0; i < size; i++) {
                num += this.code(this.ind++) * Math.pow(65536, i);
            }
            return num;
        }
        FloatExpr() {
            return parseFloat(this.StringExpr());
        }
        SymbolExpr(env) {
            return env.lookupVar(this.StringExpr());
        }
        BlockStmt(env) {
            const size = this.code(this.ind++);
            for (let i = 0; i < size; i++) this.evaluate(env);
        }
        VarDeclStmt(env) {
            const name = this.evaluate(env);
            const isConstant = this.code(this.ind++) == 1;
            const value = this.code(this.ind++) == 1 ? this.evaluate(env) : null;
            return env.declareVar(name, value, isConstant);
        }
        ExpressionStmt(env) {
            return this.evaluate(env);
        }
        MemberExpr(env) {
            const assignee = this.evaluate(env);
            const prop = this.evaluate(env);
            let res = assignee?.[prop];
            try { res && (res[This] = assignee); } catch { };
            return res;
        }
        AssignmentExpr(env) {

            const type = Types[this.code(this.ind++)];
            if (type == "MemberExpr") {
                let assignee = this.evaluate(env);
                const property = this.evaluate(env);
                return assignee[property] = assignment_op(assignee[property], this.evaluate(env), this.evaluate(env));
            }
            if (type == "SymbolExpr") {
                const str = this.StringExpr();
                return env.assignVar(str, assignment_op(env.lookupVar(str), this.evaluate(env), this.evaluate(env)));
            }
            throw new Error(`Unknown assignment type ${type}`);
        }
        PrefixExpr(env) {
            const operator = this.evaluate(env);
            switch (operator) {
                case "-":
                    return -this.evaluate(env);
                case "!":
                    return !this.evaluate(env);
            }
            throw new Error(`Unknown prefix operator: ${operator}`);
        }
        ObjectExpr(env) {
            const obj = {};
            const size = this.code(this.ind++);
            for (let i = 0; i < size; i++) {
                const key = this.evaluate(env);
                obj[key] = this.evaluate(env);
            }
            return obj;
        }
        static LoopEnv(env) {
            const loop_env = new Env(env);
            loop_env.declareVar("break", nil);
            loop_env.declareVar("continue", nil);
            return loop_env;
        }
        ForStmt(env) {
            const for_env = Eval.LoopEnv(env);
            this.evaluate(for_env);
            const vars = { ...for_env.variables };
            const start = this.ind;
            const end = this.findNext(Types.for_stmt, Types.end_for);
            const incr = this.findNext(Types.for_stmt, Types.for_incr);
            while ((this.ind = start, this.evaluate(for_env))) {
                this.evaluate(for_env);
                for_env.assignVar("continue", nil);
                if (for_env.lookupVar("break") != nil) break;
                this.ind = incr;
                this.evaluate(for_env);
                for (const key in for_env.variables) if (!(key in vars)) {
                    delete for_env.variables[key];
                    delete for_env.constants[key];
                }
            }
            this.ind = end;
            return;
        }
        WhileStmt(env) {
            let while_env = Eval.LoopEnv(env);
            const start = this.ind;
            const end = this.findNext(Types.while_stmt, Types.end_while);
            while ((this.ind = start, this.evaluate(while_env))) {
                this.evaluate(while_env);
                while_env.assignVar("continue", nil);
                if (while_env.lookupVar("break") != nil) break;
                while_env.variables = {
                    break: nil,
                    continue: nil
                }
                while_env.constants = Object.create(null);
            }
            this.ind = end;
        }
        BinaryExpr(env) {
            const left = this.evaluate(env);
            const operator = this.evaluate(env);
            const right = this.evaluate(env);
            switch (operator) {
                case "+":
                    return left + right;
                case "-":
                    return left - right;
                case "*":
                    return left * right;
                case "/":
                    return left / right;
                case "%":
                    return left % right;
                case "<":
                    return left < right;
                case ">":
                    return left > right;
                case "<=":
                    return left <= right;
                case ">=":
                    return left >= right;
                case "==":
                    return left == right;
                case "!=":
                    return left != right;
                case "||":
                    return left || right;
                case "&&":
                    return left && right;
            }
            throw new Error(`Unknown binary operator ${operator}`);
        }
        SuffixExpr(env) {
            if (this.code(this.ind++) == Types.symbol_expr) {
                const assignee = this.StringExpr(env);
                const operator = this.evaluate(env);
                switch (operator) {
                    case "++":
                        return env.assignVar(assignee, env.lookupVar(assignee) + 1);
                    case "--":
                        return env.assignVar(assignee, env.lookupVar(assignee) - 1);
                }
                throw new Error(`Unknown suffix operator: ${operator}`);
            }
            const assignee = this.evaluate(env);
            const property = this.evaluate(env);
            const operator = this.evaluate(env);
            switch (operator) {
                case "++":
                    return assignee[property]++;
                case "--":
                    return assignee[property]--;
            }
            throw new Error(`Unknown suffix operator: ${operator}`);
        }
        CallExpr(env) {
            const callee = this.evaluate(env);
            const args = [];
            const size = this.code(this.ind++);
            for (let i = 0; i < size; i++)
                args.push(this.evaluate(env));
            if (typeof callee == "function") {
                let ret;
                try { ret = callee.apply(callee[This], args); } catch (e) {
                    i.contentWindow.console.warn(e);
                }
                return ret;
            }
        }
        FuncExpr(env) {
            this.ind++;
            const name = this.StringExpr(env);
            const parameters = [];
            const size = this.code(this.ind++);
            for (let i = 0; i < size; i++) {
                this.ind++;
                parameters.push(this.StringExpr(env));
            }

            const here = this.ind;
            this.ind = this.findNext(Types.func_expr, Types.end_func);

            const runtime = this;
            const fn = function () {
                const fn_env = new Env(env);
                fn_env.declareVar("arguments", arguments);
                fn_env.declareVar("this", this);
                for (const param in parameters) fn_env.declareVar(parameters[param], arguments[param]);
                fn_env.declareVar("return", nil);

                runtime.evaluateInd(fn_env, here);

                return fn_env.lookupVar("return");
            }
            if (name.length) env.declareVar(name, fn);
            return fn;
        }
        ArrayExpr(env) {
            const arr = [];
            const size = this.code(this.ind++);
            for (let i = 0; i < size; i++) {
                arr.push(this.evaluate(env));
            }
            return arr;
        }
        ReturnStmt(env) {
            const ret = this.code(this.ind++) == 1 ? this.evaluate(env) : null;
            return env.assignVar("return", ret);
        }
        BreakStmt(env) {
            return env.assignVar("break", true);
        }
        ContinueStmt(env) {
            return env.assignVar("continue", true);
        }
        IfStmt(env) {
            const elseLoc = this.findNext(Types.if_stmt, Types.end_if);
            const condition = this.evaluate(env);
            if (condition) {
                this.evaluate(new Env(env));
                this.ind++;
                if (this.code(this.ind++) == 1) {
                    this.ind = this.findNext(Types.else_stmt, Types.end_else);
                }
            } else {
                this.ind = elseLoc;
                if (this.code(this.ind++) == 1) {
                    this.ind++;
                    this.evaluate(new Env(env));
                    this.ind++;
                }
            }
        }
        TernaryExpr(env) {
            const condition = this.evaluate(env);
            this.ind++;
            const endLoc = this.findNext(Types.ternary_expr, Types.end_ternary);
            const elseLoc = this.findNext(Types.ternary_que, Types.ternary_col);
            let val;
            if (condition) {
                val = this.evaluate(env);
                this.ind = endLoc;
            } else {
                this.ind = elseLoc;
                val = this.evaluate(env);
                this.ind++;
            }
            return val;
        }
        GroupExpr(env) {
            let last;
            const size = this.code(this.ind++);
            for (let i = 0; i < size; i++)
                last = this.evaluate(env);
            return last;
        }
        TypeofExpr(env) {
            return typeof this.evaluate(env);
        }
        findNext(open, close) {
            let num = 1, ind;
            for (ind = this.ind + 1; ind < this.source.length && num > 0; ind++) {
                if (this.code(ind - 1) == 2 && this.code(ind - 2) != 16) ind++;
                if (this.code(ind) == close) num--;
                else if (this.code(ind) == open) num++;
            }
            return ind;
        }
        code(i) {
            return this.source.charCodeAt(i);
        }
        evaluate(env) {
            const type = Types[this.code(this.ind++)];
            if (env.hasVar("return") && env.lookupVar("return") != nil) return;
            if (env.hasVar("break") && env.lookupVar("break") != nil) return;
            if (env.hasVar("continue") && env.lookupVar("continue") != nil) return;
            if (type in this) return this[type](env);
            console.error(new Error(`No eval function for type ${type}`))
            throw new Error(`No eval function for type ${type}`);
        }
        evaluateInd(env, ind) {
            const temp = this.ind;
            this.ind = ind;
            const value = this.evaluate(env);
            const end = this.ind;
            this.ind = temp;
            return [value, end];
        }
    }

    function addProps(element, obj) {
        for (const prop in obj) if (typeof obj[prop] == "object") addProps(element[prop], obj[prop]);
        else element[prop] = obj[prop];
    }
    const constants = {
        true: true, false: false, null: null,
        setVal: (path, val) => constants.stateNode.props.liveGameController.setVal({ path, val }),
        print: log, console: i.contentWindow.console,
        window, alert, confirm, prompt, promptFloat: (x) => parseFloat(prompt(x)), promptNum: (x) => parseInt(prompt(x)),
        isNaN, parseFloat, parseInt,
        Date, Object, Array, Math, Promise, Number,
        queryElement: document.querySelector.bind(document), 
        queryElementAll: document.querySelectorAll.bind(document),
        fetch: window.fetch.bind(window),
        elStateNode: s => Object.values(document.querySelector(s))[1].children._owner.stateNode,
        createElement: function createElement(type, props, ...children) {
            const element = document.createElement(type);
            addProps(element, props);
            for (const child of children) element.append(child);
            return element;
        }
    };
    Object.defineProperty(constants, "stateNode", {
        get: () => Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode,
        enumerable: true
    });
    const env = new Env(undefined, constants);
    (window.runCheat = function (path) {
        let img = new Image;
        img.src = "https://raw.githubusercontent.com/DannyDan0167/Blooket-Cheats-Plus/main/csptest/out/" + path + ".png?" + Date.now();
        img.crossOrigin = "Anonymous";
        img.onload = function () {
            const c = document.createElement("canvas");
            const ctx = c.getContext("2d");
            ctx.drawImage(img, 0, 0, this.width, this.height);
            let { data } = ctx.getImageData(0, 0, this.width, this.height), decode = "";
            let i = 0;
            while (i < data.length)
                decode += String.fromCharCode(data[i % 4 == 3 ? (i++, i++) : i++] + data[i % 4 == 3 ? (i++, i++) : i++] * 256);
            new Eval(decode).evaluate(new Env(env));
        }
        img.onerror = img.onabort = () => {
            img.onerror = img.onabort = null;
            let iframe = document.querySelector("iframe");
            iframe.contentWindow.alert("It seems the GitHub is either blocked or down.\n\nIf it's NOT blocked, join the Discord server for updates\nhttps://discord.gg/jHjGrrdXP6");
        }
    })(cheat);
})(toRun);
