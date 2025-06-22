import { importShared } from './__federation_fn_import-DM6g2I0y.js';

const remotesMap = {
'remote_app':{url:'https://asyrafbilalfbj.github.io/guest-book-remote/assets/remoteEntry.js',format:'esm',from:'vite'}
};
                const currentImports = {};
                const loadJS = async (url, fn) => {
                    const resolvedUrl = typeof url === 'function' ? await url() : url;
                    const script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.onload = fn;
                    script.src = resolvedUrl;
                    document.getElementsByTagName('head')[0].appendChild(script);
                };

                function get(name, remoteFrom) {
                    return __federation_import(name).then(module => () => {
                        if (remoteFrom === 'webpack') {
                            return Object.prototype.toString.call(module).indexOf('Module') > -1 && module.default ? module.default : module
                        }
                        return module
                    })
                }
                
                function merge(obj1, obj2) {
                  const mergedObj = Object.assign(obj1, obj2);
                  for (const key of Object.keys(mergedObj)) {
                    if (typeof mergedObj[key] === 'object' && typeof obj2[key] === 'object') {
                      mergedObj[key] = merge(mergedObj[key], obj2[key]);
                    }
                  }
                  return mergedObj;
                }

                const wrapShareModule = remoteFrom => {
                  return merge({
                    'vue':{'undefined':{get:()=>get(new URL('__federation_shared_vue-x28ksfzk.js', import.meta.url).href, remoteFrom), loaded:1}},'vuex':{'undefined':{get:()=>get(new URL('__federation_shared_vuex-CORSZprf.js', import.meta.url).href, remoteFrom), loaded:1}},'vue-router':{'undefined':{get:()=>get(new URL('__federation_shared_vue-router-yCBgeUIz.js', import.meta.url).href, remoteFrom), loaded:1}}
                  }, (globalThis.__federation_shared__ || {})['default'] || {});
                };

                async function __federation_import(name) {
                    currentImports[name] ??= import(name);
                    return currentImports[name]
                }

                async function __federation_method_ensure(remoteId) {
                    const remote = remotesMap[remoteId];
                    if (!remote.inited) {
                        if ('var' === remote.format) {
                            // loading js with script tag
                            return new Promise(resolve => {
                                const callback = () => {
                                    if (!remote.inited) {
                                        remote.lib = window[remoteId];
                                        remote.lib.init(wrapShareModule(remote.from));
                                        remote.inited = true;
                                    }
                                    resolve(remote.lib);
                                };
                                return loadJS(remote.url, callback);
                            });
                        } else if (['esm', 'systemjs'].includes(remote.format)) {
                            // loading js with import(...)
                            return new Promise((resolve, reject) => {
                                const getUrl = typeof remote.url === 'function' ? remote.url : () => Promise.resolve(remote.url);
                                getUrl().then(url => {
                                    import(/* @vite-ignore */ url).then(lib => {
                                        if (!remote.inited) {
                                            const shareScope = wrapShareModule(remote.from);
                                            lib.init(shareScope);
                                            remote.lib = lib;
                                            remote.lib.init(shareScope);
                                            remote.inited = true;
                                        }
                                        resolve(remote.lib);
                                    }).catch(reject);
                                });
                            })
                        }
                    } else {
                        return remote.lib;
                    }
                }

                function __federation_method_unwrapDefault(module) {
                    return (module?.__esModule || module?.[Symbol.toStringTag] === 'Module') ? module.default : module
                }

                function __federation_method_getRemote(remoteName, componentName) {
                    return __federation_method_ensure(remoteName).then((remote) => remote.get(componentName).then(factory => factory()));
                }

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const __federation_var_remote_appLogin = await __federation_method_getRemote("remote_app" , "./Login");
 let Login = __federation_method_unwrapDefault(__federation_var_remote_appLogin); 
const _sfc_main$4 = {
    components: {
        Login
    }
};

const {resolveComponent:_resolveComponent$4,createVNode:_createVNode$4,createElementVNode:_createElementVNode$4,openBlock:_openBlock$4,createElementBlock:_createElementBlock$4} = await importShared('vue');


const _hoisted_1$4 = { class: "h-screen" };
const _hoisted_2$4 = { class: "flex justify-center items-center min-h-screen" };

function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Login = _resolveComponent$4("Login");

  return (_openBlock$4(), _createElementBlock$4("div", _hoisted_1$4, [
    _createElementVNode$4("div", _hoisted_2$4, [
      _createVNode$4(_component_Login)
    ])
  ]))
}
const LoginView = /*#__PURE__*/_export_sfc(_sfc_main$4, [['render',_sfc_render$4]]);

const __federation_var_remote_appAddMessage = await __federation_method_getRemote("remote_app" , "./AddMessage");
 let AddMessage = __federation_method_unwrapDefault(__federation_var_remote_appAddMessage); 
