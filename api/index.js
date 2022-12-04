var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server");
var import_react = require("@emotion/react");
var import_create_instance = __toESM(require("@emotion/server/create-instance"));
var import_react2 = require("@remix-run/react");
var import_config = require("dotenv/config");

// app/context.ts
var React2 = __toESM(require("react"));
var ServerStyleContext = React2.createContext(null);
var ClientStyleContext = React2.createContext(null);

// app/createEmotionCache.ts
var import_cache = __toESM(require("@emotion/cache"));
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// app/entry.server.tsx
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = (0, import_create_instance.default)(cache);
  const html = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(ServerStyleContext.Provider, {
    value: null
  }, /* @__PURE__ */ React.createElement(import_react.CacheProvider, {
    value: cache
  }, /* @__PURE__ */ React.createElement(import_react2.RemixServer, {
    context: remixContext,
    url: request.url
  }))));
  const chunks = extractCriticalToChunks(html);
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(ServerStyleContext.Provider, {
    value: chunks.styles
  }, /* @__PURE__ */ React.createElement(import_react.CacheProvider, {
    value: cache
  }, /* @__PURE__ */ React.createElement(import_react2.RemixServer, {
    context: remixContext,
    url: request.url
  }))));
  responseHeaders.set("Content-Type", "text/html");
  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:E:\GitHub\cookie.tygr.dev\app\root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react3 = __toESM(require("react"));
var import_react4 = require("@remix-run/react");
var import_react5 = require("@chakra-ui/react");
var import_react6 = require("@emotion/react");
var meta = () => ({
  charset: "utf-8",
  title: "Cookie",
  viewport: "width=device-width,initial-scale=1"
});
var links = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstaticom" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    }
  ];
};
function App() {
  return /* @__PURE__ */ import_react3.default.createElement(Document, null, /* @__PURE__ */ import_react3.default.createElement(import_react5.ChakraProvider, null, /* @__PURE__ */ import_react3.default.createElement(import_react4.Outlet, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ import_react3.default.createElement(Document, null, /* @__PURE__ */ import_react3.default.createElement(import_react5.VStack, {
    h: "100vh",
    justify: "center"
  }, /* @__PURE__ */ import_react3.default.createElement(import_react5.Heading, {
    fontFamily: "Rubik"
  }, "There was an error"), /* @__PURE__ */ import_react3.default.createElement(import_react5.Code, null, error.message)));
}
function CatchBoundary() {
  let caught = (0, import_react4.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement(import_react5.Text, {
        fontFamily: "Rubik"
      }, "Oops! Looks like you tried to visit a page that you do not have access to."));
      break;
    case 404:
      message = /* @__PURE__ */ import_react3.default.createElement(import_react5.Text, {
        fontFamily: "Rubik"
      }, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ import_react3.default.createElement(Document, null, /* @__PURE__ */ import_react3.default.createElement(import_react5.VStack, {
    h: "100vh",
    justify: "center"
  }, /* @__PURE__ */ import_react3.default.createElement(import_react5.Heading, {
    fontFamily: "Rubik"
  }, caught.status, ": ", caught.statusText), message));
}
var Document = (0, import_react6.withEmotionCache)(({ children }, emotionCache) => {
  const serverSyleData = import_react3.default.useContext(ServerStyleContext);
  const clientStyleData = import_react3.default.useContext(ClientStyleContext);
  import_react3.default.useEffect(() => {
    emotionCache.sheet.container = document.head;
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      emotionCache.sheet._insertTag(tag);
    });
    clientStyleData == null ? void 0 : clientStyleData.reset();
  }, []);
  return /* @__PURE__ */ import_react3.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react3.default.createElement("head", null, /* @__PURE__ */ import_react3.default.createElement(import_react4.Meta, null), /* @__PURE__ */ import_react3.default.createElement(import_react4.Links, null), serverSyleData == null ? void 0 : serverSyleData.map(({ key, ids, css }) => /* @__PURE__ */ import_react3.default.createElement("style", {
    key,
    "data-emotion": `${key} ${ids.join(" ")}`,
    dangerouslySetInnerHTML: { __html: css }
  }))), /* @__PURE__ */ import_react3.default.createElement("body", null, children, /* @__PURE__ */ import_react3.default.createElement(import_react4.ScrollRestoration, null), /* @__PURE__ */ import_react3.default.createElement(import_react4.Scripts, null), true ? /* @__PURE__ */ import_react3.default.createElement(import_react4.LiveReload, null) : null));
});

// route:E:\GitHub\cookie.tygr.dev\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  RandHeading: () => RandHeading,
  default: () => Index
});
var import_react16 = require("@chakra-ui/react");

