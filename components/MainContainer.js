import React from 'react';
import A from "./A";
import Head from "next/head";

const MainContainer = ({keywords, children}) => {
    return (
        <>
            <Head>
                <meta keywords={"lordever, nextjs, " + keywords}/>
                <title>Main page</title>
            </Head>
            <div className="navbar">
                <A href="/" text="Main"/>
                <A href="/users" text="User list"/>
            </div>
            <div>{children}</div>

            <style jsx>
                {`
                    .navbar {
                        background-color: orange;
                        padding: 15px;
                    }
                `}
            </style>
        </>
    );
};

export default MainContainer;
