import { createContext, useState } from "react";

const Auth = createContext();

export default function Context({ children }) {
    const [navbar, setNavBar] = useState(false);

    const parent = {
        navbar,
        setNavBar
    };

    return (
        <Auth.Provider value={parent}>
            {children}
        </Auth.Provider>
    );
}

export { Auth };
