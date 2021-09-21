import React from 'react';

const Layout = ({children}) => {
    return (
        <div >
            {children}
            <style global jsx>{`
                html,
                body,
                body > div:first-child,
                div#__next,
                div#__next > div {
                    height: 100%;
                    margin: 0;
                }
            `}</style>
        </div>
    )
}

export default Layout;