// components/UI/Container.tsx
var import_react9 = require("@chakra-ui/react");

// components/UI/Navbar.tsx
var import_react7 = require("@chakra-ui/react");
var import_fa = require("react-icons/fa");
var import_bs = require("react-icons/bs");
var import_ai = require("react-icons/ai");
var import_react8 = require("@remix-run/react");
function Navbar() {
  const { colorMode, toggleColorMode } = (0, import_react7.useColorMode)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react7.Flex, {
    zIndex: 99,
    position: "fixed",
    w: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    px: "20vw",
    py: "2vh",
    backdropFilter: "blur(5px)"
  }, /* @__PURE__ */ React.createElement(import_fa.FaCookieBite, {
    fontSize: "24px"
  }), /* @__PURE__ */ React.createElement(import_react7.Stack, {
    isInline: true,
    spacing: "3vw"
  }, /* @__PURE__ */ React.createElement(import_react8.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement(import_react7.Button, {
    fontWeight: "semibold",
    variant: "ghost",
    p: 4
  }, "Home")), /* @__PURE__ */ React.createElement(import_react8.Link, {
    to: "/team"
  }, /* @__PURE__ */ React.createElement(import_react7.Button, {
    fontWeight: "semibold",
    variant: "ghost",
    p: 4
  }, "Team")), /* @__PURE__ */ React.createElement(import_react8.Link, {
    to: "/team"
  }, /* @__PURE__ */ React.createElement(import_react7.Button, {
    fontWeight: "semibold",
    variant: "ghost",
    p: 4
  }, "Changelogs")), /* @__PURE__ */ React.createElement(import_react7.Button, {
    variant: "ghost",
    p: "4",
    fontSize: "16px",
    onClick: toggleColorMode
  }, colorMode === "dark" ? /* @__PURE__ */ React.createElement(import_bs.BsMoonFill, null) : /* @__PURE__ */ React.createElement(import_bs.BsFillSunFill, null)), /* @__PURE__ */ React.createElement(import_react7.Link, {
    href: "https://github.com/tygerxqt/cookie"
  }, /* @__PURE__ */ React.createElement(import_react7.Button, {
    variant: "ghost",
    p: "4",
    fontSize: "24px"
  }, /* @__PURE__ */ React.createElement(import_ai.AiFillGithub, null))))));
}

// components/UI/Container.tsx
function Container({ children }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement(import_react9.Flex, {
    as: "main",
    flexDirection: "column",
    justifyContent: "center",
    px: ["4vw", "4vw", "8vw", "8vw"],
    py: ["4vh", "4vh", "8vh", "8vh"]
  }, children), /* @__PURE__ */ React.createElement(import_react9.Stack, {
    alignItems: "center",
    mb: "3vh",
    spacing: 0
  }, /* @__PURE__ */ React.createElement(import_react9.Text, {
    textAlign: "center",
    fontSize: "sm"
  }, "Designed by", " ", /* @__PURE__ */ React.createElement(import_react9.Link, {
    href: "https://tygr.dev",
    isExternal: true,
    fontWeight: "semibold"
  }, "tygerxqt.")), /* @__PURE__ */ React.createElement(import_react9.Text, {
    textAlign: "center",
    fontSize: "sm"
  }, "Built with", " ", /* @__PURE__ */ React.createElement(import_react9.Link, {
    href: "https://remix.run/",
    fontWeight: "semibold",
    isExternal: true
  }, "Remix"), " ", "&", " ", /* @__PURE__ */ React.createElement(import_react9.Link, {
    href: "https://chakra-ui.com/",
    fontWeight: "semibold",
    isExternal: true
  }, "Chakra UI"), ". Hosted on", " ", /* @__PURE__ */ React.createElement(import_react9.Link, {
    href: "https://vercel.com/",
    fontWeight: "semibold",
    isExternal: true
  }, "Vercel"), ".")));
}

