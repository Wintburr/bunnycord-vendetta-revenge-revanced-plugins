(function(e,o,i){"use strict";const a=o.findByProps("dispatch");let t;var d={onLoad:function(){t=i.before("dispatch",a,function(u){let[n]=u;n.type==="SPOTIFY_PROFILE_UPDATE"&&n.payload?.isPremium===void 0&&(n.payload.isPremium=!0)})},onUnload:function(){typeof t=="function"&&t()}};return e.default=d,Object.defineProperty(e,"__esModule",{value:!0}),e})({},vendetta.metro,vendetta.patcher);