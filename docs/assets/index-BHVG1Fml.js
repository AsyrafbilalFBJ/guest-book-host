import { importShared } from './__federation_fn_import-DM6g2I0y.js';
import router, { _ as __federation_method_getRemote, a as __federation_method_unwrapDefault, b as _export_sfc } from './__federation_expose_Router-g6G3X4cq.js';

const __federation_var_remote_appHeader = await __federation_method_getRemote("remote_app" , "./Header");
 let Header = __federation_method_unwrapDefault(__federation_var_remote_appHeader); 
const _sfc_main = {
  components: {
    Header
  }
};

const {resolveComponent:_resolveComponent,openBlock:_openBlock,createBlock:_createBlock,createCommentVNode:_createCommentVNode,createVNode:_createVNode,createElementVNode:_createElementVNode,Fragment:_Fragment,createElementBlock:_createElementBlock} = await importShared('vue');


function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Header = _resolveComponent("Header");
  const _component_RouterView = _resolveComponent("RouterView");

  return (_openBlock(), _createElementBlock(_Fragment, null, [
    (_ctx.$route.meta.needsAuth && _ctx.$route.path !== '/authorization')
      ? (_openBlock(), _createBlock(_component_Header, { key: 0 }))
      : _createCommentVNode("", true),
    _createElementVNode("main", null, [
      _createVNode(_component_RouterView)
    ])
  ], 64))
}
const App = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render]]);

const {createApp} = await importShared('vue');
const __federation_var_remote_appstore = await __federation_method_getRemote("remote_app" , "./store");
 let store = __federation_method_unwrapDefault(__federation_var_remote_appstore); 
const __federation_var_remote_appaxios = await __federation_method_getRemote("remote_app" , "./axios");
 let axios = __federation_method_unwrapDefault(__federation_var_remote_appaxios); 

store.dispatch('initializeApp').then(() => {
    createApp(App).use(router).use(store).use(axios).mount('#app');
});