// route:E:\GitHub\cookie.tygr.dev\app\routes\index.tsx
var import_react17 = require("react");
var import_cg2 = require("react-icons/cg");

// components/Timeline/Icon.tsx
var import_react11 = require("@chakra-ui/react");

// components/Transitions/FadeIn.tsx
var import_react10 = require("@chakra-ui/react");
function FadeIn({ children }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react10.Fade, {
    in: true,
    transition: { enter: { duration: 0.4, delay: 1 } }
  }, children));
}

// components/Timeline/Icon.tsx
function Icon({
  icon,
  transition
}) {
  const transitionOn = true;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, transitionOn ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react11.Center, null, /* @__PURE__ */ React.createElement(FadeIn, null, /* @__PURE__ */ React.createElement(import_react11.Center, null, icon)))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react11.Center, null, icon)));
}

// components/Timeline/Vertical.tsx
var import_react12 = require("@chakra-ui/react");
function Vertical({
  height,
  color,
  thickness,
  transition,
  props
}) {
  const transitionOn = true;
  const { colorMode } = (0, import_react12.useColorMode)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, transitionOn ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react12.Center, null, /* @__PURE__ */ React.createElement(FadeIn, null, /* @__PURE__ */ React.createElement(import_react12.Box, __spreadValues({
    border: typeof thickness === "number" ? `${thickness}px` : thickness,
    height: typeof height === "number" ? `${height}px` : height,
    color: color || colorMode === "light" ? "gray.500" : "gray.800"
  }, props))))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react12.Center, null, /* @__PURE__ */ React.createElement(import_react12.Box, {
    border: typeof thickness === "number" ? `${thickness}px` : thickness,
    height: typeof height === "number" ? `${height}px` : height,
    color: color || colorMode === "light" ? "gray.500" : "gray.800"
  }))));
}

// components/Modules/Modules.tsx
var import_react14 = require("@chakra-ui/react");

// components/Transitions/FinalSlideFade.tsx
var import_react13 = require("@chakra-ui/react");
function FinalSlideFade({ children }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react13.SlideFade, {
    in: true,
    transition: {
      enter: { duration: 0.4, delay: 0.7 }
    }
  }, children));
}

