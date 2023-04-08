import React, { useState, useEffect, lazy, Suspense } from "react";
import { useUnityContext } from "react-unity-webgl";

const Unity = lazy(() => import("react-unity-webgl"));

export default function Game() {
    const [loading, setLoading] = useState(true);
    const { unityProvider } = useUnityContext({
        loaderUrl: "build/rummy.loader.js",
        dataUrl: "build/rummy.data",
        frameworkUrl: "build/rummy.framework.js",
        codeUrl: "build/rummy.wasm"
    });

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            {loading ? (
                <div  style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "red", color: "white" }}>Loading... Please wait.</div>
            ) : (
                <Suspense fallback={<div>Loading...</div>}>
                    <Unity
                        unityProvider={unityProvider}
                        style={{ width: "100wh", height: "100vh" }}
                    />
                </Suspense>
            )}
        </>
    );
}
