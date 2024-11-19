import { Unity, useUnityContext } from "react-unity-webgl";

export const UnityWebgl = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/game/happy-harvest.loader.js",
    dataUrl: "/game/happy-harvest.data.br",
    frameworkUrl: "/game/happy-harvest.framework.js.br",
    codeUrl: "/game/happy-harvest.wasm.br",
  });

  return <Unity unityProvider={unityProvider} style={{ width: "100%", height: "100%" }} />;
};