// components/Modules/Modules.tsx
var import_cg = require("react-icons/cg");
function Modules() {
  const { colorMode } = (0, import_react14.useColorMode)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react14.Center, null, /* @__PURE__ */ React.createElement(import_react14.Stack, {
    alignItems: "center",
    textAlign: "center",
    spacing: 2,
    p: 8
  }, /* @__PURE__ */ React.createElement(FinalSlideFade, null, /* @__PURE__ */ React.createElement(import_react14.Box, {
    width: "30vw"
  }, /* @__PURE__ */ React.createElement(import_react14.Heading, {
    fontSize: "6xl"
  }, "Modules"), /* @__PURE__ */ React.createElement(import_react14.Text, {
    fontSize: "lg"
  }, "Cookie's commands are split into their own modules. Modules are fully customisable by allowing you to set per role and user permissions so they can intergrate with your existing server and permission system with ease. Modules can also be toggled on and off if you want to disable them."))))), /* @__PURE__ */ React.createElement(import_react14.Stack, {
    alignItems: "center",
    spacing: 0
  }, /* @__PURE__ */ React.createElement(import_react14.SimpleGrid, {
    columns: 4,
    spacing: 0
  }, /* @__PURE__ */ React.createElement(FadeIn, null, /* @__PURE__ */ React.createElement(import_react14.Box, {
    w: "10vw",
    h: "20vh",
    mt: "20vh",
    ml: "10vw",
    borderLeft: "2px",
    borderTop: "2px",
    color: colorMode === "light" ? "gray.500" : "gray.800",
    borderRadius: "1rem 0 0 0"
  })), /* @__PURE__ */ React.createElement(FadeIn, null, /* @__PURE__ */ React.createElement(import_react14.Box, {
    w: "20vw",
    h: "20vh",
    mt: "2px",
    borderRight: "1px",
    borderBottom: "2px",
    color: colorMode === "light" ? "gray.500" : "gray.800",
    borderRadius: "0 0 1rem 0"
  })), /* @__PURE__ */ React.createElement(FadeIn, null, /* @__PURE__ */ React.createElement(import_react14.Box, {
    w: "20vw",
    h: "20vh",
    mt: "2px",
    color: colorMode === "light" ? "gray.500" : "gray.800",
    borderLeft: "1px",
    borderBottom: "2px",
    borderRadius: "0 0 0 1rem"
  })), /* @__PURE__ */ React.createElement(FadeIn, null, /* @__PURE__ */ React.createElement(import_react14.Box, {
    w: "10vw",
    h: "20vh",
    mt: "20vh",
    mr: "10vw",
    color: colorMode === "light" ? "gray.500" : "gray.800",
    borderRight: "2px",
    borderTop: "2px",
    borderRadius: "0 1rem 0 0"
  }))), /* @__PURE__ */ React.createElement(import_react14.SimpleGrid, {
    columns: 4,
    spacing: 0
  }, /* @__PURE__ */ React.createElement(import_react14.Box, {
    w: "20vw",
    h: "20vh",
    border: "1px",
    borderColor: "grey.800",
    shadow: "xl",
    dropShadow: "xl",
    rounded: "lg"
  }, /* @__PURE__ */ React.createElement(import_react14.Stack, {
    alignItems: "center",
    justifyItems: "center",
    textAlign: "center",
    spacing: 4,
    p: 4
  }, /* @__PURE__ */ React.createElement(import_react14.Heading, {
    fontSize: ["xl", "2xl", "3xl", "4xl"]
  }, "Moderation"), /* @__PURE__ */ React.createElement(import_react14.Text, null, "Ban, mute, kick, warn. Y'know, the usual."), /* @__PURE__ */ React.createElement(import_react14.Switch, null))), /* @__PURE__ */ React.createElement(import_react14.Box, null), /* @__PURE__ */ React.createElement(import_react14.Box, null), /* @__PURE__ */ React.createElement(import_react14.Box, {
    w: "20vw",
    h: "20vh",
    border: "1px",
    borderColor: "grey.800",
    shadow: "xl",
    dropShadow: "xl",
    rounded: "lg"
  }, /* @__PURE__ */ React.createElement(import_react14.Stack, {
    alignItems: "center",
    justifyItems: "center",
    textAlign: "center",
    spacing: 4,
    p: 4
  }, /* @__PURE__ */ React.createElement(import_react14.Heading, {
    fontSize: ["xl", "2xl", "3xl", "4xl"]
  }, "Music"), /* @__PURE__ */ React.createElement(import_react14.Text, null, "Play music, 24/7 radios, Podcasts and more."), /* @__PURE__ */ React.createElement(import_react14.Switch, null)))), /* @__PURE__ */ React.createElement(import_react14.SimpleGrid, {
    columns: 4,
    spacing: 0
  }, /* @__PURE__ */ React.createElement(Vertical, {
    thickness: 1,
    height: 80,
    props: { mr: "15vw" }
  }), /* @__PURE__ */ React.createElement(import_react14.Box, null), /* @__PURE__ */ React.createElement(import_react14.Box, null), /* @__PURE__ */ React.createElement(Vertical, {
    thickness: 1,
    height: 80,
    props: { ml: "15vw" }
  })), /* @__PURE__ */ React.createElement(import_react14.SimpleGrid, {
    columns: 4,
    spacing: 0
  }, /* @__PURE__ */ React.createElement(import_react14.Box, {
    w: "20vw",
    h: "20vh",
    border: "1px",
    borderColor: "grey.800",
    shadow: "xl",
    dropShadow: "xl",
    rounded: "lg"
  }, /* @__PURE__ */ React.createElement(import_react14.Stack, {
    alignItems: "center",
    justifyItems: "center",
    textAlign: "center",
    spacing: 4,
    p: 4
  }, /* @__PURE__ */ React.createElement(import_react14.Heading, {
    fontSize: ["xl", "2xl", "3xl", "4xl"]
  }, "Utilities"), /* @__PURE__ */ React.createElement(import_react14.Text, null, "Useful tools that don't fit in anywhere else."), /* @__PURE__ */ React.createElement(import_react14.Switch, null))), /* @__PURE__ */ React.createElement(import_react14.Box, null), /* @__PURE__ */ React.createElement("div", null), /* @__PURE__ */ React.createElement(import_react14.Box, {
    w: "20vw",
    h: "20vh",
    border: "1px",
    borderColor: "grey.800",
    shadow: "xl",
    dropShadow: "xl",
    rounded: "lg"
  }, /* @__PURE__ */ React.createElement(import_react14.Stack, {
    alignItems: "center",
    justifyItems: "center",
    textAlign: "center",
    spacing: 4,
    p: 4
  }, /* @__PURE__ */ React.createElement(import_react14.Heading, {
    fontSize: ["xl", "2xl", "3xl", "4xl"]
  }, "Economy"), /* @__PURE__ */ React.createElement(import_react14.Text, null, "Create an economy, a store and a lot more!"), /* @__PURE__ */ React.createElement(import_react14.Switch, null)))), /* @__PURE__ */ React.createElement(import_react14.SimpleGrid, {
    columns: 4,
    spacing: 0
  }, /* @__PURE__ */ React.createElement(Vertical, {
    thickness: 1,
    height: 80,
    props: { mr: "15vw" }
  }), /* @__PURE__ */ React.createElement(import_react14.Box, null), /* @__PURE__ */ React.createElement(import_react14.Box, null), /* @__PURE__ */ React.createElement(Vertical, {
    thickness: 1,
    height: 80,
    props: { ml: "15vw" }
  })), /* @__PURE__ */ React.createElement(import_react14.SimpleGrid, {
    columns: 4,
    spacing: 0
  }, /* @__PURE__ */ React.createElement(import_react14.Box, {
    w: "20vw",
    h: "20vh",
    border: "1px",
    borderColor: "grey.800",
    shadow: "xl",
    dropShadow: "xl",
    rounded: "lg"
  }, /* @__PURE__ */ React.createElement(import_react14.Stack, {
    alignItems: "center",
    justifyItems: "center",
    textAlign: "center",
    spacing: 4,
    p: 4
  }, /* @__PURE__ */ React.createElement(import_react14.Heading, {
    fontSize: ["xl", "2xl", "3xl", "4xl"]
  }, "Management"), /* @__PURE__ */ React.createElement(import_react14.Text, null, "Easily manage and edit your server."), /* @__PURE__ */ React.createElement(import_react14.Switch, null))), /* @__PURE__ */ React.createElement(import_react14.Box, null), /* @__PURE__ */ React.createElement(import_react14.Box, null), /* @__PURE__ */ React.createElement(import_react14.Box, {
    w: "20vw",
    h: "20vh",
    border: "1px",
    borderColor: "grey.800",
    shadow: "xl",
    dropShadow: "xl",
    rounded: "lg"
  }, /* @__PURE__ */ React.createElement(import_react14.Stack, {
    alignItems: "center",
    justifyItems: "center",
    textAlign: "center",
    spacing: 4,
    p: 4
  }, /* @__PURE__ */ React.createElement(import_react14.Heading, {
    fontSize: ["xl", "2xl", "3xl", "4xl"]
  }, "Fun"), /* @__PURE__ */ React.createElement(import_react14.Text, null, "Commands that aim to make your server lively."), /* @__PURE__ */ React.createElement(import_react14.Switch, null)))), /* @__PURE__ */ React.createElement(import_react14.SimpleGrid, {
    columns: 4,
    spacing: 0
  }, /* @__PURE__ */ React.createElement(import_react14.Box, {
    w: "10vw",
    h: "20vh",
    mt: "2px",
    ml: "10vw",
    borderLeft: "2px",
    borderBottom: "2px",
    color: colorMode === "light" ? "gray.500" : "gray.800",
    borderRadius: "0 0 0 1rem"
  }), /* @__PURE__ */ React.createElement(import_react14.Box, {
    w: "20vw",
    h: "30vh",
    mt: "20vh",
    borderRight: "1px",
    borderTop: "2px",
    color: colorMode === "light" ? "gray.500" : "gray.800"
  }), /* @__PURE__ */ React.createElement(import_react14.Box, {
    w: "20vw",
    h: "30vh",
    mt: "20vh",
    color: colorMode === "light" ? "gray.500" : "gray.800",
    borderLeft: "1px",
    borderTop: "2px"
  }), /* @__PURE__ */ React.createElement(import_react14.Box, {
    w: "10vw",
    h: "20vh",
    mt: "2px",
    mr: "10vw",
    color: colorMode === "light" ? "gray.500" : "gray.800",
    borderRight: "2px",
    borderBottom: "2px",
    borderRadius: "0 0 1rem 0"
  })), /* @__PURE__ */ React.createElement(Icon, {
    icon: /* @__PURE__ */ React.createElement(import_cg.CgShapeCircle, {
      color: colorMode === "light" ? "var(--chakra-colors-gray-500)" : "var(--chakra-colors-gray-800)"
    })
  })));
}