const _sfc_main$3 = {
    components: {
        AddMessage
    }
};

const {resolveComponent:_resolveComponent$3,createVNode:_createVNode$3,createElementVNode:_createElementVNode$3,openBlock:_openBlock$3,createElementBlock:_createElementBlock$3} = await importShared('vue');


const _hoisted_1$3 = { class: "h-screen" };
const _hoisted_2$3 = { class: "flex justify-center items-center min-h-screen" };

function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AddMessage = _resolveComponent$3("AddMessage");

  return (_openBlock$3(), _createElementBlock$3("div", _hoisted_1$3, [
    _createElementVNode$3("div", _hoisted_2$3, [
      _createVNode$3(_component_AddMessage)
    ])
  ]))
}
const AddMessageView = /*#__PURE__*/_export_sfc(_sfc_main$3, [['render',_sfc_render$3]]);

const __federation_var_remote_appMessages = await __federation_method_getRemote("remote_app" , "./Messages");
 let Messages = __federation_method_unwrapDefault(__federation_var_remote_appMessages); 
const _sfc_main$2 = {
    components: {
        Messages
    }
};

const {resolveComponent:_resolveComponent$2,createVNode:_createVNode$2,createElementVNode:_createElementVNode$2,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2} = await importShared('vue');


const _hoisted_1$2 = { class: "h-full" };
const _hoisted_2$2 = { class: "flex flex-col items-center min-h-screen" };

function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Messages = _resolveComponent$2("Messages");

  return (_openBlock$2(), _createElementBlock$2("div", _hoisted_1$2, [
    _createElementVNode$2("div", _hoisted_2$2, [
      _createVNode$2(_component_Messages)
    ])
  ]))
}
const MessagesView = /*#__PURE__*/_export_sfc(_sfc_main$2, [['render',_sfc_render$2]]);

const __federation_var_remote_appAddGuest = await __federation_method_getRemote("remote_app" , "./AddGuest");
 let AddGuest = __federation_method_unwrapDefault(__federation_var_remote_appAddGuest); 
const _sfc_main$1 = {
    components: {
        AddGuest
    }
};

const {resolveComponent:_resolveComponent$1,createVNode:_createVNode$1,createElementVNode:_createElementVNode$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');


const _hoisted_1$1 = { class: "h-screen" };
const _hoisted_2$1 = { class: "flex justify-center items-center min-h-screen" };

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AddGuest = _resolveComponent$1("AddGuest");

  return (_openBlock$1(), _createElementBlock$1("div", _hoisted_1$1, [
    _createElementVNode$1("div", _hoisted_2$1, [
      _createVNode$1(_component_AddGuest)
    ])
  ]))
}
const AddGuestView = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1]]);

const _sfc_main = {
    
};

const {createElementVNode:_createElementVNode,createTextVNode:_createTextVNode,resolveComponent:_resolveComponent,withCtx:_withCtx,createVNode:_createVNode,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');


const _hoisted_1 = { class: "h-full" };
const _hoisted_2 = { class: "flex flex-col justify-center items-center min-h-screen" };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RouterLink = _resolveComponent("RouterLink");

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _cache[1] || (_cache[1] = _createElementVNode("p", { class: "font-bold" }, "Access Denied", -1)),
      _cache[2] || (_cache[2] = _createElementVNode("p", null, "You do not have permission to access this page.", -1)),
      _createVNode(_component_RouterLink, {
        to: "/",
        class: "btn btn-accent"
      }, {
        default: _withCtx(() => _cache[0] || (_cache[0] = [
          _createTextVNode("Go back to Home")
        ])),
        _: 1
      })
    ])
  ]))
}
const UnauthorizedView = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

const {createWebHistory,createRouter} = await importShared('vue-router');
const __federation_var_remote_appstore = await __federation_method_getRemote("remote_app" , "./store");
 let store = __federation_method_unwrapDefault(__federation_var_remote_appstore); 
const router = createRouter({
  history: createWebHistory("/guest-book-host"),
  routes: [
    {
      path: "/login",
      component: LoginView
    },
    {
      path: "/unauthorized",
      component: UnauthorizedView
    },
    {
      path: "/",
      component: MessagesView,
      meta: {
        needsAuth: true
      }
    },
    {
      path: "/add-message",
      component: AddMessageView,
      meta: {
        needsAuth: true,
        role: "user"
      }
    },
    {
      path: "/add-guest",
      component: AddGuestView,
      meta: {
        needsAuth: true,
        role: "admin"
      }
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.meta.needsAuth) {
    const token = store.state.accessToken;
    if (token) {
      const userRole = store.state.user.role;
      if (to.meta.role && to.meta.role !== userRole) {
        return next("/unauthorized");
      }
      return next();
    } else {
      return next("/login");
    }
  }
  next();
});

export { __federation_method_getRemote as _, __federation_method_unwrapDefault as a, _export_sfc as b, router as default };