// components/Database/Database.tsx
var import_react15 = require("@chakra-ui/react");
var import_fa2 = require("react-icons/fa");
function Database() {
  const { colorMode } = (0, import_react15.useColorMode)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react15.Center, null, /* @__PURE__ */ React.createElement(import_react15.Stack, {
    alignItems: "center",
    textAlign: "center",
    spacing: 2,
    p: 8
  }, /* @__PURE__ */ React.createElement(FinalSlideFade, null, /* @__PURE__ */ React.createElement(import_react15.Box, {
    width: "30vw"
  }, /* @__PURE__ */ React.createElement(import_react15.Heading, {
    fontSize: "6xl"
  }, "CookieDB"), /* @__PURE__ */ React.createElement(import_react15.Text, {
    fontSize: "lg"
  }, "With the power of a PostgreSQL database, all of Cookie's data is stored and locked away in a secure and safe environment allowing you focus more on your community. All requests are routed through Prisma, the Intuitive Database Client for TypeScript and Node.js to allow for less database hassle."))))), /* @__PURE__ */ React.createElement(import_react15.Center, null, /* @__PURE__ */ React.createElement(import_react15.Stack, null, /* @__PURE__ */ React.createElement(Vertical, {
    height: 300,
    thickness: 1
  }), " ", /* @__PURE__ */ React.createElement(import_react15.Box, {
    bg: colorMode === "dark" ? "#010101" : "#fafafa",
    w: "128px",
    h: "128px",
    dropShadow: "xl",
    shadow: "xl",
    border: "1px",
    borderColor: "gray.800",
    p: 8
  }, /* @__PURE__ */ React.createElement(import_fa2.FaDatabase, {
    size: "64px"
  })))));
}

// route:E:\GitHub\cookie.tygr.dev\app\routes\index.tsx
function RandHeading() {
  const [update, setUpdate] = (0, import_react17.useState)(false);
  const [type, setType] = (0, import_react17.useState)(0);
  (0, import_react17.useEffect)(() => {
    let newType = type;
    while (newType === type) {
      newType = Math.floor(Math.random() * 3);
    }
    setType(newType);
    setTimeout(() => {
      setUpdate(!update);
    }, 3e3);
  }, [update]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, type === 0 && /* @__PURE__ */ React.createElement(import_react16.Heading, {
    fontSize: "7xl",
    bgGradient: "linear(to-r, blue.500, purple.500, pink.500)",
    bgClip: "text"
  }, "communities."), type === 1 && /* @__PURE__ */ React.createElement(import_react16.Heading, {
    fontSize: "7xl",
    bgGradient: "linear(to-r, blue.500, purple.500, pink.500)",
    bgClip: "text"
  }, "groups."), type === 2 && /* @__PURE__ */ React.createElement(import_react16.Heading, {
    fontSize: "7xl",
    bgGradient: "linear(to-r, blue.500, purple.500, pink.500)",
    bgClip: "text"
  }, "large servers."));
}
function Index() {
  const { colorMode } = (0, import_react16.useColorMode)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(import_react16.Stack, {
    alignItems: "center",
    mt: "20vh",
    spacing: 8,
    px: ["8vw", "8vw", "15vw", "15vw"]
  }, /* @__PURE__ */ React.createElement(import_react16.Box, null, /* @__PURE__ */ React.createElement(Icon, {
    icon: /* @__PURE__ */ React.createElement(import_cg2.CgShapeCircle, {
      color: colorMode === "light" ? "var(--chakra-colors-gray-500)" : "var(--chakra-colors-gray-800)"
    })
  }), /* @__PURE__ */ React.createElement(Vertical, {
    thickness: 1,
    height: 40
  })), /* @__PURE__ */ React.createElement(import_react16.SlideFade, {
    in: true,
    transition: {
      enter: { duration: 0.4, delay: 0.5 }
    }
  }, /* @__PURE__ */ React.createElement(import_react16.Heading, {
    fontSize: "7xl",
    textAlign: "center"
  }, "A perfect all-in-one ", /* @__PURE__ */ React.createElement("br", null), " Discord bot for", /* @__PURE__ */ React.createElement(RandHeading, null))), /* @__PURE__ */ React.createElement(import_react16.SlideFade, {
    in: true,
    transition: {
      enter: { duration: 0.4, delay: 0.7 }
    }
  }, /* @__PURE__ */ React.createElement(import_react16.Text, {
    fontWeight: "normal"
  }, "Powered by Open Source, Enriched by the community, Licenced with MIT.")), /* @__PURE__ */ React.createElement(import_react16.Box, null, /* @__PURE__ */ React.createElement(Vertical, {
    thickness: 1,
    height: 300
  }), /* @__PURE__ */ React.createElement(Icon, {
    icon: /* @__PURE__ */ React.createElement(import_cg2.CgShapeCircle, {
      color: colorMode === "light" ? "var(--chakra-colors-gray-500)" : "var(--chakra-colors-gray-800)"
    })
  }))), /* @__PURE__ */ React.createElement(Modules, null), /* @__PURE__ */ React.createElement(Database, null)));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "fea5d4d1", "entry": { "module": "/build/entry.client-NZNEXNQE.js", "imports": ["/build/_shared/chunk-QCLBX4WB.js", "/build/_shared/chunk-LUFR3G6G.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-PNQBV3DQ.js", "imports": ["/build/_shared/chunk-FGC6MDOM.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-HX4ULAVK.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-FEA5D4D1.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
